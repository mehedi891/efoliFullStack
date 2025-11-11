import { useNavigation } from "react-router";
import { ContactEmailTemplate } from "../component/contactpage/contactEmailTemplate/contactEmailTemplate";
import Contactpage from "../component/contactpage/Contactpage";
import { createTransport } from "nodemailer";
import ElegantFloatingText from "../component/Loader/ElegantFloatingText";

export function meta() {
  return [
    { title: "Contact us" },
    { name: "description", content: "Contact us page" },
  ];
}
const Contact = () => {
  const navigation = useNavigation();
  return (navigation.state === "loading" ?
    <div className="h-lvh w-lvw bg-blue-50 flex items-center justify-center">
      <ElegantFloatingText text={"Loading..."} />
    </div>
    :
    <Contactpage />
  )
}

export default Contact

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  // console.log({host:process.env.SMTP_HOST, port:process.env.SMTP_PORT, secure:true, auth:{user:process.env.SMTP_USER, pass:process.env.SMTP_PASS}});


  const mailer = createTransport({
    service: "gmail",
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    const sendMail = await mailer.sendMail({
      from: `${data?.name} <${data?.email}>`,
      to: process.env.SMTP_USER,
      replyTo: data?.email,
      subject: "New Contact Submission from Efoli Website",
      //html: ContactEmailTemplate(data),

      text:`
        Name: ${data?.name}
        Company: ${data?.company}
        Email: ${data?.email}
        Service: ${data?.service}
        Message: ${data?.message}
      `
    });
    console.log('sendEMail:', sendMail);
    if (sendMail?.accepted?.length > 0) {
      return {
        success: true,
        message: "Form submitted successfully.We will get back to you soon."
      }
    }
  } catch (error) {
    return {
      success: false,
      message: "Something went wrong. Please try again later."
    }
  }


  return {
    success: true,
    message: "Form submitted successfully.We will get back to you soon.",
  };
};
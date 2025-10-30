import { ContactEmailTemplate } from "../component/contactpage/contactEmailTemplate/contactEmailTemplate";
import Contactpage from "../component/contactpage/Contactpage";
import nodemailer from "nodemailer";

export function meta() {
  return [
    { title: "Contact us" },
    { name: "description", content: "Contact us page" },
  ];
}
const Contact = () => {
  return (
    <Contactpage />
  )
}

export default Contact

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  // console.log({host:process.env.SMTP_HOST, port:process.env.SMTP_PORT, secure:true, auth:{user:process.env.SMTP_USER, pass:process.env.SMTP_PASS}});


  const mailer = nodemailer.createTransport({
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
      from: data?.email,
      to: "mehedi@efoli.com",
      subject: "New Contact Submission from Efoli Website",
      html: ContactEmailTemplate(data),
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
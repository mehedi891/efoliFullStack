import cHero from "./contactHero.webp";
import Form from "../../Form/Form";

const ContactHero = () => {
 

  return (
    <section
      style={{ backgroundImage: `url(${cHero})` }}
      className="py-20 text-white bg-cover bg-center"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex max-w-[100%] items-start gap-2 lg:gap-20 flex-wrap">
          <div className="flex flex-col gap-2 max-w-[520px]">
            <h1 className="text-7xl/[1.125] font-bold font-display tracking-[-3.2px]">
              Let’s <br /> Collaborate
            </h1>
            <p className="text-2xl/[1.67]">
              Contact us to discuss business opportunities, or just to say hello.
              Use the form or send us an email at{" "}
              <a href="mailto:info@efoli.com" className="underline">
                info@efoli.com
              </a>.
            </p>
          </div>

         <Form
         fClass=""
         />

          
        </div>
      </div>

    </section>
  );
};

export default ContactHero;

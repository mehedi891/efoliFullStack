import { useForm } from "react-hook-form";
import cHero from "./contactHero.webp";
import { useFetcher } from "react-router";
import FormsubmitSuccessModal from "../FormsubmitSuccessModal/FormsubmitSuccessModal";
import { useEffect, useState } from "react";

const ContactHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const fetcher = useFetcher();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isDirty, isSubmitting }
  } = useForm({
    defaultValues: {
      name: "",
      company: "",
      email: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = (data) => {
    //console.log("Form data:", data);
    fetcher.submit(data, { method: "post", action: "/contact-us" });
    reset();
  };

  useEffect(()=>{
    if(fetcher?.data?.success && fetcher?.data?.message){
      setIsModalOpen(true);
    }
  },[fetcher?.data?.success, fetcher?.data?.message]);

  

  const service = watch("service");
  const isPlaceholder = service === "";

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

          <form onSubmit={handleSubmit(onSubmit)} className="md:max-w-[640px] flex flex-col gap-5 lg:gap-15 max-w-full w-full">

            <div>
              <label

                className="text-xl after:content-['*'] after:ml-1 after:text-red-500"
              >
                What is your name?
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full py-4 border-b border-gray-300 focus:outline-none text-2xl/[1.67] placeholder:text-gray-400"
                {...register("name", {
                  required: "Please enter your name",
                  minLength: { value: 2, message: "Min 2 characters" },
                  maxLength: { value: 150, message: "Max 150 characters" },
                })}
              />
              {errors.name && (
                <p className="mt-2 text-sm text-red-300">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="text-xl">What is your Company's name?</label>
              <input
                type="text"
                placeholder="Company"
                className="w-full py-4 border-b border-gray-300 focus:outline-none text-2xl/[1.67] placeholder:text-gray-400"
                {...register("company", {
                  minLength: { value: 2, message: "Min 2 characters" },
                  maxLength: { value: 150, message: "Max 150 characters" },
                })}
              />
              {errors.company && (
                <p className="mt-2 text-sm text-red-300">{errors.company.message}</p>
              )}
            </div>

            <div>
              <label

                className="text-xl after:content-['*'] after:ml-1 after:text-red-500"
              >
                What is your email address?
              </label>
              <input
                type="email"
                placeholder="Email address"
                className="w-full py-4 border-b border-gray-300 focus:outline-none text-2xl/[1.67] placeholder:text-gray-400"
                {...register("email", {
                  required: "Please enter your email address",
                  minLength: { value: 2, message: "Min 2 characters" },
                  maxLength: { value: 150, message: "Max 150 characters" },
                })}
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-300">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label

                className="text-xl after:content-['*'] after:ml-1 after:text-red-500"
              >
                Which service required?
              </label>
              <select
                id="service"
                defaultValue=""
                className={`w-full px-0 py-4 border-b focus:outline-none text-2xl/[1.67] cursor-pointer 
    ${errors.service ? 'border-red-500' : 'border-gray-300'}
    ${isPlaceholder ? 'text-[#9B9B9A]' : ''}`}
                {...register("service", { required: "Please select a service" })}
              >

                <option value="" disabled hidden>
                  Please select
                </option>
                <option value="technical">Technical</option>
                <option value="info">Information</option>
                <option value="other">Other</option>
              </select>
              {errors.service && (
                <p className="mt-2 text-sm text-red-300">{errors.service.message}</p>
              )}
            </div>

            <div>
              <label

                className="text-xl after:content-['*'] after:ml-1 after:text-red-500"
              >
                How can we help you?
              </label>
              <textarea
                placeholder="Describe your challenges"
                className="w-full  py-4 border-b border-gray-300 focus:outline-none text-2xl/[1.67] placeholder:text-gray-400"
                {...register("message", {
                  required: "Please enter your message",
                  minLength: { value: 2, message: "Min 2 characters" },
                  maxLength: { value: 1050, message: "Max 1050 characters" },
                })}
              />
              {errors.message && (
                <p className="mt-2 text-sm text-red-300">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={fetcher?.state !== "idle"}
              className="px-10 py-2 max-w-max bg-[#fff] text-[#020202] text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-60 cursor-pointer"
            >
              {fetcher?.state !== "idle" ? "Submitting..." : "Submit"}
            </button>

          </form>
        </div>
      </div>
     
      <FormsubmitSuccessModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </section>
  );
};

export default ContactHero;

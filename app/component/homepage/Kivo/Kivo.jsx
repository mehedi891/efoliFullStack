import { Link } from "react-router";
import kivoImg from "./kivo.webp";
import kivoBg from "./service_bg.webp";
import Button from "../../Button/Button";
const Kivo = () => {
  return (
    <section style={{ backgroundImage: `url(${kivoBg})` }} className={`py-8 bg-no-repeat bg-cover bg-center`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-14 sm:pb-20 lg:pb-24 mt-10">
        <h3 className="text-lg text-center text-blue-500 font-[600]">Our Service</h3>
        <h2 className="font-display md:text-5xl/[1.25] text-3xl font-bold text-center pt-3 line">KivoSupport - White Label <br /> Customer Support</h2>

        <div className="mt-15 flex md:flex-wrap flex-wrap-reverse gap-6 md:gap-0 items-center justify-between">
          <div className="max-w-[550px]">
            <div className="pb-7 border-b border-[#e5e5e5]">
              <h3 className="font-display text-lg md:text-2xl font-bold">24/7 Technical Support</h3>
              <p className="pt-2 text-[#4b5154]">Round-the-clock support for your Shopify app users. Never miss a bug report, question, or opportunity to impress.</p>
            </div>
            <div className="pb-7 border-b border-[#e5e5e5]">
              <h3 className="mt-6 font-display text-lg md:text-2xl font-bold">Live Chat, Call & Email Support</h3>
              <p className="pt-2 text-[#4b5154]">Round-the-clock support for your Shopify app users. Never miss a bug report, question, or opportunity to impress.</p>
            </div>
            <div className="pb-7">
              <h3 className="mt-6 font-display text-lg md:text-2xl font-bold">Documentation & Custom Support</h3>
              <p className="pt-2 text-[#4b5154]">We create helpful docs, FAQs, and tailored support flows that scale with your app and reduce tickets.</p>
            </div>

            <div className="mt-2">

              <Link
                to={"https://calendly.com/efolisupport"}
                target="_blank"
              >
                <Button
                  pClass="rounded-lg px-6 py-3.5 font-medium text-white shadow-sm bg-[#0D99FF]"
                  text1="Schedule a Call"
                  text2="Schedule a Call"
                />
              </Link>

            </div>

          </div>

          <div className="max-w-[600px]">
            <img className="object-cover" src={kivoImg} alt="Multivariants" />
          </div>

        </div>


      </div>
    </section>
  )
}

export default Kivo
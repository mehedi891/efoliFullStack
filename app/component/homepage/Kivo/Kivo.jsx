import { Link } from "react-router";
import kivoImg from "./kivo.webp";
import kivoBg from "./service_bg.webp";
const Kivo = () => {
  return (
    <section  style={{ backgroundImage: `url(${kivoBg})` }} className={`py-8 bg-no-repeat bg-cover bg-center`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-14 sm:pb-20 lg:pb-24 mt-10">
        <h3 className="text-lg text-center text-blue-500 font-[600]">Our Service</h3>
        <h2 className="font-display text-5xl/normal font-bold text-center py-3 line">KivoSupport - white label <br /> customer support</h2>

        <div className="mt-8 flex flex-wrap items-center justify-between">
          <div className="max-w-[550px]">
            <div className="pb-5 border-b border-[#e5e5e5]">
              <h3 className="font-display text-2xl font-bold">24/7 Technical Support</h3>
              <p className="pt-2">Round-the-clock support for your Shopify app users. Never miss a bug report, question, or opportunity to impress.</p>
            </div>
            <div className="pb-5 border-b border-[#e5e5e5]">
              <h3 className="mt-6 font-display text-2xl font-bold">Live Chat, Call & Email Support</h3>
              <p className="pt-2">Round-the-clock support for your Shopify app users. Never miss a bug report, question, or opportunity to impress.</p>
            </div>
            <div className="pb-5">
              <h3 className="mt-6 font-display text-2xl font-bold">Documentation & Custom Support</h3>
              <p className="pt-2">We create helpful docs, FAQs, and tailored support flows that scale with your app and reduce tickets.</p>
            </div>

            <div className="mt-6">
              <Link 
                to={"https://calendly.com/efolisupport"}
                target="_blank"
              >
                  <button
                  className="bg-[#0D99FF] py-3 px-4 rounded-2xl text-white font-[600] cursor-pointer hover:bg-[#0964a5] ease-in-out duration-500"
                  >Schedule a Call</button>
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
import AnimatedSection from "../AnimatedSection/AnimatedSection"
import Button from "../Button/Button"
import ButtonWithIcon from "../ButtonWithIcon/ButtonWithIcon"
import Timer3 from "./Countdown/Countdown"
import hero from "./hero.webp"
import mvIcon from "./mv_icon.png";
import pbIcon from "./pbLogo.png";
import drIcon from "./drLogo.png";
import emIcon from "./emLogo.png";
import pb_demo from "./pb.webp";
import dr_demo from "./dr.webp";
import mv_demo from "./mv_demo.png";
import em_demo from "./emDemo.webp";
import currveBg from "./sectionBg.png"
import { Link } from "react-router";
const Offerpage = () => {
  return (
    <>
      <section className="">
        <div className="grid ">
          <img src={hero} alt="Offerpage Hero" className="w-full h-auto col-start-1 row-start-1" />
          <div className="col-start-1 row-start-1 z-10 place-self-center pt-100">
            <Timer3 durationDays={30} persistKey="bfcm-countdown" />
            <Button
              text1="Explore Our Products"
              text2="Explore Our Products"
              pClass="bg-[#0D99FF] py-4.5 px-7 text-[#fff] rounded-lg mt-10 mb-10 mx-auto block shadow-md text-xl"
            />
          </div>
        </div>

        <div>
          <img src={currveBg} alt="Section" className="w-full h-auto" />
        </div>
      </section>

      <section className="bg-[#0D0827] py-30">
        <AnimatedSection>
          <div id="efProducts" className="mx-auto max-w-7xl px-4 md:px-0 ">
            <h2 className="font-display md:text-5xl text-3xl text-[#fff] font-bold text-center pt-2 md:mb-20 mb-10">Dominate Black Friday with the <br /> Power of eFoli</h2>

            <div className="mb-7 flex md:flex-wrap flex-wrap-reverse items-center justify-between shadow-lg p-10 rounded-2xl bg-linear-to-r from-[#fff] to-[#f2fbfa] transition ease-in duration-300 hover:scale-105 hover:cursor-pointer hover-drop-shadow-2xl">
              <div className="max-w-[550px]">
                <div className="flex items-center gap-2">
                  <img src={mvIcon} alt="Multivariants" className="md:max-w-[42px] max-w-[35px] h-auto" />
                  <h4 className="md:text-2xl text-xl text-[#13181E] font-bold font-display">MultiVariants ‑ Bulk Order</h4>
                </div>
                <div className="mt-6 mb-4 text-[#13181E]">
                  <h4 className="text-lg text-[#13181E] font-medium mb-6">Black Friday Offer: <span className="text-xl font-bold">Get 30% Off</span></h4>
                  <p className="font-semibold">Top Features:</p>
                  <ul className="mt-2 pl-5 space-y-2 list-disc">
                    <li><span className="font-semibold">Grid & List Layouts:</span> Let customers add multiple variants to the cart in one click.</li>
                    <li><span className="font-semibold"> Min/Max Quantity Control: </span>Enforce order limits for precise wholesale management..</li>
                    <li><span className="font-semibold">Mix & Match Bundles:</span> Allow customers to combine variants easily.</li>
                    <li><span className="font-semibold">Live Inventory Display: </span>Show in-stock and out-of-stock badges in real time.</li>
                  </ul>
                </div>

                <Link to={"https://multivariants.com"} target="_blank" >
                  <Button
                    text1="👉 Get the Offer"
                    text2="👉 Get the Offer"
                    pClass="bg-[#0D99FF] py-3.5 px-6 text-[#fff] rounded-lg block shadow-md"
                  />
                </Link>




              </div>

              <div className="max-w-[500px]">
                <img className="object-cover" src={mv_demo} alt="Multivariants" />
              </div>

            </div>

            <div className="flex flex-wrap gap-7 justify-between flex-col">

              <div className=" flex flex-row-reverse  gap-4 items-center justify-between shadow-lg p-8 rounded-2xl bg-linear-to-r from-[#fff] to-[#f2fbfa] max-w-full md:max-w-[100%]
          transition ease-in duration-300 hover:scale-105 hover:cursor-pointer hover-drop-shadow-2xl flex-1
          ">
                <div className="max-w-[550px]">
                  <div className="flex items-center gap-2">
                    <img src={drIcon} alt="Multivariants" className="md:max-w-[42px] max-w-[35px] h-auto" />
                    <h4 className="md:text-2xl text-xl text-[#13181E] font-bold font-display">DiscountRay ‑ B2B Custom Pricing</h4>
                  </div>
                  <div className="mt-6 mb-4 text-[#13181E]">
                    <h4 className="text-lg text-[#13181E] font-medium mb-6">Black Friday Offer: <span className="text-xl font-bold">Get 30% Off</span></h4>
                    <p className="font-semibold">Top Features:</p>
                    <ul className="mt-2 pl-5 space-y-2 list-disc">
                      <li><span className="font-semibold">Tiered & Quantity Discounts: </span>Tiered & Quantity Discounts: Reward bulk buyers automatically.</li>
                      <li><span className="font-semibold">Personalized Pricing Rules:</span> Target offers by customer, region, or tags.</li>
                      <li><span className="font-semibold">Bundle Pricing: </span>Combine products for progressive savings.</li>
                      <li><span className="font-semibold">Scheduled Campaigns: </span>Launch and manage promotions in advance.</li>
                    </ul>
                  </div>

                  <Link to={"https://discountray.com"} target="_blank" >
                    <Button
                      text1="👉 Get the Offer"
                      text2="👉 Get the Offer"
                      pClass="bg-[#0D99FF] py-3.5 px-6 text-[#fff] rounded-lg block shadow-md"
                    />
                  </Link>
                </div>

                <div className="max-w-[600px]">
                  <img className="object-cover" src={dr_demo} alt="Multivariants" />
                </div>

              </div>

              <div className=" flex gap-4 items-center justify-between shadow-lg p-8 rounded-2xl bg-linear-to-r from-[#fff] to-[#f2fbfa] max-w-full md:max-w-[100%] flex-1
          transition ease-in duration-300 hover:scale-105 hover:cursor-pointer hover-drop-shadow-2xl 
          ">
                <div className="max-w-[550px]">
                  <div className="flex items-center gap-2">
                    <img src={pbIcon} alt="Multivariants" className="md:max-w-[42px] max-w-[35px] h-auto rounded-sm" />
                    <h4 className="md:text-2xl text-xl text-[#13181E] font-bold font-display">Push Bundle ‑ Build a Box</h4>
                  </div>
                  <div className="mt-6 mb-4 text-[#13181E]">
                    <h4 className="text-lg text-[#13181E] font-medium mb-6">Black Friday Offer: <span className="text-xl font-bold">Get 30% Off</span></h4>
                    <p className="font-semibold">Top Features:</p>
                    <ul className="mt-2 pl-5 space-y-2 list-disc">
                      <li><span className="font-semibold"> Mix & Match Bundles: </span>Combine products or variants into one box.</li>
                      <li><span className="font-semibold">Volume Discounts:</span> Encourage higher purchases with automatic savings.</li>
                      <li><span className="font-semibold"> Cross-Sell Offers: </span>Suggest related items directly in bundles.</li>
                      <li><span className="font-semibold">Custom Layouts: </span>Choose from grid, list, or box views to match your theme.</li>
                    </ul>
                  </div>

                  <Link to={"https://pushbundle.com"} target="_blank" >
                    <Button
                      text1="👉 Get the Offer"
                      text2="👉 Get the Offer"
                      pClass="bg-[#0D99FF] py-3.5 px-6 text-[#fff] rounded-lg block shadow-md"
                    />
                  </Link>
                </div>

                <div className="max-w-[550px]">
                  <img className="object-cover" src={pb_demo} alt="Multivariants" />
                </div>

              </div>



            </div>

            <div className="mt-7 flex flex-row-reverse items-center justify-between shadow-2xl p-8 rounded-2xl bg-linear-to-r from-[#fff] to-[#f2fbfa]
        transition ease-in duration-300 hover:scale-105 hover:cursor-pointer hover-drop-shadow-2xl
        ">
              <div className="max-w-[550px]">
                <div className="flex items-center gap-2">
                  <img src={emIcon} alt="EmbedUp" className="md:max-w-[42px] max-w-[35px] h-auto" />
                  <h4 className="md:text-2xl text-xl text-[#13181E] font-bold font-display">Embedup - sell anywherer</h4>
                </div>
                <div className="mt-6 mb-4 text-[#13181E]">
                  <h4 className="text-lg text-[#13181E] font-medium mb-6">Black Friday Offer: <span className="text-xl font-bold">Get 30% Off</span></h4>
                  <p className="font-semibold">Top Features:</p>
                  <ul className="mt-2 pl-5 space-y-2 list-disc">
                    <li><span className="font-semibold">Embed Products or Collections: </span> Add shoppable sections to any webpage.</li>
                    <li><span className="font-semibold">Customizable Design:</span> Match your site’s style with flexible layouts and CTAs.</li>
                    <li><span className="font-semibold">Real-Time Sync: </span>Keep pricing, stock, and product data always updated.</li>
                    <li><span className="font-semibold">Multi-Store Checkout:</span> Let shoppers buy single or multiple items instantly.</li>
                  </ul>
                </div>

                <Link to={"https://embedup.com"} target="_blank" >
                  <Button
                    text1="👉 Get the Offer"
                    text2="👉 Get the Offer"
                    pClass="bg-[#0D99FF] py-3.5 px-6 text-[#fff] rounded-lg block shadow-md"
                  />
                </Link>
              </div>

              <div className="max-w-[600px]">
                <img className="object-cover" src={em_demo} alt="EmbedUp" />
              </div>

            </div>

          </div>
        </AnimatedSection>
      </section>

    </>
  )
}

export default Offerpage
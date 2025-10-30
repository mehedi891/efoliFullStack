import bg_gradient from "./bg_gradient.webp";
import mvIcon from "./mv_icon.png";
import pbIcon from "./pbLogo.png";
import drIcon from "./drLogo.png";
import emIcon from "./emLogo.png";
import pb_demo from "./pb.webp";
import dr_demo from "./dr.webp";
import mv_demo from "./mv_demo.webp";
import em_demo from "./emDemo.webp";
import { Link } from "react-router";

const Innovation = () => {

  return (
    <section style={{ backgroundImage: `url(${bg_gradient})` }} className={`py-8 bg-no-repeat bg-cover bg-center`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-14 sm:pb-20 lg:pb-24 mt-10">
        <h3 className="text-lg text-center text-blue-500 font-[600]">Products</h3>
        <h2 className="font-display text-5xl font-bold text-center py-3">Our innovative shopify apps</h2>

        <div className="my-5 flex flex-wrap items-center justify-between shadow-lg p-8 rounded-2xl bg-linear-to-r from-[#fff] to-[#f2fbfa]">
          <div className="max-w-[550px]">
            <div className="flex items-center gap-2">
              <img src={mvIcon} alt="Multivariants" className="max-w-[42px] h-auto" />
              <h4 className="text-2xl text-[#13181E] font-bold font-display">MultiVariants ‑ Bulk Order</h4>
            </div>
            <p className="text-base/[1.75] text-[#4B5154] py-4">Privilege your clients with one-click bulk order placing system, apply business rules and win more sales with MultiVariants.</p>
            <Link to={"https://multivariants.com"} target="_blank" className="flex text-base font-[600] items-center gap-2 border-b max-w-max">
              <p>Go to product</p>
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.7525 3.97035L2.0955 12.6274L0.673004 11.2049L9.33004 2.54786H1.69981V0.536133H12.7643V11.6006H10.7525V3.97035Z" fill="#13181E" />
              </svg>
            </Link>
          </div>

          <div className="max-w-[400px]">
            <img className="object-cover" src={mv_demo} alt="Multivariants" />
          </div>

        </div>

        <div className="flex flex-wrap gap-5 justify-between">

          <div className=" flex flex-wrap flex-col-reverse gap-4 items-center justify-between shadow-lg p-8 rounded-2xl bg-linear-to-r from-[#fff] to-[#f2fbfa] max-w-[603px]">
            <div className="max-w-[550px]">
              <div className="flex items-center gap-2">
                <img src={pbIcon} alt="Multivariants" className="max-w-[42px] h-auto rounded-sm" />
                <h4 className="text-2xl text-[#13181E] font-bold font-display">Push Bundle ‑ Build a Box</h4>
              </div>
              <p className="text-base/[1.75] text-[#4B5154] py-4">Privilege your clients with one-click bulk order placing system, apply business rules and win more sales with MultiVariants.</p>
              <Link to={"https://pushbundle.com"} target="_blank" className="flex text-base font-[600] items-center gap-2 border-b max-w-max">
                <p>Go to product</p>
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.7525 3.97035L2.0955 12.6274L0.673004 11.2049L9.33004 2.54786H1.69981V0.536133H12.7643V11.6006H10.7525V3.97035Z" fill="#13181E" />
                </svg>
              </Link>
            </div>

            <div className="max-w-[400px]">
              <img className="object-cover" src={pb_demo} alt="Multivariants" />
            </div>

          </div>

          <div className=" flex flex-wrap flex-col-reverse gap-4 items-center justify-between shadow-lg p-8 rounded-2xl bg-linear-to-r from-[#fff] to-[#f2fbfa] max-w-[603px]">
            <div className="max-w-[550px]">
              <div className="flex items-center gap-2">
                <img src={drIcon} alt="Multivariants" className="max-w-[42px] h-auto" />
                <h4 className="text-2xl text-[#13181E] font-bold font-display">DiscountRay ‑ B2B Custom Pricing</h4>
              </div>
              <p className="text-base/[1.75] text-[#4B5154]  py-4">Privilege your clients with one-click bulk order placing system, apply business rules and win more sales with MultiVariants.</p>
              <Link to={"https://discountray.com"} target="_blank" className="flex text-base font-[600] items-center gap-2 border-b max-w-max">
                <p>Go to product</p>
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.7525 3.97035L2.0955 12.6274L0.673004 11.2049L9.33004 2.54786H1.69981V0.536133H12.7643V11.6006H10.7525V3.97035Z" fill="#13181E" />
                </svg>
              </Link>
            </div>

            <div className="max-w-[400px]">
              <img className="object-cover" src={dr_demo} alt="Multivariants" />
            </div>

          </div>

        </div>

        <div className="my-5 flex flex-wrap items-center justify-between shadow-2xl p-8 rounded-2xl bg-linear-to-r from-[#fff] to-[#f2fbfa]">
          <div className="max-w-[550px]">
            <div className="flex items-center gap-2">
              <img src={emIcon} alt="EmbedUp" className="max-w-[42px] h-auto" />
              <h4 className="text-2xl text-[#13181E] font-bold font-display">Embedup - sell anywherer</h4>
            </div>
            <p className="text-base/[1.75] text-[#4B5154] py-4">Turn any website or blog into a sales channel in minutes. Embed products on WordPress, Wix, Webflow, Squarespace & more.</p>
            <Link to={"https://embedup.com"} target="_blank" className="flex text-base font-[600] items-center gap-2 border-b max-w-max">
              <p>Go to product</p>
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.7525 3.97035L2.0955 12.6274L0.673004 11.2049L9.33004 2.54786H1.69981V0.536133H12.7643V11.6006H10.7525V3.97035Z" fill="#13181E" />
              </svg>
            </Link>
          </div>

          <div className="max-w-[400px]">
            <img className="object-cover" src={em_demo} alt="EmbedUp" />
          </div>

        </div>

      </div>

    </section>
  )
}

export default Innovation


// #f2fbfa
import footerBg from "./footerBg.webp";
import ctaBg from "./ctaBg.webp";
import logo from "./footerLogo.png";
import partner from "./partner.png";
import basis from "./basis.png";
import { Link } from "react-router";

const Footer = ({isDark}) => {
  return (
    <footer style={!isDark ? { backgroundImage: `url(${footerBg})` } : undefined} className={`relative ${isDark ? 'pt-20 mt-10 bg-[#010A1E] text-white' : 'mt-30 text-[#13181E]'}`}>

      <div style={{ backgroundImage: `url(${ctaBg})` }} className={`py-24 bg-no-repeat bg-cover bg-center max-w-7xl mx-auto rounded-2xl ${isDark ? 'static' : 'absolute'} top-[-120px] left-0 right-0 px-6`}>
        <div className="max-w-6xl mx-auto flex  items-center justify-evenly gap-6">
          <div className="max-w-[400px]">
            <h3 className="text-6xl font-display font-bold text-white pb-3">Let's Make <br /> a Real Impact</h3>
            <a href="mailto:info@efoli.com" className="text-[18px] text-white">info@efoli.com</a>
          </div>
          <div className="max-w-[410px]">
            <p className="text-base text-white pb-7">Mission to help fast-growing start-ups and creative enterprises to achieve their goals faster.</p>
            <Link>
              <button className="px-4 py-2 bg-white text-[#0D99FF] font-semibold rounded-md hover:bg-gray-200 transition ease-in-out duration-300 cursor-pointer">
                Let’s Discuss
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className={`max-w-7xl mx-auto ${isDark ? 'pt-20' : 'pt-80'} pb-10 flex justify-between px-6 gap-10 flex-wrap lg:flex-nowrap items-start`}>
        <div className="max-w-lg">
          <img src={logo} alt="eFoli" className="max-w-[100px] object-contain" />
          <p className="text-[18px]/[1.7]  pt-5 pb-7">Crafting B2B eCommerce Solutions, Empowering Success EFOLI is a Bangladeshi software company with 15+ years of experience, specializing in cutting-edge solutions for eCommerce businesses.</p>
          <div className="flex items-center gap-3">
            <img src={partner} alt="eFoli" className="max-w-[200px] object-contain" />
            <img src={basis} alt="eFoli" className="max-w-[120px] object-contain ml-5" />
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold font-display mb-5">Company</h3>
          <ul className="text-[18px]/[1.7] ">
            <li className="mb-3"><Link to="/">Home</Link></li>
            <li className="mb-3"><Link to="/">Work</Link></li>
            <li className="mb-3"><Link to="/">Services</Link></li>
            <li className="mb-3"><Link to="/">About Us</Link></li>
            <li className="mb-3"><Link to="/">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold font-display mb-5">Products</h3>
          <ul className="text-[18px]/[1.7] ">
            <li className="mb-3"><Link to="https://multivariants.com" target="_blak">MultiVariants</Link></li>
            <li className="mb-3"><Link to="https://discountray.com" target="_blak">DiscountRay</Link></li>
            <li className="mb-3"><Link to="https://pushbundle.com" target="_blak">Push Bundle</Link></li>
            <li className="mb-3"><Link to="https://embedup.com" target="_blak">EmbedUp</Link></li>
            <li className="mb-3"><Link to="https://kivosupport.com" target="_blak">Kivo Support</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold font-display mb-5">Follow</h3>
          <ul className="text-[18px]/[1.7] ">
            <li className="mb-3"><Link to="https://www.facebook.com/eFoli.llc" target="_blak">Facebook</Link></li>
            <li className="mb-3"><Link to="https://www.linkedin.com/company/efoli" target="_blak">Linkedin</Link></li>
            <li className="mb-3"><Link to="/" target="_blak">Twitter</Link></li>
            <li className="mb-3"><Link to="/" target="_blak">Reddit</Link></li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto py-5">
        <p className="text-xl">©eFoli 2011 - 2025. All rights reserved</p>
      </div>

    </footer>
  )
}

export default Footer
import { Outlet, useMatches } from "react-router"
import Navbar from "../component/Navbar/Navbar"
import Footer from "../component/Footer/Footer"


const Layout = () => {
  const matches = useMatches();
  const darkFooter = matches.some(m => m.handle?.darkFooter === true);
  const darkHeader = matches.some(m => m.handle?.darkHeader === true);
  const isBannerHide = matches.some(m => m.handle?.isBannerHide === true);
  return (
    <div>
      <Navbar
        parentClassName={
          darkHeader
            ? "bg-[#0A0C00]"
            : "bg-white/90 backdrop-blur border-b border-gray-100"
        }
        linkClassName={
          darkHeader
            ? "text-white"
            : "text-[#4b5154]"
        }
        isDark={darkHeader}
      />
      <Outlet />
      <Footer
        isDark={darkFooter}
        isBannerHide={isBannerHide }

      />
    </div>
  )
}

export default Layout
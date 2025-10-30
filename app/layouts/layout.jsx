import { Outlet, useMatches } from "react-router"
import Navbar from "../component/Navbar/Navbar"
import Footer from "../component/Footer/Footer"


const Layout = () => {
   const matches = useMatches();
  const darkFooter = matches.some(m => m.handle?.darkFooter === true);
  const darkHeader = matches.some(m => m.handle?.darkHeader === true);
  return (
    <div>
      <Navbar
      parentClassName={
            darkHeader
              ? "bg-black/90"
              : "bg-white/90 backdrop-blur border-b border-gray-100"
          }
      linkClassName={
            darkHeader
              ? "text-white"
              : "text-[#4b5154]"
          }
      />
      <Outlet/>
      <Footer
      isDark={darkFooter}

      />
      </div>
  )
}

export default Layout
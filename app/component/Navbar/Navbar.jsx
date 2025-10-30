import { useState } from "react";
import { NavLink } from "react-router";
import logo from "./logo.png";


const navLinks = [
  { name: "Home", href: "/", end: true },
  { name: "About Us", href: "/about-us/" },
  { name: "Blog", href: "/blog" },
  { name: "Career", href: "/career/" },
  { name: "Services", href: "/services/" },
  { name: "Contact Us", href: "/contact-us/" },
];

const base =
  "group relative text-[16px] transition-colors";
const idle =
  "hover:text-[#1d74bf]";
const active =
  "text-[#1d74bf]";

const linkClass = (isActive) => [base, isActive ? active : idle].join(" ");



const Navbar = ({parentClassName,linkClassName}) => {
  const [open, setOpen] = useState(false);

  return (
    <header className={`sticky top-0 z-50 ${parentClassName}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <img src={logo} alt="EFOLI, LLC" className="h-12 w-12" />
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-10">
            {navLinks.map((l) => (
              <li key={l.name}>
                <NavLink
                  to={l.href}
                  end={l.end}
                  className={({ isActive }) => linkClass(isActive)+ " "+linkClassName}
                >
                  {({ isActive }) => (
                    <>
                      {l.name}
                      <span
                        className={[
                          "pointer-events-none absolute inset-x-0 -bottom-1 h-[2px] rounded bg-[#1d74bf]",
                          "origin-center transition-transform duration-200 ease-out",
                          isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                        ].join(" ")}
                      />
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <a
              href="/products"
              className="inline-flex items-center rounded-lg px-4 py-2 text-white shadow-sm
                         bg-[#0D99FF] hover:opacity-90
                         focus:outline-none focus:ring-2 focus:ring-[#1d74bf]/30 transition"
            >
              Try Our Products
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((s) => !s)}
            aria-label="Toggle menu"
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 hover:bg-gray-50"
          >
            <svg className={`h-5 w-5 transition-transform ${open ? "rotate-90" : ""} ${linkClassName}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M18 6L6 18M6 6l12 12" /> : <>
                <path d="M3 6h18" /><path d="M3 12h18" /><path d="M3 18h18" />
              </>}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile sheet */}
      <div className={`lg:hidden overflow-hidden border-t border-gray-100 transition-[max-height] duration-300 ${open ? "max-h-96" : "max-h-0"}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3">
          <ul className="space-y-1">
            {navLinks.map((l) => (
              <li key={l.name}>
                <NavLink to={l.href} end={l.end} onClick={() => setOpen(false)}>
                  {({ isActive }) => (
                    <div
                      className={[
                        "group flex items-center justify-between rounded-lg px-3 py-2 transition-colors",
                        "text-[16px]",
                        isActive
                          ? "text-[#1d74bf] bg-[#1d74bf]/5"
                          : `${linkClassName} hover:text-[#1d74bf] hover:bg-gray-50`,
                      ].join(" ")}
                    >
                      <span className="relative">
                        {l.name}
                        <span
                          className={[
                            "pointer-events-none absolute left-0 right-0 -bottom-1 h-[2px] rounded bg-[#1d74bf]",
                            "origin-left transition-transform duration-200 ease-out",
                            // 👇 start hidden unless active; show on hover via group
                            isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                          ].join(" ")}
                        />
                      </span>

                      <svg
                        className="h-4 w-4 opacity-60 group-hover:opacity-100 "
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </div>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>


          <div className="pt-3">
            <a
              href="/products"
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center rounded-xl px-4 py-2 text-white shadow-sm
                         bg-gradient-to-r from-[#0D99FF] to-[#1098f7] hover:opacity-90
                         focus:outline-none focus:ring-2 focus:ring-[#1d74bf]/30 transition"
            >
              Try Our Products
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar

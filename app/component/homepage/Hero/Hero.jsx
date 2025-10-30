import { Link } from "react-router";
import team from "./team.png";
import meeting from "./meeting.png";
import single_person from "./imges_single.webp";
import personImg from "./personImg.png";
import ava1 from "./avatar1.png";
import t1 from "./t1.png";
import t2 from "./t2.png";
import t3 from "./t3.png";
import t4 from "./t4.png";
import { motion } from "motion/react"
import CounterText from "../../CounterText/CounterText";
import LogoMarquee from "../../LogoMarquee/LogoMarquee";


export default function Hero() {
  return (
    <section className="relative">
      {/* Top copy */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-12 sm:pt-16 lg:pt-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-50 px-4 py-1.5 text-sm font-medium text-amber-800 shadow-sm">
          <span aria-hidden>✨</span>
          <span>Award winning shopify partner</span>
        </div>

        {/* Heading */}
        <h1 className="font-display mt-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold  leading-[1.1] text-gray-900 tracking-[-2.3px]">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="block">B2B eCommerce Solutions</motion.span>
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="block">Empowering Success.</motion.span>
        </h1>

        {/* Subcopy */}
        <p className="mx-auto mt-5 max-w-3xl text-base sm:text-lg text-gray-600">
          EFOLI is a globally connected software company headquartered in Bangladesh, with
          <br className="hidden sm:block" />
          <span className="font-semibold"> 15+ years </span>
          of experience delivering cutting-edge B2B eCommerce solutions.
        </p>

        {/* CTAs */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/products"
            className="inline-flex items-center rounded-xl px-5 py-3 font-medium text-white shadow-sm
                       bg-[#0D99FF] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#0D99FF]/30"
          >
            Try Our Products
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-xl px-5 py-3 font-medium
                       text-[#0D99FF] border border-[#0D99FF] hover:bg-[#1d74bf]/5
                       focus:outline-none focus:ring-2 focus:ring-[#1d74bf]/20"
          >
            Request Info
          </Link>
        </div>
      </div>

      {/* Image/Stats Mosaic */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-14 sm:pb-20 lg:pb-24 mt-10">

        <div className="flex gap-3">

          <div className="flex flex-col gap-3 items-end">
            <div className="lg:col-span-4 row-span-1 rounded-tl-[64px] bg-[#F8CFE5] p-8 sm:p-10 max-w-2/3">
              <div className="h-full flex flex-col justify-center">
                <div className="text-6xl font-bold text-gray-900 flex items-baseline">
                  <CounterText
                    start={0}
                    end={15}
                    duration={1500}
                    className="w-[59px]"
                    once={true}
                  />
                  +</div>
                <div className="mt-2 text-gray-700 font-medium">Years In Business</div>
              </div>
            </div>

            <div className="lg:col-span-4 row-span-1 overflow-hidden rounded-tr-[64px]">
              <img
                src={meeting}
                alt="Team collaborating"
                className="h-full w-full object-cover"
              />
            </div>




          </div>

          <div className="flex flex-col gap-3">
            <div className="lg:col-span-5 row-span-2 overflow-hidden rounded-tr-[64px] place-self-start">
              <img
                src={team}
                alt="Team collaborating"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex gap-2">
              <div className="lg:col-span-4 row-span-1 overflow-hidden rounded-tr-[64px] rounded-tl-[64px]">
                <img
                  src={personImg}
                  alt="Team collaborating"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="lg:col-span-3 rounded-tl-[64px] bg-[#D7FBEA] p-8 sm:p-10">
                <div className="h-full flex flex-col justify-center">
                  <div className="text-6xl font-bold text-gray-900 flex items-center">
                    <CounterText
                      start={10}
                      end={180}
                      duration={1500}
                      className="w-[100px]"
                      once={true}
                    />
                    +</div>
                  <div className="mt-2 text-gray-700 font-medium">Countries Reached</div>
                </div>
              </div>
            </div>

          </div>

          <div className="flex flex-col gap-3">
            <div className="lg:col-span-3 row-span-1 rounded-tr-[64px] bg-[#FDF0CC] p-8 sm:p-10">
              <div className="flex items-center -space-x-3">
                {/* Avatars — replace with your assets */}
                {[ava1, ava1, ava1, ava1].map((src, i) => (
                  <img key={i} src={src} alt="" className="h-10 w-10 rounded-full ring-2 ring-white object-cover" />
                ))}
              </div>
              <p className="mt-4 font-medium text-gray-900">
                Trusted by <span className="font-semibold">15k+ clients</span>
              </p>
              <div className="mt-2 flex items-center gap-1" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5" viewBox="0 0 24 24" fill="#f59e0b" aria-hidden="true">
                    <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            </div>
            <div className="lg:col-span-4 row-span-1 overflow-hidden rounded-lt-[64px] max-w-5/6">
              <img
                src={single_person}
                alt="Team collaborating"
                className="max-h-[490px]  object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* trusted customer */}

      {/* <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-14 sm:pb-20 lg:pb-24">
        <div>
            <h2 className="font-display text-lg text-center">Trusted by thousands of companies around the world</h2>
            <div className="flex flex-wrap py-6 gap-1 justify-center items-center">
                {[t1,t2,t3,t4,t1,t2,t3,t4,t1,t2,t3,t4].map((t,i)=> <img 
                key={i}
                src={t} 
                className="object-cover h-auto max-w-[180px]"
                />)

                }
            </div>
        </div>
      </div> */}

      <LogoMarquee
        images={[t1, t2, t3, t4, t1, t2, t3, t4]}
        slotWidth={180} 
        slotPad={16}
        logoHeight={48} 
        speedPx={90}     
        bg="#ffffff"
      />


    </section>
  );

}
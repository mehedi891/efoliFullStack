import aboutHero from './aboutHero.webp';
import { motion } from "motion/react"

const Hero = () => {
  return (
    <section className="bg-black/90 text-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-[980px] mx-auto flex flex-col gap-5 pb-60 pt-30">
          <h3 className="text-center text-[18px]">About Us</h3>
          <motion.h1
            className="text-center font-bold text-5xl sm:text-6xl lg:text-7xl font-display mt-3 leading-tight"
            initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            The all-in-one b2b solution <br /> to scale your business
          </motion.h1>

          <p className="text-center text-xl">We are adaptive and affable. You will find us like your own team in collaboration. We are committed to bringing your business success to the next elevation.</p>
        </div>
      </div>
      <div className='max-w-7xl mx-auto absolute bottom-[-75%] left-0 right-0'>
        <img className='object-contain' src={aboutHero} alt="About Us" />
      </div>
    </section>
  )
}

export default Hero
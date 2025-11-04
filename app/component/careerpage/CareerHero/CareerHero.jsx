import heroImg from "./aboutHero.webp";
const CareerHero = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto py-30">
        <h1 className="text-7xl/[1.138] text-[#13181E] font-bold font-display">Join our company and start <br /> your career journey</h1>
        <div className="mt-15 flex items-start">
          <img src={heroImg} alt="Career" loading="lazy" className="max-w-[100%] object-contain rounded-xl" />
          {/* <p className="flex items-center gap-4 min-w-min h-max text-[18px] whitespace-nowrap text-[#0f0f0f] rotate-90 translate-y-[190%]">
            <span>Scroll down</span>
            <svg className="rotate-90 rotate-x-180" width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.440264 19.4802C0.425383 19.4953 0.311593 19.9594 0.18749 20.5115C0.0633868 21.0636 -0.019187 21.5213 0.00386172 21.5287C0.0269796 21.536 0.401781 21.5931 0.836799 21.6555C1.71037 21.781 2.73032 22.0848 3.36821 22.4095C5.35621 23.4214 6.67255 25.237 7.01468 27.439L7.10182 27.9997L7.98003 27.9997L8.8583 27.9997L8.9417 27.4915C9.48809 24.1618 11.9232 21.9909 15.5674 21.5848C15.8054 21.5583 16 21.5266 16 21.5144C16 21.4021 15.5614 19.5413 15.5266 19.5062C15.5015 19.4807 15.2784 19.4996 15.031 19.5483C12.291 20.0867 10.0613 21.6285 9.12907 23.6292L8.90543 24.1091L8.88792 14.2402L8.8768 -7.48259e-07L7.09945 -5.98439e-07L7.08832 14.2562L7.07074 24.1019L6.77049 23.496C5.99161 21.9242 4.46375 20.6797 2.41297 19.9469C1.82872 19.7381 0.496744 19.4229 0.440264 19.4802Z" fill="#0F0F0F" />
            </svg>
          </p> */}
        </div>
      </div>
    </section>
  )
}

export default CareerHero
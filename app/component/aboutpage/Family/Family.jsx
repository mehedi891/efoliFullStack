import ceoImg from "./ceoJA.webp";
const Family = () => {
  return (
    <section className="mt-135 lg:mb-20 mb-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap lg:gap-40 gap-4">
          <div className="max-w-[850px]">
            <h2 className="text-5xl font-bold font-display">We are the eFoli Family</h2>
            <div className="flex flex-col gap-4 mt-4">
              <p className="lg:text-[18px]/[1.67] text-[#4B5154]">At eFoli, our journey began more than 10 years ago with a simple yet powerful mission—to create solutions that blend innovation, creativity, and real-world impact. Over the years, we’ve expanded our expertise across multiple industries, building a reputation for delivering value-driven results that help businesses grow and thrive.</p>
              <p className="lg:text-[18px]/[1.67] text-[#4B5154]">What makes eFoli unique is our people. We are a family of passionate professionals, designers, developers, and strategists who share a common vision: to transform challenges into opportunities. Whether it’s designing intuitive digital experiences, developing scalable SaaS products, or crafting business strategies, we approach every project with dedication, precision, and care.</p>
              <p className="lg:text-[18px]/[1.67] text-[#4B5154]">At eFoli, we don’t just look at the present—we design for the future.</p>
            </div>
          </div>

          <div className="max-w-[232px] flex flex-col gap-10 mt-10 lg:mt-0">
            <div>
              <h4 className="text-5xl lg:text-[58px] font-display font-bold pb-3 border-b border-[#13181E]">2014</h4>
              <span className="lg:text-xl mt-3 block">Founded</span>
            </div>

            <div>
              <h4 className="text-5xl lg:text-[58px] font-display font-bold pb-3 border-b border-[#13181E]">10k+</h4>
              <span className="lg:text-xl mt-3 block">Clients</span>
            </div>

            <div>
              <h4 className="text-5xl lg:text-[58px] font-display font-bold pb-3 border-b border-[#13181E]">30+</h4>
              <span className="lg:text-xl mt-3 block">Experts</span>
            </div>


          </div>
        </div>

        <div className="mt-5 lg:mt-30">
          <div className="flex items-center gap-3 flex-wrap lg:gap-24 bg-[#F1F5F9] rounded-[20px]">
            <img src={ceoImg} loading="lazy" alt="JA" className="object-contain max-h-[460px]" />
            <div className="max-w-[505px]">
              <h3 className="text-4xl/[1.38] text-[#13181E] tracking-[-0.72px] font-display font-semibold text-center">“Behind every feature is a real merchant, and behind every success is a team that listens and builds with care.”</h3>
              <p className="mt-4 text-center"><strong>Jahangir Alam</strong> / Founder & CEO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Family
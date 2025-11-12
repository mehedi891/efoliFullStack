import Button from "../../Button/Button";
import bgImg from "./sHero.webp";
import bgImg2 from "./serviceHeroBg2.webp";
const ServiceHero = () => {
  return (
    <section style={{ backgroundImage: `url(${bgImg})`, backgroundSize: "cover" }} className="md:py-15 py-10 text-white object-cover">
      <div className="max-w-7xl mx-auto md:py-15 py-0 md:px-0 px-4">
        <div className="flex flex-col gap-6 max-w-[980px]">
          <h1 className="font-display font-bold md:text-7xl/[1.13] text-3xl/[1.35]  md:tracking-[-2.16px]">Product Development &<br />  App Support Solutions</h1>
          <p className="md:text-xl/[1.70]">Our solutions are built for adaptability, ensuring seamless integration, faster iteration, and consistent reliability to meet evolving business goals. We combine deep technical expertise with a global standard of quality, innovation, and long-term partnership.</p>
          <Button
            pClass="bg-[#0D99FF] px-7 py-3 font-semibold rounded-lg mt-2.5 max-w-max"
            text1="Discuss your project"
            text2="Discuss your project"
          />
        </div>
      </div>
    </section>
  )
}

export default ServiceHero
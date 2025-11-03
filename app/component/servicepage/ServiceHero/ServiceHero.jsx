import Button from "../../Button/Button";
import bgImg from "./serviceHeroBg.webp";
const ServiceHero = () => {
  return (
    <section style={{ backgroundImage: `url(${bgImg})` }} className="py-15 text-white">
      <div className="max-w-7xl mx-auto py-15">
        <div className="flex flex-col gap-6 max-w-[980px]">
          <h1 className="font-display font-bold text-7xl/[1.13] tracking-[-2.16px]">Product Development &<br />  App Support Solutions</h1>
          <p className="text-xl/[1.70]">Our solutions are engineered for flexibility enabling seamless integration, rapid iteration, and sustained reliability to support evolving business needs and user expectations. Our solutions blend tech expertise with a commitment to global standards of quality and innovation.</p>
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
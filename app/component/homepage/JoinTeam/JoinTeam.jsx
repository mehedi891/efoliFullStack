import { Link } from "react-router"
import careerImg1 from "./1.webp"
import careerImg2 from "./2.webp"
import careerImg3 from "./3.webp"

const JoinTeam = () => {
  return (
    <section className="pt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-14 sm:pb-20 lg:pb-24 pt-10">
        <div className="flex items-end justify-between">
          <h2 className="md:text-5xl/snug text-3xl max-w-[637px] font-bold font-display">A culture of creativity, collaboration, and growth</h2>
          <Link to="/career" className="flex text-base font-[600] items-center gap-2 border-b max-w-max">
            <p>Join The Team</p>
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.7525 3.97035L2.0955 12.6274L0.673004 11.2049L9.33004 2.54786H1.69981V0.536133H12.7643V11.6006H10.7525V3.97035Z" fill="#13181E" />
            </svg>
          </Link>
        </div>

        <div className="md:grid flex flex-wrap grid-cols-12 gap-6 mt-8 [grid-template-areas:'A_A_A_A_B_B_B_C_C_C_C_C''A_A_A_A_D_D_D_D_D_E_E_E']">

          <div className="[grid-area:A] hidden md:block">
            <img src={careerImg1} alt="Career Image 1" loading="lazy" className="h-full w-full object-fill rounded-2xl" />
          </div>
          <div className="[grid-area:B] hidden md:block">
            <div className="rounded-[20px] bg-[#D7FBEA] p-8 sm:p-10 w-full h-full">
              <div className="h-full flex flex-col justify-between">
                <div className="mt-2 text-gray-700 font-medium">Team Members</div>
                <div className="text-6xl font-bold text-gray-900">30+</div>
              </div>
            </div>
          </div>
          <div className="[grid-area:C]">
            <img src={careerImg2} alt="Career Image 2" loading="lazy" className="rounded-2xl w-full h-full" />
          </div>
          <div className="[grid-area:D] hidden md:block">
            <img src={careerImg3} alt="Career Image 3" loading="lazy" className="  h-full rounded-2xl" />
          </div>
          <div className="[grid-area:E]">
            <div className="rounded-[20px] bg-[#FFD4EE] p-10 sm:p-10 w-full h-full">
              <div className="h-full flex flex-col justify-between">
                <div className="mt-2 text-[#6F3055] font-[600] text-xl font-display">Years In Business</div>
                <div className="text-6xl font-bold text-gray-900">15+</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default JoinTeam
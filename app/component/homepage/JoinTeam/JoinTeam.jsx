import { Link } from "react-router"
import careerImg1 from "./1.webp"
import careerImg2 from "./2.webp"
import careerImg3 from "./3.webp"

const JoinTeam = () => {
  return (
    <section className="pt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-14 sm:pb-20 lg:pb-24 pt-10">
        <div className="flex items-end justify-between">
          <h2 className="text-5xl/snug max-w-[637px] font-bold font-display">A culture of creativity, collaboration, and growth</h2>
          <Link to="/career" className="flex text-base font-[600] items-center gap-2 border-b max-w-max">
            <p>Join The Team</p>
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.7525 3.97035L2.0955 12.6274L0.673004 11.2049L9.33004 2.54786H1.69981V0.536133H12.7643V11.6006H10.7525V3.97035Z" fill="#13181E" />
            </svg>
          </Link>
        </div>
        <div className="flex gap-5 mt-8">
          <div>
            <img src={careerImg1} alt="Career Image 1" loading="lazy" className="max-h-[601px] object-contain rounded-2xl" />
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex gap-5">

              <div className="rounded-xl bg-[#D7FBEA] p-8 sm:p-10">
                <div className="h-full flex flex-col justify-between">
                  <div className="mt-2 text-gray-700 font-medium">Team Members</div>
                  <div className="text-6xl font-bold text-gray-900">30+</div>
                </div>
              </div>

              <div>
                <img src={careerImg2} alt="Career Image 2" loading="lazy" className="max-h-[295px] object-contain rounded-2xl max-w-[558px]" />
              </div>

            </div>

            <div className="flex gap-5">
              <div>
                <img src={careerImg3} alt="Career Image 3" loading="lazy" className="max-h-[295px] object-contain max-w-[558px] rounded-2xl" />
              </div>

              <div className="rounded-xl bg-[#FFD4EE] p-2 sm:p-3">
                <div className="h-full flex flex-col justify-between">
                  <div className="mt-2 text-[#6F3055] font-[600] text-xl font-display">Years In Business</div>
                  <div className="text-6xl font-bold text-gray-900">15+</div>
                </div>
              </div>



            </div>
          </div>


          <div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default JoinTeam
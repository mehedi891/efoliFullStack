import { Link } from "react-router"
import Button from "../../Button/Button"

const Jobs = () => {
  const jobsArr = [
    {
      title: 'Technical Support Engineer',
      location: 'Dhaka, Bangladesh',
      date: '31 December, 2025',
      open: '10',
      applyLink: 'https://career.efoli.com/',
    },
    {
      title: 'Shopify Developer',
      location: 'Dhaka, Bangladesh',
      date: '31 December, 2025',
      open: '03',
      applyLink: 'https://career.efoli.com/',
    }
  ]
  return (
    <section>
      <div className="max-w-7xl mx-auto md:pb-30 pb-10 px-4">
        <h2 className="md:text-5xl/[1.192] text-3xl md:text-left text-center font-bold font-display">Find the Right Role<br /> Made for You</h2>
        <div className="mt-10 flex flex-col gap-5">

          {jobsArr.length > 0 && jobsArr.map((job, index) => (
            <div key={index} className={`flex  md:gap-6 gap-4 justify-between items-center text-[#13181E] pb-6 border-b border-[#c5c5c5] ${index === 0 ? 'pt-4 border-t' : ''}`}>
              <div className="flex flex-col gap-1">
                <h4 className="md:text-[22px]/[1.36] text-base font-bold font-display md:w-[284px] flex-1">{job.title}</h4>
                <p className="md:text-base text-sm">{job.location}</p>
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="md:text-[22px]/[1.36] text-base font-bold font-display">{job.date}</h4>
                <p className="md:text-base text-sm">Open roles: <strong>{job.open}</strong></p>
              </div>
              <div>


                <Link
                  to={job.applyLink}
                  target="_blank"
                >
                  <Button
                    pClass="bg-[#0D99FF] rounded-xl px-8 py-3 text-white cursor-pointer text-sm font-bold font-display"
                    text1="Apply"
                    text2="Apply"
                  />
                </Link>
              </div>
            </div>
          ))

          }
        </div>
      </div>
    </section>
  )
}

export default Jobs
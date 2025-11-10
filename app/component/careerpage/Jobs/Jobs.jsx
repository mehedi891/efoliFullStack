import { Link } from "react-router"
import Button from "../../Button/Button"

const Jobs = () => {
  const jobsArr = [
    {
      title: 'Content Marketing Executive',
      location: 'Mipur DOHS , Dhaka, Bangladesh',
      date: '31 December, 2024',
      open: '04',
      applyLink: 'https://efoli.com/jobs',
    },
    {
      title: 'Content Marketing Executive',
      location: 'Mipur DOHS , Dhaka, Bangladesh',
      date: '31 December, 2024',
      open: '40',
      applyLink: 'https://efoli.com/jobs',
    },
    {
      title: 'Content Marketing Executive',
      location: 'Mipur DOHS , Dhaka, Bangladesh',
      date: '31 December, 2024',
      open: '04',
      applyLink: 'https://efoli.com/jobs',
    },
    {
      title: 'Content Marketing Executive',
      location: 'Mipur DOHS , Dhaka, Bangladesh',
      date: '31 December, 2024',
      open: '04',
      applyLink: 'https://efoli.com/jobs',
    }
  ]
  return (
    <section>
      <div className="max-w-7xl mx-auto pb-30">
        <h2 className="text-5xl/[1.192] font-bold font-display">Current Opportunities <br /> Waiting For You</h2>
        <div className="mt-10 flex flex-col gap-5">

          {jobsArr.length > 0 && jobsArr.map((job, index) => (
            <div key={index} className={`flex  gap-5 justify-between items-center text-[#13181E] pb-4 border-b border-[#c5c5c5] ${index === 0 ? 'pt-4 border-t' : ''}`}>
              <div className="flex flex-col gap-1">
                <h4 className="text-[22px]/[1.36] font-bold font-display">{job.title}</h4>
                <p className="text-base">{job.location}</p>
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-[22px]/[1.36] font-bold font-display">{job.date}</h4>
                <p className="text-base">Open roles: <strong>{job.open}</strong></p>
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
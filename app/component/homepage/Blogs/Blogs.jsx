import { Link } from "react-router"
import blogImg1 from "./efoliBlog1.webp"
import blogImg2 from "./efoliBlog2.webp"
import blogImg3 from "./efoliBlog3.webp"
import ButtonWithIcon from "../../ButtonWithIcon/ButtonWithIcon"

const Blogs = () => {
  return (
    <section className="pt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-14 sm:pb-20 lg:pb-24 pt-10">
        <div className="flex items-end justify-between">
          <h2 className="md:text-5xl/snug text-3xl max-w-[500px] font-bold font-display">Latest Blog To Boost Your Productivity</h2>
          <Link to="/career">
            <ButtonWithIcon text1="View all Articles" text2="View all Articles" pClass="text-base font-semibold" />
          </Link>

        </div>
        <div className="pt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link>
            <article className="flex flex-col gap-2">
              <img src={blogImg1} alt="Blog 1" loading="lazy" className="max-h-[300px] mb-3 h-[240px] md:h-[300px] object-cover rounded-2xl max-w-[558px]" />
              <h3 className="font-display text-lg md:text-2xl font-bold text-[#13181E] line-clamp-2">From Shorelines to Smiles: Efoli’s Annual Gateway to Saint Martin</h3>
              <p className="text-base text-[#4B5154]">── February 6, 2025</p>
            </article>
          </Link>

          <Link>
            <article className="flex flex-col gap-2">
              <img src={blogImg2} alt="Blog 1" loading="lazy" className="max-h-[300px] mb-3 h-[240px] md:h-[300px] object-cover rounded-2xl max-w-[558px]" />
              <h3 className="font-display text-lg md:text-2xl font-bold text-[#13181E] line-clamp-2">10 Major Reasons Why Your eCommerce Store Fails And How To Solve It</h3>
              <p className="text-base text-[#4B5154]">── August 29, 2024</p>
            </article>
          </Link>

          <Link to={"/blog"}>
            <article className="flex flex-col gap-2">
              <img src={blogImg3} alt="Blog 1" loading="lazy" className="max-h-[300px] mb-3 h-[240px] md:h-[300px] object-cover rounded-2xl max-w-[558px]" />
              <h3 className="font-display text-lg md:text-2xl font-bold text-[#13181E] line-clamp-2">Building a Secure Storefront: How to Protect Your Business from Ecommerce Fraud</h3>
              <p className="text-base text-[#4B5154]">── August 22, 2024</p>
            </article>
          </Link>

        </div>
      </div>
    </section>
  )
}

export default Blogs
import { Link } from "react-router"
// import blogImg1 from "./efoliBlog1.webp"
// import blogImg2 from "./efoliBlog2.webp"
// import blogImg3 from "./efoliBlog3.webp"
import ButtonWithIcon from "../../ButtonWithIcon/ButtonWithIcon"
import AnimatedSection from "../../AnimatedSection/AnimatedSection"

const Blogs = ({ posts }) => {

  function formatWPDate(iso, locale = "en-US") {
    const d = new Date(iso);
    if (isNaN(d)) return "";
    return new Intl.DateTimeFormat(locale, { month: "long", day: "numeric", year: "numeric" }).format(d);
  }




  return (
    <section className="md:pt-10 pt-0">
      <AnimatedSection>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-14 sm:pb-10 md:pb-24 md:pt-10">
          <div className="flex items-end md:justify-between flex-wrap gap-4">
            <h2 className="md:text-5xl/snug text-3xl/snug text-left max-w-[500px] font-bold font-display">Discover Blogs That Help
              You Sell Smarter</h2>
            <Link to="https://efoli.com/blog/" target="_blank">
              <ButtonWithIcon text1="View all Articles" text2="View all Articles" pClass="text-base font-semibold" />
            </Link>

          </div>
          {posts && posts.length > 0 ? (
            <div className="pt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link key={post.id} to={post.link} target="_blank">
                  <article className="flex flex-col gap-2 group">
                    <img src={post._embedded["wp:featuredmedia"][0].source_url} alt="Blog 1" loading="lazy" className="max-h-[300px] mb-3 h-[240px] md:h-[300px] object-cover rounded-2xl max-w-[558px]
              transition ease-initial duration-600
              group-hover:scale-105
              group-hover:drop-shadow-2xl
              " />
                    <h3 className="font-display text-lg md:text-2xl font-bold text-[#13181E] line-clamp-2
                transition ease-initial duration-600 group-hover:text-[#0D99FF]
              ">{post.title.rendered}</h3>
                    <p className="text-base text-[#4B5154]">── {formatWPDate(post.date)}</p>
                  </article>
                </Link>
              ))
              }



            </div>
          ) :
            <div className="pt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* <Link>
                <article className="flex flex-col gap-2 group">
                  <img src={blogImg1} alt="Blog 1" loading="lazy" className="max-h-[300px] mb-3 h-[240px] md:h-[300px] object-cover rounded-2xl max-w-[558px]
              transition ease-initial duration-600
              group-hover:scale-105
              group-hover:drop-shadow-2xl
              " />
                  <h3 className="font-display text-lg md:text-2xl font-bold text-[#13181E] line-clamp-2
                transition ease-initial duration-600 group-hover:text-[#0D99FF]
              ">From Shorelines to Smiles: Efoli’s Annual Gateway to Saint Martin</h3>
                  <p className="text-base text-[#4B5154]">── February 6, 2025</p>
                </article>
              </Link>

              <Link>
                <article className="flex flex-col gap-2 group">
                  <img src={blogImg2} alt="Blog 1" loading="lazy" className="max-h-[300px] mb-3 h-[240px] md:h-[300px] object-cover rounded-2xl max-w-[558px]
               transition ease-initial duration-600
              group-hover:scale-105
              group-hover:drop-shadow-2xl
              " />
                  <h3 className="font-display text-lg md:text-2xl font-bold text-[#13181E] line-clamp-2
              transition ease-initial duration-600 group-hover:text-[#0D99FF]
              ">10 Major Reasons Why Your eCommerce Store Fails And How To Solve It</h3>
                  <p className="text-base text-[#4B5154]">── August 29, 2024</p>
                </article>
              </Link>

              <Link to={"/blog"}>
                <article className="flex flex-col gap-2 group">
                  <img src={blogImg3} alt="Blog 1" loading="lazy" className="max-h-[300px] mb-3 h-[240px] md:h-[300px] object-cover rounded-2xl max-w-[558px]
               transition ease-initial duration-600
              group-hover:scale-105
              group-hover:drop-shadow-2xl
              " />
                  <h3 className="font-display text-lg md:text-2xl font-bold text-[#13181E] line-clamp-2
              transition ease-initial duration-600 group-hover:text-[#0D99FF]
              ">Building a Secure Storefront: How to Protect Your Business from Ecommerce Fraud</h3>
                  <p className="text-base text-[#4B5154]">── August 22, 2024</p>
                </article>
              </Link> */}

              <h3 className="text-2xl font-medium font-display text-red-500">No blog posts found</h3>

            </div>
          }
        </div>
      </AnimatedSection>
    </section>
  )
}

export default Blogs
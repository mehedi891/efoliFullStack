import startImg from "./starIcon.svg";
import shopifyImg from "./shopifyImg.png";
import blurImg from "./blur.webp";
import { Link } from "react-router";
import { motion } from "motion/react";
import Button from "../../Button/Button";
const CustomerSuccess = () => {

  return (
    <section className="bg-[#F9FAFB] py-8 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-14 sm:pb-20 lg:pb-24 mt-10">
        <h3 className="text-lg text-center text-blue-500 font-[600]">Testimonials</h3>
        <h2 className="font-display text-3xl md:text-5xl/[1.1] font-bold text-center line mb-15 mt-2">Customer Success Stories</h2>

        {/* <div className="grid grid-cols-3 gap-6">
          <div className="space-y-3 py-7 px-6 bg-white rounded-xl max-h-max">
            <div className="flex items-center gap-2">
              {[startImg, startImg, startImg, startImg, startImg].map((imgsrc, i) => <img
                key={i}
                src={imgsrc}
                alt="Star"
                width={'24px'}
                height={'24px'}
              />)
              }
            </div>
            <p className="text-base">Phenomenal App and Phenomenal Team. It is very rare to come across developers that have built a very solid app and are willing to assist with even the smallest of tasks. Everything that EFOLI has done to help us launch our website with the functionality has been appreciated.</p>
            <div>
              <h5 className="text-xl font-display font-bold">Jessica Lane</h5>
              <p className="text-sm">Marketing Manager</p>
            </div>
          </div>

          <div className="space-y-3 py-7 px-6 bg-white rounded-xl max-h-max">
            <div className="flex items-center gap-2">
              {[startImg, startImg, startImg, startImg, startImg].map((imgsrc, i) => <img
                key={i}
                src={imgsrc}
                alt="Star"
                width={'24px'}
                height={'24px'}
              />)
              }
            </div>
            <p className="text-base">I just downloaded this app for my online shop to help facilitate wholesale ordering through my shopify and this app is exactly what I needed to create an easy experience for my retailers. Not to mention the customer service and live chat feature was extremely helpful in implementing what I needed and have a guided direction of how to get what I wanted done properly. It's really hard to learn whole new apps whenever trying something new on shopify but they made the process very easy.</p>
            <div>
              <h5 className="text-xl font-display font-bold">Jessica Lane</h5>
              <p className="text-sm">Marketing Manager</p>
            </div>
          </div>

          <div className="space-y-3 py-7 px-6 bg-white rounded-xl max-h-max">
            <div className="flex items-center gap-2">
              {[startImg, startImg, startImg, startImg, startImg].map((imgsrc, i) => <img
                key={i}
                src={imgsrc}
                alt="Star"
                width={'24px'}
                height={'24px'}
              />)
              }
            </div>
            <p className="text-base">Phenomenal App and Phenomenal Team. It is very rare to come across developers that have built a very solid app and are willing to assist with even the smallest of tasks. Everything that EFOLI has done to help us launch our website with the functionality has been appreciated.</p>
            <div>
              <h5 className="text-xl font-display font-bold">Jessica Lane</h5>
              <p className="text-sm">Marketing Manager</p>
            </div>
          </div>

          <div className="space-y-3 py-7 px-6 bg-white rounded-xl transform-y-2">
            <div className="flex items-center gap-2">
              {[startImg, startImg, startImg, startImg, startImg].map((imgsrc, i) => <img
                key={i}
                src={imgsrc}
                alt="Star"
                width={'24px'}
                height={'24px'}
              />)
              }
            </div>
            <p className="text-base">Phenomenal App and Phenomenal Team. It is very rare to come across developers that have built a very solid app and are willing to assist with even the smallest of tasks. Everything that EFOLI has done to help us launch our website with the functionality has been appreciated.</p>
            <div>
              <h5 className="text-xl font-display font-bold">Jessica Lane</h5>
              <p className="text-sm">Marketing Manager</p>
            </div>
          </div>

          <div className="space-y-3 py-7 px-6 bg-white rounded-xl">
            <div className="flex items-center gap-2">
              {[startImg, startImg, startImg, startImg, startImg].map((imgsrc, i) => <img
                key={i}
                src={imgsrc}
                alt="Star"
                width={'24px'}
                height={'24px'}
              />)
              }
            </div>
            <p className="text-base">Phenomenal App and Phenomenal Team. It is very rare to come across developers that have built a very solid app and are willing to assist with even the smallest of tasks. Everything that EFOLI has done to help us launch our website with the functionality has been appreciated.</p>
            <div>
              <h5 className="text-xl font-display font-bold">Jessica Lane</h5>
              <p className="text-sm">Marketing Manager</p>
            </div>
          </div>

          <div className="space-y-3 py-7 px-6 bg-white rounded-xl">
            <div className="flex items-center gap-2">
              {[startImg, startImg, startImg, startImg, startImg].map((imgsrc, i) => <img
                key={i}
                src={imgsrc}
                alt="Star"
                width={'24px'}
                height={'24px'}
              />)
              }
            </div>
            <p className="text-base">Phenomenal App and Phenomenal Team. It is very rare to come across developers that have built a very solid app and are willing to assist with even the smallest of tasks. Everything that EFOLI has done to help us launch our website with the functionality has been appreciated.</p>
            <div>
              <h5 className="text-xl font-display font-bold">Jessica Lane</h5>
              <p className="text-sm">Marketing Manager</p>
            </div>
          </div>


        </div> */}



        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:balance]">

          {/* CARD 1 */}
          <div className="mb-6 break-inside-avoid rounded-xl bg-white px-6 py-7">
            <div className="flex items-center gap-4 mb-3.5">
              <div className="rounded-full w-[50px] h-[50px] border border-[#e5e5e5] flex items-center justify-center">
                <img src={shopifyImg} className="w-6" alt="Shopify" />
              </div>
              <div className="flex flex-col gap-1.5">
                <h5 className="text-base font-display font-semibold text-[#13181E]">Jessica Lane</h5>
                <div className="flex items-center gap-2">
                  {[startImg, startImg, startImg, startImg, startImg].map((imgsrc, i) => <img
                    key={i}
                    src={imgsrc}
                    alt="Star"
                    width={'16px'}
                    height={'16px'}
                  />)
                  }
                </div>
              </div>
            </div>

            <p className="text-base/[1.75] text-[#4B5154]">Phenomenal App and Phenomenal Team. It is very rare to come across developers that have built a very solid app and are willing to assist with even the smallest of tasks. Everything that EFOLI has done to help us launch our website with the functionality has been appreciated.</p>

          </div>

          {/* CARD 2 */}
          <div className="mb-6 break-inside-avoid rounded-xl bg-white px-6 py-7">
            <div className="flex items-center gap-4 mb-3.5">
              <div className="rounded-full w-[50px] h-[50px] border border-[#e5e5e5] flex items-center justify-center">
                <img src={shopifyImg} className="w-6" alt="Shopify" />
              </div>
              <div className="flex flex-col gap-1.5">
                <h5 className="text-base font-display font-semibold text-[#13181E]">Jessica Lane</h5>
                <div className="flex items-center gap-2">
                  {[startImg, startImg, startImg, startImg, startImg].map((imgsrc, i) => <img
                    key={i}
                    src={imgsrc}
                    alt="Star"
                    width={'16px'}
                    height={'16px'}
                  />)
                  }
                </div>
              </div>
            </div>

            <p className="text-base/[1.75] text-[#4B5154]">Phenomenal App and Phenomenal Team. It is very rare to come across developers that have built a very solid app and are willing to assist with even the smallest of tasks. Everything that EFOLI has done to help us launch our website with the functionality has been appreciated.</p>
          </div>

          {/* CARD 3 */}
          <div className="mb-6 break-inside-avoid rounded-xl bg-white px-6 py-7">
            <div className="flex items-center gap-4 mb-3.5">
              <div className="rounded-full w-[50px] h-[50px] border border-[#e5e5e5] flex items-center justify-center">
                <img src={shopifyImg} className="w-6" alt="Shopify" />
              </div>
              <div className="flex flex-col gap-1.5">
                <h5 className="text-base font-display font-semibold text-[#13181E]">Jessica Lane</h5>
                <div className="flex items-center gap-2">
                  {[startImg, startImg, startImg, startImg, startImg].map((imgsrc, i) => <img
                    key={i}
                    src={imgsrc}
                    alt="Star"
                    width={'16px'}
                    height={'16px'}
                  />)
                  }
                </div>
              </div>
            </div>

            <p className="text-base/[1.75] text-[#4B5154]">
              Phenomenal App and Phenomenal Team. It is very rare to come across developers that have built a very solid app and are willing to assist with even the smallest of tasks. Everything that EFOLI has done to help us launch our website with the functionality has been appreciated.
            </p>

          </div>

          {/* CARD 4 */}
          <div className="mb-6 break-inside-avoid rounded-xl bg-white px-6 py-7">
            <div className="flex items-center gap-4 mb-3.5">
              <div className="rounded-full w-[50px] h-[50px] border border-[#e5e5e5] flex items-center justify-center">
                <img src={shopifyImg} className="w-6" alt="Shopify" />
              </div>
              <div className="flex flex-col gap-1.5">
                <h5 className="text-base font-display font-semibold text-[#13181E]">Jessica Lane</h5>
                <div className="flex items-center gap-2">
                  {[startImg, startImg, startImg, startImg, startImg].map((imgsrc, i) => <img
                    key={i}
                    src={imgsrc}
                    alt="Star"
                    width={'16px'}
                    height={'16px'}
                  />)
                  }
                </div>
              </div>
            </div>

            <p className="text-base/[1.75] text-[#4B5154]">I just downloaded this app for my online shop to help facilitate wholesale ordering through my shopify and this app is exactly what I needed to create an easy experience for my retailers. Not to mention the customer service and live chat feature was extremely helpful in implementing what I needed and have a guided direction of how to get what I wanted done properly. It's really hard to learn whole new apps whenever trying something new on shopify but they made the process very easy.</p>
          </div>

          {/* CARD 5 */}
          <div className="mb-6 break-inside-avoid rounded-xl bg-white px-6 py-7">
            <div className="flex items-center gap-4 mb-3.5">
              <div className="rounded-full w-[50px] h-[50px] border border-[#e5e5e5] flex items-center justify-center">
                <img src={shopifyImg} className="w-6" alt="Shopify" />
              </div>
              <div className="flex flex-col gap-1.5">
                <h5 className="text-base font-display font-semibold text-[#13181E]">Jessica Lane</h5>
                <div className="flex items-center gap-2">
                  {[startImg, startImg, startImg, startImg, startImg].map((imgsrc, i) => <img
                    key={i}
                    src={imgsrc}
                    alt="Star"
                    width={'16px'}
                    height={'16px'}
                  />)
                  }
                </div>
              </div>
            </div>

            <p className="text-base/[1.75] text-[#4B5154]">Phenomenal App and Phenomenal Team. It is very rare to come across developers that have built a very solid app and are willing to assist with even the smallest of tasks. Everything that EFOLI has done to help us launch our website with the functionality has been appreciated.</p>
          </div>

          {/* CARD 6 */}
          <div className="mb-6 break-inside-avoid rounded-xl bg-white px-6 py-7">
            <div className="flex items-center gap-4 mb-3.5">
              <div className="rounded-full w-[50px] h-[50px] border border-[#e5e5e5] flex items-center justify-center">
                <img src={shopifyImg} className="w-6" alt="Shopify" />
              </div>
              <div className="flex flex-col gap-1.5">
                <h5 className="text-base font-display font-semibold text-[#13181E]">Jessica Lane</h5>
                <div className="flex items-center gap-2">
                  {[startImg, startImg, startImg, startImg, startImg].map((imgsrc, i) => <img
                    key={i}
                    src={imgsrc}
                    alt="Star"
                    width={'16px'}
                    height={'16px'}
                  />)
                  }
                </div>
              </div>
            </div>

            <p className="text-base/[1.75] text-[#4B5154]">Phenomenal App and Phenomenal Team. It is very rare to come across developers that have built a very solid app and are willing to assist with even the smallest of tasks. Everything that EFOLI has done to help us launch our website with the functionality has been appreciated.</p>
          </div>

          <div className="mb-6 break-inside-avoid rounded-xl bg-white px-6 py-7">
            <div className="flex items-center gap-4 mb-3.5">
              <div className="rounded-full w-[50px] h-[50px] border border-[#e5e5e5] flex items-center justify-center">
                <img src={shopifyImg} className="w-6" alt="Shopify" />
              </div>
              <div className="flex flex-col gap-1.5">
                <h5 className="text-base font-display font-semibold text-[#13181E]">Jessica Lane</h5>
                <div className="flex items-center gap-2">
                  {[startImg, startImg, startImg, startImg, startImg].map((imgsrc, i) => <img
                    key={i}
                    src={imgsrc}
                    alt="Star"
                    width={'16px'}
                    height={'16px'}
                  />)
                  }
                </div>
              </div>
            </div>

            <p className="text-base/[1.75] text-[#4B5154]">Phenomenal App and Phenomenal Team. It is very rare to come across developers that have built a very solid app and are willing to assist with even the smallest of tasks. Everything that EFOLI has done to help us launch our website with the functionality has been appreciated.</p>
          </div>


          <div className="mb-6 break-inside-avoid rounded-xl bg-white px-6 py-7">
            <div className="flex items-center gap-4 mb-3.5">
              <div className="rounded-full w-[50px] h-[50px] border border-[#e5e5e5] flex items-center justify-center">
                <img src={shopifyImg} className="w-6" alt="Shopify" />
              </div>
              <div className="flex flex-col gap-1.5">
                <h5 className="text-base font-display font-semibold text-[#13181E]">Jessica Lane</h5>
                <div className="flex items-center gap-2">
                  {[startImg, startImg, startImg, startImg, startImg].map((imgsrc, i) => <img
                    key={i}
                    src={imgsrc}
                    alt="Star"
                    width={'16px'}
                    height={'16px'}
                  />)
                  }
                </div>
              </div>
            </div>
            <p className="text-base/[1.75] text-[#4B5154]">Phenomenal App and Phenomenal Team. It is very rare to come across developers that have built a very solid app and are willing to assist with even the smallest of tasks. Everything that EFOLI has done to help us launch our website with the functionality has been appreciated.</p>
          </div>



          <div className="mb-6 break-inside-avoid rounded-xl bg-white px-6 py-7">
            <div className="flex items-center gap-4 mb-3.5">
              <div className="rounded-full w-[50px] h-[50px] border border-[#e5e5e5] flex items-center justify-center">
                <img src={shopifyImg} className="w-6" alt="Shopify" />
              </div>
              <div className="flex flex-col gap-1.5">
                <h5 className="text-base font-display font-semibold text-[#13181E]">Jessica Lane</h5>
                <div className="flex items-center gap-2">
                  {[startImg, startImg, startImg, startImg, startImg].map((imgsrc, i) => <img
                    key={i}
                    src={imgsrc}
                    alt="Star"
                    width={'16px'}
                    height={'16px'}
                  />)
                  }
                </div>
              </div>
            </div>

            <p className="text-base/[1.75] text-[#4B5154]">Phenomenal App and Phenomenal Team. It is very rare to come across developers that have built a very solid app and are willing to assist with even the smallest of tasks. Everything that EFOLI has done to help us launch our website with the functionality has been appreciated.</p>
          </div>

        </div>

      </div>

      <div
      // bg-[linear-gradient(180deg,#0F172A00_0%,#0F172A33_25%,#0F172A1F_55%,#FFFFFFB3_85%,#FFFFFFFF_100%)]
        style={{backgroundImage: `url(${blurImg})`}}
        className="flex justify-center items-center absolute w-full  
             object-cover 
            bottom-[0px] h-[40vh]">


        <Link
          to="https://apps.shopify.com/multivariants/reviews?sort_by=newest"
          target="_blank"
          rel="noreferrer"
        >
          <Button
            pClass="rounded-lg bg-white px-6 py-3.5 font-semibold text-[#13181E]"
            text1="Meet our customers"
            text2="Meet our customers"
          />
        </Link>
      </div>

    </section>
  )
}

export default CustomerSuccess
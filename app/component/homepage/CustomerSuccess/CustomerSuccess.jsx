import startImg from "./starIcon.svg"
const CustomerSuccess = () => {
  return (
    <section className="bg-[#F9FAFB] py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-14 sm:pb-20 lg:pb-24 mt-10">
        <h3 className="text-lg text-center text-blue-500 font-[600]">Testimonials</h3>
        <h2 className="font-display text-5xl/normal font-bold text-center py-3 line">Customer success stories</h2>

        <div className="grid grid-cols-3 gap-6">
          <div className="space-y-3 py-7 px-6 bg-white rounded-xl row-span-1">
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

          <div className="space-y-3 py-7 px-6 bg-white rounded-xl row-span-1">
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

          <div className="space-y-3 py-7 px-6 bg-white rounded-xl row-span-1">
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


        </div>


      </div>
    </section>
  )
}

export default CustomerSuccess
import Generalfaq from "../../Generalfaq/Generalfaq"

const TextwithImage = () => {
  const faqsArr = [
    {
      id: 1,
      question: "Email, Chat & Ticket Coverage",
      answer: "Yes, we can work with wireframes or our existing designs based on your requirements."
    },
    {
      id: 2,
      question: "Tier 1 & Tier 2 Shopify-Savvy Agents",
      answer: "Yes, we can work with wireframes or our existing designs based on your requirements."
    },
    {
      id: 3,
      question: "Knowledge Base Creation",
      answer: "Yes, we can work with wireframes or our existing designs based on your requirements."
    },
    {
      id: 4,
      question: "Feedback Collection & QA",
      answer: "Yes, we can work with wireframes or our existing designs based on your requirements."
    },
    {
      id: 5,
      question: "Custom Time Zone / 24/7 Coverage",
      answer: "Yes, we can work with wireframes or our existing designs based on your requirements."
    }
  ]

  const faqsArr2 = [
    {
      id: 1,
      question: "Shopify App Development",
      answer: "Yes, we can work with wireframes or our existing designs based on your requirements."
    },
    {
      id: 2,
      question: "Shopify Theme Customization",
      answer: "Yes, we can work with wireframes or our existing designs based on your requirements."
    },
    {
      id: 3,
      question: "Shopify Store Setup",
      answer: "Yes, we can work with wireframes or our existing designs based on your requirements."
    },
    {
      id: 4,
      question: "Custom Page Design",
      answer: "Yes, we can work with wireframes or our existing designs based on your requirements."
    },
    {
      id: 5,
      question: "Custom Script & Coding",
      answer: "Yes, we can work with wireframes or our existing designs based on your requirements."
    }
  ]
  return (
    <section>
      <div className="max-w-7xl mx-auto py-30">
          <div className="flex items-start justify-between gap-7 sm:flex-wrap md:flex-nowrap md:gap-25 mb-25">
              <div className="md:w-[48%] w-full">
                <div className="h-[450px] w-[95%] bg-[#D9D9D9]"></div>
              </div>

              <div className="md:w-[48%] ">
                  <h4 className="text-3xl md:text-5xl font-bold font-display tracking-[-1.44px]">Customer Support</h4>
                  <p className="text-base md:text-lg/[1.55] text-[#4B5154] mb-7 mt-5">Real human, white-label 24/7 support teams trained in the Shopify ecosystem. We serve your merchants under your brand, so you can focus on growing your app.</p>

                  <Generalfaq
                   faqsArr={faqsArr}
                  />
              </div>
          </div>
         <div className="border border-[#e5e5e5]"></div>
          <div className="flex items-start justify-between gap-7 sm:flex-wrap md:flex-nowrap md:gap-25 mt-25">

              <div className="md:w-[48%] ">
                  <h4 className="text-3xl md:text-5xl font-bold font-display tracking-[-1.44px]">Development</h4>
                  <p className="text-base md:text-lg/[1.55] text-[#4B5154] mb-7 mt-5">Real human, white-label 24/7 support teams trained in the Shopify ecosystem. We serve your merchants under your brand, so you can focus on growing your app.</p>

                  <Generalfaq
                   faqsArr={faqsArr2}
                  />
              </div>

             <div className="md:w-[48%] w-full">
                <div className="h-[450px] w-[95%] bg-[#D9D9D9]"></div>
              </div>


          </div>
      </div>
    </section>
  )
}

export default TextwithImage

import Generalfaq from "../../Generalfaq/Generalfaq";

const Faq = () => {
  const faqsArr = [
    {
      id: 1,
      question: "What kind of roles does eFoli hire for?",
      answer: "We hire across multiple teams, including development, design, marketing, QA, customer success, and technical support. We value creativity, curiosity, and problem-solving over titles, so if you’re passionate about innovation, there’s a place for you here."
    },
    {
      id: 2,
      question: "Does eFoli offer remote or hybrid work opportunities?",
      answer: "Many of our team members work in hybrid setups."
    },
    {
      id: 3,
      question: "How can I partner with eFoli?",
      answer: "If you’re an agency, app developer, or tech collaborator, you can partner with us through product integrations, affiliate programs, or joint marketing initiatives. Simply reach out via partnership@efoli.com to start the conversation."
    },
    {
      id: 4,
      question: "What type of companies does eFoli typically work with?",
      answer: "We work with global eCommerce brands, SaaS businesses, and Shopify merchants, from startups to enterprise-level organizations, helping them scale with automation, personalization, and seamless user experiences."
    },
     {
      id: 5,
      question: "Why should I join or collaborate with eFoli?",
      answer: "eFoli isn’t just a workplace, it’s a community of innovators building tools that empower thousands of businesses worldwide. Whether you join the team or partner with us, you become part of a mission that’s shaping the future of digital commerce."
    }
     
  ];

 

  return (
    <section>
      <div className="max-w-7xl mx-auto md:pb-20 pb-0 text-[#13181E] md:px-0 px-4">
        <div className="flex flex-wrap justify-between">
          <h2 className="md:text-5xl/[1.192] text-3xl md:text-left text-center font-display font-bold md:max-w-[500px]  max-w-full md:flex-none flex-1 md:mb-0 mb-10">
            Frequently Asked <br />Questions
          </h2>

          {/* <div className="max-w-[800px] w-full flex flex-col gap-5">
            {faqsArr?.length > 0 &&
              faqsArr.map((faq, index) => {
                const open = showFaq === index;
                return (
                  <div
                    key={index}
                    className={`py-1 border-b ${index === 0 ? "border-t pt-5" : ""} border-[#e5e5e5]`}
                  >
                    <div
                      onClick={() => handleShowFaq(index)}
                      className="flex justify-between items-center cursor-pointer pb-4"
                    >
                      <h4 className="text-[22px] font-bold font-display">{faq?.question}</h4>
                      <svg
                        className={`${open ? "rotate-180" : ""} transition-transform duration-200`}
                        width="28" height="28" viewBox="0 0 28 28" fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M14.0007 15.3667L19.7755 9.59204L21.4254 11.242L14.0007 18.6666L6.57617 11.242L8.22608 9.59204L14.0007 15.3667Z" fill="#13181E" />
                      </svg>
                    </div>

                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0, y: -4 }}
                          animate={{ height: "auto", opacity: 1, y: 0 }}
                          exit={{ height: 0, opacity: 0, y: -4 }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <p className="text-base pb-2 max-w-[600px]">
                            {faq?.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
          </div> */}

          <Generalfaq faqsArr={faqsArr} fClass="max-w-[750px]" />
        </div>
      </div>
    </section>
  )
}

export default Faq
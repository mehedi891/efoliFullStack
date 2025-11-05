
import Generalfaq from "../../Generalfaq/Generalfaq";

const Faq = () => {
  const faqsArr = [
    {
      id: 1,
      question: "Can you work with wireframes or our existing designs?",
      answer: "Yes, we can work with wireframes or our existing designs based on your requirements."
    },
    {
      id: 2,
      question: "Can you work with wireframes or our existing designs?",
      answer: "Yes, we can work with wireframes or our existing designs based on your requirements."
    },
    {
      id: 3,
      question: "Can you work with wireframes or our existing designs?",
      answer: "Yes, we can work with wireframes or our existing designs based on your requirements."
    },
     {
      id: 4,
      question: "Can you work with wireframes or our existing designs?",
      answer: "Yes, we can work with wireframes or our existing designs based on your requirements."
    },
     {
      id: 5,
      question: "Can you work with wireframes or our existing designs?",
      answer: "Yes, we can work with wireframes or our existing designs based on your requirements."
    }
  ];

 

  return (
    <section>
      <div className="max-w-7xl mx-auto pb-20 text-[#13181E]">
        <div className="flex flex-wrap justify-between">
          <h2 className="text-5xl/[1.192] font-display font-bold max-w-[400px]">
            Questions and <br /> answers
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

          <Generalfaq faqsArr={faqsArr} fClass="max-w-[800px]" />
        </div>
      </div>
    </section>
  )
}

export default Faq
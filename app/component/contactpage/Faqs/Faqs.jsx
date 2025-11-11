import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import plusImg from "./plus.svg";
import minusImg from "./minus.svg";
import Generalfaq from "../../Generalfaq/Generalfaq";

const Faqs = () => {
  const [showFaq, setShowFaq] = useState(0);
  const handleShowFaq = (index) => setShowFaq(showFaq === index ? null : index);
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
      <div className="max-w-7xl mx-auto py-30">
        <h2 className="text-5xl font-bold font-display text-[#13181E] text-center">Have Questions?</h2>
        {/* <div className="mt-15">
          <div className="max-w-5xl mx-auto w-full flex flex-col gap-5">
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
                      <h4 className="text-2xl font-bold font-display">{faq?.question}</h4>
                      

                      {open ? (
                        <img src={minusImg} alt="minus" className="w-10 h-10" />
                      ) : (
                        <img src={plusImg} alt="plus" className="w-10 h-10" />
                      )}

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
                          <p className="text-base pb-2 max-w-[900px]">
                            {faq?.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
          </div>
        </div> */}

        <Generalfaq
          faqsArr={faqsArr}
          fClass="mt-20 "
          defaultOpen={0}
          actionBtnType="plusMinus"
        />
      </div>
    </section>
  )
}

export default Faqs
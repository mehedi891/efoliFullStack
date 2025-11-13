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
      question: "Do you only provide services for Shopify?",
      answer: "We specialize in the Shopify ecosystem, such as apps, themes, and stores, because that’s where our products and experience are strongest. If your project is eCommerce or SaaS-related and connects to Shopify in any way, we’re usually a good fit."
    },
    {
      id: 2,
      question: "What kind of services does eFoli offer?",
      answer: "eFoli builds and maintains Shopify apps, develops custom Shopify solutions (apps, themes, store setup, custom features), and provides white-label customer support through KivoSupport for SaaS and Shopify apps."
    },
    {
      id: 3,
      question: "Who do you typically work with?",
      answer: "We work with Shopify merchants, SaaS founders, and agencies from early-stage startups to established brands who want stable products, thoughtful UX, and long-term technical or support partners."
    },
    {
      id: 4,
      question: "Can you help with both new projects and existing apps or stores?",
      answer: "Yes. We can start from scratch with a new idea or step into an existing app or store to improve performance, add features, or take over ongoing maintenance and support."
    },
    {
      id: 5,
      question: "What happens after I submit the contact form?",
      answer: "Our team reviews your message and usually replies within one business day. If there’s a potential fit, we’ll schedule a short call to understand your goals, then share next steps or a proposal based on your needs."
    }
  ];
  return (
    <section>
      <div className="max-w-7xl mx-auto md:pb-20 md:pt-0 py-10 md:px-0 px-4">
        <h2 className="md:text-5xl/[1.125] text-3xl font-bold font-display text-[#13181E] text-center">Have Questions?</h2>
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
          fClass="md:mt-20 mt-5 max-w-5xl mx-auto"
          defaultOpen={0}
          actionBtnType="plusMinus"
        />
      </div>
    </section>
  )
}

export default Faqs
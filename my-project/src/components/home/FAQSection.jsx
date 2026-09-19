import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import ScrollReveal from "../common/ScrollReveal";
import { faqData } from "../../data/faq";

export default function FAQSection() {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <section className="dot-pattern py-20">
      <div className="section-container">
        {/* Heading */}
        <ScrollReveal>
          <h2
            className="
            text-center
            font-serif
            text-5xl
            md:text-7xl
          "
          >
            Frequently Asked
            <span className="italic"> Questions</span>
          </h2>
        </ScrollReveal>

        {/* FAQ */}
        <div
          className="
          max-w-5xl
          mx-auto
          mt-14
          space-y-4
        "
        >
          {faqData.map((faq, index) => {
            const active = activeQuestion === index;

            const rightSide = index % 2 !== 0;

            return (
              <ScrollReveal
                key={faq.question}
                delay={index * 80}
                className={`
                  flex
                  ${rightSide ? "justify-end" : "justify-start"}
                `}
              >
                <div
                  className={`
                    w-full
                    md:w-[58%]
                    border
                    border-black/5
                    transition-all
                    duration-300
                    ${active ? "bg-astravia-yellow" : "bg-white"}
                  `}
                >
                  <button
                    type="button"
                    onClick={() => toggleQuestion(index)}
                    className="
                      w-full
                      flex
                      items-center
                      justify-between
                      gap-5
                      px-5
                      py-4
                      text-left
                    "
                  >
                    <span
                      className="
                      text-base
                      md:text-lg
                    "
                    >
                      {faq.question}
                    </span>

                    <span className="flex-shrink-0">
                      {active ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>

                  <div
                    className={`
                      grid
                      transition-all
                      duration-300
                      ${
                        active
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }
                    `}
                  >
                    <div className="overflow-hidden">
                      <p
                        className="
                        px-5
                        pb-5
                        text-sm
                        md:text-base
                        leading-relaxed
                        max-w-xl
                      "
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

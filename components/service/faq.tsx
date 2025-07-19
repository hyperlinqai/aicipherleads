import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

interface IProps {
  title: string;
  description: string;
  faqs: {
    question: string;
    answer: string;
  }[];
}

const FAQSection = ({ title, description, faqs }: IProps) => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="bg-neutral-900 py-20 relative overflow-hidden">
      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            variants={itemVariants}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            {description}
          </motion.p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          className="space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              className="border border-neutral-700 rounded-2xl bg-neutral-800/50 backdrop-blur-sm p-6"
              variants={itemVariants}
            >
              {/* Question */}
              <button
                className="flex justify-between items-center w-full text-left focus:outline-none"
                onClick={() => toggleAnswer(index)}
              >
                <h3 className="text-lg font-semibold text-white">
                  {faq.question}
                </h3>
                {activeIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-lime-400" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-lime-400" />
                )}
              </button>

              {/* Answer */}
              {activeIndex === index && (
                <motion.div
                  className="mt-4 text-gray-300 text-sm sm:text-base"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;

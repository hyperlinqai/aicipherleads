import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We provide a range of digital marketing services including lead generation, AI-powered SEO, social media management, web design, funnel marketing, and online reputation management.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Results vary depending on the service and your business goals. Typically, you can expect to see initial improvements within 1-3 months.",
  },
  {
    question: "Do you offer custom solutions?",
    answer:
      "Yes, we tailor our strategies to meet your specific business needs and objectives.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We work with businesses across various industries, including education, healthcare, e-commerce, and professional services.",
  },
  {
    question: "Is there a money-back guarantee?",
    answer:
      "Yes, we offer a 30-day money-back guarantee if you're not satisfied with our services.",
  },
];

const FAQSection = () => {
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
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Get answers to common questions about our services and processes.
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

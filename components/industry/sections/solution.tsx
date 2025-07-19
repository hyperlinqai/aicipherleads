import { motion } from "framer-motion";
import React from "react";

export interface IProps {
  title: string;
  description: string;
  steps: {
    title: string;
    icon: string;
    desc: string;
  }[];
}
const SolutionsSection = ({ title, description, steps }: IProps) => {
  return (
    <section id="solutions" className="py-20 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>

        {/* Flowchart Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-2 bg-gradient-to-r from-lime-400/20 via-lime-400/20 to-lime-400/20 transform -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    delay: index * 0.15,
                    duration: 0.5,
                  },
                }}
                viewport={{ once: true }}
                // transition={{ delay: index * 0.15 }}
                whileHover={{
                  y: -10,
                  transition: {
                    type: "tween",
                    duration: 0.2,
                    ease: "easeOut",
                  },
                }}
                className="bg-neutral-800 rounded-xl p-6 transform transition-all duration-300 hover:shadow-lime-400/20 hover:shadow-lg"
              >
                <div className="w-16 h-16 bg-lime-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-lime-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={step.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white text-center mb-3">
                  {step.title}
                </h3>
                <p className="text-neutral-400 text-center">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;

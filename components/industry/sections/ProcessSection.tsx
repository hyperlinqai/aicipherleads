import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface ProcessStep {
  phase: string;
  title: string;
  description: string;
  details: string[];
}

interface ProcessSectionProps {
  title: string;
  highlight: string;
  subtitle: string;
  steps: ProcessStep[];
}

export function ProcessSection({ title, highlight, subtitle, steps }: ProcessSectionProps) {
  return (
    <section className="py-20 bg-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {title}{" "}
            <span className="text-lime-400">{highlight}</span>
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-lime-400/20 hidden lg:block" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="lg:flex gap-8 items-start">
                  {/* Step Number Circle */}
                  <div className="hidden lg:flex items-center justify-center w-16 h-16 bg-lime-400 text-neutral-900 rounded-full font-bold text-xl z-10 flex-shrink-0">
                    {index + 1}
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 bg-neutral-900 rounded-2xl p-8 border border-neutral-700 hover:border-lime-400/50 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="lg:hidden flex items-center justify-center w-12 h-12 bg-lime-400 text-neutral-900 rounded-full font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <span className="text-lime-400 text-sm font-semibold">
                          {step.phase}
                        </span>
                        <h3 className="text-2xl font-bold text-white">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-neutral-300 mb-6">
                      {step.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-3">
                      {step.details.map((detail, detailIndex) => (
                        <motion.div
                          key={detailIndex}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: index * 0.1 + detailIndex * 0.05 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-2"
                        >
                          <ChevronRight className="h-5 w-5 text-lime-400 flex-shrink-0 mt-0.5" />
                          <span className="text-neutral-400 text-sm">
                            {detail}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-neutral-300 mb-6">
            Ready to start your journey to market leadership?
          </p>
          <button className="bg-lime-400 text-neutral-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-lime-500 transition-colors duration-200">
            Get Started Today
          </button>
        </motion.div>
      </div>
    </section>
  );
}
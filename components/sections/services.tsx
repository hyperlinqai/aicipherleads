import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface IProps {
  title: string;
  description: string;
  services: {
    title: string;
    icon: string;
    desc: string;
    features: string[];
  }[];
}

const ServicesSection = ({ title, description, services }: IProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      id="services"
      className="py-20 bg-neutral-900 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <motion.div
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="bg-neutral-800 rounded-xl p-6 cursor-pointer h-full border-2 border-neutral-700 hover:border-lime-400/30 transition-colors"
              >
                <AnimatePresence initial={false}>
                  {activeIndex !== index ? (
                    <motion.div
                      key="front"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="w-16 h-16 mb-6 bg-lime-400/10 rounded-full flex items-center justify-center mx-auto"
                      >
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
                            d={service.icon}
                          />
                        </svg>
                      </motion.div>
                      <h3 className="text-xl font-semibold text-white text-center mb-3">
                        {service.title}
                      </h3>
                      <p className="text-neutral-400 text-center text-sm leading-relaxed">
                        {service.desc}
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="details"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className="space-y-4"
                    >
                      <h4 className="text-lg font-semibold text-lime-400 mb-3 text-center">
                        Features Include:
                      </h4>
                      <ul className="text-neutral-300 space-y-2.5 text-sm">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center">
                            <span className="text-lime-400 mr-2">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

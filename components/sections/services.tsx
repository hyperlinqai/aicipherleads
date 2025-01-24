import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const services = [
    {
      title: "Social Media Ads",
      icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
      desc: "Targeted campaigns that reach parents in your area",
      features: [
        "Facebook & Instagram Ads",
        "Custom Audience Targeting",
        "Performance Analytics",
        "A/B Testing",
      ],
    },
    {
      title: "Parent SEO",
      icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
      desc: "Dominate local search results for preschool queries",
      features: [
        "Local SEO Optimization",
        "Keyword Research",
        "Content Strategy",
        "Google My Business",
      ],
    },
    {
      title: "Website Design",
      icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      desc: "Beautiful, conversion-focused preschool websites",
      features: [
        "Mobile Responsive",
        "Virtual Tours",
        "Online Registration",
        "Parent Portal",
      ],
    },
  ];

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
            Our Play School Marketing Expertise
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Comprehensive digital solutions designed specifically for preschools
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

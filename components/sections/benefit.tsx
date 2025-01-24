import { motion } from "framer-motion";

const BenefitsSection = () => {
  const benefits = [
    {
      title: "40% More Admissions",
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      desc: "Average increase in enrollment rates within the first 3 months",
    },
    {
      title: "Parent-Friendly Campaigns",
      icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
      desc: "Targeted messaging that resonates with modern parents",
    },
    {
      title: "Data-Driven Results",
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      desc: "Real-time analytics and performance tracking",
    },
    {
      title: "24/7 Support",
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
      desc: "Dedicated team for continuous assistance and optimization",
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Why Preschool Owners Choose Us
          </h2>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
            Discover how we help preschools thrive in the digital age
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  delay: index * 0.15,
                  duration: 0.5,
                },
              }}
              viewport={{ once: true }}
              whileHover="hover"
              whileTap="tap"
              variants={{
                hover: { y: -5 },
                tap: { scale: 0.98 },
              }}
              transition={{
                hover: { type: "tween", duration: 0.2, ease: "easeOut" },
                tap: { type: "tween", duration: 0.1 },
              }}
              className="bg-white rounded-xl p-6 shadow-lg border border-neutral-100"
            >
              <motion.div
                variants={{
                  hover: { scale: 1.1 },
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-16 h-16 mx-auto mb-6 bg-lime-400/10 rounded-full flex items-center justify-center"
              >
                <svg
                  className="w-8 h-8 text-lime-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={benefit.icon}
                  />
                </svg>
              </motion.div>
              <h3 className="text-xl font-semibold text-neutral-900 text-center mb-3">
                {benefit.title}
              </h3>
              <p className="text-neutral-600 text-center">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

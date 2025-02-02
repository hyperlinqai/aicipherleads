import { motion } from "framer-motion";
import { Filter, MapPin, Repeat, Rocket } from "lucide-react";

const processSteps = [
  {
    title: "Audience Mapping",
    icon: <MapPin className="w-6 h-6" />,
    description: "Identify high-value demographics and pain points.",
  },
  {
    title: "Campaign Launch",
    icon: <Rocket className="w-6 h-6" />,
    description: "Multi-channel ads, SEO, and LinkedIn outreach.",
  },
  {
    title: "Lead Filtering",
    icon: <Filter className="w-6 h-6" />,
    description: "AI scores leads in real-time to prioritize sales efforts.",
  },
  {
    title: "Conversion Optimization",
    icon: <Repeat className="w-6 h-6" />,
    description: "Automated follow-ups and CRM-driven nurturing.",
  },
];

const ProcessBreakdown = () => {
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
    hidden: { y: 30, opacity: 0 },
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
            Our 4-Step Lead Generation Engine
          </motion.h2>
          <motion.p
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            A streamlined process to attract, qualify, and convert leads into
            loyal customers.
          </motion.p>
        </motion.div>

        {/* Mobile Layout */}
        <motion.div
          className="lg:hidden grid grid-cols-1 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              className="group relative p-6 rounded-2xl bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 hover:border-lime-400/30 transition-all"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              {/* Step Number */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-10 h-10 bg-lime-400 rounded-full flex items-center justify-center text-neutral-900 font-bold">
                {index + 1}
              </div>

              {/* Content */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 text-lime-400">{step.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-400">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Desktop Layout */}
        <motion.div
          className="hidden lg:block relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Progress Line */}
          <div className="hidden lg:block absolute left-[5%] right-[5%] top-1/2 h-1 bg-neutral-700/50 rounded-full " />

          {/* Steps */}
          <div className="grid grid-cols-4 gap-16">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                className="group relative p-6 rounded-2xl bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 hover:border-lime-400/30 transition-all "
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-lime-400 rounded-full flex items-center justify-center text-neutral-900 font-bold">
                  {index + 1}
                </div>
                {/* Content */}
                <div className="flex flex-col items-start text-left">
                  <div className="mb-4 text-lime-400">{step.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessBreakdown;

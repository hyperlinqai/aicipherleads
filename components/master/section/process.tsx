import { motion } from "framer-motion";
import {
  ChevronRight,
  LayoutTemplate,
  Rocket,
  Search,
  TrendingUp,
} from "lucide-react";

const processSteps = [
  {
    title: "Discover & Strategize",
    icon: <Search className="w-6 h-6" />,
    subtitle: "Deep Dive Analysis & Roadmap Creation",
    description:
      "We uncover hidden opportunities through comprehensive market research and competitor analysis",
    duration: "1-2 Weeks",
  },
  {
    title: "Design & Build",
    icon: <LayoutTemplate className="w-6 h-6" />,
    subtitle: "Custom Solution Development",
    description:
      "Crafting pixel-perfect designs and robust technical implementations tailored to your brand",
    duration: "2-4 Weeks",
  },
  {
    title: "Launch & Accelerate",
    icon: <Rocket className="w-6 h-6" />,
    subtitle: "Strategic Market Entry",
    description:
      "Multi-channel rollout with integrated marketing campaigns for maximum initial impact",
    duration: "1 Week",
  },
  {
    title: "Optimize & Scale",
    icon: <TrendingUp className="w-6 h-6" />,
    subtitle: "Continuous Growth Engine",
    description:
      "Data-driven refinements and expansion strategies to maintain momentum",
    duration: "Ongoing",
  },
];

const ProcessSection = () => {
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
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/50 to-neutral-900/80" />

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
            The Growth Blueprint
          </motion.h2>
          <motion.p
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            A proven 4-phase methodology refined through 500+ successful
            campaigns
          </motion.p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Progress line */}
          <div className="hidden lg:block absolute left-1/4 right-1/4 top-1/2 h-1 bg-neutral-700/50 rounded-full" />

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                className="group relative p-8 rounded-2xl bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 hover:border-lime-400/30 transition-all"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-lime-400 rounded-full flex items-center justify-center text-neutral-900 font-bold">
                  {index + 1}
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 text-lime-400">{step.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-3">{step.subtitle}</p>
                  <p className="text-gray-400 text-sm mb-4">
                    {step.description}
                  </p>
                  <div className="flex items-center gap-2 text-lime-400 text-sm">
                    <span className="bg-lime-400/10 px-3 py-1 rounded-full">
                      {step.duration}
                    </span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Connector line for mobile */}
                {index < 3 && (
                  <div className="lg:hidden absolute -bottom-8 left-1/2 w-px h-8 bg-neutral-700/50" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Banner */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {[
            { value: "500+", label: "Campaigns Executed" },
            { value: "240%", label: "Average ROI Increase" },
            { value: "98%", label: "Client Retention Rate" },
            { value: "4.9/5", label: "Customer Satisfaction" },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              className="p-6 text-center rounded-xl bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 hover:border-lime-400/30 transition-all"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl font-bold text-lime-400 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;

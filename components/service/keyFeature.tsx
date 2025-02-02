import { motion } from "framer-motion";
import { BarChart3, Lightbulb, RefreshCcw, Target } from "lucide-react";
import React from "react";

const KeyFeaturesGrid = () => {
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

  const features = [
    {
      icon: <Target size={40} strokeWidth={1.5} />,
      title: "Targeted Audience Acquisition",
      text: "Laser-focused campaigns to reach decision-makers in your niche.",
    },
    {
      icon: <BarChart3 size={40} strokeWidth={1.5} />,
      title: "Qualified Lead Scoring",
      text: "AI ranks leads by intent, budget, and readiness to buy.",
    },
    {
      icon: <Lightbulb size={40} strokeWidth={1.5} />,
      title: "Marketing Automation",
      text: "Nurture leads 24/7 with drip campaigns and behavior triggers.",
    },
    {
      icon: <RefreshCcw size={40} strokeWidth={1.5} />,
      title: "CRM Integration",
      text: "Sync leads seamlessly with HubSpot, Salesforce, or custom tools.",
    },
  ];

  return (
    <section className="bg-neutral-900 py-20 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-lime-400/10 rounded-full blur-3xl opacity-30 animate-pulse"></div> */}
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-lime-400/15 rounded-full blur-3xl opacity-30 "></div>
      </div>

      {/* Content Container */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Section Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
          variants={itemVariants}
        >
          How We Supercharge Your Lead Pipeline
        </motion.h2>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-2xl bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 hover:border-lime-400/30 transition-all"
              variants={itemVariants}
            >
              {/* Icon */}
              <div className="text-4xl mb-4">{feature.icon}</div>
              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              {/* Text */}
              <p className="text-gray-300">{feature.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default KeyFeaturesGrid;

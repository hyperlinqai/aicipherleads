import { motion } from "framer-motion";
import { BarChart3, Lightbulb, RefreshCcw, Target } from "lucide-react";

const deliverables = [
  {
    title: "Targeted Audience Acquisition",
    icon: <Target size={40} strokeWidth={1.5} />,
    description:
      "Laser-focused campaigns to reach decision-makers in your niche.",
  },
  {
    title: "Qualified Lead Scoring",
    icon: <BarChart3 size={40} strokeWidth={1.5} />,
    description: "AI ranks leads by intent, budget, and readiness to buy.",
  },
  {
    title: "Marketing Automation",
    icon: <Lightbulb size={40} strokeWidth={1.5} />,
    description:
      "Nurture leads 24/7 with drip campaigns and behavior triggers.",
  },
  {
    title: "CRM Integration",
    icon: <RefreshCcw size={40} strokeWidth={1.5} />,
    description:
      "Sync leads seamlessly with HubSpot, Salesforce, or custom tools.",
  },
];

const DeliverablesSection = () => {
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
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-lime-400/10 rounded-full blur-3xl opacity-30 animate-pulse"></div> */}
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-lime-400/15 rounded-full blur-3xl opacity-30 "></div>
      </div>
      {/* <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/50 to-neutral-900/80" /> */}
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
            What You Get with Advanced Lead Generation
          </motion.h2>
          <motion.p
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            A comprehensive suite of tools and strategies to attract, qualify,
            and convert high-quality leads.
          </motion.p>
        </motion.div>

        {/* Deliverables Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {deliverables.map((deliverable, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-2xl bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 hover:border-lime-400/30 transition-all"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              {/* Icon */}
              <div className="text-4xl mb-4">{deliverable.icon}</div>
              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {deliverable.title}
              </h3>
              {/* Description */}
              <p className="text-gray-300">{deliverable.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DeliverablesSection;

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface IProps {
  title: string;
  description: string;
  deepDiveFeatures: {
    title: string;
    icon: ReactNode;
    description: string;
  }[];
}

const TechnicalDeepDive = ({
  title,
  description,
  deepDiveFeatures,
}: IProps) => {
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
      {/* <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/50 to-neutral-900/80" /> */}

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-lime-400/10 rounded-full blur-3xl opacity-30"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-lime-400/10 rounded-full blur-3xl opacity-30"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

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
            {title}
          </motion.h2>
          <motion.p
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            {description}
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {deepDiveFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-2xl bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 hover:border-lime-400/30 transition-all"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              {/* Icon */}
              <div className="text-4xl mb-4">{feature.icon}</div>
              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              {/* Description */}
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechnicalDeepDive;

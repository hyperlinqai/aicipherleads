import { motion } from "framer-motion";
import {
  Activity,
  BarChart3,
  Binoculars,
  Rocket,
  ShoppingCart,
  Users,
} from "lucide-react";

const challenges = [
  {
    title: "Low Online Visibility",
    description:
      "Struggling to stand out in the digital landscape and reach target audiences",
    icon: <Binoculars size={24} />,
  },
  {
    title: "Unpredictable Growth",
    description:
      "Experiencing inconsistent business growth due to market fluctuations",
    icon: <Activity size={24} />,
  },
  {
    title: "Poor Conversion Rates",
    description:
      "Website traffic isn't translating into meaningful leads or sales",
    icon: <ShoppingCart size={24} />,
  },
];

const solutions = [
  {
    title: "Data-Driven Strategies",
    description: "Tailored solutions aligned with your specific business goals",
    icon: <BarChart3 size={24} />,
  },
  {
    title: "Rapid Implementation",
    description:
      "Quick deployment of solutions to maintain competitive advantage",
    icon: <Rocket size={24} />,
  },
  {
    title: "Expert Team",
    description: "Dedicated professionals with proven digital growth expertise",
    icon: <Users size={24} />,
  },
];

const GrowthSection = () => {
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Challenges Section */}
        <motion.div
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
            variants={itemVariants}
          >
            Are You Facing These Growth Barriers?
          </motion.h2>

          <motion.p
            className="text-lg text-gray-300 text-center max-w-2xl mx-auto mb-16"
            variants={itemVariants}
          >
            Common challenges that hold businesses back from reaching their full
            potential
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => (
              <motion.div
                key={challenge.title}
                className="p-8 rounded-2xl bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 hover:border-lime-400/30 transition-all"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{challenge.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {challenge.title}
                </h3>
                <p className="text-gray-300">{challenge.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Solutions Section */}
        <motion.div
          className="pt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Transform Your Digital Presence
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Leverage our expertise to grow your business with data-driven
              strategies and cutting-edge solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                className="p-8 rounded-2xl bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 hover:border-lime-400/30 transition-all group"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4 transition-transform group-hover:scale-110">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {solution.title}
                </h3>
                <p className="text-gray-300">{solution.description}</p>
                <div className="mt-6 h-px bg-gradient-to-r from-lime-400/0 via-lime-400/40 to-lime-400/0" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-lime-400/10 rounded-full blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-lime-400/15 rounded-full blur-3xl opacity-30 animate-pulse delay-1000" />
      </div>
    </section>
  );
};

export default GrowthSection;

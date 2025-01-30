import { motion } from "framer-motion";
import { useState } from "react";

const stats = [
  { value: "50+", label: "Active Schools" },
  { value: "90%", label: "Success Rate" },
  { value: "30", label: "Day Results" },
  { value: "24/7", label: "Support" },
];

const BlobBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Animated blobs */}
    <motion.div
      className="absolute top-1/4 left-[20%] w-96 h-96 bg-lime-400/10 rounded-full filter blur-3xl mix-blend-soft-light"
      animate={{
        scale: [1, 1.2, 1],
        borderRadius: ["50%", "40% 60% 70% 30%", "50%"],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
    <motion.div
      className="absolute bottom-1/4 right-[20%] w-96 h-96 bg-lime-400/15 rounded-full filter blur-3xl mix-blend-soft-light"
      animate={{
        scale: [1, 0.9, 1],
        borderRadius: ["50%", "30% 70% 50% 50%", "50%"],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2,
      }}
    />
  </div>
);

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

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
    <section
      id="hero"
      className="bg-neutral-900 min-h-[70vh] pt-20 relative overflow-hidden"
    >
      <BlobBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center pt-20 pb-16"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Title */}
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            variants={itemVariants}
          >
            Grow Your Play School Admissions
            <motion.span
              className="block mt-4 text-lime-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              with AI-Driven Marketing.
            </motion.span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
            variants={itemVariants}
            transition={{ delay: 0.2 }}
          >
            Get the most effective lead generation and marketing solutions
            designed specifically for preschools and early education centers.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
            variants={itemVariants}
            transition={{ delay: 0.4 }}
          >
            <motion.button
              className="bg-lime-400 text-neutral-900 px-8 py-3.5 rounded-xl font-semibold relative overflow-hidden transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Free Consultation
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-lime-500/20 to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
              />
            </motion.button>

            <motion.button
              className="border-2 border-lime-400 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-lime-400/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Solutions
            </motion.button>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-6 rounded-xl bg-neutral-800/50 backdrop-blur-sm hover:bg-neutral-700/30 transition-all"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold text-lime-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300 text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

import { motion } from "framer-motion";
import React from "react";

const ServiceHomeSection = () => {
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
    <section className="relative bg-neutral-900 text-white py-16 px-4 sm:px-8 overflow-hidden pt-36">
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        style={{
          background:
            "radial-gradient(circle, bg-lime-400/30 50%, transparent 50%)",
        }}
      />

      {/* Content Container */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Title */}
        <motion.h1
          className="text-4xl sm:text-5xl font-bold mb-6"
          variants={itemVariants}
        >
          Elevate Your Business with Tailored Solutions
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg sm:text-xl text-neutral-300 mb-12"
          variants={itemVariants}
        >
          Discover comprehensive services designed to drive growth, enhance
          efficiency, and deliver measurable results.
        </motion.p>

        {/* Call-to-Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          variants={itemVariants}
        >
          <button className="bg-lime-500 text-neutral-900 font-semibold py-3 px-8 rounded-full hover:bg-lime-600 transition-all">
            Explore Services
          </button>
          <button className="bg-neutral-700 text-white font-semibold py-3 px-8 rounded-full hover:bg-neutral-600 transition-all">
            Get Free Consultation
          </button>
        </motion.div>
      </motion.div>

      {/* Floating Elements for Modern Design */}
      <motion.div
        className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-lime-400/10 blur-3xl"
        initial={{ scale: 1.5 }}
        // animate={{ scale: [0, 1, 0] }}
        // transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
};

export default ServiceHomeSection;

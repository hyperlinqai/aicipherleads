import { motion, useScroll, useTransform } from "framer-motion";
import { Clock } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

interface IProps {
  title: string;
  description: string;
  trustItems: {
    value: string;
    label: string;
    icon: React.ReactNode;
  }[];
}

const CallToAction = ({ title, description, trustItems }: IProps) => {
  const [isMobileCTAVisible, setIsMobileCTAVisible] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  // Floating particles array
  const particles = Array(30).fill(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsMobileCTAVisible(currentScroll > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={ref}
      className="relative py-24 overflow-hidden bg-gradient-to-br from-lime-500 via-lime-600 to-lime-700"
    >
      {/* Animated gradient layer */}
      <motion.div
        className="absolute  inset-0 bg-gradient-to-r from-lime-400/20 to-lime-600/20"
        style={{ y }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white/10 rounded-full"
            initial={{
              scale: 0,
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
            style={{
              width: Math.random() * 20 + 10 + "px",
              height: Math.random() * 20 + 10 + "px",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {title}
            </h2>

            <motion.p
              className="text-xl text-lime-100/90 mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {description}
            </motion.p>
          </motion.div>

          {/* Main CTA Button */}
          <motion.div
            className="flex justify-center mb-8"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <button className="relative overflow-hidden bg-white/95 text-lime-900 px-12 py-5 rounded-2xl text-2xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 group">
              <span className="relative z-10">
                Claim Your Free Strategy Session
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-lime-400/20 to-lime-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </motion.div>

          <p className="text-lime-100/80 text-sm mb-16">
            Limited availability - Only 3 spots remaining this month
          </p>

          {/* Trust Indicators */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
              hidden: {},
            }}
          >
            {trustItems.map((item) => (
              <motion.div
                key={item.label}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 30 },
                }}
                className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 hover:border-lime-300/30 transition-all"
              >
                <div className="text-lime-300 mb-3">{item.icon}</div>
                <div className="text-3xl font-bold text-white mb-1">
                  {item.value}
                </div>
                <div className="text-lime-100/90 text-sm font-medium">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile Sticky CTA */}
      <motion.div
        className="fixed bottom-6 left-4 right-4 z-50 lg:hidden"
        initial={{ y: 100, opacity: 0 }}
        animate={{
          y: isMobileCTAVisible ? 0 : 100,
          opacity: isMobileCTAVisible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        <button className="w-full bg-lime-400 text-lime-900 px-8 py-4 rounded-xl text-lg font-bold shadow-xl hover:bg-lime-300 transition-all flex items-center justify-center space-x-2">
          <Clock className="w-5 h-5" />
          <span>Book Free Session Now</span>
        </button>
      </motion.div>
    </section>
  );
};

export default CallToAction;

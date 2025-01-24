import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ResultsSection = () => {
  const stats = [
    { value: 200, label: "Leads in 30 Days" },
    { value: 90, label: "Parent Engagement Rate" },
    { value: 45, label: "Conversion Rate" },
  ];

  return (
    <section id="results" className="py-20 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            See What We&apos;ve Achieved for Schools Like Yours
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Real results from our proven marketing strategies
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              label={stat.label}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCard = ({
  value,
  label,
  index,
}: {
  value: number;
  label: string;
  index: number;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const progress = value > 100 ? 100 : value; // Ensure progress doesn't exceed 100%

  useEffect(() => {
    if (!isInView) return;

    // Number animation
    const duration = 2000;
    const startTime = Date.now();

    const updateCount = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(value * progress));

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="bg-neutral-800 rounded-xl p-8 text-center relative overflow-hidden"
    >
      {/* Background circle */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-lime-400/5 rounded-full transform translate-x-16 -translate-y-16" />

      <div className="relative z-10">
        <div className="text-5xl font-bold text-lime-400 mb-4">{count}+</div>
        <div className="text-white text-xl mb-2">{label}</div>
        <div className="h-2 bg-neutral-700 mt-4 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: `${progress}%` } : {}}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="h-full bg-lime-400 rounded-full"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ResultsSection;

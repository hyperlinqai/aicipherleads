import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import React from "react";

interface ProblemSectionProps {
  title: string;
  subtitle: string;
  problems: Array<{
    icon: LucideIcon;
    title: string;
    description: string;
    color?: string;
  }>;
}

export function ProblemSection({ title, subtitle, problems }: ProblemSectionProps) {
  return (
    <section id="problems" className="py-12 sm:py-20 bg-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-neutral-900 rounded-2xl p-8 border border-neutral-700 hover:border-red-500/50 transition-all duration-300 group"
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-red-500/10 rounded-full flex items-center justify-center group-hover:bg-red-500/20 transition-all duration-300">
                    <Icon className={`w-8 h-8 ${problem.color || 'text-red-500'}`} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">
                    {problem.title}
                  </h3>
                  
                  <p className="text-neutral-300 leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
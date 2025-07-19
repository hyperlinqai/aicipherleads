import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import React from "react";

interface SolutionSectionProps {
  title: string;
  highlight: string;
  subtitle: string;
  solutions: Array<{
    step: string;
    title: string;
    description: string;
    icon: LucideIcon;
  }>;
}

export function SolutionSection({ title, highlight, subtitle, solutions }: SolutionSectionProps) {
  return (
    <section id="solutions" className="py-20 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {title} <span className="text-lime-400">{highlight}</span>
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-neutral-800 rounded-2xl p-8 border border-neutral-700 hover:border-lime-400/50 transition-all duration-300 group"
              >
                <div className="text-center">
                  <div className="text-lime-400 text-lg font-bold mb-4">
                    {solution.step}
                  </div>
                  
                  <div className="w-16 h-16 mx-auto mb-6 bg-lime-400/10 rounded-full flex items-center justify-center group-hover:bg-lime-400/20 transition-all duration-300">
                    <Icon className="w-8 h-8 text-lime-400" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">
                    {solution.title}
                  </h3>
                  
                  <p className="text-neutral-300 leading-relaxed">
                    {solution.description}
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
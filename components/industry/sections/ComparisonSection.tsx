import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

interface ComparisonRow {
  feature: string;
  bird: {
    text: string;
    status: boolean;
  };
  others: {
    text: string;
    status: boolean;
  };
}

interface ComparisonSectionProps {
  title: string;
  highlight: string;
  subtitle: string;
  headers: string[];
  rows: ComparisonRow[];
}

export function ComparisonSection({ title, highlight, subtitle, headers, rows }: ComparisonSectionProps) {
  return (
    <section className="py-20 bg-neutral-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-2xl border border-neutral-700 bg-neutral-800"
        >
          {/* Desktop Table */}
          <div className="hidden md:block">
            <table className="w-full">
              <thead>
                <tr className="border-b border-neutral-700">
                  {headers.map((header, index) => (
                    <th
                      key={index}
                      className={`px-6 py-5 text-left ${
                        index === 0
                          ? "text-neutral-300"
                          : index === 1
                          ? "text-lime-400 bg-lime-400/5"
                          : "text-neutral-400"
                      }`}
                    >
                      <span className="text-lg font-semibold">{header}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, rowIndex) => (
                  <motion.tr
                    key={rowIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: rowIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="border-b border-neutral-700/50 hover:bg-neutral-700/20 transition-colors"
                  >
                    <td className="px-6 py-4 text-white font-medium">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 bg-lime-400/5">
                      <div className="flex items-center gap-3">
                        {row.bird.status ? (
                          <Check className="h-5 w-5 text-lime-400 flex-shrink-0" />
                        ) : (
                          <X className="h-5 w-5 text-red-400 flex-shrink-0" />
                        )}
                        <span className="text-white">{row.bird.text}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        {row.others.status ? (
                          <Check className="h-5 w-5 text-lime-400 flex-shrink-0" />
                        ) : (
                          <X className="h-5 w-5 text-red-400 flex-shrink-0" />
                        )}
                        <span className="text-neutral-400">{row.others.text}</span>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile View */}
          <div className="md:hidden">
            {rows.map((row, rowIndex) => (
              <motion.div
                key={rowIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: rowIndex * 0.1 }}
                viewport={{ once: true }}
                className="p-6 border-b border-neutral-700/50"
              >
                <h3 className="text-white font-semibold mb-4">{row.feature}</h3>
                
                <div className="space-y-3">
                  <div className="bg-lime-400/10 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-lime-400 font-medium">Bird Marketing</span>
                      {row.bird.status ? (
                        <Check className="h-5 w-5 text-lime-400" />
                      ) : (
                        <X className="h-5 w-5 text-red-400" />
                      )}
                    </div>
                    <span className="text-white text-sm">{row.bird.text}</span>
                  </div>

                  <div className="bg-neutral-700/30 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-neutral-400 font-medium">Others</span>
                      {row.others.status ? (
                        <Check className="h-5 w-5 text-lime-400" />
                      ) : (
                        <X className="h-5 w-5 text-red-400" />
                      )}
                    </div>
                    <span className="text-neutral-400 text-sm">{row.others.text}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-lg text-neutral-300 mb-6">
            Experience the difference specialized expertise makes
          </p>
          <button className="bg-lime-400 text-neutral-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-lime-500 transition-colors duration-200">
            Choose the Experts
          </button>
        </motion.div>
      </div>
    </section>
  );
}
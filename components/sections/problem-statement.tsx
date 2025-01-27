import { motion } from "framer-motion";
import { ReactNode } from "react";

interface IProps {
  title: string;
  description: string;
  problems: {
    icon: ReactNode;
    title: string;
    description: string;
  }[];
}

export function ProblemStatement({ title, description, problems }: IProps) {
  return (
    <section id="problems" className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 mb-3 sm:mb-4 px-4">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto px-4">
            {description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 mt-8 sm:mt-12 px-2 sm:px-0">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="relative group bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-lime-400 opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300" />

              <div className="text-center">
                <motion.div
                  className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 relative text-neutral-700 group-hover:text-lime-500 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  {problem.icon}
                </motion.div>

                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4 text-neutral-800">
                  {problem.title}
                </h3>
                <p className="text-sm sm:text-base text-neutral-600 group-hover:text-neutral-700 transition-colors duration-300">
                  {problem.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

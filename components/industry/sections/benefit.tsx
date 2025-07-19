import { motion } from "framer-motion";

interface IProps {
  title: string;
  description: string;
  benefits: {
    title: string;
    icon: string;
    desc: string;
  }[];
}
const BenefitsSection = ({ title, description, benefits }: IProps) => {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            {title}
          </h2>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  delay: index * 0.15,
                  duration: 0.5,
                },
              }}
              viewport={{ once: true }}
              whileHover="hover"
              whileTap="tap"
              variants={{
                hover: { y: -5 },
                tap: { scale: 0.98 },
              }}
              transition={{
                hover: { type: "tween", duration: 0.2, ease: "easeOut" },
                tap: { type: "tween", duration: 0.1 },
              }}
              className="bg-white rounded-xl p-6 shadow-lg border border-neutral-100"
            >
              <motion.div
                variants={{
                  hover: { scale: 1.1 },
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-16 h-16 mx-auto mb-6 bg-lime-400/10 rounded-full flex items-center justify-center"
              >
                <svg
                  className="w-8 h-8 text-lime-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={benefit.icon}
                  />
                </svg>
              </motion.div>
              <h3 className="text-xl font-semibold text-neutral-900 text-center mb-3">
                {benefit.title}
              </h3>
              <p className="text-neutral-600 text-center">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

interface PricingSectionProps {
  title: string;
  highlight: string;
  subtitle: string;
  plans: PricingPlan[];
}

export function PricingSection({ title, highlight, subtitle, plans }: PricingSectionProps) {
  return (
    <section className="py-20 bg-neutral-900">
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

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative ${plan.highlighted ? 'md:-mt-4' : ''}`}
            >
              {plan.highlighted && (
                <div className="absolute -top-5 left-0 right-0 flex justify-center">
                  <div className="bg-lime-400 text-neutral-900 px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                    <Star className="h-4 w-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <div
                className={`h-full bg-neutral-800 rounded-2xl p-8 border ${
                  plan.highlighted
                    ? 'border-lime-400 shadow-2xl shadow-lime-400/20'
                    : 'border-neutral-700'
                } hover:border-lime-400/50 transition-all duration-300`}
              >
                {/* Plan Header */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-neutral-400 mb-6">{plan.description}</p>
                  
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-lime-400">
                      {plan.price}
                    </span>
                    <span className="text-neutral-400">{plan.period}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <Check className="h-5 w-5 text-lime-400 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-300">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.a
                  href="https://tidycal.com/hyperlinq/30-minutes-free-good-sales-meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-200 block text-center ${
                    plan.highlighted
                      ? 'bg-lime-400 text-neutral-900 hover:bg-lime-500'
                      : 'bg-neutral-700 text-white hover:bg-neutral-600'
                  }`}
                >
                  {plan.cta}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="flex items-center gap-2 text-neutral-400">
              <Check className="h-5 w-5 text-lime-400" />
              <span>No Setup Fees</span>
            </div>
            <div className="flex items-center gap-2 text-neutral-400">
              <Check className="h-5 w-5 text-lime-400" />
              <span>Cancel Anytime</span>
            </div>
            <div className="flex items-center gap-2 text-neutral-400">
              <Check className="h-5 w-5 text-lime-400" />
              <span>100% Transparent</span>
            </div>
            <div className="flex items-center gap-2 text-neutral-400">
              <Check className="h-5 w-5 text-lime-400" />
              <span>Money-Back Guarantee</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
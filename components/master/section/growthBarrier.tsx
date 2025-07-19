import { motion } from "framer-motion";
import {
  Activity,
  BarChart3,
  Binoculars,
  Rocket,
  ShoppingCart,
  Users,
} from "lucide-react";

const challenges = [
  {
    title: "Low Online Visibility",
    description:
      "Struggling to stand out in the digital landscape and reach your target audience? Without AI-driven SEO strategies, your business risks being invisible to potential customers.",
    icon: <Binoculars size={24} color="#A3E635" />,
  },
  {
    title: "Poor Lead Generation & Conversion Rates",
    description:
      "Is your website traffic not translating into meaningful leads or sales? Inefficient funnels and lack of AI automation could be costing you valuable opportunities.",
    icon: <Activity size={24} color="#A3E635" />,
  },
  {
    title: "Outdated Web Design & Social Media Presence",
    description:
      "Does your website fail to engage visitors, or are your social media platforms underperforming? A lack of custom web design and strategic social media management can leave you behind competitors.",
    icon: <ShoppingCart size={24} color="#A3E635" />,
  },
];

const solutions = [
  {
    title: "Automate Your Growth – Let AI Do the Heavy Lifting",
    description:
      "From AI-driven SEO to automated lead generation, we simplify your marketing so you can focus on growing your business effortlessly.",
    icon: <BarChart3 size={24} color="#A3E635" />,
  },
  {
    title: "Turn Data into Dollars with Precision Marketing",
    description:
      "Our AI-backed strategies deliver measurable results – boosting enrollments, driving foot traffic, and generating leads for your industry.",
    icon: <Rocket size={24} color="#A3E635" />,
  },
  {
    title: "Build Trust, Dominate Search, and Win More Customers",
    description:
      "From reputation management to custom web design, we help you stand out and attract more customers in a competitive digital world.",
    icon: <Users size={24} color="#A3E635" />,
  },
];

const GrowthSection = () => {
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
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="bg-neutral-900 py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Challenges Section */}
        <motion.div
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
            variants={itemVariants}
          >
            Are You Facing These Growth Barriers?
          </motion.h2>

          <motion.p
            className="text-lg text-gray-300 text-center max-w-2xl mx-auto mb-16"
            variants={itemVariants}
          >
            Common challenges that hold businesses back from reaching their full
            potential
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => (
              <motion.div
                key={challenge.title}
                className="p-8 rounded-2xl bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 hover:border-lime-400/30 transition-all"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{challenge.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {challenge.title}
                </h3>
                <p className="text-gray-300">{challenge.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Solutions Section */}
        <motion.div
          className="pt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              AI-Driven Marketing Solutions for Smarter Growth
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              From AI-Powered SEO to Custom Funnels and Reputation Management –
              We Deliver Results for Education, Retail, and Service Providers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                className="p-8 rounded-2xl bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 hover:border-lime-400/30 transition-all group"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4 transition-transform group-hover:scale-110">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {solution.title}
                </h3>
                <p className="text-gray-300">{solution.description}</p>
                <div className="mt-6 h-px bg-gradient-to-r from-lime-400/0 via-lime-400/40 to-lime-400/0" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-lime-400/10 rounded-full blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-lime-400/15 rounded-full blur-3xl opacity-30 animate-pulse delay-1000" />
      </div>
    </section>
  );
};

export default GrowthSection;

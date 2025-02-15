import { motion } from "framer-motion";
import {
  BarChart,
  HeartHandshake,
  Lightbulb,
  Rocket,
  Shield,
  Target,
  Users,
} from "lucide-react";

const AboutPage = () => {
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

  const coreValues = [
    {
      icon: Rocket,
      title: "Innovation",
      description: "Constantly pushing boundaries in tech & marketing",
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Ethical, transparent strategies and execution",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Building partnerships to drive collective success",
    },
    {
      icon: Target,
      title: "Empowerment",
      description: "Equipping clients with actionable, intuitive solutions",
    },
    {
      icon: HeartHandshake,
      title: "Customer-Centricity",
      description: "Tailoring solutions to unique business goals",
    },
  ];

  return (
    <section className="min-h-screen bg-neutral-900 pt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            variants={itemVariants}
          >
            Transforming Digital Growth
            <motion.span
              className="block mt-4 text-lime-400 text-2xl md:text-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Where Strategy Meets Innovation
            </motion.span>
          </motion.h1>
        </motion.div>

        {/* Our Story */}
        <motion.div
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
        >
          <motion.div
            className="bg-neutral-800/50 backdrop-blur-sm p-8 rounded-2xl border border-neutral-700"
            variants={itemVariants}
          >
            <h2 className="text-3xl font-bold text-lime-400 mb-6">Our Story</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Born from the need to simplify digital marketing and AI
              automation, AI Cipher Leads empowers businesses to unlock growth
              through innovative strategies. We merge data-driven digital
              marketing with smart AI automation, ensuring every business—from
              startups to enterprises—can scale effortlessly in the digital age.
            </p>
          </motion.div>
        </motion.div>

        {/* Vision & Mission Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Vision */}
          <motion.div
            className="bg-neutral-800/50 backdrop-blur-sm p-8 rounded-2xl border border-neutral-700"
            variants={itemVariants}
          >
            <div className="flex items-center gap-4 mb-6">
              <Lightbulb className="w-8 h-8 text-lime-400" />
              <h3 className="text-2xl font-bold text-white">Our Vision</h3>
            </div>
            <p className="text-gray-300">
              Democratize Growth: Empower every business to harness the power of
              digital marketing and AI automation for sustainable, scalable
              growth.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            className="bg-neutral-800/50 backdrop-blur-sm p-8 rounded-2xl border border-neutral-700"
            variants={itemVariants}
          >
            <div className="flex items-center gap-4 mb-6">
              <BarChart className="w-8 h-8 text-lime-400" />
              <h3 className="text-2xl font-bold text-white">Our Mission</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Transform and Automate: Deliver tailored, cutting-edge digital
              marketing strategies and AI-driven automation that:
            </p>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-lime-400 rounded-full" />
                Boosts Revenue: Targeted campaigns to drive conversions
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-lime-400 rounded-full" />
                Enhances Efficiency: Streamlined operations with automation
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-lime-400 rounded-full" />
                Delivers Insight: Data-driven decisions for continuous
                improvement
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
        >
          <h2 className="text-3xl font-bold text-lime-400 text-center mb-12">
            Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value) => (
              <motion.div
                key={value.title}
                className="bg-neutral-800/50 backdrop-blur-sm p-6 rounded-2xl border border-neutral-700 hover:border-lime-400/30 transition-all"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <value.icon className="w-12 h-12 text-lime-400 mb-4" />
                <h4 className="text-xl font-semibold text-white mb-2">
                  {value.title}
                </h4>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why We Exist */}
        <motion.div
          className="bg-neutral-800/50 backdrop-blur-sm p-8 rounded-2xl border border-neutral-700"
          variants={itemVariants}
        >
          <h2 className="text-3xl font-bold text-lime-400 mb-6">
            Why We Exist
          </h2>
          <p className="text-gray-300 mb-8 text-lg leading-relaxed">
            In today&apos;s fast-paced digital world, businesses need more than
            just tools—they need a partner who understands both digital
            marketing and AI automation. AI Cipher Leads transforms complex
            challenges into growth opportunities, ensuring our clients lead, not
            just follow, in their industries.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-neutral-900/30 rounded-xl">
              <h5 className="text-lime-400 font-semibold mb-3">Focus Areas</h5>
              <p className="text-gray-300">
                Merge digital marketing with AI for measurable impact
              </p>
            </div>
            <div className="p-6 bg-neutral-900/30 rounded-xl">
              <h5 className="text-lime-400 font-semibold mb-3">
                Strategic Advantage
              </h5>
              <p className="text-gray-300">
                Leverage data and automation for smarter results
              </p>
            </div>
            <div className="p-6 bg-neutral-900/30 rounded-xl">
              <h5 className="text-lime-400 font-semibold mb-3">
                Growth Enablement
              </h5>
              <p className="text-gray-300">
                Empower businesses to scale and innovate continuously
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;

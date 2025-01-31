import { motion } from "framer-motion";
import { Bot, CheckCircle, Grid, Laptop, Target } from "lucide-react";

const services = [
  {
    title: "Advanced Lead Generation",
    icon: <Target size={32} color="#A3E635" />,
    description:
      "Data-driven strategies to capture and convert high-quality leads",
    features: [
      "Targeted audience acquisition",
      "Qualified lead scoring",
      "Marketing automation",
      "CRM integration",
    ],
  },
  {
    title: "AI-Powered SEO",
    icon: <Bot size={32} color="#A3E635" />,
    description:
      "Leverage cutting-edge AI technology to optimize search rankings",
    features: [
      "AI content optimization",
      "Smart keyword research",
      "Automated rank tracking",
      "Competitor analysis",
    ],
  },
  {
    title: "Social Media Management",
    icon: <Grid size={32} color="#A3E635" />,
    description: "Strategic social media presence to build brand awareness",
    features: [
      "Content strategy",
      "Community management",
      "Analytics reporting",
      "Paid advertising",
    ],
  },
  {
    title: "Web Design & Development",
    icon: <Laptop size={32} color="#A3E635" />,
    description: "Conversion-focused design and development solutions",
    features: [
      "Custom design",
      "Mobile-first approach",
      "UX optimization",
      "Performance tuning",
    ],
  },
];

const stats = [
  { value: "24/7", label: "Support Available" },
  { value: "100%", label: "Satisfaction Rate" },
  { value: "30 Days", label: "Money Back Guarantee" },
  { value: "50+", label: "Expert Team Members" },
];

const ServicesSection = () => {
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
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-lime-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            variants={itemVariants}
          >
            Our Digital Marketing Expertise
          </motion.h2>
          <motion.p
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Comprehensive solutions designed for modern business growth
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="p-8 rounded-2xl bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 hover:border-lime-400/30 transition-all group"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-start gap-6">
                <motion.span
                  className="text-4xl mt-2"
                  whileHover={{ rotate: 15, scale: 1.1 }}
                >
                  {service.icon}
                </motion.span>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-lime-400" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {/* <button className="flex items-center gap-2 text-lime-400 hover:text-lime-300 transition-colors">
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button> */}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="p-6 text-center rounded-xl bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 hover:border-lime-400/30 transition-all"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-3xl font-bold text-lime-400 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-300 uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;

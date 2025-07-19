import { motion } from "framer-motion";
import { Lock, Mail, ShieldCheck } from "lucide-react";

const PrivacyPolicy = () => {
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
    <section className="min-h-screen bg-neutral-900 pt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-white mb-4"
            variants={itemVariants}
          >
            Privacy Policy
            <motion.span
              className="block mt-4 text-lime-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Your Data Security Matters
            </motion.span>
          </motion.h2>
        </motion.div>

        <motion.div
          className="prose prose-invert max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="w-8 h-8 text-lime-400" />
              <h3 className="text-2xl font-semibold text-white">
                Introduction
              </h3>
            </div>
            <p className="text-gray-300">
              At [Your Company Name], we are committed to protecting your
              privacy. This Privacy Policy explains how we collect, use, and
              safeguard your personal information when you use our website and
              services.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-8 h-8 text-lime-400" />
              <h3 className="text-2xl font-semibold text-white">
                Information We Collect
              </h3>
            </div>
            <ul className="text-gray-300 list-disc pl-6 space-y-2">
              <li>Personal information provided through contact forms</li>
              <li>Usage data including IP addresses and browser information</li>
              <li>Cookies and similar tracking technologies</li>
              <li>Communication data from emails or inquiries</li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="w-8 h-8 text-lime-400" />
              <h3 className="text-2xl font-semibold text-white">
                How We Use Your Data
              </h3>
            </div>
            <ul className="text-gray-300 list-disc pl-6 space-y-2">
              <li>To provide and maintain our services</li>
              <li>To improve user experience</li>
              <li>To communicate with you</li>
              <li>To analyze website usage patterns</li>
              <li>To prevent fraud and enhance security</li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-8 h-8 text-lime-400" />
              <h3 className="text-2xl font-semibold text-white">
                Data Protection
              </h3>
            </div>
            <p className="text-gray-300">
              We implement appropriate security measures including encryption,
              access controls, and regular security audits to protect your
              personal information.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-8 h-8 text-lime-400" />
              <h3 className="text-2xl font-semibold text-white">Contact Us</h3>
            </div>
            <p className="text-gray-300">
              For any privacy-related inquiries or requests, please contact our
              Data Protection Officer:
              <br />
              Email: privacy@yourcompany.com
              <br />
              Phone: +1 (555) 123-4567
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-sm text-gray-400 mt-12"
          >
            <p>Last Updated: [Date]</p>
            <p>
              This policy may be updated periodically. We encourage you to
              review this page regularly for any changes.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;

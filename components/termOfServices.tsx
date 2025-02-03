import { motion } from "framer-motion";
import {
  CheckCircle,
  Copyright,
  Landmark,
  Mail,
  Power,
  Scale,
  ScrollText,
  ShieldAlert,
} from "lucide-react";

const TermsOfService = () => {
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
            Terms of Service
            <motion.span
              className="block mt-4 text-lime-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Legal Agreement for Service Usage
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
              <ScrollText className="w-8 h-8 text-lime-400" />
              <h3 className="text-2xl font-semibold text-white">
                Introduction
              </h3>
            </div>
            <p className="text-gray-300">
              These Terms of Service (&quot;Terms&quot;) govern your access to
              and use of CipherLeads&apos;s website and services. By accessing
              or using our services, you agree to be bound by these Terms.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-8 h-8 text-lime-400" />
              <h3 className="text-2xl font-semibold text-white">
                Acceptance of Terms
              </h3>
            </div>
            <p className="text-gray-300">
              By accessing or using our services, you confirm that you accept
              these Terms and agree to comply with them. If you do not agree,
              you must not use our services.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <ShieldAlert className="w-8 h-8 text-lime-400" />
              <h3 className="text-2xl font-semibold text-white">
                User Responsibilities
              </h3>
            </div>
            <ul className="text-gray-300 list-disc pl-6 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Maintain confidentiality of account credentials</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Do not engage in unauthorized access or use</li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Copyright className="w-8 h-8 text-lime-400" />
              <h3 className="text-2xl font-semibold text-white">
                Intellectual Property
              </h3>
            </div>
            <p className="text-gray-300">
              All content, trademarks, and data on this website, including
              software, databases, text, graphics, and logos, are the property
              of [Your Company Name] or its licensors and protected by
              intellectual property laws.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Power className="w-8 h-8 text-lime-400" />
              <h3 className="text-2xl font-semibold text-white">Termination</h3>
            </div>
            <p className="text-gray-300">
              We reserve the right to terminate or suspend access to our
              services immediately, without prior notice, for any breach of
              these Terms.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="w-8 h-8 text-lime-400" />
              <h3 className="text-2xl font-semibold text-white">
                Limitation of Liability
              </h3>
            </div>
            <p className="text-gray-300">
              To the maximum extent permitted by law, [Your Company Name] shall
              not be liable for any indirect, incidental, special, or
              consequential damages resulting from the use or inability to use
              our services.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Landmark className="w-8 h-8 text-lime-400" />
              <h3 className="text-2xl font-semibold text-white">
                Governing Law
              </h3>
            </div>
            <p className="text-gray-300">
              These Terms shall be governed by and construed in accordance with
              the laws of [Your Country/State], without regard to its conflict
              of law provisions.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-8 h-8 text-lime-400" />
              <h3 className="text-2xl font-semibold text-white">Contact Us</h3>
            </div>
            <p className="text-gray-300">
              For any questions regarding these Terms, please contact us:
              <br />
              Email: legal@yourcompany.com
              <br />
              Address: [Your Company Address]
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-sm text-gray-400 mt-12"
          >
            <p>Last Updated: [Date]</p>
            <p>
              We reserve the right to modify these Terms at any time. Your
              continued use of our services constitutes acceptance of any
              revised terms.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TermsOfService;

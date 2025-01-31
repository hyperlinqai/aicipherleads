import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import { useForm } from "react-hook-form";

const ContactPage = () => {
  const { register, handleSubmit } = useForm();

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

  const onSubmit = (data: unknown) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <section className="min-h-screen bg-neutral-900 pt-20 relative overflow-hidden">
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
            Let&apos;s Connect
            <motion.span
              className="block mt-4 text-lime-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Transform Your Digital Presence
            </motion.span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Have a project in mind or want to discuss digital solutions?
            Let&apos;s start a conversation.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <label className="block text-gray-300 mb-2">Your Name</label>
              <div className="relative">
                <input
                  {...register("name", { required: true })}
                  className="w-full bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-xl py-4 px-6 text-white focus:border-lime-400/50 focus:ring-lime-400/50 transition-all"
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block text-gray-300 mb-2">Email Address</label>
              <div className="relative">
                <input
                  type="email"
                  {...register("email", { required: true })}
                  className="w-full bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-xl py-4 px-6 text-white focus:border-lime-400/50 focus:ring-lime-400/50 transition-all"
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block text-gray-300 mb-2">Message</label>
              <div className="relative">
                <textarea
                  {...register("message", { required: true })}
                  rows={5}
                  className="w-full bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-xl py-4 px-6 text-white focus:border-lime-400/50 focus:ring-lime-400/50 transition-all"
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <button
                type="submit"
                className="w-full bg-lime-400 text-neutral-900 py-4 px-8 rounded-xl font-semibold hover:bg-lime-500 transition-all flex items-center justify-center gap-3"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </motion.div>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
          >
            <motion.div
              className="p-8 rounded-2xl bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 hover:border-lime-400/30 transition-all"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start gap-6">
                <div className="p-4 bg-lime-400/10 rounded-xl">
                  <Mail className="w-8 h-8 text-lime-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Email Us
                  </h3>
                  <p className="text-gray-300">contact@example.com</p>
                  <p className="text-gray-300">support@example.com</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="p-8 rounded-2xl bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 hover:border-lime-400/30 transition-all"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start gap-6">
                <div className="p-4 bg-lime-400/10 rounded-xl">
                  <Phone className="w-8 h-8 text-lime-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Call Us
                  </h3>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                  <p className="text-gray-300">Mon-Fri: 9am - 5pm PST</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="p-8 rounded-2xl bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 hover:border-lime-400/30 transition-all"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start gap-6">
                <div className="p-4 bg-lime-400/10 rounded-xl">
                  <MapPin className="w-8 h-8 text-lime-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Visit Us
                  </h3>
                  <p className="text-gray-300">123 Digital Street</p>
                  <p className="text-gray-300">San Francisco, CA 94107</p>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-6 justify-center md:justify-start"
              variants={itemVariants}
            >
              {[Linkedin, Github, Twitter].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="p-3 rounded-xl bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 hover:border-lime-400/30 text-lime-400 hover:text-lime-300 transition-all"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;

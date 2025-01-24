import { motion } from "framer-motion";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import { FC, useEffect } from "react";

const Footer: FC = () => {
  // Smooth scroll handler
  useEffect(() => {
    const handleSmoothScroll = (e: Event) => {
      const target = (e as MouseEvent).target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        document.querySelector(target.hash)?.scrollIntoView({
          behavior: "smooth",
        });
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", handleSmoothScroll);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener("click", handleSmoothScroll);
      });
    };
  }, []);

  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <footer id="footer" className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={footerVariants}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <span className="text-3xl font-bold text-lime-400">
                CIPHER LEADS
              </span>
            </div>
            <p className="text-neutral-400 mb-6 max-w-md">
              Transforming preschool marketing with AI-driven strategies that
              connect you with more parents and grow your admissions.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-neutral-400 hover:text-lime-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-lime-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "Services", "Results", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-neutral-400 hover:text-lime-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-neutral-400">
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-lime-400" />
                info@cipherleads.com
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-lime-400" />
                (555) 123-4567
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="border-t border-neutral-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-neutral-400 text-sm mb-4 md:mb-0">
            © 2024 Cipher Leads. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-neutral-400 hover:text-lime-400 text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-neutral-400 hover:text-lime-400 text-sm transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

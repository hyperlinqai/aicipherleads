import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect } from "react";

import Logo from "@/asset/cipher-leads-logo.svg";

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
          <div>
            <div className="flex items-center mb-6">
              <Image src={Logo} alt="Cipher Leads" height={48} />
            </div>
            <ul className="space-y-3 text-neutral-400 mb-6">
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-lime-400" />
                info@aicipherleads[dot]com
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-lime-400" />
                +91 8823831234
              </li>
            </ul>
            {/* <p className="text-neutral-400 mb-6 max-w-md">
              Transforming preschool marketing with AI-driven strategies that
              connect you with more parents and grow your admissions.
            </p> */}
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/aicipherleads/"
                className="text-neutral-400 hover:text-lime-400 transition-colors"
                aria-label="Facebook"
                target="_blank"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/aicipher_leads"
                className="text-neutral-400 hover:text-lime-400 transition-colors"
                aria-label="Instagram"
                target="_blank"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/ai-cipher-leads"
                className="text-neutral-400 hover:text-lime-400 transition-colors"
                aria-label="Instagram"
                target="_blank"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://www.youtube.com/@aicipherlead"
                className="text-neutral-400 hover:text-lime-400 transition-colors"
                aria-label="Instagram"
                target="_blank"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { value: "Home", link: "/" },
                { value: "Contact", link: "/contact" },
              ].map((link) => (
                <li key={link.value}>
                  <Link
                    href={link.link}
                    className="text-neutral-400 hover:text-lime-400 transition-colors"
                  >
                    {link.value}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-3">
              {[
                {
                  value: "AI-Driven Marketing",
                  link: "/services/ai-driven-marketing",
                },
                {
                  value: "Digital Marketing & Development",
                  link: "/services/digital-marketing",
                },
                {
                  value: "Content Creation",
                  link: "/services/content-creation",
                },
                {
                  value: "Social Media Management",
                  link: "/services/social-media-management",
                },
              ].map((service) => (
                <li key={service.value}>
                  <Link
                    href={service.link}
                    className="text-neutral-400 hover:text-lime-400 transition-colors"
                  >
                    {service.value}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries We Serve */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Industries We Serve</h3>
            <ul className="space-y-3">
              {[
                { value: "Education", link: "/industry/education" },
                { value: "Retail", link: "/industry/retail" },
                {
                  value: "Professional Services",
                  link: "/industry/professional",
                },
              ].map((industry) => (
                <li key={industry.value}>
                  <Link
                    href={industry.link}
                    className="text-neutral-400 hover:text-lime-400 transition-colors"
                  >
                    {industry.value}
                  </Link>
                </li>
              ))}
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
            <Link
              href="/sitemap"
              className="text-neutral-400 hover:text-lime-400 text-sm transition-colors"
            >
              Sitemap
            </Link>
            <Link
              href="/privacy-policy"
              className="text-neutral-400 hover:text-lime-400 text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-services"
              className="text-neutral-400 hover:text-lime-400 text-sm transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

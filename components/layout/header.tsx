import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import Logo from "@/asset/cipher-leads-logo.svg";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isIndustryOpen, setIsIndustryOpen] = useState(false);
  const [isMobileIndustryOpen, setIsMobileIndustryOpen] = useState(false);

  const navLinks = [
    { id: 1, name: "Home", href: "/" },
    {
      id: 2,
      name: "Industry",
      href: "#",
      submenu: [
        { name: "Pre-school", href: "/industry/pre-school" },
        { name: "Entrepreneur", href: "#" },
        { name: "Cell Phone Industry", href: "#" },
      ],
    },
    { id: 3, name: "Contact", href: "/contact" },
  ];

  const mobileMenuVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -20 },
  };

  const dropdownVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full z-50 bg-neutral-900/95 backdrop-blur-sm border-b border-neutral-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link href="/" className="h-11">
              <Image src={Logo} alt="Ciper Leads" height={44} />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.id}
                className="relative"
                onMouseEnter={() => link.submenu && setIsIndustryOpen(true)}
                onMouseLeave={() => link.submenu && setIsIndustryOpen(false)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 text-neutral-300 hover:text-lime-400 transition-colors text-sm font-medium"
                >
                  {link.name}
                  {link.submenu && <ChevronDown className="h-4 w-4" />}
                </Link>

                {link.submenu && (
                  <AnimatePresence>
                    {isIndustryOpen && (
                      <motion.div
                        variants={dropdownVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="absolute top-full left-0 mt-2 w-48 bg-neutral-800/95 backdrop-blur-sm rounded-xl p-2 border border-neutral-700"
                      >
                        {link.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2.5 text-sm text-neutral-300 hover:bg-neutral-700/30 rounded-lg transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}

            <Button className="bg-lime-400 hover:bg-lime-500 text-neutral-900">
              Free Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-neutral-300 hover:text-lime-400"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
              className="md:hidden pb-4 space-y-4"
            >
              {navLinks.map((link) => (
                <div key={link.id}>
                  <div className="flex items-center justify-between">
                    <Link
                      href={link.href}
                      className="block text-neutral-300 hover:text-lime-400 py-2 px-4 rounded-lg hover:bg-neutral-800 transition-colors w-full"
                      onClick={() => {
                        if (!link.submenu) setIsMobileMenuOpen(false);
                      }}
                    >
                      {link.name}
                    </Link>
                    {link.submenu && (
                      <button
                        onClick={() =>
                          setIsMobileIndustryOpen(!isMobileIndustryOpen)
                        }
                        className="p-2 text-neutral-300 hover:text-lime-400"
                      >
                        <ChevronDown
                          className={`h-5 w-5 transition-transform ${
                            isMobileIndustryOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {link.submenu && isMobileIndustryOpen && (
                    <div className="ml-6 space-y-2">
                      {link.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-neutral-300 hover:bg-neutral-700/30 rounded-lg transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <Button className="w-full bg-lime-400 hover:bg-lime-500 text-neutral-900">
                Free Consultation
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

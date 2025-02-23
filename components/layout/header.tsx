import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import Logo from "@/asset/cipher-leads-logo.svg";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navLinks = [
    { id: 1, name: "Home", href: "/" },
    {
      id: 2,
      name: "Services",
      href: "#",
      submenu: [
        { name: "Agentic AI", href: "/services/ai" },
        { name: "Advanced Lead Generation", href: "/services/lead-generation" },
        { name: "AI-Powered SEO", href: "/services/seo" },
        { name: "Social Media Management", href: "/services/social-media" },
        { name: "Web Design & Development", href: "/services/web-design" },
        { name: "Funnel Marketing", href: "/services/funnel-marketing" },
        {
          name: "Online Reputation Management",
          href: "/services/public-reaction",
        },
      ],
    },
    {
      id: 3,
      name: "Industry",
      href: "#",
      submenu: [
        { name: "Education", href: "/industry/education" },
        { name: "Professional Services", href: "/industry/professional" },
        { name: "Retail", href: "/industry/retail" },
      ],
    },
    { id: 4, name: "About", href: "/about" },
    { id: 5, name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-neutral-900/95 backdrop-blur-sm border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="h-11">
            <Image src={Logo} alt="Cipher Leads" height={44} width={150} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.id} className="relative group">
                <Link
                  className="flex items-center gap-1 text-neutral-300 hover:text-lime-400 transition-colors text-sm font-medium cursor-pointer"
                  href={link.href}
                >
                  {link.name}
                  {link.submenu && (
                    <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                  )}
                </Link>
                {link.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-max  bg-neutral-800/95 backdrop-blur-sm rounded-xl p-2 border border-neutral-700 shadow-lg z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    {link.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2.5 text-sm text-neutral-300 hover:bg-neutral-700/30 rounded-lg transition-colors"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href={
                "https://tidycal.com/hyperlinq/30-minutes-free-good-sales-meeting"
              }
              target="_blank"
            >
              <button className="bg-lime-400 hover:bg-lime-500 text-neutral-900 px-6 py-2 rounded-lg font-medium">
                Free Consultation
              </button>
            </Link>
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
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-4">
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
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent closing the mobile menu
                        const submenu = document.getElementById(
                          `submenu-${link.id}`
                        );
                        submenu?.classList.toggle("hidden");
                      }}
                      className="p-2 text-neutral-300 hover:text-lime-400"
                    >
                      <ChevronDown className="h-5 w-5 transition-transform" />
                    </button>
                  )}
                </div>
                {link.submenu && (
                  <div
                    id={`submenu-${link.id}`}
                    className="ml-6  space-y-2 hidden"
                  >
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
            <Link
              href={
                "https://tidycal.com/hyperlinq/30-minutes-free-good-sales-meeting"
              }
              target="_blank"
            >
              <button className="w-full bg-lime-400 hover:bg-lime-500 text-neutral-900 px-6 py-2 rounded-lg font-medium">
                Free Consultation
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

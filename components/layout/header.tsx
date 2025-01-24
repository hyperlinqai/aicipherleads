import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-neutral-900/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-3xl font-bold text-lime-400">
                CIPHER LEADS
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link
                href="#home"
                className="text-white hover:text-lime-400 transition-colors"
              >
                Home
              </Link>
              <Link
                href="#solutions"
                className="text-white hover:text-lime-400 transition-colors"
              >
                Solutions
              </Link>
              <Link
                href="#services"
                className="text-white hover:text-lime-400 transition-colors"
              >
                Services
              </Link>
              <Link
                href="#results"
                className="text-white hover:text-lime-400 transition-colors"
              >
                Results
              </Link>
              <Button className="bg-lime-400 text-neutral-900 hover:bg-lime-500">
                Get Started
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-lime-400 focus:outline-none"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-neutral-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="#home"
              className="block px-3 py-2 text-white hover:bg-lime-400 hover:text-neutral-900 rounded-md"
            >
              Home
            </Link>
            <Link
              href="#solutions"
              className="block px-3 py-2 text-white hover:bg-lime-400 hover:text-neutral-900 rounded-md"
            >
              Solutions
            </Link>
            <Link
              href="#services"
              className="block px-3 py-2 text-white hover:bg-lime-400 hover:text-neutral-900 rounded-md"
            >
              Services
            </Link>
            <Link
              href="#results"
              className="block px-3 py-2 text-white hover:bg-lime-400 hover:text-neutral-900 rounded-md"
            >
              Results
            </Link>
            <Button className="w-full bg-lime-400 text-neutral-900 hover:bg-lime-500">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}

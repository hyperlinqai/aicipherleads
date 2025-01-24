// import { Menu } from "lucide-react";
// import Link from "next/link";
// import { useState } from "react";

// import { Button } from "@/components/ui/button";

// export function Header() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   return (
//     <nav className="fixed w-full z-50 bg-neutral-900/95 backdrop-blur-sm">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <Link href="/" className="flex items-center">
//               <span className="text-3xl font-bold text-lime-400">
//                 CIPHER LEADS
//               </span>
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-center space-x-8">
//               <Link
//                 href="#home"
//                 className="text-white hover:text-lime-400 transition-colors"
//               >
//                 Home
//               </Link>
//               <Link
//                 href="#solutions"
//                 className="text-white hover:text-lime-400 transition-colors"
//               >
//                 Solutions
//               </Link>
//               <Link
//                 href="#services"
//                 className="text-white hover:text-lime-400 transition-colors"
//               >
//                 Services
//               </Link>
//               <Link
//                 href="#results"
//                 className="text-white hover:text-lime-400 transition-colors"
//               >
//                 Results
//               </Link>
//               <Button className="bg-lime-400 text-neutral-900 hover:bg-lime-500">
//                 Get Started
//               </Button>
//             </div>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-lime-400 focus:outline-none"
//             >
//               <Menu className="h-6 w-6" />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-neutral-800">
//           <div className="px-2 pt-2 pb-3 space-y-1">
//             <Link
//               href="#home"
//               className="block px-3 py-2 text-white hover:bg-lime-400 hover:text-neutral-900 rounded-md"
//             >
//               Home
//             </Link>
//             <Link
//               href="#solutions"
//               className="block px-3 py-2 text-white hover:bg-lime-400 hover:text-neutral-900 rounded-md"
//             >
//               Solutions
//             </Link>
//             <Link
//               href="#services"
//               className="block px-3 py-2 text-white hover:bg-lime-400 hover:text-neutral-900 rounded-md"
//             >
//               Services
//             </Link>
//             <Link
//               href="#results"
//               className="block px-3 py-2 text-white hover:bg-lime-400 hover:text-neutral-900 rounded-md"
//             >
//               Results
//             </Link>
//             <Button className="w-full bg-lime-400 text-neutral-900 hover:bg-lime-500">
//               Get Started
//             </Button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 1, name: "Home", href: "#home" },
    { id: 2, name: "Solutions", href: "#solutions" },
    { id: 3, name: "Services", href: "#services" },
    { id: 4, name: "Results", href: "#results" },
  ];

  const mobileMenuVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -20 },
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
            <Link
              href="/"
              className="text-2xl sm:text-3xl font-bold text-lime-400"
            >
              CIPHER LEADS
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className="text-neutral-300 hover:text-lime-400 transition-colors text-sm font-medium"
              >
                {link.name}
              </Link>
            ))}
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-lime-400 hover:bg-lime-500 text-neutral-900">
                  Free Consultation
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-neutral-800 border-neutral-700 max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-lime-400">
                    Get Free Consultation
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-neutral-300">Full Name</Label>
                    <Input className="bg-neutral-700 border-neutral-600" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-neutral-300">Email</Label>
                    <Input className="bg-neutral-700 border-neutral-600" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-neutral-300">Phone</Label>
                    <Input className="bg-neutral-700 border-neutral-600" />
                  </div>
                  <Button className="w-full bg-lime-400 hover:bg-lime-500 text-neutral-900">
                    Schedule Now
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
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
                <Link
                  key={link.id}
                  href={link.href}
                  className="block text-neutral-300 hover:text-lime-400 py-2 px-4 rounded-lg hover:bg-neutral-800 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full bg-lime-400 hover:bg-lime-500 text-neutral-900">
                    Free Consultation
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-neutral-800 border-neutral-700">
                  <DialogHeader>
                    <DialogTitle className="text-lime-400">
                      Get Free Consultation
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label className="text-neutral-300">Full Name</Label>
                      <Input className="bg-neutral-700 border-neutral-600" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-neutral-300">Email</Label>
                      <Input className="bg-neutral-700 border-neutral-600" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-neutral-300">Phone</Label>
                      <Input className="bg-neutral-700 border-neutral-600" />
                    </div>
                    <Button className="w-full bg-lime-400 hover:bg-lime-500 text-neutral-900">
                      Schedule Now
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

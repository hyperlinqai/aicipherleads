import { motion } from "framer-motion";
import { ArrowRight, LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  title: string;
  highlight: string;
  description: string;
  ctaText: string;
  stats: Array<{
    value: string;
    label: string;
  }>;
  floatingElements: Array<{
    icon: LucideIcon;
    delay: number;
  }>;
}

export function HeroSection({ title, highlight, description, ctaText, stats, floatingElements }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="min-h-screen bg-neutral-900 pt-16 sm:pt-20 relative overflow-hidden"
    >
      <div className="stars absolute inset-0 opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-12 py-8 sm:py-16">
        {/* Text Content */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            {title}{" "}
            <motion.span
              className="text-lime-400 block sm:inline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {highlight}
            </motion.span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-neutral-300 mb-6 sm:mb-8 leading-relaxed px-4 sm:px-0">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start px-4 sm:px-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto bg-lime-400 text-neutral-900 hover:bg-lime-500 text-base sm:text-lg py-6 sm:py-5 px-8 group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {ctaText}
                  <ArrowRight className="h-5 w-5 transition-all group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-lime-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Visual Elements */}
        <motion.div
          className="flex-1 relative w-full px-4 sm:px-0 mt-8 lg:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-full h-[300px] sm:h-[450px] bg-neutral-800 rounded-2xl overflow-hidden border border-lime-400/20 hover-tilt">
            <div className="absolute inset-0 bg-gradient-to-br from-lime-400/5 to-transparent" />
            
            {/* Floating elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md px-4">
              <div className="relative h-64">
                {floatingElements.map((element, index) => {
                  const Icon = element.icon;
                  return (
                    <motion.div
                      key={index}
                      className="absolute w-12 h-12 text-lime-400/40"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: element.delay }}
                      style={{
                        top: `${20 + (index * 15)}%`,
                        left: `${10 + (index * 20)}%`,
                      }}
                    >
                      <Icon className="w-full h-full" />
                    </motion.div>
                  );
                })}
              </div>
            </div>
            
            {/* Stats Card */}
            <motion.div
              className="absolute bottom-4 left-1/2 !transform -translate-x-1/2 bg-neutral-800 px-6 py-3 rounded-xl shadow-xl backdrop-blur-sm border border-lime-400/20"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="flex gap-6">
                {stats.slice(0, 2).map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-lime-400 font-bold text-2xl md:text-3xl">
                      {stat.value}
                    </div>
                    <div className="text-white text-xs uppercase tracking-wide mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .stars {
          background: radial-gradient(
              2px 2px at 20px 30px,
              #ffffff,
              rgba(0, 0, 0, 0)
            ),
            radial-gradient(2px 2px at 40px 70px, #ffffff, rgba(0, 0, 0, 0)),
            radial-gradient(2px 2px at 50px 160px, #ffffff, rgba(0, 0, 0, 0)),
            radial-gradient(2px 2px at 90px 40px, #ffffff, rgba(0, 0, 0, 0)),
            radial-gradient(2px 2px at 130px 80px, #ffffff, rgba(0, 0, 0, 0));
          background-repeat: repeat;
          background-size: 200px 200px;
          animation: stars 4s linear infinite;
        }

        @keyframes stars {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-200px);
          }
        }
      `}</style>
    </section>
  );
}
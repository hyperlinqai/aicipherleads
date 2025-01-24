import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function Hero() {
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
            Grow Your Play School Admissions with{" "}
            <span className="text-lime-400 block sm:inline">
              AI-Driven Marketing.
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-neutral-300 mb-6 sm:mb-8 leading-relaxed px-4 sm:px-0">
            Boost enrollments, build parent trust, and outshine competitors
            using proven strategies tailored for preschools.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start px-4 sm:px-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto bg-lime-400 text-neutral-900 hover:bg-lime-500 animate-pulse text-base sm:text-lg py-6 sm:py-4"
              >
                Get a Free Consultation{" "}
                <ArrowRight className="ml-2 hidden sm:inline" />
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-neutral-900 text-base sm:text-lg py-6 sm:py-4"
              >
                View Our Services
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
          <div className="relative w-full h-[300px] sm:h-[400px] bg-neutral-800 rounded-2xl overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-lime-400 opacity-10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-lime-400 opacity-10 rounded-full blur-3xl"></div>
          </div>

          <motion.div
            className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-neutral-800 px-4 sm:px-8 py-3 sm:py-4 rounded-full shadow-xl w-[90%] sm:w-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="flex justify-center gap-4 sm:gap-8">
              <div className="text-center">
                <div className="text-lime-400 font-bold text-xl sm:text-2xl">
                  50+
                </div>
                <div className="text-white text-xs sm:text-sm">
                  Happy Schools
                </div>
              </div>
              <div className="text-center">
                <div className="text-lime-400 font-bold text-xl sm:text-2xl">
                  90%
                </div>
                <div className="text-white text-xs sm:text-sm">
                  Success Rate
                </div>
              </div>
            </div>
          </motion.div>
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

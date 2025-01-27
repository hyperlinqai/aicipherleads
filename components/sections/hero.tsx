import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

interface IProps {
  title: {
    main: string;
    span: string;
  };
  description: string;
  cta: {
    primary: string;
    primaryClick: () => void;
    secondary: string;
    secondaryClick: () => void;
  };
  rightContainer: {
    title: string;
    description: string;
  }[];
}

export function Hero({ title, description, cta, rightContainer }: IProps) {
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
            {title.main}{" "}
            <motion.span
              className="text-lime-400 block sm:inline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {title.span}
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
                  {cta.primary}
                  <ArrowRight className="h-5 w-5 transition-all group-hover:translate-x-1" />
                </span>
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-lime-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-lime-400 text-lime-400 hover:bg-lime-400/10 hover:text-lime-300 text-base sm:text-lg py-6 sm:py-5 px-8"
              >
                {cta.secondary}
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Visual Elements */}
        {/* Replace the visual elements section with this */}
        <motion.div
          className="flex-1 relative w-full px-4 sm:px-0 mt-8 lg:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-full h-[300px] sm:h-[450px] bg-neutral-800 rounded-2xl overflow-hidden border border-lime-400/20 hover-tilt">
            {" "}
            {/* Animated gradient layer */}
            <div className="absolute inset-0 bg-gradient-to-br from-lime-400/5 to-transparent" />
            {/* Floating elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md px-4">
              <div className="relative h-64">
                {/* Abstract shape 1 */}
                <motion.div
                  className="absolute top-0 left-0 w-32 h-32 bg-lime-400/10 rounded-full blur-xl"
                  animate={{
                    y: [0, 20, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Abstract shape 2 */}
                <motion.div
                  className="absolute bottom-0 right-0 w-40 h-40 bg-lime-400/15 rounded-3xl blur-lg"
                  animate={{
                    y: [0, -20, 0],
                    scale: [1, 0.9, 1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />

                <motion.div
                  className="absolute -top-10 -left-10 w-14 h-14 text-lime-400/30"
                  animate={{ y: [5, -15, 0], rotate: [-5, 5, -5] }}
                  transition={{ duration: 8, repeat: Infinity }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </motion.div>

                <motion.div
                  className="absolute bottom-8 left-8 w-12 h-12 text-lime-400/40"
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 6, repeat: Infinity, delay: 0.5 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </motion.div>

                <motion.div
                  className="absolute -top-10 right-8 w-10 h-10 text-lime-400/50"
                  animate={{ y: [0, -20, 0], rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M9 12h6m-3-3v6"
                    />
                  </svg>
                </motion.div>

                {/* Floating School Icon 1 */}
                <motion.div
                  className="absolute top-8 left-12 w-12 h-12 text-lime-400/40"
                  animate={{ rotate: 360, y: [0, -20, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M4 6a2 2 0 012-2h12a2 2 0 012 2v7a2 2 0 01-2 2H6a2 2 0 01-2-2V6z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M9 17v-2a3 3 0 013-3"
                    />
                  </svg>
                </motion.div>

                {/* Floating School Icon 2 */}
                <motion.div
                  className="absolute bottom-16 right-8 w-10 h-10 text-lime-400/30"
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </motion.div>

                {/* Success Rate Chart */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-4 border-lime-400/20 rounded-full"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <div
                    className="absolute inset-0 border-t-4 border-lime-400 rounded-full"
                    style={{
                      clipPath: "inset(0 0 10% 0)", // Represents 90% success
                      transform: "rotate(45deg)",
                    }}
                  />
                </motion.div>
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
                <div className="text-center">
                  <div className="text-lime-400 font-bold text-2xl md:text-3xl">
                    {rightContainer[0].title}
                  </div>
                  <div className="text-white text-xs uppercase tracking-wide mt-1">
                    {rightContainer[0].description}
                  </div>
                </div>
                <div className="h-auto w-px bg-lime-400/20" />
                <div className="text-center">
                  <div className="text-lime-400 font-bold text-2xl md:text-3xl">
                    {rightContainer[1].title}
                  </div>
                  <div className="text-white text-xs uppercase tracking-wide mt-1 ">
                    {rightContainer[1].description}
                  </div>
                </div>
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
      {/* Add this inside the section component */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-lime-400/20 rounded-full"
            initial={{
              scale: 0,
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
            style={{
              width: Math.random() * 20 + 10 + "px",
              height: Math.random() * 20 + 10 + "px",
            }}
          />
        ))}
      </div> */}
    </section>
  );
}

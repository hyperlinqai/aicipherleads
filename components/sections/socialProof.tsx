import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface IProps {
  title: string;
  description: string;
  testimonials: {
    id: number;
    school: string;
    location: string;
    quote: string;
  }[];
}

const SocialProofSection = ({ title, description, testimonials }: IProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  // Carousel animation variants
  const carouselVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "30%" : "-30%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-30%" : "30%",
      opacity: 0,
      transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] },
    }),
  };

  const arrowVariants = {
    hover: { scale: 1.1, backgroundColor: "#86EFAC" },
    tap: { scale: 0.95 },
    initial: { scale: 1, backgroundColor: "#ffffff" },
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 8000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="py-16 bg-white sm:py-24 pb-14 sm:pb-22">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 sm:mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden relative h-[250px]">
            <AnimatePresence
              mode="wait"
              onExitComplete={() => setIsAnimating(false)}
            >
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={carouselVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute w-full px-4"
              >
                <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-10 border border-gray-100">
                  <div className="flex items-start mb-6">
                    <div className="w-14 h-14 bg-lime-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-7 h-7 text-lime-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                      </svg>
                    </div>
                    <div className="ml-5">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {testimonials[currentIndex].school}
                      </h3>
                      <p className="text-gray-500 mt-1">
                        {testimonials[currentIndex].location}
                      </p>
                    </div>
                  </div>
                  <blockquote className="text-lg text-gray-700 leading-relaxed italic">
                    &ldquo;{testimonials[currentIndex].quote}&rdquo;
                  </blockquote>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="mt-8 flex justify-center space-x-3 sm:hidden">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className="w-8 h-2 rounded-full bg-gray-200 relative"
              >
                {currentIndex === idx && (
                  <motion.div
                    layoutId="indicator"
                    className="absolute inset-0 bg-lime-500 rounded-full"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          <motion.button
            onClick={handlePrev}
            variants={arrowVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            className="hidden sm:block absolute -left-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-2xl bg-white shadow-lg border border-gray-200 hover:border-lime-300 transition-colors"
          >
            <svg
              className="w-6 h-6 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </motion.button>

          <motion.button
            onClick={handleNext}
            variants={arrowVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            className="hidden sm:block absolute -right-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-2xl bg-white shadow-lg border border-gray-200 hover:border-lime-300 transition-colors"
          >
            <svg
              className="w-6 h-6 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;

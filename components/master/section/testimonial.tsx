import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Naveen Saharam",
    company: "Fix 4 You Cellular",
    text: "Hyperling transformed our online presence completely. Their digital marketing strategies helped us reach more customers and grow our business significantly.",
    avatar: "NS",
  },
  {
    name: "Abhivyakti Jayswal",
    company: "Anticlothing",
    text: "Their innovative digital solutions have helped us establish a strong online presence. The results have been exceptional!",
    avatar: "AJ",
  },
  {
    name: "David Esau",
    company: "Solpacific Pools Inc",
    text: "Working with Hyperling has been a game-changer for our business. Their expertise in digital marketing has helped us reach new heights.",
    avatar: "DE",
  },

  // Add more testimonials here...
];

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const variants = {
    enter: (direction: "left" | "right") => ({
      x: direction === "right" ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: "left" | "right") => ({
      x: direction === "right" ? -100 : 100,
      opacity: 0,
    }),
  };

  const paginate = (newDirection: "left" | "right") => {
    setDirection(newDirection);
    setActiveIndex((prev) =>
      newDirection === "right"
        ? (prev + 1) % testimonials.length
        : (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="bg-neutral-900 py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-300">
            See what our clients say about working with us
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative min-h-[400px]">
          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="p-8 rounded-2xl bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 hover:border-lime-400/30 transition-all"
              >
                <div className="mb-4 text-lime-400">
                  <Quote className="w-8 h-8" />
                </div>
                <p className="text-gray-300 mb-6">{testimonial.text}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-lime-400/10 flex items-center justify-center text-lime-400 font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden relative overflow-hidden">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4 }}
              className="p-8 rounded-2xl bg-neutral-800/50 backdrop-blur-sm border border-neutral-700"
            >
              <div className="mb-4 text-lime-400">
                <Quote className="w-8 h-8" />
              </div>
              <p className="text-gray-300 mb-6">
                {testimonials[activeIndex].text}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-lime-400/10 flex items-center justify-center text-lime-400 font-bold">
                  {testimonials[activeIndex].avatar}
                </div>
                <div>
                  <h4 className="text-white font-semibold">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {testimonials[activeIndex].company}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Navigation Arrows */}
            <button
              onClick={() => paginate("left")}
              className="absolute top-1/2 -left-2 transform -translate-y-1/2 p-2 rounded-full bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 hover:border-lime-400/30"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={() => paginate("right")}
              className="absolute top-1/2 -right-2 transform -translate-y-1/2 p-2 rounded-full bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 hover:border-lime-400/30"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="md:hidden flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex ? "bg-lime-400" : "bg-neutral-700"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-lime-400/10 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-lime-400/15 rounded-full blur-3xl opacity-30" />
      </div>
    </section>
  );
};

export default TestimonialSection;

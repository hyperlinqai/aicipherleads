import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const clients = [
  { name: "zuri", logo: "/logos/zuri.svg" },
  { name: "TIMEDYOU", logo: "/logos/timedyou.svg" },
  { name: "aibo", logo: "/logos/aibo.svg" },
  { name: "Codeyoung", logo: "/logos/codeyoung.svg" },
  { name: "inducti", logo: "/logos/inducti.svg" },
  { name: "InternsUP", logo: "/logos/internsup.svg" },
];

const ClientCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const duplicatedClients = [...clients, ...clients];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % clients.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-neutral-900 py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg text-lime-400 font-semibold mb-4">
            Trusted By Innovative Teams
          </h3>
          <p className="text-gray-300 text-sm">
            Collaborating with forward-thinking organizations worldwide
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          {/* Gradient overlays */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-neutral-900 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-neutral-900 to-transparent z-10" />

          <motion.div
            ref={carouselRef}
            className="flex gap-8"
            animate={{
              x: -currentIndex * (240 + 32), // logo width + gap
            }}
            transition={{ type: "tween", duration: 1 }}
          >
            {duplicatedClients.map((client, index) => (
              <motion.div
                key={`${client.name}-${index}`}
                className="w-60 h-32 flex items-center justify-center p-6 rounded-2xl bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 hover:border-lime-400/30 transition-all"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {clients.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? "bg-lime-400" : "bg-neutral-700"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientCarousel;

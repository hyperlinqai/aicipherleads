import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";

const clients = [
  { name: "zuri", logo: "/logos/zuri.svg" },
  { name: "TIMEDYOU", logo: "/logos/timedyou.svg" },
  { name: "aibo", logo: "/logos/aibo.svg" },
  { name: "Codeyoung", logo: "/logos/codeyoung.svg" },
  { name: "inducti", logo: "/logos/inducti.svg" },
  { name: "InternsUP", logo: "/logos/internsup.svg" },
  { name: "WinWind", logo: "/logos/winwind.svg" },
  { name: "VAMTEC", logo: "/logos/vamtec.svg" },
  { name: "rianpro", logo: "/logos/rianpro.svg" },
  { name: "OBERNTICK", logo: "/logos/oberntick.svg" },
];

const ClientCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const duplicatedClients = [...clients, ...clients];
  const logoWidth = 240;
  const gap = 32;

  useEffect(() => {
    const currentX = x.get();
    const finalPosition = -(logoWidth + gap) * clients.length;

    const controls = animate(x, [currentX, finalPosition], {
      ease: "linear",
      duration: 30,
      repeat: Infinity,
      repeatType: "loop",
    });

    return controls.stop;
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

          <motion.div ref={carouselRef} className="flex gap-8" style={{ x }}>
            {duplicatedClients.map((client, index) => (
              <motion.div
                key={`${client.name}-${index}`}
                className="w-60 h-32 flex items-center justify-center p-6 rounded-2xl bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 hover:border-lime-400/30 transition-all"
                whileHover={{
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                  initial={{ opacity: 0.8, scale: 0.9 }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.5, ease: "easeInOut" },
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientCarousel;

// import { motion, useAnimation } from "framer-motion";
// import { useEffect, useRef, useState } from "react";

// const CallToAction = () => {
//   const [isMobileCTAVisible, setIsMobileCTAVisible] = useState(false);
//   const controls = useAnimation();
//   const mobileCTARef = useRef<HTMLDivElement>(null);
//   const lastScroll = useRef(0);

//   // Floating animation for main button
//   useEffect(() => {
//     const sequence = async () => {
//       await controls.start({
//         scale: 1.05,
//         transition: { duration: 0.5, repeat: Infinity, repeatType: "reverse" },
//       });
//     };
//     sequence();
//   }, [controls]);

//   // Mobile CTA scroll handler
//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScroll = window.pageYOffset;

//       if (currentScroll > lastScroll.current && currentScroll > 300) {
//         setIsMobileCTAVisible(true);
//       } else {
//         setIsMobileCTAVisible(false);
//       }

//       lastScroll.current = currentScroll;
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Mobile CTA animation
//   useEffect(() => {
//     if (mobileCTARef.current) {
//       mobileCTARef.current.style.transform = isMobileCTAVisible
//         ? "translateY(0)"
//         : "translateY(100%)";
//     }
//   }, [isMobileCTAVisible]);

//   const trustItems = [
//     { value: "24/7", label: "Support" },
//     { value: "100%", label: "Satisfaction" },
//     { value: "30 Days", label: "Results" },
//   ];

//   return (
//     <section id="cta" className="py-20 relative overflow-hidden">
//       {/* Gradient Background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-lime-400 via-lime-500 to-lime-600" />

//       {/* Floating Shapes */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="floating-shapes" />
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="text-center max-w-3xl mx-auto">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-5xl font-bold text-white mb-6"
//           >
//             Ready to Fill Your Classrooms?
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.5 }}
//             className="text-xl text-white/90 mb-12"
//           >
//             Let&apos;s make your preschool the top choice for parents in your
//             city
//           </motion.p>

//           {/* CTA Button */}
//           <div className="flex flex-col items-center space-y-4">
//             <motion.button
//               animate={controls}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-white text-neutral-900 px-8 py-4 rounded-full text-xl font-semibold shadow-lg hover:shadow-xl"
//             >
//               Schedule Your Free Strategy Session
//             </motion.button>

//             <p className="text-white/80 text-sm">
//               Limited spots available this month
//             </p>
//           </div>

//           {/* Trust Indicators */}
//           <motion.div
//             className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//           >
//             {trustItems.map((item) => (
//               <div key={item.label} className="text-center">
//                 <div className="text-white/90 text-2xl font-bold">
//                   {item.value}
//                 </div>
//                 <div className="text-white/80 text-sm">{item.label}</div>
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </div>

//       {/* Mobile Sticky CTA */}
//       <div
//         ref={mobileCTARef}
//         className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg transition-transform duration-300 z-50 lg:hidden"
//         style={{ transform: "translateY(100%)" }}
//       >
//         <button className="w-full bg-lime-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-lime-600 transition-colors duration-300">
//           Schedule Free Session
//         </button>
//       </div>

//       <style jsx>{`
//         .floating-shapes {
//           position: absolute;
//           width: 100%;
//           height: 100%;
//           background-image: radial-gradient(
//               circle,
//               #ffffff 2px,
//               transparent 2px
//             ),
//             radial-gradient(circle, #ffffff 1.5px, transparent 1.5px),
//             radial-gradient(circle, #ffffff 1px, transparent 1px);
//           background-size: 100px 100px, 80px 80px, 60px 60px;
//           background-position: 0 0, 25px 25px, 15px 15px;
//           animation: floatingAnimation 20s linear infinite;
//           opacity: 0.1;
//         }

//         @keyframes floatingAnimation {
//           0% {
//             transform: translateY(0) translateX(0);
//           }
//           50% {
//             transform: translateY(-20px) translateX(10px);
//           }
//           100% {
//             transform: translateY(0) translateX(0);
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default CallToAction;

const TestComponent = () => {
  return <div></div>;
};

export default TestComponent;

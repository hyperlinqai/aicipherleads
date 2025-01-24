// // app/page.js
// import { motion } from "framer-motion";
// import { Playball } from "next/font/google";
// import Image from "next/image";

// // Load custom font
// const playball = Playball({
//   weight: "400",
//   subsets: ["latin"],
//   variable: "--font-playball",
// });

// export default function Hero() {
//   return (
//     <section className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
//       {/* Animated floating elements */}
//       <motion.div
//         className="absolute top-20 left-10 w-24 h-24 bg-yellow-300/20 rounded-full blur-xl"
//         animate={{
//           y: [0, 20, 0],
//           scale: [1, 1.1, 1],
//         }}
//         transition={{
//           duration: 4,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />

//       {/* Main content container */}
//       <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center gap-12">
//         {/* Text Content */}
//         <div className="md:w-1/2 z-10">
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className={`${playball.variable} font-cursive text-5xl md:text-6xl lg:text-7xl text-blue-900 mb-6`}
//           >
//             Grow Your Preschool
//             <br />
//             <span className="text-orange-500">Admissions by 200%</span>
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3 }}
//             className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl"
//           >
//             AI-powered marketing strategies that bring engaged parents to your
//             door
//           </motion.p>

//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-orange-200 transition-all"
//           >
//             Get Free Enrollment Audit
//           </motion.button>
//         </div>

//         {/* Visual Section */}
//         <div className="md:w-1/2 relative">
//           <div className="relative max-w-xl mx-auto">
//             {/* Main illustration */}
//             <Image
//               src="/preschool-hero.png"
//               alt="Happy preschool students"
//               width={600}
//               height={400}
//               className="rounded-2xl shadow-xl z-10 relative"
//             />

//             {/* Animated elements around image */}
//             <motion.div
//               className="absolute -top-8 -right-8 bg-green-100 p-4 rounded-2xl shadow-md"
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               transition={{ delay: 0.5 }}
//             >
//               <span className="text-2xl font-bold text-green-800">
//                 🌟 #1 in Local SEO
//               </span>
//             </motion.div>

//             <motion.div
//               className="absolute -bottom-8 -left-8 bg-purple-100 p-3 rounded-full"
//               animate={{ rotate: [0, 15, -15, 0] }}
//               transition={{ repeat: Infinity, duration: 4 }}
//             >
//               <span className="text-xl">🚌 100% Enrollment Growth</span>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// -------------------------------------------------------------------------------------------------------------
// app/page.js
// import { motion, useScroll, useTransform } from "framer-motion";
// import Image from "next/image";
// import { useRef } from "react";

// export default function Hero() {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({ target: ref });
//   const y = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);

//   return (
//     <section
//       ref={ref}
//       className="min-h-screen bg-gradient-to-br from-white to-blue-50 relative overflow-hidden"
//     >
//       {/* Animated gradient mesh background */}
//       <motion.div
//         className="absolute inset-0 opacity-20"
//         style={{
//           background: `
//             radial-gradient(at 71% 67%, hsl(210, 100%, 97%) 0, transparent 50%),
//             radial-gradient(at 29% 22%, hsl(217, 100%, 97%) 0, transparent 50%)
//           `,
//           y,
//         }}
//       />

//       {/* Content container */}
//       <div className="container mx-auto px-4 h-screen flex items-center justify-center">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           {/* Text Content */}
//           <div className="relative z-10">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               <div className="mb-8">
//                 <motion.div
//                   initial={{ width: 0 }}
//                   animate={{ width: "100%" }}
//                   transition={{ duration: 1.2, delay: 0.3 }}
//                   className="h-[2px] bg-blue-500 mb-4"
//                 />

//                 <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
//                   <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
//                     Transform Your Preschool&apos;s
//                   </span>
//                   <br />
//                   <motion.span
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ delay: 0.4 }}
//                     className="block mt-3 text-gray-700"
//                   >
//                     Admissions Strategy
//                   </motion.span>
//                 </h1>

//                 <motion.p
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.6 }}
//                   className="text-xl text-gray-600 mb-8 max-w-xl"
//                 >
//                   AI-optimized marketing solutions that deliver
//                   <span className="font-semibold text-blue-600">
//                     {" "}
//                     quality enrollments
//                   </span>
//                   and{" "}
//                   <span className="font-semibold text-teal-500">
//                     lasting parent relationships
//                   </span>
//                 </motion.p>
//               </div>

//               <motion.div
//                 initial={{ scale: 0.95, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 transition={{ delay: 0.8 }}
//                 className="flex gap-4 items-center"
//               >
//                 <button className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300">
//                   Get Free Strategy Session
//                 </button>
//                 <div className="h-12 w-px bg-gray-200" />
//                 <div className="flex items-center gap-2 text-gray-600">
//                   <StarIcon className="w-5 h-5 text-yellow-400" />
//                   <span>#1 Rated in Education Marketing</span>
//                 </div>
//               </motion.div>
//             </motion.div>
//           </div>

//           {/* Animated Visual Section */}
//           <div className="relative">
//             <div className="relative aspect-square rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl">
//               <Image
//                 src="/modern-preschool.png"
//                 alt="Modern preschool management"
//                 fill
//                 className="object-cover"
//               />

//               {/* Floating badges */}
//               <motion.div
//                 className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-lg"
//                 initial={{ scale: 0, rotate: -45 }}
//                 animate={{ scale: 1, rotate: 0 }}
//                 transition={{ delay: 0.5 }}
//               >
//                 <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
//                   +200% ROI
//                 </span>
//               </motion.div>

//               <motion.div
//                 className="absolute -bottom-6 -left-6 bg-white p-4 rounded-full shadow-lg"
//                 animate={{
//                   y: [0, -15, 0],
//                   rotate: [0, 5, -5, 0],
//                 }}
//                 transition={{
//                   duration: 4,
//                   repeat: Infinity,
//                 }}
//               >
//                 <span className="flex items-center gap-2">
//                   <TrendingUpIcon className="w-6 h-6 text-teal-500" />
//                   <span className="font-medium">Top 1% SEO</span>
//                 </span>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Scrolling ornament lines */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="container h-full mx-auto">
//           <div className="h-full border-l border-r border-gray-100" />
//         </div>
//       </div>
//     </section>
//   );
// }

// // SVG Icons
// const StarIcon = ({ className }: { className: string }) => (
//   <svg className={className} fill="currentColor" viewBox="0 0 20 20">
//     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//   </svg>
// );

// const TrendingUpIcon = ({ className }: { className: string }) => (
//   <svg
//     className={className}
//     fill="none"
//     stroke="currentColor"
//     viewBox="0 0 24 24"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth={2}
//       d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
//     />
//   </svg>
// );

// _______-----------------------------------------------------------------------------------------------------

// app/page.jsx
// "use client";
// import {
//   AnimatePresence,
//   motion,
//   useScroll,
//   useTransform,
// } from "framer-motion";
// import { useKeenSlider } from "keen-slider/react";
// import Image from "next/image";
// import { useEffect, useState } from "react";

// import { animated, useSpring } from "@react-spring/web";

// export default function Hero() {
//   const [isMobile, setIsMobile] = useState(false);
//   const { scrollYProgress } = useScroll();
//   const rotateX = useTransform(scrollYProgress, [0, 1], [0, -5]);
//   const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

//   useEffect(() => {
//     setIsMobile(window.innerWidth < 768);
//   }, []);

//   // Floating animation config
//   const floatingAnimation = useSpring({
//     from: { y: 0 },
//     to: async (next) => {
//       while (1) {
//         await next({ y: 10 });
//         await next({ y: 0 });
//       }
//     },
//     config: { duration: 3000 },
//   });

//   return (
//     <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-primary-50 to-primary-100">
//       {/* Dynamic grid background */}
//       <motion.div
//         className="absolute inset-0 opacity-20"
//         style={{
//           backgroundImage: `
//           linear-gradient(to right, #e5e7eb 1px, transparent 1px),
//           linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
//         `,
//           backgroundSize: "40px 40px",
//           scale,
//         }}
//       />

//       {/* Main content container - Improved mobile layout */}
//       <div className="container mx-auto px-4 sm:px-6 h-screen flex items-center justify-center">
//         <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 md:gap-16 items-center relative z-10">
//           {/* Text Content with Floating Elements */}
//           <div className="relative space-y-6 md:space-y-8">
//             <AnimatePresence>
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8 }}
//                 className="relative"
//               >
//                 {/* Animated title with responsive sizing */}
//                 <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
//                   <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500">
//                     Next-Gen Preschool
//                   </span>
//                   <motion.span
//                     className="block mt-2 md:mt-4 text-gray-800 text-2xl md:text-3xl lg:text-4xl"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ delay: 0.4 }}
//                   >
//                     Enrollment Solutions
//                   </motion.span>
//                 </h1>

//                 {/* Interactive floating cards - Mobile adjusted position */}
//                 <div className="absolute -top-16 right-0 md:-top-20">
//                   <animated.div
//                     style={floatingAnimation}
//                     className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-lg border border-gray-100"
//                   >
//                     <span className="text-xl md:text-2xl font-bold text-primary-600">
//                       #1 SEO
//                     </span>
//                   </animated.div>
//                 </div>

//                 {/* Dynamic description with mobile padding */}
//                 <motion.p
//                   className="text-lg md:text-xl text-gray-600 max-w-xl md:max-w-2xl mb-6 md:mb-8 relative z-10"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.6 }}
//                 >
//                   <span className="bg-white/50 backdrop-blur-sm p-2 md:p-3 rounded-lg">
//                     AI-driven marketing strategies that deliver
//                     <strong className="text-primary-600">
//                       {" "}
//                       3x more qualified leads{" "}
//                     </strong>
//                     and{" "}
//                     <strong className="text-secondary-500">
//                       90% parent satisfaction
//                     </strong>
//                   </span>
//                 </motion.p>
//               </motion.div>
//             </AnimatePresence>

//             {/* Interactive CTA Section - Stack on mobile */}
//             <motion.div
//               className="flex flex-col sm:flex-row gap-4 md:gap-6 items-start sm:items-center"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.8 }}
//             >
//               <motion.button
//                 whileTap={{ scale: 0.95 }}
//                 className="w-full sm:w-auto relative overflow-hidden group bg-gradient-to-r from-primary-600 to-secondary-500 text-white px-6 py-4 md:px-8 md:py-5 rounded-lg md:rounded-xl text-lg md:text-xl font-semibold shadow-xl hover:shadow-primary-200 transition-all duration-300"
//               >
//                 <span className="relative z-10">Get AI Audit →</span>
//                 <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//               </motion.button>

//               <div className="flex items-center gap-3 text-gray-600">
//                 <div className="flex -space-x-3">
//                   {[1, 2, 3].map((item) => (
//                     <motion.div
//                       key={item}
//                       className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white shadow-md"
//                       style={{
//                         backgroundImage: `url(/avatar-${item}.jpg)`,
//                         backgroundSize: "cover",
//                       }}
//                       whileHover={{ y: -5 }}
//                     />
//                   ))}
//                 </div>
//                 <span className="text-sm md:text-base">
//                   Trusted by 250+ Schools
//                 </span>
//               </div>
//             </motion.div>
//           </div>

//           {/* Interactive Visual Panel - Mobile sizing */}
//           <motion.div
//             className="relative h-[400px] sm:h-[500px] md:h-[600px] rounded-2xl md:rounded-[3rem] overflow-hidden border-4 md:border-8 border-white shadow-xl md:shadow-2xl bg-gray-50"
//             style={{ rotateX }}
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1 }}
//           >
//             {/* ... existing image and overlay code */}
//           </motion.div>
//         </div>
//       </div>
//       {/* Floating Particles */}
//       {!isMobile && (
//         <div className="absolute inset-0 pointer-events-none">
//           {[...Array(20)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute w-2 h-2 bg-blue-400 rounded-full"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//               }}
//               animate={{
//                 y: [0, 20, 0],
//                 opacity: [0.8, 0.2, 0.8],
//               }}
//               transition={{
//                 duration: 2 + Math.random() * 3,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// "use client";
// import dynamic from "next/dynamic";
// import { useEffect, useState } from "react";

// import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

// const Lottie = dynamic(() => import("react-lottie-player"), { ssr: false });

// export default function Home() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [activeService, setActiveService] = useState<number | null>(null);
//   const [currentTestimonial, setCurrentTestimonial] = useState(0);

//   useEffect(() => {
//     // Smooth scroll
//     document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//       anchor.addEventListener("click", function (e) {
//         e.preventDefault();
//         const target = document.querySelector(this.getAttribute("href")!);
//         target?.scrollIntoView({ behavior: "smooth" });
//       });
//     });

//     // Testimonial carousel
//     const interval = setInterval(() => {
//       setCurrentTestimonial((prev) => (prev + 1) % 3);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   const testimonials = [
//     { school: "Little Stars Preschool", location: "San Francisco, CA" },
//     { school: "Sunshine Learners", location: "Chicago, IL" },
//     { school: "Kids First Academy", location: "Austin, TX" },
//   ];

//   return (
//     <div className="min-h-screen bg-neutral-900">
//       {/* Header */}
//       <nav className="fixed w-full z-50 bg-neutral-900/95 backdrop-blur-sm shadow-lg">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-20">
//             <div className="flex-shrink-0">
//               <a href="#" className="flex items-center">
//                 <span className="text-3xl font-bold text-lime-400">
//                   CIPHER LEADS
//                 </span>
//               </a>
//             </div>

//             <div className="hidden md:block">
//               <div className="ml-10 flex items-center space-x-8">
//                 {["Home", "Solutions", "Services", "Results"].map((item) => (
//                   <a
//                     key={item}
//                     href={`#${item}`}
//                     className="text-white hover:text-lime-400 transition-colors"
//                   >
//                     {item}
//                   </a>
//                 ))}
//                 <a
//                   href="#CallToAction"
//                   className="px-4 py-2 rounded-md bg-lime-400 text-neutral-900 hover:bg-lime-500 transition-all transform hover:scale-105"
//                 >
//                   Get Started
//                 </a>
//               </div>
//             </div>

//             <div className="md:hidden">
//               <button
//                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                 className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-lime-400"
//               >
//                 <svg
//                   className="h-6 w-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         <div
//           className={`md:hidden bg-neutral-800 transition-all duration-300 ${
//             isMobileMenuOpen ? "max-h-96" : "max-h-0"
//           }`}
//         >
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             {["Home", "Solutions", "Services", "Results"].map((item) => (
//               <a
//                 key={item}
//                 href={`#${item}`}
//                 className="block px-3 py-2 text-white hover:bg-lime-400 hover:text-neutral-900 rounded-md"
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 {item}
//               </a>
//             ))}
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section id="Hero" className="min-h-screen bg-neutral-900 pt-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col lg:flex-row items-center justify-center gap-12 py-16">
//           <div className="flex-1 text-center lg:text-left">
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
//               Grow Your Play School Admissions with{" "}
//               <span className="text-lime-400">AI-Driven Marketing.</span>
//             </h1>

//             <p className="text-lg md:text-xl text-neutral-300 mb-8 leading-relaxed">
//               Boost enrollments, build parent trust, and outshine competitors
//               using proven strategies tailored for preschools.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//               <a
//                 href="#CallToAction"
//                 className="px-8 py-4 bg-lime-400 text-neutral-900 rounded-full text-lg font-semibold hover:bg-lime-500 transform hover:scale-105 transition-all duration-300"
//               >
//                 Get a Free Consultation
//               </a>
//               <a
//                 href="#Services"
//                 className="px-8 py-4 border-2 border-lime-400 text-lime-400 rounded-full text-lg font-semibold hover:bg-lime-400 hover:text-neutral-900 transition-all duration-300"
//               >
//                 View Our Services
//               </a>
//             </div>
//           </div>

//           <div className="flex-1 relative">
//             <div className="relative w-full h-[400px] bg-neutral-800 rounded-2xl overflow-hidden">
//               {/* <Lottie
//                 loop
//                 play
//                 animationData={require("../../public/animation.json")} // Add your Lottie JSON
//                 className="absolute inset-0"
//               /> */}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Problem Statement Section */}
//       <section id="ProblemStatement" className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
//               Are You Struggling to Attract More Admissions?
//             </h2>
//             <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
//               Common challenges faced by preschool owners in today's competitive
//               market
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
//             {[
//               {
//                 icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
//                 title: "Low Online Visibility",
//                 text: "Parents can't find your preschool online when searching for options in your area.",
//               },
//               // Add other card data
//             ].map((card, index) => (
//               <div
//                 key={index}
//                 className="relative group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
//               >
//                 <div className="absolute inset-0 bg-lime-400 opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300" />
//                 <div className="text-center">
//                   <div className="w-16 h-16 mx-auto mb-6 relative">
//                     <svg
//                       className="w-full h-full text-neutral-700 group-hover:text-lime-500 transition-colors duration-300"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d={card.icon}
//                       />
//                     </svg>
//                   </div>
//                   <h3 className="text-xl font-semibold mb-4 text-neutral-800">
//                     {card.title}
//                   </h3>
//                   <p className="text-neutral-600 group-hover:text-neutral-700 transition-colors duration-300">
//                     {card.text}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-neutral-900 text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             <div className="col-span-1 md:col-span-2">
//               <div className="flex items-center mb-6">
//                 <span className="text-3xl font-bold text-lime-400">
//                   CIPHER LEADS
//                 </span>
//               </div>
//               <p className="text-neutral-400 mb-6 max-w-md">
//                 Transforming preschool marketing with AI-driven strategies that
//                 connect you with more parents and grow your admissions.
//               </p>
//             </div>
//           </div>

//           <div className="border-t border-neutral-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
//             <p className="text-neutral-400 text-sm mb-4 md:mb-0">
//               © 2024 Cipher Leads. All rights reserved.
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );

// }

import { Header } from "@/components/layout/header";
import BenefitsSection from "@/components/sections/benefit";
import CallToAction from "@/components/sections/callToAction";
import Footer from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { ProblemStatement } from "@/components/sections/problem-statement";
import ResultsSection from "@/components/sections/result";
import ServicesSection from "@/components/sections/services";
import SocialProofSection from "@/components/sections/socialProof";
import SolutionsSection from "@/components/sections/solution";
import TestComponent from "@/components/sections/test";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-900">
      <Header />
      <Hero />
      <ProblemStatement />
      <SolutionsSection />
      <BenefitsSection />
      <ServicesSection />
      <SocialProofSection />
      <ResultsSection />
      <CallToAction />
      <TestComponent />
      <Footer />
    </main>
  );
}

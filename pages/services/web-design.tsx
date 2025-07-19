import {
  BarChart3,
  CheckCircle,
  Clock,
  Code,
  Cpu,
  Database,
  Filter,
  Heart,
  Layers,
  Lightbulb,
  MapPin,
  RefreshCcw,
  Repeat,
  Rocket,
  Settings,
  Target,
  Zap,
} from "lucide-react";
import Head from "next/head";
import React from "react";

import CallToAction from "@/components/industry/sections/callToAction";
import Footer from "@/components/industry/sections/footer";
import { Header } from "@/components/layout/header";
import DeliverablesSection from "@/components/service/deliverable";
import FAQSection from "@/components/service/faq";
import ServiceHomeSection from "@/components/service/hero";
import KeyFeaturesGrid from "@/components/service/keyFeature";
import ProcessBreakdown from "@/components/service/processBreakdown";
import TechnicalDeepDive from "@/components/service/technical";

const WebDesign = () => {
  const serviceHomeSection = {
    title: "Elevate Your Brand with Cutting-Edge Web & Mobile Design",
    description:
      "Transform your online presence with custom-built websites and mobile applications designed for performance, aesthetics, and user engagement.",
  };

  const trustItems = [
    {
      value: "24/7",
      label: "Support",
      icon: <Clock className="w-6 h-6" />,
    },
    {
      value: "100%",
      label: "Satisfaction",
      icon: <Heart className="w-6 h-6" />,
    },
    {
      value: "60 Days",
      label: "Results",
      icon: <CheckCircle className="w-6 h-6" />,
    },
  ];

  const CallToActionData = {
    title: "Start Your Project Today",
    description:
      "Turn your ideas into stunning digital experiences. Get a free consultation now!",
    trustItems: trustItems,
  };

  const keyFeatures = [
    {
      icon: <Target size={40} strokeWidth={1.5} />,
      title: "User-Centric UI/UX Design",
      text: "We craft intuitive, visually stunning designs that enhance user experience and engagement.",
    },
    {
      icon: <BarChart3 size={40} strokeWidth={1.5} />,
      title: "Custom Website Development",
      text: "From sleek business websites to robust eCommerce platforms, we develop sites that convert visitors into customers.",
    },
    {
      icon: <Lightbulb size={40} strokeWidth={1.5} />,
      title: "SEO-Optimized Development",
      text: "Built-in SEO best practices ensure your website ranks higher on search engines and attracts organic traffic",
    },
    {
      icon: <RefreshCcw size={40} strokeWidth={1.5} />,
      title: "Performance & Security Optimization",
      text: "Lightning-fast load times, secure coding practices, and compliance with industry standards",
    },
  ];

  const processSteps = [
    {
      title: "Discovery & Strategy",
      icon: <MapPin className="w-6 h-6" />,
      description:
        "Understanding your goals, target audience, and industry trends",
    },
    {
      title: "Design & Prototyping",
      icon: <Rocket className="w-6 h-6" />,
      description:
        "Creating wireframes and high-fidelity prototypes for seamless user experiences",
    },
    {
      title: "Development & Optimization",
      icon: <Filter className="w-6 h-6" />,
      description:
        "Building responsive, SEO-friendly, and scalable websites/apps",
    },
    {
      title: "Testing & Deployment",
      icon: <Repeat className="w-6 h-6" />,
      description:
        "Ensuring flawless functionality, speed, and security before going live.",
    },
  ];

  const processBreakdownData = {
    title: "Our 4-Step Web Development Process",
    description:
      "A streamlined approach to crafting high-performance websites and apps.",
    processSteps,
  };

  const deliverables = [
    {
      title: "Custom Web & Mobile Design",
      icon: <Target size={40} strokeWidth={1.5} />,
      description: "Tailored solutions to match your brand identity.",
    },
    {
      title: "SEO & Performance-Optimized Code",
      icon: <BarChart3 size={40} strokeWidth={1.5} />,
      description: "Faster load times and improved rankings.",
    },
    {
      title: "Scalability & Future-Proofing",
      icon: <Lightbulb size={40} strokeWidth={1.5} />,
      description: "Websites and apps that grow with your business.",
    },
    {
      title: "Ongoing Support & Maintenance",
      icon: <RefreshCcw size={40} strokeWidth={1.5} />,
      description: "Keeping your site/app updated and secure.",
    },
  ];

  const deliverableData = {
    title: "What You Get with Our Web & Mobile Development Services",
    description:
      "A comprehensive suite of tools and strategies to attract, qualify, and convert high-quality development.",
    deliverables,
  };

  const deepDiveFeatures = [
    {
      title: "Modern Tech Stack",
      icon: <Cpu size={40} strokeWidth={1.5} />,
      description:
        "We use the latest frameworks and technologies for cutting-edge development.",
    },
    {
      title: "Scalable Infrastructure",
      icon: <Database size={40} strokeWidth={1.5} />,
      description:
        "Built on cloud-native architecture to handle high traffic and ensure seamless scalability.",
    },
    {
      title: "User-Centric Interfaces",
      icon: <Settings size={40} strokeWidth={1.5} />,
      description: "Designed with UX/UI best practices to maximize engagement.",
    },
    {
      title: "Real-Time Analytics",
      icon: <Zap size={40} strokeWidth={1.5} />,
      description:
        "Track performance metrics in real-time to make data-driven decisions and refine strategies.",
    },
    {
      title: "Secure Development Practices",
      icon: <Layers size={40} strokeWidth={1.5} />,
      description:
        "Data encryption, SSL integration, and security audits for maximum protection.",
    },
    {
      title: "Secure Data Handling",
      icon: <Code size={40} strokeWidth={1.5} />,
      description:
        "End-to-end encryption and compliance with industry standards to protect sensitive data.",
    },
  ];

  const technicalDeepDiveData = {
    title: "Technical Deep Dive",
    description:
      "Explore the cutting-edge technology and methodologies that power our solutions.",
    deepDiveFeatures,
  };

  const faqs = [
    {
      question: "What types of websites do you develop?",
      answer:
        "We build business websites, eCommerce platforms, portfolio sites, and custom applications.",
    },
    {
      question: "Do you offer mobile app development?",
      answer:
        "Yes! We design and develop native and cross-platform apps for iOS and Android.",
    },
    {
      question: "Do you offer custom solutions?",
      answer:
        "Yes, we tailor our strategies to meet your specific business needs and objectives.",
    },
    {
      question: "How long does the development process take?",
      answer:
        "Timelines vary based on project complexity, but we ensure efficient turnaround times.",
    },
    {
      question: "Will my website be SEO-friendly?",
      answer:
        "Absolutely! Our websites are optimized for search engines from the ground up.",
    },
  ];

  const faqsData = {
    title: "Frequently Asked Questions",
    description:
      "Get answers to common questions about our services and processes.",
    faqs,
  };
  return (
    <div>
      <Head>
        <title>Web Design Company in Indore | Ai Cipher Lead</title>
        <meta
          name="description"
          content="Ai Cipher Lead, an innovative AI-powered web design company in Indore. specializes in AI web development and design to elevate your brand. Contact us now!"
        />
      </Head>
      <Header />
      <ServiceHomeSection {...serviceHomeSection} />
      <KeyFeaturesGrid
        title="How We Supercharge Your Lead Pipeline"
        features={keyFeatures}
      />
      <ProcessBreakdown {...processBreakdownData} />
      <DeliverablesSection {...deliverableData} />
      <TechnicalDeepDive {...technicalDeepDiveData} />
      <FAQSection {...faqsData} />
      <CallToAction {...CallToActionData} />
      <Footer />
    </div>
  );
};

export default WebDesign;

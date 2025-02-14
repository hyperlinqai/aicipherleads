import {
  BarChart3,
  CheckCircle,
  Clock,
  Code,
  Cpu,
  Database,
  Filter,
  Heart,
  Lightbulb,
  MapPin,
  RefreshCcw,
  Repeat,
  Rocket,
  Settings,
  Target,
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

const Seo = () => {
  const serviceHomeSection = {
    title: "Elevate Your Business with Tailored Solutions",
    description:
      "Discover comprehensive funnel marketing services designed to drive conversions, nurture leads, and deliver measurable results.",
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
    title: "Transform Your Funnel Strategy Today",
    description:
      "Join the growing number of businesses that have skyrocketed their conversions with our proven funnel marketing system.",
    trustItems: trustItems,
  };

  const keyFeatures = [
    {
      icon: <Target size={40} strokeWidth={1.5} />,
      title: "Lead Capture Optimization",
      text: "Maximize your lead intake with optimized landing pages and engaging calls-to-action that capture attention.",
    },
    {
      icon: <BarChart3 size={40} strokeWidth={1.5} />,
      title: "Conversion-Focused Content",
      text: "Craft compelling, value-driven content that guides prospects smoothly through your funnel.",
    },
    {
      icon: <Lightbulb size={40} strokeWidth={1.5} />,
      title: "Email Nurturing Sequences",
      text: "Automated, personalized email flows keep your audience engaged and primed for conversion.",
    },
    {
      icon: <RefreshCcw size={40} strokeWidth={1.5} />,
      title: "Retargeting & Remarketing",
      text: "Re-engage potential customers with smart retargeting strategies that bring them back to complete their journey.",
    },
  ];

  const processSteps = [
    {
      title: "Funnel Strategy & Planning",
      icon: <MapPin className="w-6 h-6" />,
      description:
        "Develop a tailored roadmap that aligns with your business goals and targets high-intent prospects.",
    },
    {
      title: "Content & Offer Creation",
      icon: <Rocket className="w-6 h-6" />,
      description:
        "Design irresistible offers and content that speak directly to your audience’s pain points and desires.",
    },
    {
      title: "Funnel Build & Integration",
      icon: <Filter className="w-6 h-6" />,
      description:
        "Seamlessly integrate multi-channel touchpoints—from landing pages to CRM systems—for a cohesive user experience.",
    },
    {
      title: "Testing & Optimization",
      icon: <Repeat className="w-6 h-6" />,
      description:
        "Continuously refine your funnel with A/B testing and real-time analytics to maximize conversions.",
    },
  ];

  const processBreakdownData = {
    title: "Our 4-Step Funnel Marketing Engine",
    description:
      "A streamlined process to attract, nurture, and convert leads into loyal customers.",
    processSteps,
  };

  const deliverables = [
    {
      title: "Lead Capture Optimization",
      icon: <Target size={40} strokeWidth={1.5} />,
      description:
        "Attract and capture quality leads with conversion-optimized landing pages and clear calls-to-action.",
    },
    {
      title: "Conversion-Focused Content",
      icon: <BarChart3 size={40} strokeWidth={1.5} />,
      description:
        "Engage your audience with content designed to educate, persuade, and convert.",
    },
    {
      title: "Email Nurturing Sequences",
      icon: <Lightbulb size={40} strokeWidth={1.5} />,
      description:
        "Keep prospects engaged with automated email campaigns that build trust and move leads down the funnel.",
    },
    {
      title: "Retargeting & Remarketing",
      icon: <RefreshCcw size={40} strokeWidth={1.5} />,
      description:
        "Bring back visitors and boost conversions with smart, data-driven retargeting tactics.",
    },
  ];

  const deliverableData = {
    title: "What You Get with Funnel Marketing",
    description:
      "A comprehensive suite of strategies and tools to build a high-converting sales funnel that drives growth.",
    deliverables,
  };

  const deepDiveFeatures = [
    {
      title: "Advanced Analytics & Tracking",
      icon: <Cpu size={40} strokeWidth={1.5} />,
      description:
        "Utilize state-of-the-art tracking tools to monitor user behavior and measure funnel performance in real time.",
    },
    {
      title: "A/B Testing & Conversion Optimization",
      icon: <Database size={40} strokeWidth={1.5} />,
      description:
        "Experiment with different elements to continuously improve your conversion rates.",
    },
    {
      title: "Seamless Integration",
      icon: <Settings size={40} strokeWidth={1.5} />,
      description:
        "Integrate effortlessly with your CRM, email marketing platforms, and other essential tools for a unified workflow.",
    },
    // {
    //   title: "Modular Design",
    //   icon: <Zap size={40} strokeWidth={1.5} />,
    //   description:
    //     "Customize each funnel component to adapt to your evolving business needs and market trends.",
    // },
    // {
    //   title: "Modular Design",
    //   icon: <Layers size={40} strokeWidth={1.5} />,
    //   description:
    //     "Flexible components allow easy integration with existing systems and support future upgrades.",
    // },
    {
      title: "Robust Data Security",
      icon: <Code size={40} strokeWidth={1.5} />,
      description:
        "Ensure end-to-end encryption and compliance with industry standards to protect sensitive data.",
    },
  ];

  const technicalDeepDiveData = {
    title: "Technical Deep Dive",
    description:
      "Explore the advanced technology and methodologies that power our funnel marketing solutions.",
    deepDiveFeatures,
  };

  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We provide a range of digital marketing services including lead generation, AI-powered SEO, social media management, web design, funnel marketing, and online reputation management.",
    },
    {
      question: "How long does it take to see results?",
      answer:
        "Results vary depending on the service and your business goals. Typically, you can expect to see initial improvements within 1-3 months.",
    },
    {
      question: "Do you offer custom solutions?",
      answer:
        "Yes, we tailor our strategies to meet your specific business needs and objectives.",
    },
    {
      question: "What industries do you specialize in?",
      answer:
        "We work with businesses across various industries, including education, healthcare, e-commerce, and professional services.",
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
        <title>
          Best Marketing Funnel Agency in Indore | Convert Leads Into Sales
        </title>
        <meta
          name="description"
          content="Ai Cipher Leads is the leading marketing funnel agency in Indore. Convert your website visitors into paying customers and build your brand like never before."
        />
      </Head>
      <Header />
      <ServiceHomeSection {...serviceHomeSection} />
      <KeyFeaturesGrid
        title="How We Supercharge Your Marketing Funnel"
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

export default Seo;

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

const Seo = () => {
  const serviceHomeSection = {
    title: "Elevate Your Business with Tailored Solutions",
    description:
      "Discover comprehensive services designed to drive growth, enhance efficiency, and deliver measurable results.",
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
    title: "Transform Your Preschool's Future Today",
    description:
      "Join 200+ schools who've doubled admissions with our proven system",
    trustItems: trustItems,
  };

  const keyFeatures = [
    {
      icon: <Target size={40} strokeWidth={1.5} />,
      title: "Targeted Audience Acquisition",
      text: "Laser-focused campaigns to reach decision-makers in your niche.",
    },
    {
      icon: <BarChart3 size={40} strokeWidth={1.5} />,
      title: "Qualified Lead Scoring",
      text: "AI ranks leads by intent, budget, and readiness to buy.",
    },
    {
      icon: <Lightbulb size={40} strokeWidth={1.5} />,
      title: "Marketing Automation",
      text: "Nurture leads 24/7 with drip campaigns and behavior triggers.",
    },
    {
      icon: <RefreshCcw size={40} strokeWidth={1.5} />,
      title: "CRM Integration",
      text: "Sync leads seamlessly with HubSpot, Salesforce, or custom tools.",
    },
  ];

  const processSteps = [
    {
      title: "Audience Mapping",
      icon: <MapPin className="w-6 h-6" />,
      description: "Identify high-value demographics and pain points.",
    },
    {
      title: "Campaign Launch",
      icon: <Rocket className="w-6 h-6" />,
      description: "Multi-channel ads, SEO, and LinkedIn outreach.",
    },
    {
      title: "Lead Filtering",
      icon: <Filter className="w-6 h-6" />,
      description: "AI scores leads in real-time to prioritize sales efforts.",
    },
    {
      title: "Conversion Optimization",
      icon: <Repeat className="w-6 h-6" />,
      description: "Automated follow-ups and CRM-driven nurturing.",
    },
  ];

  const processBreakdownData = {
    title: "Our 4-Step Lead Generation Engine",
    description:
      " A streamlined process to attract, qualify, and convert leads into loyal customers.",
    processSteps,
  };

  const deliverables = [
    {
      title: "Targeted Audience Acquisition",
      icon: <Target size={40} strokeWidth={1.5} />,
      description:
        "Laser-focused campaigns to reach decision-makers in your niche.",
    },
    {
      title: "Qualified Lead Scoring",
      icon: <BarChart3 size={40} strokeWidth={1.5} />,
      description: "AI ranks leads by intent, budget, and readiness to buy.",
    },
    {
      title: "Marketing Automation",
      icon: <Lightbulb size={40} strokeWidth={1.5} />,
      description:
        "Nurture leads 24/7 with drip campaigns and behavior triggers.",
    },
    {
      title: "CRM Integration",
      icon: <RefreshCcw size={40} strokeWidth={1.5} />,
      description:
        "Sync leads seamlessly with HubSpot, Salesforce, or custom tools.",
    },
  ];

  const deliverableData = {
    title: "What You Get with Advanced Lead Generation",
    description:
      "A comprehensive suite of tools and strategies to attract, qualify, and convert high-quality leads.",
    deliverables,
  };

  const deepDiveFeatures = [
    {
      title: "AI-Powered Algorithms",
      icon: <Cpu size={40} strokeWidth={1.5} />,
      description:
        "Our advanced AI algorithms analyze data patterns to optimize lead generation and targeting strategies.",
    },
    {
      title: "Scalable Infrastructure",
      icon: <Database size={40} strokeWidth={1.5} />,
      description:
        "Built on cloud-native architecture to handle high traffic and ensure seamless scalability.",
    },
    {
      title: "Customizable Workflows",
      icon: <Settings size={40} strokeWidth={1.5} />,
      description:
        "Flexible workflows tailored to your business needs for maximum efficiency and control.",
    },
    {
      title: "Real-Time Analytics",
      icon: <Zap size={40} strokeWidth={1.5} />,
      description:
        "Track performance metrics in real-time to make data-driven decisions and refine strategies.",
    },
    {
      title: "Modular Design",
      icon: <Layers size={40} strokeWidth={1.5} />,
      description:
        "Modular components allow easy integration with existing systems and future upgrades.",
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
        <title>AI-Powered SEO Company in Indore | Ai Cipher Lead</title>
        <meta
          name="description"
          content="Ai Cipher Lead is an AI-powered SEO company in Indore, making it a great choice for those looking for the best AI SEO services in Indore. Call Now!"
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

export default Seo;

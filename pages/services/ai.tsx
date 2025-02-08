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
    title: "Elevate Your Business with Autonomous Intelligence",
    description:
      "Discover our advanced AI solutions engineered to drive innovation, optimize operations, and deliver measurable results.",
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
    title: "Transform Your Business Operations Today",
    description:
      "Join the revolution and empower your enterprise with autonomous intelligence from Agentic AI.",
    trustItems: trustItems,
  };

  const keyFeatures = [
    {
      icon: <Target size={40} strokeWidth={1.5} />,
      title: "Autonomous Decision-Making",
      text: "Our intelligent systems process data and make informed decisions in real time, reducing the need for constant manual oversight.",
    },
    {
      icon: <BarChart3 size={40} strokeWidth={1.5} />,
      title: "Real-Time Data Insights",
      text: "Gain instant, actionable intelligence to stay ahead of market trends and operational challenges.",
    },
    {
      icon: <Lightbulb size={40} strokeWidth={1.5} />,
      title: "Predictive Analytics",
      text: "Leverage advanced machine learning algorithms to forecast trends, enabling proactive strategy adjustments.",
    },
    {
      icon: <RefreshCcw size={40} strokeWidth={1.5} />,
      title: "Seamless Integration",
      text: "Effortlessly incorporate Agentic AI into your existing tech stack for streamlined operations and enhanced performance.",
    },
  ];

  const processSteps = [
    {
      title: "Data Integration & Analysis",
      icon: <MapPin className="w-6 h-6" />,
      description:
        "Consolidate diverse data sources to fuel robust, AI-driven insights.",
    },
    {
      title: "Model Training & Deployment",
      icon: <Rocket className="w-6 h-6" />,
      description:
        "Deploy custom AI models that learn and evolve, tailored specifically to your business needs.",
    },
    {
      title: "Real-Time Monitoring",
      icon: <Filter className="w-6 h-6" />,
      description:
        "Continuously track performance with live analytics to ensure optimal decision-making.",
    },
    {
      title: "Continuous Optimization",
      icon: <Repeat className="w-6 h-6" />,
      description:
        "Refine and adjust AI models and strategies for sustained growth and efficiency.",
    },
  ];

  const processBreakdownData = {
    title: "Our 4-Step Agentic AI Engine",
    description:
      " A streamlined process to integrate, optimize, and scale autonomous AI across your business.",
    processSteps,
  };

  const deliverables = [
    {
      title: "Autonomous Decision-Making",
      icon: <Target size={40} strokeWidth={1.5} />,
      description:
        "Experience faster, more accurate decisions powered by intelligent automation.",
    },
    {
      title: "Real-Time Analytics",
      icon: <BarChart3 size={40} strokeWidth={1.5} />,
      description:
        "Access live data and performance metrics to drive immediate, data-driven actions.",
    },
    {
      title: "Predictive Forecasting",
      icon: <Lightbulb size={40} strokeWidth={1.5} />,
      description:
        "Harness machine learning to accurately predict trends and future outcomes.",
    },
    {
      title: "Seamless System Integration",
      icon: <RefreshCcw size={40} strokeWidth={1.5} />,
      description:
        "Integrate effortlessly with your existing CRM, ERP, and other business tools for a unified workflow.",
    },
  ];

  const deliverableData = {
    title: "What You Get with Agentic AI",
    description:
      "An innovative suite of AI-powered tools designed to automate decisions, provide predictive insights, and transform your business operations.",
    deliverables,
  };

  const deepDiveFeatures = [
    {
      title: "Advanced Machine Learning Algorithms",
      icon: <Cpu size={40} strokeWidth={1.5} />,
      description:
        "Utilize state-of-the-art AI to analyze data patterns and optimize decision-making processes.",
    },
    {
      title: "Cloud-Native Architecture",
      icon: <Database size={40} strokeWidth={1.5} />,
      description:
        "Built on a secure, scalable cloud framework designed to handle high volumes of data with ease.",
    },
    {
      title: "Customizable AI Workflows",
      icon: <Settings size={40} strokeWidth={1.5} />,
      description:
        "Tailor our AI solutions to meet your unique operational requirements for maximum efficiency.",
    },
    {
      title: "Real-Time Analytics Engine",
      icon: <Zap size={40} strokeWidth={1.5} />,
      description:
        "Monitor and adjust your strategies on the fly with continuous performance tracking.",
    },
    {
      title: "Modular Design",
      icon: <Layers size={40} strokeWidth={1.5} />,
      description:
        "Flexible components allow easy integration with existing systems and support future upgrades.",
    },
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
      "Explore the cutting-edge technology behind Agentic AI that powers your business transformation.",
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
        title="How Agentic AI Empowers Your Business"
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

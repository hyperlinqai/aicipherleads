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
      "Discover comprehensive services designed to amplify your brand’s voice, boost engagement, and deliver measurable results across all social platforms.",
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
    title: "Transform Your Social Media Strategy Today",
    description:
      "Join 200+ brands that have elevated their online presence and engagement with our proven system.",
    trustItems: trustItems,
  };

  const keyFeatures = [
    {
      icon: <Target size={40} strokeWidth={1.5} />,
      title: "Content Strategy & Creation",
      text: "Tailor-made content plans and captivating creatives that resonate with your audience.",
    },
    {
      icon: <BarChart3 size={40} strokeWidth={1.5} />,
      title: "Engagement Optimization",
      text: "Proactive strategies to drive interactions, cultivate community, and boost brand loyalty.",
    },
    {
      icon: <Lightbulb size={40} strokeWidth={1.5} />,
      title: "Analytics & Reporting",
      text: "Data-driven insights to refine your strategy and maximize your ROI on social campaigns.",
    },
    {
      icon: <RefreshCcw size={40} strokeWidth={1.5} />,
      title: "Platform Integration",
      text: "Manage all your social media accounts seamlessly from one unified dashboard.",
    },
  ];

  const processSteps = [
    {
      title: "Audience Analysis",
      icon: <MapPin className="w-6 h-6" />,
      description:
        "Identify key demographics, interests, and trends to craft a targeted social media strategy.",
    },
    {
      title: "Content Deployment",
      icon: <Rocket className="w-6 h-6" />,
      description:
        "Distribute engaging content—visual, textual, and video—across platforms like Facebook, Instagram, Twitter, and LinkedIn.",
    },
    {
      title: "Engagement & Monitoring",
      icon: <Filter className="w-6 h-6" />,
      description:
        "Real-time monitoring to interact with your audience, address inquiries, and foster genuine relationships.",
    },
    {
      title: "Performance Optimization",
      icon: <Repeat className="w-6 h-6" />,
      description:
        "Continuously analyze key metrics to optimize campaigns, ensuring consistent improvement and growth.",
    },
  ];

  const processBreakdownData = {
    title: "Our 4-Step Social Media Management Engine",
    description:
      "A streamlined process to elevate your brand, engage your audience, and convert followers into loyal customers.",
    processSteps,
  };

  const deliverables = [
    {
      title: "Content Strategy & Creation",
      icon: <Target size={40} strokeWidth={1.5} />,
      description:
        "Develop bespoke content that aligns with your brand voice and captivates your audience.",
    },
    {
      title: "Engagement Optimization",
      icon: <BarChart3 size={40} strokeWidth={1.5} />,
      description:
        "Increase interactions through dynamic posts, interactive stories, and community-building tactics.",
    },
    {
      title: "Analytics & Reporting",
      icon: <Lightbulb size={40} strokeWidth={1.5} />,
      description:
        "Leverage detailed performance insights to fine-tune your social media efforts for better results.",
    },
    {
      title: "Platform Integration",
      icon: <RefreshCcw size={40} strokeWidth={1.5} />,
      description:
        "Efficiently manage multiple channels, ensuring consistent messaging and streamlined operations.",
    },
  ];

  const deliverableData = {
    title: "What You Get with Our Social Media Management Services",
    description:
      "A comprehensive suite of tools and strategies designed to enhance your online presence and drive measurable engagement.",
    deliverables,
  };

  const deepDiveFeatures = [
    {
      title: "Advanced Analytics Tools",
      icon: <Cpu size={40} strokeWidth={1.5} />,
      description:
        "Utilize state-of-the-art analytics to track engagement, reach, and conversions across all channels.",
    },
    {
      title: "Customizable Content Calendars",
      icon: <Database size={40} strokeWidth={1.5} />,
      description:
        "Plan, schedule, and automate posts for optimal timing and maximum impact.",
    },
    {
      title: "Automated Monitoring Systems",
      icon: <Settings size={40} strokeWidth={1.5} />,
      description:
        "Real-time tracking of social mentions and interactions, enabling prompt and effective responses.",
    },
    {
      title: "Seamless Integration",
      icon: <Zap size={40} strokeWidth={1.5} />,
      description:
        "Connect effortlessly with your CRM, email marketing, and content management systems to create a unified digital ecosystem.",
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
      "Explore the innovative technology and methodologies behind our social media management solutions.",
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
        title="How We Supercharge Your Social Media Presence"
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

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
      "Discover comprehensive services designed to enhance your online presence, build trust, and deliver measurable results through proactive reputation management.",
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
    title: "Transform Your Online Reputation Today",
    description:
      "Join the growing number of businesses that have reclaimed their digital presence with our proven system.",
    trustItems: trustItems,
  };

  const keyFeatures = [
    {
      icon: <Target size={40} strokeWidth={1.5} />,
      title: "Brand Monitoring",
      text: "24/7 real-time tracking of online mentions, reviews, and social media conversations to keep you ahead of the curve.",
    },
    {
      icon: <BarChart3 size={40} strokeWidth={1.5} />,
      title: "Crisis Management",
      text: "Swift, strategic interventions to mitigate negative feedback and safeguard your brand image.",
    },
    {
      icon: <Lightbulb size={40} strokeWidth={1.5} />,
      title: "Review Management",
      text: "Encourage positive reviews and manage negative ones effectively to build a balanced and trustworthy online reputation.",
    },
    {
      icon: <RefreshCcw size={40} strokeWidth={1.5} />,
      title: "SEO & Content Optimization",
      text: "Enhance search visibility and credibility with targeted content strategies that support your reputation goals.",
    },
  ];

  const processSteps = [
    {
      title: "Reputation Audit",
      icon: <MapPin className="w-6 h-6" />,
      description:
        "Conduct a comprehensive analysis of your current online presence and public sentiment.",
    },
    {
      title: "Strategy Development",
      icon: <Rocket className="w-6 h-6" />,
      description:
        "Craft a tailored action plan addressing your unique reputation challenges and opportunities.",
    },
    {
      title: "Implementation",
      icon: <Filter className="w-6 h-6" />,
      description:
        "Deploy targeted strategies—including content creation, review responses, and social media engagement—to elevate your brand.",
    },
    {
      title: "Continuous Monitoring & Optimization",
      icon: <Repeat className="w-6 h-6" />,
      description:
        "Utilize real-time analytics to refine your approach and maintain a consistently positive online image.",
    },
  ];

  const processBreakdownData = {
    title: "Our 4-Step Online Reputation Management Engine",
    description:
      "A streamlined process to protect, enhance, and promote your digital presence.",
    processSteps,
  };

  const deliverables = [
    {
      title: "Brand Monitoring",
      icon: <Target size={40} strokeWidth={1.5} />,
      description:
        "Stay informed with round-the-clock tracking of online mentions and sentiment trends.",
    },
    {
      title: "Crisis Management",
      icon: <BarChart3 size={40} strokeWidth={1.5} />,
      description:
        "Minimize the impact of negative publicity with rapid, effective response strategies",
    },
    {
      title: "Review Management",
      icon: <Lightbulb size={40} strokeWidth={1.5} />,
      description:
        "Enhance trust with proactive review solicitation and strategic responses to feedback.",
    },
    {
      title: "SEO & Content Optimization",
      icon: <RefreshCcw size={40} strokeWidth={1.5} />,
      description:
        "Improve search engine rankings and reinforce credibility through optimized, high-quality content.",
    },
  ];

  const deliverableData = {
    title: "What You Get with Online Reputation Management",
    description:
      "A full spectrum of tools and strategies to secure and boost your digital credibility.",
    deliverables,
  };

  const deepDiveFeatures = [
    {
      title: "Advanced Sentiment Analysis",
      icon: <Cpu size={40} strokeWidth={1.5} />,
      description:
        "Leverage AI-driven tools to accurately gauge public sentiment and identify emerging trends.",
    },
    {
      title: "Real-Time Monitoring Tools",
      icon: <Database size={40} strokeWidth={1.5} />,
      description:
        "Continuous, multi-platform tracking to ensure you’re always in control of your digital narrative.",
    },
    {
      title: "Automated Response Management",
      icon: <Settings size={40} strokeWidth={1.5} />,
      description:
        "Streamline review and comment responses with systems designed for prompt, professional engagement.",
    },
    {
      title: "Data-Driven Insights",
      icon: <Zap size={40} strokeWidth={1.5} />,
      description:
        "Access actionable analytics to continuously refine your reputation management strategy.",
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
        "Protect sensitive information with industry-standard encryption and compliance measures.",
    },
  ];

  const technicalDeepDiveData = {
    title: "Technical Deep Dive",
    description:
      "Explore the advanced technology and methodologies powering our reputation management solutions.",
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
          Public Relations Company in Indore | PR Agency | Ai Cipher Leads
        </title>
        <meta
          name="description"
          content="Ai Cipher Leads is the best PR agency in Indore. We providing top-notch PR services to help businesses and individuals establish their brand, increase their visibility. Contact us now!"
        />
      </Head>
      <Header />
      <ServiceHomeSection {...serviceHomeSection} />
      <KeyFeaturesGrid
        title="How We Supercharge Your Online Reputation"
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

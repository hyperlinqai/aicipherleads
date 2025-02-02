import { CheckCircle, Clock, Heart } from "lucide-react";
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
      value: "30 Days",
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
  return (
    <div>
      <Header />
      <ServiceHomeSection />
      <KeyFeaturesGrid />
      <ProcessBreakdown />
      <DeliverablesSection />
      <TechnicalDeepDive />
      <FAQSection />
      <CallToAction {...CallToActionData} />
      <Footer />
    </div>
  );
};

export default Seo;

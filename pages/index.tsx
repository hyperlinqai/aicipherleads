import { CheckCircle, Clock, Heart } from "lucide-react";

import CallToAction from "@/components/industry/sections/callToAction";
import Footer from "@/components/industry/sections/footer";
import { Header } from "@/components/layout/header";
// import ClientVisibility from "@/components/master/section/clientVisibilty";
import GrowthSection from "@/components/master/section/growthBarrier";
import HeroSection from "@/components/master/section/hero";
import ProcessSection from "@/components/master/section/process";
import ServicesSection from "@/components/master/section/service";
import TestimonialSection from "@/components/master/section/testimonial";

export default function Home() {
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
      <main className="min-h-screen bg-neutral-900">
        <Header />
        <HeroSection />
        {/* <ClientVisibility /> */}
        <GrowthSection />
        <ServicesSection />
        <ProcessSection />
        <TestimonialSection />
        <CallToAction {...CallToActionData} />
        <Footer />
      </main>
    </div>
  );
}

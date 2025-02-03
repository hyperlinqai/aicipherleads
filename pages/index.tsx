import { CheckCircle, Clock, Heart } from "lucide-react";
import Head from "next/head";

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
      value: "60 Days",
      label: "Results",
      icon: <CheckCircle className="w-6 h-6" />,
    },
  ];

  const CallToActionData = {
    title: "Ready to Transform Your Business?",
    description:
      "Join 200+ businesses achieving measurable growth with our AI-powered marketing solutions.",
    trustItems: trustItems,
  };

  return (
    <div>
      <Head>
        <title>
          AI-Powered Digital Marketing Agency | Boost Growth with Data-Driven
          Strategies
        </title>
        <meta
          name="description"
          content="Transform your business with our AI-driven marketing solutions. From SEO and lead generation to custom web design and reputation management, we help education, retail, and service providers scale smarter. Get started today!"
        />
      </Head>
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

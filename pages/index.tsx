import { Poppins } from "next/font/google";

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

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`${poppins.variable} `}>
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
    </div>
  );
}

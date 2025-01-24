import { Geist, Geist_Mono } from "next/font/google";

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

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
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

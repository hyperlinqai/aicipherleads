import {
  Building2,
  CheckCircle,
  Clock,
  Heart,
  MapPin,
  Monitor,
} from "lucide-react";

import BenefitsSection from "@/components/industry/sections/benefit";
import CallToAction from "@/components/industry/sections/callToAction";
import Footer from "@/components/industry/sections/footer";
import { Hero } from "@/components/industry/sections/hero";
import { ProblemStatement } from "@/components/industry/sections/problem-statement";
import ResultsSection from "@/components/industry/sections/result";
import ServicesSection from "@/components/industry/sections/services";
import SocialProofSection from "@/components/industry/sections/socialProof";
import SolutionsSection from "@/components/industry/sections/solution";
import { Header } from "@/components/layout/header";

// -----------------Hero Section Data Start-----------------
const HeroSectionData = {
  title: {
    main: "Elevate Your Professional Practice",
    span: "with AI-Driven Digital Marketing.",
  },
  description:
    "Unlock the power of AI-driven digital marketing to increase client appointments, build trust, and drive online conversions for your law firm, medical practice, or professional service business.",
  cta: {
    primary: "Get Free Consultation",
    primaryClick: () => {},
  },
  rightContainer: [
    {
      title: "20+",
      description: "Successful Practices",
    },
    {
      title: "90%",
      description: "Growth in Appointments",
    },
  ],
};
// -----------------Hero Section Data End-----------------

// ------------------Problem Section Data Start-----------------
const problems = [
  {
    icon: <MapPin className="w-full h-full" />,
    title: "Low Online Visibility",
    description:
      "Your practice isn’t ranking high in search results when potential clients look for experienced professionals in your field.",
  },
  {
    icon: <Building2 className="w-full h-full" />,
    title: "High Local Competition",
    description:
      "The competitive landscape in professional services requires a robust digital presence to stand out among top firms.",
  },
  {
    icon: <Monitor className="w-full h-full" />,
    title: "Outdated Marketing Strategies",
    description:
      "Traditional marketing methods no longer effectively connect with today’s informed and discerning clients.",
  },
];

const problemStatementData = {
  title:
    "Are You Struggling to Attract More Clients to Your Professional Practice?",
  description:
    "Common challenges faced by professional service providers such as law firms, medical practices, and consulting agencies in today’s competitive market:",
  problems: problems,
};
// ------------------Problem Section Data End-----------------

// ---------------------Solution Section Data Start---------------------
const steps = [
  {
    title: "Audit & Data Analysis",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
    desc: "Conduct a comprehensive review of your current digital marketing efforts and online presence to identify areas of improvement and growth potential for your practice.",
  },
  {
    title: "Custom Strategy Development",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    desc: "Develop a tailored, data-driven marketing plan that targets potential clients searching for professional services in your area.",
  },
  {
    title: "Campaign Launch & Optimization",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    desc: "Deploy multi-channel campaigns using targeted social media advertising, local SEO, and content marketing to attract quality leads and build trust.",
  },
  {
    title: "Results & Continuous Improvement",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    desc: "Utilize real-time analytics and A/B testing to optimize campaigns, ensuring maximum conversion rates and sustained growth in client appointments.",
  },
];

const SolutionsSectionData = {
  title: "How We Turn Marketing Challenges into Increased Client Appointments",
  description:
    "Our proven 4-Step AI-Driven Digital Marketing Process is designed to transform your professional practice.",
  steps: steps,
};
//--------------------------Solution Section Data End---------------------

// ---------------------------Benefit Section Data Start---------------------
const benefits = [
  {
    title: "Local SEO & Mobile Optimization",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    desc: "Dominate local search results and ensure your website is optimized for potential clients searching for professional services near them.",
  },
  {
    title: "AI-Powered Digital Campaigns",
    icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
    desc: "Leverage advanced AI technology to target potential clients based on search behavior and industry trends, ensuring higher engagement and quality leads.",
  },
  {
    title: "Social Media Advertising",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    desc: "Run hyper-targeted ads on platforms like LinkedIn, Facebook, and Google to attract clients actively seeking professional services.",
  },
  {
    title: "24/7 Support & Data-Driven Insights",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    desc: "Benefit from continuous monitoring, real-time analytics, and expert support to keep your campaigns performing at their best.",
  },
];

const BenefitSectionData = {
  title:
    "What You Get with Our Professional Services Digital Marketing Solutions",
  description:
    "Our comprehensive suite of digital marketing solutions is designed specifically for professional service providers such as law firms, medical practices, and consulting agencies.",
  benefits: benefits,
};
// ------------------------------Benefit Section Data End----------------------------

// ----------------------------------Services Section Data Start--------------------------------
const services = [
  {
    title: "Social Media Ads",
    icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
    desc: "Targeted campaigns that reach potential clients across professional networks.",
    features: [
      "LinkedIn Ads",
      "Facebook & Instagram Ads",
      "Custom Audience Targeting",
      "Performance Analytics",
    ],
  },
  {
    title: "Local SEO",
    icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
    desc: "Dominate local search results for professional service queries.",
    features: [
      "Local SEO Optimization",
      "Keyword Research",
      "Content Strategy",
      "Google My Business",
    ],
  },
  {
    title: "Website Design",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    desc: "Beautiful, conversion-focused websites designed for professional practices.",
    features: [
      "Mobile Responsive",
      "Appointment Scheduling Integration",
      "Online Consultation Forms",
      "Client Testimonials",
    ],
  },
];

const ServicesSectionData = {
  title: "Technical Deep Dive",
  description:
    "Explore the cutting-edge technology and methodologies that power our professional services digital marketing solutions.",
  services: services,
};
// ----------------------------------Services Section Data End--------------------------------

// ----------------------------Social Proof Section Data Start----------------------------
const testimonials = [
  {
    id: 1,
    school: "Prestige Law Group",
    location: "New York, NY",
    quote:
      "Our client inquiries increased by 45% within just two months of working with Cipher Leads. Their expertise in professional marketing is outstanding.",
  },
  {
    id: 2,
    school: "Healing Hands Medical",
    location: "Chicago, IL",
    quote:
      "The AI-driven approach to marketing has transformed how we attract new patients. Our appointment bookings are higher than ever!",
  },
  {
    id: 3,
    school: "Prime Consulting",
    location: "San Francisco, CA",
    quote:
      "The ROI we've seen from Cipher Leads' strategies has been incredible. They truly understand what professional clients are looking for.",
  },
];

const SocialProofData = {
  title: "Trusted by 100+ Professional Service Providers Nationwide",
  description: "See what other professionals are saying about our services",
  testimonials: testimonials,
};
// ------------------------------Social Proof Section Data End------------------------------

// ------------------------------Results Section Data Start------------------------------
const stats = [
  { value: 300, label: "Leads in 30 Days" },
  { value: 80, label: "Client Engagement Rate" },
  { value: 55, label: "Conversion Rate" },
];

const ResultSectionData = {
  title: "See What We've Achieved for Practices Like Yours",
  description:
    "Real results from our proven digital marketing strategies for professional services",
  stats: stats,
};
// ------------------------------Results Section Data End------------------------------

// ------------------------------CTA Section Data Start------------------------------
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
  title: "Transform Your Professional Practice Today",
  description:
    "Join 100+ professional service providers who have boosted client appointments and engagement with our proven marketing system.",
  trustItems: trustItems,
};
// ------------------------------CTA Section Data End------------------------------

export default function PreSchool() {
  return (
    <div>
      <main className="min-h-screen bg-neutral-900">
        <Header />
        <Hero {...HeroSectionData} />

        <ProblemStatement {...problemStatementData} />
        <SolutionsSection {...SolutionsSectionData} />
        <BenefitsSection {...BenefitSectionData} />
        <ServicesSection {...ServicesSectionData} />
        <SocialProofSection {...SocialProofData} />
        <ResultsSection {...ResultSectionData} />
        <CallToAction {...CallToActionData} />
        <Footer />
      </main>
    </div>
  );
}

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

// -----------------Hero section Data Start-----------------
const HeroSectionData = {
  title: {
    main: "Grow Your Play School Admissions",
    span: "with AI-Driven Marketing.",
  },
  description:
    "Unlock the power of AI-driven marketing to boost your preschool's admissions and engage parents like never before.",
  cta: {
    primary: "Get Free Consultation",
    primaryClick: () => {},
    secondary: "Explore Solutions",
    secondaryClick: () => {},
  },
  rightContainer: [
    {
      title: "50+",
      description: "Happy Schools",
    },
    {
      title: "90%",
      description: "Success Rate",
    },
  ],
};
// -----------------Hero section Data End-----------------

// ------------------Problem Section Data Start-----------------
const problems = [
  {
    icon: <MapPin className="w-full h-full" />,
    title: "Low Online Visibility",
    description:
      "Parents can't find your preschool online when searching for options in your area.",
  },
  {
    icon: <Building2 className="w-full h-full" />,
    title: "High Local Competition",
    description:
      "Standing out among numerous preschools in your neighborhood is becoming harder.",
  },
  {
    icon: <Monitor className="w-full h-full" />,
    title: "Outdated Marketing",
    description:
      "Traditional marketing methods aren't reaching today's tech-savvy parents effectively.",
  },
];

const problemStatementData = {
  title: "Are You Struggling to Attract More Admissions?",
  description:
    "Common challenges faced by preschool owners in today's competitive market",
  problems: problems,
};

// ------------------Problem Section Data End-----------------

// ---------------------Solution Section Data start---------------------
const steps = [
  {
    title: "Audit",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
    desc: "Comprehensive analysis of your current marketing strategy and digital presence.",
  },
  {
    title: "Strategy",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    desc: "Custom marketing plan tailored to your preschool's unique needs.",
  },
  {
    title: "Launch",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    desc: "Implementation of AI-driven marketing campaigns and optimization.",
  },
  {
    title: "Results",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    desc: "Measurable growth in admissions and parent engagement.",
  },
];

const SolutionsSectionData = {
  title: "How We Turn Challenges into Admissions",
  description:
    "Our proven 4-step process to transform your preschool's digital presence",
  steps: steps,
};

//--------------------------Solution Section Data End---------------------

// ---------------------------Benefit Section Data Start---------------------
const benefits = [
  {
    title: "40% More Admissions",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    desc: "Average increase in enrollment rates within the first 3 months",
  },
  {
    title: "Parent-Friendly Campaigns",
    icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
    desc: "Targeted messaging that resonates with modern parents",
  },
  {
    title: "Data-Driven Results",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    desc: "Real-time analytics and performance tracking",
  },
  {
    title: "24/7 Support",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    desc: "Dedicated team for continuous assistance and optimization",
  },
];

const BenefitSectionData = {
  title: "Why Preschool Owners Choose Us",
  description: "Discover how we help preschools thrive in the digital age",
  benefits: benefits,
};

// ------------------------------Benefit Section Data End----------------------------

// ----------------------------------Services Section Data Start--------------------------------

const services = [
  {
    title: "Social Media Ads",
    icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
    desc: "Targeted campaigns that reach parents in your area",
    features: [
      "Facebook & Instagram Ads",
      "Custom Audience Targeting",
      "Performance Analytics",
      "A/B Testing",
    ],
  },
  {
    title: "Parent SEO",
    icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
    desc: "Dominate local search results for preschool queries",
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
    desc: "Beautiful, conversion-focused preschool websites",
    features: [
      "Mobile Responsive",
      "Virtual Tours",
      "Online Registration",
      "Parent Portal",
    ],
  },
];

const ServicesSectionData = {
  title: "Our Play School Marketing Expertise",
  description:
    "Comprehensive digital solutions designed specifically for preschools",
  services: services,
};

// ----------------------------------Services Section Data End--------------------------------

// ----------------------------Social Proof Section Data Start----------------------------
const testimonials = [
  {
    id: 1,
    school: "Little Stars Preschool",
    location: "San Francisco, CA",
    quote:
      "Our enrollment increased by 45% within just two months of working with Cipher Leads. Their understanding of the preschool market is outstanding.",
  },
  {
    id: 2,
    school: "Sunshine Learners",
    location: "Chicago, IL",
    quote:
      "The AI-driven approach to marketing has transformed how we connect with parents. Our waiting list is now longer than ever!",
  },
  {
    id: 3,
    school: "Kids First Academy",
    location: "Austin, TX",
    quote:
      "The ROI we've seen from Cipher Leads' marketing strategies has been incredible. They truly understand what parents are looking for.",
  },
];

const SocialProofData = {
  title: "Trusted by 50+ Preschools Nationwide",
  description: "See what other preschool owners are saying about our services",
  testimonials: testimonials,
};

// ------------------------------Social Proof Section Data End------------------------------

// ------------------------------Results Section Data Start------------------------------
const stats = [
  { value: 200, label: "Leads in 30 Days" },
  { value: 90, label: "Parent Engagement Rate" },
  { value: 45, label: "Conversion Rate" },
];

const ResultSectionData = {
  title: "See What We've Achieved for Schools Like Yours",
  description: "Real results from our proven marketing strategies",
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
  title: "Transform Your Preschool's Future Today",
  description:
    "Join 200+ schools who've doubled admissions with our proven system",
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

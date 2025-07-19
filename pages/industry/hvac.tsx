import { Hero } from '@/components/industry/sections/hero'
import { ProblemStatement } from '@/components/industry/sections/problem-statement'
import SolutionsSection from '@/components/industry/sections/solution'
import BenefitsSection from '@/components/industry/sections/benefit'
import ServicesSection from '@/components/industry/sections/services'
import SocialProofSection from '@/components/industry/sections/socialProof'
import ResultsSection from '@/components/industry/sections/result'
import CallToAction from '@/components/industry/sections/callToAction'
import { ProcessSection } from '@/components/industry/sections/ProcessSection'
import { ComparisonSection } from '@/components/industry/sections/ComparisonSection'
import { PricingSection } from '@/components/industry/sections/PricingSection'
import { FAQSection } from '@/components/industry/sections/FAQSection'
import Footer from '@/components/industry/sections/footer'
import { Header } from '@/components/layout/header'
import Head from 'next/head'
import { CheckCircle, Clock, Heart, Search, TrendingUp, Users } from 'lucide-react'

// Hero Section Data
const HeroSectionData = {
  title: {
    main: "Dominate Your Local",
    span: "HVAC Market in Dubai",
  },
  description: "Turn AC Emergencies Into Your Revenue Opportunities. Specialized Digital Marketing That Puts Your HVAC Business First When Dubai Residents Need You Most",
  cta: {
    primary: "Get Your Free HVAC Marketing Analysis",
    primaryClick: () => {
      window.open('https://tidycal.com/hyperlinq/30-minutes-free-good-sales-meeting', '_blank');
    },
  },
  rightContainer: [
    {
      title: "50+",
      description: "HVAC Companies",
    },
    {
      title: "247%",
      description: "Avg. Call Increase",
    },
    {
      title: "24/7",
      description: "Support Available",
    },
    {
      title: "#1",
      description: "Google Rankings",
    },
  ],
};

// Problem Statement Data
const problems = [
  {
    icon: <Search className="w-full h-full" />,
    title: "Invisible During Emergencies",
    description: "Losing emergency calls to competitors who rank higher? 73% of HVAC emergency searches go to the top 3 results.",
  },
  {
    icon: <TrendingUp className="w-full h-full" />,
    title: "Seasonal Revenue Drops",
    description: "Cash flow crushing during off-seasons? Without year-round visibility, your business suffers predictable slumps.",
  },
  {
    icon: <Users className="w-full h-full" />,
    title: "Price Shoppers, Not Buyers",
    description: "Quality leads drowning in price-shopping inquiries? Poor targeting attracts bargain hunters, not ideal customers.",
  },
];

const problemStatementData = {
  title: "The HVAC Marketing Challenge",
  description: "Is Your Business Losing to Online-Savvy Competitors?",
  problems: problems,
};

// Solutions Section Data
const steps = [
  {
    title: "Emergency Visibility",
    icon: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z",
    desc: "24/7 presence when systems fail. We ensure you're the first call when ACs break down.",
  },
  {
    title: "Local Authority",
    icon: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1115 0z",
    desc: "Own your service area on Google. Dominate local searches and map results.",
  },
  {
    title: "Trust Building",
    icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
    desc: "Reviews, guarantees, and credibility that convert browsers into buyers.",
  },
  {
    title: "Revenue Stability",
    icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z",
    desc: "Year-round lead generation system that smooths seasonal fluctuations.",
  },
];

const SolutionsSectionData = {
  title: "Your Complete HVAC Digital Domination System",
  description: "Four Pillars to Transform Your HVAC Business",
  steps: steps,
};

// Benefits Section Data
const benefits = [
  {
    title: "HVAC Specialists",
    icon: "M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0",
    desc: "We speak your language and understand seasonal demands, emergency calls, and maintenance contracts",
  },
  {
    title: "Proven Results",
    icon: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    desc: "Average 247% increase in qualified leads within 90 days for our HVAC clients",
  },
  {
    title: "24/7 Support",
    icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
    desc: "Your AC emergencies don't wait for business hours, neither do we",
  },
  {
    title: "Local Expertise",
    icon: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1115 0z",
    desc: "Deep understanding of Dubai's HVAC market and customer behavior",
  },
];

const BenefitSectionData = {
  title: "Why Dubai's Top HVAC Companies Choose AI Cipher Leads",
  description: "See why HVAC specialists choose industry experts",
  benefits: benefits,
};

// Services Section Data
const services = [
  {
    title: "Google Ads Mastery",
    icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
    desc: "Instant visibility for emergency searches and installation queries",
    features: [
      "Emergency service campaigns",
      "Installation-focused ads",
      "Seasonal bid adjustments",
      "Call-only campaigns",
      "Weather-triggered automation",
      "24/7 campaign monitoring",
    ],
  },
  {
    title: "Local SEO Domination",
    icon: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1115 0z",
    desc: "Own your service area and appear first in local searches",
    features: [
      "Google My Business optimization",
      "Service area targeting",
      "HVAC schema markup",
      "Local citation building",
      "Review generation system",
      "Competitor displacement",
    ],
  },
  {
    title: "Conversion Website",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    desc: "Turn visitors into calls with a high-performing HVAC website",
    features: [
      "Mobile-first emergency pages",
      "Speed optimization",
      "Trust badges & certifications",
      "Easy booking systems",
      "Live chat integration",
      "Lead tracking setup",
    ],
  },
];

const ServicesSectionData = {
  title: "Tailored Services for HVAC Success",
  description: "Comprehensive digital solutions designed specifically for HVAC businesses",
  services: services,
};

// Social Proof Section Data
const testimonials = [
  {
    id: 1,
    school: "Dubai AC Experts",
    location: "Dubai, UAE",
    quote: "Our emergency calls increased by 300% in just 3 months. AI Cipher Leads knows exactly what HVAC businesses need to succeed online.",
  },
  {
    id: 2,
    school: "ComfortZone HVAC",
    location: "Dubai, UAE",
    quote: "Finally, an agency that understands seasonal fluctuations and helps us maintain steady revenue year-round. Game changer!",
  },
  {
    id: 3,
    school: "FastCool Services",
    location: "Dubai, UAE",
    quote: "From 5 leads to 50+ quality leads per month. Their local SEO strategy put us at the top of Google in our service areas.",
  },
];

const SocialProofData = {
  title: "Hear from HVAC Owners Like You",
  description: "Real testimonials from Dubai's top HVAC companies",
  testimonials: testimonials,
};

// Results Section Data
const stats = [
  { value: 247, label: "Increase in Emergency Calls" },
  { value: 42, label: "Installation Leads Monthly" },
  { value: 3, label: "New Areas Dominated" },
];

const ResultSectionData = {
  title: "HVAC Companies Winning with AI Cipher Leads",
  description: "Real Results from Real HVAC Businesses",
  stats: stats,
};

// CTA Section Data
const trustItems = [
  {
    value: "24/7",
    label: "Support",
    icon: <Clock className="w-6 h-6" />,
  },
  {
    value: "100%",
    label: "Transparent",
    icon: <Heart className="w-6 h-6" />,
  },
  {
    value: "48 Hours",
    label: "Strategy Ready",
    icon: <CheckCircle className="w-6 h-6" />,
  },
];

const CallToActionData = {
  title: "Ready to Dominate Your HVAC Market?",
  description: "Stop Losing Calls to Competitors. Get Your Custom HVAC Marketing Strategy in 48 Hours",
  trustItems: trustItems,
};

// Process Section Data
const processData = {
  title: "Your Path to",
  highlight: "HVAC Market Leadership",
  subtitle: "A proven 4-phase approach to digital dominance",
  steps: [
    {
      phase: "Week 1-2",
      title: "Market Analysis & Strategy",
      description: "Deep dive into your market position and opportunities",
      details: [
        "Competitor audit",
        "Service area mapping",
        "Keyword opportunity analysis",
        "Customer persona development"
      ]
    },
    {
      phase: "Week 3-4",
      title: "Foundation Building",
      description: "Set up the infrastructure for sustainable growth",
      details: [
        "Website optimization",
        "Google My Business setup",
        "Campaign creation",
        "Tracking implementation"
      ]
    },
    {
      phase: "Week 5-8",
      title: "Launch & Optimize",
      description: "Go live and refine for maximum performance",
      details: [
        "Campaign activation",
        "Lead tracking setup",
        "Performance refinement",
        "Review generation kickoff"
      ]
    },
    {
      phase: "Month 3+",
      title: "Scale & Dominate",
      description: "Expand your market share and revenue",
      details: [
        "Expand winning campaigns",
        "New service area conquest",
        "Continuous optimization",
        "Seasonal strategy execution"
      ]
    }
  ]
};

// Pricing Section Data
const pricingData = {
  title: "Investment Options for",
  highlight: "Every HVAC Business",
  subtitle: "Transparent pricing with no hidden fees",
  plans: [
    {
      name: "Starter",
      price: "AED 2,999",
      period: "/month",
      description: "Perfect for single-van operations",
      features: [
        "Google Ads management",
        "Basic local SEO",
        "Monthly reporting",
        "Phone support",
        "Lead tracking dashboard"
      ],
      cta: "Start Growing"
    },
    {
      name: "Growth",
      price: "AED 5,999",
      period: "/month",
      description: "Ideal for established companies",
      features: [
        "Everything in Starter",
        "Advanced SEO strategy",
        "Reputation management",
        "Landing page creation",
        "Priority support",
        "Competitor monitoring"
      ],
      cta: "Accelerate Growth",
      highlighted: true
    },
    {
      name: "Domination",
      price: "AED 9,999",
      period: "/month",
      description: "For market leaders",
      features: [
        "Full-service marketing",
        "Dedicated account team",
        "Custom strategy",
        "24/7 priority support",
        "Video marketing",
        "Guaranteed results"
      ],
      cta: "Dominate Market"
    }
  ]
};

// Comparison Section Data
const comparisonData = {
  title: "AI Cipher Leads vs.",
  highlight: "Generic Digital Agencies",
  subtitle: "See why HVAC specialists choose industry experts",
  headers: ["Feature", "AI Cipher Leads", "Others"],
  rows: [
    {
      feature: "HVAC Industry Expertise",
      bird: { text: "Specialized Systems", status: true },
      others: { text: "Generic Approach", status: false }
    },
    {
      feature: "Emergency Campaign Experience",
      bird: { text: "Proven Strategies", status: true },
      others: { text: "Learning Curve", status: false }
    },
    {
      feature: "Local Market Knowledge",
      bird: { text: "Dubai Focused", status: true },
      others: { text: "Global Templates", status: false }
    },
    {
      feature: "24/7 Support",
      bird: { text: "Always Available", status: true },
      others: { text: "Business Hours", status: false }
    },
    {
      feature: "Weather-Triggered Campaigns",
      bird: { text: "Automated", status: true },
      others: { text: "Manual Only", status: false }
    },
    {
      feature: "HVAC-Specific Landing Pages",
      bird: { text: "Conversion Optimized", status: true },
      others: { text: "Generic Pages", status: false }
    }
  ]
};

// FAQ Section Data
const faqData = {
  title: "Common Questions from",
  highlight: "HVAC Business Owners",
  faqs: [
    {
      question: "How quickly can I see results?",
      answer: "Most HVAC clients see increased calls within 2-3 weeks of campaign launch. Significant growth typically occurs by month 2-3, with full optimization achieved by month 6."
    },
    {
      question: "What's the average cost per lead?",
      answer: "Our HVAC clients typically see costs between AED 50-150 per qualified lead, depending on service type. Emergency calls tend to be lower cost than installation leads."
    },
    {
      question: "Do you work with my specific service area?",
      answer: "Yes! We specialize in hyper-local targeting for HVAC businesses across Dubai and the UAE. We'll help you dominate your specific service zones."
    },
    {
      question: "Can you help with Google Guaranteed?",
      answer: "Absolutely! We'll guide you through the Google Guaranteed process and help you leverage this powerful trust signal to win more customers."
    },
    {
      question: "How do you handle seasonal fluctuations?",
      answer: "We use advanced bid strategies, seasonal content, and weather-triggered campaigns to maximize summer demand while building maintenance contract leads for steadier off-season revenue."
    },
    {
      question: "What makes you different from other agencies?",
      answer: "We specialize exclusively in home service businesses like HVAC. Our strategies are built on real data from hundreds of successful HVAC campaigns, not generic marketing templates."
    }
  ]
};

export default function HVACPage() {
  return (
    <>
      <Head>
        <title>HVAC Digital Marketing Services Dubai | AI Cipher Leads</title>
        <meta name="description" content="Dominate your local HVAC market in Dubai with specialized digital marketing. Turn AC emergencies into revenue opportunities. Get your free marketing analysis." />
        <link rel="canonical" href="https://yourdomain.com/industry/hvac" />
        <meta property="og:url" content="https://yourdomain.com/industry/hvac" />
        <meta property="og:title" content="HVAC Digital Marketing Services Dubai | AI Cipher Leads" />
        <meta property="og:description" content="Dominate your local HVAC market in Dubai with specialized digital marketing. Turn AC emergencies into revenue opportunities." />
        <meta property="og:image" content="https://yourdomain.com/images/hvac-marketing.jpg" />
        <meta property="og:type" content="website" />
      </Head>
      
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
          <ProcessSection {...processData} />
          <PricingSection {...pricingData} />
          <ComparisonSection {...comparisonData} />
          <FAQSection {...faqData} />
          <CallToAction {...CallToActionData} />
          <Footer />
        </main>
      </div>
    </>
  )
}
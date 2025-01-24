import { Brain, Cpu, Database, MessageSquare, Shield, Zap } from "lucide-react";

import { Card } from "@/components/ui/card";

const features = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "AI-Powered Intelligence",
    description:
      "Advanced algorithms analyze and identify high-quality leads based on your ideal customer profile.",
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Rich Data Insights",
    description:
      "Access comprehensive data about your leads including contact information, company details, and engagement history.",
  },
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: "Smart Engagement",
    description:
      "Automated outreach campaigns with personalized messaging to increase response rates.",
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "Automated Workflows",
    description:
      "Streamline your lead generation process with intelligent automation and integrations.",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Data Security",
    description:
      "Enterprise-grade security measures to protect your data and maintain compliance.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Real-time Updates",
    description:
      "Stay informed with instant notifications and real-time lead tracking.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Powerful Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-neutral-700/50 border-neutral-600 p-6 hover:bg-neutral-700 transition-colors"
            >
              <div className="mb-4 text-lime-400">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {feature.title}
              </h3>
              <p className="text-neutral-300">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

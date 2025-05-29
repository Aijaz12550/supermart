import type React from "react";
import {
  MegaDiscountIcon,
  TruckIcon,
  PaymentIcon,
  ReturnIcon,
} from "../components/Icon";

const FeatureCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.FC;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex items-center gap-2 p-4 border-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-3">
        <Icon />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <p className="text-sm font-light text-gray-500 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default function FeaturesSection() {
  const features = [
    {
      icon: MegaDiscountIcon,
      title: "Mega Discount",
      description: "When Sign Up",
    },
    {
      icon: TruckIcon,
      title: "Free Delivery",
      description: "24/7 amazing services",
    },
    {
      icon: PaymentIcon,
      title: "Secured Payment",
      description: "We accept all credit cards",
    },
    {
      icon: ReturnIcon,
      title: "Easy Returns",
      description: "30 days free return policy",
    },
  ];

  return (
    <section className="py-8 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
}

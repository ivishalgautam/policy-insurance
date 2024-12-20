import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Stethoscope, Pill, Brain, Shield, Phone } from "lucide-react";
import { BenefitCard } from "./benefit-card";

export function PolicyInfo() {
  const benefits = [
    {
      title: "Comprehensive Coverage",
      description:
        "Full medical coverage for a wide range of health services and treatments.",
      icon: Stethoscope,
    },
    {
      title: "Prescription Benefits",
      description:
        "Coverage for prescription medications with affordable copays.",
      icon: Pill,
    },
    {
      title: "Mental Health Services",
      description: "Access to mental health professionals and treatments.",
      icon: Brain,
    },
    {
      title: "Preventive Care",
      description: "No-cost preventive services to keep you healthy.",
      icon: Shield,
    },
    {
      title: "24/7 Telemedicine",
      description:
        "Round-the-clock access to medical professionals via phone or video call.",
      icon: Phone,
    },
  ];

  return (
    <Card className="mt-8 shadow-none">
      <CardHeader>
        <CardTitle className="font-merriweather">
          Your HealthGuard Gold Plan
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">Policy Number: HG-12345-6789</p>
        <h3 className="mb-4 text-lg font-semibold">Key Benefits:</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

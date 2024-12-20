import React from "react";
import InsuranceCard from "./cards/insurance";

export default function Insurances() {
  return (
    <section className="py-28">
      <div className="container space-y-24">
        <InsuranceCard
          imgUrl={"/images/insurance1.webp"}
          heading="Secure Your Future with Term Insurance"
          small="Affordable protection for your loved ones."
          paragraphs={[
            "Secure your family's future with an affordable term insurance plan. Ensure financial protection against uncertainties and give your loved ones the security they deserve, no matter what life brings",
            "Affordable term insurance offers peace of mind and financial security for your family in case of unexpected events.",
          ]}
        />
        <InsuranceCard
          imgUrl={"/images/insurance2.webp"}
          order="reverse"
          className="flex-row-reverse"
          heading="Protect Your Health, Secure Your Future"
          small="Complete coverage for your health needs."
          paragraphs={[
            "Stay protected with comprehensive health insurance that covers medical expenses and ensures access to quality care. Safeguard your health and avoid financial strain with reliable health coverage options.",
            "Comprehensive health insurance provides financial protection and access to top-tier medical care when you need it most.",
          ]}
        />
      </div>
    </section>
  );
}

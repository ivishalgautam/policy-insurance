import React from "react";
import InsuranceCard from "./cards/insurance";

export default function Insurances() {
  return (
    <section className="space-y-24 py-28">
      <div className="container">
        <InsuranceCard imgUrl={"/images/insurance1.webp"} />
      </div>
      <div className="container">
        <InsuranceCard
          imgUrl={"/images/insurance2.webp"}
          order="reverse"
          className="flex-row-reverse gap-24"
        />
      </div>
    </section>
  );
}

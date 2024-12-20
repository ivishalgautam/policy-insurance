import ContactSection from "@/components/contact-section";
import Hero from "@/components/hero";
import Insurances from "@/components/insurances";
import { Testimonials } from "@/components/testimonials";
import WhyUs from "@/components/why-us";

export default function Home() {
  return (
    <div className="bg-primary-300">
      <Hero />
      <Insurances />
      <WhyUs />
      <Testimonials />
      <ContactSection />
    </div>
  );
}

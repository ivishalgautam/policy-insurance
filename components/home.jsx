import dynamic from "next/dynamic";
const ContactSection = dynamic(() => import("@/components/contact-section"), {
  loading: () => "loading...",
});
const FAQ = dynamic(() => import("@/components/faq"), {
  loading: () => "loading...",
});
const Hero = dynamic(() => import("@/components/hero"), {
  loading: () => "loading...",
});
const Insurances = dynamic(() => import("@/components/insurances"), {
  loading: () => "loading...",
});
const Testimonials = dynamic(
  () => import("@/components/testimonials").then((data) => data.Testimonials),
  {
    loading: () => "loading...",
  },
);
const WhyUs = dynamic(() => import("@/components/why-us"), {
  loading: () => "loading...",
});

export default function Home() {
  return (
    <div className="bg-primary-300">
      <Hero />
      <Insurances />
      <WhyUs />
      <Testimonials />
      <ContactSection />
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-10">
          <FAQ />
        </div>
      </div>
    </div>
  );
}

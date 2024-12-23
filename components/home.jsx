import dynamic from "next/dynamic";
import HeroSkeleton from "./skeletons/hero";
import { lazy, Suspense } from "react";
const Hero = lazy(() => import("@/components/hero"));
const Insurances = lazy(() => import("@/components/insurances"));
const WhyUs = lazy(() => import("@/components/why-us"));
const Testimonials = dynamic(() =>
  import("@/components/testimonials").then((data) => data.Testimonials),
);
const ContactSection = lazy(() => import("@/components/contact-section"));
const FAQ = lazy(() => import("@/components/faq"));

export default function Home() {
  return (
    <div className="bg-primary-300">
      <Suspense fallback={<HeroSkeleton />}>
        <Hero />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Insurances />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <WhyUs />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <ContactSection />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="bg-white">
          <div className="mx-auto max-w-2xl py-10">
            <FAQ />
          </div>
        </div>
      </Suspense>
    </div>
  );
}

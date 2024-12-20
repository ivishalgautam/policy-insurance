import { Button } from "@/components/ui/button";
import { ClaimsProcess } from "./_component/cliaim-process";
import { CoverageSummary } from "./_component/coverage-summary";
// import { FAQ } from "./_component/faq";
import { PolicyInfo } from "./_component/policy-info";
import { Testimonials } from "./_component/testimonials";
import { ScrollProgress } from "@/components/scroll-progress";
import FAQ from "@/components/faq";

export default function InsurancePolicyPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-gray-100">
      <div className="container flex-grow py-8">
        <h1 className="mb-4 font-merriweather text-3xl font-bold">
          Your Health Insurance Policy
        </h1>
        <PolicyInfo />
        <CoverageSummary />
        <ClaimsProcess />
        <div className="mt-8">
          <FAQ />
        </div>
        <Testimonials />
        <div className="mt-8 flex justify-center">
          <Button size="lg">Contact Support</Button>
        </div>
      </div>
    </div>
  );
}

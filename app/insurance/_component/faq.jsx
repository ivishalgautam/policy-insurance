import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqItems = [
    {
      question: "What is my deductible?",
      answer:
        "Your annual deductible is $1,000 for individual coverage and $2,000 for family coverage.",
    },
    {
      question: "How do I find in-network providers?",
      answer:
        "You can find in-network providers by using our online provider directory or calling our customer service number.",
    },
    {
      question: "Are pre-existing conditions covered?",
      answer:
        "Yes, pre-existing conditions are covered under this policy as required by the Affordable Care Act.",
    },
    {
      question: "How can I submit a claim?",
      answer:
        "You can submit claims online through our member portal, by mail, or by fax. Most in-network providers will submit claims on your behalf.",
    },
  ];

  return (
    <div className="mt-8">
      <h2 className="mb-4 font-merriweather text-2xl font-bold">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {faqItems.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

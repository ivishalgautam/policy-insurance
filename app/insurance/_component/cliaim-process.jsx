import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Phone, Globe } from "lucide-react";

export function ClaimsProcess() {
  const claimsMethods = [
    {
      title: "Online",
      description: "Submit your claim through our secure member portal.",
      icon: Globe,
    },
    {
      title: "By Mail",
      description:
        "Send your completed claim form to: HealthGuard Claims, P.O. Box 1234, Health City, HC 56789",
      icon: FileText,
    },
    {
      title: "By Phone",
      description:
        "Call our claims department at 1-800-HEALTH-CLAIM (1-800-432-5842)",
      icon: Phone,
    },
  ];

  return (
    <div className="mt-8">
      <h2 className="mb-4 font-merriweather text-2xl font-bold">
        How to Make a Claim
      </h2>
      <div className="grid gap-4 md:grid-cols-3">
        {claimsMethods.map((method, index) => (
          <Card key={index} className="shadow-none">
            <CardHeader>
              <CardTitle className="flex items-center font-merriweather">
                <method.icon className="mr-2 h-5 w-5" />
                {method.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>{method.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function BenefitCard({ title, description, icon: Icon }) {
  return (
    <Card className="flex h-full flex-col">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-merriweather">
          <Icon className="h-5 w-5 text-primary" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p>{description}</p>
      </CardContent>
    </Card>
  );
}

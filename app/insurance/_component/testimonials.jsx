import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      avatar: "SJ",
      text: "onePolicy Insurance has been a lifesaver. Their coverage is comprehensive and their customer service is top-notch.",
    },
    {
      name: "Michael Chen",
      avatar: "MC",
      text: "I've never had an easier time submitting claims. The online portal is user-friendly and efficient.",
    },
    {
      name: "Emily Rodriguez",
      avatar: "ER",
      text: "The peace of mind I get from knowing I'm covered by onePolicy is priceless. Highly recommended!",
    },
  ];

  return (
    <div className="mt-8">
      <h2 className="mb-4 font-merriweather text-2xl font-bold">
        What Our Members Say
      </h2>
      <div className="grid gap-4 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="shadow-none">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Avatar className="mr-2 h-8 w-8">
                  <AvatarImage
                    src={`/placeholder.svg?height=32&width=32`}
                    alt={testimonial.name}
                  />
                  <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                </Avatar>
                {testimonial.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>"{testimonial.text}"</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

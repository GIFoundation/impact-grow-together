import { Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const ImpactPreview = () => {
  const featuredTestimonials = [
    {
      quote: "Everything changed when I discovered the IMPACT Mindset Programme.",
      author: "Noah",
      role: "Programme Graduate, Sierra Leone",
    },
    {
      quote: "Then I enrolled in the IMPACT Mindset Programme—and everything shifted.",
      author: "Jessica",
      role: "Programme Graduate, Sierra Leone",
    },
    {
      quote: "Joining the IMPACT Mindset Programme was a true game changer.",
      author: "Rebecca",
      role: "Programme Graduate",
    },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full">
            Success Stories
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold mt-6 mb-4">
            Lives <span className="gradient-growth text-gradient">Transformed</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {featuredTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-6 border border-border hover:border-primary/30 transition-all"
            >
              <Quote className="h-8 w-8 text-primary/30 mb-4" />
              <p className="text-muted-foreground italic mb-4">"{testimonial.quote}"</p>
              <div>
                <div className="font-semibold text-sm">{testimonial.author}</div>
                <div className="text-xs text-muted-foreground">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/impact">
            <Button variant="outline" size="lg">
              Read Full Stories
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

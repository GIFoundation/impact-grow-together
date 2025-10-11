import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export const Impact = () => {
  const stats = [
    { number: "1000+", label: "Young People Empowered" },
    { number: "15+", label: "Countries Reached" },
    { number: "50+", label: "Programmes Delivered" },
    { number: "95%", label: "Positive Outcomes" },
  ];

  const testimonials = [
    {
      quote: "This programme completely changed how I see myself and my future. I now have the confidence to pursue my dreams.",
      author: "Sarah M.",
      role: "Programme Graduate, Kenya",
    },
    {
      quote: "The mindset transformation was exactly what I needed. I've started my own business and I'm helping others in my community.",
      author: "David O.",
      role: "Programme Graduate, Nigeria",
    },
    {
      quote: "GIF showed me that my circumstances don't define my destiny. I'm now studying at university and giving back.",
      author: "Amina K.",
      role: "Programme Graduate, Ghana",
    },
  ];

  return (
    <section id="impact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full">
            Our Impact
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold mt-6 mb-4">
            Creating <span className="gradient-growth text-gradient">Lasting Change</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Since 2020, we've been transforming lives and communities across Africa and beyond.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl sm:text-6xl font-display font-bold gradient-energy text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Success Stories */}
        <div className="mb-12">
          <h3 className="text-3xl font-display font-bold text-center mb-12">Success Stories</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary/50 transition-all hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="pt-6">
                  <Quote className="h-10 w-10 text-primary/20 mb-4" />
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Global Reach */}
        <div className="bg-card rounded-3xl p-8 md:p-12 border border-border shadow-lg text-center">
          <h3 className="text-3xl font-display font-bold mb-6">Our Global Footprint</h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Currently registered in both the UK and the US, with a growing operational footprint across Africa. We're expanding our reach globally to empower young people everywhere.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-6 py-3 bg-primary/10 text-primary rounded-full font-medium">United Kingdom</span>
            <span className="px-6 py-3 bg-accent/10 text-accent rounded-full font-medium">United States</span>
            <span className="px-6 py-3 bg-success/10 text-success rounded-full font-medium">Africa</span>
            <span className="px-6 py-3 bg-gif-lime/10 text-gif-lime rounded-full font-medium">Growing Globally</span>
          </div>
        </div>
      </div>
    </section>
  );
};

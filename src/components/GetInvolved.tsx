import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Briefcase, ArrowRight } from "lucide-react";

export const GetInvolved = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const ways = [
    {
      icon: Heart,
      title: "Become a Donor",
      description: "Support our mission to transform lives. Your contribution directly funds mindset programmes for young people who need them most.",
      cta: "Donate Now",
      color: "text-gif-orange",
      bgColor: "bg-gif-orange/10",
    },
    {
      icon: Users,
      title: "Volunteer with Us",
      description: "Share your skills and experience. We're always looking for passionate volunteers in various fields to help expand our impact.",
      cta: "Join as Volunteer",
      color: "text-gif-cyan",
      bgColor: "bg-gif-cyan/10",
    },
    {
      icon: Briefcase,
      title: "Partner with GIF",
      description: "Collaborate with us to bring transformative programmes to your organisation or community. Let's create change together.",
      cta: "Explore Partnership",
      color: "text-gif-green",
      bgColor: "bg-gif-green/10",
    },
  ];

  return (
    <section id="get-involved" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-gif-yellow/10 blob animate-float"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-gif-cyan/10 blob animate-float" style={{ animationDelay: "2s" }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full">
            Get Involved
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold mt-6 mb-4">
            Join the <span className="gradient-vibrant text-gradient">Movement</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            There are many ways to support our mission. Every contribution makes a difference in a young person's life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {ways.map((way, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary/50 transition-all hover:shadow-xl group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className={`w-16 h-16 rounded-2xl ${way.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <way.icon className={`h-8 w-8 ${way.color}`} />
                </div>
                <CardTitle className="text-2xl">{way.title}</CardTitle>
                <CardDescription className="text-base">{way.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  onClick={scrollToContact}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 group"
                >
                  {way.cta}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action Banner */}
        <div className="bg-gradient-to-r from-gif-orange via-gif-yellow to-gif-cyan rounded-3xl p-1">
          <div className="bg-background rounded-3xl p-8 md:p-12 text-center">
            <h3 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              Ready to Make an Impact?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you want to donate, volunteer, or partner with us, we'd love to hear from you. Together, we can transform more lives.
            </p>
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg group"
            >
              Get In Touch Today
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Users, Target, Sparkles, ExternalLink } from "lucide-react";
import programImage from "@/assets/program-image.jpg";
import thinkLogo from "@/assets/think-logo.png";

export const Programs = () => {
  const programs = [
    {
      icon: Brain,
      title: "Mindset Transformation",
      description: "Core programmes that address limiting beliefs and build confidence from the ground up.",
      color: "text-gif-orange",
      bgColor: "bg-gif-orange/10",
    },
    {
      icon: Users,
      title: "Youth Empowerment",
      description: "Collaborative workshops designed to build emotional intelligence and leadership skills.",
      color: "text-gif-cyan",
      bgColor: "bg-gif-cyan/10",
    },
    {
      icon: Target,
      title: "Purpose-Driven Development",
      description: "Programmes that help young people identify their purpose and create sustainable pathways to success.",
      color: "text-gif-green",
      bgColor: "bg-gif-green/10",
    },
    {
      icon: Sparkles,
      title: "Economic Opportunity",
      description: "Skills and mindset training that opens doors to economic empowerment and financial independence.",
      color: "text-gif-lime",
      bgColor: "bg-gif-lime/10",
    },
  ];

  return (
    <section id="programs" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full">
            Our Programs
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold mt-6 mb-4">
            Innovative <span className="gradient-energy text-gradient">Mindset</span> Programmes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer transformative programmes designed to unlock potential and create lasting change.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {programs.map((program, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary/50 transition-all hover:shadow-lg animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className={`w-16 h-16 rounded-2xl ${program.bgColor} flex items-center justify-center mb-4`}>
                  <program.icon className={`h-8 w-8 ${program.color}`} />
                </div>
                <CardTitle className="text-2xl">{program.title}</CardTitle>
                <CardDescription className="text-base">{program.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Featured Partnership */}
        <div className="bg-gradient-to-br from-gif-orange/10 via-gif-yellow/10 to-gif-cyan/10 rounded-3xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-sm font-semibold text-primary uppercase tracking-wider bg-background px-4 py-2 rounded-full">
                  Featured Programme
                </span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-display font-bold">
                THINK Programme with EGM
              </h3>
              <p className="text-lg text-muted-foreground">
                In partnership with Empowered Growth Marketing, we're launching an innovative programme designed for companies. This revenue-generating initiative combines mindset transformation with business growth strategies.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 group"
              >
                <a href="https://think.global-impact-foundation.org/" target="_blank" rel="noopener noreferrer">
                  Explore THINK Programme
                  <ExternalLink className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
            <div className="relative flex items-center justify-center">
              <img
                src={thinkLogo}
                alt="THINK Programme"
                className="w-full max-w-md h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

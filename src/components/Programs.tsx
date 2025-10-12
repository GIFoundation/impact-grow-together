import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Users, Target, Sparkles, ExternalLink } from "lucide-react";
import teamCollaboration from "@/assets/team-collaboration.jpg";
import programImage from "@/assets/program-image.jpg";
import thinkLogo from "@/assets/think-logo-2.png";

export const Programs = () => {
  const programs = [
    {
      icon: Brain,
      title: "IMPACT 6 Months Mindset Programme",
      duration: "6 Months",
      description: "Comprehensive training to develop positive and proactive mindsets. Twelve logical, practical lessons that translate into tangible results in all aspects of life, work, relationships, confidence and leadership.",
      color: "text-gif-orange",
      bgColor: "bg-gif-orange/10",
    },
    {
      icon: Users,
      title: "IMPACT 3 Months (Global Impact)",
      duration: "3 Months",
      description: "A condensed version of our 6-month flagship programme, intensifying the learning and increasing impact over a shorter period of time.",
      color: "text-gif-cyan",
      bgColor: "bg-gif-cyan/10",
    },
    {
      icon: Target,
      title: "The Entrepreneurial Mindset Code",
      duration: "8 Weeks",
      description: "A transformative journey designed to ignite the inner entrepreneur, rewire thinking, and empower participants to turn ideas into impactful ventures.",
      color: "text-gif-green",
      bgColor: "bg-gif-green/10",
    },
    {
      icon: Sparkles,
      title: "From the Inside Out",
      duration: "3 Months",
      description: "Intensive programme to empower, inspire and enable changed thinking and beliefs for improved personal outcomes. Specifically designed for current and former prison members.",
      color: "text-gif-lime",
      bgColor: "bg-gif-lime/10",
    },
  ];

  return (
    <section id="programs" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full">
              Our Programmes
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
              className="border-2 hover:border-primary transition-all hover:shadow-lg hover:bg-muted/50 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className={`w-16 h-16 rounded-2xl ${program.bgColor} flex items-center justify-center mb-4`}>
                  <program.icon className={`h-8 w-8 ${program.color}`} />
                </div>
                <div className="mb-2">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${program.bgColor} ${program.color}`}>
                    {program.duration}
                  </span>
                </div>
                <CardTitle className="text-2xl mb-3">{program.title}</CardTitle>
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
              <img 
                src={thinkLogo} 
                alt="THINK Programme" 
                className="h-24 w-auto mb-4"
              />
              <h3 className="text-3xl sm:text-4xl font-display font-bold">
                Transforming Global Growth Through Strategy & Humanity
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
            <div className="relative">
              <img
                src={teamCollaboration}
                alt="THINK Programme - Team collaboration and growth"
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

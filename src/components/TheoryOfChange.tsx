import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export const TheoryOfChange = () => {
  const stages = [
    {
      title: "Inputs",
      items: ["Funding", "Facilitators", "Training content", "Partnerships"],
      color: "from-gif-orange/20 to-gif-yellow/20",
      borderColor: "border-gif-orange",
    },
    {
      title: "Activities",
      items: ["IMPACT Programme", "Coaching sessions", "Community projects"],
      color: "from-gif-cyan/20 to-gif-lime/20",
      borderColor: "border-gif-cyan",
    },
    {
      title: "Outputs",
      items: ["Youth trained", "Sessions held", "Materials distributed"],
      color: "from-gif-green/20 to-accent/20",
      borderColor: "border-gif-green",
    },
    {
      title: "Outcomes",
      items: ["Improved self-image", "Resilience", "Employability"],
      color: "from-gif-lime/20 to-gif-cyan/20",
      borderColor: "border-gif-lime",
    },
    {
      title: "Impact",
      items: ["Economically empowered youth driving development"],
      color: "from-primary/20 to-accent/20",
      borderColor: "border-primary",
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full">
            Our Impact Model
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold mt-6 mb-4">
            Theory of <span className="gradient-energy text-gradient">Change</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our systematic approach to creating sustainable transformation in young people's lives
          </p>
        </div>

        <div className="grid gap-6 max-w-6xl mx-auto">
          {stages.map((stage, index) => (
            <div key={index} className="flex items-center gap-4">
              <Card className={`flex-1 border-2 ${stage.borderColor} bg-gradient-to-r ${stage.color} animate-scale-in`}
                style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <CardTitle className="text-2xl mb-4">{stage.title}</CardTitle>
                  <CardContent className="p-0">
                    <ul className="space-y-2">
                      {stage.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </CardHeader>
              </Card>
              {index < stages.length - 1 && (
                <ArrowRight className="text-primary flex-shrink-0 hidden sm:block" size={32} />
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-card rounded-2xl p-8 border border-border shadow-lg max-w-4xl mx-auto">
          <h3 className="text-2xl font-display font-bold mb-4">Creating Lasting Change</h3>
          <p className="text-muted-foreground">
            Our Theory of Change demonstrates how strategic inputs and structured activities lead to measurable outputs, meaningful outcomes, and ultimately, transformative impact. By addressing mindset at its core, we create a ripple effect that extends from individual transformation to community-wide economic empowerment.
          </p>
        </div>
      </div>
    </section>
  );
};

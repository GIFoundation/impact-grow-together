import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export const TheoryOfChange = () => {
  const [expandedStage, setExpandedStage] = useState<number | null>(null);

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

        <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto mb-12">
          {stages.map((stage, index) => (
            <div key={index} className="flex items-center">
              <button
                onClick={() => setExpandedStage(expandedStage === index ? null : index)}
                className={`px-6 py-4 rounded-2xl border-2 ${stage.borderColor} bg-gradient-to-r ${stage.color} text-center animate-scale-in transition-all hover:scale-105 cursor-pointer`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg font-display font-bold flex items-center gap-2">
                  {stage.title}
                  <ChevronDown 
                    className={`h-4 w-4 transition-transform ${expandedStage === index ? 'rotate-180' : ''}`} 
                  />
                </h3>
              </button>
              {index < stages.length - 1 && (
                <ArrowRight className="text-primary mx-2 flex-shrink-0" size={24} />
              )}
            </div>
          ))}
        </div>

        {expandedStage !== null && (
          <Card className={`max-w-3xl mx-auto mb-12 border-2 ${stages[expandedStage].borderColor} bg-gradient-to-r ${stages[expandedStage].color} animate-fade-in`}>
            <CardHeader>
              <CardTitle className="text-2xl mb-4">{stages[expandedStage].title}</CardTitle>
              <CardContent className="p-0">
                <ul className="space-y-3">
                  {stages[expandedStage].items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <span className="text-primary mt-1 text-lg">•</span>
                      <span className="text-foreground text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </CardHeader>
          </Card>
        )}

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

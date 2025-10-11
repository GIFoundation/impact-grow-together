import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const TheoryOfChangePreview = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full">
            Our Impact Model
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold mt-6 mb-4">
            Theory of <span className="gradient-energy text-gradient">Change</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our systematic approach to creating sustainable transformation
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-4 max-w-6xl mx-auto mb-12">
          {[
            { title: "Inputs", color: "from-gif-orange/20 to-gif-yellow/20", border: "border-gif-orange" },
            { title: "Activities", color: "from-gif-cyan/20 to-gif-lime/20", border: "border-gif-cyan" },
            { title: "Outputs", color: "from-gif-green/20 to-accent/20", border: "border-gif-green" },
            { title: "Outcomes", color: "from-gif-lime/20 to-gif-cyan/20", border: "border-gif-lime" },
            { title: "Impact", color: "from-primary/20 to-accent/20", border: "border-primary" },
          ].map((stage, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl border-2 ${stage.border} bg-gradient-to-r ${stage.color} text-center animate-scale-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-display font-bold">{stage.title}</h3>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button asChild size="lg" className="group">
            <Link to="/impact">
              View Full Theory of Change
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

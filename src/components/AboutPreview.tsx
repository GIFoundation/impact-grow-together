import teamCollaboration from "@/assets/team-collaboration.jpg";
import mindsetIcon from "@/assets/mindset-icon.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const AboutPreview = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full">
                Our Story
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-display font-bold leading-tight">
              Building{" "}
              <span className="gradient-vibrant text-gradient">Brighter Futures</span>
            </h2>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-gif-orange/10 to-gif-yellow/10 rounded-2xl border border-primary/20">
                <div className="text-4xl font-display font-bold text-primary mb-2">2020</div>
                <div className="text-sm text-muted-foreground">Founded</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-gif-cyan/10 to-gif-lime/10 rounded-2xl border border-primary/20">
                <div className="text-4xl font-display font-bold text-accent mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Programmes Delivered</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-gif-green/10 to-accent/10 rounded-2xl border border-primary/20">
                <div className="text-4xl font-display font-bold text-success mb-2">5M+</div>
                <div className="text-sm text-muted-foreground">Global Goal</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-gif-lime/10 to-gif-cyan/10 rounded-2xl border border-primary/20">
                <div className="text-4xl font-display font-bold text-primary mb-2">25+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>

            <p className="text-lg text-muted-foreground">
              Founded on decades of expertise in mindset transformation, we're cultivating transformative mindsets that drive sustainable economic development across Africa and beyond.
            </p>

            <Link to="/about">
              <Button size="lg" className="group">
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <div className="relative animate-scale-in">
            <div className="absolute top-10 right-10 w-64 h-64 bg-gif-green/30 blob"></div>
            <div className="absolute bottom-10 left-10 w-48 h-48 bg-gif-cyan/30 blob" style={{ animationDelay: "1.5s" }}></div>
            <img
              src={teamCollaboration}
              alt="Team celebrating together"
              className="relative rounded-3xl shadow-2xl w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gif-yellow/20 blob animate-float"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-gif-cyan/20 blob animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-gif-lime/20 blob animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-32 right-1/3 w-56 h-56 bg-gif-orange/20 blob animate-float" style={{ animationDelay: "3s" }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-tight">
              Transforming{" "}
              <span className="gradient-energy text-gradient">Lives</span>{" "}
              by Transforming{" "}
              <span className="gradient-growth text-gradient">Minds</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl">
              Empowering young people across Africa and beyond with innovative mindset programmes that build confidence, emotional skills, and sustainable futures.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("get-involved")}
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg group"
              >
                Get Involved
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                onClick={() => scrollToSection("programs")}
                size="lg"
                variant="outline"
                className="text-lg border-2"
              >
                Explore Programs
              </Button>
            </div>

            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-4xl font-display font-bold text-primary">25+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-display font-bold text-accent">3</div>
                <div className="text-sm text-muted-foreground">Continents</div>
              </div>
              <div>
                <div className="text-4xl font-display font-bold text-success">1000+</div>
                <div className="text-sm text-muted-foreground">Lives Impacted</div>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="absolute inset-0 gradient-energy opacity-20 blur-3xl"></div>
            <img
              src={heroImage}
              alt="Young people collaborating and learning together"
              className="relative rounded-3xl shadow-2xl w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

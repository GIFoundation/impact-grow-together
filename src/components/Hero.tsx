import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import gifLogo from "@/assets/gif-logo.jpg";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Logo in top-left corner */}
      <div className="absolute top-8 left-8 z-30">
        <img src={gifLogo} alt="Global Impact Foundation" className="h-24 sm:h-32 w-auto drop-shadow-2xl" />
      </div>

      {/* Vibrant gradient background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-gif-orange via-gif-yellow to-gif-cyan"></div>
      
      {/* Animated floating elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gif-lime/30 blob animate-float"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-gif-cyan/40 blob animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-gif-green/30 blob animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-32 right-1/3 w-56 h-56 bg-gif-yellow/40 blob animate-float" style={{ animationDelay: "3s" }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-tight text-white drop-shadow-lg">
              Transforming{" "}
              <span className="text-black">Lives</span>{" "}
              by Transforming{" "}
              <span className="text-black">Minds</span>
            </h1>
            
            <p className="text-xl text-white/95 max-w-2xl drop-shadow">
              Empowering young people across Africa and beyond with innovative mindset programmes that build confidence, emotional skills, and sustainable futures.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("get-involved")}
                size="lg"
                className="bg-black text-white hover:bg-black/90 text-lg group shadow-xl"
              >
                Get Involved
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                onClick={() => scrollToSection("programs")}
                size="lg"
                variant="outline"
                className="text-lg border-2 bg-white hover:bg-white/90 text-black border-white shadow-xl"
              >
                Explore Programs
              </Button>
            </div>

            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-4xl font-display font-bold text-white drop-shadow">25+</div>
                <div className="text-sm text-white/80">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-display font-bold text-white drop-shadow">3</div>
                <div className="text-sm text-white/80">Continents</div>
              </div>
              <div>
                <div className="text-4xl font-display font-bold text-white drop-shadow">1000+</div>
                <div className="text-sm text-white/80">Lives Impacted</div>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-white/10 blur-3xl"></div>
            <img
              src={heroImage}
              alt="Young people collaborating and learning together"
              className="relative rounded-3xl shadow-2xl w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-white/90 cursor-pointer" onClick={() => scrollToSection("about")}>
          <span className="text-sm font-medium">Scroll Down</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
};

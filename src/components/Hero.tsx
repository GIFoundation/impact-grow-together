import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";
import gifLogo from "@/assets/gif-logo.jpg";
import financialEventImage from "@/assets/events/financial-reality-event.jpg";
import ukAfricaSummitImage from "@/assets/events/uk-africa-summit.jpg";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 sm:pt-32">
      {/* Logo in top-left corner */}
      <div className="absolute top-24 sm:top-8 left-8 z-30">
        <img src={gifLogo} alt="Global Impact Foundation" className="h-12 sm:h-16 w-auto drop-shadow-2xl" />
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight text-white drop-shadow-lg">
              Transforming{" "}
              <span className="text-black">Lives</span>{" "}
              by Transforming{" "}
              <span className="text-black">Minds</span>
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-white/95 max-w-2xl drop-shadow">
              Empowering young people across Africa and beyond with innovative mindset programmes that build confidence, emotional skills, and sustainable futures.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-black text-white hover:bg-black/90 text-lg group shadow-xl"
              >
                <Link to="/get-involved">
                  Get Involved
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg border-2 bg-white hover:bg-white/90 text-black border-white shadow-xl"
              >
                <Link to="/programs">
                  Explore Programmes
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pt-2 sm:pt-4">
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white drop-shadow">25+</div>
                <div className="text-xs sm:text-sm text-white/80">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white drop-shadow">3</div>
                <div className="text-xs sm:text-sm text-white/80">Continents</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white drop-shadow">1000+</div>
                <div className="text-xs sm:text-sm text-white/80">Lives Impacted</div>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {/* Event 1: Financial Reality Workshop */}
                <CarouselItem>
                  <div className="bg-card rounded-3xl shadow-2xl overflow-hidden border-2 border-gif-orange">
                    <div className="relative h-32 w-full overflow-hidden">
                      <img 
                        src={financialEventImage} 
                        alt="4 Days to a New Financial Reality Workshop"
                        className="w-full h-full object-cover brightness-75"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute top-3 left-4 flex items-center gap-2 bg-gif-orange/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        <span className="text-xs font-semibold text-white uppercase tracking-wider">
                          Upcoming Event
                        </span>
                      </div>
                      <h3 className="absolute bottom-3 left-4 right-4 text-lg sm:text-xl lg:text-2xl font-display font-bold text-white drop-shadow-lg">
                        4 Days to a New Financial Reality
                      </h3>
                    </div>
                    <div className="p-6">
                      <p className="text-lg font-medium text-primary mb-3">
                        Business and Wealth Reset Workshop
                      </p>
                      <div className="flex items-center gap-4 text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span>Nigeria</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span>4-Day Workshop</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4 text-sm">
                        Join us for an intensive workshop designed to transform your mindset around business and wealth creation. Learn practical strategies to reset your financial reality and build sustainable prosperity.
                      </p>
                      <Button
                        asChild
                        className="bg-gif-orange hover:bg-gif-orange/90 text-white w-full"
                      >
                        <Link to="/contact">
                          Register Now
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CarouselItem>

                {/* Event 2: UK-Africa Summit 2025 */}
                <CarouselItem>
                  <div className="bg-card rounded-3xl shadow-2xl overflow-hidden border-2 border-gif-cyan">
                    <div className="relative h-32 w-full overflow-hidden">
                      <img 
                        src={ukAfricaSummitImage} 
                        alt="UK-Africa Summit 2025 - THINK Programme Launch"
                        className="w-full h-full object-cover brightness-75"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute top-3 left-4 flex items-center gap-2 bg-gif-cyan/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        <span className="text-xs font-semibold text-white uppercase tracking-wider">
                          Upcoming Event
                        </span>
                      </div>
                      <h3 className="absolute bottom-3 left-4 right-4 text-lg sm:text-xl lg:text-2xl font-display font-bold text-white drop-shadow-lg">
                        UK-Africa Summit 2025
                      </h3>
                    </div>
                    <div className="p-6">
                      <p className="text-lg font-medium text-primary mb-3">
                        EGM + GIF Partnership - THINK Programme Launch
                      </p>
                      <div className="flex items-center gap-4 text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span>United Kingdom</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span>November 5, 2025</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4 text-sm">
                        We're launching THINK at the UK-Africa Summit! Meet us and discover how our innovative mindset programme is transforming businesses and empowering entrepreneurs across continents.
                      </p>
                      <Button
                        asChild
                        className="bg-gif-cyan hover:bg-gif-cyan/90 text-white w-full"
                      >
                        <Link to="/contact">
                          Learn More
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
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
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import gifLogo from "@/assets/gif-logo.jpg";
import financialEventImage from "@/assets/events/financial-reality-event.jpg";
import ukAfricaSummitImage from "@/assets/events/uk-africa-summit.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-32 pb-8 md:pb-0">
      {/* Logo in top-left corner - adjusted for mobile */}
      <div className="absolute top-4 md:top-8 left-4 md:left-8 z-30">
        <img
          src={gifLogo}
          alt="Global Impact Foundation"
          className="h-10 md:h-12 lg:h-16 w-auto drop-shadow-2xl"
        />
      </div>

      {/* Vibrant gradient background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-gif-orange via-gif-yellow to-gif-cyan"></div>

      {/* Animated floating elements - reduced size on mobile */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-4 w-40 h-40 md:top-20 md:left-10 md:w-64 md:h-64 bg-gif-lime/30 blob animate-float"></div>
        <div
          className="absolute top-20 right-4 w-48 h-48 md:top-40 md:right-20 md:w-80 md:h-80 bg-gif-cyan/40 blob animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-32 left-8 w-40 h-40 md:bottom-20 md:left-1/4 md:w-72 md:h-72 bg-gif-green/30 blob animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-40 right-8 w-32 h-32 md:bottom-32 md:right-1/3 md:w-56 md:h-56 bg-gif-yellow/40 blob animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12 md:mt-0">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
          {/* Text Content - Mobile adjustments */}
          <div className="space-y-4 md:space-y-6 lg:space-y-8 animate-fade-in order-2 lg:order-1 mt-8 lg:mt-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight text-white drop-shadow-lg">
              Transforming <span className="text-black">Lives</span> by
              Transforming <span className="text-black">Minds</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/95 max-w-2xl drop-shadow leading-relaxed">
              Empowering young people across Africa and beyond with innovative
              mindset programmes that build confidence, emotional skills, and
              sustainable futures.
            </p>

            {/* Buttons - Stack on mobile, row on larger screens */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2">
              <Button
                asChild
                size="lg"
                className="bg-black text-white hover:bg-black/90 text-base md:text-lg group shadow-xl w-full sm:w-auto"
              >
                <Link to="/get-involved">
                  Get Involved
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-base md:text-lg border-2 bg-white hover:bg-white/90 text-black border-white shadow-xl w-full sm:w-auto"
              >
                <Link to="/programs">Explore Programmes</Link>
              </Button>
            </div>

            {/* Stats - Smaller on mobile */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 pt-4 md:pt-6">
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white drop-shadow">
                  25+
                </div>
                <div className="text-xs sm:text-sm text-white/80 leading-tight">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white drop-shadow">
                  3
                </div>
                <div className="text-xs sm:text-sm text-white/80 leading-tight">
                  Continents
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white drop-shadow">
                  1000+
                </div>
                <div className="text-xs sm:text-sm text-white/80 leading-tight">
                  Lives Impacted
                </div>
              </div>
            </div>
          </div>

          {/* Carousel - Order first on mobile, second on desktop */}
          <div className="relative animate-scale-in order-1 lg:order-2">
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
                  <div className="bg-card rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden border-2 border-gif-orange">
                    <div className="relative h-28 sm:h-32 md:h-40 w-full overflow-hidden">
                      <img
                        src={financialEventImage}
                        alt="4 Days to a New Financial Reality Workshop"
                        className="w-full h-full object-cover brightness-75"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute top-2 left-3 md:top-3 md:left-4 flex items-center gap-1 md:gap-2 bg-gif-orange/90 backdrop-blur-sm px-2 md:px-3 py-1 md:py-1.5 rounded-full">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full animate-pulse"></div>
                        <span className="text-[10px] md:text-xs font-semibold text-white uppercase tracking-wider">
                          Upcoming Event
                        </span>
                      </div>
                      <h3 className="absolute bottom-2 left-3 right-3 md:bottom-3 md:left-4 md:right-4 text-base sm:text-lg md:text-xl lg:text-2xl font-display font-bold text-white drop-shadow-lg leading-tight">
                        4 Days to a New Financial Reality
                      </h3>
                    </div>
                    <div className="p-4 md:p-6">
                      <p className="text-base md:text-lg font-medium text-primary mb-2 md:mb-3">
                        Business and Wealth Reset Workshop
                      </p>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground mb-3 md:mb-4">
                        <div className="flex items-center gap-2">
                          <svg
                            className="w-4 h-4 md:w-5 md:h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          <span className="text-sm md:text-base">Nigeria</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg
                            className="w-4 h-4 md:w-5 md:h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          <span className="text-sm md:text-base">
                            4-Day Workshop
                          </span>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-3 md:mb-4 text-xs md:text-sm leading-relaxed">
                        Join us for an intensive workshop designed to transform
                        your mindset around business and wealth creation. Learn
                        practical strategies to reset your financial reality and
                        build sustainable prosperity.
                      </p>
                      <Button
                        asChild
                        className="bg-gif-orange hover:bg-gif-orange/90 text-white w-full text-sm md:text-base"
                      >
                        <Link to="/contact">Register Now</Link>
                      </Button>
                    </div>
                  </div>
                </CarouselItem>

                {/* Event 2: UK-Africa Summit 2025 */}
                <CarouselItem>
                  <div className="bg-card rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden border-2 border-gif-cyan">
                    <div className="relative h-28 sm:h-32 md:h-40 w-full overflow-hidden">
                      <img
                        src={ukAfricaSummitImage}
                        alt="UK-Africa Summit 2025 - THINK Programme Launch"
                        className="w-full h-full object-cover brightness-75"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute top-2 left-3 md:top-3 md:left-4 flex items-center gap-1 md:gap-2 bg-gif-cyan/90 backdrop-blur-sm px-2 md:px-3 py-1 md:py-1.5 rounded-full">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full animate-pulse"></div>
                        <span className="text-[10px] md:text-xs font-semibold text-white uppercase tracking-wider">
                          Upcoming Event
                        </span>
                      </div>
                      <h3 className="absolute bottom-2 left-3 right-3 md:bottom-3 md:left-4 md:right-4 text-base sm:text-lg md:text-xl lg:text-2xl font-display font-bold text-white drop-shadow-lg leading-tight">
                        UK-Africa Summit 2025
                      </h3>
                    </div>
                    <div className="p-4 md:p-6">
                      <p className="text-base md:text-lg font-medium text-primary mb-2 md:mb-3">
                        EGM + GIF Partnership - THINK Programme Launch
                      </p>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground mb-3 md:mb-4">
                        <div className="flex items-center gap-2">
                          <svg
                            className="w-4 h-4 md:w-5 md:h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          <span className="text-sm md:text-base">
                            United Kingdom
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg
                            className="w-4 h-4 md:w-5 md:h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          <span className="text-sm md:text-base">
                            November 5, 2025
                          </span>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-3 md:mb-4 text-xs md:text-sm leading-relaxed">
                        We're launching THINK at the UK-Africa Summit! Meet us
                        and discover how our innovative mindset programme is
                        transforming businesses and empowering entrepreneurs
                        across continents.
                      </p>
                      <Button
                        asChild
                        className="bg-gif-cyan hover:bg-gif-cyan/90 text-white w-full text-sm md:text-base"
                      >
                        <Link to="/contact">Learn More</Link>
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="left-1 md:left-2 h-8 w-8 md:h-10 md:w-10" />
              <CarouselNext className="right-1 md:right-2 h-8 w-8 md:h-10 md:w-10" />
            </Carousel>
          </div>
        </div>
      </div>

      {/* Scroll down indicator - Hide on mobile, show on larger screens */}
      <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div
          className="flex flex-col items-center gap-2 text-white/90 cursor-pointer"
          onClick={() => scrollToSection("about")}
        >
          <span className="text-sm font-medium">Scroll Down</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

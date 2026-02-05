import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Calendar, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import gifLogo from "@/assets/gif-logo.jpg";
import financialEventImage from "@/assets/events/financial-reality-event.jpg";
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
        <div
          className="grid lg:grid-cols-1 gap-6 md:gap-8 lg:gap-12 items-center"
          style={{ display: "flex" }}
        >
          {/* Text Content - Mobile adjustments */}
          <div
            className="space-y-4 md:space-y-6 lg:space-y-8 animate-fade-in order-2 lg:order-1 mt-8 lg:mt-0"
            style={{ width: "100%" }}
          >
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight text-white drop-shadow-lg"
              style={{ width: "70%" }}
            >
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

          {/* Redesigned Carousel - Full height split layout */}
          <div className="relative animate-scale-in h-full order-1 lg:order-2">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full h-full"
            >
              <CarouselContent className="h-full">
                {/* Event 1: Financial Reality Workshop - Split Layout */}
                <CarouselItem>
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden border border-white/20 h-full flex flex-col lg:flex-row">
                    {/* Image Section - Half width on desktop, full width on mobile */}
                    <div className="lg:w-1/2 h-56 lg:h-auto relative overflow-hidden">
                      <img
                        src={financialEventImage}
                        alt="4 Days to a New Financial Reality Workshop"
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gif-orange/20 to-transparent"></div>

                      {/* Live badge */}
                      <div className="absolute top-4 left-4">
                        <div className="flex items-center gap-2 bg-black/80 backdrop-blur-sm px-3 py-1.5 rounded-full">
                          <div className="w-2 h-2 bg-gif-orange rounded-full animate-pulse"></div>
                          <span className="text-xs font-semibold text-white uppercase tracking-wider">
                            Happening Now
                          </span>
                        </div>
                      </div>

                      {/* Event type tag */}
                      <div className="absolute bottom-4 left-4">
                        <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                          <span className="text-sm font-semibold text-gif-orange">
                            Workshop
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content Section - Half width on desktop, full width on mobile */}
                    <div className="lg:w-1/2 p-6 md:p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-3 h-3 bg-gif-orange rounded-full"></div>
                          <span className="text-sm font-medium text-gif-orange">
                            Featured Event
                          </span>
                        </div>

                        <h3 className="text-xl md:text-2xl lg:text-3xl font-display font-bold text-gray-900 mb-4 leading-tight">
                          Reshaping Self-Belief & Expanding Vision
                        </h3>

                        <p className="text-lg md:text-xl font-medium text-gif-orange mb-3">
                          Live group coaching and ongoing personal development
                          guidance
                        </p>

                        {/* Event details */}
                        <div className="space-y-3 mb-6">
                          <div className="flex items-center gap-3">
                            <div className="bg-gif-orange/10 p-2 rounded-lg">
                              <MapPin className="w-5 h-5 text-gif-orange" />
                            </div>
                            <div>
                              <p className="text-sm text-gray-600">Location</p>
                              <p className="font-medium text-gray-900">
                                Uganda
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <div className="bg-gif-orange/10 p-2 rounded-lg">
                              <Calendar className="w-5 h-5 text-gif-orange" />
                            </div>
                            <div>
                              <p className="text-sm text-gray-600">Duration</p>
                              <p className="font-medium text-gray-900">
                                6 Months of Online + Live Coaching
                              </p>
                            </div>
                          </div>
                        </div>

                        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                          GIF and Era92 Elevate 2026 are empowering 3,000
                          Ugandan youth with digital skills and mindset
                          transformation, breaking barriers to dignified work
                          and unlocking their full potential.
                        </p>
                      </div>

                      {/* <div className="space-y-4">
                        <Button
                          asChild
                          className="w-full bg-gif-orange hover:bg-gif-orange/90 text-white h-12 text-base group"
                        >
                          <Link to="/contact">
                            Register Now
                            <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </Button>

                        <div className="text-center">
                          <Link
                            to="/events"
                            className="inline-flex items-center text-sm text-gray-600 hover:text-gif-orange transition-colors"
                          >
                            View all events
                            <ChevronRight className="ml-1 h-4 w-4" />
                          </Link>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="left-2 md:left-4 h-10 w-10 md:h-12 md:w-12 bg-white/90 hover:bg-white backdrop-blur-sm border-white/30" />
              <CarouselNext className="right-2 md:right-4 h-10 w-10 md:h-12 md:w-12 bg-white/90 hover:bg-white backdrop-blur-sm border-white/30" />
            </Carousel>
            ;
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

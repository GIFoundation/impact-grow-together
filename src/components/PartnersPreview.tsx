import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Globe, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import empoweredGrowthImg from "@/assets/partners/empowered-growth.jpg";
import africanImpactImg from "@/assets/partners/african-impact.jpg";
import agapeImg from "@/assets/partners/agape.jpg";
import acysdImg from "@/assets/partners/acysd.jpg";
import youthCafeImg from "@/assets/partners/youth-cafe.jpg";

const partnersPreview = [
  {
    country: "United Kingdom",
    name: "Empowered Growth Marketing",
    description: "AI-powered growth marketing solutions for premium brands across global markets.",
    image: empoweredGrowthImg,
  },
  {
    country: "Zambia",
    name: "African Impact Foundation",
    description: "Empowering young people in Southern and Eastern Africa to break the cycle of poverty.",
    image: africanImpactImg,
  },
  {
    country: "Cameroon",
    name: "AGAPE Association",
    description: "Supporting vulnerable children through education and social integration programs.",
    image: agapeImg,
  },
  {
    country: "Nigeria",
    name: "African Center for Youth Sports and Development",
    description: "Developing youth potential through sports, teamwork, and leadership programs.",
    image: acysdImg,
  },
  {
    country: "Kenya",
    name: "Youth Café",
    description: "Africa's largest community of youth professionals driving socio-economic impact.",
    image: youthCafeImg,
  },
];

export const PartnersPreview = () => {
  return (
    <section id="partners" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Our Partners
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building stronger communities through strategic partnerships across Africa
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {partnersPreview.map((partner, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="group hover:shadow-xl transition-all duration-300 h-full">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <img
                      src={partner.image}
                      alt={`${partner.name} - ${partner.country}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                      <Globe className="h-5 w-5 text-white" />
                      <span className="text-sm font-semibold text-white uppercase tracking-wide">
                        {partner.country}
                      </span>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl">{partner.name}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {partner.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-12" />
          <CarouselNext className="-right-12" />
        </Carousel>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="gap-2">
            <Link to="/partners">
              View All Partners
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Globe, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import accaImg from "@/assets/partners/acca.jpg";
import affordImg from "@/assets/partners/afford.jpg";
import empoweredGrowthImg from "@/assets/partners/empowered-growth.jpg";
import africanImpactImg from "@/assets/partners/african-impact.jpg";
import youthCafeImg from "@/assets/partners/youth-cafe.jpg";
import liberianYouthBankImg from "@/assets/partners/liberian-youth-bank.jpg";
import agapeImg from "@/assets/partners/agape.jpg";
const partnersPreview = [
  {
    country: "Uganda",
    name: "Era92 Elevate 2026",
    description:
      "Era92 Elevate 2026 is a national skills and empowerment initiative in Uganda. GIF partners with Era92 to deliver mindset transformation alongside digital skills training, equipping 3,000 underserved youth with confidence, resilience, and pathways to dignified employment.",
    image: "/hero.jpg",
  },
  {
    country: "United Kingdom",
    name: "ACCA",
    description:
      "Global accountancy body partnering to deliver practical experience in accountancy, AI, and mindset development.",
    image: accaImg,
  },
  {
    country: "United Kingdom",
    name: "AFFORD",
    description:
      "Delivering mindset programmes across Africa and the Diaspora with global reach and funding access.",
    image: affordImg,
  },
  {
    country: "Cameroon",
    name: "AGAPE Association",
    description:
      "AGAPE is a non-lucrative association who works in a multidimensional way in the care of Vulnerable Children in order to facilitate the optimization of their social, educational, professional status and their integration into society.",
    image: agapeImg,
  },
  {
    country: "Zambia",
    name: "African Impact Foundation",
    description:
      "Empowering young people in Southern and Eastern Africa to break the cycle of poverty.",
    image: africanImpactImg,
  },
  {
    country: "United Kingdom",
    name: "Empowered Growth Marketing",
    description:
      "AI-powered growth marketing solutions for premium brands across global markets.",
    image: empoweredGrowthImg,
  },
  {
    country: "Liberia",
    name: "Liberian Youth National Bank",
    description:
      "Empowering youth entrepreneurship, creativity, and innovation for national sustainability.",
    image: liberianYouthBankImg,
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
            Building stronger communities through strategic partnerships across
            Africa
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

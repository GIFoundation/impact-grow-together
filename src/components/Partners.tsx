import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Globe, Users, Heart, Target } from "lucide-react";
import accaImg from "@/assets/partners/acca.jpg";
import affordImg from "@/assets/partners/afford.jpg";
import acysdImg from "@/assets/partners/acysd.jpg";
import africanImpactImg from "@/assets/partners/african-impact.jpg";
import agapeImg from "@/assets/partners/agape.jpg";
import botswanaYouthImg from "@/assets/partners/botswana-youth.jpg";
import empoweredGrowthImg from "@/assets/partners/empowered-growth.jpg";
import liberianYouthBankImg from "@/assets/partners/liberian-youth-bank.jpg";
import youthCafeImg from "@/assets/partners/youth-cafe.jpg";

const partners = [
  {
    country: "Uganda",
    name: "Era92 Elevate 2026",
    description:
      "Era92 Elevate 2026 is a national skills and empowerment initiative in Uganda. GIF partners with Era92 to deliver mindset transformation alongside digital skills training, equipping 3,000 underserved youth with confidence, resilience, and pathways to dignified employment.",
    image: "/hero.jpg",
    highlights: [
      "Training 3,000 youth aged 15–35 in market‑relevant digital skills.",
      "Six community hubs offering mentorship, internships, and real‑world exposure.",
      "GIF’s integrated six‑month mindset curriculum with weekly coaching.",
      "Train‑the‑Trainer pathway empowering youth leaders to sustain transformation locally.",
    ],
  },
  {
    country: "United Kingdom",
    name: "ACCA",
    description:
      "ACCA (Association of Chartered Certified Accountants) is the largest global accountancy body. GIF partners with Moracle Foundation to deliver practical hands-on experience in accountancy, AI, and mindset to ACCA students in or just leaving university.",
    image: accaImg,
    highlights: [
      "Global reach with students worldwide",
      "Completed 2 pilot projects with approximately 80 students",
      "Expanding to 400 students annually",
      "Focus on practical accountancy skills, AI, and mindset development",
    ],
  },
  {
    country: "United Kingdom",
    name: "AFFORD",
    description:
      "AFFORD partners with GIF to roll out mindset programmes integrated into their delivery to Africa and the Diaspora worldwide. They have significant database access and funding reach across global communities.",
    image: affordImg,
    highlights: [
      "Global reach across Africa and Diaspora communities",
      "Significant database and funding access",
      "Integrated mindset programming",
      "Strong leadership partnership",
    ],
  },
  // {
  //   country: "Nigeria",
  //   name: "African Center for Youth Sports and Development",
  //   description:
  //     "ACYSD strives to raise the value of youth sports by providing accessible opportunities for young people to engage in sports activities, develop their talents, and unlock their full potential. Through their programmes, ACYSD aims to instil the values of teamwork, discipline, leadership, and resilience, while promoting a healthy and active lifestyle.",
  //   image: acysdImg,
  // },
  // {
  //   country: "Zambia",
  //   name: "African Impact Foundation",
  //   description: "African Impact Foundation's holistic approach gives young people in Southern and Eastern Africa the best chance of real, long-term change to break the cycle of poverty for themselves and their community.",
  //   image: africanImpactImg,
  //   pillars: [
  //     {
  //       title: "Gender Equality",
  //       description: "Girls and young women are equipped to choose their own pathways to become healthy, positive and prosperous leaders.",
  //     },
  //     {
  //       title: "Education",
  //       description: "Students have the opportunity and ability to finish school and seek sustainable livelihoods.",
  //     },
  //     {
  //       title: "Wellness",
  //       description: "Young people are mindful of the choices they make about their health and wellbeing.",
  //     },
  //     {
  //       title: "Livelihood",
  //       description: "Young people are able to access pathways to sustainable livelihoods through entrepreneurship, skills training and further education.",
  //     },
  //   ],
  // },
  {
    country: "Cameroon",
    name: "AGAPE Association",
    description:
      "AGAPE is a non-lucrative association who works in a multidimensional way in the care of Vulnerable Children in order to facilitate the optimization of their social, educational, professional status and their integration into society.",
    image: agapeImg,
    objectives: [
      "Improve the living conditions of vulnerable children",
      "Remove children from the street where they were begging or working",
      "Offer them a safe environment conducive to their education",
      "Improve their social skills",
      "Instil in them a strong sense of community life",
      "Help them respect basic rules of hygiene",
    ],
  },
  {
    country: "Botswana",
    name: "Botswana Ministry of Youth and BNYC",
    description:
      "Partnership with Botswana's Ministry of Youth and the Botswana National Youth Council to deliver impactful youth development programmes across the nation.",
    image: botswanaYouthImg,
  },
  {
    country: "United Kingdom",
    name: "Empowered Growth Marketing",
    description:
      "EGM delivers AI-powered growth marketing solutions for premium brands in wellness, luxury, F&B, and tech. A unique partnership combining international GTM and cross-cultural trade expertise with mindset development, delivering three-tier programmes to businesses with over 100 staff.",
    image: empoweredGrowthImg,
    highlights: [
      "AI Marketing Agents delivered in 10 days",
      "Cross-cultural GTM expertise across EMEA, APAC, and NA",
      "200% conversion increase, 40% lower customer acquisition costs",
      "Governance-first approach for premium brand safety",
    ],
  },
  {
    country: "Liberia",
    name: "Liberian Youth National Bank",
    description:
      "Initiative from the LYNB to increase youth entrepreneurship, creativity, and innovation for youth and national sustainability. Focused on empowering young Liberians with financial literacy and entrepreneurial skills.",
    image: liberianYouthBankImg,
  },
  // {
  //   country: "Kenya",
  //   name: "Youth Café",
  //   description:
  //     "The Youth Cafe is Africa's largest and most diverse convening community of professionals harnessing youth advocacy, policy, and research for socio-economic and political impact, with over 3,500 member organisations, over 1,200 experts, and over 947,000 individual members aged between 18 to 35 virtually from every country in Africa.",
  //   image: youthCafeImg,
  // },
];

export const Partners = () => {
  return (
    <section id="partners" className="pt-8 pb-24 relative overflow-hidden">
      {/* Background decoration */}
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
            {partners.map((partner, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
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
                    <CardTitle className="text-2xl">{partner.name}</CardTitle>
                    <CardDescription className="text-base leading-relaxed pt-2">
                      {partner.description}
                    </CardDescription>
                  </CardHeader>

                  {(partner.highlights ||
                    partner.pillars ||
                    partner.objectives) && (
                    <CardContent>
                      <div className="space-y-3">
                        {partner.highlights && (
                          <>
                            <div className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
                              <Target className="h-4 w-4 text-primary" />
                              Key Highlights:
                            </div>
                            <ul className="space-y-2">
                              {partner.highlights.map((highlight, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-2 text-sm"
                                >
                                  <span className="text-primary mt-1">•</span>
                                  <span className="text-muted-foreground">
                                    {highlight}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </>
                        )}

                        {partner.pillars && (
                          <>
                            <div className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
                              <Target className="h-4 w-4 text-primary" />
                              Four Pillars:
                            </div>
                            <div className="grid gap-3">
                              {partner.pillars.map((pillar, idx) => (
                                <div
                                  key={idx}
                                  className="bg-secondary/30 p-3 rounded-lg"
                                >
                                  <h4 className="font-semibold text-sm mb-1">
                                    {pillar.title}
                                  </h4>
                                  <p className="text-sm text-muted-foreground">
                                    {pillar.description}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </>
                        )}

                        {partner.objectives && (
                          <>
                            <div className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
                              <Heart className="h-4 w-4 text-primary" />
                              Our Objectives:
                            </div>
                            <ul className="space-y-2">
                              {partner.objectives.map((objective, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-2 text-sm"
                                >
                                  <span className="text-primary mt-1">•</span>
                                  <span className="text-muted-foreground">
                                    {objective}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </>
                        )}
                      </div>
                    </CardContent>
                  )}
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-12" />
          <CarouselNext className="-right-12" />
        </Carousel>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-primary/20">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <Users className="h-12 w-12 text-primary" />
              </div>
              <CardTitle className="text-3xl">Partner With Us</CardTitle>
              <CardDescription className="text-base pt-2">
                It's easy to get in touch with us and explore possible
                collaboration and partnerships.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-8 py-3 text-sm font-medium shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Get in Touch
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Users, Heart, Target } from "lucide-react";

const partners = [
  {
    country: "Zambia",
    name: "African Impact Foundation",
    description: "African Impact Foundation's holistic approach gives young people in Southern and Eastern Africa the best chance of real, long-term change to break the cycle of poverty for themselves and their community.",
    pillars: [
      {
        title: "Gender Equality",
        description: "Girls and young women are equipped to choose their own pathways to become healthy, positive and prosperous leaders.",
      },
      {
        title: "Education",
        description: "Students have the opportunity and ability to finish school and seek sustainable livelihoods.",
      },
      {
        title: "Wellness",
        description: "Young people are mindful of the choices they make about their health and wellbeing.",
      },
      {
        title: "Livelihood",
        description: "Young people are able to access pathways to sustainable livelihoods through entrepreneurship, skills training and further education.",
      },
    ],
  },
  {
    country: "Cameroon",
    name: "AGAPE Association",
    description: "AGAPE is a non-lucrative association who works in a multidimensional way in the care of Vulnerable Children in order to facilitate the optimization of their social, educational, professional status and their integration into society.",
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
    country: "Nigeria",
    name: "African Center for Youth Sports and Development",
    description: "ACYSD strives to raise the value of youth sports by providing accessible opportunities for young people to engage in sports activities, develop their talents, and unlock their full potential. Through their programmes, ACYSD aims to instil the values of teamwork, discipline, leadership, and resilience, while promoting a healthy and active lifestyle.",
  },
  {
    country: "Kenya",
    name: "Youth Café",
    description: "The Youth Cafe is Africa's largest and most diverse convening community of professionals harnessing youth advocacy, policy, and research for socio-economic and political impact, with over 3,500 member organisations, over 1,200 experts, and over 947,000 individual members aged between 18 to 35 virtually from every country in Africa.",
  },
];

export const Partners = () => {
  return (
    <section id="partners" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
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

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Globe className="h-5 w-5 text-primary" />
                  <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                    {partner.country}
                  </span>
                </div>
                <CardTitle className="text-2xl">{partner.name}</CardTitle>
                <CardDescription className="text-base leading-relaxed pt-2">
                  {partner.description}
                </CardDescription>
              </CardHeader>
              
              {(partner.pillars || partner.objectives) && (
                <CardContent>
                  <div className="space-y-3">
                    {partner.pillars && (
                      <>
                        <div className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
                          <Target className="h-4 w-4 text-primary" />
                          Four Pillars:
                        </div>
                        <div className="grid gap-3">
                          {partner.pillars.map((pillar, idx) => (
                            <div key={idx} className="bg-secondary/30 p-3 rounded-lg">
                              <h4 className="font-semibold text-sm mb-1">{pillar.title}</h4>
                              <p className="text-sm text-muted-foreground">{pillar.description}</p>
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
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <span className="text-primary mt-1">•</span>
                              <span className="text-muted-foreground">{objective}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-primary/20">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <Users className="h-12 w-12 text-primary" />
              </div>
              <CardTitle className="text-3xl">Partner With Us</CardTitle>
              <CardDescription className="text-base pt-2">
                It's easy to get in touch with us and explore possible collaboration and partnerships.
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

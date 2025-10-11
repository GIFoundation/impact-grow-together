import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Quote } from "lucide-react";

export const Impact = () => {
  const stats = [
    { number: "1000+", label: "Young People Empowered" },
    { number: "15+", label: "Countries Reached" },
    { number: "50+", label: "Programmes Delivered" },
    { number: "95%", label: "Positive Outcomes" },
  ];

  const testimonials = [
    {
      transformationMoment: "Everything changed when I discovered the IMPACT Mindset Programme.",
      story: "When I graduated from university in Sierra Leone, I was full of hope. But reality hit hard—I spent over a year searching desperately for work, relying heavily on my family, and wondering if my education had been in vain. Almost immediately after starting the programme, I secured a position with one of Sierra Leone's top accountancy firms. For the first time, I felt the ground beneath my feet. But the programme also opened my eyes. As I worked on shifting my mindset, I realised that the job I had just landed wasn't truly my future. With new clarity and confidence, I made the bold decision to resign. Soon after, I reached out to an international accountancy firm in the UK—something I would have never imagined myself doing before. To my amazement, they welcomed me onto their team. Fast forward just two years, and my life looks completely different. I am married, have taken my professional exams, and now serve in a lead role with that very same international firm—right here in Sierra Leone. My monthly earnings surpass what most civil servants here make in an entire year. Today, I am more than just an employee—I am an ambassador and champion for mindset work in my country. I share my story so that others can see what's possible when you shift the way you think, and step into the opportunities that are waiting for you.",
      author: "Noah",
      role: "Programme Graduate, Sierra Leone",
    },
    {
      transformationMoment: "Then I enrolled in the IMPACT Mindset Programme—and everything shifted.",
      story: "When I finished university, I felt completely stuck. With no work experience, every application I sent seemed to go nowhere. I couldn't find employment, and I started doubting myself and my future. Almost immediately after enrolling, I landed my first job. But more than that, I began to see myself differently. My confidence grew, my belief in my abilities strengthened, and my thinking about what's truly possible transformed. Today, I am financially self-sufficient and thriving. In my current role, I've expanded my professional reach beyond Sierra Leone, taking on accountability for services in other African countries. The programme didn't just help me get a job—it gave me the tools to build a career, a future, and a sense of purpose I never thought possible.",
      author: "Jessica",
      role: "Programme Graduate, Sierra Leone",
    },
    {
      transformationMoment: "Participating in the IMPACT Mindset Programme has been a transformative experience for me.",
      story: "The skills and insights I gained have significantly impacted my personal and professional growth. The curriculum was both engaging and practical, allowing me to apply what I learned in real-world scenarios. I particularly appreciated the collaborative environment and the opportunity to connect with like-minded individuals who share my passion for growth and development. I wholeheartedly recommend the IMPACT Programme to anyone looking to elevate their skills and make a meaningful change in their life. It's an experience I'll carry with me for years to come.",
      author: "Henok",
      role: "Programme Graduate",
    },
    {
      transformationMoment: "Joining the IMPACT Mindset Programme was a true game changer.",
      story: "I grew up in an orphanage, and even after leaving, I was still very dependent on their support. Deep down, I wanted more for myself—but I didn't know how to get there. I was eager to do the programme, because for so long people had told me that I couldn't follow my passion for beautifying women—as I had no formal qualifications. But during the programme, something shifted. I stepped out boldly, and before long I had secured fourteen paying clients. That was just the beginning. With the income I earned, I was able to put myself through university. Today, I am a trained nurse, living out the work I know I was meant for. The greatest lesson I've learned is this: with the right mindset, I can do anything I set my heart on—no matter what other people think.",
      author: "Rebecca",
      role: "Programme Graduate",
    },
  ];

  return (
    <section id="impact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full">
            Our Impact
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold mt-6 mb-4">
            Creating <span className="gradient-growth text-gradient">Lasting Change</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Since 2020, we've been transforming lives and communities across Africa and beyond.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl sm:text-6xl font-display font-bold gradient-energy text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Success Stories */}
        <div className="mb-12">
          <h3 className="text-3xl font-display font-bold text-center mb-12">Success Stories</h3>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2">
                  <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg h-full overflow-hidden">
                    <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-gif-lime/10 p-6 border-b">
                      <Quote className="h-8 w-8 text-primary/40 mb-3" />
                      <p className="text-lg font-semibold text-foreground italic">"{testimonial.transformationMoment}"</p>
                    </div>
                    <CardContent className="pt-6 flex flex-col h-full">
                      <p className="text-muted-foreground mb-6 flex-grow overflow-y-auto max-h-72">{testimonial.story}</p>
                      <div className="flex-shrink-0 pt-4 border-t">
                        <div className="font-semibold">{testimonial.author}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-12" />
            <CarouselNext className="-right-12" />
          </Carousel>
        </div>

        {/* Global Reach */}
        <div className="bg-card rounded-3xl p-8 md:p-12 border border-border shadow-lg text-center">
          <h3 className="text-3xl font-display font-bold mb-6">Our Global Footprint</h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Currently registered in both the UK and the US, with a growing operational footprint across Africa. We're expanding our reach globally to empower young people everywhere.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-6 py-3 bg-primary/10 text-primary rounded-full font-medium">United Kingdom</span>
            <span className="px-6 py-3 bg-accent/10 text-accent rounded-full font-medium">United States</span>
            <span className="px-6 py-3 bg-success/10 text-success rounded-full font-medium">Africa</span>
            <span className="px-6 py-3 bg-gif-lime/10 text-gif-lime rounded-full font-medium">Growing Globally</span>
          </div>
        </div>
      </div>
    </section>
  );
};

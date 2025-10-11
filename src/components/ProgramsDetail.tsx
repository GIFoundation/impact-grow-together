import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Rocket, TrendingUp, Crown } from "lucide-react";

export const ProgramsDetail = () => {
  const impactSixMonths = {
    parts: [
      {
        title: "Part One: New Beginnings",
        icon: Lightbulb,
        color: "text-gif-orange",
        bgColor: "bg-gif-orange/10",
        description: "Find purpose with clear vision, understand how the mind works, and create new beliefs and habits from the inside out.",
        lessons: [
          {
            number: 1,
            title: "Goal Setting and The Power of Decision Making",
            description: "Gain clarity on your potential future and discover the deep feeling of success. Stretch your imagination beyond current circumstances and develop powerful decision-making skills."
          },
          {
            number: 2,
            title: "The Power of Your Mind",
            description: "Fully realise and understand the power of your mind. Break free from automatic thinking and behaviour, tap into infinite potential, and create permanent, real results from the inside out."
          },
          {
            number: 3,
            title: "The Gap Between What You Know and What You Do",
            description: "Discover the stark contrast between your actions and what you actually want. Kick start the process of discovering limiting thoughts and beliefs, and begin changing ingrained habits."
          }
        ]
      },
      {
        title: "Part Two: Internal Resources",
        icon: Rocket,
        color: "text-gif-cyan",
        bgColor: "bg-gif-cyan/10",
        description: "Change limiting behaviours and attitudes, bring out true potential, and discover the hidden powerhouse within you.",
        lessons: [
          {
            number: 4,
            title: "Who Am I – A Winner's Image",
            description: "Get comfortable with being uncomfortable. Uncover current self-stories and create a new internal self-image aligned with your goals. Self-image is the number one key to success."
          },
          {
            number: 5,
            title: "Goal Alignment – Fusion of Belief and Going Through Fear",
            description: "Realise the power of deep integration between thoughts, beliefs, and actions. Find freedom beyond fear and procrastination through aligned action."
          },
          {
            number: 6,
            title: "Attitude and The Power of Giving",
            description: "Learn principles of attitude and apply techniques for greater success. Discover how being of service daily is critical to future success and learn to lead yourself first."
          }
        ]
      },
      {
        title: "Part Three: External Influence",
        icon: TrendingUp,
        color: "text-gif-green",
        bgColor: "bg-gif-green/10",
        description: "Embed learning into practical everyday solutions, taking self-expression into the world with a clear concept of a new You.",
        lessons: [
          {
            number: 7,
            title: "The Power Behind Performance – Three Key Success Hacks",
            description: "Master consistency, persistence, and discipline - the foundation of all success. Take yourself into a new realm of possibilities through daily implementation."
          },
          {
            number: 8,
            title: "Shifting Frequency – Cause and Effect in Action",
            description: "Learn the Law of Cause and Effect - the 'Law of all Laws.' Discover how to create your life and future by using this universal law to your advantage."
          },
          {
            number: 9,
            title: "The Law of Assumption – Imagine Your Goal and Live It in the Now",
            description: "Go deeper into using mental faculties to influence actions and outcomes. Transform and upgrade your mindset to master personal creation and goal achieving."
          }
        ]
      },
      {
        title: "Part Four: Rapid Growth",
        icon: Crown,
        color: "text-gif-lime",
        bgColor: "bg-gif-lime/10",
        description: "A new and permanent self emerges. Take control of destiny and choices, make quantum leaps, and live from an elevated mind into a new reality.",
        lessons: [
          {
            number: 10,
            title: "Wealth and Prosperity – Sustain an Increased Financial Flow",
            description: "Develop a new understanding of money and map out a new financial future. Learn the mechanics of wealth in the real world fused with inner infinite wealth."
          },
          {
            number: 11,
            title: "Quantum Leap – Multiply Your Personal Effectiveness",
            description: "Bring together all previous learning and implement real-life strategies for exponential performance improvement and all-time breakthrough achievement."
          },
          {
            number: 12,
            title: "Mastermind Your Way to Success – and Win BIG!",
            description: "Experience the power of collaboration and join forces with others aiming high. Learn that collaboration, not competition, is the real key to fulfilment and success."
          }
        ]
      }
    ]
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* IMPACT 6 Months Programme Detail */}
        <div className="mb-20">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-primary/10 text-primary">Flagship Programme</Badge>
            <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
              IMPACT <span className="gradient-energy text-gradient">6 Months</span> Mindset Programme
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Twelve logical, practical lessons presented in four transformative parts. Each lesson translates into tangible results for participants in all aspects of personal life, work, relationships, confidence and leadership skills.
            </p>
          </div>

          <Tabs defaultValue="part1" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
              {impactSixMonths.parts.map((part, index) => (
                <TabsTrigger key={index} value={`part${index + 1}`} className="text-sm sm:text-base">
                  Part {index + 1}
                </TabsTrigger>
              ))}
            </TabsList>

            {impactSixMonths.parts.map((part, partIndex) => (
              <TabsContent key={partIndex} value={`part${partIndex + 1}`} className="space-y-6">
                <Card className={`border-2 ${part.bgColor}`}>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className={`w-16 h-16 rounded-2xl ${part.bgColor} flex items-center justify-center flex-shrink-0`}>
                        <part.icon className={`h-8 w-8 ${part.color}`} />
                      </div>
                      <div>
                        <CardTitle className="text-2xl sm:text-3xl mb-2">{part.title}</CardTitle>
                        <p className="text-muted-foreground">{part.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <div className="grid gap-6">
                  {part.lessons.map((lesson, lessonIndex) => (
                    <Card
                      key={lessonIndex}
                      className="border-2 hover:border-primary/50 transition-all hover:shadow-lg animate-scale-in"
                      style={{ animationDelay: `${lessonIndex * 0.1}s` }}
                    >
                      <CardHeader>
                        <div className="flex items-start gap-4">
                          <Badge className={`flex-shrink-0 text-lg ${part.bgColor} ${part.color}`}>
                            Lesson {lesson.number}
                          </Badge>
                          <div>
                            <CardTitle className="text-xl mb-2">{lesson.title}</CardTitle>
                            <p className="text-muted-foreground">{lesson.description}</p>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <Card className="mt-12 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8">
              <h3 className="text-2xl font-display font-bold mb-4">Programme Features</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">📚 Comprehensive Resources</h4>
                  <p className="text-muted-foreground">Weekly lessons with workbooks and practical exercises designed to create lasting transformation.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">👥 Live Coaching Sessions</h4>
                  <p className="text-muted-foreground">Weekly live coaching for in-depth discussions, guidance, and encouragement throughout your journey.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">🌍 Community Platform</h4>
                  <p className="text-muted-foreground">Join a community of learners on our Visiion platform for peer support and collaboration.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">🎯 Personalized Support</h4>
                  <p className="text-muted-foreground">Mentorship and coaching to ensure best outcomes in your mindset transformation.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Other Programmes Overview */}
        <div className="space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              Additional <span className="gradient-energy text-gradient">Programmes</span>
            </h2>
          </div>

          <Card className="border-2">
            <CardHeader>
              <div className="flex items-start gap-4">
                <Badge className="bg-gif-green/10 text-gif-green">8 Weeks</Badge>
                <div>
                  <CardTitle className="text-2xl mb-3">The Entrepreneurial Mindset Code</CardTitle>
                  <p className="text-muted-foreground mb-4">
                    A transformative journey designed for aspiring founders and early-stage entrepreneurs. Learn to think, decide, and act like the world's most effective entrepreneurs.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Develop unshakable confidence and purpose</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Spot and validate real-world opportunities</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Build powerful customer relationships</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Make bold decisions under uncertainty</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <div className="flex items-start gap-4">
                <Badge className="bg-gif-lime/10 text-gif-lime">3 Months</Badge>
                <div>
                  <CardTitle className="text-2xl mb-3">From the Inside Out</CardTitle>
                  <p className="text-muted-foreground">
                    An intensive programme intended to empower, inspire and enable changed thinking and beliefs to create improved personal outcomes. Specifically designed for both current and former prison members, delivered face to face. Each lesson builds on the previous in a structured journey of transformation.
                  </p>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>

        {/* Delivery Methods */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              Programme <span className="gradient-energy text-gradient">Delivery</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 bg-gradient-to-br from-gif-cyan/5 to-gif-cyan/10">
              <CardHeader>
                <CardTitle className="text-2xl mb-3">Visiion Online</CardTitle>
                <p className="text-muted-foreground">
                  A transformative educational platform providing young people across the globe access to key learning programmes. By transcending geographical limitations, most programmes are now accessible on our Visiion platform, enhanced with live workshops and masterclasses led by trained facilitators.
                </p>
              </CardHeader>
            </Card>

            <Card className="border-2 bg-gradient-to-br from-gif-orange/5 to-gif-orange/10">
              <CardHeader>
                <CardTitle className="text-2xl mb-3">Building Brighter Futures</CardTitle>
                <p className="text-muted-foreground">
                  GIF's in-country initiative designed for hard-to-reach community youth groups within Sub-Saharan Africa. Partnering with grassroots organisations, we provide specialised mindset training, IT equipment, and train local facilitators for sustainable, community-owned impact.
                </p>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};


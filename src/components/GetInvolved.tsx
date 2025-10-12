import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Heart, Users, Briefcase, CheckCircle, ArrowRight, Mail, Phone, MapPin, Megaphone, Palette } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { CarouselDots } from "@/components/ui/carousel-dots";
import React from "react";

export const GetInvolved = () => {
  const { toast } = useToast();
  const [carouselApi, setCarouselApi] = React.useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    interests: [] as string[],
    message: "",
  });

  React.useEffect(() => {
    if (!carouselApi) return;

    carouselApi.on("select", () => {
      setCurrentSlide(carouselApi.selectedScrollSnap());
    });
  }, [carouselApi]);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest. We'll be in touch soon.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      location: "",
      interests: [],
      message: "",
    });
  };

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  return (
    <div className="bg-background">
      {/* Become a Donor Section */}
      <section id="become-donor" className="py-24 bg-gradient-to-b from-transparent via-gif-orange/5 to-background relative overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-gif-orange/10 blob animate-float"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 animate-fade-in">
            <Heart className="h-16 w-16 text-gif-orange mx-auto mb-6" />
            <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
              Become a <span className="text-gif-orange">Donor</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your contribution directly funds mindset programmes for young people who need them most.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-2 hover:border-gif-orange/50 hover:bg-gif-orange/5 transition-all">
              <CardHeader>
                <CardTitle className="text-xl">One-Time Donation</CardTitle>
                <CardDescription>Make an immediate impact with a single contribution</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-gif-orange mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Support specific programmes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-gif-orange mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Flexible donation amount</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-gif-orange mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Immediate tax receipt</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-gif-orange/50 hover:bg-gif-orange/5 transition-all border-gif-orange/30">
              <CardHeader>
                <div className="bg-gif-orange text-white px-3 py-1 rounded-full text-xs font-semibold inline-block mb-2">
                  Most Popular
                </div>
                <CardTitle className="text-xl">Monthly Giving</CardTitle>
                <CardDescription>Sustain our mission with regular contributions</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-gif-orange mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Predictable support for planning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-gif-orange mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Cancel or adjust anytime</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-gif-orange mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Exclusive donor updates</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-gif-orange/50 hover:bg-gif-orange/5 transition-all">
              <CardHeader>
                <CardTitle className="text-xl">Corporate Partnership</CardTitle>
                <CardDescription>Partner with us for greater impact</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-gif-orange mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Customized giving programmes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-gif-orange mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Employee engagement opportunities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-gif-orange mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Recognition and visibility</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="bg-gif-orange text-white hover:bg-gif-orange/90 text-lg group"
            >
              <Link to="/donate">
                Start Making a Difference
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Volunteer with Us Section */}
      <section id="volunteer" className="py-24 bg-gradient-to-br from-gif-cyan/10 via-background to-gif-lime/10 relative overflow-hidden">
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gif-cyan/10 blob animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 animate-fade-in">
            <Users className="h-16 w-16 text-gif-cyan mx-auto mb-6" />
            <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
              Volunteer <span className="text-gif-cyan">with Us</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Share your skills and experience to help expand our impact.
            </p>
          </div>

          {/* Learn More About Volunteering */}
          <div className="mb-16">
            <h3 className="text-3xl font-display font-bold text-center mb-8">
              Learn More About Volunteering
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 hover:border-gif-cyan/50 hover:bg-gif-cyan/5 transition-all">
                <CardHeader>
                  <CardTitle>Why Volunteer?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">
                    Volunteering with GIF gives you the opportunity to make a real difference in young people's lives while developing your own skills and expanding your network.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-gif-cyan mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Create meaningful impact</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-gif-cyan mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Develop new skills</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-gif-cyan mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Join a passionate community</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-gif-cyan mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Flexible commitment options</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-gif-cyan/50 hover:bg-gif-cyan/5 transition-all">
                <CardHeader>
                  <CardTitle>What to Expect</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">
                    We provide comprehensive support to ensure your volunteering experience is rewarding and impactful.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-gif-cyan mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Orientation and training</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-gif-cyan mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Ongoing support from our team</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-gif-cyan mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Recognition for your contributions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-gif-cyan mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Volunteer appreciation events</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Find Your Volunteer Opportunity */}
          <div className="mb-16">
            <h3 className="text-3xl font-display font-bold text-center mb-8">
              Find Your Volunteer Opportunity
            </h3>
            <div className="max-w-5xl mx-auto">
              <Carousel
                setApi={setCarouselApi}
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent>
                  <CarouselItem className="md:basis-1/2">
                    <Card className="border-2 hover:border-gif-cyan/50 hover:bg-gif-cyan/5 transition-all h-full">
                      <CardHeader>
                        <div className="w-12 h-12 rounded-xl bg-gif-cyan/10 flex items-center justify-center mb-3">
                          <Megaphone className="h-6 w-6 text-gif-cyan" />
                        </div>
                        <CardTitle className="text-lg">Volunteer Corporate Fundraiser (UK)</CardTitle>
                        <CardDescription>Remote Worldwide</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">About the Position</h4>
                          <p className="text-sm text-muted-foreground">
                            Lead our corporate fundraising efforts in the UK and US. This role combines hands-on prospecting (cold calling and emailing) with strategic planning to develop and implement a corporate fundraising strategy.
                          </p>
                        </div>
                        <div>
                          <p className="text-sm font-medium mb-2">Key Responsibilities:</p>
                          <ul className="space-y-1.5 text-sm text-muted-foreground">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-gif-cyan mt-0.5 flex-shrink-0" />
                              <span>Research and identify potential corporate donors</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-gif-cyan mt-0.5 flex-shrink-0" />
                              <span>Develop corporate fundraising strategy</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-gif-cyan mt-0.5 flex-shrink-0" />
                              <span>Build relationships with corporate partners</span>
                            </li>
                          </ul>
                        </div>
                        <div className="pt-2 border-t">
                          <p className="text-xs text-muted-foreground">
                            <strong>Commitment:</strong> 20 hours/week for 12 months (Unpaid, Remote)
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>

                  <CarouselItem className="md:basis-1/2">
                    <Card className="border-2 hover:border-gif-cyan/50 hover:bg-gif-cyan/5 transition-all h-full">
                      <CardHeader>
                        <div className="w-12 h-12 rounded-xl bg-gif-cyan/10 flex items-center justify-center mb-3">
                          <Palette className="h-6 w-6 text-gif-cyan" />
                        </div>
                        <CardTitle className="text-lg">Volunteer Digital Marketing & Content Creator (UK)</CardTitle>
                        <CardDescription>Remote Worldwide</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">About the Position</h4>
                          <p className="text-sm text-muted-foreground">
                            Lead and execute our online presence. This role combines digital marketing strategy with hands-on content creation (graphics and video) to grow our reach and engage supporters.
                          </p>
                        </div>
                        <div>
                          <p className="text-sm font-medium mb-2">Key Responsibilities:</p>
                          <ul className="space-y-1.5 text-sm text-muted-foreground">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-gif-cyan mt-0.5 flex-shrink-0" />
                              <span>Plan and implement digital marketing campaigns</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-gif-cyan mt-0.5 flex-shrink-0" />
                              <span>Create graphics, video, and social media content</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-gif-cyan mt-0.5 flex-shrink-0" />
                              <span>Manage social media and track analytics</span>
                            </li>
                          </ul>
                        </div>
                        <div className="pt-2 border-t">
                          <p className="text-xs text-muted-foreground">
                            <strong>Commitment:</strong> 15-20 hours/week for 12 months (Unpaid, Remote)
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>

                  <CarouselItem className="md:basis-1/2">
                    <Card className="border-2 hover:border-gif-cyan/50 hover:bg-gif-cyan/5 transition-all h-full">
                      <CardHeader>
                        <div className="w-12 h-12 rounded-xl bg-gif-cyan/10 flex items-center justify-center mb-3">
                          <Users className="h-6 w-6 text-gif-cyan" />
                        </div>
                        <CardTitle className="text-lg">Event Support</CardTitle>
                        <CardDescription>Help at workshops, conferences, and community events</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                          Support our impactful events and workshops where young people learn valuable mindset skills and connect with their communities.
                        </p>
                        <ul className="space-y-1.5 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-gif-cyan mt-0.5 flex-shrink-0" />
                            <span>Event setup and coordination</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-gif-cyan mt-0.5 flex-shrink-0" />
                            <span>Participant registration and support</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-gif-cyan mt-0.5 flex-shrink-0" />
                            <span>Workshop assistance</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </CarouselItem>

                  <CarouselItem className="md:basis-1/2">
                    <Card className="border-2 hover:border-gif-cyan/50 hover:bg-gif-cyan/5 transition-all h-full">
                      <CardHeader>
                        <div className="w-12 h-12 rounded-xl bg-gif-cyan/10 flex items-center justify-center mb-3">
                          <Briefcase className="h-6 w-6 text-gif-cyan" />
                        </div>
                        <CardTitle className="text-lg">Administrative Support</CardTitle>
                        <CardDescription>Support our operations behind the scenes</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                          Help us run smoothly by providing essential administrative support that keeps our programmes operating effectively.
                        </p>
                        <ul className="space-y-1.5 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-gif-cyan mt-0.5 flex-shrink-0" />
                            <span>Data entry and management</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-gif-cyan mt-0.5 flex-shrink-0" />
                            <span>Communications support</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-gif-cyan mt-0.5 flex-shrink-0" />
                            <span>Project coordination</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
              <CarouselDots 
                total={4} 
                current={currentSlide}
                onDotClick={(index) => carouselApi?.scrollTo(index)}
              />
            </div>
          </div>

          {/* Apply to Volunteer */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-gif-cyan via-gif-lime to-gif-cyan rounded-3xl p-1">
              <div className="bg-background rounded-3xl p-8 md:p-12">
                <h3 className="text-3xl font-display font-bold text-center mb-6">
                  Apply to Volunteer
                </h3>
                <p className="text-center text-muted-foreground mb-8">
                  Fill out the form below and we'll be in touch to discuss the best opportunities for you.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="City, Country"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label>Areas of Interest *</Label>
                    <div className="grid md:grid-cols-2 gap-4">
                      {["Corporate Fundraising", "Digital Marketing & Content", "Event Support", "Administrative Support"].map((interest) => (
                        <div key={interest} className="flex items-center space-x-2">
                          <Checkbox
                            id={interest}
                            checked={formData.interests.includes(interest)}
                            onCheckedChange={() => handleInterestToggle(interest)}
                          />
                          <label
                            htmlFor={interest}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                          >
                            {interest}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Tell Us About Yourself</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your skills, experience, and why you want to volunteer with GIF..."
                      rows={5}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gif-cyan text-white hover:bg-gif-cyan/90 text-lg"
                  >
                    Submit Application
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner with GIF Section */}
      <section id="partner" className="py-24 bg-gradient-to-br from-gif-green/10 via-background to-gif-lime/10 relative overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-gif-green/10 blob animate-float"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 animate-fade-in">
            <Briefcase className="h-16 w-16 text-gif-green mx-auto mb-6" />
            <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
              Partner with <span className="text-gif-green">GIF</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Collaborate with us to bring transformative programmes to your organisation or community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-2 hover:border-gif-green/50 hover:bg-gif-green/5 transition-all">
              <CardHeader>
                <div className="w-16 h-16 rounded-2xl bg-gif-green/10 flex items-center justify-center mb-4">
                  <Briefcase className="h-8 w-8 text-gif-green" />
                </div>
                <CardTitle className="text-2xl">Corporate Partnerships</CardTitle>
                <CardDescription className="text-base">
                  Engage your employees and give back to communities through our programmes.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-gif-green mt-0.5 flex-shrink-0" />
                    <span className="text-sm">CSR programme alignment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-gif-green mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Employee volunteering opportunities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-gif-green mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Brand visibility and recognition</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-gif-green/50 hover:bg-gif-green/5 transition-all">
              <CardHeader>
                <div className="w-16 h-16 rounded-2xl bg-gif-green/10 flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-gif-green" />
                </div>
                <CardTitle className="text-2xl">Educational Institutions</CardTitle>
                <CardDescription className="text-base">
                  Bring our mindset programmes to your students and staff.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-gif-green mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Curriculum integration support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-gif-green mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Teacher training workshops</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-gif-green mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Student development programmes</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-gif-green/50 hover:bg-gif-green/5 transition-all">
              <CardHeader>
                <div className="w-16 h-16 rounded-2xl bg-gif-green/10 flex items-center justify-center mb-4">
                  <MapPin className="h-8 w-8 text-gif-green" />
                </div>
                <CardTitle className="text-2xl">Community Organizations</CardTitle>
                <CardDescription className="text-base">
                  Co-deliver programmes in your local community.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-gif-green mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Joint programme delivery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-gif-green mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Resource sharing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-gif-green mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Community impact measurement</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-gif-green via-gif-lime to-gif-green rounded-3xl p-1">
            <div className="bg-background rounded-3xl p-8 md:p-12 text-center">
              <h3 className="text-3xl sm:text-4xl font-display font-bold mb-4">
                Ready to Partner?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss how we can work together to create lasting change in communities around the world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={scrollToContact}
                  size="lg"
                  className="bg-gif-green text-white hover:bg-gif-green/90 text-lg group"
                >
                  Explore Partnership Opportunities
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

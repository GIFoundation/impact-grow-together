import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Heart, CheckCircle, Shield, Award, Users, DollarSign } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const STRIPE_SERVER_URL = (import.meta.env.VITE_STRIPE_SERVER_URL as string) || "http://localhost:4242";

const DonatePage = () => {
  const { toast } = useToast();
  const [donationType, setDonationType] = useState<"one-time" | "monthly">("monthly");
  const [amount, setAmount] = useState<string>("50");
  const [customAmount, setCustomAmount] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    anonymous: false,
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const donationAmount = customAmount ? Number(customAmount) : Number(amount);
    if (!donationAmount || donationAmount <= 0) {
      toast({ title: "Enter a valid amount", description: "Please provide an amount > 0" });
      return;
    }

    setLoading(true);
    toast({
      title: "Preparing checkout...",
      description: "You will be redirected to a secure payment page.",
    });

    try {
      const res = await fetch(`${STRIPE_SERVER_URL}/create-checkout-session`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: donationAmount, donationType, formData }),
      });

      const data = await res.json();
      if (res.ok && data.url) {
        window.location.href = data.url;
      } else {
        console.error(data);
        toast({ title: "Payment error", description: data?.error || "Unable to create checkout session" });
      }
    } catch (err) {
      console.error(err);
      toast({ title: "Server error", description: "Could not reach payment server" });
    } finally {
      setLoading(false);
    }
  };

  const presetAmounts = ["25", "50", "100", "250", "500"];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] bg-gradient-to-br from-gif-orange via-gif-yellow/80 to-gif-orange/60 flex items-center justify-center overflow-hidden pt-32 pb-24">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-20 w-96 h-96 bg-white/30 rounded-full blob"></div>
            <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-white/20 rounded-full blob" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <Heart className="h-20 w-20 text-white mx-auto mb-6 animate-pulse" />
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6">
              Start Making a Difference
            </h1>
            <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto">
              Your donation empowers young people to transform their lives through mindset education
            </p>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-gif-orange mb-2">£25</div>
                <p className="text-sm text-muted-foreground">Provides workshop materials for 5 students</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gif-orange mb-2">£50</div>
                <p className="text-sm text-muted-foreground">Funds one student's full programme access</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gif-orange mb-2">£100</div>
                <p className="text-sm text-muted-foreground">Supports mentor training session</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gif-orange mb-2">£250</div>
                <p className="text-sm text-muted-foreground">Enables community workshop</p>
              </div>
            </div>
          </div>
        </section>

        {/* Donation Form */}
        <section className="py-24 bg-gradient-to-br from-gif-orange/5 via-background to-gif-yellow/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-gif-orange via-gif-yellow to-gif-orange rounded-3xl p-1">
                <div className="bg-background rounded-3xl p-8 md:p-12">
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-8">
                    Choose Your Donation
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Donation Type */}
                    <div className="space-y-4">
                      <Label className="text-lg font-semibold">Donation Type</Label>
                      <RadioGroup value={donationType} onValueChange={(value: any) => setDonationType(value)}>
                        <div className="grid md:grid-cols-2 gap-4">
                          <label
                            htmlFor="monthly"
                            className={`cursor-pointer rounded-xl border-2 p-6 transition-all ${
                              donationType === "monthly"
                                ? "border-gif-orange bg-gif-orange/5"
                                : "border-border hover:border-gif-orange/50"
                            }`}
                          >
                            <div className="flex items-start gap-3">
                              <RadioGroupItem value="monthly" id="monthly" className="mt-1" />
                              <div className="flex-1">
                                <div className="font-semibold mb-1">Monthly Giving</div>
                                <div className="text-sm text-muted-foreground">
                                  Sustain our mission with ongoing support
                                </div>
                                <div className="mt-3 inline-block bg-gif-orange/10 text-gif-orange px-3 py-1 rounded-full text-xs font-semibold">
                                  Most Impact
                                </div>
                              </div>
                            </div>
                          </label>

                          <label
                            htmlFor="one-time"
                            className={`cursor-pointer rounded-xl border-2 p-6 transition-all ${
                              donationType === "one-time"
                                ? "border-gif-orange bg-gif-orange/5"
                                : "border-border hover:border-gif-orange/50"
                            }`}
                          >
                            <div className="flex items-start gap-3">
                              <RadioGroupItem value="one-time" id="one-time" className="mt-1" />
                              <div className="flex-1">
                                <div className="font-semibold mb-1">One-Time Donation</div>
                                <div className="text-sm text-muted-foreground">
                                  Make an immediate difference
                                </div>
                              </div>
                            </div>
                          </label>
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Amount Selection */}
                    <div className="space-y-4">
                      <Label className="text-lg font-semibold">Donation Amount (£)</Label>
                      <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                        {presetAmounts.map((preset) => (
                          <button
                            key={preset}
                            type="button"
                            onClick={() => {
                              setAmount(preset);
                              setCustomAmount("");
                            }}
                            className={`py-3 px-4 rounded-lg border-2 font-semibold transition-all ${
                              amount === preset && !customAmount
                                ? "border-gif-orange bg-gif-orange text-white"
                                : "border-border hover:border-gif-orange/50"
                            }`}
                          >
                            £{preset}
                          </button>
                        ))}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="custom-amount">Or enter custom amount</Label>
                        <div className="relative">
                          <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="custom-amount"
                            type="number"
                            min="1"
                            placeholder="Custom amount"
                            value={customAmount}
                            onChange={(e) => {
                              setCustomAmount(e.target.value);
                              setAmount("");
                            }}
                            className="pl-10"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Donor Information */}
                    <div className="space-y-4">
                      <Label className="text-lg font-semibold">Your Information</Label>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="donor-name">Full Name *</Label>
                          <Input
                            id="donor-name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Your name"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="donor-email">Email *</Label>
                          <Input
                            id="donor-email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="anonymous"
                          checked={formData.anonymous}
                          onCheckedChange={(checked) =>
                            setFormData({ ...formData, anonymous: checked as boolean })
                          }
                        />
                        <label
                          htmlFor="anonymous"
                          className="text-sm font-medium leading-none cursor-pointer"
                        >
                          Make my donation anonymous
                        </label>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={loading}
                      className="w-full bg-gif-orange hover:bg-gif-orange/90 text-white text-lg py-6"
                    >
                      <Heart className="mr-2 h-5 w-5" />
                      {loading ? "Processing…" : "Complete Donation"}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Donate Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-16">
              Why Your Donation Matters
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="border-2 hover:border-gif-orange/50 transition-all">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-gif-orange/10 flex items-center justify-center mb-4">
                    <Users className="h-7 w-7 text-gif-orange" />
                  </div>
                  <CardTitle>Direct Impact</CardTitle>
                  <CardDescription>
                    100% of donations go directly to programme delivery, reaching young people in need
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-gif-orange/50 transition-all">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-gif-orange/10 flex items-center justify-center mb-4">
                    <Shield className="h-7 w-7 text-gif-orange" />
                  </div>
                  <CardTitle>Transparent Use</CardTitle>
                  <CardDescription>
                    Receive detailed reports showing exactly how your contribution makes a difference
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-gif-orange/50 transition-all">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-gif-orange/10 flex items-center justify-center mb-4">
                    <Award className="h-7 w-7 text-gif-orange" />
                  </div>
                  <CardTitle>Proven Results</CardTitle>
                  <CardDescription>
                    Join donors who have helped transform thousands of lives across multiple countries
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-center gap-8 max-w-4xl mx-auto">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-5 w-5 text-gif-orange" />
                <span>Secure Payment</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-gif-orange" />
                <span>Tax Deductible</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Heart className="h-5 w-5 text-gif-orange" />
                <span>Cancel Anytime</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Award className="h-5 w-5 text-gif-orange" />
                <span>Registered Charity</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DonatePage;

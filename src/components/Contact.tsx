import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const MAX_WORDS = 2500;
  const [wordCount, setWordCount] = useState(0);

  const formatPhoneNumber = (value: string) => {
    // Remove all non-digit characters
    const digits = value.replace(/\D/g, "");

    // Format based on length
    if (digits.length <= 4) {
      return digits;
    } else if (digits.length <= 7) {
      return digits.replace(/(\d{4})/, "$1 ");
    } else {
      return digits
        .replace(/(\d{4})(\d{3})/, "$1 $2")
        .replace(/(\d{4} \d{3})(\d{4})/, "$1 $2");
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setFormData({ ...formData, phone: formatted });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check word limit before submitting
    if (wordCount > MAX_WORDS) {
      toast.error(
        `Message exceeds ${MAX_WORDS} word limit. Please shorten your message.`
      );
      return;
    }

    // Validate phone number if provided
    if (formData.phone && formData.phone.replace(/\D/g, "").length < 11) {
      toast.error("Please enter a valid UK phone number (11 digits)");
      return;
    }

    // Here you would typically send the form data to your backend
    toast.success("Thank you! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setWordCount(0);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "message") {
      // Count words in the message
      const words = value
        .trim()
        .split(/\s+/)
        .filter((word) => word.length > 0);
      const currentWordCount = words.length;
      setWordCount(currentWordCount);

      // Prevent typing if word limit exceeded
      if (currentWordCount > MAX_WORDS) {
        // Truncate the message to stay within limit
        const wordsArray = value.split(/\s+/);
        const truncatedWords = wordsArray.slice(0, MAX_WORDS);
        const truncatedMessage = truncatedWords.join(" ");

        setFormData({ ...formData, [name]: truncatedMessage });
        setWordCount(MAX_WORDS);
        return;
      }
    }

    setFormData({ ...formData, [name]: value });
  };

  const getWordCountColor = () => {
    const percentage = (wordCount / MAX_WORDS) * 100;
    if (percentage >= 90) return "text-red-500";
    if (percentage >= 75) return "text-amber-500";
    return "text-muted-foreground";
  };

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full">
            Contact Us
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold mt-6 mb-4">
            Let's <span className="gradient-energy text-gradient">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions? Want to get involved? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="lg:col-span-2 border-2 animate-scale-in">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Your Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone Number (Optional)
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sm text-muted-foreground">
                        +44
                      </div>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        placeholder="XXXX XXX XXXX"
                        className="pl-12"
                        maxLength={13} // For UK format: 4 spaces + 11 digits
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Enter your UK phone number (11 digits)
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <div className="text-xs flex items-center gap-2">
                      <span className={`font-medium ${getWordCountColor()}`}>
                        {wordCount} / {MAX_WORDS}
                      </span>
                      <span className="text-muted-foreground">words</span>
                    </div>
                  </div>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                    className={`transition-colors ${
                      wordCount >= MAX_WORDS
                        ? "border-red-300 focus:ring-red-200"
                        : ""
                    }`}
                  />
                  <div className="flex justify-between items-center">
                    <p className="text-xs text-muted-foreground">
                      {wordCount >= MAX_WORDS && (
                        <span className="text-red-500 font-medium">
                          Word limit reached ({MAX_WORDS} words maximum)
                        </span>
                      )}
                      {wordCount >= MAX_WORDS * 0.9 &&
                        wordCount < MAX_WORDS && (
                          <span className="text-amber-500 font-medium">
                            Approaching word limit
                          </span>
                        )}
                    </p>
                    {wordCount === 0 && (
                      <p className="text-xs text-muted-foreground text-right">
                        Maximum {MAX_WORDS.toLocaleString()} words allowed
                      </p>
                    )}
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  disabled={wordCount > MAX_WORDS}
                >
                  {wordCount > MAX_WORDS
                    ? `Exceeds ${MAX_WORDS} Word Limit`
                    : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div
            className="space-y-6 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Email Us</h3>
                    <a
                      href="mailto:admin@global-impact-foundation.org"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      admin@global-impact-foundation.org
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Our Offices</h3>
                    <p className="text-muted-foreground text-sm">
                      Registered in UK and US
                      <br />
                      Operating across Africa
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-success" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Call Us</h3>
                    <p className="text-muted-foreground text-sm">
                      Available Mon-Fri, 9am-5pm
                      <br />
                      <a
                        href="tel:+44000000000"
                        className="hover:text-primary transition-colors"
                      >
                        Contact for number
                      </a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6">
              <h3 className="font-display font-bold text-xl mb-3">
                Message Guidelines
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Word Limit:</strong> Maximum{" "}
                {MAX_WORDS.toLocaleString()} words per message.
              </p>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Phone Format:</strong> Enter your UK phone number (11
                digits without the leading 0).
              </p>
              <p className="text-sm text-muted-foreground">
                We typically respond within 48 hours. For urgent inquiries,
                please mention it in your message.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

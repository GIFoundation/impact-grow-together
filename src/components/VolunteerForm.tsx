import { useState, useRef, ChangeEvent, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Upload, FileText, X } from "lucide-react";

// Add to your existing state if not already there
interface FormData {
  name: string;
  email: string;
  phone: string;
  location: string;
  interests: string[];
  message: string;
  cvFile: File | null;
}

// Add to your existing component
interface VolunteerFormProps {
  initialInterests?: string[];
  role?: string; // optional role title to show/preselect
}

export const VolunteerForm = ({
  initialInterests = [],
  role,
}: VolunteerFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    location: "",
    interests: initialInterests ?? [],
    message: role ? `Applying for: ${role}\n\n` : "",
    cvFile: null,
  });

  const [wordCount, setWordCount] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB limit
  const MAX_WORDS = 2500;

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    // Check file type
    if (file.type !== "application/pdf") {
      alert("Please upload a PDF file only.");
      return;
    }

    // Check file size
    if (file.size > MAX_FILE_SIZE) {
      alert("File size exceeds 5MB limit. Please upload a smaller file.");
      return;
    }

    setFormData({ ...formData, cvFile: file });
  };

  const handleRemoveFile = () => {
    setFormData({ ...formData, cvFile: null });
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;

    // Count words
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

      setFormData({ ...formData, message: truncatedMessage });
      setWordCount(MAX_WORDS);
      return;
    }

    setFormData({ ...formData, message: value });
  };

  const getWordCountColor = () => {
    const percentage = (wordCount / MAX_WORDS) * 100;
    if (percentage >= 90) return "text-red-500";
    if (percentage >= 75) return "text-amber-500";
    return "text-muted-foreground";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check word limit before submitting
    if (wordCount > MAX_WORDS) {
      alert(
        `Message exceeds ${MAX_WORDS} word limit. Please shorten your message.`
      );
      return;
    }

    // Form submission logic
    console.log("Form submitted:", formData);

    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      location: "",
      interests: [],
      message: "",
      cvFile: null,
    });
    setWordCount(0);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleInterestToggle = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      interests: initialInterests ?? prev.interests,
      message: role
        ? `Applying for: ${role}\n\n${prev.message.replace(
            /^Applying for:.*?\n\n/,
            ""
          )}`
        : prev.message,
    }));
  }, [initialInterests, role]);

  return (
    <div id="apply-form" className="max-w-3xl mx-auto">
      <div className="bg-gradient-to-r from-gif-cyan via-gif-lime to-gif-cyan rounded-3xl p-1">
        <div className="bg-background rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-display font-bold text-center mb-6">
            Apply to Volunteer
          </h3>
          <p className="text-center text-muted-foreground mb-8">
            Fill out the form below and we'll be in touch to discuss the best
            opportunities for you.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
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
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
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
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="+44 (000) 000-000"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                  placeholder="City, Country"
                />
              </div>
            </div>

            <div className="space-y-3">
              <Label>Areas of Interest *</Label>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Corporate Fundraising",
                  "Digital Marketing & Content",
                  "Event Support",
                  "Administrative Support",
                  "HR",
                  "IT",
                  "Legal",
                  "Finance",
                  "Project Management",
                  "Operations",
                  "Marketing & Communications",
                  "Visual Design",
                ].map((interest) => (
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

            {/* CV Upload Section */}
            <div className="space-y-3">
              <Label htmlFor="cv-upload">Upload CV (Optional)</Label>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <input
                    ref={fileInputRef}
                    type="file"
                    id="cv-upload"
                    accept=".pdf,application/pdf"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => fileInputRef.current?.click()}
                    className="flex items-center gap-2"
                  >
                    <Upload className="h-4 w-4" />
                    Choose PDF File
                  </Button>
                  <span className="text-sm text-muted-foreground">
                    Max 5MB • PDF only
                  </span>
                </div>

                {formData.cvFile && (
                  <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg border">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                        <FileText className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">
                          {formData.cvFile.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {(formData.cvFile.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={handleRemoveFile}
                      className="h-8 w-8 p-0"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>
            </div>

            {/* Tell Us About Yourself Section with Word Limit */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <Label htmlFor="message">Tell Us About Yourself *</Label>
                <div className="text-xs flex items-center gap-2">
                  <span className={`font-medium ${getWordCountColor()}`}>
                    {wordCount} / {MAX_WORDS}
                  </span>
                  <span className="text-muted-foreground">words</span>
                </div>
              </div>
              <Textarea
                id="message"
                value={formData.message}
                onChange={handleMessageChange}
                placeholder="Share your skills, experience, and why you want to volunteer with GIF..."
                rows={5}
                className={`transition-colors ${
                  wordCount >= MAX_WORDS
                    ? "border-red-300 focus:ring-red-200"
                    : ""
                }`}
                required
              />
              <div className="flex justify-between items-center">
                <p className="text-xs text-muted-foreground">
                  {wordCount >= MAX_WORDS && (
                    <span className="text-red-500 font-medium">
                      Word limit reached ({MAX_WORDS} words maximum)
                    </span>
                  )}
                  {wordCount >= MAX_WORDS * 0.9 && wordCount < MAX_WORDS && (
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
              className="w-full bg-gif-cyan text-white hover:bg-gif-cyan/90 text-lg"
              disabled={wordCount > MAX_WORDS}
            >
              {wordCount > MAX_WORDS
                ? `Exceeds ${MAX_WORDS} Word Limit`
                : "Submit Application"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

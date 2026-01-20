import { useState, useRef, ChangeEvent, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Upload, FileText, X } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  location: string;
  interests: string[];
  message: string;
  cvFile: File | null;
}

interface VolunteerFormProps {
  initialInterests?: string[];
  role?: string;
}

export const VolunteerForm = ({
  initialInterests = [],
  role,
}: VolunteerFormProps) => {
  const MAX_FILE_SIZE = 5 * 1024 * 1024;
  const MAX_CHARS = 1500;

  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    location: "",
    interests: initialInterests,
    message: role ? `Applying for: ${role}\n\n` : "",
    cvFile: null,
  });

  const [charCount, setCharCount] = useState(
    role ? `Applying for: ${role}\n\n`.length : 0,
  );

  /* ---------------------- EFFECT (SAFE) ---------------------- */
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      message: role
        ? `Applying for: ${role}\n\n${prev.message.replace(
            /^Applying for:.*?\n\n/,
            "",
          )}`
        : prev.message,
    }));
  }, [role]);

  /* ---------------------- HANDLERS ---------------------- */
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.type !== "application/pdf") {
      alert("Please upload a PDF file only.");
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      alert("File size exceeds 5MB.");
      return;
    }

    setFormData((prev) => ({ ...prev, cvFile: file }));
  };

  const handleRemoveFile = () => {
    setFormData((prev) => ({ ...prev, cvFile: null }));
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value.slice(0, MAX_CHARS);
    setCharCount(value.length);
    setFormData((prev) => ({ ...prev, message: value }));
  };

  const handleInterestToggle = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.interests.length === 0) {
      alert("Please select at least one area of interest.");
      return;
    }

    console.log("Form submitted:", formData);

    setFormData({
      name: "",
      email: "",
      phone: "",
      location: "",
      interests: [],
      message: role ? `Applying for: ${role}\n\n` : "",
      cvFile: null,
    });

    setCharCount(role ? `Applying for: ${role}\n\n`.length : 0);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const interestOptions = [
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
    "Visual Communication/Design",
  ];

  /* ---------------------- UI ---------------------- */
  return (
    <div id="apply-form" className="max-w-3xl mx-auto">
      <div className="bg-gradient-to-r from-gif-cyan via-gif-lime to-gif-cyan rounded-3xl p-1">
        <div className="bg-background rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-center mb-6">
            Volunteer Spontaneous Application
          </h3>
          <p className="text-center text-muted-foreground mb-8">
            {" "}
            Fill out the form below and we'll be in touch to discuss the best
            opportunities for you.{" "}
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <InputField
                label="Full Name *"
                value={formData.name}
                onChange={(v) => setFormData((p) => ({ ...p, name: v }))}
                placeholder="John Doe"
              />
              <InputField
                label="Email *"
                type="email"
                value={formData.email}
                onChange={(v) => setFormData((p) => ({ ...p, email: v }))}
                placeholder="john@example.com"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <InputField
                label="Phone"
                value={formData.phone}
                onChange={(v) => setFormData((p) => ({ ...p, phone: v }))}
                placeholder="+44 1234 567890"
              />
              <InputField
                label="Location"
                value={formData.location}
                onChange={(v) => setFormData((p) => ({ ...p, location: v }))}
                placeholder="London, UK"
              />
            </div>

            {/* INTERESTS */}
            <div className="space-y-3">
              <Label>Areas of Interest *</Label>
              <div className="grid md:grid-cols-2 gap-4">
                {interestOptions.map((interest) => (
                  <div key={interest} className="flex items-center gap-2">
                    <Checkbox
                      id={interest}
                      checked={formData.interests.includes(interest)}
                      onCheckedChange={() => handleInterestToggle(interest)}
                    />
                    <Label htmlFor={interest} className="cursor-pointer">
                      {interest}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* CV */}
            <div className="space-y-3">
              <Label>Upload CV (PDF)</Label>
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf"
                hidden
                onChange={handleFileChange}
              />
              <Button
                type="button"
                variant="outline"
                onClick={() => fileInputRef.current?.click()}
              >
                <Upload className="mr-2 h-4 w-4" />
                Choose File
              </Button>

              {formData.cvFile && (
                <div className="flex justify-between items-center p-3 border rounded">
                  <span>{formData.cvFile.name}</span>
                  <Button size="sm" variant="ghost" onClick={handleRemoveFile}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>

            {/* MESSAGE */}
            <div className="space-y-2">
              <Label>Tell Us About Yourself *</Label>
              <Textarea
                value={formData.message}
                onChange={handleMessageChange}
                rows={5}
              />
              <p className="text-xs text-muted-foreground text-right">
                {charCount} / {MAX_CHARS}
              </p>
            </div>

            <Button type="submit" size="lg" className="w-full">
              Submit Application
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

/* ---------------------- SMALL HELPER ---------------------- */
const InputField = ({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
}) => (
  <div className="space-y-2">
    <Label>{label}</Label>
    <Input
      value={value}
      type={type}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  </div>
);

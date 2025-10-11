import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="/" className="font-display text-2xl font-bold">
              <span className="text-primary">Global Impact</span>{" "}
              <span className="text-foreground">Foundation</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("programs")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Programs
            </button>
            <button
              onClick={() => scrollToSection("impact")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Impact
            </button>
            <button
              onClick={() => scrollToSection("get-involved")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Get Involved
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Get In Touch
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-6 space-y-4">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("programs")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
            >
              Programs
            </button>
            <button
              onClick={() => scrollToSection("impact")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
            >
              Impact
            </button>
            <button
              onClick={() => scrollToSection("get-involved")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
            >
              Get Involved
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

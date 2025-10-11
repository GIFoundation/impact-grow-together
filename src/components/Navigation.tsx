import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav className="fixed top-8 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-background/60 backdrop-blur-md rounded-full border border-border/50 shadow-lg">
        <div className="flex items-center justify-between h-16 px-6">
          <div className="flex items-center">
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
              <Home size={20} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/about"
              className={`text-sm text-foreground hover:text-primary transition-colors font-medium ${
                location.pathname === '/about' ? 'border-b-2 border-primary' : ''
              }`}
            >
              About
            </Link>
            <Link
              to="/programs"
              className={`text-sm text-foreground hover:text-primary transition-colors font-medium ${
                location.pathname === '/programs' ? 'border-b-2 border-primary' : ''
              }`}
            >
              Programmes
            </Link>
            <Link
              to="/impact"
              className={`text-sm text-foreground hover:text-primary transition-colors font-medium ${
                location.pathname === '/impact' ? 'border-b-2 border-primary' : ''
              }`}
            >
              Impact
            </Link>
            <Link
              to="/partners"
              className={`text-sm text-foreground hover:text-primary transition-colors font-medium ${
                location.pathname === '/partners' ? 'border-b-2 border-primary' : ''
              }`}
            >
              Partners
            </Link>
            <Link
              to="/get-involved"
              className={`text-sm text-foreground hover:text-primary transition-colors font-medium ${
                location.pathname === '/get-involved' ? 'border-b-2 border-primary' : ''
              }`}
            >
              Get Involved
            </Link>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/contact">Get In Touch</Link>
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
        <div className="md:hidden mt-2 bg-background/95 backdrop-blur-md rounded-3xl border border-border/50 shadow-lg">
          <div className="px-6 py-6 space-y-4">
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className={`block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2 ${
                location.pathname === '/about' ? 'border-b-2 border-primary' : ''
              }`}
            >
              About
            </Link>
            <Link
              to="/programs"
              onClick={() => setIsOpen(false)}
              className={`block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2 ${
                location.pathname === '/programs' ? 'border-b-2 border-primary' : ''
              }`}
            >
              Programmes
            </Link>
            <Link
              to="/impact"
              onClick={() => setIsOpen(false)}
              className={`block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2 ${
                location.pathname === '/impact' ? 'border-b-2 border-primary' : ''
              }`}
            >
              Impact
            </Link>
            <Link
              to="/partners"
              onClick={() => setIsOpen(false)}
              className={`block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2 ${
                location.pathname === '/partners' ? 'border-b-2 border-primary' : ''
              }`}
            >
              Partners
            </Link>
            <Link
              to="/get-involved"
              onClick={() => setIsOpen(false)}
              className={`block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2 ${
                location.pathname === '/get-involved' ? 'border-b-2 border-primary' : ''
              }`}
            >
              Get Involved
            </Link>
            <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/contact" onClick={() => setIsOpen(false)}>Get In Touch</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Home, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 flex items-center justify-center">
        <section className="relative min-h-screen bg-gradient-to-br from-gif-orange via-gif-yellow/80 to-gif-orange/60 flex items-center justify-center overflow-hidden w-full">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-20 w-96 h-96 bg-white/30 rounded-full blob"></div>
            <div
              className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-white/20 rounded-full blob"
              style={{ animationDelay: "2s" }}
            ></div>
            <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center py-24">
            <div className="mb-8">
              <Search className="h-32 w-32 text-white mx-auto mb-6 opacity-80" />
            </div>
            <h1 className="font-display text-7xl md:text-8xl font-bold text-white mb-4">
              404
            </h1>
            <p className="text-2xl md:text-3xl text-white/95 mb-4 font-semibold">
              Page Not Found
            </p>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Sorry, we couldn't find the page you're looking for. The page at{" "}
              <span className="font-mono bg-white/20 px-2 py-1 rounded">
                {location.pathname}
              </span>{" "}
              doesn't exist.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-gif-orange hover:bg-white/90 text-lg px-8 py-6"
                onClick={() => (window.location.href = "/")}
              >
                <Home className="mr-2 h-5 w-5" />
                Return Home
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6"
                onClick={() => (window.location.href = "/get-involved")}
              >
                Get Involved
              </Button>
            </div>
            <p className="text-white/70 mt-12 text-sm">
              Need help?{" "}
              <a href="/contact" className="underline hover:text-white">
                Contact us
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;

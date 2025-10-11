import { Navigation } from "@/components/Navigation";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] bg-gradient-to-br from-gif-yellow via-gif-yellow/80 to-gif-orange/60 flex items-center justify-center overflow-hidden pt-32 pb-24">
          <div className="absolute inset-0 opacity-40">
            <div className="absolute top-20 left-10 w-96 h-96 bg-white/30 rounded-full blob"></div>
            <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-white/20 rounded-full blob" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gif-orange/20 rounded-full blur-3xl"></div>
            <div className="absolute top-40 right-1/4 w-32 h-32 bg-white/40 rotate-45"></div>
            <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-white/30 rounded-lg rotate-12"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6">
              About Us
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Transforming lives by transforming minds
            </p>
          </div>
        </section>
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;

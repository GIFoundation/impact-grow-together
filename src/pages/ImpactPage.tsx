import { Navigation } from "@/components/Navigation";
import { Impact } from "@/components/Impact";
import { TheoryOfChange } from "@/components/TheoryOfChange";
import { Footer } from "@/components/Footer";

const ImpactPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] bg-gradient-to-br from-gif-lime via-gif-lime/80 to-gif-green/60 flex items-center justify-center overflow-hidden pt-32 pb-24">
          <div className="absolute inset-0 opacity-40">
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-white/30 rounded-full blob"></div>
            <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-white/20 rounded-full blob" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-gif-cyan/20 rounded-full blur-3xl"></div>
            <div className="absolute top-32 right-20 w-36 h-36 bg-white/40 rounded-full"></div>
            <div className="absolute bottom-32 left-20 w-32 h-32 bg-white/30 rotate-45" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}></div>
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6">
              Our Impact
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Creating sustainable, purpose-driven futures
            </p>
          </div>
        </section>
        <Impact />
        <TheoryOfChange />
      </main>
      <Footer />
    </div>
  );
};

export default ImpactPage;

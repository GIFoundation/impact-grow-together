import { Navigation } from "@/components/Navigation";
import { Programs } from "@/components/Programs";
import { Footer } from "@/components/Footer";

const ProgramsPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] bg-gradient-to-br from-gif-cyan via-gif-cyan/80 to-accent/60 flex items-center justify-center overflow-hidden pt-32 pb-24">
          <div className="absolute inset-0 opacity-40">
            <div className="absolute top-20 right-10 w-96 h-96 bg-white/30 rounded-full blob"></div>
            <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-white/20 rounded-full blob" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-gif-lime/20 rounded-full blur-3xl"></div>
            <div className="absolute top-40 left-1/4 w-40 h-40 bg-white/40 rounded-lg rotate-45"></div>
            <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-white/30" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}></div>
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6">
              Our Programs
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Innovative mindset programmes for lasting change
            </p>
          </div>
        </section>
        <Programs />
      </main>
      <Footer />
    </div>
  );
};

export default ProgramsPage;

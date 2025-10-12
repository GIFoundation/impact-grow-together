import { Navigation } from "@/components/Navigation";
import { Programs } from "@/components/Programs";
import { ProgramsDetail } from "@/components/ProgramsDetail";
import { Footer } from "@/components/Footer";
import programImage from "@/assets/program-image.jpg";

const ProgramsPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] bg-gradient-to-br from-gif-cyan via-gif-cyan/80 to-accent/60 flex items-center justify-center overflow-hidden pt-32 pb-0">
          <div className="absolute inset-0 opacity-40">
            <div className="absolute top-20 right-10 w-96 h-96 bg-white/30 rounded-full blob"></div>
            <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-white/20 rounded-full blob" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-gif-lime/20 rounded-full blur-3xl"></div>
            <div className="absolute top-40 left-1/4 w-40 h-40 bg-white/40 rounded-lg rotate-45"></div>
            <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-white/30" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}></div>
          </div>
          <div className="container mx-auto px-4 relative z-20 text-center pb-8">
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
              Our Programmes
            </h1>
            <p className="text-xl md:text-2xl text-white drop-shadow-lg max-w-3xl mx-auto">
              Innovative mindset programmes for lasting change
            </p>
          </div>
          {/* Hero image with fade effect */}
          <div className="absolute bottom-0 left-0 right-0 h-64 z-10">
            <img 
              src={programImage}
              alt="Innovative mindset programmes transforming lives" 
              className="w-full h-full object-cover"
              style={{ maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.25) 18%, rgba(0,0,0,0.6) 35%, rgba(0,0,0,0.85) 55%, black 75%)', WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.25) 18%, rgba(0,0,0,0.6) 35%, rgba(0,0,0,0.85) 55%, black 75%)' }}
            />
          </div>
          {/* Curvy bottom border */}
          <div className="absolute bottom-0 left-0 right-0 z-20">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path d="M0,64 C360,20 720,20 1080,64 C1260,86 1350,108 1440,108 L1440,120 L0,120 Z" fill="hsl(var(--background))" />
            </svg>
          </div>
        </section>
        <Programs />
        <ProgramsDetail />
      </main>
      <Footer />
    </div>
  );
};

export default ProgramsPage;

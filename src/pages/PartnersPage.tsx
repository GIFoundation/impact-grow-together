import { Navigation } from "@/components/Navigation";
import { Partners } from "@/components/Partners";
import { Footer } from "@/components/Footer";
import teamCollaboration from "@/assets/team-collaboration.jpg";

const PartnersPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] bg-gradient-to-br from-gif-lime via-gif-lime/80 to-gif-green/60 flex items-center justify-center overflow-hidden pt-32 pb-0">
          <div className="absolute inset-0 opacity-40">
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-white/30 rounded-full blob"></div>
            <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-white/20 rounded-full blob" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-gif-cyan/20 rounded-full blur-3xl"></div>
            <div className="absolute top-32 right-20 w-36 h-36 bg-white/40 rounded-full"></div>
            <div className="absolute bottom-32 left-20 w-32 h-32 bg-white/30 rotate-45" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}></div>
          </div>
          <div className="container mx-auto px-4 relative z-20 text-center pb-8">
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
              Our Partners
            </h1>
            <p className="text-xl md:text-2xl text-white drop-shadow-lg max-w-3xl mx-auto">
              Building stronger communities through strategic partnerships across Africa
            </p>
          </div>
          {/* Hero image with fade effect */}
          <div className="absolute bottom-0 left-0 right-0 h-64 z-10">
            <img 
              src={teamCollaboration}
              alt="Building stronger communities through strategic partnerships" 
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
        <Partners />
      </main>
      <Footer />
    </div>
  );
};

export default PartnersPage;

import { Navigation } from "@/components/Navigation";
import { GetInvolved } from "@/components/GetInvolved";
import { Footer } from "@/components/Footer";

const GetInvolvedPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] bg-gradient-to-br from-gif-yellow via-gif-cyan/70 to-gif-lime/60 flex items-center justify-center overflow-hidden pt-32 pb-0">
          <div className="absolute inset-0 opacity-40">
            <div className="absolute top-20 left-20 w-96 h-96 bg-white/30 rounded-full blob"></div>
            <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-white/20 rounded-full blob" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/3 left-1/2 w-64 h-64 bg-gif-orange/20 rounded-full blur-3xl"></div>
            <div className="absolute top-48 right-32 w-32 h-32 bg-white/40 rounded-lg rotate-12"></div>
            <div className="absolute bottom-48 left-32 w-40 h-40 bg-white/30 rounded-full"></div>
            <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-white/35" style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}></div>
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center pb-32">
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
              Building Brighter Futures
            </h1>
            <p className="text-xl md:text-2xl text-white drop-shadow-lg max-w-3xl mx-auto">
              Join us in transforming lives around the world
            </p>
          </div>
          {/* Hero image with fade effect */}
          <div className="absolute bottom-0 left-0 right-0 h-64 z-10">
            {/* Smooth fade blending into colored background */}
            <div className="absolute inset-0 z-10" style={{ 
              background: 'linear-gradient(to bottom, rgba(251, 193, 8, 0.7) 0%, rgba(251, 193, 8, 0.5) 15%, transparent 40%, transparent 60%, hsl(var(--background)) 95%)'
            }}></div>
            <img 
              src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=2000&q=80" 
              alt="People volunteering together" 
              className="w-full h-full object-cover"
              style={{ maskImage: 'linear-gradient(to bottom, transparent 0%, black 25%, black 100%)', WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 25%, black 100%)' }}
            />
          </div>
          {/* Curvy bottom border */}
          <div className="absolute bottom-0 left-0 right-0 z-20">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path d="M0,64 C360,20 720,20 1080,64 C1260,86 1350,108 1440,108 L1440,120 L0,120 Z" fill="hsl(var(--background))" />
            </svg>
          </div>
        </section>
        <GetInvolved />
      </main>
      <Footer />
    </div>
  );
};

export default GetInvolvedPage;

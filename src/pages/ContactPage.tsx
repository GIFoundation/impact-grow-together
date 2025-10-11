import { Navigation } from "@/components/Navigation";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[50vh] bg-gradient-to-br from-gif-cyan via-gif-lime/70 to-gif-green/60 flex items-center justify-center overflow-hidden pt-24 pb-16">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 right-1/3 w-72 h-72 bg-white/20 rounded-full blob"></div>
            <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-white/10 rounded-full blob" style={{ animationDelay: '2s' }}></div>
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Let's start a conversation about change
            </p>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;

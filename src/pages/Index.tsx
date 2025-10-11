import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Programs } from "@/components/Programs";
import { ImpactPreview } from "@/components/ImpactPreview";
import { PartnersPreview } from "@/components/PartnersPreview";
import { GetInvolved } from "@/components/GetInvolved";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Programs />
        <ImpactPreview />
        <PartnersPreview />
        <GetInvolved />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

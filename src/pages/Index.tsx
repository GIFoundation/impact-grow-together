import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { AboutPreview } from "@/components/AboutPreview";
import { Programs } from "@/components/Programs";
import { ImpactPreview } from "@/components/ImpactPreview";
import { PartnersPreview } from "@/components/PartnersPreview";
import { TheoryOfChangePreview } from "@/components/TheoryOfChangePreview";
import { GetInvolved } from "@/components/GetInvolved";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <AboutPreview />
        <Programs />
        <ImpactPreview />
        <PartnersPreview />
        <TheoryOfChangePreview />
        <GetInvolved simplified />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

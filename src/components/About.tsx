import mindsetIcon from "@/assets/mindset-icon.jpg";
import mandyPhoto from "@/assets/mandy.jpg";
import morlaiPhoto from "@/assets/morlai.png";
import { ArrowRight } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full">
                Our Story
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-display font-bold leading-tight">
              Over 25 Years of{" "}
              <span className="gradient-vibrant text-gradient">Impact</span>
            </h2>

            <p className="text-lg text-muted-foreground">
              Global Impact Foundation brings together over 25 years of combined professional experience in working with young people and personal development. Our mission is simple yet powerful: to transform lives by transforming minds.
            </p>

            <p className="text-lg text-muted-foreground">
              Through a series of innovative mindset programmes, we empower young people with the emotional skills, confidence, and belief systems needed to rise above their current circumstances and build sustainable, purpose-driven futures.
            </p>

            <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
              <h3 className="text-xl font-display font-bold mb-4">Our Approach</h3>
              <p className="text-muted-foreground">
                Our programmes go beyond surface-level solutions - they get to the heart of the issue: mindset. We focus on the root causes that shape personal outcomes and economic opportunity, addressing the limiting beliefs that hold young people back.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="space-y-2">
                <div className="text-3xl font-display font-bold text-accent">2020</div>
                <div className="text-sm text-muted-foreground">Founded during COVID-19</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-display font-bold text-success">2</div>
                <div className="text-sm text-muted-foreground">Passionate Founders</div>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="absolute top-10 right-10 w-64 h-64 bg-gif-green/30 blob"></div>
            <div className="absolute bottom-10 left-10 w-48 h-48 bg-gif-cyan/30 blob" style={{ animationDelay: "1.5s" }}></div>
            <img
              src={mindsetIcon}
              alt="Mindset transformation illustration"
              className="relative rounded-3xl shadow-2xl w-full object-cover"
            />
          </div>
        </div>

        {/* Founders Section */}
        <div className="mt-24 text-center">
          <h3 className="text-3xl font-display font-bold mb-12">Meet Our Founders</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Mandy Card */}
            <div className="group h-[400px] [perspective:1000px]">
              <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front */}
                <div className="absolute inset-0 rounded-2xl p-8 border-2 border-gif-yellow shadow-lg [backface-visibility:hidden] flex flex-col items-center justify-center bg-gradient-to-br from-gif-yellow/40 to-gif-orange/40">
                  <img 
                    src={mandyPhoto} 
                    alt="Mandy - Co-Founder" 
                    className="w-full h-40 mb-6 rounded-lg object-cover shadow-md"
                  />
                  <h4 className="text-2xl font-display font-bold mb-2">Mandy</h4>
                  <p className="text-primary font-medium mb-4">Co-Founder</p>
                  <ArrowRight className="text-foreground/80" size={20} />
                </div>
                {/* Back */}
                <div className="absolute inset-0 rounded-2xl p-8 border-2 border-gif-yellow shadow-2xl [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-gif-yellow/50 to-gif-orange/50 flex flex-col items-center justify-center">
                  <h4 className="text-2xl font-display font-bold mb-2">Mandy</h4>
                  <p className="text-primary font-medium mb-4">Co-Founder</p>
                  <p className="text-foreground/90 text-sm leading-relaxed">
                    With over 15 years of experience in youth development and personal transformation, Mandy is passionate about empowering young people to break through limiting beliefs and unlock their full potential. Her expertise in mindset coaching has helped hundreds of individuals transform their lives.
                  </p>
                </div>
              </div>
            </div>

            {/* Morlai Card */}
            <div className="group h-[400px] [perspective:1000px]">
              <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front */}
                <div className="absolute inset-0 rounded-2xl p-8 border-2 border-gif-cyan shadow-lg [backface-visibility:hidden] flex flex-col items-center justify-center bg-gradient-to-br from-gif-cyan/40 to-gif-lime/40">
                  <img 
                    src={morlaiPhoto} 
                    alt="Morlai - Co-Founder" 
                    className="w-full h-40 mb-6 rounded-lg object-cover object-center shadow-md"
                  />
                  <h4 className="text-2xl font-display font-bold mb-2">Morlai</h4>
                  <p className="text-primary font-medium mb-4">Co-Founder</p>
                  <ArrowRight className="text-foreground/80" size={20} />
                </div>
                {/* Back */}
                <div className="absolute inset-0 rounded-2xl p-8 border-2 border-gif-cyan shadow-2xl [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-gif-cyan/50 to-gif-lime/50 flex flex-col items-center justify-center">
                  <h4 className="text-2xl font-display font-bold mb-2">Morlai</h4>
                  <p className="text-primary font-medium mb-4">Co-Founder</p>
                  <p className="text-foreground/90 text-sm leading-relaxed">
                    Bringing 10+ years of experience in education and community development, Morlai specializes in creating innovative programmes that address systemic barriers to success. His work focuses on emotional intelligence and sustainable personal growth for marginalized youth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

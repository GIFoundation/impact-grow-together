import teamCollaboration from "@/assets/team-collaboration.jpg";
import programImage from "@/assets/program-image.jpg";
import mandyPhoto from "@/assets/mandy.jpg";
import morlaiPhoto from "@/assets/morlai2.png";
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
              Building{" "}
              <span className="gradient-vibrant text-gradient">Brighter Futures</span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center p-6 bg-gradient-to-br from-gif-orange/10 to-gif-yellow/10 rounded-2xl border border-primary/20">
                <div className="text-4xl font-display font-bold text-primary mb-2">2020</div>
                <div className="text-sm text-muted-foreground">Founded</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-gif-cyan/10 to-gif-lime/10 rounded-2xl border border-primary/20">
                <div className="text-4xl font-display font-bold text-accent mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Programmes Delivered</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-gif-green/10 to-accent/10 rounded-2xl border border-primary/20">
                <div className="text-4xl font-display font-bold text-success mb-2">5M+</div>
                <div className="text-sm text-muted-foreground">Global Goal</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-gif-lime/10 to-gif-cyan/10 rounded-2xl border border-primary/20">
                <div className="text-4xl font-display font-bold text-primary mb-2">25+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-gif-orange/10 to-gif-yellow/10 rounded-2xl p-8 border border-primary/20">
                <h3 className="text-xl font-display font-bold mb-3 flex items-center gap-2">
                  <span className="text-2xl">🎯</span> Our Mission
                </h3>
                <p className="text-muted-foreground">
                  To cultivate transformative mindsets that drive sustainable economic development, and build strategic partnerships to empower young people in Africa and worldwide. To provide impactful and accessible mindset training and community-driven initiatives, while establishing ourselves as a leading authority in mindset transformation.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gif-cyan/10 to-gif-lime/10 rounded-2xl p-8 border border-primary/20">
                <h3 className="text-xl font-display font-bold mb-3 flex items-center gap-2">
                  <span className="text-2xl">🌍</span> Our Vision
                </h3>
                <p className="text-muted-foreground">
                  A world where young people in Africa and worldwide, empowered by transformative mindsets and sustainable economic opportunities, drive positive change in their communities and globally.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
                <h3 className="text-xl font-display font-bold mb-4">Our Approach</h3>
                <p className="text-muted-foreground">
                  Our programmes go beyond surface-level solutions - they get to the heart of the issue: mindset. We focus on the root causes that shape personal outcomes and economic opportunity, addressing the limiting beliefs that hold young people back.
                </p>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="absolute top-10 right-10 w-64 h-64 bg-gif-green/30 blob"></div>
            <div className="absolute bottom-10 left-10 w-48 h-48 bg-gif-cyan/30 blob" style={{ animationDelay: "1.5s" }}></div>
            <img
              src={programImage}
              alt="Mindset transformation and community impact"
              className="relative rounded-3xl shadow-2xl w-full object-cover"
            />
          </div>
        </div>

        {/* Founders Bio Sections */}
        <div className="mt-32 space-y-16">
          {/* Mandy Evill Section */}
          <div className="bg-gradient-to-br from-gif-yellow/10 to-gif-orange/10 border-2 border-gif-yellow/30 rounded-3xl p-8 lg:p-16">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-[400px_1fr] gap-12 lg:gap-16 items-start">
              {/* Image */}
              <div className="w-full">
                <img
                  src={mandyPhoto}
                  alt="Mandy Evill - Master Mindset Strategist"
                  className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                />
              </div>
              
              {/* Content */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-4xl font-display font-bold text-gif-orange mb-2">Mandy Evill</h3>
                  <p className="text-xl text-muted-foreground italic">Master Mindset Strategist & Bob Proctor Protégé</p>
                </div>
                
                <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                  <p>
                    With over 25 years of experience, Mandy has dedicated her career to transforming human potential into tangible business results through her proprietary Mindset Transformation Framework™. A direct mentee of renowned mindset mentor Bob Proctor, she blends deep psychological insights with actionable strategies that have empowered hundreds of executives and organizations to achieve breakthrough growth.
                  </p>
                  <p>
                    Mandy's work bridges cultural gaps and unlocks hidden potential, supporting young people and leaders in developing empowered mindsets that foster sustainable success. Her expertise now significantly contributes to the mindset and cultural transformation initiatives of the Global Impact Foundation, driving positive change in sub-Saharan African communities.
                  </p>
                </div>

                {/* Quote Highlight */}
                <div className="bg-gradient-to-br from-gif-yellow/20 to-gif-orange/20 rounded-xl p-8 border-l-8 border-gif-orange shadow-xl mt-8">
                  <div className="text-8xl text-gif-orange/40 leading-none mb-4">"</div>
                  <p className="text-xl italic font-medium leading-relaxed text-foreground">
                    The missing element in most global expansion strategies isn't data or technology—it's the human mindset required to truly connect across cultures.
                  </p>
                  <p className="text-sm text-muted-foreground mt-4">— Mandy Evill</p>
                </div>

                <p className="text-base leading-relaxed text-muted-foreground pt-4">
                  Mandy brings this unique philosophy to the THINK program, where strategy meets humanity to enable growth.
                </p>
              </div>
            </div>
          </div>

          {/* Morlai Kargbo Section */}
          <div className="bg-gradient-to-br from-gif-cyan/10 to-gif-lime/10 border-2 border-gif-cyan/30 rounded-3xl p-8 lg:p-16">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_400px] gap-12 lg:gap-16 items-start">
              {/* Content */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-4xl font-display font-bold text-gif-cyan mb-2">Morlai Kargbo</h3>
                  <p className="text-xl text-muted-foreground italic">Financial Strategist & Governance Expert</p>
                </div>
                
                <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                  <p>
                    Morlai is an accomplished ACCA Award Winner and Fellow with extensive expertise in financial strategy, governance, and management services. As founder of Moracle, he has developed innovative accounting and auditing solutions for clients spanning corporate, private, and non-profit sectors globally.
                  </p>
                  <p>
                    Known for exceptional leadership and mentorship—exemplified through his role as former Chair of the ACCA North London Members Network—Morlai combines robust financial frameworks with human development to create balanced and sustainable organizational growth. His passion for leveraging financial expertise to empower communities echoes through his ongoing work with the Global Impact Foundation and the Moracle Foundation, fostering impactful social initiatives in Africa.
                  </p>
                </div>

                {/* Quote Highlight */}
                <div className="bg-gradient-to-br from-gif-cyan/20 to-gif-lime/20 rounded-xl p-8 border-l-8 border-gif-cyan shadow-xl mt-8">
                  <div className="text-8xl text-gif-cyan/40 leading-none mb-4">"</div>
                  <p className="text-xl italic font-medium leading-relaxed text-foreground">
                    Successful global expansions combine cultural intelligence with solid financial and governance structures, creating a foundation where business integrity and human connection reinforce each other.
                  </p>
                  <p className="text-sm text-muted-foreground mt-4">— Morlai Kargbo</p>
                </div>

                <p className="text-base leading-relaxed text-muted-foreground pt-4">
                  Morlai applies these principles within the THINK program, merging strategy and humanity to foster growth.
                </p>
              </div>

              {/* Image */}
              <div className="w-full lg:order-last">
                <img
                  src={morlaiPhoto}
                  alt="Morlai Kargbo - Financial Strategist"
                  className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

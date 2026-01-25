import { Heart } from "lucide-react";

export const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gif-gray text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="font-display text-2xl font-bold mb-4">
              Global Impact Foundation
            </h3>
            <p className="text-white/80 mb-4" style={{ fontWeight: "bold" }}>
              Unlocking Human Potential for a Sustainable World
            </p>
            {/* <p className="text-white/80 mb-4">
              Empowering young people across Africa and beyond.
            </p> */}
            <div className="flex items-center gap-2 text-sm text-white/60">
              <span>Company Registration Number: 12696742</span>

              {/* <span>•</span>
              <span>Operating Globally</span> */}
            </div>
            <div className="flex items-center gap-2 text-sm text-white/60">
              <span>960 Capability Green Luton, England LU1 3PE</span>
              {/* <span>•</span>
              <span>Operating Globally</span> */}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("programs")}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Our Programmes
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("impact")}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Our Impact
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("get-involved")}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Get Involved
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Get Involved</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Donate
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Volunteer
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Partner with Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Get in Touch
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} Global Impact Foundation. All rights
              reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-white/60">
              <span>Privacy Policy</span>
              <span>|</span>
              {/* <Heart className="h-4 w-4 text-gif-orange fill-gif-orange" /> */}
              <span>Terms of use</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

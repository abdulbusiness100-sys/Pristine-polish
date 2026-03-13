import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { useLocation } from "wouter";
import logoImg from "@assets/download_(60)_1770737910930.png";

const BOOKING_URL = "https://pristinepolish.bookingkoala.com/booknow";
const WHATSAPP_URL = "https://wa.me/447940551427?text=Hi%20Pristine%20Polish%2C%20I%27d%20like%20to%20enquire%20about%20your%20cleaning%20services.";

export function Footer() {
  const [location, navigate] = useLocation();

  const handleLink = (href: string) => {
    if (href.startsWith("/")) {
      navigate(href);
      return;
    }
    if (location !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-background relative overflow-hidden" data-testid="footer">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img
                src={logoImg}
                alt="Pristine Polish"
                className="h-10 w-auto brightness-0 invert drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
              />
            </div>
            <p className="text-sm opacity-70 leading-relaxed max-w-xs font-light">
              Professional cleaning services across the North East. Affordable, prompt, and tailored to your needs.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-6 opacity-90 uppercase tracking-widest text-primary">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Services", href: "#services" },
                { label: "About Us", href: "#about" },
                { label: "Pricing", href: "#pricing" },
                { label: "Results", href: "#results" },
                { label: "Gallery", href: "/gallery" },
                { label: "Book Now", href: BOOKING_URL, external: true },
              ].map((link) => (
                <li key={link.label}>
                  {"external" in link && link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-all duration-300 font-light flex items-center gap-2 group"
                      data-testid={`link-footer-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                    >
                      <span className="w-0 overflow-hidden group-hover:w-2 transition-all duration-300 inline-block bg-primary h-[2px] rounded-full" />
                      {link.label}
                    </a>
                  ) : (
                    <button
                      onClick={() => handleLink(link.href)}
                      className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-all duration-300 font-light flex items-center gap-2 group"
                      data-testid={`link-footer-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                    >
                      <span className="w-0 overflow-hidden group-hover:w-2 transition-all duration-300 inline-block bg-primary h-[2px] rounded-full" />
                      {link.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-6 opacity-90 uppercase tracking-widest text-primary">Services</h4>
            <ul className="space-y-3">
              {[
                "Domestic Cleaning",
                "End of Tenancy",
                "Deep Cleaning",
                "Fortnightly Cleaning",
                "Event Cleaning",
              ].map((service) => (
                <li key={service}>
                  <span className="text-sm opacity-70 font-light">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-6 opacity-90 uppercase tracking-widest text-primary">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:07940551427" className="flex items-center gap-3 text-sm opacity-70 hover:opacity-100 hover:text-primary transition-colors font-light" data-testid="link-footer-phone">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  07940 551 427
                </a>
              </li>
              <li>
                <a href="mailto:admin@pristine-polish.co.uk" className="flex items-center gap-3 text-sm opacity-70 hover:opacity-100 hover:text-primary transition-colors font-light" data-testid="link-footer-email">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  admin@pristine-polish.co.uk
                </a>
              </li>
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm opacity-70 hover:opacity-100 hover:text-emerald-400 transition-colors font-light" data-testid="link-footer-whatsapp">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center">
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  WhatsApp Us
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-sm opacity-70 font-light">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                    <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                  </div>
                  Serving the North East
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs opacity-40">
            &copy; {new Date().getFullYear()} Pristine Polish. All rights reserved.
          </p>
          <p className="text-xs opacity-40">
            Fully insured &middot; Public liability &middot; Employer's liability
          </p>
        </div>
      </div>
    </footer>
  );
}

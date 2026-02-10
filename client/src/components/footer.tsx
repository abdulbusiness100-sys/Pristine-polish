import { Phone, Mail, MapPin } from "lucide-react";
import logoImg from "@assets/download_(60)_1770737910930.png";

export function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img
                src={logoImg}
                alt="Pristine Polish"
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-sm opacity-60 leading-relaxed max-w-xs">
              Professional cleaning services in Newcastle upon Tyne and Gateshead. Affordable, prompt, and tailored to your needs.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 opacity-90">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Services", href: "#services" },
                { label: "About Us", href: "#about" },
                { label: "Pricing", href: "#pricing" },
                { label: "Reviews", href: "#testimonials" },
                { label: "Get a Quote", href: "#quote" },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm opacity-60 hover:opacity-100 transition-opacity"
                    data-testid={`link-footer-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 opacity-90">Services</h4>
            <ul className="space-y-2.5">
              {[
                "Domestic Cleaning",
                "End of Tenancy",
                "Deep Cleaning",
                "Fortnightly Cleaning",
                "Event Cleaning",
              ].map((service) => (
                <li key={service}>
                  <span className="text-sm opacity-60">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 opacity-90">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:07940551427" className="flex items-center gap-2 text-sm opacity-60 hover:opacity-100 transition-opacity" data-testid="link-footer-phone">
                  <Phone className="w-3.5 h-3.5" />
                  07940 551 427
                </a>
              </li>
              <li>
                <a href="mailto:admin@pristine-polish.co.uk" className="flex items-center gap-2 text-sm opacity-60 hover:opacity-100 transition-opacity" data-testid="link-footer-email">
                  <Mail className="w-3.5 h-3.5" />
                  admin@pristine-polish.co.uk
                </a>
              </li>
              <li>
                <div className="flex items-center gap-2 text-sm opacity-60">
                  <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                  Newcastle upon Tyne / Gateshead
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

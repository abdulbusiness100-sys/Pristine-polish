import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#quote" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setIsMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-16 sm:h-20">
          <button
            onClick={() => scrollTo("#hero")}
            className="flex items-center gap-2"
            data-testid="link-logo"
          >
            <div className="w-9 h-9 rounded-md bg-primary flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className={`text-lg font-bold tracking-tight ${isScrolled ? "text-foreground" : "text-white dark:text-foreground"}`}>
                Pristine Polish
              </span>
            </div>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isScrolled
                    ? "text-muted-foreground"
                    : "text-white/80 dark:text-muted-foreground"
                }`}
                data-testid={`link-nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </button>
            ))}
            <ThemeToggle />
            <Button
              onClick={() => scrollTo("#quote")}
              size="sm"
              className="ml-2"
              data-testid="button-get-quote-nav"
            >
              Get a Free Quote
            </Button>
          </div>

          <div className="flex items-center gap-1 md:hidden">
            <ThemeToggle />
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {isMobileOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="block w-full text-left px-3 py-2.5 text-sm font-medium text-muted-foreground rounded-md transition-colors"
                data-testid={`link-mobile-${link.label.toLowerCase()}`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2 pb-1">
              <Button
                onClick={() => scrollTo("#quote")}
                className="w-full"
                data-testid="button-get-quote-mobile"
              >
                Get a Free Quote
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import logoImg from "@assets/download_(60)_1770737910930.png";

const BOOKING_URL = "https://pristinepolish.bookingkoala.com/booknow";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "Gallery", href: "/gallery", page: true },
  { label: "Contact", href: "#booking" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [location, navigate] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  const handleLink = (link: { href: string; page?: boolean }) => {
    setIsMobileOpen(false);
    if (link.page) {
      navigate(link.href);
    } else if (location !== "/") {
      // Navigate home first, then scroll after a tick
      navigate("/");
      setTimeout(() => {
        const el = document.querySelector(link.href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.querySelector(link.href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Logo — always top-left, fully independent */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-4 left-4 sm:left-6 z-50"
      >
        <button
          onClick={() => handleLink({ href: "#hero" })}
          className="flex items-center group"
          data-testid="link-logo"
        >
          <img
            src={logoImg}
            alt="Pristine Polish"
            className={`h-10 sm:h-12 w-auto transition-all duration-300 group-hover:scale-105 ${
              isScrolled
                ? "brightness-100"
                : "brightness-0 invert dark:brightness-100 dark:invert-0"
            }`}
          />
        </button>
      </motion.div>

      {/* Desktop nav — top-right, turns glass on scroll */}
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        className={`fixed top-4 right-4 sm:right-6 z-50 hidden md:flex items-center gap-1 transition-all duration-500 ${
          isScrolled
            ? "glass rounded-full px-4 py-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20"
            : "bg-transparent px-2 py-2"
        }`}
        data-testid="navbar"
      >
        {navLinks.map(link => (
          <button
            key={link.href}
            onClick={() => handleLink(link)}
            className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors duration-200 ${
              isScrolled
                ? "text-foreground hover:text-primary"
                : "text-white/85 hover:text-white dark:text-foreground/80"
            }`}
            data-testid={`link-nav-${link.label.toLowerCase()}`}
          >
            {link.label}
          </button>
        ))}
        <ThemeToggle />
        <Button
          asChild
          size="sm"
          className="btn-glow ml-1 rounded-full px-4"
          data-testid="button-get-quote-nav"
        >
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
            Book Now
          </a>
        </Button>
      </motion.nav>

      {/* Mobile menu button — top-right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className={`fixed top-4 right-4 z-50 flex md:hidden items-center gap-2 transition-all duration-500 ${
          isScrolled
            ? "glass rounded-full px-3 py-2 border border-white/20 shadow-[0_4px_20px_rgb(0,0,0,0.1)]"
            : ""
        }`}
      >
        <ThemeToggle />
        <button
          onClick={() => setIsMobileOpen(o => !o)}
          className={`p-1.5 rounded-full transition-colors ${
            isScrolled ? "text-foreground" : "text-white dark:text-foreground"
          }`}
          data-testid="button-mobile-menu"
        >
          {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </motion.div>

      {/* Mobile backdrop + drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
              onClick={() => setIsMobileOpen(false)}
              aria-hidden="true"
            />
            {/* Drawer panel */}
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="fixed top-20 right-4 z-50 md:hidden glass rounded-2xl border border-white/10 shadow-xl overflow-hidden w-72"
              role="dialog"
              aria-label="Navigation menu"
            >
              <div className="px-4 py-4 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => handleLink(link)}
                    className="block w-full text-left px-4 py-3 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-white/10 rounded-xl transition-colors"
                    data-testid={`link-mobile-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </motion.button>
                ))}
                <div className="px-1 pt-3 pb-1">
                  <Button
                    asChild
                    className="btn-glow w-full rounded-xl"
                    data-testid="button-get-quote-mobile"
                  >
                    <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                      Book Now
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

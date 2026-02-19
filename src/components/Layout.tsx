import { Sun, Phone, Mail, MapPin } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  // On non-home pages, always show solid navbar
  const solid = scrolled || !isHome;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        solid
          ? "border-b border-border/20 bg-card/95 shadow-lg backdrop-blur-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex max-w-6xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <Sun className={`h-7 w-7 text-primary transition-transform duration-300 ${solid ? "scale-90" : ""}`} />
          <span className={`font-heading text-xl font-bold transition-colors duration-300 ${solid ? "text-foreground" : "text-secondary-foreground"}`}>
            MARKLEWITZ <span className="text-primary">SOLAR</span>
          </span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {[
            { href: "/#ablauf", label: "Ablauf" },
            { href: "/#referenzen", label: "Referenzen" },
            { href: "/#kundenstimmen", label: "Kundenstimmen" },
            { href: "/#standorte", label: "Standorte" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                solid
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-muted-foreground hover:text-secondary-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#kontakt"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-solar px-4 py-2 text-sm font-semibold text-primary-foreground shadow-solar transition-all hover:scale-105"
          >
            <Phone className="h-4 w-4" />
            Kontakt
          </a>
        </div>

        {/* Mobile CTA */}
        <a
          href="tel:+491627382351"
          className="flex items-center gap-2 rounded-lg bg-gradient-solar px-3 py-2 text-sm font-semibold text-primary-foreground shadow-solar md:hidden"
        >
          <Phone className="h-4 w-4" />
          Anrufen
        </a>
      </div>
    </motion.nav>
  );
};

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <Sun className="h-6 w-6 text-primary" />
              <span className="font-heading text-lg font-bold text-foreground">
                MARKLEWITZ SOLAR
              </span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              Ihr Experte für Photovoltaik in Kirchheim unter Teck und Umgebung.
              Qualität, Service und faire Preise.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-foreground">Kontakt</h4>
            <div className="mt-3 space-y-2 text-sm text-muted-foreground">
              <a href="tel:+491627382351" className="flex items-center gap-2 hover:text-foreground">
                <Phone className="h-4 w-4" /> 0162-7382351
              </a>
              <a href="mailto:sven.marklewitz@marklewitz-solar.de" className="flex items-center gap-2 hover:text-foreground">
                <Mail className="h-4 w-4" /> sven.marklewitz@marklewitz-solar.de
              </a>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Gartenstraße 43/1, 73277 Owen
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-foreground">Rechtliches</h4>
            <div className="mt-3 space-y-2 text-sm text-muted-foreground">
              <Link to="/impressum" className="block hover:text-foreground">Impressum</Link>
              <Link to="/datenschutz" className="block hover:text-foreground">Datenschutzerklärung</Link>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Marklewitz Solar – Sven Marklewitz. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
};

export { Navbar, Footer };

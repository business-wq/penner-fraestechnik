import { Phone, Mail, MapPin } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "@/assets/logo.avif";

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
      transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-5"
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-4 py-3 shadow-[0_18px_60px_-24px_rgba(15,23,42,0.45)] transition-all duration-300 md:px-6 ${
          solid
            ? "border-border/60 bg-card/88 backdrop-blur-xl"
            : "border-white/15 bg-[hsl(220,30%,8%)]/38 backdrop-blur-2xl"
        }`}
      >
        <Link to="/" className="flex items-center gap-2.5">
          <img
            src={logo}
            alt="Marklewitz Solar Logo"
            className={`w-auto object-contain transition-all duration-300 ${solid ? "h-8" : "h-9"}`}
          />
          <span className={`font-heading text-lg font-bold tracking-[0.08em] transition-colors duration-300 md:text-xl ${solid ? "text-foreground" : "text-secondary-foreground"}`}>
            MARKLEWITZ <span className="text-primary">SOLAR</span>
          </span>
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          {[
            { href: "/#ablauf", label: "Ablauf" },
            { href: "/waermepumpe", label: "Wärmepumpe" },
            { href: "/galerie", label: "Galerie" },
            { href: "/#kundenstimmen", label: "Kundenstimmen" },
            { href: "/#standorte", label: "Standorte" },
            { href: "/blog", label: "Blog" },
          ].map((link) => {
            const isInternal = link.href.startsWith("/") && !link.href.startsWith("/#");
            const Component = isInternal ? Link : "a";
            const props = isInternal ? { to: link.href } : { href: link.href };
            return (
              <Component
                key={link.href}
                {...(props as any)}
                className={`rounded-full px-3 py-2 text-sm font-medium transition-all ${
                  solid
                    ? "text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                    : "text-secondary-foreground/80 hover:bg-white/10 hover:text-secondary-foreground"
                }`}
              >
                {link.label}
              </Component>
            );
          })}
          <a
            href="/#kontakt"
            className="ml-2 inline-flex items-center gap-2 rounded-full bg-gradient-solar px-4 py-2 text-sm font-semibold text-primary-foreground shadow-solar transition-all hover:scale-105"
          >
            <Phone className="h-4 w-4" />
            Kontakt
          </a>
        </div>

        {/* Mobile CTA */}
        <a
          href="tel:+491627382351"
          className="flex items-center gap-2 rounded-full bg-gradient-solar px-3 py-2 text-sm font-semibold text-primary-foreground shadow-solar md:hidden"
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
              <img src={logo} alt="Marklewitz Solar Logo" className="h-8 w-auto object-contain" />
              <span className="font-heading text-lg font-bold text-foreground">
                MARKLEWITZ <span className="text-primary">SOLAR</span>
              </span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              Ihr Experte für Photovoltaik & Wärmepumpen in Kirchheim unter Teck und Umgebung.
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
              <button
                onClick={() => window.dispatchEvent(new Event("open-cookie-settings"))}
                className="block hover:text-foreground text-left"
              >
                Cookie-Einstellungen
              </button>
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

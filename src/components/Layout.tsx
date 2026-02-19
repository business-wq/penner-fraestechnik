import { Sun, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border/10 bg-secondary/80 backdrop-blur-md">
      <div className="container mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <Sun className="h-7 w-7 text-primary" />
          <span className="font-heading text-xl font-bold text-secondary-foreground">
            MARKLEWITZ <span className="text-primary">SOLAR</span>
          </span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <a href="#ablauf" className="text-sm font-medium text-muted-foreground transition-colors hover:text-secondary-foreground">
            Ablauf
          </a>
          <a href="#referenzen" className="text-sm font-medium text-muted-foreground transition-colors hover:text-secondary-foreground">
            Referenzen
          </a>
          <a href="#kundenstimmen" className="text-sm font-medium text-muted-foreground transition-colors hover:text-secondary-foreground">
            Kundenstimmen
          </a>
          <a
            href="#kontakt"
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
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <Sun className="h-6 w-6 text-primary" />
              <span className="font-heading text-lg font-bold text-foreground">
                MARKLEWITZ SOLAR
              </span>
            </div>
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
              <a href="/impressum" className="block hover:text-foreground">Impressum</a>
              <a href="/datenschutz" className="block hover:text-foreground">Datenschutzerklärung</a>
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

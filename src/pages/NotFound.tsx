import { Navbar, Footer } from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => (
  <div className="min-h-screen">
    <SEOHead
      title="Seite nicht gefunden | Marklewitz Solar"
      description="Die angeforderte Seite konnte nicht gefunden werden. Zurück zur Startseite von Marklewitz Solar."
      noindex
    />
    <Navbar />
    <main className="pt-24 pb-20" id="main">
      <div className="container mx-auto max-w-2xl px-4">
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <span className="font-heading text-8xl font-bold text-primary/20">404</span>
          <h1 className="mt-4 font-heading text-2xl font-bold text-foreground md:text-3xl">
            Seite nicht gefunden
          </h1>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Die angeforderte Seite existiert nicht oder wurde verschoben. Kehren Sie zur Startseite
            zurück oder nutzen Sie die Navigation.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-solar px-6 py-3 font-semibold text-primary-foreground shadow-solar transition-all hover:scale-105"
            >
              <Home className="h-4 w-4" />
              Zur Startseite
            </Link>
            <button
              type="button"
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-6 py-3 font-medium text-foreground transition-colors hover:bg-muted"
            >
              <ArrowLeft className="h-4 w-4" />
              Zurück
            </button>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default NotFound;

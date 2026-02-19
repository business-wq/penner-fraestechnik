import { Navbar, Footer } from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";

const Impressum = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Impressum | Marklewitz Solar"
        description="Impressum von Marklewitz Solar – Sven Marklewitz, Gartenstraße 43/1, 73277 Owen an der Teck."
      />
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto max-w-3xl px-4">
          <article className="prose prose-neutral max-w-none">
            <h1 className="font-heading text-4xl font-bold text-foreground">Impressum</h1>

            <section className="mt-8">
              <h2 className="font-heading text-xl font-bold text-foreground">Angaben gemäß § 5 TMG</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Sven Marklewitz<br />
                Einzelunternehmer<br />
                Gartenstraße 43/1<br />
                73277 Owen an der Teck
              </p>
            </section>

            <section className="mt-8">
              <h2 className="font-heading text-xl font-bold text-foreground">Kontakt</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Telefon: <a href="tel:+491627382351" className="text-primary hover:underline">0162-7382351</a><br />
                E-Mail: <a href="mailto:sven.marklewitz@marklewitz-solar.de" className="text-primary hover:underline">sven.marklewitz@marklewitz-solar.de</a>
              </p>
            </section>

            <section className="mt-8">
              <h2 className="font-heading text-xl font-bold text-foreground">
                Verbraucherstreitbeilegung / Universalschlichtungsstelle
              </h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            <section className="mt-8">
              <p className="text-sm text-muted-foreground">
                Quelle: <a href="https://www.e-recht24.de" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">e-recht24.de</a>
              </p>
            </section>

            <div className="mt-12 border-t border-border pt-6">
              <Link to="/" className="text-primary hover:underline">← Zurück zur Startseite</Link>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Impressum;

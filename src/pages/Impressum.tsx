import { Navbar, Footer } from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";

const Impressum = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Impressum | Marklewitz Solar"
        description="Impressum von Marklewitz Solar – Sven Marklewitz, Owen an der Teck."
      />
      <Navbar />
      <main className="pt-24 pb-20" id="main">
        <div className="container mx-auto max-w-3xl px-4">
          <article className="prose prose-neutral max-w-none">
            <h1 className="font-heading text-4xl font-bold text-foreground">Impressum</h1>

            <section className="mt-8">
              <h2 className="font-heading text-xl font-bold text-foreground">Angaben gemäß § 5 TMG</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Marklewitz Solar<br />
                Sven Marklewitz<br />
                Einzelunternehmer<br />
                Gartenstraße 43/1<br />
                73277 Owen an der Teck
              </p>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Tätigkeit: Photovoltaik-Installation, Beratung und Planung von Solaranlagen
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
              <h2 className="font-heading text-xl font-bold text-foreground">Umsatzsteuer-ID</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Als Kleinunternehmer gemäß § 19 UStG wird keine Umsatzsteuer-Identifikationsnummer geführt.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="font-heading text-xl font-bold text-foreground">Handelsregister</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Es ist kein Handelsregistereintrag vorhanden.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="font-heading text-xl font-bold text-foreground">
                Redaktionell verantwortlich (§ 55 Abs. 2 RStV)
              </h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Sven Marklewitz<br />
                Gartenstraße 43/1<br />
                73277 Owen an der Teck
              </p>
            </section>

            <section className="mt-8">
              <h2 className="font-heading text-xl font-bold text-foreground">EU-Streitschlichtung</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  https://ec.europa.eu/consumers/odr/
                </a>
                <br />
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
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
              <h2 className="font-heading text-xl font-bold text-foreground">Haftungsausschluss</h2>
              <h3 className="mt-4 font-heading font-semibold text-foreground">Haftung für Inhalte</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den
                allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
                zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder
                Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
                Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
                Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
                Inhalte umgehend entfernen.
              </p>
              <h3 className="mt-4 font-heading font-semibold text-foreground">Haftung für Links</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
                Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
                verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die
                verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
                Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche
                Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
                zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>
              <h3 className="mt-4 font-heading font-semibold text-foreground">Urheberrecht</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
                Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
                Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte
                Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem
                auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei
                Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
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

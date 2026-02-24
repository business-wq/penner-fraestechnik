import { Navbar, Footer } from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";

const Datenschutz = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Datenschutzerklärung | Marklewitz Solar"
        description="Datenschutzerklärung von Marklewitz Solar – Informationen zum Umgang mit Ihren personenbezogenen Daten."
      />
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto max-w-3xl px-4">
          <article>
            <h1 className="font-heading text-4xl font-bold text-foreground">Datenschutzerklärung</h1>

            {/* 1. Datenschutz auf einen Blick */}
            <section className="mt-10">
              <h2 className="font-heading text-2xl font-bold text-foreground">1. Datenschutz auf einen Blick</h2>

              <h3 className="mt-6 font-heading text-lg font-bold text-foreground">Allgemeine Hinweise</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen
                Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit
                denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema
                Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
              </p>

              <h3 className="mt-6 font-heading text-lg font-bold text-foreground">Datenerfassung auf dieser Website</h3>

              <h4 className="mt-4 font-heading font-bold text-foreground">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
                Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser
                Datenschutzerklärung entnehmen.
              </p>

              <h4 className="mt-4 font-heading font-bold text-foreground">Wie erfassen wir Ihre Daten?</h4>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann
                es sich z.&nbsp;B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
              </p>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website
                durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.&nbsp;B.
                Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser
                Daten erfolgt automatisch, sobald Sie diese Website betreten.
              </p>

              <h4 className="mt-4 font-heading font-bold text-foreground">Wofür nutzen wir Ihre Daten?</h4>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu
                gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
              </p>

              <h4 className="mt-4 font-heading font-bold text-foreground">Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck
                Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die
                Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur
                Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft
                widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der
                Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein
                Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
              </p>

              <h4 className="mt-4 font-heading font-bold text-foreground">Analyse-Tools und Tools von Drittanbietern</h4>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden.
                Das geschieht vor allem mit sogenannten Analyseprogrammen. Detaillierte Informationen
                zu diesen Analyseprogrammen finden Sie in der folgenden Datenschutzerklärung.
              </p>
            </section>

            {/* 2. Hosting */}
            <section className="mt-10">
              <h2 className="font-heading text-2xl font-bold text-foreground">2. Hosting</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Wir hosten die Inhalte unserer Website bei einem externen Anbieter. Wenn Sie unsere
                Website besuchen, werden durch den Hosting-Anbieter personenbezogene Daten erfasst,
                die für den Betrieb und die Sicherheit der Website erforderlich sind. Dies umfasst
                technische Daten wie IP-Adressen, Browserinformationen und Zugriffszeiten.
              </p>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                Die Verwendung des Hosting-Dienstes erfolgt auf Grundlage von Art. 6 Abs. 1 lit.&nbsp;f
                DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung
                unserer Website. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die
                Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit.&nbsp;a DSGVO und § 25
                Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf
                Informationen im Endgerät des Nutzers umfasst. Die Einwilligung ist jederzeit widerrufbar.
              </p>
            </section>

            {/* 3. Allgemeine Hinweise und Pflichtinformationen */}
            <section className="mt-10">
              <h2 className="font-heading text-2xl font-bold text-foreground">3. Allgemeine Hinweise und Pflichtinformationen</h2>

              <h3 className="mt-6 font-heading text-lg font-bold text-foreground">Datenschutz</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst.
                Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen
                Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                Wir weisen darauf hin, dass die Datenübertragung im Internet (z.&nbsp;B. bei der Kommunikation
                per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem
                Zugriff durch Dritte ist nicht möglich.
              </p>

              <h3 className="mt-6 font-heading text-lg font-bold text-foreground">Hinweis zur verantwortlichen Stelle</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
              </p>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                Sven Marklewitz<br />
                Gartenstraße 43/1<br />
                73277 Owen an der Teck
              </p>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                Telefon: 0162-7382351<br />
                E-Mail: <a href="mailto:sven.marklewitz@marklewitz-solar.de" className="text-primary hover:underline">sven.marklewitz@marklewitz-solar.de</a>
              </p>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam
                mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten
                (z.&nbsp;B. Namen, E-Mail-Adressen o.&nbsp;Ä.) entscheidet.
              </p>

              <h3 className="mt-6 font-heading text-lg font-bold text-foreground">Speicherdauer</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt
                wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die
                Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder
                eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern
                wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen
                Daten haben (z.&nbsp;B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im
                letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
              </p>

              <h3 className="mt-6 font-heading text-lg font-bold text-foreground">Rechtsgrundlagen der Datenverarbeitung</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre
                personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit.&nbsp;a DSGVO bzw. Art. 9
                Abs. 2 lit.&nbsp;a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO
                verarbeitet werden. Sind Ihre Daten zur Vertragserfüllung oder zur Durchführung
                vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre Daten auf Grundlage des
                Art. 6 Abs. 1 lit.&nbsp;b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese
                zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind, auf Grundlage von
                Art. 6 Abs. 1 lit.&nbsp;c DSGVO.
              </p>

              <h3 className="mt-6 font-heading text-lg font-bold text-foreground">Empfänger von personenbezogenen Daten</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit verschiedenen externen Stellen
                zusammen. Dabei ist teilweise auch eine Übermittlung von personenbezogenen Daten an
                diese externen Stellen erforderlich. Wir geben personenbezogene Daten nur dann an
                externe Stellen weiter, wenn dies im Rahmen einer Vertragserfüllung erforderlich ist,
                wenn wir gesetzlich hierzu verpflichtet sind, oder wenn wir ein berechtigtes Interesse
                an der Weitergabe haben.
              </p>

              <h3 className="mt-6 font-heading text-lg font-bold text-foreground">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich.
                Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit
                der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
              </p>

              <h3 className="mt-6 font-heading text-lg font-bold text-foreground">Widerspruchsrecht (Art. 21 DSGVO)</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed font-semibold uppercase text-sm">
                Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit.&nbsp;e oder f DSGVO
                erfolgt, haben Sie jederzeit das Recht, aus Gründen, die sich aus Ihrer besonderen
                Situation ergeben, gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch
                einzulegen. Wenn Sie Widerspruch einlegen, werden wir Ihre betroffenen
                personenbezogenen Daten nicht mehr verarbeiten, es sei denn, wir können zwingende
                schutzwürdige Gründe für die Verarbeitung nachweisen.
              </p>
              <p className="mt-2 text-muted-foreground leading-relaxed font-semibold uppercase text-sm">
                Werden Ihre personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, so
                haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung einzulegen. Wenn
                Sie widersprechen, werden Ihre personenbezogenen Daten anschließend nicht mehr zum
                Zwecke der Direktwerbung verwendet.
              </p>

              <h3 className="mt-6 font-heading text-lg font-bold text-foreground">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei
                einer Aufsichtsbehörde zu, insbesondere in dem Mitgliedstaat ihres gewöhnlichen
                Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes.
              </p>

              <h3 className="mt-6 font-heading text-lg font-bold text-foreground">Recht auf Datenübertragbarkeit</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in
                Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in
                einem gängigen, maschinenlesbaren Format aushändigen zu lassen.
              </p>

              <h3 className="mt-6 font-heading text-lg font-bold text-foreground">Auskunft, Berichtigung und Löschung</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf
                unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft
                und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung
                oder Löschung dieser Daten.
              </p>

              <h3 className="mt-6 font-heading text-lg font-bold text-foreground">Recht auf Einschränkung der Verarbeitung</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten
                zu verlangen. Dies gilt unter anderem, wenn Sie die Richtigkeit Ihrer Daten bestreiten,
                die Verarbeitung unrechtmäßig ist, wir Ihre Daten nicht mehr benötigen oder Sie
                Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben.
              </p>
            </section>

            {/* 4. Datenerfassung auf dieser Website */}
            <section className="mt-10">
              <h2 className="font-heading text-2xl font-bold text-foreground">4. Datenerfassung auf dieser Website</h2>

              <h3 className="mt-6 font-heading text-lg font-bold text-foreground">Cookies</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                Unsere Internetseiten verwenden sogenannte „Cookies". Cookies sind kleine Datenpakete
                und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend
                für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf
                Ihrem Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch
                gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese
                selbst löschen oder eine automatische Löschung durch Ihren Webbrowser erfolgt.
              </p>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da
                bestimmte Webseitenfunktionen ohne diese nicht funktionieren würden. Andere Cookies
                können zur Auswertung des Nutzerverhaltens oder zu Werbezwecken verwendet werden.
              </p>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                Notwendige Cookies werden auf Grundlage von Art. 6 Abs. 1 lit.&nbsp;f DSGVO gespeichert,
                sofern keine andere Rechtsgrundlage angegeben wird. Der Websitebetreiber hat ein
                berechtigtes Interesse an der Speicherung von notwendigen Cookies zur technisch
                fehlerfreien und optimierten Bereitstellung seiner Dienste. Sofern eine Einwilligung zur
                Speicherung von Cookies abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf
                Grundlage dieser Einwilligung (Art. 6 Abs. 1 lit.&nbsp;a DSGVO und § 25 Abs. 1 TTDSG);
                die Einwilligung ist jederzeit widerrufbar.
              </p>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert
                werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle
                oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des
                Browsers aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser
                Website eingeschränkt sein.
              </p>

              <h3 className="mt-6 font-heading text-lg font-bold text-foreground">Verwendete Cookies auf dieser Website</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                Auf unserer Website setzen wir folgende Kategorien von Cookies ein. Über unseren
                Cookie-Banner können Sie Ihre Einwilligung jederzeit anpassen oder widerrufen.
              </p>

              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-sm border border-border rounded-lg">
                  <thead>
                    <tr className="bg-muted">
                      <th className="text-left p-3 font-bold text-foreground border-b border-border">Kategorie</th>
                      <th className="text-left p-3 font-bold text-foreground border-b border-border">Zweck</th>
                      <th className="text-left p-3 font-bold text-foreground border-b border-border">Anbieter</th>
                      <th className="text-left p-3 font-bold text-foreground border-b border-border">Speicherdauer</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="p-3 text-foreground font-medium">Notwendig</td>
                      <td className="p-3 text-muted-foreground">Speicherung Ihrer Cookie-Einstellungen</td>
                      <td className="p-3 text-muted-foreground">Marklewitz Solar (localStorage)</td>
                      <td className="p-3 text-muted-foreground">Unbegrenzt / bis zur manuellen Löschung</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-3 text-foreground font-medium">Analyse</td>
                      <td className="p-3 text-muted-foreground">Statistische Auswertung des Nutzerverhaltens zur Verbesserung unserer Website</td>
                      <td className="p-3 text-muted-foreground">Google Analytics (Google Ireland Ltd.)</td>
                      <td className="p-3 text-muted-foreground">bis zu 2 Jahre</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-foreground font-medium">Marketing</td>
                      <td className="p-3 text-muted-foreground">Messung der Wirksamkeit von Werbeanzeigen und Remarketing</td>
                      <td className="p-3 text-muted-foreground">Meta Pixel (Meta Platforms Ireland Ltd.)</td>
                      <td className="p-3 text-muted-foreground">bis zu 90 Tage</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-4 text-muted-foreground leading-relaxed">
                Die Analyse- und Marketing-Cookies werden erst nach Ihrer ausdrücklichen Einwilligung
                über unseren Cookie-Banner geladen. Sie können Ihre Einstellungen jederzeit über den
                Link „Cookie-Einstellungen" im Footer dieser Website ändern.
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

export default Datenschutz;

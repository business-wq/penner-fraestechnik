import { Navbar, Footer } from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mt-10">
    <h2 className="font-heading text-2xl font-bold text-foreground">{title}</h2>
    {children}
  </section>
);

const SubSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <>
    <h3 className="mt-6 font-heading text-lg font-bold text-foreground">{title}</h3>
    {children}
  </>
);

const P = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <p className={`mt-2 text-muted-foreground leading-relaxed ${className}`}>{children}</p>
);

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
            <Section title="1. Datenschutz auf einen Blick">
              <SubSection title="Allgemeine Hinweise">
                <P>
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen
                  Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit
                  denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema
                  Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
                </P>
              </SubSection>

              <SubSection title="Datenerfassung auf dieser Website">
                <h4 className="mt-4 font-heading font-bold text-foreground">
                  Wer ist verantwortlich für die Datenerfassung auf dieser Website?
                </h4>
                <P>
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
                  Kontaktdaten können Sie dem Abschnitt „Hinweis zur verantwortlichen Stelle" in dieser
                  Datenschutzerklärung entnehmen.
                </P>

                <h4 className="mt-4 font-heading font-bold text-foreground">Wie erfassen wir Ihre Daten?</h4>
                <P>
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann
                  es sich z.&nbsp;B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                </P>
                <P>
                  Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website
                  durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.&nbsp;B.
                  Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser
                  Daten erfolgt automatisch, sobald Sie diese Website betreten.
                </P>

                <h4 className="mt-4 font-heading font-bold text-foreground">Wofür nutzen wir Ihre Daten?</h4>
                <P>
                  Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu
                  gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                </P>

                <h4 className="mt-4 font-heading font-bold text-foreground">
                  Welche Rechte haben Sie bezüglich Ihrer Daten?
                </h4>
                <P>
                  Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck
                  Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die
                  Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur
                  Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft
                  widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der
                  Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein
                  Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                </P>
              </SubSection>
            </Section>

            {/* 2. Hosting */}
            <Section title="2. Hosting">
              <P>
                Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
              </P>
              <SubSection title="Externes Hosting">
                <P>
                  Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website
                  erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v.&nbsp;a.
                  um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten,
                  Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
                </P>
                <P>
                  Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen
                  und bestehenden Kunden (Art. 6 Abs. 1 lit.&nbsp;b DSGVO) und im Interesse einer sicheren,
                  schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen
                  Anbieter (Art. 6 Abs. 1 lit.&nbsp;f DSGVO).
                </P>
              </SubSection>
            </Section>

            {/* 3. Allgemeine Hinweise und Pflichtinformationen */}
            <Section title="3. Allgemeine Hinweise und Pflichtinformationen">
              <SubSection title="Datenschutz">
                <P>
                  Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst.
                  Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen
                  Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                </P>
                <P>
                  Wir weisen darauf hin, dass die Datenübertragung im Internet (z.&nbsp;B. bei der Kommunikation
                  per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem
                  Zugriff durch Dritte ist nicht möglich.
                </P>
              </SubSection>

              <SubSection title="Hinweis zur verantwortlichen Stelle">
                <P>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</P>
                <P>
                  Sven Marklewitz<br />
                  Gartenstraße 43/1<br />
                  73277 Owen an der Teck
                </P>
                <P>
                  Telefon: 0162-7382351<br />
                  E-Mail:{" "}
                  <a href="mailto:sven.marklewitz@marklewitz-solar.de" className="text-primary hover:underline">
                    sven.marklewitz@marklewitz-solar.de
                  </a>
                </P>
                <P>
                  Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam
                  mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten
                  (z.&nbsp;B. Namen, E-Mail-Adressen o.&nbsp;Ä.) entscheidet.
                </P>
              </SubSection>

              <SubSection title="Speicherdauer">
                <P>
                  Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt
                  wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die
                  Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder
                  eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern
                  wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen
                  Daten haben (z.&nbsp;B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im
                  letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
                </P>
              </SubSection>

              <SubSection title="Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung">
                <P>
                  Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre
                  personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit.&nbsp;a DSGVO bzw. Art. 9
                  Abs. 2 lit.&nbsp;a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO
                  verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung in die Übertragung
                  personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf
                  Grundlage von Art. 49 Abs. 1 lit.&nbsp;a DSGVO. Sind Ihre Daten zur Vertragserfüllung
                  oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre Daten
                  auf Grundlage des Art. 6 Abs. 1 lit.&nbsp;b DSGVO. Des Weiteren verarbeiten wir Ihre
                  Daten, sofern diese zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind, auf
                  Grundlage von Art. 6 Abs. 1 lit.&nbsp;c DSGVO. Die Datenverarbeitung kann ferner auf
                  Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit.&nbsp;f DSGVO erfolgen.
                </P>
              </SubSection>

              <SubSection title="Empfänger von personenbezogenen Daten">
                <P>
                  Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit verschiedenen externen Stellen
                  zusammen. Dabei ist teilweise auch eine Übermittlung von personenbezogenen Daten an
                  diese externen Stellen erforderlich. Wir geben personenbezogene Daten nur dann an
                  externe Stellen weiter, wenn dies im Rahmen einer Vertragserfüllung erforderlich ist,
                  wenn wir gesetzlich hierzu verpflichtet sind oder wenn wir ein berechtigtes Interesse
                  an der Weitergabe haben.
                </P>
              </SubSection>

              <SubSection title="Widerruf Ihrer Einwilligung zur Datenverarbeitung">
                <P>
                  Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich.
                  Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit
                  der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
                </P>
              </SubSection>

              <SubSection title="Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen (Art. 21 DSGVO)">
                <P className="font-semibold uppercase text-sm">
                  Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit.&nbsp;e oder f DSGVO
                  erfolgt, haben Sie jederzeit das Recht, aus Gründen, die sich aus Ihrer besonderen
                  Situation ergeben, gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch
                  einzulegen. Die jeweilige Rechtsgrundlage, auf der eine Verarbeitung beruht, entnehmen
                  Sie dieser Datenschutzerklärung. Wenn Sie Widerspruch einlegen, werden wir Ihre
                  betroffenen personenbezogenen Daten nicht mehr verarbeiten, es sei denn, wir können
                  zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen,
                  Rechte und Freiheiten überwiegen oder die Verarbeitung dient der Geltendmachung,
                  Ausübung oder Verteidigung von Rechtsansprüchen (Widerspruch nach Art. 21 Abs. 1 DSGVO).
                </P>
                <P className="font-semibold uppercase text-sm">
                  Werden Ihre personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, so
                  haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung Sie betreffender
                  personenbezogener Daten zum Zwecke derartiger Werbung einzulegen; dies gilt auch für
                  das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht. Wenn Sie
                  widersprechen, werden Ihre personenbezogenen Daten anschließend nicht mehr zum Zwecke
                  der Direktwerbung verwendet (Widerspruch nach Art. 21 Abs. 2 DSGVO).
                </P>
              </SubSection>

              <SubSection title="Beschwerderecht bei der zuständigen Aufsichtsbehörde">
                <P>
                  Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei
                  einer Aufsichtsbehörde zu, insbesondere in dem Mitgliedstaat ihres gewöhnlichen
                  Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes. Das
                  Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder
                  gerichtlicher Rechtsbehelfe.
                </P>
              </SubSection>

              <SubSection title="Recht auf Datenübertragbarkeit">
                <P>
                  Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in
                  Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in
                  einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte
                  Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur,
                  soweit es technisch machbar ist.
                </P>
              </SubSection>

              <SubSection title="Auskunft, Berichtigung und Löschung">
                <P>
                  Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf
                  unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft
                  und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung
                  oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene
                  Daten können Sie sich jederzeit an uns wenden.
                </P>
              </SubSection>

              <SubSection title="Recht auf Einschränkung der Verarbeitung">
                <P>
                  Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten
                  zu verlangen. Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung
                  der Verarbeitung besteht in folgenden Fällen:
                </P>
                <ul className="mt-2 ml-6 list-disc text-muted-foreground leading-relaxed space-y-1">
                  <li>Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten.</li>
                  <li>Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht.</li>
                  <li>Wenn Sie die Löschung Ihrer personenbezogenen Daten verlangen, wir die Daten aber noch benötigen.</li>
                  <li>Wenn Sie Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben.</li>
                </ul>
              </SubSection>

              <SubSection title="SSL- bzw. TLS-Verschlüsselung">
                <P>
                  Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher
                  Inhalte, wie zum Beispiel Anfragen, die Sie an uns als Seitenbetreiber senden, eine
                  SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass
                  die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem
                  Schloss-Symbol in Ihrer Browserzeile.
                </P>
                <P>
                  Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns
                  übermitteln, nicht von Dritten mitgelesen werden.
                </P>
              </SubSection>
            </Section>

            {/* 4. Datenerfassung auf dieser Website */}
            <Section title="4. Datenerfassung auf dieser Website">
              <SubSection title="Cookies">
                <P>
                  Unsere Internetseiten verwenden sogenannte „Cookies". Cookies sind kleine Datenpakete
                  und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend
                  für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf
                  Ihrem Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch
                  gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese
                  selbst löschen oder eine automatische Löschung durch Ihren Webbrowser erfolgt.
                </P>
                <P>
                  Cookies können von uns (First-Party-Cookies) oder von Drittunternehmen stammen
                  (sog. Third-Party-Cookies). Third-Party-Cookies ermöglichen die Einbindung bestimmter
                  Dienstleistungen von Drittunternehmen innerhalb von Webseiten (z.&nbsp;B. Cookies zur
                  Abwicklung von Zahlungsdienstleistungen).
                </P>
                <P>
                  Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da
                  bestimmte Webseitenfunktionen ohne diese nicht funktionieren würden. Andere Cookies
                  können zur Auswertung des Nutzerverhaltens oder zu Werbezwecken verwendet werden.
                </P>
                <P>
                  Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs, zur
                  Bereitstellung bestimmter, von Ihnen erwünschter Funktionen oder zur Optimierung der
                  Website erforderlich sind (notwendige Cookies), werden auf Grundlage von Art. 6 Abs. 1
                  lit.&nbsp;f DSGVO gespeichert, sofern keine andere Rechtsgrundlage angegeben wird. Der
                  Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von notwendigen
                  Cookies zur technisch fehlerfreien und optimierten Bereitstellung seiner Dienste.
                  Sofern eine Einwilligung zur Speicherung von Cookies und vergleichbaren
                  Wiedererkennungstechnologien abgefragt wurde, erfolgt die Verarbeitung ausschließlich
                  auf Grundlage dieser Einwilligung (Art. 6 Abs. 1 lit.&nbsp;a DSGVO und § 25 Abs. 1
                  TTDSG); die Einwilligung ist jederzeit widerrufbar.
                </P>
                <P>
                  Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert
                  werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte
                  Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim
                  Schließen des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die
                  Funktionalität dieser Website eingeschränkt sein.
                </P>
              </SubSection>

              <SubSection title="Verwendete Cookies auf dieser Website">
                <P>
                  Auf unserer Website setzen wir folgende Kategorien von Cookies ein. Über unseren
                  Cookie-Banner können Sie Ihre Einwilligung jederzeit anpassen oder widerrufen.
                </P>

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
                        <td className="p-3 text-muted-foreground">Statistische Auswertung des Nutzerverhaltens</td>
                        <td className="p-3 text-muted-foreground">Google Analytics (Google Ireland Ltd.)</td>
                        <td className="p-3 text-muted-foreground">bis zu 2 Jahre</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-foreground font-medium">Marketing</td>
                        <td className="p-3 text-muted-foreground">Werbeanzeigen-Messung und Remarketing</td>
                        <td className="p-3 text-muted-foreground">Meta Pixel (Meta Platforms Ireland Ltd.)</td>
                        <td className="p-3 text-muted-foreground">bis zu 90 Tage</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <P>
                  Die Analyse- und Marketing-Cookies werden erst nach Ihrer ausdrücklichen Einwilligung
                  über unseren Cookie-Banner geladen. Sie können Ihre Einstellungen jederzeit über den
                  Link „Cookie-Einstellungen" im Footer dieser Website ändern.
                </P>
              </SubSection>

              <SubSection title="Server-Log-Dateien">
                <P>
                  Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten
                  Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
                </P>
                <ul className="mt-2 ml-6 list-disc text-muted-foreground leading-relaxed space-y-1">
                  <li>Browsertyp und Browserversion</li>
                  <li>verwendetes Betriebssystem</li>
                  <li>Referrer URL</li>
                  <li>Hostname des zugreifenden Rechners</li>
                  <li>Uhrzeit der Serveranfrage</li>
                  <li>IP-Adresse</li>
                </ul>
                <P>
                  Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
                </P>
                <P>
                  Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit.&nbsp;f DSGVO.
                  Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien
                  Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Dateien
                  erfasst werden.
                </P>
              </SubSection>

              <SubSection title="Kontaktaufnahme per Telefon, E-Mail oder WhatsApp">
                <P>
                  Wenn Sie uns per Telefon, E-Mail oder WhatsApp kontaktieren, wird Ihre Anfrage inklusive
                  aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage, Telefonnummer,
                  E-Mail-Adresse) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und
                  verarbeitet.
                </P>
                <P>
                  Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit.&nbsp;b DSGVO,
                  sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung
                  vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die
                  Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns
                  gerichteten Anfragen (Art. 6 Abs. 1 lit.&nbsp;f DSGVO) oder auf Ihrer Einwilligung
                  (Art. 6 Abs. 1 lit.&nbsp;a DSGVO) sofern diese abgefragt wurde.
                </P>
                <P>
                  Die von Ihnen an uns per Kontaktanfrage übersandten Daten verbleiben bei uns, bis Sie
                  uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck
                  für die Datenspeicherung entfällt. Zwingende gesetzliche Bestimmungen – insbesondere
                  gesetzliche Aufbewahrungsfristen – bleiben unberührt.
                </P>
                <P>
                  Bei der Nutzung von WhatsApp werden Ihre Daten an die Server von Meta Platforms Ireland
                  Ltd. übertragen. Weitere Informationen zum Datenschutz bei WhatsApp finden Sie unter:{" "}
                  <a
                    href="https://www.whatsapp.com/legal/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    https://www.whatsapp.com/legal/privacy-policy
                  </a>
                </P>
              </SubSection>
            </Section>

            {/* 5. Analyse-Tools und Werbung */}
            <Section title="5. Analyse-Tools und Werbung">
              <SubSection title="Google Analytics">
                <P>
                  Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist
                  die Google Ireland Limited („Google"), Gordon House, Barrow Street, Dublin 4, Irland.
                </P>
                <P>
                  Google Analytics ermöglicht es dem Websitebetreiber, das Verhalten der Websitebesucher
                  zu analysieren. Hierbei erhält der Websitebetreiber verschiedene Nutzungsdaten, wie
                  z.&nbsp;B. Seitenaufrufe, Verweildauer, verwendete Betriebssysteme und Herkunft des
                  Nutzers. Diese Daten werden dem jeweiligen Endgerät des Nutzers zugeordnet.
                  Eine Zuordnung zu einer User-ID erfolgt nicht.
                </P>
                <P>
                  Des Weiteren können wir mit Google Analytics u.&nbsp;a. Ihre Maus- und
                  Scrollbewegungen und Klicks aufzeichnen. Ferner verwendet Google Analytics verschiedene
                  Modellierungsansätze, um die erfassten Datensätze zu ergänzen, und setzt
                  Machine-Learning-Technologien bei der Datenanalyse ein.
                </P>
                <P>
                  Google Analytics verwendet Technologien, die die Wiedererkennung des Nutzers zum Zwecke
                  der Analyse des Nutzerverhaltens ermöglichen (z.&nbsp;B. Cookies oder
                  Device-Fingerprinting). Die von Google erfassten Informationen über die Benutzung
                  dieser Website werden in der Regel an einen Server von Google in den USA übertragen und
                  dort gespeichert.
                </P>
                <P>
                  Die Nutzung dieses Dienstes erfolgt auf Grundlage Ihrer Einwilligung nach Art. 6
                  Abs. 1 lit.&nbsp;a DSGVO und § 25 Abs. 1 TTDSG. Die Einwilligung ist jederzeit
                  widerrufbar.
                </P>
                <P>
                  Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der
                  EU-Kommission gestützt. Details finden Sie hier:{" "}
                  <a
                    href="https://privacy.google.com/businesses/controllerterms/mccs/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    https://privacy.google.com/businesses/controllerterms/mccs/
                  </a>
                </P>
                <P>
                  Mehr Informationen zum Umgang mit Nutzerdaten bei Google Analytics finden Sie in der
                  Datenschutzerklärung von Google:{" "}
                  <a
                    href="https://support.google.com/analytics/answer/6004245?hl=de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    https://support.google.com/analytics/answer/6004245?hl=de
                  </a>
                </P>
              </SubSection>

              <SubSection title="Meta Pixel (ehemals Facebook Pixel)">
                <P>
                  Diese Website nutzt zur Konversionsmessung den Besucheraktions-Pixel von Meta
                  (ehemals Facebook). Anbieter ist die Meta Platforms Ireland Limited, Merrion Road,
                  Dublin 4, D04 X2K5, Irland.
                </P>
                <P>
                  So kann das Verhalten der Seitenbesucher nachverfolgt werden, nachdem diese durch Klick
                  auf eine Meta-Werbeanzeige auf die Website des Anbieters weitergeleitet wurden. Dadurch
                  können die Wirksamkeit der Meta-Werbeanzeigen für statistische und Marktforschungszwecke
                  ausgewertet und zukünftige Werbemaßnahmen optimiert werden.
                </P>
                <P>
                  Die erhobenen Daten sind für uns als Betreiber dieser Website anonym, wir können keine
                  Rückschlüsse auf die Identität der Nutzer ziehen. Die Daten werden aber von Meta
                  gespeichert und verarbeitet, sodass eine Verbindung zum jeweiligen Nutzerprofil möglich
                  ist und Meta die Daten für eigene Werbezwecke verwenden kann. Meta kann die Daten mit
                  Ihrem Meta-Konto verknüpfen.
                </P>
                <P>
                  Die Nutzung dieses Dienstes erfolgt auf Grundlage Ihrer Einwilligung nach Art. 6
                  Abs. 1 lit.&nbsp;a DSGVO und § 25 Abs. 1 TTDSG. Die Einwilligung ist jederzeit
                  widerrufbar.
                </P>
                <P>
                  Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der
                  EU-Kommission gestützt. Details finden Sie hier:{" "}
                  <a
                    href="https://www.facebook.com/legal/EU_data_transfer_addendum"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    https://www.facebook.com/legal/EU_data_transfer_addendum
                  </a>
                </P>
                <P>
                  Weitere Informationen zum Schutz Ihrer Privatsphäre finden Sie in den
                  Datenschutzhinweisen von Meta:{" "}
                  <a
                    href="https://de-de.facebook.com/about/privacy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    https://de-de.facebook.com/about/privacy/
                  </a>
                </P>
              </SubSection>
            </Section>

            {/* 6. Plugins und Tools */}
            <Section title="6. Plugins und Tools">
              <SubSection title="Google Fonts (lokales Hosting)">
                <P>
                  Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten sogenannte Google Fonts,
                  die lokal installiert sind. Eine Verbindung zu Servern von Google findet dabei nicht statt.
                </P>
                <P>
                  Weitere Informationen zu Google Fonts finden Sie unter{" "}
                  <a
                    href="https://developers.google.com/fonts/faq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    https://developers.google.com/fonts/faq
                  </a>{" "}
                  und in der Datenschutzerklärung von Google:{" "}
                  <a
                    href="https://policies.google.com/privacy?hl=de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    https://policies.google.com/privacy?hl=de
                  </a>
                </P>
              </SubSection>

              <SubSection title="Calendly">
                <P>
                  Für die Terminbuchung nutzen wir den Dienst Calendly, einen Anbieter der Calendly LLC,
                  BB&T Tower, 271 17th St NW, Atlanta, GA 30363, USA.
                </P>
                <P>
                  Wenn Sie einen Termin über Calendly buchen, werden die von Ihnen eingegebenen Daten
                  (z.&nbsp;B. Name, E-Mail-Adresse, gewünschter Termin) an Calendly übermittelt und dort
                  verarbeitet. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit.&nbsp;b DSGVO
                  (Vertragserfüllung bzw. vorvertragliche Maßnahmen).
                </P>
                <P>
                  Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission
                  gestützt. Weitere Informationen finden Sie in der Datenschutzerklärung von Calendly:{" "}
                  <a
                    href="https://calendly.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    https://calendly.com/privacy
                  </a>
                </P>
              </SubSection>
            </Section>

            <section className="mt-8">
              <P className="text-sm">
                Quelle:{" "}
                <a
                  href="https://www.e-recht24.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  e-recht24.de
                </a>
              </P>
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

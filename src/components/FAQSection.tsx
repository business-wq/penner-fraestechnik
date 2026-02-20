import { motion } from "framer-motion";

const faqs = [
  {
    q: "Was kostet eine Photovoltaikanlage in Kirchheim unter Teck?",
    a: "Die Kosten für eine Photovoltaikanlage liegen in der Region Kirchheim unter Teck typischerweise zwischen 2.400 und 2.550 € pro kWp (Kilowatt Peak). Für ein Einfamilienhaus mit 8–10 kWp rechnen Sie mit ca. 18.000–25.000 €, je nach Modulwahl und Dachbeschaffenheit. Auf Wunsch integrieren wir auch einen Stromspeicher. Kontaktieren Sie uns für ein kostenloses, individuelles Angebot innerhalb von 24 Stunden.",
  },
  {
    q: "Wie lange dauert die Installation?",
    a: "Die Montage erfolgt in der Regel innerhalb weniger Wochen nach Auftragserteilung. Die eigentliche Installation auf dem Dach dauert meist nur 1–2 Tage. Die anschließende Anmeldung beim Netzbetreiber und Inbetriebnahme nehmen weitere 2–4 Wochen in Anspruch.",
  },
  {
    q: "Welche Förderungen gibt es für Photovoltaik 2026?",
    a: "Für 2026 gelten folgende Fördermöglichkeiten: KfW-Kredit 270 (Erneuerbare Energien – Standard) mit günstigen Zinsen, Einspeisevergütung nach EEG für eingespeisten Strom, sowie Steuerbefreiung für Anlagen bis 30 kWp auf Einfamilienhäusern. Zusätzlich bieten einige Kommunen eigene Förderprogramme an. Wir beraten Sie kostenlos zu allen aktuellen Fördermöglichkeiten in Ihrer Gemeinde.",
  },
  {
    q: "Lohnt sich Photovoltaik 2026 noch?",
    a: "Ja, Photovoltaik lohnt sich 2026 mehr denn je: Mit einem Eigenverbrauchsanteil von 30–50 % und einem Strompreis von über 30 Ct/kWh amortisiert sich eine Anlage in der Region Kirchheim unter Teck typischerweise in 8–12 Jahren – bei einer Lebensdauer von 25–30 Jahren. Baden-Württemberg mit ca. 1.143–1.223 kWh/m² Jahreseinstrahlung bietet sehr gute Erträge. Mit einem Speicher steigt die Wirtschaftlichkeit nochmals deutlich.",
  },
  {
    q: "Was ist eine Drohnenaufnahme und wozu wird sie genutzt?",
    a: "Bei Marklewitz Solar nutzen wir professionelle Drohnen für die präzise Dachvermessung vor der Planung Ihrer Solaranlage. Das Drohnen-Aufmaß liefert exakte Dachabmessungen, Neigungswinkel und Ausrichtungsdaten – ohne Betreten des Daches. So können wir Ihre Anlage millimetergenau planen, den optimalen Ertrag berechnen und Kosten exakter kalkulieren. Dieser Service ist bei uns im Planungspaket inklusive.",
  },
  {
    q: "In welchen Städten sind Sie tätig?",
    a: "Wir betreuen die gesamte Region im 50-km-Radius um Owen an der Teck: Kirchheim unter Teck, Owen, Nürtingen, Esslingen am Neckar, Weilheim an der Teck, Notzingen, Wendlingen am Neckar, Dettingen unter Teck, Lenningen, Plochingen und viele weitere Gemeinden im Landkreis Esslingen und darüber hinaus.",
  },
  {
    q: "Übernehmen Sie die Anmeldung beim Netzbetreiber?",
    a: "Ja, die Anmeldung beim Netzbetreiber sowie die komplette Einweisung in Ihre neue Anlage sind selbstverständlich Teil unseres Rundum-Service. Wir kümmern uns um den gesamten Papierkram – vom Netzanschluss bis zur EEG-Anmeldung im Marktstammdatenregister.",
  },
  {
    q: "Bieten Sie auch Stromspeicher an?",
    a: "Ja, wir bieten passende Speicherlösungen für Ihre PV-Anlage an. Die Speichergröße wird individuell auf Ihren Verbrauch und Ihre Anlage abgestimmt. Mit einem Speicher erhöhen Sie Ihren Eigenverbrauchsanteil deutlich – typisch von 30 % auf 60–80 % – und werden unabhängiger vom Netz.",
  },
  {
    q: "Was passiert nach der Installation – bieten Sie Wartung an?",
    a: "Wir sind auch nach der Installation für Sie da. Wir bieten Einweisung und Erklärung der Anlage direkt nach Inbetriebnahme sowie Ansprechpartner für Fragen und Störungen. Sprechen Sie uns für konkrete Wartungsvereinbarungen direkt an – als regionaler Anbieter sind wir schnell bei Ihnen vor Ort.",
  },
  {
    q: "Wie läuft der Ablauf von Anfrage bis fertige Anlage?",
    a: "Unser Prozess in 5 Schritten: 1) Kostenloses Erstgespräch (telefonisch oder vor Ort), 2) Drohnenaufnahme & individuelle Planung Ihrer Anlage, 3) Angebot innerhalb von 24 Stunden, 4) Professionelle Montage inkl. Gerüst, Module und elektrischer Anschluss, 5) Anmeldung beim Netzbetreiber, Einweisung und Inbetriebnahme. Unkompliziert, transparent und alles aus einer Hand.",
  },
];

const FAQSection = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <section id="faq" className="py-20 md:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container mx-auto max-w-3xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Häufige Fragen
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-4xl">
            FAQ – Photovoltaik in Ihrer Region
          </h2>
          <p className="mt-4 text-muted-foreground">
            Antworten auf die häufigsten Fragen rund um Solaranlagen in Kirchheim unter Teck und Umgebung.
          </p>
        </motion.div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, i) => (
            <motion.details
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group rounded-xl border border-border bg-card"
            >
              <summary className="flex cursor-pointer items-center justify-between p-6 font-heading font-bold text-foreground">
                {faq.q}
                <span className="ml-4 shrink-0 text-primary transition-transform group-open:rotate-45">+</span>
              </summary>
              <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                {faq.a}
              </div>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

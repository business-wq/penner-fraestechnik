import { motion } from "framer-motion";

const faqs = [
  {
    q: "Was kostet eine Photovoltaikanlage?",
    a: "Die Kosten hängen von Dachgröße, Modulwahl und gewünschter Leistung ab. Kontaktieren Sie uns für ein kostenloses, individuelles Angebot innerhalb von 24 Stunden.",
  },
  {
    q: "Wie lange dauert die Installation?",
    a: "Die Montage auf dem Dach dauert meist nur 1–2 Tage. Die Anmeldung beim Netzbetreiber und Inbetriebnahme nehmen anschließend noch einige Wochen in Anspruch.",
  },
  {
    q: "Welche Förderungen gibt es für Photovoltaik?",
    a: "Für Photovoltaikanlagen entfällt die Mehrwertsteuer beim Kauf. Zusätzlich erhalten Sie eine Einspeisevergütung für den ins Netz eingespeisten Strom. Wir beraten Sie gerne zu den Details.",
  },
  {
    q: "Lohnt sich Photovoltaik noch?",
    a: "Ja, durch steigende Strompreise und den hohen Eigenverbrauchsanteil amortisiert sich eine Anlage in überschaubarer Zeit – bei einer Lebensdauer von über 25 Jahren. Mit einem Speicher steigt die Wirtschaftlichkeit nochmals.",
  },
  {
    q: "Was ist eine Drohnenaufnahme und wozu wird sie genutzt?",
    a: "Wir nutzen Drohnen für die präzise Dachvermessung – ohne Betreten des Daches. So planen wir Ihre Anlage optimal und berechnen den bestmöglichen Ertrag. Dieser Service ist bei uns inklusive.",
  },
  {
    q: "In welchen Städten sind Sie tätig?",
    a: "Wir betreuen die gesamte Region rund um Owen an der Teck: Kirchheim, Nürtingen, Esslingen, Weilheim, Wendlingen, Dettingen, Lenningen, Plochingen und viele weitere Gemeinden.",
  },
  {
    q: "Übernehmen Sie die Anmeldung beim Netzbetreiber?",
    a: "Ja, wir kümmern uns um den gesamten Papierkram – vom Netzanschluss bis zur EEG-Anmeldung. Das ist Teil unseres Rundum-Service.",
  },
  {
    q: "Bieten Sie auch Stromspeicher an?",
    a: "Ja, wir bieten passende Speicherlösungen an. Mit einem Speicher erhöhen Sie Ihren Eigenverbrauch deutlich und werden unabhängiger vom Netz.",
  },
  {
    q: "Bieten Sie auch Wartung an?",
    a: "Wir sind auch nach der Installation für Sie da – mit Einweisung, Ansprechpartner bei Fragen und schnellem Service vor Ort.",
  },
  {
    q: "Wie läuft der Ablauf von Anfrage bis fertige Anlage?",
    a: "In 5 Schritten: Erstgespräch, Drohnenaufnahme & Planung, Angebot in 24h, professionelle Montage und abschließend Anmeldung & Inbetriebnahme. Alles aus einer Hand.",
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

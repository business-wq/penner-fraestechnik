import { motion } from "framer-motion";

const faqs = [
  {
    q: "Was kostet eine Photovoltaikanlage?",
    a: "Die Kosten hängen von Dachgröße, Modulanzahl und Speicher ab. Kontaktieren Sie uns für ein kostenloses, individuelles Angebot innerhalb von 24 Stunden.",
  },
  {
    q: "Wie lange dauert die Installation?",
    a: "Die Montage erfolgt in der Regel innerhalb weniger Wochen nach Auftragserteilung. Die eigentliche Installation auf dem Dach dauert meist nur 1-2 Tage.",
  },
  {
    q: "In welchen Städten sind Sie tätig?",
    a: "Wir betreuen Kirchheim unter Teck, Owen, Nürtingen, Esslingen am Neckar, Weilheim an der Teck, Notzingen, Wendlingen, Dettingen unter Teck, Lenningen, Plochingen und die gesamte Region.",
  },
  {
    q: "Übernehmen Sie die Anmeldung beim Netzbetreiber?",
    a: "Ja, die Anmeldung beim Netzbetreiber sowie die komplette Einweisung sind selbstverständlich Teil unseres Services.",
  },
  {
    q: "Bieten Sie auch Stromspeicher an?",
    a: "Ja, wir bieten passende Speicherlösungen für Ihre PV-Anlage an. Die Speichergröße wird individuell auf Ihren Verbrauch abgestimmt.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 md:py-28">
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
            FAQ
          </h2>
        </motion.div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, i) => (
            <motion.details
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group rounded-xl border border-border bg-card"
            >
              <summary className="flex cursor-pointer items-center justify-between p-6 font-heading font-bold text-foreground">
                {faq.q}
                <span className="ml-4 text-primary transition-transform group-open:rotate-45">+</span>
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

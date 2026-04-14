import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CircleHelp, FileText, Flame, MapPin, SunMedium } from "lucide-react";
import { useMemo, useState } from "react";

type FAQCategory = "pv" | "heatpump" | "process" | "region";

type FAQItem = {
  q: string;
  a: string;
  category: FAQCategory;
};

const faqs: FAQItem[] = [
  {
    category: "pv",
    q: "Was kostet eine Photovoltaikanlage?",
    a: "Die Kosten hängen von Dachgröße, Modulwahl und Leistung ab. Kontaktieren Sie uns für ein kostenloses, individuelles Angebot.",
  },
  {
    category: "process",
    q: "Wie lange dauert die Installation?",
    a: "Die Montage dauert meist 1–2 Tage. Die Anmeldung beim Netzbetreiber nimmt anschließend noch einige Wochen in Anspruch.",
  },
  {
    category: "pv",
    q: "Welche Förderungen gibt es für Photovoltaik?",
    a: "Beim Kauf entfällt die Mehrwertsteuer. Zusätzlich erhalten Sie eine Einspeisevergütung für eingespeisten Strom.",
  },
  {
    category: "heatpump",
    q: "Bieten Sie auch Wärmepumpen an?",
    a: "Ja, wir planen und installieren Wärmepumpen – idealerweise in Kombination mit einer PV-Anlage. So heizen Sie mit eigenem Solarstrom.",
  },
  {
    category: "heatpump",
    q: "Warum Wärmepumpe und PV kombinieren?",
    a: "Eine Wärmepumpe nutzt Strom zum Heizen. Mit einer PV-Anlage erzeugen Sie diesen Strom selbst – das senkt Ihre Heizkosten deutlich.",
  },
  {
    category: "process",
    q: "Was ist eine Drohnenaufnahme und wozu wird sie genutzt?",
    a: "Wir nutzen Drohnen für die präzise Dachvermessung – ohne Betreten des Daches. Dieser Service ist bei uns inklusive.",
  },
  {
    category: "region",
    q: "In welchen Städten sind Sie tätig?",
    a: "Wir betreuen die Region rund um Owen an der Teck: Kirchheim, Nürtingen, Esslingen, Weilheim, Wendlingen, Dettingen, Lenningen, Plochingen und weitere Gemeinden.",
  },
  {
    category: "process",
    q: "Übernehmen Sie die Anmeldung beim Netzbetreiber?",
    a: "Ja, wir kümmern uns um den gesamten Papierkram – vom Netzanschluss bis zur EEG-Anmeldung.",
  },
  {
    category: "pv",
    q: "Bieten Sie auch Stromspeicher an?",
    a: "Ja, mit einem Speicher erhöhen Sie Ihren Eigenverbrauch und werden unabhängiger vom Netz.",
  },
  {
    category: "process",
    q: "Wie läuft der Ablauf von Anfrage bis fertige Anlage?",
    a: "Erstgespräch, Drohnenaufnahme & Planung, Angebot, professionelle Montage und Anmeldung & Inbetriebnahme – alles aus einer Hand.",
  },
];

const categories: Array<{
  id: FAQCategory;
  label: string;
  icon: typeof SunMedium;
  description: string;
}> = [
  {
    id: "pv",
    label: "Photovoltaik",
    icon: SunMedium,
    description: "Module, Speicher, Ertrag und Wirtschaftlichkeit.",
  },
  {
    id: "heatpump",
    label: "Wärmepumpe",
    icon: Flame,
    description: "Kombination, Einordnung und Einsatz im Bestand.",
  },
  {
    id: "process",
    label: "Ablauf",
    icon: FileText,
    description: "Von Anfrage über Drohne bis Anmeldung.",
  },
  {
    id: "region",
    label: "Region",
    icon: MapPin,
    description: "Einzugsgebiet, Orte und Vor-Ort-Termine.",
  },
];

const FAQSection = () => {
  const [activeCategory, setActiveCategory] = useState<FAQCategory>("pv");
  const [activeQuestion, setActiveQuestion] = useState(faqs[0].q);

  const filteredFaqs = useMemo(
    () => faqs.filter((faq) => faq.category === activeCategory),
    [activeCategory],
  );

  const activeFaq =
    filteredFaqs.find((faq) => faq.q === activeQuestion) ?? filteredFaqs[0];

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
    <section id="faq" className="relative overflow-hidden py-20 md:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.08),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.08),transparent_28%)]" />

      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Häufige Fragen
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              FAQ – Photovoltaik & Wärmepumpe
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Keine starre Fragenliste, sondern die wichtigsten Themenblöcke direkt sortiert nach Planung, Technik und Region.
            </p>

            <div className="mt-8 rounded-[1.75rem] border border-border bg-card/90 p-6 shadow-card">
              <div className="inline-flex rounded-full border border-primary/15 bg-primary/10 p-3 text-primary">
                <CircleHelp className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-heading text-2xl font-bold text-foreground">
                Schnell zur passenden Antwort
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Wählen Sie links Ihren Themenbereich. Rechts sehen Sie die wichtigsten Fragen dazu mit einer fokussierten Antwortfläche statt eines langen Akkordeons.
              </p>

              <div className="mt-6 space-y-3">
                {categories.map((category) => {
                  const Icon = category.icon;
                  const isActive = category.id === activeCategory;

                  return (
                    <button
                      key={category.id}
                      type="button"
                      onClick={() => {
                        setActiveCategory(category.id);
                        const firstFaq = faqs.find((faq) => faq.category === category.id);
                        if (firstFaq) {
                          setActiveQuestion(firstFaq.q);
                        }
                      }}
                      className={`flex w-full items-start gap-4 rounded-[1.35rem] border p-4 text-left transition-all ${
                        isActive
                          ? "border-primary/30 bg-primary/8 shadow-solar"
                          : "border-border bg-background hover:border-primary/20 hover:bg-muted/40"
                      }`}
                    >
                      <div className={`rounded-2xl p-3 ${isActive ? "bg-primary/12 text-primary" : "bg-muted text-foreground"}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">{category.label}</div>
                        <div className="mt-1 text-sm text-muted-foreground">{category.description}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.06 }}
            className="rounded-[2rem] border border-border bg-card/95 p-6 shadow-card backdrop-blur-sm md:p-8"
          >
            <div className="flex flex-wrap gap-3">
              {filteredFaqs.map((faq, index) => {
                const isActive = activeFaq?.q === faq.q;

                return (
                  <motion.button
                    key={faq.q}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    type="button"
                    onClick={() => setActiveQuestion(faq.q)}
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                      isActive
                        ? "border-primary/30 bg-primary text-primary-foreground shadow-solar"
                        : "border-border bg-background text-foreground hover:border-primary/20 hover:bg-muted/50"
                    }`}
                  >
                    {faq.q}
                  </motion.button>
                );
              })}
            </div>

            <div className="mt-6 overflow-hidden rounded-[1.75rem] border border-border bg-gradient-to-br from-muted/65 to-background">
              <AnimatePresence mode="wait">
                {activeFaq && (
                  <motion.div
                    key={activeFaq.q}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.35 }}
                    className="p-6 md:p-8"
                  >
                    <div className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                      {categories.find((category) => category.id === activeCategory)?.label}
                    </div>
                    <h3 className="mt-3 font-heading text-2xl font-bold text-foreground md:text-3xl">
                      {activeFaq.q}
                    </h3>
                    <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                      {activeFaq.a}
                    </p>

                    <div className="mt-8 grid gap-3 sm:grid-cols-2">
                      <a
                        href="#kontakt"
                        className="group rounded-[1.35rem] border border-primary/20 bg-primary/8 p-4 transition-all hover:border-primary/30 hover:bg-primary/12"
                      >
                        <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                          Nächster Schritt
                        </div>
                        <div className="mt-2 flex items-center justify-between gap-4">
                          <div className="font-semibold text-foreground">Frage direkt mit uns klären</div>
                          <ArrowRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
                        </div>
                      </a>

                      <div className="rounded-[1.35rem] border border-border bg-background p-4">
                        <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                          Einordnung
                        </div>
                        <div className="mt-2 font-semibold text-foreground">
                          Klarer, wenn Dach, Verbrauch und Heizsystem zusammen betrachtet werden.
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

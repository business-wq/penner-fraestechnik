import { motion } from "framer-motion";
import { MessageSquare, ClipboardList, Wrench, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Beratung & Aufmaß",
    description:
      "Interessiert an einer Photovoltaikanlage? Wir klären in einem kostenlosen Erstgespräch, ob Ihr Dach geeignet ist und ob Ihr Verbrauchsverhalten profitiert. Innerhalb von 24 Stunden erhalten Sie ein Angebot!",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Individuelle Planung",
    description:
      "Wir entwerfen eine maßgeschneiderte Anlage: Modulanzahl, Speichergröße, Wechselrichter, Kabelwege und Wirtschaftlichkeitsberechnung. Inklusive Aufmaß per Drohne für exakte Planung.",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Professionelle Installation",
    description:
      "Gerüst, Montage und elektrischer Anschluss – alles aus einer Hand. Schnelle Montage innerhalb weniger Wochen mit Komponenten von etablierten Herstellern für maximale Langlebigkeit.",
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Anmeldung & Inbetriebnahme",
    description:
      "Einweisung und Anmeldung beim Netzbetreiber sind selbstverständlich Teil unseres Service. Ihrer reibungslosen Stromerzeugung steht nichts mehr im Wege!",
  },
];

const ProcessSection = () => {
  return (
    <section id="ablauf" className="py-20 md:py-28">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            So funktioniert's
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Ihre Vorteile & der Ablauf
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Von der Erstberatung bis zur Inbetriebnahme – wir begleiten Sie durch jeden Schritt
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group relative rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:shadow-card hover:border-primary/30"
            >
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-accent">
                  <step.icon className="h-7 w-7 text-accent-foreground" />
                </div>
                <div>
                  <span className="text-sm font-bold text-primary">{step.number}</span>
                  <h3 className="mt-1 font-heading text-xl font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

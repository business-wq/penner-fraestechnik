import { motion } from "framer-motion";
import { MessageSquare, ClipboardList, Wrench, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Beratung & Aufmaß",
    description:
      "Interessiert an einer Photovoltaikanlage? Wir klären in einem kostenlosen Erstgespräch, ob Ihr Dach geeignet ist und wie Ihr Verbrauch optimal genutzt werden kann.",
    accent: "translate-x-0",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Individuelle Planung",
    description:
      "Wir planen Modulanzahl, Speichergröße, Wechselrichter und Kabelwege als stimmiges Gesamtsystem – inklusive Drohnenaufmaß für exakte Entscheidungen.",
    accent: "translate-x-10",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Professionelle Installation",
    description:
      "Gerüst, Montage und elektrischer Anschluss kommen aus einer Hand. So bleibt der Ablauf klar, schnell und technisch sauber abgestimmt.",
    accent: "-translate-x-10",
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Anmeldung & Inbetriebnahme",
    description:
      "Wir begleiten die Anmeldung beim Netzbetreiber, übernehmen die Einweisung und sorgen dafür, dass Ihre Anlage sauber ans Netz geht.",
    accent: "translate-x-0",
  },
];

const ProcessSection = () => {
  return (
    <section id="ablauf" className="overflow-hidden py-20 md:py-28">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            So funktioniert&apos;s
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Von der Anfrage bis zur Inbetriebnahme
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Vier klare Schritte, eine saubere Planung und ein Ablauf, der für Sie verständlich bleibt.
          </p>
        </motion.div>

        <div className="relative mt-16 md:hidden">
          <div className="absolute bottom-6 left-[1.45rem] top-6 w-px bg-gradient-to-b from-primary/20 via-primary to-primary/20" />
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="relative pl-14"
              >
                <div className="absolute left-0 top-2 flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-card shadow-solar">
                  <span className="text-sm font-bold text-primary">{step.number}</span>
                </div>
                <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                      <step.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-foreground">{step.title}</h3>
                  </div>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative mt-20 hidden md:block">
          <div className="pointer-events-none absolute inset-y-0 left-1/2 w-[180px] -translate-x-1/2">
            <svg viewBox="0 0 180 1000" className="h-full w-full" preserveAspectRatio="none">
              <motion.path
                d="M90 40 C90 145 146 190 146 305 S34 465 34 590 S146 760 146 865 S90 955 90 980"
                fill="none"
                stroke="url(#timelineGradient)"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0.35 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.4, ease: "easeInOut" }}
              />
              <defs>
                <linearGradient id="timelineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="hsl(38 92% 50%)" stopOpacity="0.35" />
                  <stop offset="50%" stopColor="hsl(38 92% 50%)" stopOpacity="1" />
                  <stop offset="100%" stopColor="hsl(152 60% 42%)" stopOpacity="0.5" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="relative space-y-8">
            {steps.map((step, index) => {
              const alignLeft = index % 2 === 0;

              return (
                <div
                  key={step.number}
                  className="grid min-h-[220px] grid-cols-[minmax(0,1fr)_180px_minmax(0,1fr)] items-center"
                >
                  <div className={alignLeft ? "pr-10" : ""}>
                    {alignLeft && (
                      <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.35 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="rounded-[1.75rem] border border-border bg-card p-8 shadow-card transition-shadow hover:shadow-solar"
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                            <step.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <div className="text-sm font-bold tracking-wide text-primary">{step.number}</div>
                            <h3 className="font-heading text-2xl font-bold text-foreground">{step.title}</h3>
                          </div>
                        </div>
                        <p className="mt-5 leading-relaxed text-muted-foreground">{step.description}</p>
                      </motion.div>
                    )}
                  </div>

                  <div className="relative flex h-full items-center justify-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.75 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{ duration: 0.45, delay: index * 0.1 }}
                      className={`relative z-10 flex h-20 w-20 items-center justify-center rounded-full border border-primary/30 bg-[hsl(220,30%,8%)]/80 shadow-solar backdrop-blur-md ${step.accent}`}
                    >
                      <div className="absolute inset-2 rounded-full border border-primary/15" />
                      <span className="font-heading text-xl font-bold text-primary">{step.number}</span>
                    </motion.div>
                  </div>

                  <div className={!alignLeft ? "pl-10" : ""}>
                    {!alignLeft && (
                      <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.35 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="rounded-[1.75rem] border border-border bg-card p-8 shadow-card transition-shadow hover:shadow-solar"
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                            <step.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <div className="text-sm font-bold tracking-wide text-primary">{step.number}</div>
                            <h3 className="font-heading text-2xl font-bold text-foreground">{step.title}</h3>
                          </div>
                        </div>
                        <p className="mt-5 leading-relaxed text-muted-foreground">{step.description}</p>
                      </motion.div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

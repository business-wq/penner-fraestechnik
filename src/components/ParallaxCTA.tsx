import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { RefreshCcw } from "lucide-react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-solar.jpg";

type GoalAnswer = "pv" | "heatpump" | "combo";

type FunnelState = {
  goal?: GoalAnswer;
  roofReady?: boolean;
  heatingOld?: boolean;
};

type ChoiceButtonProps = {
  label: string;
  description: string;
  accent?: string;
  onClick: () => void;
};

const ChoiceButton = ({ label, description, accent = "text-primary", onClick }: ChoiceButtonProps) => (
  <button
    type="button"
    onClick={onClick}
    className="group rounded-[1.35rem] border border-white/12 bg-white/6 p-4 text-left transition-all hover:-translate-y-1 hover:border-primary/35 hover:bg-white/10"
  >
    <div className={`text-xs font-semibold uppercase tracking-[0.18em] ${accent}`}>{label}</div>
    <div className="mt-2 text-base font-semibold text-secondary-foreground">{description}</div>
  </button>
);

const getRecommendation = ({ goal, roofReady, heatingOld }: FunnelState) => {
  if (goal === "combo") {
    if (roofReady && heatingOld) {
      return {
        headline: "PV + Luft-Wasser-Wärmepumpe wirken hier sehr sinnvoll.",
        text: "Sie haben sowohl beim Strom als auch bei der Heizung ein klares Hebelpotenzial. Genau hier lohnt sich die kombinierte Planung meistens am stärksten.",
        tone: "Kombi-Empfehlung",
      };
    }

    if (roofReady) {
      return {
        headline: "Photovoltaik sofort, Wärmepumpe sauber vorplanen.",
        text: "Die PV ist der klare erste Schritt. Die Wärmepumpe kann sinnvoll sein, sollte aber nach Heizlast und Gebäudestatus sauber geprüft werden.",
        tone: "PV zuerst",
      };
    }

    return {
      headline: "Wärmepumpe prüfen, Photovoltaik nur mit Dach-Check.",
      text: "Ihr Fokus auf beide Themen ist nachvollziehbar. Ohne gute Dachfläche ist die Wärmepumpe der stärkere Hebel, die PV braucht einen Vor-Ort-Check.",
      tone: "Heizung zuerst",
    };
  }

  if (goal === "pv") {
    if (roofReady) {
      return {
        headline: "Photovoltaik macht sehr wahrscheinlich Sinn.",
        text: "Mit nutzbarer Dachfläche ist PV hier der naheliegende Schritt. Eine Wärmepumpe kann später ergänzend interessant werden, ist aber nicht die erste Pflicht.",
        tone: "PV-Empfehlung",
      };
    }

    return {
      headline: "PV nur nach genauer Dachprüfung entscheiden.",
      text: "Ohne klare Dachfläche wäre eine pauschale Zusage unseriös. Hier lohnt sich eher ein Vor-Ort-Check als ein Sofort-Angebot.",
      tone: "Dach-Check",
    };
  }

  if (heatingOld) {
    return {
      headline: "Eine Luft-Wasser-Wärmepumpe ist hier ein realistischer Kandidat.",
      text: "Wenn die bestehende Heizung älter ist, lohnt sich die Prüfung fast immer. Mit PV zusammen wird das System später noch stärker.",
      tone: "Wärmepumpe-Empfehlung",
    };
  }

  return {
    headline: "Wärmepumpe eher als nächster Schritt prüfen, nicht blind entscheiden.",
    text: "Wenn die Heizung noch nicht akut ist, lohnt sich meist erst die saubere Bestandsaufnahme. Dann lässt sich entscheiden, ob PV, Wärmepumpe oder die Kombination passt.",
    tone: "Bestandsanalyse",
  };
};

const ParallaxCTA = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [answers, setAnswers] = useState<FunnelState>({});
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const currentStep = answers.goal === undefined ? 0 : answers.roofReady === undefined ? 1 : answers.heatingOld === undefined ? 2 : 3;
  const recommendation = currentStep === 3 ? getRecommendation(answers) : null;

  return (
    <section ref={ref} className="relative overflow-hidden py-24 md:py-32">
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <img
          src={heroImage}
          alt="Solar Hintergrund"
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-secondary/85" />
      </motion.div>

      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl font-bold text-secondary-foreground md:text-4xl lg:text-5xl">
              Bereit für{" "}
              <span className="text-gradient-gold">Solar & Wärmepumpe</span>?
            </h2>
            <p className="mt-4 max-w-xl text-lg text-secondary-foreground/75">
              Photovoltaik und Wärmepumpe aus einer Hand. Starten Sie jetzt
              und senken Sie Ihre Energiekosten langfristig.
            </p>
            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap">
              <Button variant="hero" size="lg" className="px-8 py-6 text-lg" asChild>
                <a href="#kontakt">Jetzt Beratung sichern</a>
              </Button>
              <Button variant="heroOutline" size="lg" className="px-8 py-6 text-lg" asChild>
                <Link to="/waermepumpe">Mehr zu Wärmepumpen</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.08 }}
            className="rounded-[2rem] border border-white/12 bg-white/6 p-6 shadow-solar backdrop-blur-md md:p-8"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  30-Sekunden Check
                </div>
                <h3 className="mt-2 font-heading text-2xl font-bold text-secondary-foreground md:text-3xl">
                  Macht bei Ihnen eher PV, Wärmepumpe oder beides Sinn?
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setAnswers({})}
                className="inline-flex items-center gap-2 self-start rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm font-medium text-secondary-foreground/80 transition-colors hover:bg-white/10"
              >
                <RefreshCcw className="h-4 w-4" />
                Neu starten
              </button>
            </div>

            <div className="mt-6 flex gap-2">
              {[0, 1, 2].map((step) => (
                <div
                  key={step}
                  className={`h-2 flex-1 rounded-full transition-colors ${
                    currentStep > step ? "bg-primary" : currentStep === step ? "bg-primary/55" : "bg-white/10"
                  }`}
                />
              ))}
            </div>

            <div className="mt-6 min-h-[270px]">
              <AnimatePresence mode="wait">
                {currentStep === 0 && (
                  <motion.div
                    key="step-0"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35 }}
                  >
                    <div className="text-sm font-medium text-secondary-foreground/65">Frage 1 von 3</div>
                    <h4 className="mt-2 text-xl font-semibold text-secondary-foreground">
                      Was ist gerade Ihr Hauptziel?
                    </h4>
                    <div className="mt-5 grid gap-3 md:grid-cols-3">
                      <ChoiceButton label="A" description="Stromkosten mit PV senken" onClick={() => setAnswers({ goal: "pv" })} />
                      <ChoiceButton label="B" description="Heizung modernisieren" onClick={() => setAnswers({ goal: "heatpump" })} />
                      <ChoiceButton label="C" description="Beides zusammen denken" onClick={() => setAnswers({ goal: "combo" })} />
                    </div>
                  </motion.div>
                )}

                {currentStep === 1 && (
                  <motion.div
                    key="step-1"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35 }}
                  >
                    <div className="text-sm font-medium text-secondary-foreground/65">Frage 2 von 3</div>
                    <h4 className="mt-2 text-xl font-semibold text-secondary-foreground">
                      Haben Sie eine gut nutzbare Dachfläche?
                    </h4>
                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      <ChoiceButton
                        label="Ja"
                        description="Ja, Dachfläche ist vorhanden"
                        accent="text-emerald-300"
                        onClick={() => setAnswers((prev) => ({ ...prev, roofReady: true }))}
                      />
                      <ChoiceButton
                        label="Nein"
                        description="Noch unklar oder eher schwierig"
                        accent="text-amber-300"
                        onClick={() => setAnswers((prev) => ({ ...prev, roofReady: false }))}
                      />
                    </div>
                  </motion.div>
                )}

                {currentStep === 2 && (
                  <motion.div
                    key="step-2"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35 }}
                  >
                    <div className="text-sm font-medium text-secondary-foreground/65">Frage 3 von 3</div>
                    <h4 className="mt-2 text-xl font-semibold text-secondary-foreground">
                      Ist Ihre bestehende Heizung eher älter oder bald ein Thema?
                    </h4>
                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      <ChoiceButton
                        label="Ja"
                        description="Ja, Heizung ist älter oder soll ersetzt werden"
                        accent="text-emerald-300"
                        onClick={() => setAnswers((prev) => ({ ...prev, heatingOld: true }))}
                      />
                      <ChoiceButton
                        label="Nein"
                        description="Nein, Heizung läuft noch stabil"
                        accent="text-sky-300"
                        onClick={() => setAnswers((prev) => ({ ...prev, heatingOld: false }))}
                      />
                    </div>
                  </motion.div>
                )}

                {recommendation && (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.4 }}
                    className="rounded-[1.75rem] border border-primary/20 bg-gradient-to-br from-primary/14 via-white/8 to-sky-400/10 p-6"
                  >
                    <div className="inline-flex rounded-full border border-primary/20 bg-primary/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                      {recommendation.tone}
                    </div>
                    <h4 className="mt-4 text-2xl font-semibold text-secondary-foreground">
                      {recommendation.headline}
                    </h4>
                    <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/88">
                      {recommendation.text}
                    </p>

                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                      <Button variant="hero" size="lg" asChild>
                        <a href="#kontakt">Empfehlung kostenlos prüfen</a>
                      </Button>
                      <Button variant="heroOutline" size="lg" asChild>
                        <Link to="/waermepumpe">Wärmepumpen-Seite ansehen</Link>
                      </Button>
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

export default ParallaxCTA;

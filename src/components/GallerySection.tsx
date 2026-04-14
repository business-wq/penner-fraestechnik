import { motion } from "framer-motion";
import { ArrowRight, MapPin, SunMedium, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import solarInstallation from "@/assets/solar-installation.jpg";
import solarCompleted from "@/assets/solar-completed.jpg";
import solarAerial from "@/assets/solar-aerial.jpg";

const projects = [
  {
    src: solarInstallation,
    alt: "Photovoltaik-Montage auf einem Einfamilienhaus",
    title: "Einfamilienhaus mit Komplettsystem",
    location: "Kirchheim unter Teck",
    detail: "PV-Anlage, saubere Dachintegration und Vorbereitung für Speicher und Wärmepumpe.",
    tag: "Featured",
  },
  {
    src: solarCompleted,
    alt: "Fertige Photovoltaikanlage bei Abendlicht",
    title: "Sauber montiert, schnell umgesetzt",
    location: "Owen an der Teck",
    detail: "Klare Modulfelder, ruhige Optik und eine Anlage, die auf Alltag und Wirtschaftlichkeit geplant wurde.",
    tag: "Privatprojekt",
  },
  {
    src: solarAerial,
    alt: "Luftaufnahme einer installierten Solaranlage",
    title: "Dachflächen optimal genutzt",
    location: "Region Esslingen",
    detail: "Von oben wird sichtbar, wie wichtig Belegung, Ausrichtung und ein stimmiges Gesamtkonzept sind.",
    tag: "Luftaufnahme",
  },
];

const highlights = [
  "Klare Planung statt Standardpaket",
  "Regional vor Ort in Kirchheim und Umgebung",
  "PV, Speicher und Wärmepumpe zusammengedacht",
];

const GallerySection = () => {
  return (
    <section id="referenzen" className="relative overflow-hidden bg-muted/50 py-20 md:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.09),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.08),transparent_30%)]" />

      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Referenzen
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              Projekte, die nicht nach Standard aussehen
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Statt einer klassischen Bilderwand zeigen wir Ihnen ausgewählte Projekte mit mehr Kontext:
              Planung, Umsetzung und das Ergebnis als stimmiges Gesamtsystem.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="rounded-[1.75rem] border border-border bg-card/85 p-6 shadow-card backdrop-blur-sm"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Projektfokus
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Jede Anlage wird auf Dachfläche, Verbrauch und Erweiterungen wie Speicher oder Wärmepumpe abgestimmt.
                </p>
              </div>
              <div className="rounded-2xl bg-primary/10 p-3">
                <SunMedium className="h-6 w-6 text-primary" />
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight}
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.12 + index * 0.08 }}
                  className="flex items-center gap-3 rounded-2xl bg-muted/60 px-4 py-3"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 text-sm font-bold text-primary">
                    {index + 1}
                  </div>
                  <span className="text-sm font-medium text-foreground">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.25fr_0.75fr] lg:items-stretch">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="group relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-card lg:h-[36rem]"
          >
            <div className="relative h-[28rem] overflow-hidden lg:h-full">
              <img
                src={projects[0].src}
                alt={projects[0].alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,30%,8%)]/88 via-[hsl(220,30%,8%)]/18 to-transparent" />
              <div className="absolute right-5 top-5 rounded-full border border-white/15 bg-black/35 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary backdrop-blur-md">
                {projects[0].tag}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="absolute bottom-0 left-0 right-0 p-6 md:p-8"
              >
                <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                  <MapPin className="h-4 w-4" />
                  {projects[0].location}
                </div>
                <h3 className="mt-3 font-heading text-2xl font-bold text-secondary-foreground">
                  {projects[0].title}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-secondary-foreground/80">
                  {projects[0].detail}
                </p>
              </motion.div>
            </div>
          </motion.article>

          <div className="grid gap-6 lg:h-[36rem] lg:grid-rows-2">
            {projects.slice(1).map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08 }}
                className="group overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-card"
              >
                <div className="relative h-64 overflow-hidden lg:h-full">
                  <img
                    src={project.src}
                    alt={project.alt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,30%,8%)]/82 via-transparent to-transparent" />
                  <div className="absolute left-4 top-4 rounded-full border border-white/12 bg-black/30 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary backdrop-blur-sm">
                    {project.tag}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-xs font-semibold text-primary">
                      <MapPin className="h-3.5 w-3.5" />
                      {project.location}
                    </div>
                    <h3 className="mt-2 font-heading text-xl font-bold text-white">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/85">
                      {project.detail}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="relative mt-6 overflow-hidden rounded-[1.75rem] border border-primary/20 bg-gradient-navy p-6 shadow-solar md:p-8"
        >
          <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-primary/10 blur-2xl" />
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary">
                <Zap className="h-4 w-4" />
                Mehr Einblicke
              </div>
              <h3 className="mt-3 font-heading text-2xl font-bold text-secondary-foreground md:text-3xl">
                Weitere Projekte und Referenzen ansehen
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-secondary-foreground/75 md:text-base">
                In der Galerie finden Sie weitere Anlagen, Dachtypen und Umsetzungen aus der Region.
              </p>
            </div>
            <Button variant="hero" size="lg" className="shrink-0" asChild>
              <Link to="/galerie">
                Alle Projekte ansehen
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;

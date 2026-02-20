import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { Navbar, Footer } from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

import projekt1 from "@/assets/gallery/projekt-1.jpg";
import projekt2 from "@/assets/gallery/projekt-2.jpg";
import projekt3 from "@/assets/gallery/projekt-3.jpg";
import projekt4 from "@/assets/gallery/projekt-4.jpg";
import projekt5 from "@/assets/gallery/projekt-5.jpg";
import projekt6 from "@/assets/gallery/projekt-6.jpg";

const projects = [
  { src: projekt1, title: "Einfamilienhaus in Kirchheim", desc: "9,8 kWp · Ziegeldach", category: "Privat" },
  { src: projekt2, title: "Dachinstallation Nürtingen", desc: "12,4 kWp · Montage in Arbeit", category: "Privat" },
  { src: projekt3, title: "Bauernhof bei Owen", desc: "18,6 kWp · Vollflächenbelegung", category: "Landwirtschaft" },
  { src: projekt4, title: "Gewerbehalle Wendlingen", desc: "45 kWp · Flachdachmontage", category: "Gewerbe" },
  { src: projekt5, title: "Neubau Lenningen", desc: "8,2 kWp · Indach-Module", category: "Privat" },
  { src: projekt6, title: "Solar-Carport Weilheim", desc: "6,4 kWp · inkl. Wallbox", category: "Privat" },
];

const categories = ["Alle", "Privat", "Gewerbe", "Landwirtschaft"];

const Galerie = () => {
  const [filter, setFilter] = useState("Alle");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === "Alle" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Galerie – Unsere Photovoltaik-Projekte | Marklewitz Solar"
        description="Entdecken Sie unsere abgeschlossenen Photovoltaik-Projekte in der Region Kirchheim unter Teck, Owen und Umgebung. Referenzen für Privat und Gewerbe."
        keywords="Photovoltaik Galerie, Solaranlage Referenzen, PV Projekte Kirchheim"
      />
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-navy pt-24 pb-16">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Unsere Referenzen
            </span>
            <h1 className="mt-3 font-heading text-4xl font-bold text-secondary-foreground md:text-5xl">
              Projekt-Galerie
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-secondary-foreground/85">
              Überzeugen Sie sich selbst – hier finden Sie eine Auswahl unserer erfolgreich
              abgeschlossenen Photovoltaik-Installationen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          {/* Filter pills */}
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                  filter === cat
                    ? "bg-primary text-primary-foreground shadow-solar"
                    : "border border-border bg-card text-muted-foreground hover:border-primary/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="group relative cursor-pointer overflow-hidden rounded-2xl border border-border bg-card"
                  onClick={() => setLightbox(projects.indexOf(project))}
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={project.src}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  {/* Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[hsl(220,30%,8%)]/80 via-transparent to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <ZoomIn className="absolute right-4 top-4 h-6 w-6 text-secondary-foreground" />
                    <h3 className="font-heading text-lg font-bold text-secondary-foreground">{project.title}</h3>
                    <p className="text-sm text-secondary-foreground/80">{project.desc}</p>
                  </div>
                  {/* Always-visible label on mobile */}
                  <div className="p-4 md:hidden">
                    <h3 className="font-heading font-bold text-foreground">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.desc}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[hsl(220,30%,8%)]/95 p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute right-4 top-4 rounded-full bg-card/20 p-2 text-secondary-foreground backdrop-blur-sm transition hover:bg-card/40"
              aria-label="Schließen"
            >
              <X className="h-6 w-6" />
            </button>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="max-h-[85vh] max-w-4xl overflow-hidden rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={projects[lightbox].src}
                alt={projects[lightbox].title}
                className="h-full w-full object-contain"
              />
              <div className="bg-card p-4">
                <h3 className="font-heading text-lg font-bold text-foreground">{projects[lightbox].title}</h3>
                <p className="text-sm text-muted-foreground">{projects[lightbox].desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Galerie;

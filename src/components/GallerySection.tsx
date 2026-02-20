import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import solarInstallation from "@/assets/solar-installation.jpg";
import solarCompleted from "@/assets/solar-completed.jpg";
import solarAerial from "@/assets/solar-aerial.jpg";

const images = [
  { src: solarInstallation, alt: "Professionelle Solarinstallation" },
  { src: solarCompleted, alt: "Fertige Solaranlage bei Sonnenuntergang" },
  { src: solarAerial, alt: "Luftaufnahme Solaranlage" },
];

const GallerySection = () => {
  return (
    <section id="referenzen" className="bg-muted/50 py-20 md:py-28">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Unsere Arbeit
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Referenzen
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Überzeugen Sie sich von unserer professionellen Arbeit
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group overflow-hidden rounded-2xl"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110 sm:h-72"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <Button variant="outline" size="lg" asChild>
            <Link to="/galerie">
              Alle Projekte ansehen
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;

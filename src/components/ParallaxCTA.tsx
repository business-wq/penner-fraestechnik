import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-solar.jpg";

const ParallaxCTA = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

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

      <div className="container relative z-10 mx-auto max-w-3xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-3xl font-bold text-secondary-foreground md:text-4xl lg:text-5xl">
            Bereit für Ihre eigene{" "}
            <span className="text-gradient-gold">Solaranlage</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-secondary-foreground/75">
            Komplette Planung und Installation aus einer Hand. Starten Sie jetzt
            und sparen Sie langfristig Stromkosten.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button variant="hero" size="lg" className="px-8 py-6 text-lg" asChild>
              <a href="#kontakt">Jetzt Beratung sichern</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ParallaxCTA;

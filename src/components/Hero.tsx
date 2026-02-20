import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroImage from "@/assets/hero-solar.jpg";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Parallax Background */}
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <img
          src={heroImage}
          alt="Solaranlage auf einem Hausdach in Kirchheim unter Teck"
          className="h-full w-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-hero/80" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <span className="mb-4 inline-block rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
            ☀️ Ihr Partner für Solarenergie in der Region
          </span>

          <h1 className="mt-6 font-heading text-4xl font-bold leading-tight text-secondary-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Solaranlagen aus{" "}
            <span className="text-gradient-gold">Kirchheim unter Teck</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-secondary-foreground/75 sm:text-xl">
            Qualitätsprodukte, Top-Service und unschlagbare Preise. Erleben Sie
            die Freiheit, Ihren eigenen Strom zu erzeugen!
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button variant="hero" size="lg" className="px-8 py-6 text-lg" asChild>
              <a href="#kontakt">Kostenloses Erstgespräch</a>
            </Button>
            <Button variant="heroOutline" size="lg" className="px-8 py-6 text-lg" asChild>
              <a href="tel:+491627382351">
                <Phone className="mr-2 h-5 w-5" />
                0162-7382351
              </a>
            </Button>
          </div>

          <p className="mt-6 text-sm text-secondary-foreground/60">
            ✓ Angebot innerhalb 24 Std. · ✓ Montage in wenigen Wochen · ✓ Alles aus einer Hand
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8"
        >
          <div className="h-10 w-6 rounded-full border-2 border-primary/40 flex items-start justify-center p-1.5">
            <div className="h-2 w-1.5 rounded-full bg-primary" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

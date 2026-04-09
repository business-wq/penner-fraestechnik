import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Peter Greiner",
    text: "Herzlichen Dank an Herrn Marklewitz, der die Planung professionell und kompetent durchgeführt hat. Die Kommunikation war sehr angenehm, die Installation lief reibungslos und zügig. Die Anlage funktioniert einwandfrei – großes Lob!",
    rating: 5,
  },
  {
    name: "Kristina Soldo",
    text: "Ganz großes Lob an Sven Marklewitz! Planung und Ablauf wurden im Vorfeld gut erklärt. Die PV-Anlage wurde innerhalb weniger Wochen geliefert und montiert. Von der Planung bis zur Fertigstellung alles top!",
    rating: 5,
  },
  {
    name: "Daniela Denk",
    text: "Sehr zufrieden! Ein sehr guter Berater, der mich persönlich durch die gesamte Planung gesteuert und unterstützt hat. Kann ich nur weiterempfehlen.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="kundenstimmen" className="py-20 md:py-28">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Kundenstimmen
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Das sagen unsere Kunden
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative rounded-lg border border-border bg-card p-8 shadow-card"
            >
              <Quote className="mb-4 h-8 w-8 text-primary/30" />
              <div className="mb-4 flex gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="leading-relaxed text-muted-foreground">"{t.text}"</p>
              <p className="mt-6 font-heading font-bold text-foreground">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

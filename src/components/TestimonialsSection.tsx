import { motion } from "framer-motion";
import { Quote, Star, Sparkles } from "lucide-react";

const testimonials = [
  {
    name: "Peter Greiner",
    text: "Herzlichen Dank an Herrn Marklewitz, der die Planung professionell und kompetent durchgeführt hat. Die Kommunikation war sehr angenehm, die Installation lief reibungslos und zügig. Die Anlage funktioniert einwandfrei – großes Lob!",
    rating: 5,
    label: "Planung & Umsetzung",
  },
  {
    name: "Kristina Soldo",
    text: "Ganz großes Lob an Sven Marklewitz! Planung und Ablauf wurden im Vorfeld gut erklärt. Die PV-Anlage wurde innerhalb weniger Wochen geliefert und montiert. Von der Planung bis zur Fertigstellung alles top!",
    rating: 5,
    label: "Schnelle Montage",
  },
  {
    name: "Daniela Denk",
    text: "Sehr zufrieden! Ein sehr guter Berater, der mich persönlich durch die gesamte Planung gesteuert und unterstützt hat. Kann ich nur weiterempfehlen.",
    rating: 5,
    label: "Persönliche Betreuung",
  },
];

const renderStars = (rating: number) =>
  Array.from({ length: rating }).map((_, index) => (
    <Star key={index} className="h-4 w-4 fill-primary text-primary" />
  ));

const TestimonialsSection = () => {
  const [featured, secondaryOne, secondaryTwo] = testimonials;

  return (
    <section id="kundenstimmen" className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.08),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.07),transparent_28%)]" />

      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Kundenstimmen
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              Vertrauen, das nicht gestellt wirkt
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Für uns zählt nicht nur die Anlage, sondern wie klar, zuverlässig und angenehm der ganze Ablauf erlebt wird.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="rounded-[1.75rem] border border-border bg-card/90 p-6 shadow-card backdrop-blur-sm"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary">
                  <Sparkles className="h-4 w-4" />
                  Echtes Feedback
                </div>
                <h3 className="mt-2 font-heading text-2xl font-bold text-foreground">
                  Persönlich, direkt und regional
                </h3>
              </div>
              <div className="rounded-2xl bg-primary/10 px-4 py-3 text-right">
                <div className="font-heading text-2xl font-bold text-foreground">5.0</div>
                <div className="mt-1 flex justify-end gap-1">{renderStars(5)}</div>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {["Saubere Kommunikation", "Zuverlässige Umsetzung", "Klare Ansprechpartner"].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.12 + index * 0.08 }}
                  className="rounded-2xl bg-muted/60 px-4 py-3 text-sm font-medium text-foreground"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.article
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative overflow-hidden rounded-[2rem] border border-primary/20 bg-gradient-navy p-8 shadow-solar md:p-10"
          >
            <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-primary/10 blur-3xl" />
            <Quote className="relative h-12 w-12 text-primary/35" />
            <div className="relative mt-6 flex gap-1">{renderStars(featured.rating)}</div>
            <p className="relative mt-6 max-w-2xl font-heading text-2xl font-semibold leading-relaxed text-secondary-foreground md:text-[2rem]">
              “{featured.text}”
            </p>
            <div className="relative mt-8 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-white/12 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                {featured.label}
              </span>
              <span className="font-heading text-lg font-bold text-secondary-foreground">
                {featured.name}
              </span>
            </div>
          </motion.article>

          <div className="relative grid gap-6">
            {[secondaryOne, secondaryTwo].map((testimonial, index) => (
              <motion.article
                key={testimonial.name}
                initial={{ opacity: 0, x: 36, rotate: index === 0 ? 1.2 : -1.2 }}
                whileInView={{ opacity: 1, x: 0, rotate: index === 0 ? 1.2 : -1.2 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-[1.75rem] border border-border bg-card p-7 shadow-card transition-shadow hover:shadow-solar ${
                  index === 0 ? "lg:translate-x-6" : "lg:-translate-x-2"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
                    {testimonial.label}
                  </div>
                  <Quote className="h-7 w-7 text-primary/25" />
                </div>
                <div className="mt-5 flex gap-1">{renderStars(testimonial.rating)}</div>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  “{testimonial.text}”
                </p>
                <p className="mt-6 font-heading text-lg font-bold text-foreground">{testimonial.name}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

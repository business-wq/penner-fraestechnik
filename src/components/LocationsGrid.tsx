import { motion } from "framer-motion";
import { ArrowRight, Compass, MapPin, Route } from "lucide-react";
import { Link } from "react-router-dom";
import { locations } from "@/data/locations";

const featuredLocations = locations.slice(0, 6);
const secondaryLocations = locations.slice(6);

const LocationsGrid = () => {
  return (
    <section id="standorte" className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.08),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.07),transparent_26%)]" />

      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Einzugsgebiet
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              Photovoltaik & Wärmepumpe in Ihrer Nähe
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Wir sind regional unterwegs und betreuen Projekte rund um Owen, Kirchheim unter Teck und den gesamten Landkreis Esslingen mit kurzen Wegen und persönlichem Ansprechpartner.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="rounded-[1.75rem] border border-border bg-card/90 p-6 shadow-card backdrop-blur-sm"
          >
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-muted/60 p-4">
                <Compass className="h-5 w-5 text-primary" />
                <div className="mt-4 font-heading text-2xl font-bold text-foreground">10</div>
                <p className="mt-1 text-sm text-muted-foreground">Standortseiten im Einzugsgebiet</p>
              </div>
              <div className="rounded-2xl bg-muted/60 p-4">
                <MapPin className="h-5 w-5 text-primary" />
                <div className="mt-4 font-heading text-2xl font-bold text-foreground">Owen</div>
                <p className="mt-1 text-sm text-muted-foreground">Firmensitz und Ausgangspunkt</p>
              </div>
              <div className="rounded-2xl bg-muted/60 p-4">
                <Route className="h-5 w-5 text-primary" />
                <div className="mt-4 font-heading text-2xl font-bold text-foreground">kurz</div>
                <p className="mt-1 text-sm text-muted-foreground">Anfahrtswege für Beratung und Service</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredLocations.map((loc, index) => (
              <motion.div
                key={loc.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.06 }}
              >
                <Link
                  to={`/${loc.slug}`}
                  className="group flex h-full flex-col justify-between overflow-hidden rounded-[1.75rem] border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-solar"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <div className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
                        {loc.region}
                      </div>
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>

                    <h3 className="mt-5 font-heading text-2xl font-bold text-foreground">
                      {loc.city}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {loc.localInfo}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-border/70 pt-4">
                    <div>
                      <div className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Distanz</div>
                      <div className="mt-1 font-semibold text-foreground">{loc.distanceFromOwen}</div>
                    </div>
                    <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      Standortseite
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-[2rem] border border-primary/20 bg-gradient-navy p-6 shadow-solar md:p-8"
          >
            <div className="text-sm font-semibold uppercase tracking-wider text-primary">
              Weitere Orte
            </div>
            <h3 className="mt-3 font-heading text-2xl font-bold text-secondary-foreground md:text-3xl">
              Auch in Ihrer Umgebung schnell vor Ort
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-secondary-foreground/75 md:text-base">
              Neben den Hauptstandorten betreuen wir weitere Orte in der Region und bleiben durch die Nähe zu Owen flexibel in Beratung, Aufmaß und Umsetzung.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {secondaryLocations.map((loc, index) => (
                <motion.div
                  key={loc.slug}
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.06 }}
                >
                  <Link
                    to={`/${loc.slug}`}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-secondary-foreground transition-all hover:border-primary/30 hover:bg-white/10"
                  >
                    <MapPin className="h-3.5 w-3.5 text-primary" />
                    {loc.city}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationsGrid;

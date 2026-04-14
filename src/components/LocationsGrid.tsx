import { motion } from "framer-motion";
import { ArrowRight, Compass, MapPin, Route } from "lucide-react";
import { Link } from "react-router-dom";
import { locations } from "@/data/locations";

const featuredSlugs = new Set([
  "photovoltaik-kirchheim-unter-teck",
  "photovoltaik-owen",
  "photovoltaik-nuertingen",
  "photovoltaik-esslingen",
]);

const featuredLocations = locations.filter((location) => featuredSlugs.has(location.slug));
const secondaryLocations = locations.filter((location) => !featuredSlugs.has(location.slug));

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

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="grid gap-5 sm:grid-cols-2">
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
                  className="group block overflow-hidden rounded-[1.75rem] border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-solar"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
                      {loc.region}
                    </div>
                    <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  </div>

                  <h3 className="mt-5 font-heading text-[1.7rem] font-bold leading-tight text-foreground">
                    {loc.city}
                  </h3>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl bg-muted/60 px-4 py-3">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                        Distanz
                      </div>
                      <div className="mt-1 text-sm font-semibold text-foreground">{loc.distanceFromOwen}</div>
                    </div>
                    <div className="rounded-2xl bg-muted/60 px-4 py-3">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                        Einwohner
                      </div>
                      <div className="mt-1 text-sm font-semibold text-foreground">{loc.population}</div>
                    </div>
                  </div>

                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Standortseite ansehen
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-secondary-foreground/75 md:text-base">
              Für Dettingen, Lenningen, Wendlingen, Notzingen, Weilheim und weitere Orte bleiben Beratung, Aufmaß und Umsetzung regional organisiert und ohne lange Wege.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {secondaryLocations.map((loc, index) => (
                <motion.div
                  key={loc.slug}
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <Link
                    to={`/${loc.slug}`}
                    className="flex items-center justify-between gap-3 rounded-[1.25rem] border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-secondary-foreground transition-all hover:border-primary/30 hover:bg-white/10"
                  >
                    <span className="inline-flex items-center gap-2">
                      <MapPin className="h-3.5 w-3.5 text-primary" />
                      {loc.city}
                    </span>
                    <ArrowRight className="h-4 w-4 text-primary/90" />
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-secondary-foreground/60">
                  Firmensitz
                </div>
                <div className="mt-2 text-base font-semibold text-secondary-foreground">Owen an der Teck</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-secondary-foreground/60">
                  Einsatzgebiet
                </div>
                <div className="mt-2 text-base font-semibold text-secondary-foreground">Landkreis Esslingen</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-secondary-foreground/60">
                  Termine
                </div>
                <div className="mt-2 text-base font-semibold text-secondary-foreground">Kurzfristig vor Ort</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationsGrid;

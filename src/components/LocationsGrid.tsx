import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { locations } from "@/data/locations";

const LocationsGrid = () => {
  return (
    <section id="standorte" className="py-12 md:py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Einzugsgebiet
          </span>
          <h2 className="mt-2 font-heading text-2xl font-bold text-foreground md:text-3xl">
            Photovoltaik in Ihrer Nähe
          </h2>
        </motion.div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {locations.map((loc) => (
            <Link
              key={loc.slug}
              to={`/${loc.slug}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-all hover:border-primary/40 hover:shadow-sm"
            >
              <MapPin className="h-3.5 w-3.5 text-primary" />
              {loc.city}
              <ArrowRight className="h-3 w-3 text-muted-foreground" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsGrid;

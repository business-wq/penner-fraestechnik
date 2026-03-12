import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Phone, CheckCircle, ArrowRight, ChevronRight, Sun, Calendar, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar, Footer } from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { locations, type LocationData } from "@/data/locations";
import heroImage from "@/assets/hero-solar.jpg";

const LocationPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = locations.find((l) => l.slug === slug);

  if (!location) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main id="main" className="flex flex-1 items-center justify-center pt-16">
          <div className="text-center">
            <h1 className="font-heading text-3xl font-bold text-foreground">Seite nicht gefunden</h1>
            <Link to="/" className="mt-4 inline-block text-primary hover:underline">Zurück zur Startseite</Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const otherLocations = locations.filter((l) => l.slug !== slug).slice(0, 6);

  return (
    <div className="min-h-screen">
      <SEOHead
        title={location.metaTitle}
        description={location.metaDescription}
        keywords={location.keywords}
      />
      <Navbar />

      <main id="main">
      {/* Hero */}
      <section className="relative overflow-hidden pt-16">
        <div className="absolute inset-0 -z-10">
          <img src={heroImage} alt={`Solaranlage ${location.city}`} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220,30%,8%)]/95 to-[hsl(215,28%,14%)]/90" />
        </div>

        <div className="container mx-auto max-w-6xl px-4 py-20 md:py-28">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-secondary-foreground/70" itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link to="/" itemProp="item" className="hover:text-primary text-secondary-foreground/80"><span itemProp="name">Startseite</span></Link>
                <meta itemProp="position" content="1" />
              </li>
              <ChevronRight className="h-3 w-3" />
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name" className="text-primary">{location.city}</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </nav>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-2 text-primary">
              <MapPin className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">{location.region} · {location.distanceFromOwen} von Owen</span>
            </div>
            <h1 className="mt-4 font-heading text-4xl font-bold text-secondary-foreground md:text-5xl lg:text-6xl">
              {location.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-secondary-foreground/90">
              {location.description}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button variant="hero" size="lg" className="px-8 py-6 text-lg" asChild>
                <a href="#kontakt-lokal">Kostenloses Erstgespräch</a>
              </Button>
              <Button variant="heroOutline" size="lg" className="px-8 py-6 text-lg" asChild>
                <a href="tel:+491627382351">
                  <Phone className="mr-2 h-5 w-5" />
                  0162-7382351
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Local Info */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
                Warum Marklewitz Solar in{" "}
                <span className="text-gradient-gold">{location.city}</span>?
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {location.localInfo}
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Mit unserem Standort in Owen (nur {location.distanceFromOwen} entfernt) sind wir schnell bei Ihnen vor Ort.
                Einwohner: {location.population} · {location.region}
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="space-y-4">
                {location.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-solar-green" />
                    <p className="text-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-center font-heading text-3xl font-bold text-foreground md:text-4xl">
            Unsere Leistungen in {location.city}
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { title: "Beratung & Planung", desc: "Kostenlose Erstberatung, Dachvermessung per Drohne und individuelle Anlagenplanung für Ihr Objekt.", icon: Sun },
              { title: "Installation", desc: "Professionelle Montage durch erfahrene Handwerker. Gerüst, Module und elektrischer Anschluss aus einer Hand.", icon: Calendar },
              { title: "Service & Anmeldung", desc: "Anmeldung beim Netzbetreiber, Einweisung und langfristiger Support. Wir sind auch nach der Installation für Sie da.", icon: MessageCircle },
            ].map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-border bg-card p-8"
              >
                <s.icon className="mb-4 h-8 w-8 text-primary" />
                <h3 className="font-heading text-xl font-bold text-foreground">{s.title}</h3>
                <p className="mt-3 text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="kontakt-lokal" className="bg-gradient-navy py-16 md:py-24">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl font-bold text-secondary-foreground md:text-4xl">
              Jetzt Beratung für {location.city} sichern
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-secondary-foreground/90">
              Kostenlose Erstberatung – individuelles Angebot innerhalb von 24 Stunden. 
              Wir freuen uns auf Ihr Projekt!
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button variant="hero" size="lg" className="px-8 py-6 text-lg" asChild>
                <a href="https://calendly.com/svenmarklewitz-p9a/15min" target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 h-5 w-5" />
                  Termin buchen
                </a>
              </Button>
              <Button variant="whatsapp" size="lg" className="px-8 py-6 text-lg" asChild>
                <a href={`https://wa.me/491627382351?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Photovoltaikanlage%20in%20${location.city}.%20Bitte%20kontaktieren%20Sie%20mich.`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Other Locations */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-center font-heading text-2xl font-bold text-foreground md:text-3xl">
            Weitere Standorte in unserer Region
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {otherLocations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/${loc.slug}`}
                className="group flex items-center justify-between rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-card"
              >
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-heading font-bold text-foreground">Photovoltaik {loc.city}</p>
                    <p className="text-sm text-muted-foreground">{loc.distanceFromOwen} von Owen</p>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      </main>
      <Footer />

      {/* Location-specific Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "@id": `https://www.marklewitz-solar.de/${location.slug}#service`,
                "name": `Photovoltaik Installation ${location.city}`,
                "description": location.description,
                "provider": {
                  "@type": "LocalBusiness",
                  "@id": "https://www.marklewitz-solar.de/#business",
                  "name": "Marklewitz Solar",
                },
                "areaServed": {
                  "@type": "City",
                  "name": location.city,
                },
                "serviceType": "Photovoltaik Installation",
                "offers": {
                  "@type": "Offer",
                  "availability": "https://schema.org/InStock",
                  "priceCurrency": "EUR",
                  "description": `Kostenlose Erstberatung für Photovoltaik in ${location.city}`,
                },
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Startseite",
                    "item": "https://www.marklewitz-solar.de/",
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": `Photovoltaik ${location.city}`,
                    "item": `https://www.marklewitz-solar.de/${location.slug}`,
                  },
                ],
              },
              {
                "@type": "LocalBusiness",
                "@id": "https://www.marklewitz-solar.de/#business",
              },
            ],
          }),
        }}
      />
    </div>
  );
};

export default LocationPage;

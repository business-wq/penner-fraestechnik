import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Calendar,
  CheckCircle,
  ChevronRight,
  Flame,
  Leaf,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sun,
  Wrench,
} from "lucide-react";
import { Navbar, Footer } from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-solar.jpg";
import solarInstallation from "@/assets/solar-installation.jpg";
import solarCompleted from "@/assets/solar-completed.jpg";
import solarAerial from "@/assets/solar-aerial.jpg";
import projektNeubau from "@/assets/gallery/projekt-5.jpg";

const benefits = [
  {
    icon: Leaf,
    title: "Effizient heizen",
    text: "Wärmepumpen nutzen Umweltenergie aus Luft, Erde oder Wasser und wandeln sie effizient in Heizwärme für Ihr Zuhause um.",
  },
  {
    icon: Sun,
    title: "Ideal mit Photovoltaik",
    text: "In Kombination mit Ihrer PV-Anlage betreiben Sie die Wärmepumpe zu großen Teilen mit eigenem Solarstrom und senken Ihre laufenden Kosten.",
  },
  {
    icon: ShieldCheck,
    title: "Förderfähig und zukunftssicher",
    text: "Wir beraten Sie allgemein zu sinnvollen Förderwegen und planen die Anlage so, dass sie langfristig zu Ihrem Gebäude passt.",
  },
];

const systems = [
  {
    title: "Luft-Wasser-Wärmepumpe",
    text: "Die häufigste Lösung für Einfamilienhäuser. Gute Effizienz, überschaubarer Installationsaufwand und ideal für Modernisierungen.",
  },
  {
    title: "Sole-Wasser-Wärmepumpe",
    text: "Nutzt Erdwärme über Sonden oder Kollektoren und erreicht sehr stabile Wirkungsgrade bei höherem Planungsaufwand.",
  },
  {
    title: "Passend für Neubau und Sanierung",
    text: "Besonders stark in gut gedämmten Gebäuden, bei Fußbodenheizung oder Niedertemperatur-Heizkörpern und beim Umstieg von Öl oder Gas.",
  },
];

const process = [
  {
    icon: MessageCircle,
    title: "Beratung vor Ort",
    text: "Wir prüfen Ihr Gebäude, Ihren Verbrauch und Ihre Ziele in Kirchheim unter Teck, Owen und der gesamten Region.",
  },
  {
    icon: Wrench,
    title: "Planung der passenden Lösung",
    text: "Wir dimensionieren Wärmepumpe, Hydraulik und auf Wunsch die passende Photovoltaikanlage als abgestimmtes Gesamtsystem.",
  },
  {
    icon: Flame,
    title: "Installation und Inbetriebnahme",
    text: "Von der Umsetzung bis zur Einweisung begleiten wir Ihr Projekt strukturiert und mit einem festen Ansprechpartner.",
  },
];

const galleryImages = [
  {
    src: solarInstallation,
    alt: "Energieprojekt am Einfamilienhaus in der Region Kirchheim",
    title: "Gesamtsystem aus einer Hand",
    text: "Wärmepumpe, Photovoltaik und Speicher sollten technisch sauber aufeinander abgestimmt werden.",
  },
  {
    src: projektNeubau,
    alt: "Modernes Wohnhaus als Beispiel für Wärmepumpe und Photovoltaik",
    title: "Ideal für Neubau und Sanierung",
    text: "Gerade bei modernisierten Gebäuden spielt die Wärmepumpe ihre Stärken besonders effizient aus.",
  },
  {
    src: solarCompleted,
    alt: "Abgeschlossenes Energieprojekt auf einem Wohnhaus",
    title: "Regionale Projekte mit Substanz",
    text: "Wir denken Hausenergie ganzheitlich und planen Lösungen, die langfristig wirtschaftlich bleiben.",
  },
  {
    src: solarAerial,
    alt: "Luftaufnahme eines Hauses mit moderner Energietechnik",
    title: "PV und Wärmepumpe kombiniert",
    text: "Wenn Dachfläche, Speicher und Heiztechnik zusammenpassen, steigt Ihr Eigenverbrauch deutlich.",
  },
];

const Waermepumpe = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.marklewitz-solar.de/waermepumpe#service",
        name: "Wärmepumpen Beratung und Installation",
        description:
          "Beratung, Planung und Installation von Wärmepumpen in Kirchheim unter Teck, Owen und Umgebung durch Marklewitz Solar.",
        provider: {
          "@type": "LocalBusiness",
          "@id": "https://www.marklewitz-solar.de/#business",
          name: "Marklewitz Solar",
        },
        areaServed: [
          {
            "@type": "AdministrativeArea",
            name: "Kirchheim unter Teck",
          },
          {
            "@type": "AdministrativeArea",
            name: "Owen an der Teck",
          },
          {
            "@type": "AdministrativeArea",
            name: "Landkreis Esslingen",
          },
        ],
        serviceType: "Wärmepumpen Beratung und Installation",
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceCurrency: "EUR",
          description: "Kostenlose Erstberatung für Wärmepumpen und PV-Kombinationen",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Startseite",
            item: "https://www.marklewitz-solar.de/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Wärmepumpe",
            item: "https://www.marklewitz-solar.de/waermepumpe",
          },
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.marklewitz-solar.de/#business",
      },
    ],
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <SEOHead
        title="Wärmepumpe Kirchheim | Marklewitz Solar"
        description="Wärmepumpen in Kirchheim unter Teck, Owen und Esslingen. Beratung, Planung und Installation aus einer Hand – ideal in Kombination mit Photovoltaik."
        canonical="https://www.marklewitz-solar.de/waermepumpe"
        keywords="Wärmepumpe Kirchheim, Wärmepumpe Owen, Wärmepumpe Esslingen, Wärmepumpe mit Photovoltaik, Marklewitz Solar"
      />
      <Navbar />
      <main id="main">
        <section className="relative overflow-hidden pt-16">
          <div className="absolute inset-0 -z-10">
            <img src={heroImage} alt="Wärmepumpe und Solaranlage in der Region Kirchheim" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220,30%,8%)]/95 to-[hsl(215,28%,14%)]/90" />
          </div>

          <div className="container mx-auto max-w-6xl px-4 py-20 md:py-28">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol
                className="flex items-center gap-2 text-sm text-secondary-foreground/70"
                itemScope
                itemType="https://schema.org/BreadcrumbList"
              >
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                  <Link to="/" itemProp="item" className="hover:text-primary text-secondary-foreground/80">
                    <span itemProp="name">Startseite</span>
                  </Link>
                  <meta itemProp="position" content="1" />
                </li>
                <ChevronRight className="h-3 w-3" />
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                  <span itemProp="name" className="text-primary">
                    Wärmepumpe
                  </span>
                  <meta itemProp="position" content="2" />
                </li>
              </ol>
            </nav>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-2 text-primary">
                <MapPin className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-wider">
                  Kirchheim unter Teck · Owen · Esslingen und Umgebung
                </span>
              </div>
              <h1 className="mt-4 max-w-4xl font-heading text-4xl font-bold text-secondary-foreground md:text-5xl lg:text-6xl">
                Wärmepumpe vom regionalen Fachbetrieb
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-secondary-foreground/90">
                Wir planen und begleiten Wärmepumpen-Lösungen für Einfamilienhäuser und Sanierungen in der Region.
                Besonders stark wird das System in Kombination mit Photovoltaik und Speicher.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button variant="hero" size="lg" className="px-8 py-6 text-lg" asChild>
                  <a href="/#kontakt">Jetzt Wärmepumpe anfragen</a>
                </Button>
                <Button variant="heroOutline" size="lg" className="px-8 py-6 text-lg" asChild>
                  <a href="https://calendly.com/svenmarklewitz-p9a/15min" target="_blank" rel="noopener noreferrer">
                    <Calendar className="mr-2 h-5 w-5" />
                    Termin buchen
                  </a>
                </Button>
              </div>
              <p className="mt-6 text-sm text-secondary-foreground/70">
                Beratung, Planung und Installation aus einer Hand. Förderhinweise besprechen wir transparent und ohne pauschale Versprechen.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                Ihre Vorteile
              </span>
              <h2 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-4xl">
                Warum sich eine Wärmepumpe lohnt
              </h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="rounded-lg border border-border bg-card p-8"
                >
                  <benefit.icon className="mb-4 h-8 w-8 text-primary" />
                  <h3 className="font-heading text-xl font-bold text-foreground">{benefit.title}</h3>
                  <p className="mt-3 text-muted-foreground">{benefit.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-muted/50 py-16 md:py-24">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Typen & Einsatzfälle
                </span>
                <h2 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-4xl">
                  Welche Wärmepumpe passt zu Ihrem Haus?
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Welche Lösung sinnvoll ist, hängt von Gebäudezustand, Heizsystem und gewünschter Eigenversorgung ab.
                  Wir betrachten nicht nur die Wärmepumpe isoliert, sondern das gesamte Energiekonzept.
                </p>
                <div className="mt-8 space-y-4">
                  {systems.map((system, index) => (
                    <motion.div
                      key={system.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 }}
                      className="rounded-lg border border-border bg-card p-5"
                    >
                      <h3 className="font-heading text-xl font-bold text-foreground">{system.title}</h3>
                      <p className="mt-2 text-muted-foreground">{system.text}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <div className="rounded-2xl border border-primary/15 bg-gradient-to-br from-primary/10 via-card to-card p-8 shadow-card">
                  <h3 className="font-heading text-2xl font-bold text-foreground">
                    Besonders wirtschaftlich mit PV
                  </h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    Wenn Ihre Wärmepumpe tagsüber mit selbst erzeugtem Solarstrom läuft, steigt der Eigenverbrauch Ihrer PV-Anlage
                    und gleichzeitig sinken Ihre Heizkosten. Genau auf diese Kombination ist Marklewitz Solar spezialisiert.
                  </p>
                  <ul className="mt-6 space-y-3">
                    {[
                      "Mehr Eigenverbrauch statt teurem Netzstrom",
                      "Bessere Planbarkeit Ihrer Energiekosten",
                      "Ein Ansprechpartner für Wärmepumpe und PV",
                      "Saubere Abstimmung von Leistung, Speicher und Nutzung",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-foreground">
                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-solar-green" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="solar" size="lg" className="mt-8 w-full" asChild>
                    <a href="/#kontakt">Kostenlos beraten lassen</a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                Eindrücke
              </span>
              <h2 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-4xl">
                Galerie rund um moderne Haustechnik
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Beispiele aus unserem Projektumfeld zeigen, wie moderne Energielösungen im Wohnbereich heute aussehen.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={image.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card"
                >
                  <div className="overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-bold text-foreground">{image.title}</h3>
                    <p className="mt-2 text-muted-foreground">{image.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                Regionaler Service
              </span>
              <h2 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-4xl">
                So begleiten wir Ihr Projekt
              </h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {process.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="rounded-lg border border-border bg-card p-8"
                >
                  <step.icon className="mb-4 h-8 w-8 text-primary" />
                  <h3 className="font-heading text-xl font-bold text-foreground">{step.title}</h3>
                  <p className="mt-3 text-muted-foreground">{step.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-navy py-16 md:py-24">
          <div className="container mx-auto max-w-3xl px-4 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-3xl font-bold text-secondary-foreground md:text-4xl">
                Wärmepumpe in der Region anfragen
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-secondary-foreground/90">
                Sie möchten Öl oder Gas ablösen oder PV und Wärmepumpe gemeinsam planen? Wir beraten Sie kostenlos und unverbindlich.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button variant="hero" size="lg" className="px-8 py-6 text-lg" asChild>
                  <a href="/#kontakt">Kontakt aufnehmen</a>
                </Button>
                <Button variant="whatsapp" size="lg" className="px-8 py-6 text-lg" asChild>
                  <a
                    href="https://wa.me/491627382351?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20W%C3%A4rmepumpe%20in%20der%20Region%20Kirchheim.%20Bitte%20kontaktieren%20Sie%20mich."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp
                  </a>
                </Button>
              </div>
              <div className="mt-8">
                <Link
                  to="/blog/waermepumpe-und-photovoltaik-perfekte-kombination"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80"
                >
                  Mehr zur Kombination aus Wärmepumpe und Photovoltaik
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </div>
  );
};

export default Waermepumpe;

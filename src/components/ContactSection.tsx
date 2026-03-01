import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Calendar, MessageCircle, MapPin } from "lucide-react";

const WHATSAPP_NUMBER = "491627382351";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const lines: string[] = [
      "Hallo Sven! 👋",
      "Ich interessiere mich für eine Solaranlage und würde gerne ein kostenloses Erstgespräch vereinbaren.",
      "",
      `*Name:* ${formData.name}`,
      `*Telefon:* ${formData.phone}`,
    ];

    if (formData.email.trim()) {
      lines.push(`*E-Mail:* ${formData.email}`);
    }

    if (formData.message.trim()) {
      lines.push("", `*Nachricht:* ${formData.message}`);
    }

    lines.push("", "Bitte meldet euch bei mir. Danke! ☀️");

    const text = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="kontakt" className="overflow-hidden bg-gradient-navy py-20 md:py-28">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Kontakt
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-secondary-foreground md:text-4xl lg:text-5xl">
              Jetzt kostenloses{" "}
              <span className="text-gradient-gold">Erstgespräch</span> sichern
            </h2>
            <p className="mt-4 text-lg text-secondary-foreground/75">
              Lassen Sie sich unverbindlich beraten. Wir melden uns innerhalb der
              Öffnungszeiten persönlich bei Ihnen.
            </p>

            <div className="mt-10 space-y-4">
              <a
                href="tel:+491627382351"
                className="flex items-center gap-4 rounded-xl border border-border/20 bg-secondary/50 p-4 transition-all hover:bg-secondary/80"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-secondary-foreground/60">Direkt anrufen</p>
                  <p className="font-heading text-lg font-bold text-secondary-foreground">
                    0162-7382351
                  </p>
                </div>
              </a>

              <a
                href="https://calendly.com/svenmarklewitz-p9a/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-border/20 bg-secondary/50 p-4 transition-all hover:bg-secondary/80"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-solar-blue/20">
                  <Calendar className="h-5 w-5 text-solar-blue" />
                </div>
                <div>
                  <p className="text-sm text-secondary-foreground/60">Wunschtermin</p>
                  <p className="font-heading text-lg font-bold text-secondary-foreground">
                    Online Termin buchen
                  </p>
                </div>
              </a>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hallo Sven! Ich interessiere mich für eine Solaranlage. Bitte meldet euch bei mir. ☀️")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-border/20 bg-secondary/50 p-4 transition-all hover:bg-secondary/80"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-solar-green/20">
                  <MessageCircle className="h-5 w-5 text-solar-green" />
                </div>
                <div>
                  <p className="text-sm text-secondary-foreground/60">WhatsApp</p>
                  <p className="font-heading text-lg font-bold text-secondary-foreground">
                    Über WhatsApp chatten
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-xl border border-border/20 bg-secondary/50 p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-secondary-foreground/60">Standort</p>
                  <p className="font-heading font-bold text-secondary-foreground">
                    73277 Owen an der Teck
                  </p>
                  <p className="text-sm text-secondary-foreground/60">Baden-Württemberg</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form → WhatsApp */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border/20 bg-card p-5 sm:p-8 shadow-card"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-solar-green/15">
                  <MessageCircle className="h-5 w-5 text-solar-green" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    Anfrage via WhatsApp
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Formular ausfüllen → direkt an Sven senden
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                    Ihr Name *
                  </label>
                  <Input
                    id="name"
                    required
                    placeholder="Max Mustermann"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium text-foreground">
                    Ihre Telefonnummer *
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    placeholder="0162 1234567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                    E-Mail (optional)
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="max@beispiel.de"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                    Ihre Nachricht (optional)
                  </label>
                  <Textarea
                    id="message"
                    rows={3}
                    placeholder="z. B. Dachgröße, Ausrichtung, Fragen zur Förderung..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full py-6 text-lg font-bold"
                  style={{ backgroundColor: "#25D366", color: "white" }}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Jetzt über WhatsApp senden
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  WhatsApp öffnet sich mit Ihrer Anfrage vorausgefüllt.
                  Ihre Daten werden nur an Sven Marklewitz übermittelt.
                </p>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;

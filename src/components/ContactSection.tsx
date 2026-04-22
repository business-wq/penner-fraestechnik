import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowRight,
  Calendar,
  MessageCircle,
  Phone,
} from "lucide-react";

const WHATSAPP_NUMBER = "491627382351";

const contactOptions = [
  {
    title: "Direkt anrufen",
    subtitle: "Schnellster Weg zur ersten Einordnung",
    value: "0162-7382351",
    href: "tel:+491627382351",
    icon: Phone,
    iconClassName: "bg-primary/14 text-primary",
  },
  {
    title: "Online Termin buchen",
    subtitle: "15 Minuten Termin mit Wunschuhrzeit",
    value: "Calendly",
    href: "https://calendly.com/svenmarklewitz-p9a/15min",
    icon: Calendar,
    iconClassName: "bg-sky-400/14 text-sky-300",
    external: true,
  },
  {
    title: "WhatsApp schreiben",
    subtitle: "Direkt und unkompliziert mit vorausgefuellter Nachricht",
    value: "Chat starten",
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      "Hallo Sven! Ich interessiere mich fuer eine Solaranlage. Bitte meldet euch bei mir.",
    )}`,
    icon: MessageCircle,
    iconClassName: "bg-emerald-400/14 text-emerald-300",
    external: true,
  },
];

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
      "Hallo Sven!",
      "Ich interessiere mich fuer eine Solaranlage und wuerde gerne ein kostenloses Erstgespraech vereinbaren.",
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

    lines.push("", "Bitte meldet euch bei mir. Danke!");

    const text = encodeURIComponent(lines.join("\n"));
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section
      id="kontakt"
      className="relative overflow-hidden bg-[linear-gradient(135deg,hsl(218,44%,10%),hsl(220,38%,8%)_52%,hsl(219,42%,12%))] py-20 md:py-28"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.08),transparent_26%)]" />

      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Kontakt
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-secondary-foreground md:text-4xl lg:text-5xl">
              Der letzte Schritt ist nur noch die{" "}
              <span className="text-gradient-gold">erste Anfrage</span>
            </h2>
            <p className="mt-4 max-w-xl text-lg text-secondary-foreground/88">
              Wenn Dach, Verbrauch oder Heizung schon grob feststehen, reicht eine
              kurze Nachricht. Wir sortieren das Thema fuer Sie ein und sagen direkt,
              ob eher PV, Waermepumpe oder die Kombination Sinn ergibt.
            </p>

            <div className="mt-8 rounded-[2rem] border border-white/14 bg-white/8 p-6 shadow-solar backdrop-blur-md">
              <div className="grid gap-3">
                {contactOptions.map((option, index) => {
                  const Icon = option.icon;
                  const content = (
                    <div className="group flex items-center justify-between gap-4 rounded-[1.4rem] border border-white/14 bg-white/8 p-4 transition-all hover:-translate-y-1 hover:border-primary/25 hover:bg-white/12">
                      <div className="flex items-center gap-4">
                        <div
                          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${option.iconClassName}`}
                        >
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm text-secondary-foreground/82">{option.subtitle}</p>
                          <p className="mt-1 font-heading text-lg font-bold text-secondary-foreground">
                            {option.title}
                          </p>
                          <p className="mt-1 text-sm font-medium text-primary">{option.value}</p>
                        </div>
                      </div>
                      <ArrowRight className="h-4 w-4 shrink-0 text-secondary-foreground/78 transition-transform group-hover:translate-x-1" />
                    </div>
                  );

                  return (
                    <motion.div
                      key={option.title}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.06 }}
                    >
                      {option.external ? (
                        <a href={option.href} target="_blank" rel="noopener noreferrer">
                          {content}
                        </a>
                      ) : (
                        <a href={option.href}>{content}</a>
                      )}
                    </motion.div>
                  );
                })}
              </div>

            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
          >
            <div className="rounded-[2rem] border border-white/20 bg-white p-5 shadow-[0_30px_90px_-35px_rgba(15,23,42,0.65)] backdrop-blur-sm sm:p-8">
              <div className="flex flex-col gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/12 text-emerald-500">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-slate-900">
                      Anfrage direkt an Sven
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      Kurz ausfuellen, WhatsApp oeffnet sich mit Ihrer vorausgefuellten Nachricht.
                    </p>
                  </div>
                </div>
                <div className="inline-flex self-start rounded-full border border-primary/20 bg-primary/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                  WhatsApp Anfrage
                </div>
              </div>

              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Ihr Name *
                    </label>
                    <Input
                      id="name"
                      required
                      placeholder="Max Mustermann"
                      className="border-slate-200 bg-white text-slate-900 placeholder:text-slate-400"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Ihre Telefonnummer *
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      placeholder="0162 1234567"
                      className="border-slate-200 bg-white text-slate-900 placeholder:text-slate-400"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    E-Mail (optional)
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="max@beispiel.de"
                    className="border-slate-200 bg-white text-slate-900 placeholder:text-slate-400"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Ihre Nachricht (optional)
                  </label>
                  <Textarea
                    id="message"
                    rows={4}
                    placeholder="z. B. Dachgroesse, aktuelle Heizung, Stromverbrauch oder Fragen zur Foerderung..."
                    className="border-slate-200 bg-white text-slate-900 placeholder:text-slate-400"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                <div className="grid gap-3 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4 sm:grid-cols-3">
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Ideal fuer
                    </div>
                    <div className="mt-2 text-sm font-semibold text-slate-900">
                      Erste Einordnung
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Themen
                    </div>
                    <div className="mt-2 text-sm font-semibold text-slate-900">
                      PV, Speicher, Waermepumpe
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Antwortweg
                    </div>
                    <div className="mt-2 text-sm font-semibold text-slate-900">
                      Direkt per WhatsApp
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full py-6 text-lg font-bold"
                  style={{ backgroundColor: "#25D366", color: "white" }}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Jetzt ueber WhatsApp senden
                </Button>

                <p className="text-center text-xs leading-relaxed text-slate-600">
                  WhatsApp oeffnet sich mit Ihrer Anfrage vorausgefuellt. Ihre
                  Daten werden nur fuer die Kontaktaufnahme genutzt.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

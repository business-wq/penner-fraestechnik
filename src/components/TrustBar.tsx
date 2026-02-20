import { motion } from "framer-motion";
import { Sun, Zap, Shield, Clock } from "lucide-react";

const stats = [
  { icon: Sun, value: "100+", label: "Installationen", color: "text-primary" },
  { icon: Zap, value: "24h", label: "Angebot erhalten", color: "text-solar-blue" },
  { icon: Shield, value: "25+", label: "Jahre Garantie", color: "text-solar-green" },
  { icon: Clock, value: "< 6", label: "Wochen Montage", color: "text-primary" },
];

const TrustBar = () => {
  return (
    <section className="relative z-10 -mt-16">
      <div className="container mx-auto max-w-5xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-4 rounded-2xl bg-card p-6 shadow-card md:grid-cols-4 md:gap-8 md:p-8"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <stat.icon className={`mb-2 h-7 w-7 ${stat.color}`} />
              <span className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                {stat.value}
              </span>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBar;

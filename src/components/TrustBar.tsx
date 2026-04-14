import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Sun, Zap, Shield, Clock } from "lucide-react";

const stats = [
  { icon: Sun, target: 100, suffix: "+", label: "Installationen", color: "text-primary" },
  { icon: Zap, target: 24, suffix: "h", label: "Angebot erhalten", color: "text-solar-blue" },
  { icon: Shield, target: 25, suffix: "+", label: "Jahre Garantie", color: "text-solar-green" },
  { icon: Clock, target: 6, prefix: "< ", label: "Wochen Montage", color: "text-primary" },
];

const CountUpValue = ({
  target,
  start,
  prefix = "",
  suffix = "",
}: {
  target: number;
  start: boolean;
  prefix?: string;
  suffix?: string;
}) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let animationFrame = 0;
    let startTime: number | null = null;
    const duration = 1600;

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(animate);
      }
    };

    animationFrame = window.requestAnimationFrame(animate);

    return () => window.cancelAnimationFrame(animationFrame);
  }, [start, target]);

  return (
    <span className="font-heading text-2xl font-bold text-foreground md:text-3xl">
      {prefix}
      {value}
      {suffix}
    </span>
  );
};

const TrustBar = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });

  return (
    <section className="relative z-10 -mt-16">
      <div className="container mx-auto max-w-5xl px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-4 rounded-lg border border-border bg-card p-6 shadow-card md:grid-cols-4 md:gap-8 md:p-8"
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
              <CountUpValue
                target={stat.target}
                start={isInView}
                prefix={stat.prefix}
                suffix={stat.suffix}
              />
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBar;

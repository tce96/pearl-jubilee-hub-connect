import { motion } from "framer-motion";
import { Calendar, MapPin, Users, ExternalLink } from "lucide-react";
import heroImage from "@/assets/hero-madurai.jpg";

const highlights = [
  { icon: Calendar, label: "July 24–25, 2026", desc: "Two days of celebration" },
  { icon: MapPin, label: "Madurai", desc: "TCE Campus & Resort" },
  { icon: Users, label: "Batch 92–96", desc: "30 years of memories" },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <div className="relative h-[70vh] min-h-[480px] overflow-hidden">
        <img
          src={heroImage}
          alt="Madurai skyline at golden hour"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-3 text-sm font-medium tracking-[0.3em] uppercase text-primary"
          >
            Thiagarajar College of Engineering
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-5xl md:text-7xl font-serif font-bold gold-text leading-tight"
          >
            Pearl Jubilee
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-2 text-xl md:text-2xl font-serif text-foreground/80"
          >
            Batch of 1992–96 Reunion
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-8"
          >
            <a
              href="https://forms.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg gold-gradient px-8 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-105"
            >
              Register / Vote Now
              <ExternalLink className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Highlights */}
      <section className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-4 px-6 -mt-16 relative z-20 sm:grid-cols-3">
        {highlights.map((h, i) => (
          <motion.div
            key={h.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 + i * 0.15 }}
            className="glass-card rounded-xl p-6 text-center glow-gold"
          >
            <h.icon className="mx-auto mb-3 h-7 w-7 text-primary" />
            <p className="font-semibold text-foreground">{h.label}</p>
            <p className="mt-1 text-sm text-muted-foreground">{h.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* About */}
      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-serif font-bold gold-text mb-4">30 Years. One Bond.</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Three decades since we walked the corridors of TCE, it's time to come together again.
            The Pearl Jubilee Reunion brings our batch back to Madurai for two unforgettable days
            of nostalgia, celebration, and reconnection. Whether you were in EEE, ECE, CSE, Mech, or Civil —
            this is your homecoming.
          </p>
        </motion.div>
      </section>

      {/* Event Summary */}
      <section className="mx-auto max-w-4xl px-6 pb-20">
        <h2 className="text-2xl font-serif font-bold text-foreground mb-6 text-center">Event at a Glance</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[{
              title: "Day 0 (Optional) — July 23",
              items: ["Just Chilling With Friends!!"
              ],
            },
            {
              title: "Day 1 — July 24",
              items: [
                "Morning: Gather at TCE campus",
                "Afternoon: Campus tour & nostalgia walk",
                "Evening: Move to resort for dinner gala",
                "Night: Cultural program & celebrations",
              ],
            },
            {
              title: "Day 2 — July 25",
              items: [
                "Morning: Breakfast & group activities",
                "Late morning: Awards & remembrance",
                "Afternoon: Wrap-up & farewell lunch",
                "Depart with 30 more years of memories",
              ],
            },
            {
              title: "Extended Day — July 26",
              items: [
                "lol idk",
              ],
            },
          ].map((day) => (
            <div key={day.title} className="glass-card rounded-xl p-6">
              <h3 className="text-lg font-serif font-semibold text-primary mb-3">{day.title}</h3>
              <ul className="space-y-2">
                {day.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

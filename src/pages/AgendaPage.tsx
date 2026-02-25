import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { Info } from "lucide-react";

const agendaItems = [
  {
    day: "Warm-up Thursday – July 23, 2026",
    schedule: [
      { time: "03:00 PM onwards", activity: "Informal friends gathering" },
    ],
  },
  {
    day: "Friday – July 24, 2026",
    schedule: [
      { time: "09:30 AM – 10:30 AM", activity: "Reporting at TCE Campus & T-shirt Distribution" },
      { time: "11:00 AM – 12:30 PM", activity: "High Tea & Informal Meet-up at College" },
      { time: "01:00 PM – 02:30 PM", activity: "Lunch at College" },
      { time: "03:00 PM – 04:30 PM", activity: "Travel to Resort (College Bus – subject to availability)" },
      { time: "05:00 PM onwards", activity: "High Tea & Evening Celebration, Cultural Program & Gala Dinner at Resort" },
      { time: "08:00 PM", activity: "Dinner" },
    ],
  },
  {
    day: "Saturday – July 25, 2026",
    schedule: [
      { time: "08:00 AM – 09:30 AM", activity: "Breakfast at Resort" },
      { time: "10:00 AM – 12:00 PM", activity: "Informal Catch-up / Group Activities / Photo Sessions" },
      { time: "12:30 PM", activity: "Check-out (for one-night stay participants)" },
      { time: "Afternoon / Night", activity: "Optional Extended Stay (subject to registration & participation)" },
    ],
  },
];

export default function AgendaPage() {
  return (
    <div className="px-6 py-12 lg:py-16 max-w-4xl mx-auto">
      <SectionHeading
        title="Event Agenda"
        subtitle="TCE 92–96 Pearl Jubilee | College Direct Reporting Model"
      />

      <div className="space-y-12">
        {agendaItems.map((dayBlock, index) => (
          <motion.div
            key={dayBlock.day}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card rounded-xl p-6"
          >
            <h2 className="text-xl font-serif font-bold text-primary mb-6">
              {dayBlock.day}
            </h2>

            <div className="space-y-4">
              {dayBlock.schedule.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row sm:items-start gap-2 border-b border-border/40 pb-3 last:border-none"
                >
                  <div className="sm:w-48 font-semibold text-foreground">
                    {item.time}
                  </div>
                  <div className="text-foreground/80">{item.activity}</div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Important Notes */}
      <div className="mt-12 glass-card rounded-xl p-6">
        <div className="flex items-start gap-3">
          <Info className="h-5 w-5 text-primary mt-1" />
          <div className="space-y-2 text-sm text-foreground/80">
            <p className="font-semibold text-foreground">Important Notes</p>
            <ul className="list-disc ml-5 space-y-1">
              <li>
                All participants are requested to report directly at <b>TCE Campus on July 24 morning</b>.
              </li>
              <li>
                Resort transfer will be arranged via college bus, subject to bus availability and timing confirmation.
              </li>
              <li>
                Early resort check-in (if required) will be handled separately for limited confirmed rooms.
              </li>
              <li>
                July 25 extended stay is optional and depends on confirmed participation numbers.
              </li>
              <li>
                Final detailed communication (reporting location, parking, bus timing) will be shared closer to the event date.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
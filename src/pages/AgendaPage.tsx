import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { Clock, MapPin } from "lucide-react";

const schedule = [
  {
    day: "Day 1 — Friday, July 24, 2026",
    events: [
      { time: "09:00 AM", title: "TCE 96 Registration & Welcome", location: "TCE Campus — Main Gate", desc: "Pick up your welcome kit, badge, and reunion memorabilia." },
      { time: "10:00 AM", title: "Inaugural Ceremony", location: "TCE Auditorium", desc: "Lamp lighting, welcome address, and keynote by a distinguished alumnus." },
      { time: "11:30 AM", title: "Campus Nostalgia Walk", location: "TCE Campus", desc: "Guided walk through departments, hostels, canteen, and favourite hangout spots." },
      { time: "01:00 PM", title: "Lunch", location: "TCE Dining Hall", desc: "Traditional Madurai lunch — just like the old days." },
      { time: "02:30 PM", title: "Department Reunions", location: "Respective Departments", desc: "Break into department groups for photos, stories, and faculty meets." },
      { time: "05:00 PM", title: "Travel to Resort", location: "Buses Provided", desc: "Board buses to the evening venue." },
      { time: "07:00 PM", title: "Evening Gala & Dinner", location: "Resort Venue (TBD)", desc: "Grand celebration with cultural program, music, dance, and dinner." },
    ],
  },
  {
    day: "Day 2 — Saturday, July 25, 2026",
    events: [
      { time: "08:00 AM", title: "Breakfast", location: "Resort", desc: "Leisurely breakfast with batch-mates." },
      { time: "09:30 AM", title: "Group Activities & Games", location: "Resort Grounds", desc: "Fun team activities, quizzes, and friendly competitions." },
      { time: "11:30 AM", title: "Awards & Remembrance", location: "Resort Hall", desc: "Recognitions, remembering departed friends, and batch time capsule." },
      { time: "01:00 PM", title: "Farewell Lunch", location: "Resort", desc: "Final meal together. Group photos and farewells." },
      { time: "03:00 PM", title: "Departure", location: "Resort", desc: "Buses back to city. See you at the next milestone!" },
    ],
  },
];

export default function AgendaPage() {
  return (
    <div className="px-6 py-12 lg:py-16 max-w-4xl mx-auto">
      <SectionHeading title="Agenda" subtitle="Two days of nostalgia, celebration, and reconnection." />

      <div className="space-y-12">
        {schedule.map((day, di) => (
          <div key={day.day}>
            <h2 className="text-xl font-serif font-semibold text-primary mb-6">{day.day}</h2>
            <div className="relative border-l-2 border-border pl-6 space-y-8">
              {day.events.map((evt, i) => (
                <motion.div
                  key={evt.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="relative"
                >
                  <div className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-primary" />
                  <div className="glass-card rounded-xl p-5">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="flex items-center gap-1.5 text-xs font-medium text-primary">
                        <Clock className="h-3.5 w-3.5" /> {evt.time}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <MapPin className="h-3.5 w-3.5" /> {evt.location}
                      </span>
                    </div>
                    <h3 className="font-semibold text-foreground">{evt.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{evt.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

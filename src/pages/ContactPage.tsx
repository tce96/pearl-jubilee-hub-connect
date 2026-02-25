import SectionHeading from "@/components/SectionHeading";
import { Mail, Phone, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const contacts = [
  { name: "Reunion Committee", role: "General Coordinator", email: "tce96sj@gmail.com" },
  ];

export default function ContactPage() {
  return (
    <div className="px-6 py-12 lg:py-16 max-w-3xl mx-auto">
      <SectionHeading title="Contact" subtitle="Reach out to the organizing committee to let us know about your feedback, preferences, or if you have any questions." />

      <div className="space-y-4 mb-12">
        {contacts.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card rounded-xl p-6"
          >
            <h3 className="font-semibold text-foreground">{c.name}</h3>
            <p className="text-xs text-muted-foreground mb-3">{c.role}</p>
            <div className="flex flex-col gap-2">
              <a href={`mailto:${c.email}`} className="flex items-center gap-2 text-sm text-primary hover:underline">
                <Mail className="h-4 w-4" /> {c.email}
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      
    </div>
  );
}

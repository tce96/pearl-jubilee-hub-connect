import SectionHeading from "@/components/SectionHeading";
import { Mail, Phone, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const contacts = [
  { name: "Reunion Committee", role: "General Coordinator", email: "tce9296reunion@gmail.com", phone: "+91 98765 43210" },
  { name: "Registration Desk", role: "Registrations & Payments", email: "tce9296register@gmail.com", phone: "+91 98765 43211" },
];

export default function ContactPage() {
  return (
    <div className="px-6 py-12 lg:py-16 max-w-3xl mx-auto">
      <SectionHeading title="Contact" subtitle="Reach out to the organizing committee." />

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
              <a href={`tel:${c.phone}`} className="flex items-center gap-2 text-sm text-foreground/80 hover:text-primary">
                <Phone className="h-4 w-4" /> {c.phone}
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="glass-card rounded-xl p-6 text-center">
        <h3 className="font-serif font-semibold text-foreground mb-2">Have a suggestion or question?</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Use the Google Form to submit your feedback, preferences, or any questions for the committee.
        </p>
        <a
          href="https://forms.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg gold-gradient px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
        >
          Open Google Form
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

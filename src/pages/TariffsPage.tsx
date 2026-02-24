import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { Check, ExternalLink } from "lucide-react";

const packages = [
  {
    name: "Silver",
    price: "₹3,000",
    desc: "Individual — Day events only",
    features: [
      "Day 1 campus events & lunch",
      "Day 2 resort activities & lunch",
      "Welcome kit & memorabilia",
      "Bus transport between venues",
    ],
    highlight: false,
  },
  {
    name: "Gold",
    price: "₹5,000",
    desc: "Individual — Full package",
    features: [
      "Everything in Silver",
      "Evening gala dinner & cultural program",
      "One night resort stay (shared)",
      "Breakfast on Day 2",
    ],
    highlight: true,
  },
  {
    name: "Platinum",
    price: "₹8,000",
    desc: "Individual — Premium",
    features: [
      "Everything in Gold",
      "Private room at resort",
      "Premium dinner seating",
      "Exclusive batch photo book",
    ],
    highlight: false,
  },
  {
    name: "Family Add-on",
    price: "₹2,500",
    desc: "Per family member",
    features: [
      "Spouse / family event access",
      "Meals included",
      "Resort stay (with member)",
      "Subject to voting outcome",
    ],
    highlight: false,
  },
];

export default function TariffsPage() {
  return (
    <div className="px-6 py-12 lg:py-16 max-w-5xl mx-auto">
      <SectionHeading
        title="Tariffs"
        subtitle="Indicative packages — final pricing subject to committee decision and group vote."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {packages.map((pkg, i) => (
          <motion.div
            key={pkg.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`relative rounded-xl p-6 flex flex-col ${
              pkg.highlight
                ? "glass-card glow-gold border border-primary/30"
                : "glass-card"
            }`}
          >
            {pkg.highlight && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full gold-gradient px-3 py-0.5 text-xs font-semibold text-primary-foreground">
                Most Popular
              </span>
            )}
            <h3 className="text-lg font-serif font-bold text-foreground">{pkg.name}</h3>
            <p className="text-3xl font-bold text-primary mt-2">{pkg.price}</p>
            <p className="text-xs text-muted-foreground mt-1 mb-5">{pkg.desc}</p>
            <ul className="space-y-2.5 flex-1">
              {pkg.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-foreground/80">
                  <Check className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-muted-foreground mb-4">
          Cast your vote on preferred package and event preferences:
        </p>
        <a
          href="https://forms.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg gold-gradient px-8 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-105"
        >
          Vote / Register via Google Form
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { Check, ExternalLink, Info } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FORM_URL = "https://forms.gle/REPLACE_WITH_YOUR_FORM_LINK";

type TariffStatus = "Available" | "Tentative" | "Awaiting";

type TariffRow = {
  code: string;
  venue: string;
  stay: string;
  occupancy: string;
  amount: string;
  notes?: string;
  status: TariffStatus;
};

const tariffRows: TariffRow[] = [
  // Code 1 is universal (no room) as per your direction.
  // Rate is taken from the Excel rate table area (rows 85-90).
  {
    code: "1",
    venue: "Universal (No Room)",
    stay: "No stay",
    occupancy: "Day-Scholar / Local (No room)",
    amount: "₹1,400",
    notes:
      "Attend college program + evening celebration; no overnight stay",
    status: "Available",
  },

  // Jungle Stay (A) — from Excel rate table (rows 85-90)
  {
    code: "5A",
    venue: "Jungle Stay (A)",
    stay: "Jul 24 only",
    occupancy: "Triple occupancy (sharing)",
    amount: "₹4,900",
    notes:
      "For Jul 24 night at Jungle Stay, only triple sharing due to limited rooms",
    status: "Available",
  },
  {
    code: "9A",
    venue: "Jungle Stay (A)",
    stay: "Jul 24 & 25",
    occupancy: "Triple occupancy (sharing)",
    amount: "₹7,800",
    notes:
      "Both nights; allocation for Jul 25 depends on final participation count",
    status: "Tentative",
  },

  // GRT (B) — from Excel rate table (rows 85-90)
  {
    code: "2B",
    venue: "GRT (B)",
    stay: "Jul 24 only",
    occupancy: "Single occupancy",
    amount: "₹10,750",
    status: "Available",
  },
  {
    code: "3B",
    venue: "GRT (B)",
    stay: "Jul 24 only",
    occupancy: "Double occupancy (sharing)",
    amount: "₹7,300",
    status: "Available",
  },
  {
    code: "4B",
    venue: "GRT (B)",
    stay: "Jul 24 only",
    occupancy: "Double occupancy (family)",
    amount: "₹14,100",
    status: "Available",
  },
  {
    code: "6B",
    venue: "GRT (B)",
    stay: "Jul 24 only",
    occupancy: "Triple occupancy (family)",
    amount: "₹19,750",
    status: "Available",
  },
  {
    code: "7B",
    venue: "GRT (B)",
    stay: "Jul 24 & 25",
    occupancy: "Single occupancy",
    amount: "₹19,600",
    status: "Available",
  },

  // 8B is blank in the Excel table region; do not guess.
  {
    code: "8B",
    venue: "GRT (B)",
    stay: "Jul 24 & 25",
    occupancy: "Double occupancy (sharing)",
    amount: "Awaiting confirmation",
    notes: "Rate not filled in the latest sheet; will be updated once confirmed",
    status: "Awaiting",
  },

  // Taj placeholder
  {
    code: "C",
    venue: "Taj (C)",
    stay: "—",
    occupancy: "Rates awaited",
    amount: "—",
    notes: "Will be added once official tariffs are received",
    status: "Awaiting",
  },
];

const packageCards = [
  {
    name: "Option 1 (Code: 1)",
    price: "₹1,400",
    desc: "No Room / Day-Scholar (Local participants)",
    features: [
      "Attend college program (High Tea + Lunch)",
      "Attend evening celebration program at resort",
      "T-shirt collection / distribution",
      "No room / no overnight stay",
    ],
    highlight: true,
    badge: "Most Common",
  },
  {
    name: "Jungle Stay (A)",
    price: "₹4,900 / ₹7,800",
    desc: "Jungle Stay sharing options (subject to allocation)",
    features: [
      "5A: Jul 24 only – Triple sharing – ₹4,900",
      "9A: Jul 24 & 25 – Triple sharing – ₹7,800",
      "For Jul 24 night, only triple sharing due to limited rooms",
      "Jul 25 stay is optional and depends on participation count",
    ],
    highlight: false,
  },
  {
    name: "GRT (B) – Jul 24 Night",
    price: "From ₹7,300",
    desc: "Stay on July 24 only (availability per option)",
    features: [
      "2B: Single occupancy – ₹10,750",
      "3B: Double sharing – ₹7,300",
      "4B: Double family – ₹14,100",
      "6B: Triple family – ₹19,750",
    ],
    highlight: false,
  },
  {
    name: "GRT (B) – Jul 24 & 25",
    price: "From ₹19,600",
    desc: "Optional extended stay (rates depend on confirmed options)",
    features: [
      "7B: Single occupancy – ₹19,600",
      "8B: Double sharing – awaiting confirmation",
      "Jul 25 stay is optional (based on participation)",
      "Final allocation will be confirmed after responses",
    ],
    highlight: false,
  },
];

function StatusPill({ status }: { status: TariffStatus }) {
  const cls =
    status === "Available"
      ? "bg-emerald-500/15 text-emerald-300"
      : status === "Tentative"
      ? "bg-amber-500/15 text-amber-300"
      : "bg-muted/40 text-muted-foreground";

  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${cls}`}>
      {status}
    </span>
  );
}

export default function TariffsPage() {
  return (
    <div className="px-6 py-12 lg:py-16 max-w-5xl mx-auto">
      <SectionHeading
        title="Tariffs / Packages"
        subtitle="Indicative packages — final allocation (early check-in, transport timings, and Jul 25 stay format) will be confirmed after participation count and venue coordination."
      />

      {/* Package cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {packageCards.map((pkg, i) => (
          <motion.div
            key={pkg.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className={`relative rounded-xl p-6 flex flex-col ${
              pkg.highlight
                ? "glass-card glow-gold border border-primary/30"
                : "glass-card"
            }`}
          >
            {pkg.highlight && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full gold-gradient px-3 py-0.5 text-xs font-semibold text-primary-foreground">
                {pkg.badge ?? "Most Popular"}
              </span>
            )}

            <h3 className="text-lg font-serif font-bold text-foreground">
              {pkg.name}
            </h3>
            <p className="text-3xl font-bold text-primary mt-2">{pkg.price}</p>
            <p className="text-xs text-muted-foreground mt-1 mb-5">{pkg.desc}</p>

            <ul className="space-y-2.5 flex-1">
              {pkg.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2 text-sm text-foreground/80"
                >
                  <Check className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Notes / policy */}
      <div className="mt-10 glass-card rounded-xl p-6">
        <div className="flex items-start gap-3">
          <Info className="h-5 w-5 text-primary mt-0.5" />
          <div className="space-y-2 text-sm text-foreground/80">
            <p className="font-semibold text-foreground">Key Notes</p>
            <ul className="list-disc ml-5 space-y-1">
              <li>
                <b>Code 1</b> is the universal <b>No Room / Day-Scholar</b> option for Madurai locals
                (attend college + evening celebration; no overnight stay).
              </li>
              <li>
                <b>Jungle Stay (A):</b> For <b>Jul 24 night</b>, only <b>triple sharing</b> will be available
                due to limited rooms.
              </li>
              <li>
                <b>Jul 25 stay</b> is optional and the final occupancy format depends on participation count
                and room allocation feasibility.
              </li>
              <li>
                <b>Transport bus support</b> is agreed in principle by the college and will be confirmed
                based on bus availability and timings.
              </li>
              <li>
                <b>Taj (C)</b> rates will be added once received.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Custom packages */}
      <div className="mt-8 glass-card rounded-xl p-6">
        <h3 className="text-lg font-serif font-bold text-foreground mb-2">
          Custom Requests (Flexible Where Feasible)
        </h3>
        <p className="text-sm text-foreground/80">
          Some batchmates may have specific needs (parents joining, multiple rooms, or different room count
          across nights such as <b>2 rooms on Jul 24</b> and <b>1 room on Jul 25</b>). Wherever feasible, we
          will support custom combinations based on availability.
        </p>
        <p className="text-sm text-foreground/80 mt-3">
          Please email <b>tce96sj@gmail.com</b> with: nights required (23/24/25), number of people, rooms needed
          per night, and venue preference.
        </p>
      </div>

      {/* Detailed tariff table */}
      <div className="mt-8">
        <Accordion type="single" collapsible className="glass-card rounded-xl">
          <AccordionItem value="tariff-table" className="border-none">
            <AccordionTrigger className="px-6 py-4 text-left">
              Detailed Tariff Reference (Click to expand)
            </AccordionTrigger>

            <AccordionContent className="px-6 pb-6">
              <p className="text-sm text-muted-foreground mb-4">
                Rates referenced from the latest budget sheet. Items marked “Awaiting” are not confirmed in the sheet yet.
              </p>

              <div className="overflow-x-auto rounded-lg border border-border">
                <table className="w-full min-w-[920px] text-sm">
                  <thead className="bg-background/40">
                    <tr className="text-left">
                      <th className="px-4 py-3 font-semibold">Code</th>
                      <th className="px-4 py-3 font-semibold">Venue</th>
                      <th className="px-4 py-3 font-semibold">Stay</th>
                      <th className="px-4 py-3 font-semibold">Occupancy</th>
                      <th className="px-4 py-3 font-semibold">Amount</th>
                      <th className="px-4 py-3 font-semibold">Notes</th>
                      <th className="px-4 py-3 font-semibold">Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    {tariffRows.map((r) => (
                      <tr
                        key={`${r.code}-${r.venue}`}
                        className="border-t border-border hover:bg-background/20"
                      >
                        <td className="px-4 py-3 font-semibold text-foreground">
                          {r.code}
                        </td>
                        <td className="px-4 py-3 text-foreground/80">{r.venue}</td>
                        <td className="px-4 py-3 text-foreground/80">{r.stay}</td>
                        <td className="px-4 py-3 text-foreground/80">{r.occupancy}</td>
                        <td className="px-4 py-3 text-primary font-semibold">{r.amount}</td>
                        <td className="px-4 py-3 text-muted-foreground">
                          {r.notes ?? "—"}
                        </td>
                        <td className="px-4 py-3">
                          <StatusPill status={r.status} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-xs text-muted-foreground mt-3">
                Note: Final room allocation and Jul 25 stay format will be confirmed after registration closes and participation numbers are known.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* CTA */}
      <div className="mt-12 text-center">
        <p className="text-muted-foreground mb-4">
          Please submit your preference and participation details:
        </p>
        <a
          href={FORM_URL}
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
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { Check, ExternalLink, Info, CreditCard, Smartphone, Landmark, DollarSign } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// ─── Constants ────────────────────────────────────────────────────────────────

const FORM_URL = "https://bit.ly/tce96_PJ_Participant_details";
const PAYMENT_FORM_URL = "https://tinyurl.com/Payment-TCE96PJ";

// ─── Tariff matrix data ───────────────────────────────────────────────────────

const DAYS = ["F", "TF", "FS", "TFS"] as const;
type DayCode = (typeof DAYS)[number];

const DAY_LABELS: Record<DayCode, { short: string; long: string }> = {
  F:   { short: "F",   long: "Friday only" },
  TF:  { short: "TF",  long: "Thu + Fri" },
  FS:  { short: "FS",  long: "Fri + Sat" },
  TFS: { short: "TFS", long: "Thu + Fri + Sat" },
};

type StayKey = "NoStay" | "JS3" | "GRT1S" | "GRT2S" | "GRT2F" | "GRT3F";

const STAY_ORDER: StayKey[] = ["NoStay", "JS3", "GRT1S", "GRT2S", "GRT2F", "GRT3F"];

const STAY_LABELS: Record<StayKey, string> = {
  NoStay: "No Stay",
  JS3:    "Jungle Stay",
  GRT1S:  "GRT Single",
  GRT2S:  "GRT Double",
  GRT2F:  "GRT Family +1",
  GRT3F:  "GRT Family +2",
};

const STAY_DESC: Record<StayKey, string> = {
  NoStay: "Attend only — no room, no overnight stay",
  JS3:    "Budget option — 3-sharing jungle cabin",
  GRT1S:  "Single occupancy — full room for yourself",
  GRT2S:  "Double occupancy — room shared with another participant",
  GRT2F:  "Family room — participant + 1 family member",
  GRT3F:  "Family room — participant + 2 family members",
};

// undefined = not available for that combination
const TARIFF: Record<StayKey, Partial<Record<DayCode, number>>> = {
  NoStay: { F: 1400 },
  JS3:    { F: 4900,  TF: 5900,  FS: 5900,  TFS: 6900  },
  GRT1S:  { F: 10750, TF: 17750, FS: 17750, TFS: 24750 },
  GRT2S:  { F: 7300,  TF: 10800, FS: 10800, TFS: 14300 },
  GRT2F:  { F: 14100, TF: 21100, FS: 21100, TFS: 28100 },
  GRT3F:  { F: 19750, TF: 29050, FS: 29050, TFS: 38350 },
};

function fmt(n: number) {
  return "₹" + n.toLocaleString("en-IN");
}

// ─── Old detailed tariff reference rows (original, kept as-is) ───────────────

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
  {
    code: "1",
    venue: "Universal (No Room)",
    stay: "No stay",
    occupancy: "Day-Scholar / Local (No room)",
    amount: "₹1,400",
    notes: "Attend college program + evening celebration; no overnight stay",
    status: "Available",
  },
  {
    code: "5A",
    venue: "Jungle Stay (A)",
    stay: "Jul 24 only",
    occupancy: "Triple occupancy (sharing)",
    amount: "₹4,900",
    notes: "For Jul 24 night at Jungle Stay, only triple sharing due to limited rooms",
    status: "Available",
  },
  {
    code: "9A",
    venue: "Jungle Stay (A)",
    stay: "Jul 24 & 25",
    occupancy: "Triple occupancy (sharing)",
    amount: "₹7,800",
    notes: "Both nights; allocation for Jul 25 depends on final participation count",
    status: "Tentative",
  },
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
  {
    code: "8B",
    venue: "GRT (B)",
    stay: "Jul 24 & 25",
    occupancy: "Double occupancy (sharing)",
    amount: "₹12,800",
    notes: "Rate not filled in the latest sheet; will be updated once confirmed",
    status: "Available",
  },
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

// ─── Payment methods ──────────────────────────────────────────────────────────

const paymentMethods = [
  {
    icon: Smartphone,
    title: "UPI",
    badge: "Instant",
    detail: "Pay directly to UPI ID",
    info: "TCE96@YBL",
  },
  {
    icon: Landmark,
    title: "IMPS / NEFT / RTGS",
    badge: "India",
    detail: "Bank transfer",
    info: "A/C: 109980711999\nIFSC: ESFB0001071\nSenthil Kumar Somasundaram",
  },
  {
    icon: DollarSign,
    title: "Zelle (USD)",
    badge: "USA",
    detail: "For payments from the USA",
    info: "8483630339",
  },
  {
    icon: CreditCard,
    title: "Cash",
    badge: "No screenshot needed",
    detail: "Hand over to any organising committee member",
    info: "",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

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

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function TariffsPage() {
  return (
    <div className="px-6 py-12 lg:py-16 max-w-5xl mx-auto">

      {/* ── Page heading (original text preserved) ── */}
      <SectionHeading
        title="Tariffs / Packages"
        subtitle="Indicative packages — final allocation (early check-in, transport timings, and Jul 25 stay format) will be confirmed after participation count and venue coordination. All package amounts are comprehensive and inclusive of accommodation (where applicable), meals, venue and event arrangements, and other coordination expenses associated with the Pearl Jubilee celebration. The published tariff represents the final payable amount for the selected package."
      />

      {/* ══════════════════════════════════════════
          SECTION 1 — TARIFF MATRIX (new)
      ══════════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-10"
      >
        <h3 className="text-lg font-serif font-bold text-foreground mb-1">Package Tariff Table</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Find your <span className="text-foreground font-medium">row</span> (days attending) and{" "}
          <span className="text-foreground font-medium">column</span> (stay type) to get your amount.
        </p>

        <div className="overflow-x-auto rounded-xl border border-border glass-card">
          <table className="w-full min-w-[600px] text-sm">
            <thead>
              <tr className="bg-background/40 border-b border-border">
                <th className="px-4 py-3 text-left font-semibold text-foreground/60 min-w-[120px]">
                  Days ↓ &nbsp; Stay →
                </th>
                {STAY_ORDER.map((s) => (
                  <th
                    key={s}
                    className="px-3 py-3 text-center font-semibold text-foreground/80 whitespace-nowrap text-xs leading-tight"
                  >
                    {STAY_LABELS[s]}
                    <br />
                    <span className="text-[10px] font-normal text-muted-foreground">{s}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {DAYS.map((day, di) => (
                <tr
                  key={day}
                  className={`border-t border-border transition-colors hover:bg-primary/5 ${
                    di % 2 === 1 ? "bg-background/20" : ""
                  }`}
                >
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className="font-bold text-foreground">{DAY_LABELS[day].short}</span>
                    <span className="ml-2 text-xs text-muted-foreground">{DAY_LABELS[day].long}</span>
                  </td>
                  {STAY_ORDER.map((stay) => {
                    const val = TARIFF[stay][day];
                    return (
                      <td key={stay} className="px-3 py-3 text-center">
                        {val !== undefined ? (
                          <span className="font-semibold text-primary">{fmt(val)}</span>
                        ) : (
                          <span className="text-muted-foreground/30 text-xs">—</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Stay type legend */}
        <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {STAY_ORDER.map((s) => (
            <div key={s} className="glass-card rounded-lg px-4 py-3 flex gap-3 items-start">
              <span className="font-bold text-primary text-xs shrink-0 w-16 pt-0.5">{s}</span>
              <span className="text-xs text-foreground/65 leading-snug">{STAY_DESC[s]}</span>
            </div>
          ))}
        </div>

        <p className="text-xs text-muted-foreground mt-3">
          * All amounts are comprehensive — inclusive of accommodation (where applicable), meals, venue and event arrangements.
        </p>
      </motion.div>

      {/* ══════════════════════════════════════════
          SECTION 2 — KEY NOTES (original text)
      ══════════════════════════════════════════ */}
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

      {/* ══════════════════════════════════════════
          SECTION 3 — CUSTOM REQUESTS (original text)
      ══════════════════════════════════════════ */}
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

      {/* ══════════════════════════════════════════
          SECTION 4 — DETAILED TARIFF REFERENCE (original accordion)
      ══════════════════════════════════════════ */}
      <div className="mt-8">
        <Accordion type="single" collapsible className="glass-card rounded-xl">
          <AccordionItem value="tariff-table" className="border-none">
            <AccordionTrigger className="px-6 py-4 text-left">
              Detailed Tariff Reference (Click to expand)
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <p className="text-sm text-muted-foreground mb-4">
                Rates referenced from the latest budget sheet. Items marked "Awaiting" are not confirmed in the sheet yet.
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
                        <td className="px-4 py-3 font-semibold text-foreground">{r.code}</td>
                        <td className="px-4 py-3 text-foreground/80">{r.venue}</td>
                        <td className="px-4 py-3 text-foreground/80">{r.stay}</td>
                        <td className="px-4 py-3 text-foreground/80">{r.occupancy}</td>
                        <td className="px-4 py-3 text-primary font-semibold">{r.amount}</td>
                        <td className="px-4 py-3 text-muted-foreground">{r.notes ?? "—"}</td>
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

      {/* ══════════════════════════════════════════
          SECTION 5 — PAYMENT METHODS (new)
      ══════════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12"
      >
        <h3 className="text-lg font-serif font-bold text-foreground mb-1">Payment Methods</h3>
        <p className="text-sm text-muted-foreground mb-5">
          Choose any of the following methods to transfer your payment.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          {paymentMethods.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="glass-card rounded-xl p-5 flex gap-4 items-start"
            >
              <div className="h-10 w-10 rounded-lg gold-gradient flex items-center justify-center shrink-0 shadow">
                <m.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <p className="font-semibold text-foreground">{m.title}</p>
                  <span className="inline-block rounded-full bg-muted/50 text-muted-foreground px-2.5 py-0.5 text-[10px] font-semibold tracking-wide">
                    {m.badge}
                  </span>
                </div>
                <p className="text-sm text-foreground/65 mb-2">{m.detail}</p>
                {m.info && (
                  <div className="rounded-md border border-border bg-background/30 px-3 py-2 text-xs text-foreground/80 font-mono whitespace-pre-line leading-relaxed">
                    {m.info}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-4 flex items-start gap-3 glass-card rounded-lg px-4 py-3">
          <Info className="h-4 w-4 text-primary shrink-0 mt-0.5" />
          <p className="text-sm text-foreground/70">
            For UPI, IMPS / NEFT / RTGS, and Zelle payments — please upload your payment screenshot when
            filling the form below. Cash payments do not require a screenshot.
          </p>
        </div>
      </motion.div>

      {/* ══════════════════════════════════════════
          SECTION 6 — ORIGINAL CTA (preserved exactly)
      ══════════════════════════════════════════ */}
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

      {/* ══════════════════════════════════════════
          SECTION 7 — PAYMENT FORM CTA (new)
      ══════════════════════════════════════════ */}
      <div className="mt-6 text-center">
        <p className="text-muted-foreground mb-4">
          Already paid? Submit your payment details here:
        </p>
        <a
          href={PAYMENT_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-primary/40 bg-primary/10 px-8 py-3 text-sm font-semibold text-primary shadow transition-transform hover:scale-105 hover:bg-primary/20"
        >
          Submit Payment Details
          <ExternalLink className="h-4 w-4" />
        </a>
        <p className="text-xs text-muted-foreground mt-2 font-mono">{PAYMENT_FORM_URL}</p>
      </div>

    </div>
  );
}
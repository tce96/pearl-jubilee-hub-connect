import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import {
  ExternalLink,
  Info,
  CreditCard,
  Smartphone,
  Landmark,
  DollarSign,
  Wallet,
  Camera,
  Music,
  Truck,
  Tent,
  Star,
  CheckCircle2,
} from "lucide-react";

// ─── Constants ────────────────────────────────────────────────────────────────

const PAYMENT_FORM_URL = "https://tinyurl.com/Payment-TCE96PJ";

// ─── Tariff data ──────────────────────────────────────────────────────────────

const DAYS = ["F", "TF", "FS", "TFS"] as const;
type DayCode = (typeof DAYS)[number];

const DAY_LABELS: Record<DayCode, string> = {
  F: "Fri only",
  TF: "Thu + Fri",
  FS: "Fri + Sat",
  TFS: "Thu + Fri + Sat",
};

type StayKey = "NoStay" | "JS3" | "GRT1S" | "GRT2S" | "GRT2F" | "GRT3F";

const STAY_LABELS: Record<StayKey, string> = {
  NoStay: "No Stay",
  JS3: "Jungle Stay",
  GRT1S: "GRT Single",
  GRT2S: "GRT Double",
  GRT2F: "GRT Family +1",
  GRT3F: "GRT Family +2",
};

const STAY_DESC: Record<StayKey, string> = {
  NoStay: "Attend only, no room",
  JS3: "3-sharing budget cabin",
  GRT1S: "Full room for yourself",
  GRT2S: "Room shared with another participant",
  GRT2F: "Participant + 1 family member",
  GRT3F: "Participant + 2 family members",
};

// null = package not available for that combination
const TARIFF: Record<StayKey, Partial<Record<DayCode, number | null>>> = {
  NoStay:  { F: 1400 },
  JS3:     { F: 4900,  TF: 5900,  FS: 5900,  TFS: 6900  },
  GRT1S:   { F: 10750, TF: 17750, FS: 17750, TFS: 24750 },
  GRT2S:   { F: 7300,  TF: 10800, FS: 10800, TFS: 14300 },
  GRT2F:   { F: 14100, TF: 21100, FS: 21100, TFS: 28100 },
  GRT3F:   { F: 19750, TF: 29050, FS: 29050, TFS: 38350 },
};

const STAY_ORDER: StayKey[] = ["NoStay", "JS3", "GRT1S", "GRT2S", "GRT2F", "GRT3F"];

// ─── Sponsorship items ────────────────────────────────────────────────────────

const sponsorItems = [
  { icon: Camera,   label: "Photo & Videography",  amount: "₹30,000" },
  { icon: Star,     label: "Event Management Team", amount: "₹30,000" },
  { icon: Music,    label: "Orchestra",             amount: "₹30,000" },
  { icon: Tent,     label: "Stage & Decoration",    amount: "₹30,000" },
  { icon: Wallet,   label: "Tables & Canopies",     amount: "₹20,000" },
  { icon: Truck,    label: "Transportation",        amount: "₹20,000" },
];

// ─── Payment methods ──────────────────────────────────────────────────────────

const paymentMethods = [
  {
    icon: Smartphone,
    title: "UPI",
    detail: "Pay directly to UPI ID",
    placeholder: "TCE96@YBL",
    badge: "Instant",
  },
  {
    icon: Landmark,
    title: "IMPS / NEFT / RTGS",
    detail: "Transfer to bank account",
    placeholder: "A/C: 109980711999  |  IFSC: ESFB0001071  |  Senthil Kumar Somasundaram",
    badge: "India",
  },
  {
    icon: DollarSign,
    title: "Zelle (USD)",
    detail: "For payments from the USA",
    placeholder: "8483630339",
    badge: "USA",
  },
  {
    icon: CreditCard,
    title: "Cash",
    detail: "Hand over to organising committee member",
    placeholder: "",
    badge: "No screenshot needed",
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function fmt(n: number) {
  return "₹" + n.toLocaleString("en-IN");
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function Badge({ children, variant = "default" }: { children: React.ReactNode; variant?: "default" | "gold" | "info" | "warn" }) {
  const cls = {
    default: "bg-muted/50 text-muted-foreground",
    gold:    "bg-primary/20 text-primary border border-primary/30",
    info:    "bg-sky-500/15 text-sky-300",
    warn:    "bg-amber-500/15 text-amber-300",
  }[variant];
  return (
    <span className={`inline-block rounded-full px-2.5 py-0.5 text-[11px] font-semibold tracking-wide ${cls}`}>
      {children}
    </span>
  );
}

function Step({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      {/* Connector line */}
      <div className="flex flex-col items-center">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full gold-gradient text-primary-foreground text-sm font-bold shadow">
          {n}
        </div>
        {n < 5 && <div className="mt-1 w-px flex-1 bg-border" />}
      </div>
      <div className="pb-8">
        <p className="font-semibold text-foreground mb-1">{title}</p>
        <div className="text-sm text-foreground/70 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function TariffsPage() {
  return (
    <div className="px-4 sm:px-6 py-12 lg:py-16 max-w-5xl mx-auto space-y-16">

      {/* ── Hero ── */}
      <div>
        <SectionHeading
          title="Tariffs & Payment"
          subtitle="Choose your package, make payment, and submit your details — it's that simple. Rooms are limited, so register early."
        />
        <div className="flex flex-wrap gap-2 justify-center mt-4">
          <Badge variant="warn">🏨 Rooms are limited</Badge>
          <Badge variant="info">💳 Pay full or partial</Badge>
          <Badge variant="gold">📸 Upload screenshot for non-cash payment</Badge>
        </div>
      </div>

      {/* ── Tariff Table ── */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-serif font-bold text-foreground mb-1">Tariff Table</h2>
          <p className="text-sm text-muted-foreground mb-5">
            Find your row (days attending) and column (stay type) to get your package amount.
          </p>

          {/* Mobile-friendly horizontal scroll */}
          <div className="overflow-x-auto rounded-xl border border-border glass-card">
            <table className="w-full min-w-[560px] text-sm">
              <thead>
                <tr className="bg-background/40 border-b border-border">
                  <th className="px-4 py-3 text-left font-semibold text-foreground/70 min-w-[100px]">
                    Days ↓ Stay →
                  </th>
                  {STAY_ORDER.map((s) => (
                    <th key={s} className="px-3 py-3 text-center font-semibold text-foreground/80 whitespace-nowrap">
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
                    className={`border-t border-border ${di % 2 === 0 ? "" : "bg-background/20"} hover:bg-primary/5 transition-colors`}
                  >
                    {/* Row header */}
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="font-bold text-foreground">{day}</span>
                      <span className="ml-2 text-xs text-muted-foreground">{DAY_LABELS[day]}</span>
                    </td>

                    {STAY_ORDER.map((stay) => {
                      const val = TARIFF[stay][day];
                      return (
                        <td key={stay} className="px-3 py-3 text-center">
                          {val !== undefined && val !== null ? (
                            <span className="font-semibold text-primary">{fmt(val)}</span>
                          ) : (
                            <span className="text-muted-foreground/40">—</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-muted-foreground mt-2">
            * All amounts are comprehensive — accommodation (where applicable), meals, venue and event arrangements.
          </p>
        </motion.div>
      </section>

      {/* ── Legend ── */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-serif font-bold text-foreground mb-5">How to Read the Tariff</h2>

          <div className="grid gap-4 sm:grid-cols-2">
            {/* Day codes */}
            <div className="glass-card rounded-xl p-5">
              <p className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <span className="text-primary">📅</span> Day Codes (Rows)
              </p>
              <ul className="space-y-2 text-sm">
                {DAYS.map((d) => (
                  <li key={d} className="flex items-center gap-2">
                    <span className="font-bold text-primary w-10 shrink-0">{d}</span>
                    <span className="text-foreground/70">{DAY_LABELS[d]}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stay types */}
            <div className="glass-card rounded-xl p-5">
              <p className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <span className="text-primary">🏨</span> Stay Types (Columns)
              </p>
              <ul className="space-y-2 text-sm">
                {STAY_ORDER.map((s) => (
                  <li key={s} className="flex items-start gap-2">
                    <span className="font-bold text-primary w-20 shrink-0">{s}</span>
                    <span className="text-foreground/70">{STAY_DESC[s]}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Clarification note */}
          <div className="mt-4 glass-card rounded-xl p-4 flex gap-3 border border-primary/20">
            <Info className="h-4 w-4 text-primary shrink-0 mt-0.5" />
            <p className="text-sm text-foreground/70">
              <b className="text-foreground">GRT2S</b> means two participants each paying ₹ per head, sharing one room.{" "}
              <b className="text-foreground">GRT2F / GRT3F</b> is one participant bringing family — the full room cost covers everyone.
              <b className="text-foreground"> JS3</b> is the budget Jungle Stay, triple-sharing only.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ── How to Pay ── */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-serif font-bold text-foreground mb-6">How to Pay</h2>

          <div className="pl-2">
            <Step n={1} title="Pick your package">
              Use the tariff table above. Consider: which days you're attending, your stay preference, and whether you're coming alone, sharing, or with family.
            </Step>
            <Step n={2} title="Transfer payment">
              Use any of the payment methods listed below — UPI, IMPS, Zelle (USD), or cash.
            </Step>
            <Step n={3} title="Submit the Google Form">
              Fill in your payment details using the form linked at the bottom of this page. Organising committee members can submit on behalf of others.
            </Step>
            <Step n={4} title="Upload screenshot (non-cash)">
              If you paid via UPI, IMPS, or Zelle — upload your payment screenshot in the form.
            </Step>
            <Step n={5} title="Cash payment">
              No screenshot needed. Simply note "Cash" in the form and mention to whom you handed it.
            </Step>
          </div>
        </motion.div>
      </section>

      {/* ── Payment Methods ── */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-serif font-bold text-foreground mb-5">Payment Methods</h2>

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
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-semibold text-foreground">{m.title}</p>
                    <Badge variant="default">{m.badge}</Badge>
                  </div>
                  <p className="text-sm text-foreground/70 mb-2">{m.detail}</p>
                  {m.placeholder && (
                    <div className="rounded-md border border-dashed border-border bg-background/30 px-3 py-2 text-xs text-muted-foreground font-mono">
                      {m.placeholder}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>


        </motion.div>
      </section>

      {/* ── Google Form CTA ── */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-8 border border-primary/25 glow-gold text-center"
        >
          <CheckCircle2 className="h-10 w-10 text-primary mx-auto mb-3" />
          <h2 className="text-2xl font-serif font-bold text-foreground mb-2">
            After Payment, Submit Details Here
          </h2>
          <p className="text-sm text-foreground/70 max-w-xl mx-auto mb-6">
            Paid full or partial? Submit your details via the form below. Organising committee
            members can submit on behalf of others. Cash payments are supported — no screenshot needed for cash.
          </p>

          <div className="flex flex-wrap gap-3 justify-center mb-6">
            <Badge variant="gold">Pay full or partial</Badge>
            <Badge variant="info">Committee can submit for others</Badge>
            <Badge variant="warn">Screenshot needed for non-cash</Badge>
          </div>

          <a
            href={PAYMENT_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg gold-gradient px-8 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-105 active:scale-100"
          >
            Submit Payment Details
            <ExternalLink className="h-4 w-4" />
          </a>

          <p className="text-xs text-muted-foreground mt-4 font-mono">{PAYMENT_FORM_URL}</p>
        </motion.div>
      </section>

      {/* ── Optional Contribution ── */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="mb-5">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-2">
              Support the Event <span className="text-base font-normal text-muted-foreground">(Optional)</span>
            </h2>
            <p className="text-sm text-foreground/70 max-w-2xl">
              To make the Pearl Jubilee truly memorable, we've planned a few special arrangements. You're welcome to
              sponsor any item fully, contribute partially, or simply help a fellow batchmate attend. Every contribution
              makes the celebration more inclusive and special.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sponsorItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="glass-card rounded-xl p-5 flex items-center gap-4"
              >
                <div className="h-10 w-10 rounded-lg bg-primary/15 border border-primary/20 flex items-center justify-center shrink-0">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{item.label}</p>
                  <p className="text-lg font-bold text-primary">{item.amount}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-5 glass-card rounded-xl p-4 flex gap-3 border border-primary/10">
            <Info className="h-4 w-4 text-primary shrink-0 mt-0.5" />
            <p className="text-sm text-foreground/70">
              You may sponsor any item fully, contribute any partial amount, or support a batchmate's participation.
              Mention your contribution in the payment form.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ── Custom requests note ── */}
      <section>
        <div className="glass-card rounded-xl p-6 flex gap-3">
          <Info className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-foreground mb-1">Custom / Special Requests</p>
            <p className="text-sm text-foreground/70">
              Need a custom combination — different rooms across nights, parents joining, or a non-standard package?
              Email us at <b className="text-foreground">tce96sj@gmail.com</b> with your requirements and we'll work
              something out wherever feasible.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
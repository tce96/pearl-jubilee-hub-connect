import SectionHeading from "@/components/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Is this a one-day or two-day event?",
    a: "The main event is on Friday, July 24. The celebration continues into Saturday morning, July 25. Optional stay is available on July 23 and/or July 25 based on your selected package.",
  },
  {
    q: "Where should I report on July 24?",
    a: "Two practical flows are being considered. Option 1: Morning reporting at TCE campus, followed by evening celebrations at the resort (similar to Silver Jubilee). Option 2: Early arrival at the resort (subject to early check-in availability), then proceed to the college. Final reporting instructions will be shared after attendance confirmation.",
  },
  {
    q: "Is early check-in available at the resort?",
    a: "Early check-in is currently under discussion with the resort. A limited number of rooms may be available from early morning on July 24, subject to availability and confirmed participation numbers.",
  },
  {
    q: "Will transportation be provided between the resort and the college?",
    a: "The college has agreed in principle to support bus transportation between the resort and campus. This is subject to bus availability and scheduling. Participants may also use their own vehicles if preferred.",
  },
  {
    q: "Is this a batchmates-only event or a family event?",
    a: "Due to limited room availability at Jungle Stay, accommodation there will be prioritized for batchmates. If families are joining, nearby hotel options may be considered based on availability. Final structure will depend on majority preference and confirmed participation.",
  },
  {
    q: "What stay options are available?",
    a: "Tentative stay options include: July 23 (optional early arrival), July 24 overnight stay, and July 25 optional extended stay. Final allocation will depend on confirmed participation and room distribution.",
  },
  {
    q: "How do I make the payment?",
    a: "UPI (Preferred): TCE96@YBL. You may use PhonePe, Google Pay, Paytm, or any UPI app. Bank Transfer: Account Holder – Senthil Kumar Somasundaram, Account Number – 109980711999, IFSC – ESFB0001071, Branch – Theni, Account Type – NRO Rupee Savings Account.",
  },
  {
    q: "How do I confirm my payment?",
    a: "After transferring funds, please email TCE96SJ@gmail.com with your name, amount transferred, date, transaction reference number, and selected package.",
  },
  {
    q: "Are there sponsorship opportunities?",
    a: "Yes. Voluntary sponsorship options include: Orchestra/Music Program – ₹30,000; Event Coordinator – ₹30,000; Stage & Decoration – ₹30,000; Photography & Videography – ₹20,000; T-shirt Sponsorship – ₹50,000. Interested batchmates may email TCE96SJ@gmail.com.",
  },
  {
    q: "Are we collecting funds for the TCE Alumni Fund?",
    a: "During the Silver Jubilee, the batch collectively contributed approximately ₹45 lakhs to TCE. As of now, there is no formal alumni fund collection planned as part of the Pearl Jubilee event. Those interested in voluntary contributions may contact the organizing committee for guidance.",
  },
  {
    q: "Are the tariffs final?",
    a: "No. The listed packages are indicative. Final pricing will depend on confirmed attendance, venue logistics, and room allocation. A transparent cost-per-head estimate will be shared before finalization.",
  },
];

export default function FaqPage() {
  return (
    <div className="px-6 py-12 lg:py-16 max-w-3xl mx-auto">
      <SectionHeading title="FAQ" subtitle="Frequently asked questions about the reunion." />

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="glass-card rounded-xl border-none px-5"
          >
            <AccordionTrigger className="text-left text-foreground hover:no-underline py-4 text-sm font-medium">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm pb-4 leading-relaxed">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

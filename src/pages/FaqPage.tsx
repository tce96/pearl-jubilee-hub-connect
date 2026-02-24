import SectionHeading from "@/components/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Can I bring my family (spouse / children)?",
    a: "Family participation is one of the key topics being voted on. Please fill out the Google Form to register your preference. If the majority votes in favour, a family add-on package will be available.",
  },
  {
    q: "Will alcohol be served at the evening gala?",
    a: "This is subject to the collective decision of the batch. The Google Form includes a preference question. The organizing committee will finalize based on majority consensus and venue policies.",
  },
  {
    q: "Where will we stay?",
    a: "The Gold and Platinum packages include resort accommodation for the night of July 24. Silver package holders can optionally book resort rooms at a group rate. Details will be shared closer to the event.",
  },
  {
    q: "How do I register or vote on preferences?",
    a: "Click the 'Register / Vote Now' button on the Home page or in the Tariffs section. It links to a Google Form where you can confirm attendance, select your package preference, and vote on key policy questions.",
  },
  {
    q: "What is the venue for the evening celebration?",
    a: "The resort venue is being finalized. Two options are under consideration, and the form includes a venue preference poll. The final choice will be announced by May 2026.",
  },
  {
    q: "Is transport provided between TCE campus and the resort?",
    a: "Yes. Air-conditioned buses will be arranged for all registered attendees for the evening transfer on July 24 and return on July 25.",
  },
  {
    q: "What if I can only attend one day?",
    a: "You're welcome! The Silver package covers day events on both days. If you only plan to attend Day 1 at campus, a reduced day-pass may be offered based on demand.",
  },
  {
    q: "Are the tariffs final?",
    a: "No. The listed packages are indicative. Final pricing will depend on venue selection, headcount, and the committee's budgeting. Early registrations help lock better rates.",
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

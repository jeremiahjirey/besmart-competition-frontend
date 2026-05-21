import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqData = [
    {
      key: "item-1",
      question: "Who can participate in these competitions?",
      answer:
        "Our platform is open to everyone above the age of 18. Certain competitions may have specific regional or professional level requirements which will be listed in the contest details.",
    },
    {
      key: "item-2",
      question: "Are there any entry fees?",
      answer:
        "Many of our foundational competitions are free to enter. Premium leagues may require a small registration fee to support prize pools and platform infrastructure.",
    },
    {
      key: "item-3",
      question: "How are winners selected?",
      answer:
        "Winners are chosen based on pre-defined rubrics by a panel of industry experts. Technical rounds use automated testing suites for absolute fairness.",
    },
    {
      key: "item-4",
      question: "When are the prize pools distributed?",
      answer:
        "Prizes are typically distributed within 30 days of the official winner announcement after identity verification processes are complete.",
    },
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-transparent" id="faq">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Find answers to common questions about our platform and
            competitions.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqData.map((item) => (
            <AccordionItem
              key={item.key}
              value={item.key}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 transition-all hover:border-primary/50 shadow-sm"
            >
              <AccordionTrigger className="py-6 text-left font-bold text-lg text-slate-900 dark:text-white hover:no-underline group">
                {item.question}
              </AccordionTrigger>

              <AccordionContent className="pb-6 text-slate-600 dark:text-slate-400 text-base leading-relaxed border-t border-slate-50 dark:border-slate-800/50 pt-4">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What types of startups do you work with?",
    answer: "We mostly submit tech related startups, websites, Saas, AI tools, and any software. If you have any questions you can send us an email at info@boulevardlegacy.com"
  },
  {
    question: "How long does the submission process typically take?",
    answer: "Usually, the submission process takes less than a week, but max 7 days. For ultimate package, it can take up to 7 to 10 days max, because of the quantity and tailored directory list we make based on your goals."
  },
  {
    question: "How much time it takes to see results?",
    answer: "The speed of results varies between directories. Some listings may gain visibility within 1-2 days, while others have longer approval processes."
  },
  {
    question: "What kind of results can I expect?",
    answer: "The result you can expect varies, but Increased website traffic, new users, improved search rankings for relevant keywords, and greater brand recognition within your niche."
  },
  {
    question: "What if I need to update after submission?",
    answer: "No worries, We offer up to 4 weeks of support for revision. Simply contact us with the changes, and we'll update your listings promptly."
  },
  {
    question: "Have more questions?",
    answer: "No worries, send us an email at info@boulevardlegacy.com"
  }
];

const FAQ = () => {
  return (
    <div className="py-32 bg-accent">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-20">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg px-8 py-2">
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
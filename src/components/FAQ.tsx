import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Who can book study rooms?",
    answer: "Study rooms can be booked by any student or faculty member with a valid email account. If you have any questions, you can contact us at contact@herrerastefano.com."
  },
  {
    question: "How far in advance can I book a room?",
    answer: "Rooms can be booked up to two weeks in advance. For special requests or extended booking periods, please contact our support team."
  },
  {
    question: "What are the operating hours for study rooms?",
    answer: "Study rooms are available according to the library's operating hours, which can be found on our website. Availability may vary during holidays and special events."
  },
  {
    question: "Can I cancel or modify my booking?",
    answer: "Yes, bookings can be canceled or modified up to 24 hours before the scheduled time. Please use the booking system interface or contact our support team for assistance."
  },
  {
    question: "What should I do if I encounter issues during booking?",
    answer: "If you encounter any issues while booking a study room, please send us an email at contact@herrerastefano.com, and we will assist you as soon as possible."
  }
];

const FAQ = () => {
  return (
    <div className="py-32 bg-accent">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-20">
          <h2 className="text-3xl font-bold tracking-tight text-foreground dark:text-white sm:text-4xl lg:text-5xl">
            {/* Changed from text-gray-900 */}
            Frequently Asked Questions
          </h2>
        </div>
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="bg-background dark:bg-background/50 rounded-lg px-8 py-2 border border-border shadow-sm"
                // Changed from bg-white and added border and shadow
              >
                <AccordionTrigger 
                  className="text-left font-semibold text-lg hover:no-underline text-foreground dark:text-white"
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent 
                  className="text-muted-foreground"
                  // Changed from text-gray-600
                >
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

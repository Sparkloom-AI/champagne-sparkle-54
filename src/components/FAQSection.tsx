import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
const FAQSection = () => {
  const faqs = [{
    question: "What makes your MVP service different?",
    answer: "Unlike traditional agencies, we specialize in rapid MVP development with a 30-day delivery guarantee. Our process is streamlined for startups and innovators who need to validate their ideas quickly without compromising on quality."
  }, {
    question: "What's included in the MVP package?",
    answer: "Your MVP includes core feature development, modern UI/UX design, deployment to a production environment, basic analytics integration, and a handover session with our team. We also provide documentation and 2 weeks of post-launch support."
  }, {
    question: "Do I own the code?",
    answer: "Yes, you receive 100% ownership of all code and assets we create for your project. We use industry-standard technologies and provide clean, documented code that can be easily maintained or extended by any developer."
  }, {
    question: "What happens after the 30 days?",
    answer: "After launching your MVP, you can choose to continue development with our flexible monthly subscription, or take the code in-house. We offer seamless handover and documentation to ensure a smooth transition, whatever you decide."
  }, {
    question: "What technologies do you use?",
    answer: "We use modern, scalable technologies like React, Next.js, Node.js, and PostgreSQL. Our stack is chosen for reliability and future scalability, ensuring your MVP can grow with your business needs."
  }];
  return <section id="faq" className="py-20 bg-sl-obsidian relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left side - Title and CTA */}
          <div className="lg:w-1/3 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-sl-pearl-100">
              Frequently asked questions.
            </h2>
            
          </div>

          {/* Right side - FAQ Accordion */}
          <div className="lg:w-2/3">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => {
                const isNeonHighlight = index % 2 === 0; // Alternate neon highlights
                return (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`} 
                    className={`border-sl-iron-600/30 bg-sl-obsidian/50 rounded-lg px-6 transition-all duration-300 hover:bg-sl-slate-800/30 ${
                      isNeonHighlight ? 'hover:border-accent-neon/30 hover:shadow-neon/50' : ''
                    }`}
                  >
                    <AccordionTrigger className={`text-left text-sl-pearl-100 py-6 text-lg font-medium hover:no-underline transition-colors duration-300 ${
                      isNeonHighlight ? 'hover:text-accent-neon' : 'hover:text-sl-auric-700'
                    }`}>
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sl-fog-300 pb-6 pt-0 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                )
              })}
            </Accordion>
          </div>
        </div>
      </div>
    </section>;
};
export default FAQSection;
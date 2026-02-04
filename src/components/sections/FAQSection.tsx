import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What topics do you write about?",
    answer: "I specialize in personal finance, insurance, fintech, and lifestyle content. But my notebook method means I can bring unexpected depth to almost any topic.",
  },
  {
    question: "Do you write bylined or ghostwritten content?",
    answer: "Both. About 70% of my work is ghostwritten for founders, executives, and brands. The rest carries my byline at publications like Bankrate and FOX Money.",
  },
  {
    question: "What's your typical turnaround?",
    answer: "Most articles take 5-7 business days from brief to final draft. Rush projects are possible with advance notice.",
  },
  {
    question: "How do you handle revisions?",
    answer: "Two rounds of revisions are included with every project. Most clients are happy after the first draft—my discovery process is thorough.",
  },
];

export function FAQSection() {
  return (
    <section className="py-24">
      <div className="space-y-12">
        <div className="space-y-4">
          <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase">
            Questions
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Frequently asked
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group rounded-lg border border-border bg-card"
            >
              <summary className="flex cursor-pointer items-center justify-between p-6 font-medium">
                {faq.question}
                <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-6">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

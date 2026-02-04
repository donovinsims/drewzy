import { MessageSquare, Search, Send } from "lucide-react";

const howItWorks = [
  {
    step: "01",
    title: "Share Your Vision",
    description: "Tell me about your topic, audience, and goals. I'll ask the right questions to understand what success looks like.",
  },
  {
    step: "02",
    title: "Research & Draft",
    description: "I dive deep—interviewing experts, pulling from my notebook, and crafting content that stands out from the noise.",
  },
  {
    step: "03",
    title: "Publish & Perform",
    description: "You get polished content ready to publish. I handle revisions until it's exactly right.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-24">
      <div className="space-y-12">
        <div className="space-y-4">
          <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase">
            How It Works
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            From brief to byline in 3 steps
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {howItWorks.map((item, index) => (
            <div key={index} className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-4xl font-semibold text-muted-foreground/50">
                  {item.step}
                </span>
                {index === 0 && <MessageSquare className="h-5 w-5 text-muted-foreground" />}
                {index === 1 && <Search className="h-5 w-5 text-muted-foreground" />}
                {index === 2 && <Send className="h-5 w-5 text-muted-foreground" />}
              </div>
              <h3 className="font-medium text-lg">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

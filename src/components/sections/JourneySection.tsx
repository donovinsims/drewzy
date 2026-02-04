const journeyItems = [
  {
    company: "Podcast Notes",
    topics: "Tech, Philosophy, Finance, Life",
    work: "Content Writing, Copywriting",
    current: true,
  },
  {
    company: "Jerry (Insurance Startup)",
    topics: "Car Insurance, Car Reviews, Geo Pages",
    work: "Content Marketing, Product Reviews, Listicles",
  },
  {
    company: "Bankrate",
    topics: "Car Insurance, Home Insurance, Personal Finance, Taxes",
    work: "Content Marketing, Product Reviews",
  },
  {
    company: "Bankrate Partnerships (FOX, NYP)",
    topics: "Personal Finance, Product Reviews",
    work: "Content Marketing, SME Interviews",
  },
  {
    company: "You?",
    topics: "What do you need?",
    work: "How do we do it?",
    cta: true,
  },
];

export function JourneySection() {
  return (
    <section className="py-24">
      <div className="space-y-12">
        <div className="space-y-4">
          <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase">
            My Journey
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            From notes to bylines
          </h2>
        </div>
        <div className="space-y-0">
          {journeyItems.map((item, index) => (
            <div key={index} className="group relative">
              <div className="flex items-start gap-6 py-6 border-b border-border">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-card text-sm font-medium">
                  {index + 1}
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium">
                      {item.company}
                    </h3>
                    {item.current && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-primary text-primary-foreground">
                        Current
                      </span>
                    )}
                    {item.cta && (
                      <span className="text-xs px-2 py-0.5 rounded-full border border-primary text-primary">
                        Next?
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">Topics:</span> {item.topics}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">Work:</span> {item.work}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

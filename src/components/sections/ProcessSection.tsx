import { ProcessVisualization } from "@/components/process/ProcessVisualization";

export function ProcessSection() {
  return (
    <section id="process" className="py-24">
      <div className="space-y-12">
        <div className="space-y-4">
          <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase">
            My Process
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            The notebook that powers everything
          </h2>
        </div>
        
        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I always find it impressive when someone can reference a timeless quote from 
              a classical philosopher or recall a relevant citation from the depths of history. 
              As much as I want to be like these masters of memorization, I&apos;ve realized 
              that my photographic memory is quite pixelated.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              That&apos;s why, for the better part of my professional life, I&apos;ve taken 
              notes on everything I consume—podcasts, movies, books—as well as my own internal 
              contemplation about the world around me.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Impressions and thoughts can be so fleeting if not written down. And I personally 
              have no problem pulling out my phone to locate a particular reference that would 
              add value, insight, or perspective to any conversation.
            </p>
          </div>
          
          <ProcessVisualization />
        </div>
      </div>
    </section>
  );
}

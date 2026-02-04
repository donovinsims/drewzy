import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="flex min-h-[90vh] flex-col justify-center pt-20">
      <div className="space-y-8">
        <div className="space-y-4">
          <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase">
            Content Writer & Ghostwriter
          </p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Most content blends into the background.{" "}
            <span className="text-muted-foreground">Mine doesn&apos;t.</span>
          </h1>
          <p className="text-xl font-medium text-foreground/80">
            I turn dry finance topics into standout reads through unexpected connections.
          </p>
        </div>
        <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
          5+ years making unexpected connections that turn forgettable personal finance and 
          insurance topics into standout reads for Bankrate, FOX Money, and The New York Post.
        </p>
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
          I don&apos;t just explain topics and concepts... I interview subject matter experts, 
          layer in creative storytelling, and pull from a meticulously kept notebook to give 
          dry subjects clarity, personality, and staying power.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button asChild size="lg" className="group">
            <a href="#work">
              See My Work
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="mailto:drewwaterstreet@gmail.com">
              Let&apos;s Talk
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

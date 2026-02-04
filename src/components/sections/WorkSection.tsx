import { WritingSampleGrid } from "@/components/portfolio/WritingSampleGrid";

export function WorkSection() {
  return (
    <section id="work" className="py-24">
      <div className="space-y-12">
        <div className="space-y-4">
          <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase">
            My Work
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Writing that converts
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            From SEO-optimized financial explainers to first-person lifestyle narratives—content 
            that doesn&apos;t just rank, but resonates.
          </p>
        </div>
        
        <WritingSampleGrid />
      </div>
    </section>
  );
}

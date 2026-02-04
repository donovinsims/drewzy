export function AboutSection() {
  return (
    <section className="py-24">
      <div className="grid gap-12 md:grid-cols-2 items-start">
        <div className="space-y-6">
          <div className="space-y-4">
            <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase">
              About Drew
            </p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              The Creative Connection-Maker
            </h2>
          </div>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I don&apos;t just write; I synthesize. My background spans the technical precision of 
              insurance startups and the narrative flow of national lifestyle publications.
            </p>
            <p>
              Whether it&apos;s explaining how a home insurance claim works or distilling Stoic 
              philosophy for the modern professional, my goal is the same: to find the unexpected 
              connection that makes a topic stick.
            </p>
            <p>
              I believe that great content isn&apos;t just about information—it&apos;s about momentum. 
              Like a flywheel, small insights build on each other until they create a powerful 
              narrative that resonates with your audience and drives results.
            </p>
          </div>
        </div>
        
        <div className="relative p-8 rounded-2xl border border-border bg-muted/30">
          <h3 className="text-xl font-medium mb-4 italic">&ldquo;Good writers explain things. Great writers connect them.&rdquo;</h3>
          <p className="text-sm text-muted-foreground">
            This philosophy drives every piece I produce. By bridging the gap between experts 
            and everyday readers, I create content that doesn&apos;t just get clicked—it gets remembered.
          </p>
          <div className="mt-8 pt-8 border-t border-border flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-foreground/10 flex items-center justify-center">
              <span className="text-lg font-semibold">DW</span>
            </div>
            <div>
              <p className="text-sm font-medium">Drew Waterstreet</p>
              <p className="text-xs text-muted-foreground">Content Strategy & Execution</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

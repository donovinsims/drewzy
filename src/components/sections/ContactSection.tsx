import { Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section id="contact" className="py-24">
      <div className="space-y-12">
        <div className="space-y-4">
          <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase">
            Let&apos;s Connect
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Ready to make your content stand out?
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            See my work in action and find out if we&apos;re a match for your next content 
            marketing campaign or copywriting challenge.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button asChild size="lg" className="group">
            <a href="mailto:drewwaterstreet@gmail.com">
              <Mail className="mr-2 h-4 w-4" />
              Start Your Project
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="https://podcastnotes.org" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Read on Podcast Notes
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

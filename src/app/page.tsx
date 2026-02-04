"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { Separator } from "@/components/ui/separator";
import { HeroSection } from "@/components/sections/HeroSection";
import { JourneySection } from "@/components/sections/JourneySection";
import { WorkSection } from "@/components/sections/WorkSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { CredibilityBar } from "@/components/branding/CredibilityBar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <span className="text-sm font-medium tracking-tight">Drew Waterstreet</span>
          <div className="flex items-center gap-4">
            <a href="#work" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Work
            </a>
            <a href="#process" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Process
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-4xl px-6">
        <HeroSection />
        <CredibilityBar />
        <AboutSection />
        <Separator />
        <JourneySection />
        <Separator />
        <WorkSection />
        <Separator />
        <ProcessSection />
        <Separator />
        <HowItWorksSection />
        <Separator />
        <FAQSection />
        <Separator />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-12">
        <div className="mx-auto max-w-4xl px-6 py-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Drew Waterstreet
            </p>
            <p className="text-sm text-muted-foreground">
              Content Writer & Ghostwriter
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

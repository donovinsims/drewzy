"use client";

import { cn } from "@/lib/utils";
import { Notebook, Lightbulb, Pencil, ArrowRight } from "lucide-react";

interface NotebookVisualizationProps {
  className?: string;
}

export function NotebookVisualization({ className }: NotebookVisualizationProps) {
  const notebookEntries = [
    {
      category: "Tech Trends",
      example: "AI adoption follows S-curve...",
      color: "border-l-foreground/40",
    },
    {
      category: "Human Nature",
      example: "Loss aversion > gain seeking...",
      color: "border-l-foreground/30",
    },
    {
      category: "Cultural Moments",
      example: "Gen Z redefining 'ownership'...",
      color: "border-l-foreground/20",
    },
    {
      category: "Behavioral Insights",
      example: "Decision fatigue peaks at 3pm...",
      color: "border-l-foreground/50",
    },
  ];

  return (
    <div className={cn("space-y-6", className)}>
      {/* Notebook header */}
      <div className="flex items-center gap-3">
        <div className="p-2.5 rounded-lg border border-border bg-card">
          <Notebook className="h-5 w-5 text-foreground" />
        </div>
        <div>
          <h4 className="font-medium text-sm">The Notebook</h4>
          <p className="text-xs text-muted-foreground">
            Where unexpected connections begin
          </p>
        </div>
      </div>

      {/* Notebook entries */}
      <div className="space-y-3">
        {notebookEntries.map((entry, index) => (
          <div
            key={index}
            className={cn(
              "pl-4 py-2 border-l-2 bg-muted/30 rounded-r-md",
              entry.color
            )}
          >
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              {entry.category}
            </span>
            <p className="text-sm text-foreground/80 mt-0.5 italic">
              &ldquo;{entry.example}&rdquo;
            </p>
          </div>
        ))}
      </div>

      {/* Connection illustration */}
      <div className="flex items-center gap-3 pt-4 border-t border-border">
        <Lightbulb className="h-4 w-4 text-muted-foreground" />
        <p className="text-xs text-muted-foreground">
          Ideas marinate until the right connection surfaces
        </p>
      </div>
    </div>
  );
}

// Flywheel visualization showing the compounding effect
interface FlywheelAnimationProps {
  className?: string;
}

export function FlywheelAnimation({ className }: FlywheelAnimationProps) {
  const flywheelSteps = [
    {
      label: "Observe",
      description: "Capture insights daily",
      icon: Notebook,
    },
    {
      label: "Connect",
      description: "Find unexpected links",
      icon: Lightbulb,
    },
    {
      label: "Create",
      description: "Write with context",
      icon: Pencil,
    },
  ];

  return (
    <div className={cn("space-y-6", className)}>
      {/* Flywheel header */}
      <div className="space-y-2">
        <h4 className="font-medium text-sm">The Flywheel Effect</h4>
        <p className="text-xs text-muted-foreground leading-relaxed">
          Small, consistent decisions compound into exponential results. 
          Each note adds momentum. Each connection makes the next one easier.
        </p>
      </div>

      {/* Visual flywheel */}
      <div className="relative">
        {/* Circular track */}
        <div className="flex items-center justify-center gap-2">
          {flywheelSteps.map((step, index) => (
            <div key={index} className="flex items-center">
              <div className="flex flex-col items-center gap-2 p-4">
                <div className="p-3 rounded-full border border-border bg-card">
                  <step.icon className="h-4 w-4 text-foreground" />
                </div>
                <div className="text-center">
                  <span className="block text-xs font-medium">{step.label}</span>
                  <span className="block text-xs text-muted-foreground">
                    {step.description}
                  </span>
                </div>
              </div>
              {index < flywheelSteps.length - 1 && (
                <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0" />
              )}
            </div>
          ))}
        </div>

        {/* Feedback loop indicator */}
        <div className="mt-4 flex items-center justify-center">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50 border border-border">
            <span className="text-xs text-muted-foreground">
              Repeat
            </span>
            <ArrowRight className="h-3 w-3 text-muted-foreground -rotate-180" />
          </div>
        </div>
      </div>

      {/* Quote */}
      <blockquote className="text-xs text-muted-foreground italic border-l-2 border-border pl-4">
        &ldquo;Writing is a flywheel—a concept coined by Jim Collins. 
        That&apos;s the very essence of content marketing.&rdquo;
      </blockquote>
    </div>
  );
}

// Combined process visualization
interface ProcessVisualizationProps {
  className?: string;
}

export function ProcessVisualization({ className }: ProcessVisualizationProps) {
  return (
    <div className={cn("grid gap-8 md:grid-cols-2", className)}>
      <NotebookVisualization />
      <FlywheelAnimation />
    </div>
  );
}

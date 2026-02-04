"use client";

import { cn } from "@/lib/utils";
import { publications, publicationOrder } from "@/lib/data/publications";

interface CredibilityBarProps {
  className?: string;
}

export function CredibilityBar({ className }: CredibilityBarProps) {
  // Only show main publications for credibility
  const credibilityPublications = ["bankrate", "fox-money", "new-york-post", "podcast-notes"];

  return (
    <div className={cn("py-8 border-y border-border", className)}>
      <div className="space-y-4">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide text-center">
          Featured In
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {credibilityPublications.map((pubId) => {
            const pub = publications[pubId as keyof typeof publications];
            if (!pub) return null;
            return (
              <div
                key={pubId}
                className="text-lg font-semibold text-muted-foreground/60 hover:text-foreground transition-colors"
              >
                {pub.name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Compact inline version
interface InlineCredibilityProps {
  className?: string;
}

export function InlineCredibility({ className }: InlineCredibilityProps) {
  return (
    <p className={cn("text-sm text-muted-foreground", className)}>
      Featured in{" "}
      <span className="font-medium text-foreground">Bankrate</span>,{" "}
      <span className="font-medium text-foreground">FOX Money</span>, and{" "}
      <span className="font-medium text-foreground">The New York Post</span>
    </p>
  );
}

// Stats/metrics display
interface StatsBarProps {
  className?: string;
}

export function StatsBar({ className }: StatsBarProps) {
  const stats = [
    { label: "Years Experience", value: "5+" },
    { label: "Articles Published", value: "500+" },
    { label: "Monthly Readers", value: "50K+" },
  ];

  return (
    <div className={cn("grid grid-cols-3 gap-4", className)}>
      {stats.map((stat) => (
        <div key={stat.label} className="text-center space-y-1">
          <span className="block text-2xl font-semibold tracking-tight">
            {stat.value}
          </span>
          <span className="block text-xs text-muted-foreground">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}

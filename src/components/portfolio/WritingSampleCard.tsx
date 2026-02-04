"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ExternalLink, Quote, ChevronDown } from "lucide-react";
import { publications } from "@/lib/data/publications";
import { SkillTags } from "./SkillTag";
import type { WritingSample } from "@/lib/data/writing-samples";

interface WritingSampleCardProps {
  sample: WritingSample;
  className?: string;
}

export function WritingSampleCard({ sample, className }: WritingSampleCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const publication = publications[sample.publicationId];

  return (
    <article
      className={cn(
        "group relative rounded-lg border border-border bg-card",
        "transition-all duration-200",
        "hover:border-foreground/20 hover:shadow-sm",
        className
      )}
    >
      {/* Main content */}
      <div className="p-6 space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
            {publication?.name}
          </span>
          {sample.externalUrl && (
            <a
              href={sample.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label={`Read full article: ${sample.title}`}
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>

        {/* Title */}
        <h3 className="font-medium text-lg leading-snug tracking-tight">
          {sample.title}
        </h3>

        {/* Excerpt */}
        <blockquote className="relative pl-4 border-l-2 border-border">
          <p className="text-sm text-muted-foreground leading-relaxed italic">
            &ldquo;{sample.excerpt}&rdquo;
          </p>
        </blockquote>

        {/* Skills and metrics */}
        <div className="flex items-center justify-between gap-4 pt-2">
          <SkillTags skillIds={sample.skillIds} maxDisplay={2} />
          {sample.metrics && (
            <span className="text-xs font-medium text-foreground whitespace-nowrap">
              {sample.metrics.value}
            </span>
          )}
        </div>

        {/* Expandable annotation */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={cn(
            "w-full flex items-center justify-between gap-2 pt-3 mt-2",
            "border-t border-border text-sm text-muted-foreground",
            "hover:text-foreground transition-colors",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
          )}
          aria-expanded={isExpanded}
        >
          <span className="flex items-center gap-2">
            <Quote className="h-3.5 w-3.5" />
            <span className="font-medium">Why this works</span>
          </span>
          <ChevronDown
            className={cn(
              "h-4 w-4 transition-transform duration-200",
              isExpanded && "rotate-180"
            )}
          />
        </button>

        {/* Annotation content */}
        <div
          className={cn(
            "overflow-hidden transition-all duration-200",
            isExpanded ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <p className="text-sm text-muted-foreground leading-relaxed pt-3">
            {sample.annotation}
          </p>
        </div>
      </div>
    </article>
  );
}

// Featured variant with larger display
interface FeaturedWritingSampleCardProps {
  sample: WritingSample;
  className?: string;
}

export function FeaturedWritingSampleCard({
  sample,
  className,
}: FeaturedWritingSampleCardProps) {
  const publication = publications[sample.publicationId];

  return (
    <article
      className={cn(
        "group relative rounded-lg border border-border bg-card p-8",
        "transition-all duration-200",
        "hover:border-foreground/20 hover:shadow-md",
        className
      )}
    >
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              Featured • {publication?.name}
            </span>
            <h3 className="font-semibold text-xl leading-snug tracking-tight">
              {sample.title}
            </h3>
          </div>
          {sample.externalUrl && (
            <a
              href={sample.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 p-2 rounded-md border border-border text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              aria-label={`Read full article: ${sample.title}`}
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>

        {/* Excerpt */}
        <blockquote className="relative pl-5 border-l-2 border-foreground/20">
          <p className="text-base text-muted-foreground leading-relaxed italic">
            &ldquo;{sample.excerpt}&rdquo;
          </p>
        </blockquote>

        {/* Annotation */}
        <div className="bg-muted/50 rounded-md p-4 space-y-2">
          <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground uppercase tracking-wide">
            <Quote className="h-3.5 w-3.5" />
            <span>Why this works</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {sample.annotation}
          </p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between gap-4 pt-2 border-t border-border">
          <SkillTags skillIds={sample.skillIds} maxDisplay={3} />
          {sample.metrics && (
            <span className="text-sm font-medium text-foreground">
              {sample.metrics.value}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

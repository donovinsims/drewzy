"use client";

import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";
import { WritingSampleCard, FeaturedWritingSampleCard } from "./WritingSampleCard";
import { PortfolioFilters } from "./PortfolioFilters";
import {
  writingSamples,
  getFeaturedWritingSamples,
  type WritingSample,
} from "@/lib/data/writing-samples";
import type { PublicationId } from "@/lib/data/publications";
import type { SkillId } from "@/lib/data/skills";

interface WritingSampleGridProps {
  showFeatured?: boolean;
  showFilters?: boolean;
  maxSamples?: number;
  className?: string;
}

export function WritingSampleGrid({
  showFeatured = true,
  showFilters = true,
  maxSamples,
  className,
}: WritingSampleGridProps) {
  const [activePublication, setActivePublication] = useState<PublicationId | "all">("all");
  const [activeSkill, setActiveSkill] = useState<SkillId | "all">("all");

  const filteredSamples = useMemo(() => {
    let samples = writingSamples;

    if (activePublication !== "all") {
      samples = samples.filter((s) => s.publicationId === activePublication);
    }

    if (activeSkill !== "all") {
      samples = samples.filter((s) => s.skillIds.includes(activeSkill));
    }

    if (maxSamples) {
      samples = samples.slice(0, maxSamples);
    }

    return samples;
  }, [activePublication, activeSkill, maxSamples]);

  const featuredSamples = useMemo(() => {
    if (!showFeatured) return [];
    return getFeaturedWritingSamples().slice(0, 2);
  }, [showFeatured]);

  // Non-featured samples for the grid
  const gridSamples = useMemo(() => {
    if (!showFeatured) return filteredSamples;
    const featuredIds = new Set(featuredSamples.map((s) => s.id));
    return filteredSamples.filter((s) => !featuredIds.has(s.id));
  }, [filteredSamples, featuredSamples, showFeatured]);

  return (
    <div className={cn("space-y-8", className)}>
      {/* Filters */}
      {showFilters && (
        <PortfolioFilters
          activePublication={activePublication}
          activeSkill={activeSkill}
          onPublicationChange={setActivePublication}
          onSkillChange={setActiveSkill}
        />
      )}

      {/* Featured samples - only show when filters are "all" */}
      {showFeatured && activePublication === "all" && activeSkill === "all" && (
        <div className="grid gap-6 lg:grid-cols-2">
          {featuredSamples.map((sample) => (
            <FeaturedWritingSampleCard key={sample.id} sample={sample} />
          ))}
        </div>
      )}

      {/* Sample grid */}
      {gridSamples.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2">
          {gridSamples.map((sample) => (
            <WritingSampleCard key={sample.id} sample={sample} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-muted-foreground">
          <p>No samples match the current filters.</p>
          <button
            onClick={() => {
              setActivePublication("all");
              setActiveSkill("all");
            }}
            className="mt-2 text-sm underline hover:text-foreground transition-colors"
          >
            Clear filters
          </button>
        </div>
      )}

      {/* Results count */}
      <p className="text-xs text-muted-foreground text-center">
        Showing {filteredSamples.length} of {writingSamples.length} samples
      </p>
    </div>
  );
}

// Simple grid without filtering for compact displays
interface SimpleWritingSampleGridProps {
  samples: WritingSample[];
  columns?: 1 | 2;
  className?: string;
}

export function SimpleWritingSampleGrid({
  samples,
  columns = 2,
  className,
}: SimpleWritingSampleGridProps) {
  return (
    <div
      className={cn(
        "grid gap-6",
        columns === 2 && "sm:grid-cols-2",
        className
      )}
    >
      {samples.map((sample) => (
        <WritingSampleCard key={sample.id} sample={sample} />
      ))}
    </div>
  );
}

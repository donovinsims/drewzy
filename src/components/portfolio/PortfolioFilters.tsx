"use client";

import { cn } from "@/lib/utils";
import { PublicationFilterBadge } from "./PublicationBadge";
import { SkillFilterTag } from "./SkillTag";
import { publicationOrder, type PublicationId } from "@/lib/data/publications";
import { skillOrder, type SkillId } from "@/lib/data/skills";

interface PortfolioFiltersProps {
  activePublication: PublicationId | "all";
  activeSkill: SkillId | "all";
  onPublicationChange: (publicationId: PublicationId | "all") => void;
  onSkillChange: (skillId: SkillId | "all") => void;
  className?: string;
}

export function PortfolioFilters({
  activePublication,
  activeSkill,
  onPublicationChange,
  onSkillChange,
  className,
}: PortfolioFiltersProps) {
  // Only show the most relevant skills for filtering
  const filterableSkills: (SkillId | "all")[] = [
    "all",
    "seo-content",
    "conversion-copy",
    "sme-interviews",
    "explainers",
    "lifestyle",
  ];

  return (
    <div className={cn("space-y-4", className)}>
      {/* Publication filters */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide mr-2">
          Publication
        </span>
        <PublicationFilterBadge
          publicationId="all"
          isActive={activePublication === "all"}
          onClick={() => onPublicationChange("all")}
        />
        {publicationOrder.map((pubId) => (
          <PublicationFilterBadge
            key={pubId}
            publicationId={pubId}
            isActive={activePublication === pubId}
            onClick={() => onPublicationChange(pubId)}
          />
        ))}
      </div>

      {/* Skill filters */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide mr-2">
          Skill
        </span>
        {filterableSkills.map((skillId) => (
          <SkillFilterTag
            key={skillId}
            skillId={skillId}
            isActive={activeSkill === skillId}
            onClick={() => onSkillChange(skillId)}
          />
        ))}
      </div>
    </div>
  );
}

// Compact single-row filter variant
interface CompactFiltersProps {
  activePublication: PublicationId | "all";
  onPublicationChange: (publicationId: PublicationId | "all") => void;
  className?: string;
}

export function CompactFilters({
  activePublication,
  onPublicationChange,
  className,
}: CompactFiltersProps) {
  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      <PublicationFilterBadge
        publicationId="all"
        isActive={activePublication === "all"}
        onClick={() => onPublicationChange("all")}
      />
      {publicationOrder.map((pubId) => (
        <PublicationFilterBadge
          key={pubId}
          publicationId={pubId}
          isActive={activePublication === pubId}
          onClick={() => onPublicationChange(pubId)}
        />
      ))}
    </div>
  );
}

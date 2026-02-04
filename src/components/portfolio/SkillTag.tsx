"use client";

import { cn } from "@/lib/utils";
import { skills, type SkillId } from "@/lib/data/skills";

interface SkillTagProps {
  skillId: SkillId;
  size?: "sm" | "md";
  showTooltip?: boolean;
  className?: string;
}

export function SkillTag({
  skillId,
  size = "sm",
  className,
}: SkillTagProps) {
  const skill = skills[skillId];

  if (!skill) return null;

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-muted/50",
        "text-muted-foreground font-medium",
        size === "sm" && "px-2 py-0.5 text-xs",
        size === "md" && "px-2.5 py-1 text-sm",
        className
      )}
      title={skill.description}
    >
      {skill.shortName}
    </span>
  );
}

// Filter version
interface SkillFilterTagProps {
  skillId: SkillId | "all";
  isActive: boolean;
  onClick: () => void;
  className?: string;
}

export function SkillFilterTag({
  skillId,
  isActive,
  onClick,
  className,
}: SkillFilterTagProps) {
  const label = skillId === "all" ? "All Skills" : skills[skillId]?.shortName;

  return (
    <button
      onClick={onClick}
      className={cn(
        "px-2.5 py-1 text-xs font-medium rounded-full transition-colors",
        "border border-border",
        "hover:bg-accent hover:text-accent-foreground",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        isActive && "bg-foreground text-background border-foreground hover:bg-foreground/90 hover:text-background",
        className
      )}
      aria-pressed={isActive}
    >
      {label}
    </button>
  );
}

// Display multiple skills as a row
interface SkillTagsProps {
  skillIds: SkillId[];
  maxDisplay?: number;
  size?: "sm" | "md";
  className?: string;
}

export function SkillTags({
  skillIds,
  maxDisplay = 3,
  size = "sm",
  className,
}: SkillTagsProps) {
  const displaySkills = skillIds.slice(0, maxDisplay);
  const remaining = skillIds.length - maxDisplay;

  return (
    <div className={cn("flex flex-wrap items-center gap-1.5", className)}>
      {displaySkills.map((skillId) => (
        <SkillTag key={skillId} skillId={skillId} size={size} />
      ))}
      {remaining > 0 && (
        <span className="text-xs text-muted-foreground">+{remaining}</span>
      )}
    </div>
  );
}

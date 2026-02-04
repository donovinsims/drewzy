"use client";

import { cn } from "@/lib/utils";
import { publications, type PublicationId } from "@/lib/data/publications";

interface PublicationBadgeProps {
  publicationId: PublicationId;
  size?: "sm" | "md" | "lg";
  showDescription?: boolean;
  className?: string;
}

export function PublicationBadge({
  publicationId,
  size = "md",
  showDescription = false,
  className,
}: PublicationBadgeProps) {
  const publication = publications[publicationId];

  if (!publication) return null;

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        size === "lg" && "text-base",
        className
      )}
    >
      <span
        className={cn(
          "font-medium tracking-tight",
          size === "sm" && "px-2 py-0.5",
          size === "md" && "px-2.5 py-1",
          size === "lg" && "px-3 py-1.5"
        )}
      >
        {publication.shortName}
      </span>
      {showDescription && (
        <span className="text-muted-foreground">{publication.description}</span>
      )}
    </div>
  );
}

// Compact version for filter buttons
interface PublicationFilterBadgeProps {
  publicationId: PublicationId | "all";
  isActive: boolean;
  onClick: () => void;
  className?: string;
}

export function PublicationFilterBadge({
  publicationId,
  isActive,
  onClick,
  className,
}: PublicationFilterBadgeProps) {
  const label =
    publicationId === "all" ? "All" : publications[publicationId]?.shortName;

  return (
    <button
      onClick={onClick}
      className={cn(
        "px-3 py-1.5 text-sm font-medium rounded-md transition-colors",
        "border border-border",
        "hover:bg-accent hover:text-accent-foreground",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        isActive && "bg-primary text-primary-foreground border-primary hover:bg-primary/90 hover:text-primary-foreground",
        className
      )}
      aria-pressed={isActive}
    >
      {label}
    </button>
  );
}

export interface Skill {
  id: string;
  name: string;
  shortName: string;
  description: string;
}

export const skills: Record<string, Skill> = {
  "conversion-copy": {
    id: "conversion-copy",
    name: "Conversion Copywriting",
    shortName: "Conversion",
    description: "Copy that drives action and moves readers through the funnel",
  },
  "seo-content": {
    id: "seo-content",
    name: "SEO Content",
    shortName: "SEO",
    description: "Search-optimized content that ranks and resonates",
  },
  "sme-interviews": {
    id: "sme-interviews",
    name: "SME Interviews",
    shortName: "Interviews",
    description: "Subject matter expert interviews that add credibility and depth",
  },
  "explainers": {
    id: "explainers",
    name: "Financial Explainers",
    shortName: "Explainers",
    description: "Making complex financial topics accessible to everyday readers",
  },
  "lifestyle": {
    id: "lifestyle",
    name: "Lifestyle Narratives",
    shortName: "Lifestyle",
    description: "First-person stories that connect on a human level",
  },
  "distillation": {
    id: "distillation",
    name: "Content Distillation",
    shortName: "Distillation",
    description: "Condensing hours of content into actionable insights",
  },
  "product-reviews": {
    id: "product-reviews",
    name: "Product Reviews",
    shortName: "Reviews",
    description: "Thorough product comparisons that inform buying decisions",
  },
  "audience-bridging": {
    id: "audience-bridging",
    name: "Audience Bridging",
    shortName: "Bridging",
    description: "Connecting niche topics to mainstream audiences",
  },
};

export const skillOrder = [
  "conversion-copy",
  "seo-content",
  "sme-interviews",
  "explainers",
  "lifestyle",
  "distillation",
] as const;

export type SkillId = keyof typeof skills;

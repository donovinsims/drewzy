import { publications, type PublicationId } from "./publications";
import { skills, type SkillId } from "./skills";

export interface WritingSample {
  id: string;
  title: string;
  publicationId: PublicationId;
  category: "content-marketing" | "conversion-copy" | "lifestyle" | "technical";
  topics: string[];
  skillIds: SkillId[];
  excerpt: string;
  annotation: string;
  externalUrl?: string;
  metrics?: {
    label: string;
    value: string;
  };
  featured: boolean;
}

export const writingSamples: WritingSample[] = [
  // Podcast Notes Samples
  {
    id: "crypto-explainer",
    title: "Making Crypto Accessible to Traditional Investors",
    publicationId: "podcast-notes",
    category: "content-marketing",
    topics: ["Cryptocurrency", "Investing", "Finance"],
    skillIds: ["audience-bridging", "distillation", "explainers"],
    excerpt:
      "The blockchain isn't just another buzzword—it's the financial infrastructure your grandkids will take for granted. But right now, it feels like trying to explain the internet to someone in 1994...",
    annotation:
      "This piece bridges the gap between crypto enthusiasts and traditional investors. I stripped away the jargon and focused on the 'why it matters' angle that resonates with cautious investors.",
    externalUrl: "https://podcastnotes.org",
    metrics: { label: "Engagement", value: "Top 10% read time" },
    featured: true,
  },
  {
    id: "habit-formation",
    title: "The Science of Habit Formation: What Actually Works",
    publicationId: "podcast-notes",
    category: "content-marketing",
    topics: ["Psychology", "Productivity", "Self-improvement"],
    skillIds: ["distillation", "explainers"],
    excerpt:
      "Every January, gyms overflow with resolution-makers. By February, they're ghost towns. The problem isn't willpower—it's architecture. Here's what the research actually says about building habits that stick...",
    annotation:
      "Distilled insights from behavioral psychology research into actionable takeaways. The gym metaphor hooks readers with a relatable experience before diving into the science.",
    externalUrl: "https://podcastnotes.org",
    featured: false,
  },
  {
    id: "stoic-modern-life",
    title: "Stoicism for the Anxious Professional",
    publicationId: "podcast-notes",
    category: "content-marketing",
    topics: ["Philosophy", "Mental Health", "Career"],
    skillIds: ["distillation", "audience-bridging"],
    excerpt:
      "Marcus Aurelius ran an empire while journaling about his anxieties. Two thousand years later, his advice still hits different when you're staring at 47 unread Slack messages...",
    annotation:
      "Ancient wisdom meets modern workplace stress. I pulled from my notebook's philosophy section to make 2,000-year-old ideas feel urgently relevant.",
    externalUrl: "https://podcastnotes.org",
    featured: true,
  },

  // Bankrate Samples
  {
    id: "home-insurance-claims",
    title: "How Long Does a Claim Affect Home Insurance Rates?",
    publicationId: "bankrate",
    category: "content-marketing",
    topics: ["Home Insurance", "Personal Finance", "Insurance Claims"],
    skillIds: ["seo-content", "explainers"],
    excerpt:
      "Unlike the ghost living in your spooky attic, a home insurance claim won't haunt you forever. Most claims affect your rates for three to seven years, depending on the type and severity...",
    annotation:
      "The 'spooky attic' metaphor makes a dry insurance topic memorable and shareable. This piece ranks on page one for multiple high-intent keywords.",
    externalUrl: "https://bankrate.com",
    metrics: { label: "Monthly readers", value: "50K+" },
    featured: true,
  },
  {
    id: "travel-rewards-guide",
    title: "Travel Rewards Credit Cards: A Complete Guide",
    publicationId: "bankrate",
    category: "content-marketing",
    topics: ["Credit Cards", "Travel", "Rewards"],
    skillIds: ["seo-content", "explainers", "product-reviews"],
    excerpt:
      "The best travel rewards card isn't the one with the splashiest sign-up bonus—it's the one that matches how you actually spend. Here's how to cut through the marketing and find your perfect match...",
    annotation:
      "SEO-optimized without sacrificing readability. I focused on user intent—people want guidance, not just feature lists. The 'perfect match' framing adds personality.",
    externalUrl: "https://bankrate.com",
    metrics: { label: "Conversions", value: "High-performing" },
    featured: false,
  },
  {
    id: "tax-brackets-explained",
    title: "Tax Brackets Explained: How They Actually Work",
    publicationId: "bankrate",
    category: "content-marketing",
    topics: ["Taxes", "Personal Finance", "Income"],
    skillIds: ["seo-content", "explainers"],
    excerpt:
      "Here's the thing about tax brackets that trips up almost everyone: moving into a higher bracket doesn't mean all your income gets taxed at that rate. It's more like a staircase than an elevator...",
    annotation:
      "The 'staircase vs elevator' analogy demystifies marginal tax rates—one of the most misunderstood concepts in personal finance. Clear explanations build trust and E-E-A-T.",
    externalUrl: "https://bankrate.com",
    metrics: { label: "Rankings", value: "Page 1" },
    featured: true,
  },
  {
    id: "car-insurance-factors",
    title: "12 Factors That Affect Your Car Insurance Rates",
    publicationId: "bankrate",
    category: "content-marketing",
    topics: ["Car Insurance", "Auto", "Personal Finance"],
    skillIds: ["seo-content", "explainers", "product-reviews"],
    excerpt:
      "Your car insurance rate isn't just about your driving record—it's a complex algorithm that weighs everything from your credit score to your zip code. Here's what actually moves the needle...",
    annotation:
      "Structured for both scanners and deep readers. The 'algorithm' framing acknowledges complexity while promising clarity. Each factor includes actionable advice.",
    externalUrl: "https://bankrate.com",
    featured: false,
  },

  // FOX Money / New York Post Samples
  {
    id: "savings-habits-interview",
    title: "What a Bank Executive Taught Me About Saving Money",
    publicationId: "fox-money",
    category: "lifestyle",
    topics: ["Savings", "Banking", "Personal Finance"],
    skillIds: ["sme-interviews", "lifestyle", "audience-bridging"],
    excerpt:
      "When I sat down with the Head of CIT Bank, I expected corporate talking points. Instead, I got surprisingly candid advice about the psychology of saving—and why most financial advice misses the mark...",
    annotation:
      "SME interview that goes beyond surface-level quotes. I pushed past the press release answers to get insights readers can't find elsewhere. The first-person framing builds trust.",
    externalUrl: "https://foxmoney.com",
    metrics: { label: "Reach", value: "National syndication" },
    featured: true,
  },
  {
    id: "side-hustle-reality",
    title: "The Side Hustle Reality Check Nobody Talks About",
    publicationId: "new-york-post",
    category: "lifestyle",
    topics: ["Side Hustles", "Income", "Career"],
    skillIds: ["lifestyle", "sme-interviews", "audience-bridging"],
    excerpt:
      "Social media makes side hustles look like ATMs. But after interviewing dozens of real people juggling extra income streams, I found a messier—and more honest—picture...",
    annotation:
      "First-person narrative that challenges the aspirational side-hustle content flooding feeds. Real stories from real people, not influencer fantasy.",
    externalUrl: "https://nypost.com",
    featured: false,
  },
  {
    id: "financial-anxiety",
    title: "How to Talk to Your Partner About Financial Anxiety",
    publicationId: "fox-money",
    category: "lifestyle",
    topics: ["Relationships", "Mental Health", "Personal Finance"],
    skillIds: ["lifestyle", "sme-interviews", "audience-bridging"],
    excerpt:
      "Money fights are the leading predictor of divorce—but most couples aren't actually fighting about money. They're fighting about what money represents: security, freedom, control...",
    annotation:
      "Combines relationship psychology with practical finance advice. I interviewed a financial therapist to add clinical credibility to an emotionally charged topic.",
    featured: true,
  },

  // Jerry Samples
  {
    id: "best-family-suvs",
    title: "Best Family SUVs for Safety-Conscious Parents",
    publicationId: "jerry",
    category: "content-marketing",
    topics: ["Cars", "SUVs", "Family", "Safety"],
    skillIds: ["product-reviews", "seo-content", "conversion-copy"],
    excerpt:
      "When you're hauling precious cargo, crash test ratings matter more than cup holders. Here are the SUVs that ace safety tests without sacrificing the features parents actually need...",
    annotation:
      "Product review content that prioritizes user intent. Parents searching for 'safe family SUV' want reassurance, not just specs. The 'precious cargo' opener speaks to that emotion.",
    metrics: { label: "Articles published", value: "200+" },
    featured: false,
  },
  {
    id: "insurance-comparison",
    title: "Progressive vs. GEICO: Which Actually Saves You More?",
    publicationId: "jerry",
    category: "content-marketing",
    topics: ["Car Insurance", "Insurance Comparison", "Savings"],
    skillIds: ["product-reviews", "conversion-copy", "seo-content"],
    excerpt:
      "Both Progressive and GEICO promise savings, but their discounts work differently. Here's how to figure out which one actually costs less for your specific situation...",
    annotation:
      "High-intent comparison content optimized for decision-stage searchers. I focused on the 'it depends' reality rather than declaring a single winner—building trust through honesty.",
    featured: false,
  },
];

// Helper functions
export function getWritingSamplesByPublication(publicationId: PublicationId) {
  return writingSamples.filter((sample) => sample.publicationId === publicationId);
}

export function getWritingSamplesBySkill(skillId: SkillId) {
  return writingSamples.filter((sample) => sample.skillIds.includes(skillId));
}

export function getFeaturedWritingSamples() {
  return writingSamples.filter((sample) => sample.featured);
}

export function getPublication(publicationId: PublicationId) {
  return publications[publicationId];
}

export function getSkill(skillId: SkillId) {
  return skills[skillId];
}

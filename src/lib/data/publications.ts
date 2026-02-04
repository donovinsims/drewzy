export interface Publication {
  id: string;
  name: string;
  shortName: string;
  description: string;
  url?: string;
}

export const publications: Record<string, Publication> = {
  "podcast-notes": {
    id: "podcast-notes",
    name: "Podcast Notes",
    shortName: "Podcast Notes",
    description: "Tech, philosophy, finance, and life insights distilled from hours of conversations",
    url: "https://podcastnotes.org",
  },
  "jerry": {
    id: "jerry",
    name: "Jerry",
    shortName: "Jerry",
    description: "Insurance startup content marketing and product reviews",
  },
  "bankrate": {
    id: "bankrate",
    name: "Bankrate",
    shortName: "Bankrate",
    description: "Personal finance authority with millions of monthly readers",
    url: "https://bankrate.com",
  },
  "fox-money": {
    id: "fox-money",
    name: "FOX Money",
    shortName: "FOX",
    description: "Personal finance features through Bankrate partnership",
  },
  "new-york-post": {
    id: "new-york-post",
    name: "The New York Post",
    shortName: "NYP",
    description: "Lifestyle narratives and personal finance features",
  },
};

export const publicationOrder = [
  "podcast-notes",
  "bankrate",
  "fox-money",
  "new-york-post",
  "jerry",
] as const;

export type PublicationId = keyof typeof publications;

export type Locale = 'tr' | 'en' | 'ru';

export type LocalizedText = Record<Locale, string>;
export type LocalizedStringArray = Record<Locale, string[]>;

export type ProjectCategory =
  | 'featured'
  | 'villa'
  | 'terrace'
  | 'hotel'
  | 'commercial'
  | 'public';

export type ProjectDetailGroup = {
  title: string;
  items: string[];
};

export type ProjectImages = {
  cover: string;
  hero: string;
  gallery: string[];
};

export type ProjectSeo = {
  title: LocalizedText;
  description: LocalizedText;
  keywords: Record<Locale, string[]>;
};

export type Project = {
  id: string;
  slug: LocalizedText;

  title: LocalizedText;
  excerpt: LocalizedText;
  location: LocalizedText;
  projectType: LocalizedText;

  category: ProjectCategory[];
  featured: boolean;

  completionYear: number;
  area: number;
  plantSpecies: number;
  seasonUsage: number;

  images: ProjectImages;

  story: LocalizedStringArray;

  approach: Record<Locale, ProjectDetailGroup[]>;
  details: Record<Locale, ProjectDetailGroup[]>;

  seo: ProjectSeo;
};
import { type Project } from '@/types/project';

export const ankaraCorporateCampus: Project = {
  id: 'project-010',

  slug: 'ankara-corporate-campus-landscape',

  featured: true,
  category: ['featured', 'commercial'],

  completionYear: 2023,
  area: 6400,
  plantSpecies: 460,
  seasonUsage: 4,

  title: {
    tr: 'Ankara Corporate Campus',
    en: 'Ankara Corporate Campus',
    ru: 'Корпоративный кампус Анкары',
  },

  excerpt: {
    tr: 'Kurumsal kimliği destekleyen çağdaş kampüs peyzajı.',
    en: 'A contemporary landscape supporting corporate identity.',
    ru: 'Современный ландшафт корпоративного кампуса.',
  },

  location: {
    tr: 'Ankara',
    en: 'Ankara',
    ru: 'Анкара',
  },

  projectType: {
    tr: 'Kurumsal Kampüs',
    en: 'Corporate Campus',
    ru: 'Корпоративный кампус',
  },

  images: {
    cover: '/images/projects/ankara-campus/cover.webp',
    hero: '/images/projects/ankara-campus/hero.webp',
    gallery: [
      '/images/projects/ankara-campus/gallery-01.webp',
      '/images/projects/ankara-campus/gallery-02.webp',
      '/images/projects/ankara-campus/gallery-03.webp',
      '/images/projects/ankara-campus/gallery-04.webp',
    ],
  },

  story: {
    tr: [
      'Kurumsal kampüs için çalışan deneyimini artıran sosyal ve yeşil alanlar tasarlandı.',
      'Peyzaj dili, mimari ile uyumlu ve marka kimliğini destekleyecek şekilde geliştirildi.',
    ],
    en: [],
    ru: [],
  },

  approach: {
    tr: [],
    en: [],
    ru: [],
  },

  details: {
    tr: [],
    en: [],
    ru: [],
  },

  seo: {
    title: {
      tr: 'Ankara Corporate Campus | Flora Adında',
      en: 'Ankara Corporate Campus | Flora Adında',
      ru: 'Корпоративный кампус Анкары | Flora Adında',
    },
    description: {
      tr: 'Kurumsal kampüs peyzaj tasarımı.',
      en: 'Corporate campus landscape design.',
      ru: 'Ландшафт корпоративного кампуса.',
    },
    keywords: {
      tr: ['kurumsal peyzaj'],
      en: ['corporate landscape'],
      ru: ['корпоративный ландшафт'],
    },
  },
};
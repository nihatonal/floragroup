export const locales = ['tr', 'en', 'ru'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'tr';

export const localePrefix = 'always';

export const pathnames = {
  '/': '/',
  '/hakkimizda': {
    tr: '/hakkimizda',
    en: '/about',
    ru: '/o-nas',
  },
  '/projelerimiz': {
    tr: '/projelerimiz',
    en: '/projects',
    ru: '/proekty',
  },
  '/galeri': {
    tr: '/galeri',
    en: '/gallery',
    ru: '/galereya',
  },
  '/iletisim': {
    tr: '/iletisim',
    en: '/contact',
    ru: '/kontakt',
  },
} as const;
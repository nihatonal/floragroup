import { projects } from '@/data/projects';
import { type Locale } from '@/types/project';

export const routeTranslations = {
  about: {
    tr: 'hakkimizda',
    en: 'about',
    ru: 'o-nas',
  },
  projects: {
    tr: 'projelerimiz',
    en: 'projects',
    ru: 'proekty',
  },
  gallery: {
    tr: 'galeri',
    en: 'gallery',
    ru: 'galereya',
  },
  contact: {
    tr: 'iletisim',
    en: 'contact',
    ru: 'kontakt',
  },
} as const;

const locales: Locale[] = ['tr', 'en', 'ru'];

function translateRouteSegment(
  segment: string,
  fromLocale: Locale,
  toLocale: Locale,
) {
  for (const route of Object.values(routeTranslations)) {
    if (route[fromLocale] === segment) {
      return route[toLocale];
    }
  }

  return segment;
}

function translateProjectSlug(
  slug: string,
  fromLocale: Locale,
  toLocale: Locale,
) {
  const project = projects.find((item) => item.slug[fromLocale] === slug);

  return project?.slug[toLocale] ?? slug;
}

export function getLocalizedPathname(
  pathname: string,
  currentLocale: Locale,
  nextLocale: Locale,
) {
  const segments = pathname.split('/').filter(Boolean);

  if (segments.length === 0) {
    return `/${nextLocale}`;
  }

  if (locales.includes(segments[0] as Locale)) {
    segments[0] = nextLocale;
  } else {
    segments.unshift(nextLocale);
  }

  const routeSegmentIndex = 1;
  const slugSegmentIndex = 2;

  const currentRouteSegment = segments[routeSegmentIndex];

  if (currentRouteSegment) {
    segments[routeSegmentIndex] = translateRouteSegment(
      currentRouteSegment,
      currentLocale,
      nextLocale,
    );
  }

  const nextRouteSegment = segments[routeSegmentIndex];

  if (
    nextRouteSegment === routeTranslations.projects[nextLocale] &&
    segments[slugSegmentIndex]
  ) {
    segments[slugSegmentIndex] = translateProjectSlug(
      segments[slugSegmentIndex],
      currentLocale,
      nextLocale,
    );
  }

  return `/${segments.join('/')}`;
}
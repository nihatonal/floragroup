import { type Project } from '@/types/project';

export const bursaBoutiqueHotel: Project = {
  id: 'project-009',

  slug: 'bursa-boutique-hotel-garden',

  featured: false,
  category: ['hotel'],

  completionYear: 2022,
  area: 1850,
  plantSpecies: 290,
  seasonUsage: 4,

  title: {
    tr: 'Bursa Butik Otel Bahçesi',
    en: 'Bursa Boutique Hotel Garden',
    ru: 'Сад бутик-отеля в Бурсе',
  },

  excerpt: {
    tr: 'Misafir deneyimini güçlendiren sakin ve zarif bahçe kurgusu.',
    en: 'A refined landscape enhancing guest experience.',
    ru: 'Элегантный сад для улучшения впечатления гостей.',
  },

  location: {
    tr: 'Bursa',
    en: 'Bursa',
    ru: 'Бурса',
  },

  projectType: {
    tr: 'Butik Otel',
    en: 'Boutique Hotel',
    ru: 'Бутик-отель',
  },

  images: {
    cover: '/images/projects/bursa-hotel/cover.webp',
    hero: '/images/projects/bursa-hotel/hero.webp',
    gallery: [
      '/images/projects/bursa-hotel/gallery-01.webp',
      '/images/projects/bursa-hotel/gallery-02.webp',
      '/images/projects/bursa-hotel/gallery-03.webp',
      '/images/projects/bursa-hotel/gallery-04.webp',
    ],
  },

  story: {
    tr: [
      'Bahçe tasarımı otelin mimari karakterini destekleyecek şekilde geliştirildi.',
      'Konukların günün her saatinde kullanabileceği açık alan deneyimi oluşturuldu.',
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
      tr: 'Bursa Butik Otel Bahçesi | Flora Adında',
      en: 'Bursa Boutique Hotel Garden | Flora Adında',
      ru: 'Сад бутик-отеля в Бурсе | Flora Adında',
    },
    description: {
      tr: 'Bursa butik otel peyzaj tasarımı.',
      en: 'Boutique hotel landscape design in Bursa.',
      ru: 'Ландшафтный дизайн бутик-отеля в Бурсе.',
    },
    keywords: {
      tr: ['otel peyzajı'],
      en: ['hotel landscape'],
      ru: ['ландшафт отеля'],
    },
  },
};
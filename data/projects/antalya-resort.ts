import { type Project } from '@/types/project';

export const antalyaResort: Project = {
  id: 'project-006',
  slug: 'antalya-resort-peyzaji',
  featured: true,
  category: ['featured', 'hotel'],

  completionYear: 2023,
  area: 4800,
  plantSpecies: 520,
  seasonUsage: 4,

  title: {
    tr: 'Antalya Resort Peyzajı',
    en: 'Antalya Resort Landscape',
    ru: 'Ландшафт курорта в Анталии',
  },

  excerpt: {
    tr: 'Otel misafir deneyimini güçlendiren, gölge, yönlendirme ve tropik Akdeniz dokusuyla tasarlanmış resort peyzajı.',
    en: 'A resort landscape designed to enhance guest experience through shade, circulation and Mediterranean tropical texture.',
    ru: 'Курортный ландшафт, усиливающий гостевой опыт благодаря тени, маршрутам и средиземноморской тропической фактуре.',
  },

  location: {
    tr: 'Antalya',
    en: 'Antalya',
    ru: 'Анталия',
  },

  projectType: {
    tr: 'Otel Peyzajı',
    en: 'Hotel Landscape',
    ru: 'Ландшафт отеля',
  },

  images: {
    cover: '/images/projects/antalya-resort/cover.webp',
    hero: '/images/projects/antalya-resort/hero.webp',
    gallery: [
      '/images/projects/antalya-resort/gallery-01.webp',
      '/images/projects/antalya-resort/gallery-02.webp',
      '/images/projects/antalya-resort/gallery-03.webp',
      '/images/projects/antalya-resort/gallery-04.webp',
      '/images/projects/antalya-resort/gallery-05.webp',
    ],
  },

  story: {
    tr: [
      'Antalya’daki resort projesi, misafirlerin konaklama deneyimini dış mekanla güçlendirmek amacıyla tasarlandı.',
      'Yönlendirme aksları, havuz çevresi, dinlenme alanları ve gölge bölgeleri bütüncül bir peyzaj diliyle ele alındı.',
      'Tropik Akdeniz bitkileriyle zenginleştirilen tasarım, dört mevsim güçlü bir görsel etki sunar.',
    ],
    en: [
      'The resort project in Antalya was designed to strengthen the guest experience through outdoor spaces.',
      'Circulation axes, pool surroundings, resting areas and shaded zones were handled with a unified landscape language.',
      'Enriched with tropical Mediterranean planting, the design creates a strong visual impact in every season.',
    ],
    ru: [
      'Курортный проект в Анталии разработан для усиления впечатления гостей через открытые пространства.',
      'Маршруты, зона бассейна, зоны отдыха и тени объединены единым ландшафтным языком.',
      'Тропические средиземноморские растения создают сильный визуальный эффект круглый год.',
    ],
  },

  approach: {
    tr: [
      {
        title: 'Misafir Deneyimi',
        items: ['Yönlendirme aksları güçlendirildi', 'Dinlenme alanları tanımlandı'],
      },
      {
        title: 'Tropik Doku',
        items: ['Akdeniz iklimine uygun türler seçildi', 'Yoğun yeşil katmanlar oluşturuldu'],
      },
      {
        title: 'Gölge & Konfor',
        items: ['Gölge alanları artırıldı', 'Havuz çevresi konforu geliştirildi'],
      },
    ],
    en: [
      {
        title: 'Guest Experience',
        items: ['Circulation axes were strengthened', 'Resting areas were defined'],
      },
      {
        title: 'Tropical Texture',
        items: ['Mediterranean climate species were selected', 'Dense green layers were created'],
      },
      {
        title: 'Shade & Comfort',
        items: ['Shaded areas were increased', 'Poolside comfort was improved'],
      },
    ],
    ru: [
      {
        title: 'Гостевой опыт',
        items: ['Маршруты усилены', 'Зоны отдыха определены'],
      },
      {
        title: 'Тропическая фактура',
        items: ['Выбраны растения для средиземноморского климата', 'Созданы плотные зелёные слои'],
      },
      {
        title: 'Тень и комфорт',
        items: ['Увеличены теневые зоны', 'Повышен комфорт у бассейна'],
      },
    ],
  },

  details: {
    tr: [
      {
        title: 'Bitki Kurgusu',
        items: ['Palmiye türleri', 'Tropik yapraklı bitkiler', 'Akdeniz çalıları'],
      },
      {
        title: 'Alan Kullanımı',
        items: ['Havuz çevresi', 'Yürüyüş rotaları', 'Gölgelikli dinlenme alanları'],
      },
      {
        title: 'Aydınlatma',
        items: ['Resort atmosferi', 'Yol yönlendirme ışıkları', 'Bitki vurgu aydınlatmaları'],
      },
    ],
    en: [
      {
        title: 'Planting',
        items: ['Palm species', 'Tropical foliage plants', 'Mediterranean shrubs'],
      },
      {
        title: 'Area Use',
        items: ['Pool surroundings', 'Walking routes', 'Shaded resting areas'],
      },
      {
        title: 'Lighting',
        items: ['Resort atmosphere', 'Path guiding lights', 'Plant accent lighting'],
      },
    ],
    ru: [
      {
        title: 'Посадка',
        items: ['Пальмы', 'Тропические лиственные растения', 'Средиземноморские кустарники'],
      },
      {
        title: 'Использование территории',
        items: ['Зона бассейна', 'Пешеходные маршруты', 'Теневые зоны отдыха'],
      },
      {
        title: 'Освещение',
        items: ['Курортная атмосфера', 'Подсветка маршрутов', 'Акценты на растениях'],
      },
    ],
  },

  seo: {
    title: {
      tr: 'Antalya Resort Peyzajı | Flora Adında',
      en: 'Antalya Resort Landscape | Flora Adında',
      ru: 'Ландшафт курорта в Анталии | Flora Adında',
    },
    description: {
      tr: 'Antalya’da otel ve resort alanları için premium peyzaj tasarımı.',
      en: 'Premium landscape design for hotel and resort spaces in Antalya.',
      ru: 'Премиальный ландшафтный дизайн для отелей и курортов в Анталии.',
    },
    keywords: {
      tr: ['antalya resort peyzaj', 'otel peyzajı', 'resort bahçe tasarımı'],
      en: ['antalya resort landscape', 'hotel landscape design', 'resort garden'],
      ru: ['ландшафт курорта Анталия', 'ландшафт отеля', 'сад курорта'],
    },
  },
};
import { type Project } from '@/types/project';

export const bodrumTeras: Project = {
  id: 'project-004',
  slug: 'bodrum-teras-bahcesi',
  featured: false,
  category: ['terrace'],

  completionYear: 2023,
  area: 420,
  plantSpecies: 160,
  seasonUsage: 4,

  title: {
    tr: 'Bodrum Teras Bahçesi',
    en: 'Bodrum Terrace Garden',
    ru: 'Террасный сад в Бодруме',
  },

  excerpt: {
    tr: 'Kompakt bir teras alanında doğal gölge, Akdeniz bitkileri ve premium dış mekan konforu.',
    en: 'Natural shade, Mediterranean planting and premium outdoor comfort in a compact terrace space.',
    ru: 'Естественная тень, средиземноморские растения и премиальный комфорт на компактной террасе.',
  },

  location: {
    tr: 'Muğla',
    en: 'Mugla',
    ru: 'Мугла',
  },

  projectType: {
    tr: 'Teras Bahçesi',
    en: 'Terrace Garden',
    ru: 'Террасный сад',
  },

  images: {
    cover: '/images/projects/bodrum-teras/cover.webp',
    hero: '/images/projects/bodrum-teras/hero.webp',
    gallery: [
      '/images/projects/bodrum-teras/gallery-01.webp',
      '/images/projects/bodrum-teras/gallery-02.webp',
      '/images/projects/bodrum-teras/gallery-03.webp',
      '/images/projects/bodrum-teras/gallery-04.webp',
    ],
  },

  story: {
    tr: [
      'Bodrum’daki bu teras bahçesinde amaç, sınırlı alanda maksimum konfor ve doğal atmosfer oluşturmaktı.',
      'Bitki kurgusu; rüzgar, güneş ve bakım ihtiyaçları dikkate alınarak tasarlandı.',
      'Teras alanı, gün batımı kullanımı ve sosyal yaşam için sıcak aydınlatma detaylarıyla tamamlandı.',
    ],
    en: [
      'The goal of this terrace garden in Bodrum was to create maximum comfort and natural atmosphere in a limited space.',
      'The planting strategy was designed around wind, sunlight and maintenance needs.',
      'The terrace was completed with warm lighting details for sunset use and social living.',
    ],
    ru: [
      'Целью террасного сада в Бодруме было создать максимальный комфорт и природную атмосферу на ограниченной площади.',
      'Посадка разработана с учётом ветра, солнца и ухода.',
      'Терраса дополнена тёплым освещением для вечернего использования и отдыха.',
    ],
  },

  approach: {
    tr: [
      {
        title: 'Kompakt Alan',
        items: ['Alan verimli kullanıldı', 'Sirkülasyon netleştirildi'],
      },
      {
        title: 'Akdeniz Dokusı',
        items: ['Kuraklığa dayanıklı türler seçildi', 'Doğal saksı ve taş dokular kullanıldı'],
      },
      {
        title: 'Akşam Kullanımı',
        items: ['Sıcak ışık kurgusu yapıldı', 'Oturma alanı vurgulandı'],
      },
    ],
    en: [
      {
        title: 'Compact Space',
        items: ['The area was used efficiently', 'Circulation was clarified'],
      },
      {
        title: 'Mediterranean Texture',
        items: ['Drought-tolerant species were selected', 'Natural pots and stone textures were used'],
      },
      {
        title: 'Evening Use',
        items: ['Warm lighting was planned', 'The seating area was emphasized'],
      },
    ],
    ru: [
      {
        title: 'Компактное пространство',
        items: ['Площадь использована эффективно', 'Схема движения уточнена'],
      },
      {
        title: 'Средиземноморская фактура',
        items: ['Выбраны засухоустойчивые растения', 'Использованы натуральные кашпо и камень'],
      },
      {
        title: 'Вечернее использование',
        items: ['Спланировано тёплое освещение', 'Акцентирована зона отдыха'],
      },
    ],
  },

  details: {
    tr: [
      {
        title: 'Bitki Seçimi',
        items: ['Zeytin', 'Lavanta', 'Aromatik Akdeniz türleri'],
      },
      {
        title: 'Mobilya & Konfor',
        items: ['Dış mekana uygun oturma alanı', 'Gölgelik çözümü', 'Rüzgar etkisine uygun yerleşim'],
      },
      {
        title: 'Işık',
        items: ['Sıcak zemin ışıkları', 'Bitki vurgu aydınlatması', 'Akşam atmosferi'],
      },
    ],
    en: [
      {
        title: 'Plant Selection',
        items: ['Olive trees', 'Lavender', 'Aromatic Mediterranean species'],
      },
      {
        title: 'Furniture & Comfort',
        items: ['Outdoor seating area', 'Shade solution', 'Layout adapted to wind exposure'],
      },
      {
        title: 'Lighting',
        items: ['Warm floor lights', 'Plant accent lighting', 'Evening atmosphere'],
      },
    ],
    ru: [
      {
        title: 'Подбор растений',
        items: ['Оливковые деревья', 'Лаванда', 'Ароматические средиземноморские виды'],
      },
      {
        title: 'Мебель и комфорт',
        items: ['Зона отдыха для улицы', 'Решение для тени', 'Планировка с учётом ветра'],
      },
      {
        title: 'Освещение',
        items: ['Тёплая подсветка пола', 'Акцентная подсветка растений', 'Вечерняя атмосфера'],
      },
    ],
  },

  seo: {
    title: {
      tr: 'Bodrum Teras Bahçesi | Flora Adında',
      en: 'Bodrum Terrace Garden | Flora Adında',
      ru: 'Террасный сад в Бодруме | Flora Adında',
    },
    description: {
      tr: 'Bodrum’da kompakt teras alanı için Akdeniz dokulu peyzaj ve bahçe tasarımı.',
      en: 'Mediterranean-inspired terrace garden design in Bodrum.',
      ru: 'Средиземноморский дизайн террасного сада в Бодруме.',
    },
    keywords: {
      tr: ['bodrum teras bahçesi', 'teras peyzaj', 'akdeniz bahçesi'],
      en: ['bodrum terrace garden', 'terrace landscape', 'mediterranean garden'],
      ru: ['террасный сад Бодрум', 'ландшафт террасы', 'средиземноморский сад'],
    },
  },
};
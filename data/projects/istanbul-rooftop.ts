import { type Project } from '@/types/project';

export const istanbulRooftop: Project = {
  id: 'project-008',
  slug: 'istanbul-rooftop-terrace',

  featured: false,
  category: ['terrace'],

  completionYear: 2024,
  area: 320,
  plantSpecies: 140,
  seasonUsage: 4,

  title: {
    tr: 'İstanbul Rooftop Terrace',
    en: 'Istanbul Rooftop Terrace',
    ru: 'Терраса Rooftop в Стамбуле',
  },

  excerpt: {
    tr: 'Şehir manzarasını doğal dokularla buluşturan premium teras bahçesi.',
    en: 'A premium rooftop garden blending city views with natural textures.',
    ru: 'Премиальная терраса, объединяющая городской вид и природную среду.',
  },

  location: {
    tr: 'İstanbul',
    en: 'Istanbul',
    ru: 'Стамбул',
  },

  projectType: {
    tr: 'Çatı Terası',
    en: 'Rooftop Terrace',
    ru: 'Терраса на крыше',
  },

  images: {
    cover: '/images/projects/istanbul-rooftop/cover.webp',
    hero: '/images/projects/istanbul-rooftop/hero.webp',
    gallery: [
      '/images/projects/istanbul-rooftop/gallery-01.webp',
      '/images/projects/istanbul-rooftop/gallery-02.webp',
      '/images/projects/istanbul-rooftop/gallery-03.webp',
      '/images/projects/istanbul-rooftop/gallery-04.webp',
    ],
  },

  story: {
    tr: [
      'Şehir merkezindeki bu çatı terası, doğayı yoğun kent yaşamına taşımak amacıyla tasarlandı.',
      'Bitki adaları, oturma alanları ve gece aydınlatmaları ile yaşayan bir dış mekan oluşturuldu.',
    ],
    en: [
      'This rooftop terrace was designed to bring nature into the heart of the city.',
      'Plant islands, lounge spaces and lighting create a vibrant outdoor experience.',
    ],
    ru: [
      'Терраса была создана для того, чтобы привнести природу в центр города.',
      'Озеленение, зоны отдыха и освещение формируют живое пространство.',
    ],
  },

  approach: {
    tr: [
      {
        title: 'Şehir Manzarası',
        items: ['Manzara korunarak planlandı'],
      },
      {
        title: 'Yeşil Adalar',
        items: ['Modüler bitki alanları oluşturuldu'],
      },
      {
        title: 'Akşam Kullanımı',
        items: ['Ambiyans aydınlatmaları eklendi'],
      },
    ],
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
      tr: 'İstanbul Rooftop Terrace | Flora Adında',
      en: 'Istanbul Rooftop Terrace | Flora Adında',
      ru: 'Терраса Rooftop в Стамбуле | Flora Adında',
    },
    description: {
      tr: 'İstanbul’da premium rooftop teras tasarımı.',
      en: 'Premium rooftop terrace design in Istanbul.',
      ru: 'Премиальная терраса на крыше в Стамбуле.',
    },
    keywords: {
      tr: ['rooftop terrace', 'teras bahçesi'],
      en: ['rooftop garden'],
      ru: ['терраса на крыше'],
    },
  },
};
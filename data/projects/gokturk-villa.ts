import { type Project } from "@/types/project";

export const gokturkVilla: Project = {
  id: "project-002",
  slug: {
  tr: 'gokturk-modern-villa-bahcesi',
  en: 'gokturk-modern-villa-garden',
  ru: 'sovremennyy-sad-villy-gokturk',
},
  featured: false,
  category: ["featured", "villa"],

  completionYear: 2024,
  area: 850,
  plantSpecies: 280,
  seasonUsage: 4,

  title: {
    tr: "Göktürk Modern Villa Bahçesi",
    en: "Göktürk Modern Villa Garden",
    ru: "Современный сад виллы в Гёктюрке",
  },

 excerpt: {
  tr: 'Modern villa yaşamını tamamlayan, doğal dokular, sakin peyzaj kompozisyonları ve yıl boyu kullanılabilir açık alanlar sunan premium bahçe tasarımı.',
  en: 'A premium garden design featuring natural textures, elegant planting compositions, and outdoor spaces designed for year-round villa living.',
  ru: 'Премиальный сад для современной виллы с природными материалами, выразительным озеленением и комфортными пространствами для круглогодичного использования.',
},

  location: {
    tr: "İstanbul",
    en: "Istanbul",
    ru: "Стамбул",
  },

  projectType: {
    tr: "Villa Bahçesi",
    en: "Villa Garden",
    ru: "Сад виллы",
  },

  images: {
    cover: "/images/projects/gokturk-villa/cover.webp",
    hero: "/images/projects/gokturk-villa/hero.webp",
    gallery: [
      "/images/projects/gokturk-villa/gallery-01.webp",
      "/images/projects/gokturk-villa/gallery-02.webp",
      "/images/projects/gokturk-villa/gallery-03.webp",
      "/images/projects/gokturk-villa/gallery-04.webp",
      "/images/projects/gokturk-villa/gallery-05.webp",
    ],
  },

  story: {
    tr: [
      "Modern Villa Yaşamına Doğal Bir Çerçeve",

      "Göktürk’te konumlanan bu villa bahçesi projesinde amaç, çağdaş mimariyi destekleyen sakin, rafine ve fonksiyonel bir dış mekan deneyimi oluşturmaktı.",

      "Bahçe genelinde doğal taş yüzeyler, her dem yeşil bitkiler ve yumuşak geçişli peyzaj katmanları kullanılarak mimari ile doğa arasında güçlü bir denge kuruldu. Dinlenme, sosyalleşme ve günlük kullanım senaryoları ayrı zonlar halinde planlandı.",

      "Dört mevsim görsel süreklilik sağlayan bitki seçimi ve akşam kullanımını destekleyen sıcak aydınlatma detayları sayesinde bahçe, yıl boyunca yaşayan bir açık alan deneyimi sunmaktadır.",
    ],

    en: [
      "A Natural Extension of Contemporary Villa Living",

      "Located in Göktürk, this villa garden was designed to create a calm, refined, and highly functional outdoor environment that complements the contemporary architecture.",

      "Natural stone surfaces, evergreen planting and layered landscape compositions establish a strong balance between architecture and nature. Dedicated zones for relaxation, social gatherings and everyday use were carefully integrated into the design.",

      "Seasonal planting interest and warm evening lighting ensure that the garden remains inviting and functional throughout the entire year.",
    ],

    ru: [
      "Природное продолжение современной виллы",

      "Этот проект сада для виллы в Гёктюрке был создан для формирования спокойной, элегантной и функциональной среды, гармонирующей с современной архитектурой.",

      "Натуральный камень, вечнозеленые растения и многослойное озеленение обеспечивают баланс между архитектурой и природой. Пространство разделено на зоны отдыха, общения и повседневного использования.",

      "Благодаря круглогодичной декоративности растений и теплому вечернему освещению сад остается комфортным в любое время года.",
    ],
  },

  approach: {
    tr: [
      {
        title: "Modern Mimari",
        items: [
          "Mimari ile bütünleşen peyzaj dili",
          "Temiz geometriler ve net sınırlar",
          "Minimal ve zamansız tasarım yaklaşımı",
        ],
      },
      {
        title: "Açık Alan Yaşamı",
        items: [
          "Dinlenme ve sosyalleşme alanları",
          "Günlük kullanım senaryoları",
          "Bahçe ile iç mekan ilişkisi",
        ],
      },
      {
        title: "Düşük Bakım",
        items: [
          "Her dem yeşil bitki türleri",
          "Otomatik sulama sistemi",
          "Kolay sürdürülebilir peyzaj kurgusu",
        ],
      },
      {
        title: "Dört Mevsim Kullanım",
        items: [
          "Yıl boyu yeşil görünüm",
          "Mevsimsel vurgu bitkileri",
          "Akşam kullanımını destekleyen aydınlatma",
        ],
      },
    ],

    en: [
      {
        title: "Contemporary Architecture",
        items: [
          "Landscape integrated with architecture",
          "Clean geometries and defined boundaries",
          "Minimal and timeless design language",
        ],
      },
      {
        title: "Outdoor Living",
        items: [
          "Spaces for relaxation and gathering",
          "Everyday use scenarios",
          "Strong indoor-outdoor relationship",
        ],
      },
      {
        title: "Low Maintenance",
        items: [
          "Evergreen planting palette",
          "Automatic irrigation system",
          "Sustainable landscape strategy",
        ],
      },
      {
        title: "Year-Round Enjoyment",
        items: [
          "Permanent green structure",
          "Seasonal accent planting",
          "Lighting designed for evening use",
        ],
      },
    ],

    ru: [
      {
        title: "Современная архитектура",
        items: [
          "Ландшафт интегрирован с архитектурой",
          "Чистая геометрия и четкие границы",
          "Минималистичный и вне времени дизайн",
        ],
      },
      {
        title: "Жизнь на открытом воздухе",
        items: [
          "Зоны отдыха и общения",
          "Сценарии повседневного использования",
          "Связь между домом и садом",
        ],
      },
      {
        title: "Простой уход",
        items: [
          "Вечнозеленые растения",
          "Автоматическая система полива",
          "Устойчивая ландшафтная концепция",
        ],
      },
      {
        title: "Круглогодичное использование",
        items: [
          "Постоянная зеленая структура",
          "Сезонные акцентные растения",
          "Освещение для вечернего использования",
        ],
      },
    ],
  },

  details: {
    tr: [
      {
        title: "Bitkisel Tasarım",
        items: [
          "280+ bitki türü",
          "Her dem yeşil kompozisyonlar",
          "Mevsimsel renk geçişleri",
        ],
      },
      {
        title: "Bahçe Yaşamı",
        items: [
          "Dinlenme alanları",
          "Sosyal kullanım mekanları",
          "Aile yaşamını destekleyen açık alanlar",
        ],
      },
      {
        title: "Malzeme Dili",
        items: [
          "Doğal taş yürüyüş yolları",
          "Minimal sert zemin tasarımı",
          "Mimari ile uyumlu detaylar",
        ],
      },
      {
        title: "Aydınlatma",
        items: [
          "Yol ve yönlendirme ışıkları",
          "Bitki vurgu aydınlatmaları",
          "Sıcak ve davetkar atmosfer",
        ],
      },
    ],

    en: [
      {
        title: "Planting Design",
        items: [
          "280+ plant species",
          "Evergreen compositions",
          "Seasonal color transitions",
        ],
      },
      {
        title: "Garden Living",
        items: [
          "Relaxation areas",
          "Social gathering spaces",
          "Outdoor zones supporting family life",
        ],
      },
      {
        title: "Material Palette",
        items: [
          "Natural stone pathways",
          "Minimal hardscape design",
          "Architecturally integrated details",
        ],
      },
      {
        title: "Lighting Design",
        items: [
          "Path and wayfinding lighting",
          "Plant accent illumination",
          "Warm and welcoming atmosphere",
        ],
      },
    ],

    ru: [
      {
        title: "Озеленение",
        items: [
          "Более 280 видов растений",
          "Вечнозеленые композиции",
          "Сезонные цветовые акценты",
        ],
      },
      {
        title: "Жизнь в саду",
        items: [
          "Зоны отдыха",
          "Пространства для общения",
          "Открытые зоны для семейного отдыха",
        ],
      },
      {
        title: "Материалы",
        items: [
          "Дорожки из натурального камня",
          "Минималистичные покрытия",
          "Детали, интегрированные с архитектурой",
        ],
      },
      {
        title: "Освещение",
        items: [
          "Подсветка маршрутов",
          "Акцентное освещение растений",
          "Теплая и уютная атмосфера",
        ],
      },
    ],
  },

  seo: {
    title: {
      tr: "Göktürk Modern Villa Bahçesi | Flora Adında",
      en: "Göktürk Modern Villa Garden | Flora Adında",
      ru: "Современный сад виллы в Гёктюрке | Flora Adında",
    },

    description: {
      tr: "İstanbul Göktürk'te modern villa yaşamı için tasarlanan premium peyzaj projesi. Doğal taş yüzeyler, her dem yeşil bitkiler ve dört mevsim yaşayan bahçe tasarımı.",
      en: "Premium villa landscape design in Göktürk, Istanbul featuring evergreen planting, natural stone materials and year-round outdoor living.",
      ru: "Премиальный ландшафтный проект современной виллы в Гёктюрке с вечнозелеными растениями, натуральным камнем и комфортной средой круглый год.",
    },

    keywords: {
      tr: [
        "göktürk villa bahçesi",
        "modern villa peyzajı",
        "istanbul peyzaj tasarımı",
        "villa bahçe tasarımı",
        "lüks villa bahçesi",
      ],

      en: [
        "modern villa garden",
        "villa landscape design",
        "gokturk landscape project",
        "luxury villa garden",
        "istanbul garden design",
      ],

      ru: [
        "сад виллы",
        "ландшафт виллы",
        "современный сад",
        "ландшафт Гёктюрк",
        "дизайн сада Стамбул",
      ],
    },
  },
};

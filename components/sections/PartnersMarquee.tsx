'use client';

import { useTranslations } from 'next-intl';
import Container from '@/components/ui/Container';
import SectionLabel from '@/components/ui/SectionLabel';

const partners = [
  'Novaterra',
  'Greenline',
  'Botanika Studio',
  'Flora Studio',
  'Urban Garden',
  'Eco Landscape',
  'Villa Verde',
  'Garden House',
  'Luna Resort',
  'Terra Living',
  'Palm Estate',
  'Natural Spaces',
];

function MarqueeLine({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className="group flex overflow-hidden">
      <div
        className={`flex min-w-max shrink-0 items-center gap-7 py-2 ${
          reverse ? 'animate-marqueeReverse' : 'animate-marquee'
        } group-hover:[animation-play-state:paused]`}
      >
        {[...partners, ...partners, ...partners].map((item, index) => (
          <div key={`${item}-${index}`} className="flex items-center gap-7">
            <span className="whitespace-nowrap font-display text-2xl leading-none tracking-[-0.05em] text-flora-ivory md:text-3xl">
              {item}
            </span>
            <span className="size-1 rounded-full bg-flora-champagne/80" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PartnersMarquee() {
  const t = useTranslations('home.partners');

  return (
    <section className="relative overflow-hidden bg-flora-ivory py-16 text-flora-charcoal md:py-20">
      <Container className="mb-10">
        <SectionLabel>{t('label')}</SectionLabel>

        <h2 className="max-w-3xl font-display text-4xl leading-[0.96] tracking-[-0.05em] md:text-6xl">
          {t('title')}
        </h2>
      </Container>

      <div className="relative overflow-hidden border-y border-flora-forest/10 bg-flora-forest py-5 md:py-7">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-28 bg-gradient-to-r from-flora-forest to-transparent md:w-64" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-28 bg-gradient-to-l from-flora-forest to-transparent md:w-64" />

        <div className="relative space-y-1.5 md:space-y-2">
          <MarqueeLine />
          <MarqueeLine reverse />
        </div>
      </div>
    </section>
  );
}
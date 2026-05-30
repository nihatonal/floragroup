'use client';

import { useTranslations } from 'next-intl';
import Container from '@/components/ui/Container';
import FadeUp from '@/components/motion/FadeUp';
import Stagger, { StaggerItem } from '@/components/motion/Stagger';

const stats = [
  { key: 'experience', value: '12+' },
  { key: 'projects', value: '250+' },
  { key: 'cities', value: '8' },
  { key: 'satisfaction', value: '98%' },
] as const;

export default function AboutStats() {
  const t = useTranslations('about.stats');

  return (
    <section className="relative overflow-hidden bg-flora-forest py-16 text-flora-ivory md:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_40%,rgba(200,173,127,0.12),transparent_34%)]" />

      <Container className="relative">
        <FadeUp>
          <p className="mb-10 text-[10px] uppercase tracking-luxury text-flora-champagne">
            {t('label')}
          </p>
        </FadeUp>

        <Stagger className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <StaggerItem
              key={item.key}
              className={`${
                index !== stats.length - 1
                  ? 'lg:border-r lg:border-flora-ivory/10'
                  : ''
              }`}
            >
              <div className="text-center lg:text-left">
                <p className="font-display text-6xl leading-none tracking-[-0.055em] text-flora-ivory md:text-7xl">
                  {item.value}
                </p>

                <p className="mt-4 text-[11px] uppercase tracking-[0.16em] text-flora-ivory/58">
                  {t(`items.${item.key}`)}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
'use client';

import Image from 'next/image';
import {
  Flower2,
  Hammer,
  Sprout,
  Sun,
  Trees,
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import Container from '@/components/ui/Container';
import SectionLabel from '@/components/ui/SectionLabel';
import FadeUp from '@/components/motion/FadeUp';
import Stagger, { StaggerItem } from '@/components/motion/Stagger';
import ImageParallax from '@/components/motion/ImageParallax';

const expertise = [
  { key: 'landscape', icon: Trees },
  { key: 'residential', icon: Flower2 },
  { key: 'irrigation', icon: Sprout },
  { key: 'lighting', icon: Sun },
  { key: 'maintenance', icon: Hammer },
] as const;

export default function AboutExpertise() {
  const t = useTranslations('about.expertise');

  return (
    <section className="relative overflow-hidden bg-flora-ivory pb-16 text-flora-charcoal md:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.45fr_1fr] lg:items-center">
          <div>
            <FadeUp>
              <SectionLabel>{t('label')}</SectionLabel>
            </FadeUp>

            <Stagger className="mt-7 space-y-5" staggerDelay={0.06}>
              {expertise.map((item) => {
                const Icon = item.icon;

                return (
                  <StaggerItem key={item.key}>
                    <article className="grid grid-cols-[34px_1fr] gap-4">
                      <Icon
                        size={24}
                        strokeWidth={1.25}
                        className="mt-1 text-flora-bronze"
                      />

                      <div>
                        <h3 className="text-sm font-semibold leading-none tracking-[-0.01em] text-flora-charcoal">
                          {t(`items.${item.key}.title`)}
                        </h3>

                        <p className="mt-2 max-w-[280px] text-xs leading-5 text-flora-charcoal/62">
                          {t(`items.${item.key}.description`)}
                        </p>
                      </div>
                    </article>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </div>

          <FadeUp delay={0.12}>
            <ImageParallax
              offset={36}
              className="h-[280px] overflow-hidden rounded-[1.75rem] shadow-premium md:h-[330px] lg:h-[360px]"
            >
              <Image
                src="/images/gallery-05.webp"
                alt={t('imageAlt')}
                fill
                quality={65}
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="scale-[1.04] object-cover object-center"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-flora-night/20 via-transparent to-transparent" />
            </ImageParallax>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}
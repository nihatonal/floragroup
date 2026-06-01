'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Container from '@/components/ui/Container';
import FadeUp from '@/components/motion/FadeUp';
import ImageParallax from '@/components/motion/ImageParallax';

export default function AboutFounderQuote() {
  const t = useTranslations('about.founder');

  return (
    <section className="relative overflow-hidden bg-flora-forest py-20 text-flora-ivory md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(200,173,127,0.12),transparent_34%)]" />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <FadeUp>
            <ImageParallax
              offset={26}
              className="h-[420px] rounded-[2rem] shadow-premium md:h-[560px] md:rounded-[2.5rem]"
            >
              <Image
                src="/images/about-founder.webp"
                alt={t('imageAlt')}
                fill
                quality={65}
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="scale-[1.05] object-cover object-center"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-flora-night/35 via-transparent to-transparent" />
            </ImageParallax>
          </FadeUp>

          <div>
            <FadeUp delay={0.08}>
              <p className="mb-6 text-[10px] uppercase tracking-luxury text-flora-champagne">
                {t('label')}
              </p>
            </FadeUp>

            <FadeUp delay={0.16}>
              <blockquote className="font-display text-4xl leading-[0.98] tracking-[-0.05em] text-balance md:text-6xl">
                “{t('quote')}”
              </blockquote>
            </FadeUp>

            <FadeUp delay={0.24}>
              <div className="mt-8 border-l border-flora-champagne/40 pl-5">
                <p className="font-display text-2xl tracking-[-0.035em]">
                  {t('name')}
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-luxury text-flora-ivory/45">
                  {t('role')}
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </Container>
    </section>
  );
}
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import Container from '@/components/ui/Container';
import FadeUp from '@/components/motion/FadeUp';
import ImageParallax from '@/components/motion/ImageParallax';
import { type Locale } from '@/i18n/routing';

export default function AboutFinalCTA() {
  const t = useTranslations('about.cta');
  const locale = useLocale() as Locale;

  return (
    <section className="relative overflow-hidden bg-flora-night text-flora-ivory">
      <div className="absolute inset-0">
        <ImageParallax offset={24} className="absolute inset-0">
          <Image
            src="/images/about-cta.webp"
            alt={t('imageAlt')}
            fill
            quality={100}
            sizes="100vw"
            className="scale-[1.04] object-cover object-center"
          />
        </ImageParallax>

        <div className="absolute inset-0 bg-flora-night/55" />

        <div className="absolute inset-0 bg-gradient-to-r from-flora-night/80 via-flora-night/45 to-flora-night/25" />
      </div>

      <Container className="relative py-24 md:py-36">
        <div className="max-w-4xl">
          <FadeUp>
            <p className="mb-6 text-[10px] uppercase tracking-luxury text-flora-champagne">
              {t('label')}
            </p>
          </FadeUp>

          <FadeUp delay={0.08}>
            <h2 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.92] tracking-[-0.055em]">
              {t('title')}
            </h2>
          </FadeUp>

          <FadeUp delay={0.16}>
            <p className="mt-8 max-w-2xl text-sm leading-7 text-flora-ivory/72 md:text-base">
              {t('description')}
            </p>
          </FadeUp>

          <FadeUp delay={0.24}>
            <Link
              href={`/${locale}/projelerimiz`}
              className="group mt-10 inline-flex items-center gap-4 rounded-full border border-flora-ivory/20 px-7 py-4 text-[11px] uppercase tracking-[0.18em] transition duration-500 hover:border-flora-champagne hover:bg-flora-ivory hover:text-flora-night"
            >
              {t('button')}

              <span className="h-px w-8 bg-current transition-all duration-500 group-hover:w-12" />
            </Link>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}
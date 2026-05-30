'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Container from '@/components/ui/Container';
import FadeUp from '@/components/motion/FadeUp';
import ImageParallax from '@/components/motion/ImageParallax';

export default function AboutHero() {
  const t = useTranslations('about.hero');

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-flora-ivory text-flora-forest">
      <div className="absolute inset-0">
        <ImageParallax offset={38} className="absolute inset-0">
          <Image
            src="/images/about-hero.webp"
            alt={t('imageAlt')}
            fill
            priority
            quality={100}
            sizes="100vw"
            className="scale-[1.04] object-cover object-center"
          />
        </ImageParallax>

        <div className="absolute inset-0 bg-gradient-to-r from-flora-ivory via-flora-ivory/88 to-transparent md:via-flora-ivory/72" />
        <div className="absolute inset-0 bg-gradient-to-t from-flora-ivory/70 via-transparent to-flora-ivory/20" />
      </div>

      <Container className="relative flex min-h-[100svh] items-end pb-20 pt-32 md:items-center md:pb-0 md:pt-24">
        <div className="max-w-[680px]">
          <FadeUp>
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-luxury text-flora-bronze">
              {t('label')}
            </p>
          </FadeUp>

          <FadeUp delay={0.08}>
            <h1 className="max-w-[11ch] font-display text-[clamp(4rem,10vw,8.4rem)] leading-[0.9] tracking-[-0.06em] text-balance">
              {t('title')}
            </h1>
          </FadeUp>

          <FadeUp delay={0.16}>
            <p className="mt-7 max-w-[500px] text-sm leading-7 text-flora-charcoal/70 md:text-base">
              {t('description')}
            </p>
          </FadeUp>

          <FadeUp delay={0.24}>
            <Link
              href="#story"
              className="group mt-9 inline-flex items-center gap-4 rounded-full bg-flora-forest px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-flora-ivory shadow-soft transition duration-500 hover:bg-flora-leaf"
            >
              {t('cta')}
              <span className="h-px w-8 bg-current transition-all duration-500 group-hover:w-11" />
            </Link>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}   
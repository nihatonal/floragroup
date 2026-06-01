"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeUp from "@/components/motion/FadeUp";
import ImageParallax from "@/components/motion/ImageParallax";
import Stagger, { StaggerItem } from "@/components/motion/Stagger";
import { type Locale } from "@/i18n/routing";

const features = [
  "sustainable",
  "custom",
  "implementation",
  "maintenance",
] as const;

export default function AboutPreview() {
  const t = useTranslations("home.about");
  const locale = useLocale() as Locale;

  return (
    <section className="relative overflow-hidden bg-flora-ivory pb-24 text-flora-charcoal md:py-28">
      <div className="absolute right-0 top-0 h-[320px] w-[320px] rounded-full bg-flora-leaf/8 blur-[120px]" />

      <div className="relative md:hidden">
        <div className="pointer-events-none absolute left-0 top-0 z-20 h-20 w-full rounded-tr-[5rem] bg-flora-ivory" />
        <div className="pointer-events-none absolute left-0 top-0 h-20 w-full bg-flora-forest" />
      </div>

      <div className="grid gap-4 pt-24 md:pt-0 lg:grid-cols-[0.62fr_1.38fr] lg:items-center">
        {/* Left content */}
        <div className="px-5 md:px-8 lg:pl-[max(48px,calc((100vw-1440px)/2+48px))] lg:pr-0">
          <FadeUp>
            <SectionLabel>{t("label")}</SectionLabel>
          </FadeUp>

          <FadeUp delay={0.08}>
            <h2 className="md:min-w-[15ch] font-display text-4xl leading-[0.98] tracking-[-0.045em] text-balance md:text-5xl lg:text-6xl">
              {t("title")}
            </h2>
          </FadeUp>

          <FadeUp delay={0.16}>
            <p className="mt-7 max-w-[390px] text-sm leading-7 text-flora-charcoal/68">
              {t("description")}
            </p>
          </FadeUp>

          <FadeUp delay={0.24}>
            <Link
              href={`/${locale}/${t("paths.about")}`}
              className="group mt-9 inline-flex items-center gap-4 text-[11px] uppercase tracking-[0.18em] text-flora-charcoal transition hover:text-flora-leaf"
            >
              {t("cta")}
              <span className="h-px w-8 bg-current transition-all duration-500 group-hover:w-12" />
            </Link>
          </FadeUp>
        </div>

        {/* Right visual */}
        <FadeUp delay={0.12}>
          <div className="relative pl-5 md:pl-8 lg:pl-0">
            <ImageParallax
              offset={48}
              className="h-[360px] rounded-tl-[130px] shadow-premium md:h-[380px] md:rounded-tl-[180px] lg:h-[380px] lg:rounded-tl-[220px]"
            >
              <Image
                src="/images/about-garden.webp"
                alt={t("imageAlt")}
                fill
                quality={65}
                 loading="lazy"
                sizes="(max-width: 1024px) 100vw, 70vw"
                className="object-cover object-center scale-[1.04]"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-flora-night/10 via-transparent to-flora-night/10" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-flora-night/20 via-transparent to-transparent" />
            </ImageParallax>

            {/* Feature cards */}
            <div className="relative z-10 -mt-16 px-5 md:-mt-20 md:px-10 lg:-mt-24 lg:pl-16 lg:pr-[max(48px,calc((100vw-1440px)/2+48px))]">
              <Stagger className="grid overflow-hidden rounded-[1.25rem] border border-flora-border/70 bg-flora-ivory/95 shadow-card md:grid-cols-4 md:gap-0">
                {features.map((feature, index) => (
                  <StaggerItem key={feature}>
                    <div className="h-full border-b border-flora-border/70 p-6 text-center last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0">
                      <p className="mx-auto flex size-10 items-center justify-center rounded-full border border-flora-border text-[10px] uppercase tracking-luxury text-flora-bronze">
                        0{index + 1}
                      </p>

                      <h3 className="mt-4 font-display text-xl leading-tight tracking-[-0.03em]">
                        {t(`features.${feature}.title`)}
                      </h3>

                      <p className="mt-3 text-xs leading-5 text-flora-charcoal/62">
                        {t(`features.${feature}.description`)}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

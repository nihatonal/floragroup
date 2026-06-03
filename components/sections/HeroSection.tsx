"use client";

import Link from "next/link";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import Container from "@/components/ui/Container";
import FadeUp from "@/components/motion/FadeUp";
import Parallax from "@/components/motion/Parallax";
import { type Locale } from "@/i18n/routing";

export default function HeroSection() {
  const t = useTranslations("home.hero");
  const locale = useLocale() as Locale;

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-flora-ivory text-flora-forest">
      <div className="absolute inset-0">
        {/* Mobile image */}
        <div className="absolute inset-0 md:hidden">
          <Image
            src="/images/hero-garden-mobile.webp"
            alt={t("imageAlt")}
            fill
            priority
            fetchPriority="high"
            quality={65}
            sizes="(max-width: 768px) 75vw, 100vw"
            className="object-cover object-center saturate-[1.05] contrast-[1.03]"
          />

          {/* Mobile cinematic overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-black/12" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
        </div>

        {/* Desktop image */}
        <div className="absolute inset-0 hidden md:block">
          <Parallax offset={55}>
            <div className="relative h-[108svh] w-full scale-[1.015]">
              <Image
                src="/images/hero-garden-desktop.webp"
                alt={t("imageAlt")}
                fill
                priority
                quality={90}
                sizes="(min-width: 768px) 100vw, 0vw"
                className="object-cover object-center saturate-[1.05] contrast-[1.03]"
              />
            </div>
          </Parallax>

          {/* Desktop cinematic overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-black/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
        </div>
      </div>

      <Container className="relative flex min-h-[100svh] items-start pt-32 md:items-center md:pt-24">
        <div className="max-w-[620px]">
          <FadeUp>
            <p className="mb-5 text-[10px] font-medium uppercase tracking-luxury text-flora-bronze/90 md:mb-6">
              {t("eyebrow")}
            </p>
          </FadeUp>

          {/* <FadeUp delay={0.1}> */}
            <h1 className="max-w-[9.5ch] font-serif md:font-display text-[clamp(3.8rem,16vw,5.6rem)] leading-[0.86] tracking-[-0.055em] text-flora-forest md:text-[clamp(4rem,8vw,8.5rem)] md:leading-[0.84]">
              {t("title")}
            </h1>
          {/* </FadeUp> */}

          <FadeUp delay={0.35}>
            <p className="mt-5 max-w-[250px] text-sm leading-6 text-flora-charcoal/72 md:max-w-[430px] md:text-[15px]">
              {t("description")}
            </p>
          </FadeUp>

          <FadeUp delay={0.5}>
            <div className="mt-7 flex flex-wrap items-center gap-5 md:mt-5">
              <Link
                href={`/${locale}/${t("paths.projects")}`}
                className="group inline-flex items-center gap-4 rounded-full bg-flora-forest px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-flora-ivory shadow-soft transition duration-500 hover:bg-flora-leaf"
              >
                {t("ctaPrimary")}

                <span className="h-px w-8 bg-current transition-all duration-500 group-hover:w-11" />
              </Link>
            </div>
          </FadeUp>
        </div>

        <FadeUp
          delay={0.8}
          className="absolute bottom-12 right-8 hidden items-center gap-4 md:flex"
        >
          <span className="text-[10px] uppercase tracking-luxury text-flora-ivory drop-shadow">
            {t("scroll")}
          </span>

          <span className="relative block h-16 w-px overflow-hidden bg-flora-ivory/40">
            <span className="absolute inset-x-0 top-0 h-12 bg-flora-ivory animate-floatSoft" />
          </span>
        </FadeUp>
      </Container>
    </section>
  );
}

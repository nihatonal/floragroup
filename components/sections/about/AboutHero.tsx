"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import Container from "@/components/ui/Container";
import FadeUp from "@/components/motion/FadeUp";
import Parallax from "@/components/motion/Parallax";
import ScrollButton from "@/components/ui/ScrollButton";

export default function AboutHero() {
  const t = useTranslations("about.hero");

  return (
    <section className="relative overflow-hidden bg-flora-ivory text-flora-forest md:min-h-[100svh]">
      {/* Mobile layout */}
      <div className="md:hidden">
        <div className="relative h-[320px] overflow-hidden">
          <Image
            src="/images/about-hero-mobile.webp"
            alt={t("imageAlt")}
            fill
            priority
            quality={75}
            sizes="(max-width: 767px) 100vw, 0vw"
            className="object-cover object-[25%_32%] saturate-[1.04] contrast-[1.02]"
          />

          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-flora-ivory via-flora-ivory/75 to-transparent" />
        </div>

        <Container className="relative -mt-4 pb-16 pt-8">
          <FadeUp>
            <p className="mb-5 text-[10px] font-medium uppercase tracking-luxury text-flora-bronze/90">
              {t("label")}
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h1 className="max-w-[16ch] font-display text-[clamp(2.8rem,12vw,4.2rem)] leading-[0.9] tracking-[-0.055em] text-flora-forest">
              {t("title")}
            </h1>
          </FadeUp>

          <FadeUp delay={0.25}>
            <p className="mt-5 max-w-[300px] text-sm leading-6 text-flora-charcoal/72">
              {t("description")}
            </p>
          </FadeUp>

          <FadeUp delay={0.38}>
            <ScrollButton
              targetId="story"
              className="group mt-7 inline-flex items-center gap-4 rounded-full bg-flora-forest px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-flora-ivory shadow-soft transition duration-500 hover:bg-flora-leaf"
            >
              {t("cta")}
              <span className="h-px w-8 bg-current transition-all duration-500 group-hover:w-11" />
            </ScrollButton>
          </FadeUp>
        </Container>
      </div>

      {/* Desktop layout */}
      <div className="relative hidden min-h-[100svh] md:block">
        <div className="absolute inset-0">
          <Parallax offset={55}>
            <div className="relative h-[108svh] w-full scale-[1.015]">
              <Image
                src="/images/about-hero.webp"
                alt={t("imageAlt")}
                fill
                priority
                quality={90}
                sizes="(min-width: 768px) 100vw, 0vw"
                className="object-cover object-center saturate-[1.05] contrast-[1.03]"
              />
            </div>
          </Parallax>

          <div className="absolute inset-0 bg-gradient-to-r from-flora-ivory via-flora-ivory/88 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-flora-ivory/60 via-transparent to-flora-ivory/10" />
        </div>

        <Container className="relative flex min-h-[100svh] items-center pt-24">
          <div className="max-w-[920px]">
            <FadeUp>
              <p className="mb-6 text-[10px] font-medium uppercase tracking-luxury text-flora-bronze/90">
                {t("label")}
              </p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h1 className="max-w-[15.5ch] font-display text-[clamp(4rem,8vw,8.5rem)] leading-[0.84] tracking-[-0.055em] text-flora-forest">
                {t("title")}
              </h1>
            </FadeUp>

            <FadeUp delay={0.35}>
              <p className="mt-5 max-w-[430px] text-[15px] leading-7 text-flora-charcoal/72">
                {t("description")}
              </p>
            </FadeUp>

            <FadeUp delay={0.5}>
              <ScrollButton
                targetId="story"
                className="group mt-7 inline-flex items-center gap-4 rounded-full bg-flora-forest px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-flora-ivory shadow-soft transition duration-500 hover:bg-flora-leaf"
              >
                {t("cta")}
                <span className="h-px w-8 bg-current transition-all duration-500 group-hover:w-11" />
              </ScrollButton>
            </FadeUp>
          </div>
        </Container>
      </div>
    </section>
  );
}

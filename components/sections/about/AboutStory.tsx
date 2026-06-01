"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeUp from "@/components/motion/FadeUp";
import ImageParallax from "@/components/motion/ImageParallax";
import ScrollButton from "@/components/ui/ScrollButton";

export default function AboutStory() {
  const t = useTranslations("about.story");

  return (
    <section
      id="story"
      className="relative overflow-hidden bg-flora-ivory py-20 text-flora-charcoal md:py-28"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1fr] lg:items-center">
          <div>
            <FadeUp>
              <SectionLabel>{t("label")}</SectionLabel>
            </FadeUp>

            <FadeUp delay={0.08}>
              <h2 className="max-w-[18ch] font-display text-4xl leading-[0.96] tracking-[-0.05em] md:text-6xl">
                {t("title")}
              </h2>
            </FadeUp>

            <FadeUp delay={0.16}>
              <div className="mt-7 max-w-md space-y-5 text-sm leading-7 text-flora-charcoal/68 md:text-base">
                <p>{t("paragraph1")}</p>
                <p>{t("paragraph2")}</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.24}>
              <ScrollButton
                targetId="approach"
                className="group mt-9 inline-flex items-center gap-4 text-[11px] uppercase tracking-[0.18em] text-flora-charcoal transition hover:text-flora-leaf"
              >
                {t("cta")}
                <span className="h-px w-8 bg-current transition-all duration-500 group-hover:w-12" />
              </ScrollButton>
            </FadeUp>
          </div>

          <FadeUp delay={0.12}>
            <ImageParallax
              offset={44}
              className="h-[360px] rounded-[2rem] shadow-premium md:h-[460px] md:rounded-[2.5rem]"
            >
              <Image
                src="/images/about-story.webp"
                alt={t("imageAlt")}
                fill
                quality={65}
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="scale-[1.05] object-cover object-center"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-flora-night/20 via-transparent to-transparent" />
            </ImageParallax>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}

"use client";

import DepthImageCard from "@/components/ui/DepthImageCard";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeUp from "@/components/motion/FadeUp";
import Stagger, { StaggerItem } from "@/components/motion/Stagger";
import { useTranslations } from "next-intl";

const images = [
  {
    src: "/images/about-studio-01.webp",
    key: "image1",
    className: "md:col-span-5",
    ratio: "aspect-[4/5]",
    offset: 24,
  },
  {
    src: "/images/about-studio-02.webp",
    key: "image2",
    className: "md:col-span-3 md:mt-24",
    ratio: "aspect-[4/5]",
    offset: 18,
  },
  {
    src: "/images/about-studio-03.webp",
    key: "image3",
    className: "md:col-span-4 md:mt-10",
    ratio: "aspect-[4/3]",
    offset: 28,
  },
  {
    src: "/images/about-studio-04.webp",
    key: "image4",
    className: "md:col-span-6 md:ml-20",
    ratio: "aspect-[16/10]",
    offset: 20,
  },
  {
    src: "/images/about-cta.webp",
    key: "image4",
    className: "md:col-span-6 md:ml-10 md:relative md:-mt-32",
    ratio: "aspect-[4/2]",
    offset: 20,
  },
] as const;

export default function AboutStudioGallery() {
  const t = useTranslations("about.studioGallery");

  return (
    <section className="relative overflow-hidden bg-flora-ivory py-20 text-flora-charcoal md:py-28">
      <Container>
        <div className="mb-14 grid gap-8 md:grid-cols-[1fr_1fr] md:items-end">
          <div>
            <FadeUp>
              <SectionLabel>{t("label")}</SectionLabel>
            </FadeUp>

            <FadeUp delay={0.08}>
              <h2 className="max-w-[18ch] font-display text-4xl leading-[0.96] tracking-[-0.05em] md:text-6xl">
                {t("title")}
              </h2>
            </FadeUp>
          </div>

          <FadeUp delay={0.16}>
            <p className="max-w-xl text-sm leading-7 text-flora-charcoal/65 md:text-base">
              {t("description")}
            </p>
          </FadeUp>
        </div>

        <Stagger
          className="grid gap-5 md:grid-cols-12 md:items-start"
          staggerDelay={0.08}
        >
          {images.map((image) => (
            <StaggerItem key={image.src} className={image.className}>
              <DepthImageCard
                src={image.src}
                alt={t(`images.${image.key}`)}
                ratio={image.ratio}
                offset={image.offset}
              />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}

"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeUp from "@/components/motion/FadeUp";
import Stagger, { StaggerItem } from "@/components/motion/Stagger";
import { type Locale } from "@/i18n/routing";
import DepthImageCard from "../ui/DepthImageCard";

const galleryImages = [
  {
    src: "/images/gallery-01.png",
    key: "image1",
    className: "md:col-span-4",
    ratio: "aspect-[4/5]",
    offset: 26,
  },
  {
    src: "/images/gallery-02.png",
    key: "image2",
    className: "md:col-span-3 md:mb-16",
    ratio: "aspect-[4/3]",
    offset: 18,
  },
  {
    src: "/images/gallery-03.png",
    key: "image3",
    className: "md:col-span-5",
    ratio: "aspect-[4/5]",
    offset: 30,
  },
  {
    src: "/images/gallery-04.png",
    key: "image4",
    className: "md:col-span-5 md:ml-20",
    ratio: "aspect-[4/3]",
    offset: 22,
  },
  {
    src: "/images/gallery-05.png",
    key: "image5",
    className: "md:col-span-4 md:mb-20",
    ratio: "aspect-[4/3]",
    offset: 24,
  },
] as const;

export default function GalleryPreview() {
  const t = useTranslations("home.gallery");
  const locale = useLocale() as Locale;

  return (
    <section className="relative overflow-hidden bg-flora-ivory py-24 text-flora-charcoal md:py-32">
      <Container>
        <div className="mb-14 grid grid-cols-1 md:grid-cols-[0.4fr_1fr] md:items-end md:gap-8">
          <FadeUp>
            <SectionLabel>{t("label")}</SectionLabel>
          </FadeUp>

          <FadeUp delay={0.08}>
            <h2 className="max-w-full font-display text-5xl leading-[0.95] tracking-[-0.05em] md:text-7xl">
              {t("title")}
            </h2>
          </FadeUp>

          <FadeUp delay={0.16} className="ml-auto md:col-span-2">
            <Link
              href={`/${locale}/${t("paths.gallery")}`}
              className="group mt-6 inline-flex items-center gap-4 text-[11px] uppercase tracking-[0.18em] transition hover:text-flora-leaf md:mt-0 md:justify-self-end"
            >
              {t("cta")}
              <ArrowUpRight
                size={16}
                className="transition duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </FadeUp>
        </div>

        <Stagger
          className="grid gap-4 md:grid-cols-12 md:items-end"
          staggerDelay={0.08}
        >
          {galleryImages.map((image) => (
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

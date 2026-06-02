"use client";

import Image from "next/image";
import { Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { type Locale, type Project } from "@/types/project";
import { cn } from "@/lib/utils";
import ImageParallax from "@/components/motion/ImageParallax";

type ProjectGalleryProps = {
  locale: Locale;
  project: Project;
};

export default function ProjectGallery({
  locale,
  project,
}: ProjectGalleryProps) {
  const t = useTranslations("projectDetail.gallery");
  const images = [
    project.images.hero,
    project.images.cover,
    ...project.images.gallery,
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const openLightbox = (index: number) => {
    setActiveIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => setIsOpen(false);

  const next = () => {
    setActiveIndex((value) => (value + 1) % images.length);
  };

  const prev = () => {
    setActiveIndex((value) => (value === 0 ? images.length - 1 : value - 1));
  };

  return (
    <section className="bg-flora-ivory text-flora-forest">
      <div className="mx-auto max-w-[1480px] px-5 md:px-16">
        <div className="border-b border-flora-forest/10 py-14 md:py-16">
          <div className="mb-8 flex items-center justify-between gap-6">
            <div className="flex flex-1 items-center gap-6">
              <p className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.24em] text-flora-bronze">
                {t("label")}
              </p>

              <span className="hidden h-px flex-1 bg-flora-forest/10 md:block" />
            </div>

            <button
              type="button"
              onClick={() => openLightbox(0)}
              className="hidden items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] text-flora-forest transition hover:text-flora-bronze md:inline-flex"
            >
              {t("viewAll")}
              <Maximize2 size={16} strokeWidth={1.4} />
            </button>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <button
              type="button"
              onClick={() => openLightbox(0)}
              className="group relative aspect-[16/10] overflow-hidden rounded-[1.25rem] md:row-span-2 md:aspect-auto"
            >
              <Image
                src={images[0]}
                alt={project.title[locale]}
                fill
                quality={75}
                sizes="(max-width: 768px) 100vw, 38vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
            </button>

            {images.slice(1, 5).map((image, index) => (
              <button
                key={image}
                type="button"
                onClick={() => openLightbox(index + 1)}
                className="group relative aspect-[16/8.7] overflow-hidden rounded-[1.25rem]"
              >
                <Image
                  src={image}
                  alt={`${project.title[locale]} ${index + 2}`}
                  fill
                  quality={75}
                  sizes="(max-width: 768px) 100vw, 28vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => openLightbox(0)}
            className="mt-6 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] text-flora-forest md:hidden"
          >
            {t("viewAll")}
            <Maximize2 size={16} strokeWidth={1.4} />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-flora-night/95 text-flora-ivory">
          <button
            type="button"
            onClick={closeLightbox}
            aria-label={t("close")}
            className="absolute right-5 top-5 z-20 grid size-12 place-items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md"
          >
            <X size={22} strokeWidth={1.4} />
          </button>

          <button
            type="button"
            onClick={prev}
            aria-label={t("previous")}
            className="absolute left-5 top-1/2 z-20 grid size-12 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md"
          >
            <ChevronLeft size={24} strokeWidth={1.4} />
          </button>

          <button
            type="button"
            onClick={next}
            aria-label={t("next")}
            className="absolute right-5 top-1/2 z-20 grid size-12 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md"
          >
            <ChevronRight size={24} strokeWidth={1.4} />
          </button>

          <div className="flex h-full flex-col px-5 pb-6 pt-20">
            <div className="relative flex-1 overflow-hidden rounded-[1.5rem]">
              <Image
                src={images[activeIndex]}
                alt={`${project.title[locale]} ${activeIndex + 1}`}
                fill
                quality={90}
                sizes="100vw"
                className="object-contain"
              />
            </div>

            <div className="mt-5 flex items-center gap-3 overflow-x-auto pb-1">
              {images.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "relative h-16 w-24 shrink-0 overflow-hidden rounded-xl border transition md:h-20 md:w-32",
                    activeIndex === index
                      ? "border-flora-bronze"
                      : "border-white/15 opacity-55 hover:opacity-100",
                  )}
                >
                  <ImageParallax offset={32} className="absolute inset-0">
                    <Image
                      src={image}
                      alt={`${project.title[locale]} thumbnail ${index + 1}`}
                      fill
                      quality={65}
                      sizes="128px"
                      className="object-cover"
                    />
                  </ImageParallax>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

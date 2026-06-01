"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeUp from "@/components/motion/FadeUp";
import ImageParallax from "@/components/motion/ImageParallax";
import { type Locale } from "@/i18n/routing";

const projects = [
  {
    key: "kemer",
    image: "/images/project-main.webp",
  },
  {
    key: "villa",
    image: "/images/gallery-01.webp",
  },
  {
    key: "garden",
    image: "/images/gallery-02.webp",
  },
  {
    key: "terrace",
    image: "/images/gallery-03.webp",
  },
] as const;

export default function FeaturedProject() {
  const t = useTranslations("home.featuredProject");
  const locale = useLocale() as Locale;
  const [activeIndex, setActiveIndex] = useState(0);

  const activeProject = projects[activeIndex];

  const goPrev = () => {
    setActiveIndex((current) =>
      current === 0 ? projects.length - 1 : current - 1,
    );
  };

  const goNext = () => {
    setActiveIndex((current) =>
      current === projects.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <section className="relative overflow-hidden bg-flora-night text-flora-ivory">
      <div className="relative h-[620px] md:h-[520px]">
        <ImageParallax offset={48} className="absolute inset-0">
          {projects.map((project, index) => (
            <Image
              key={project.key}
              src={project.image}
              alt={t(`projects.${project.key}.imageAlt`)}
              fill
              quality={65}
              loading="lazy"
              sizes="(max-width: 767px) 100vw, 50vw"
              className={`scale-[1.04] object-cover transition-all duration-1000 ease-out ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </ImageParallax>

        <div className="absolute inset-0 bg-gradient-to-r from-flora-night via-flora-night/20 to-flora-night/8" />
        <div className="absolute inset-0 bg-gradient-to-t from-flora-night/45 via-transparent to-flora-night/12" />

        <div className="relative z-10 flex h-full items-center px-5 py-20 md:px-12">
          <div className="relative min-h-[420px] max-w-[420px] pb-24">
            <FadeUp key={`label-${activeIndex}`}>
              <SectionLabel className="text-flora-champagne">
                {t("label")}
              </SectionLabel>
            </FadeUp>

            <FadeUp key={`title-${activeIndex}`} delay={0.05}>
              <h2 className="w-[250px] font-display text-4xl leading-[0.92] tracking-[-0.05em] md:w-full md:text-5xl lg:text-6xl">
                {t(`projects.${activeProject.key}.title`)}
              </h2>
            </FadeUp>

            <FadeUp key={`meta-${activeIndex}`} delay={0.1}>
              <p className="mt-4 text-[10px] uppercase tracking-luxury text-flora-champagne">
                {t(`projects.${activeProject.key}.location`)}
              </p>
            </FadeUp>

            <FadeUp key={`desc-${activeIndex}`} delay={0.15}>
              <p className="mt-8 max-w-sm text-sm leading-7 text-flora-ivory/72">
                {t(`projects.${activeProject.key}.description`)}
              </p>
            </FadeUp>

            <FadeUp key={`cta-${activeIndex}`} delay={0.2}>
              <Link
                href={`/${locale}/${t("paths.projects")}`}
                className="group mb-5 mt-9 inline-flex items-center gap-4 text-[11px] uppercase tracking-[0.18em] text-flora-ivory transition hover:text-flora-champagne"
              >
                {t("cta")}
                <span className="h-px w-10 bg-current transition-all duration-500 group-hover:w-14" />
              </Link>
            </FadeUp>

            <div className="absolute bottom-4 left-0 flex items-center gap-6 md:bottom-12">
              <button
                type="button"
                onClick={goPrev}
                className="grid size-10 place-items-center rounded-full border border-flora-ivory/25 bg-black/10 backdrop-blur-md transition hover:border-flora-champagne hover:text-flora-champagne"
                aria-label={t("controls.prev")}
              >
                <ArrowLeft size={16} />
              </button>

              <div className="flex items-center gap-5">
                {projects.map((project, index) => (
                  <button
                    key={project.key}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`text-[11px] transition ${
                      index === activeIndex
                        ? "text-flora-champagne"
                        : "text-flora-ivory/38 hover:text-flora-champagne"
                    }`}
                    aria-label={`${t("controls.goTo")} ${index + 1}`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={goNext}
                className="grid size-10 place-items-center rounded-full border border-flora-ivory/25 bg-black/10 backdrop-blur-md transition hover:border-flora-champagne hover:text-flora-champagne"
                aria-label={t("controls.next")}
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

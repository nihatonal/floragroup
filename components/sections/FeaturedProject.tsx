"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeUp from "@/components/motion/FadeUp";
import { type Locale } from "@/i18n/routing";

const projects = [
  {
    key: "kemer",
    image: "/images/project-main.png",
  },
  {
    key: "villa",
    image: "/images/gallery-01.png",
  },
  {
    key: "garden",
    image: "/images/gallery-02.png",
  },
  {
    key: "terrace",
    image: "/images/gallery-03.png",
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
      <div className="relative min-h-[520px] md:max-h-[420px]">
        {projects.map((project, index) => (
          
          <Image
            key={project.key}
            src={project.image}
            alt={t(`projects.${project.key}.imageAlt`)}
            fill
            quality={100}
            sizes="100vw"
            className={`object-cover transition-all duration-1000 ease-out ${
              index === activeIndex
                ? "scale-100 opacity-100"
                : "scale-105 opacity-0"
            }`}
          />
          
        ))}

        <div className="absolute inset-0 bg-gradient-to-r from-flora-night via-flora-night/0 md:via-flora-night/20 to-flora-night/8" />
        <div className="absolute inset-0 bg-gradient-to-t from-flora-night/38 via-transparent to-flora-night/12" />

        <div className="relative z-10 flex min-h-[520px] items-center px-5 py-20 md:min-h-[620px] md:px-12">
          <div className="relative min-h-[420px] max-w-[420px] pb-24">
            <FadeUp key={`label-${activeIndex}`}>
              <SectionLabel className="text-flora-champagne">
                {t("label")}
              </SectionLabel>
            </FadeUp>

            <FadeUp key={`title-${activeIndex}`} delay={0.05}>
              <h2 className="font-display text-4xl leading-[0.92] tracking-[-0.05em] md:text-5xl lg:text-6xl">
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
                className="group mt-9 mb-5  inline-flex items-center gap-4 text-[11px] uppercase tracking-[0.18em] text-flora-ivory transition hover:text-flora-champagne"
              >
                {t("cta")}
                <span className="h-px w-10 bg-current transition-all duration-500 group-hover:w-14" />
              </Link>
            </FadeUp>

            <div className="absolute bottom-4 md:bottom-12 left-0 flex items-center gap-6">
              <button
                type="button"
                onClick={goPrev}
                className="grid size-10 place-items-center backdrop-blur-md bg-black/10 rounded-full border border-flora-ivory/25 transition hover:border-flora-champagne hover:text-flora-champagne"
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
                    className={`text-[11px] transition backdrop-blur-md bg-black/10 ${
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
                className="grid size-10 place-items-center rounded-full border border-flora-ivory/25 transition hover:border-flora-champagne hover:text-flora-champagne"
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

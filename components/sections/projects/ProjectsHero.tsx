"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { featuredProjects } from "@/data/projects";
import { type Locale } from "@/types/project";
import { cn } from "@/lib/utils";

type ProjectsHeroProps = {
  locale: Locale;
};

export default function ProjectsHero({ locale }: ProjectsHeroProps) {
  const t = useTranslations("projects.hero");
  const tProjects = useTranslations("projects");
  const projects = featuredProjects.slice(0, 3);

  const [activeIndex, setActiveIndex] = useState(0);

  const project = projects[activeIndex];

  const next = () => {
    setActiveIndex((value) => (value + 1) % projects.length);
  };

  const prev = () => {
    setActiveIndex((value) => (value === 0 ? projects.length - 1 : value - 1));
  };

  return (
    <section className="relative h-[70svh] min-h-[560px] overflow-hidden bg-flora-ivory text-flora-forest md:min-h-[620px]">
      <div className="absolute inset-0">
        <Image
          src={project.images.hero}
          alt={project.title[locale]}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center transition-transform duration-700"
        />

        <div className="absolute inset-0 bg-black/45 md:hidden" />
        <div className="absolute md:w-[60ch] lg:w-[80ch] inset-0 hidden bg-gradient-to-r from-flora-ivory via-flora-ivory/95 to-transparent md:block" />
        <div className="absolute inset-0 hidden bg-gradient-to-t from-black/10 via-transparent to-transparent md:block" />
      </div>

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1480px] items-end px-6 pb-14 pt-28 md:items-center md:px-16 md:pb-0 md:pt-24">
        <div className="max-w-[520px] text-flora-ivory md:text-flora-forest">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.26em] text-flora-champagne">
            {t("eyebrow")}
          </p>

          <h1 className="font-display text-[clamp(3rem,12vw,5.4rem)] leading-[0.92] tracking-[-0.055em] md:text-[clamp(4rem,6vw,7rem)]">
            {project.title[locale]}
          </h1>

          <div className="mt-7 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em]">
            <MapPin size={15} strokeWidth={1.5} className="text-flora-bronze" />
            {project.location[locale]}
          </div>

          <p className="mt-5 max-w-[390px] text-sm leading-7 text-current/78 md:text-[15px]">
            {project.excerpt[locale]}
          </p>

          <Link
            href={`/${locale}/${tProjects("paths.projects")}/${project.slug}`}
            className="group mt-9 inline-flex items-center gap-5 border-b border-current/35 pb-3 text-[11px] font-bold uppercase tracking-[0.22em]"
          >
            {t("cta")}
            <span className="h-px w-9 bg-current transition-all duration-500 group-hover:w-14" />
          </Link>
        </div>
      </div>

      <button
        type="button"
        onClick={prev}
        className="absolute left-[44%] top-1/2 z-20 hidden size-14 -translate-y-1/2 place-items-center rounded-full border border-white/70 text-white backdrop-blur-md transition hover:bg-white hover:text-flora-forest md:grid"
        aria-label={t("previous")}
      >
        <ArrowLeft size={22} strokeWidth={1.4} />
      </button>

      <button
        type="button"
        onClick={next}
        className="absolute right-12 top-1/2 z-20 hidden size-14 -translate-y-1/2 place-items-center rounded-full border border-white/70 text-white backdrop-blur-md transition hover:bg-white hover:text-flora-forest md:grid"
        aria-label={t("next")}
      >
        <ArrowRight size={22} strokeWidth={1.4} />
      </button>

      <div className="absolute z-[99] bottom-7 left-1/2 flex -translate-x-1/2 items-center gap-4">
        {projects.map((item, index) => (
          <>
            <button
              key={item.id + index}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={cn(
                "md:hidden h-2 rounded-full transition-all duration-500",
                activeIndex === index
                  ? "w-8 bg-flora-ivory md:bg-flora-forest"
                  : "w-2 border border-flora-ivory/80 md:border-flora-forest/50",
              )}
              aria-label={t("goToProject", { number: index + 1 })}
            />
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={cn(
                "hidden md:grid transition-all duration-500",
                activeIndex === index
                  ? " text-flora-forest md:text-flora-ivory"
                  : "text-flora-ivory/40 md:text-flora-ivory/40",
              )}
              aria-label={t("goToProject", { number: index + 1 })}
            >
              {index}
              <span
                className={cn(
                  "h-1 rounded-full transition-all duration-500",
                  activeIndex === index
                    ? "w-8  bg-flora-ivory md:bg-flora-ivory"
                    : "w-8 bg-flora-ivory/40",
                )}
              ></span>
            </button>
          </>
        ))}
      </div>
    </section>
  );
}

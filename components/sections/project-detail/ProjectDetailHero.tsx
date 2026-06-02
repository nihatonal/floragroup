"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MapPin, Share2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { type Locale, type Project } from "@/types/project";
import ImageParallax from "@/components/motion/ImageParallax";

type ProjectDetailHeroProps = {
  locale: Locale;
  project: Project;
  currentIndex: number;
  total: number;
  previousHref?: string;
  nextHref?: string;
};

export default function ProjectDetailHero({
  locale,
  project,
  currentIndex,
  total,
  previousHref,
  nextHref,
}: ProjectDetailHeroProps) {
  const t = useTranslations("projectDetail.hero");
  const tProjects = useTranslations("projects");

  return (
    <section className="relative h-[70svh] min-h-[560px] overflow-hidden bg-flora-ivory text-flora-forest md:min-h-[620px]">
      <div className="absolute inset-0">
        <ImageParallax offset={55} className="absolute inset-0">
          <Image
            src={project.images.hero}
            alt={project.title[locale]}
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover object-center"
          />
        </ImageParallax>
        <div className="absolute inset-0 bg-black/50 md:hidden" />
        <div className="absolute md:w-[60ch] lg:w-[80ch] inset-0 hidden bg-gradient-to-r from-flora-ivory via-flora-ivory/80 to-transparent md:block" />
      </div>

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1480px] items-end px-6 pb-10 pt-28 md:items-center md:px-16 md:pb-0 md:pt-24">
        <div className="max-w-[560px] text-flora-ivory md:text-flora-forest">
          <div className="mb-8 flex items-center gap-2 text-xs text-current/65 md:text-flora-forest/70">
            <Link
              href={`/${locale}`}
              className="transition hover:text-flora-bronze"
            >
              {t("breadcrumb.home")}
            </Link>
            <span>/</span>
            <Link
              href={`/${locale}/${tProjects("paths.projects")}`}
              className="transition hover:text-flora-bronze"
            >
              {t("breadcrumb.projects")}
            </Link>
            <span className="hidden md:inline">/</span>
            <span className="hidden md:inline">{project.title[locale]}</span>
          </div>

          <h1 className="font-display text-[clamp(3rem,12vw,5.4rem)] leading-[0.92] tracking-[-0.055em] md:text-[clamp(4rem,6vw,7rem)]">
            {project.title[locale]}
          </h1>

          <div className="mt-7 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em]">
            <MapPin size={15} strokeWidth={1.5} className="text-flora-bronze" />
            {project.location[locale]}
          </div>

          <p className="mt-5 max-w-[410px] text-sm leading-7 text-current/78 md:text-[15px]">
            {project.excerpt[locale]}
          </p>

          <div className="mt-9 flex items-center gap-4">
            <button
              type="button"
              className="group inline-flex items-center gap-3 border-b border-current/35 pb-3 text-[11px] font-bold uppercase tracking-[0.22em]"
              aria-label={t("share")}
            >
              {t("share")}
              <Share2 size={16} strokeWidth={1.4} />
            </button>
          </div>

          <div className="mt-8 flex items-center gap-7">
            {previousHref && (
              <Link
                href={previousHref}
                aria-label={t("previous")}
                className="grid size-12 place-items-center rounded-full border border-current/45 transition hover:bg-flora-forest hover:text-flora-ivory md:size-14"
              >
                <ArrowLeft size={20} strokeWidth={1.4} />
              </Link>
            )}

            <span className="text-[11px] font-bold uppercase tracking-[0.22em]">
              {String(currentIndex + 1).padStart(2, "0")} /{" "}
              {String(total).padStart(2, "0")}
            </span>

            {nextHref && (
              <Link
                href={nextHref}
                aria-label={t("next")}
                className="grid size-12 place-items-center rounded-full border border-current/45 transition hover:bg-flora-forest hover:text-flora-ivory md:size-14"
              >
                <ArrowRight size={20} strokeWidth={1.4} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

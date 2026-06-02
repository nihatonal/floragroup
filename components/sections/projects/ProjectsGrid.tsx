"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, X, Leaf, Star, Hotel, Building2, Landmark } from "lucide-react";
import { useTranslations } from "next-intl";
import { useMemo, useState } from "react";
import { projects, projectCategories } from "@/data/projects";
import { type Locale, type ProjectCategory } from "@/types/project";
import { cn } from "@/lib/utils";

type FilterKey = "all" | ProjectCategory;

type ProjectsGridProps = {
  locale: Locale;
};

const categoryIcons = {
  all: Leaf,
  featured: Star,
  villa: Leaf,
  terrace: Landmark,
  hotel: Hotel,
  commercial: Building2,
  public: Building2,
};

export default function ProjectsGrid({ locale }: ProjectsGridProps) {
  const t = useTranslations("projects");
  const [activeCategory, setActiveCategory] = useState<FilterKey>("all");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return projects;

    return projects.filter((project) =>
      project.category.includes(activeCategory),
    );
  }, [activeCategory]);

  const selectedProject = filteredProjects[6] ?? filteredProjects[0];

  const visibleProjects = filteredProjects.filter(
    (project) => project.id !== selectedProject?.id,
  );

  return (
    <section className="relative bg-flora-ivory py-12 text-flora-forest md:py-20">
      <div className="mx-auto w-full max-w-[1480px] px-5 md:px-16">
        {/* Desktop filters */}
        <div className="mb-10 hidden border-b border-flora-forest/10 md:block">
          <div className="flex items-center justify-between gap-8">
            {projectCategories.map((category) => (
              <button
                key={category.key}
                type="button"
                onClick={() => setActiveCategory(category.key)}
                className={cn(
                  "relative pb-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-flora-forest/60 transition hover:text-flora-forest",
                  activeCategory === category.key && "text-flora-forest",
                )}
              >
                {t(`categories.${category.labelKey}`)}

                <span
                  className={cn(
                    "absolute bottom-0 left-0 h-px bg-flora-forest transition-all duration-500",
                    activeCategory === category.key ? "w-full" : "w-0",
                  )}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Mobile filter trigger */}
        <div className="mb-6 flex items-center justify-between md:hidden">
          <button
            type="button"
            onClick={() => setIsMobileFilterOpen(true)}
            className="inline-flex items-center gap-3 rounded-full border border-flora-forest/10 bg-flora-ivory px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] shadow-soft"
          >
            {t("filters.open")}
            <span className="grid size-7 place-items-center rounded-full bg-flora-forest text-flora-ivory">
              ...
            </span>
          </button>

          <span className="text-xs text-flora-forest/45">
            {filteredProjects.length} {t("filters.count")}
          </span>
        </div>

        {/* Mobile filter drawer */}
        <div
          className={cn(
            "fixed inset-x-4 top-28 z-[80] rounded-[2rem] border border-flora-forest/10 bg-flora-ivory shadow-premium transition-all duration-500 md:hidden",
            isMobileFilterOpen
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none translate-y-6 opacity-0",
          )}
        >
          <div className="flex items-center justify-between border-b border-flora-forest/10 px-6 py-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em]">
              {t("filters.title")}
            </p>

            <button
              type="button"
              onClick={() => setIsMobileFilterOpen(false)}
              aria-label={t("filters.close")}
            >
              <X size={20} strokeWidth={1.4} />
            </button>
          </div>

          <div className="space-y-1 px-6 py-5">
            {projectCategories.map((category) => {
              const Icon = categoryIcons[category.key];

              return (
                <button
                  key={category.key}
                  type="button"
                  onClick={() => {
                    setActiveCategory(category.key);
                    setIsMobileFilterOpen(false);
                  }}
                  className="flex w-full items-center justify-between py-4 text-left"
                >
                  <span className="flex items-center gap-4 text-sm text-flora-forest/78">
                    <Icon
                      size={22}
                      strokeWidth={1.2}
                      className="text-flora-bronze"
                    />
                    {t(`categories.${category.labelKey}`)}
                  </span>

                  {activeCategory === category.key && (
                    <span className="grid size-6 place-items-center rounded-full bg-flora-forest text-flora-ivory">
                      <Check size={14} />
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {isMobileFilterOpen && (
          <button
            type="button"
            aria-label={t("filters.close")}
            onClick={() => setIsMobileFilterOpen(false)}
            className="fixed inset-0 z-[70] bg-flora-night/20 backdrop-blur-sm md:hidden"
          />
        )}

        {/* Project cards */}
        <div className="grid gap-6 md:grid-cols-3 md:gap-7">
          {visibleProjects.slice(0, 6).map((project) => (
            <Link
              key={project.id}
             href={`/${locale}/${t('paths.projects')}/${project.slug[locale]}`}
              className="group overflow-hidden rounded-[1.25rem] border border-flora-forest/10 bg-flora-ivory shadow-soft"
            >
              <div className="relative aspect-[16/8.4] overflow-hidden">
                <Image
                  src={project.images.cover}
                  alt={project.title[locale]}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="flex items-end justify-between px-6 py-5">
                <div>
                  <h3 className="font-display text-2xl leading-none tracking-[-0.04em]">
                    {project.title[locale]}
                  </h3>

                  <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-flora-forest/55">
                    {project.location[locale]}
                  </p>
                </div>

                <span className="text-2xl leading-none transition duration-500 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Selected project */}
        {selectedProject && (
          <Link
            href={`/${locale}/${t("paths.projects")}/${selectedProject.slug[locale]}`}
            className="group mt-8 grid overflow-hidden rounded-[1.5rem] bg-flora-forest text-flora-ivory md:mt-10 md:grid-cols-[1.15fr_1fr]"
          >
            <div className="relative min-h-[320px] overflow-hidden md:min-h-[460px]">
              <Image
                src={selectedProject.images.hero}
                alt={selectedProject.title[locale]}
                fill
                sizes="(max-width: 768px) 100vw, 55vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
            </div>

            <div className="flex flex-col justify-center p-8 md:p-16">
              <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.24em] text-flora-bronze">
                {t("selected.eyebrow")}
              </p>

              <h3 className="max-w-[12ch] font-display text-4xl leading-[0.95] tracking-[-0.05em] md:text-5xl">
                {selectedProject.title[locale]}
              </h3>

              <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-flora-bronze">
                {selectedProject.location[locale]}
              </p>

              <p className="mt-5 max-w-md text-sm leading-7 text-flora-ivory/70">
                {selectedProject.excerpt[locale]}
              </p>

              <div className="mt-10 grid grid-cols-3 gap-5 border-y border-flora-ivory/15 py-7">
                <div>
                  <p className="font-display text-3xl">
                    {selectedProject.area} m²
                  </p>
                  <p className="mt-1 text-xs text-flora-ivory/55">
                    {t("facts.area")}
                  </p>
                </div>

                <div>
                  <p className="font-display text-3xl">
                    {selectedProject.plantSpecies}+
                  </p>
                  <p className="mt-1 text-xs text-flora-ivory/55">
                    {t("facts.plants")}
                  </p>
                </div>

                <div>
                  <p className="font-display text-3xl">
                    {selectedProject.seasonUsage}
                  </p>
                  <p className="mt-1 text-xs text-flora-ivory/55">
                    {t("facts.season")}
                  </p>
                </div>
              </div>

              <span className="mt-8 inline-flex items-center gap-5 text-[11px] font-bold uppercase tracking-[0.22em]">
                {t("card.cta")}
                <span className="h-px w-9 bg-current transition-all duration-500 group-hover:w-14" />
              </span>
            </div>
          </Link>
        )}

        <div className="mt-10 grid gap-6 md:grid-cols-3 md:gap-7">
          {visibleProjects.slice(6, 9).map((project) => (
            <Link
              key={project.id}
              href={`/${locale}/${t('paths.projects')}/${project.slug[locale]}`}
              className="group overflow-hidden rounded-[1.25rem] border border-flora-forest/10 bg-flora-ivory shadow-soft"
            >
              <div className="relative aspect-[16/8.4] overflow-hidden">
                <Image
                  src={project.images.cover}
                  alt={project.title[locale]}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="flex items-end justify-between px-6 py-5">
                <div>
                  <h3 className="font-display text-2xl leading-none tracking-[-0.04em]">
                    {project.title[locale]}
                  </h3>

                  <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-flora-forest/55">
                    {project.location[locale]}
                  </p>
                </div>

                <span className="text-2xl leading-none transition duration-500 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-14 flex items-center justify-center gap-7 md:mt-16">
          <span className="h-px w-16 bg-flora-forest/20 md:w-24" />

          <p className="flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.24em] text-flora-forest/70">
            <span>{filteredProjects.length}</span>
            <span>{t("summary.projectsFound")}</span>
          </p>

          <span className="h-px w-16 bg-flora-forest/20 md:w-24" />
        </div>
      </div>
    </section>
  );
}

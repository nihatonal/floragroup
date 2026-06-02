import {
  type Locale,
  type Project,
  type ProjectCategory,
} from "@/types/project";

import {
  kemerCountry,
  gokturkVilla,
  cesmeSahil,
  bodrumTeras,
  sapancaGolEvi,
  antalyaResort,
  kemerMarina,
  istanbulRooftop,
  bursaBoutiqueHotel,
  ankaraCorporateCampus,
} from "@/data/projects/index";

export const projects: Project[] = [
  kemerCountry,
  bursaBoutiqueHotel,
  bodrumTeras,
  sapancaGolEvi,
  antalyaResort,
  kemerMarina,
  istanbulRooftop,
  gokturkVilla,
  cesmeSahil,
  ankaraCorporateCampus,
];

export const featuredProjects = projects.filter((project) => project.featured);

export const projectCategories: {
  key: "all" | ProjectCategory;
  labelKey: string;
}[] = [
  { key: "all", labelKey: "all" },
  { key: "featured", labelKey: "featured" },
  { key: "villa", labelKey: "villa" },
  { key: "terrace", labelKey: "terrace" },
  { key: "hotel", labelKey: "hotel" },
  { key: "commercial", labelKey: "commercial" },
];

export function getProjectSlug(project: Project, locale: Locale) {
  return project.slug[locale];
}

export function getProjectHref(
  project: Project,
  locale: Locale,
  projectsPath: string,
) {
  return `/${locale}/${projectsPath}/${project.slug[locale]}`;
}

export function getProjectBySlug(slug: string, locale: Locale) {

  return projects.find((project) => project.slug[locale] === slug);
}

export function getProjectsByCategory(category: "all" | ProjectCategory) {
  if (category === "all") return projects;

  return projects.filter((project) => project.category.includes(category));
}

export function getRelatedProjects(slug: string, locale: Locale, limit = 3) {
  const currentProject = getProjectBySlug(slug, locale);

  if (!currentProject) return projects.slice(0, limit);

  return projects
    .filter((project) => project.id !== currentProject.id)
    .filter((project) =>
      project.category.some((category) =>
        currentProject.category.includes(category),
      ),
    )
    .slice(0, limit);
}

export function getProjectSlugs() {
  return projects.flatMap((project) =>
    (["tr", "en", "ru"] as const).map((locale) => ({
      locale,
      slug: project.slug[locale],
    })),
  );
}

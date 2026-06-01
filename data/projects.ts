import { type Project, type ProjectCategory } from "@/types/project";

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

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectsByCategory(category: "all" | ProjectCategory) {
  if (category === "all") return projects;

  return projects.filter((project) => project.category.includes(category));
}

export function getRelatedProjects(slug: string, limit = 3) {
  const currentProject = getProjectBySlug(slug);

  if (!currentProject) return projects.slice(0, limit);

  return projects
    .filter((project) => project.slug !== slug)
    .filter((project) =>
      project.category.some((category) =>
        currentProject.category.includes(category),
      ),
    )
    .slice(0, limit);
}

export function getProjectSlugs() {
  return projects.map((project) => project.slug);
}

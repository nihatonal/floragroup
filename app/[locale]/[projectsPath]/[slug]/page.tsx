import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import ProjectDetailHero from "@/components/sections/project-detail/ProjectDetailHero";
import ProjectStats from "@/components/sections/project-detail/ProjectStats";
import ProjectStory from "@/components/sections/project-detail/ProjectStory";
import ProjectApproach from "@/components/sections/project-detail/ProjectApproach";
import ProjectGallery from "@/components/sections/project-detail/ProjectGallery";
import ProjectDetails from "@/components/sections/project-detail/ProjectDetails";
import ProjectsCTA from "@/components/sections/projects/ProjectsCTA";
import { getProjectBySlug, projects } from "@/data/projects";
import { locales, type Locale } from "@/i18n/routing";

type ProjectDetailPageProps = {
  params: Promise<{
    locale: string;
    projectsPath: string;
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const result = [];

  for (const locale of locales) {
    const tProjects = await getTranslations({
      locale,
      namespace: "projects",
    });

    const projectsPath = tProjects("paths.projects");

    for (const project of projects) {
      result.push({
        locale,
        projectsPath,
        slug: project.slug[locale],
      });
    }
  }

  return result;
}

export async function generateMetadata({ params }: ProjectDetailPageProps) {
  const { locale, slug } = await params;

  if (!locales.includes(locale as Locale)) {
    return {};
  }

  const currentLocale = locale as Locale;
  const project = getProjectBySlug(slug, currentLocale);

  if (!project) {
    return {};
  }

  return {
    title: project.seo.title[currentLocale],
    description: project.seo.description[currentLocale],
    keywords: project.seo.keywords[currentLocale],
    openGraph: {
      title: project.seo.title[currentLocale],
      description: project.seo.description[currentLocale],
      images: [project.images.cover],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { locale, projectsPath, slug } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const currentLocale = locale as Locale;

  const tProjects = await getTranslations({
    locale: currentLocale,
    namespace: "projects",
  });

  const expectedProjectpath = tProjects("paths.projects");
  if (projectsPath !== expectedProjectpath) {
    notFound();
  }

  const project = getProjectBySlug(slug, currentLocale);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((item) => item.id === project.id);
  const total = projects.length;

  const previousProject =
    projects[currentIndex === 0 ? projects.length - 1 : currentIndex - 1];

  const nextProject =
    projects[currentIndex === projects.length - 1 ? 0 : currentIndex + 1];

  return (
    <main className="bg-flora-ivory text-flora-forest">
      <ProjectDetailHero
        locale={currentLocale}
        project={project}
        currentIndex={currentIndex}
        total={total}
        previousHref={`/${currentLocale}/${projectsPath}/${previousProject.slug[currentLocale]}`}
        nextHref={`/${currentLocale}/${projectsPath}/${nextProject.slug[currentLocale]}`}
      />

      <ProjectStats locale={currentLocale} project={project} />
      <ProjectStory locale={currentLocale} project={project} />
      <ProjectApproach locale={currentLocale} project={project} />
      <ProjectGallery locale={currentLocale} project={project} />
      <ProjectDetails locale={currentLocale} project={project} />
      <ProjectsCTA locale={currentLocale} />
    </main>
  );
}

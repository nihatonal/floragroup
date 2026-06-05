import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';

import ProjectsCTA from '@/components/sections/projects/ProjectsCTA';
import ProjectsGrid from '@/components/sections/projects/ProjectsGrid';
import ProjectsHero from '@/components/sections/projects/ProjectsHero';
import { locales } from '@/i18n';
import { type Locale } from '@/types/project';

type ProjectsPageProps = {
  params: Promise<{
    locale: Locale;
  }>;
};

export async function generateMetadata({ params }: ProjectsPageProps) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    return {};
  }

  const t = await getTranslations({
    locale,
    namespace: 'projects.meta',
  });

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
    },
  };
}

export default async function ProjectsPage({ params }: ProjectsPageProps) {
  const { locale } = await params;

  
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  return (
    <main className="bg-flora-ivory text-flora-forest">
      <ProjectsHero locale={locale as Locale} />
      <ProjectsGrid locale={locale as Locale} />
      <ProjectsCTA locale={locale as Locale} />
    </main>
  );
}
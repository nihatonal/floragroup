import { getTranslations } from 'next-intl/server';

import AboutApproach from '@/components/sections/about/AboutApproach';
import AboutExpertise from '@/components/sections/about/AboutExpertise';
import AboutFinalCTA from '@/components/sections/about/AboutFinalCTA';
import AboutFounderQuote from '@/components/sections/about/AboutFounderQuote';
import AboutHero from '@/components/sections/about/AboutHero';
import AboutStats from '@/components/sections/about/AboutStats';
import AboutStory from '@/components/sections/about/AboutStory';
import AboutStudioGallery from '@/components/sections/about/AboutStudioGallery';
import AboutValues from '@/components/sections/about/AboutValues';

import { locales } from '@/i18n';
import { type Locale } from '@/types/project';

type AboutPageProps = {
  params: Promise<{
    locale: Locale;
  }>;
};

export async function generateMetadata({
  params,
}: AboutPageProps) {
  const { locale } = await params;

  if (!locales.includes(locale)) {
    return {};
  }

  const t = await getTranslations({
    locale,
    namespace: 'about.meta',
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

export default async function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutStats />
      <AboutApproach />
      <AboutFounderQuote />
      <AboutValues />
      <AboutExpertise />
      <AboutStudioGallery />
      <AboutFinalCTA />
    </>
  );
}
import { Leaf, Sprout, Sun, MapPin, UserRound } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { type Locale, type Project } from '@/types/project';

type ProjectStatsProps = {
  locale: Locale;
  project: Project;
};

export default function ProjectStats({ locale, project }: ProjectStatsProps) {
  const t = useTranslations('projectDetail.stats');

  const stats = [
    {
      icon: Leaf,
      value: `${project.area.toLocaleString(locale)} m²`,
      label: t('area'),
    },
    {
      icon: Sprout,
      value: `${project.plantSpecies}+`,
      label: t('plants'),
    },
    {
      icon: Sun,
      value: project.seasonUsage,
      label: t('season'),
    },
    {
      icon: MapPin,
      value: project.completionYear,
      label: t('year'),
    },
    {
      icon: UserRound,
      value: project.projectType[locale],
      label: t('type'),
    },
  ];

  return (
    <section className="bg-flora-ivory text-flora-forest">
      <div className="mx-auto max-w-[1480px] px-5 md:px-16">
        <div className="border-b border-flora-forest/10 py-8 md:py-10">
          <div className="grid gap-7 rounded-[1.5rem] border border-flora-forest/10 bg-flora-ivory p-8 shadow-soft md:grid-cols-5 md:gap-0 md:rounded-none md:border-0 md:bg-transparent md:p-0 md:shadow-none">
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className="flex items-center gap-5 md:justify-center md:border-r md:border-flora-forest/10 md:px-6 last:md:border-r-0"
                >
                  <Icon
                    size={34}
                    strokeWidth={1.25}
                    className="shrink-0 text-flora-bronze md:size-10"
                  />

                  <div>
                    <p className="font-display text-3xl leading-none tracking-[-0.04em] md:text-4xl">
                      {stat.value}
                    </p>

                    <p className="mt-2 text-xs leading-none text-flora-forest/62">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
import { Flower2, Gem, Droplets, Sprout } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { type Locale, type Project } from '@/types/project';

type ProjectDetailsProps = {
  locale: Locale;
  project: Project;
};

const icons = [Flower2, Gem, Droplets, Sprout];

export default function ProjectDetails({
  locale,
  project,
}: ProjectDetailsProps) {
  const t = useTranslations('projectDetail.details');
  const items = project.details[locale];

  return (
    <section className="bg-flora-ivory text-flora-forest">
      <div className="mx-auto max-w-[1480px] px-5 md:px-16">
        <div className="border-b border-flora-forest/10 py-14 md:py-16">
          <div className="mb-8 flex items-center gap-6">
            <p className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.24em] text-flora-bronze">
              {t('label')}
            </p>

            <span className="hidden h-px flex-1 bg-flora-forest/10 md:block" />
          </div>

          <div className="grid gap-5 md:grid-cols-4 md:gap-0">
            {items.map((item, index) => {
              const Icon = icons[index] ?? Flower2;

              return (
                <article
                  key={item.title}
                  className="rounded-[1.5rem] border border-flora-forest/10 p-7 md:rounded-none md:border-y-0 md:border-l-0 md:border-r md:p-0 md:px-8 first:md:pl-0 last:md:border-r-0 last:md:pr-0"
                >
                  <div className="mb-5 flex items-center gap-4">
                    <Icon
                      size={30}
                      strokeWidth={1.25}
                      className="shrink-0 text-flora-bronze md:text-flora-forest/70"
                    />

                    <h3 className="font-display text-2xl leading-none tracking-[-0.04em]">
                      {item.title}
                    </h3>
                  </div>

                  <ul className="space-y-3 pl-5">
                    {item.items.map((detail) => (
                      <li
                        key={detail}
                        className="list-disc text-sm leading-7 text-flora-forest/70"
                      >
                        {detail}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
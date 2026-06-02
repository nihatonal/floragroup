import { Compass, Droplets, Sun, Lightbulb } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { type Locale, type Project } from '@/types/project';

type ProjectApproachProps = {
  locale: Locale;
  project: Project;
};

const icons = [Compass, Droplets, Sun, Lightbulb];

export default function ProjectApproach({
  locale,
  project,
}: ProjectApproachProps) {
  const t = useTranslations('projectDetail.approach');
  const items = project.approach[locale];

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

          <div className="grid gap-9 md:grid-cols-4 md:gap-0">
            {items.map((item, index) => {
              const Icon = icons[index] ?? Compass;

              return (
                <article
                  key={item.title}
                  className="flex gap-5 md:border-r md:border-flora-forest/10 md:px-8 first:md:pl-0 last:md:border-r-0 last:md:pr-0"
                >
                  <Icon
                    size={42}
                    strokeWidth={1.2}
                    className="mt-1 shrink-0 text-flora-bronze"
                  />

                  <div>
                    <h3 className="font-display text-2xl leading-none tracking-[-0.04em]">
                      {item.title}
                    </h3>

                    <ul className="mt-4 space-y-2">
                      {item.items.map((text) => (
                        <li
                          key={text}
                          className="text-sm leading-7 text-flora-forest/70"
                        >
                          {text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
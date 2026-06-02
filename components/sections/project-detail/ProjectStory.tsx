import Image from "next/image";
import { useTranslations } from "next-intl";
import { type Locale, type Project } from "@/types/project";
import ImageParallax from "@/components/motion/ImageParallax";

type ProjectStoryProps = {
  locale: Locale;
  project: Project;
};

export default function ProjectStory({ locale, project }: ProjectStoryProps) {
  const t = useTranslations("projectDetail.story");

  const [title, ...paragraphs] = project.story[locale];

  return (
    <section className="bg-flora-ivory py-14 text-flora-forest md:py-20">
      <div className="mx-auto max-w-[1480px] px-5 md:px-16">
        <div className="grid gap-10 border-b border-flora-forest/10 pb-14 md:grid-cols-[0.9fr_1.25fr] md:items-center md:gap-20 md:pb-20">
          <div>
            <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.24em] text-flora-bronze">
              {t("label")}
            </p>

            <h2 className="max-w-[13ch] font-display text-4xl leading-[0.98] tracking-[-0.05em] md:text-5xl">
              {title}
            </h2>

            <div className="mt-8 space-y-6">
              {paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="max-w-[520px] text-sm leading-8 text-flora-forest/72 md:text-[15px]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="relative aspect-[16/9] overflow-hidden rounded-[1.5rem] md:mt-3">
            <ImageParallax offset={48} className="absolute inset-0">
              <Image
                src={project.images.gallery[0] ?? project.images.cover}
                alt={project.title[locale]}
                fill
                quality={75}
                sizes="(max-width: 768px) 100vw, 55vw"
                className="object-cover"
              />
            </ImageParallax>
          </div>
        </div>
      </div>
    </section>
  );
}

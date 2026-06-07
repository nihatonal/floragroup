'use client';

import Image from 'next/image';
import { Maximize2 } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

import Lightbox from 'yet-another-react-lightbox';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';

import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

import { type Locale, type Project } from '@/types/project';

type ProjectGalleryProps = {
  locale: Locale;
  project: Project;
};

export default function ProjectGallery({
  locale,
  project,
}: ProjectGalleryProps) {
  const t = useTranslations('projectDetail.gallery');

  const images = [
    project.images.hero,
    project.images.cover,
    ...project.images.gallery,
  ];

  const [index, setIndex] = useState(-1);

  const slides = images.map((image) => ({
    src: image,
    alt: project.title[locale],
  }));

  return (
    <section className="bg-flora-ivory text-flora-forest">
      <div className="mx-auto max-w-[1480px] px-5 md:px-16">
        <div className="border-b border-flora-forest/10 py-14 md:py-16">
          <div className="mb-8 flex items-center justify-between gap-6">
            <div className="flex flex-1 items-center gap-6">
              <p className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.24em] text-flora-bronze">
                {t('label')}
              </p>

              <span className="hidden h-px flex-1 bg-flora-forest/10 md:block" />
            </div>

            <button
              type="button"
              onClick={() => setIndex(0)}
              className="hidden items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] text-flora-forest transition hover:text-flora-bronze md:inline-flex"
            >
              {t('viewAll')}
              <Maximize2 size={16} strokeWidth={1.4} />
            </button>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <button
              type="button"
              onClick={() => setIndex(0)}
              className="group relative aspect-[16/10] overflow-hidden rounded-[1.25rem] md:row-span-2 md:aspect-auto"
            >
              <Image
                src={images[0]}
                alt={project.title[locale]}
                fill
                quality={75}
                sizes="(max-width: 768px) 100vw, 38vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
            </button>

            {images.slice(1, 5).map((image, imageIndex) => (
              <button
                key={image}
                type="button"
                onClick={() => setIndex(imageIndex + 1)}
                className="group relative aspect-[16/8.7] overflow-hidden rounded-[1.25rem]"
              >
                <Image
                  src={image}
                  alt={`${project.title[locale]} ${imageIndex + 2}`}
                  fill
                  quality={75}
                  sizes="(max-width: 768px) 100vw, 28vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIndex(0)}
            className="mt-6 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] text-flora-forest md:hidden"
          >
            {t('viewAll')}
            <Maximize2 size={16} strokeWidth={1.4} />
          </button>
        </div>
      </div>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={slides}
        plugins={[Thumbnails]}
        controller={{
          closeOnBackdropClick: true,
        }}
        thumbnails={{
          position: 'bottom',
          width: 96,
          height: 64,
          border: 1,
          borderRadius: 12,
          padding: 2,
          gap: 10,
        }}
        styles={{
          container: {
            backgroundColor: 'rgba(15, 13, 9, 0.96)',
          },
          thumbnailsContainer: {
            backgroundColor: 'rgba(15, 13, 9, 0.88)',
          },
        }}
      />
    </section>
  );
}

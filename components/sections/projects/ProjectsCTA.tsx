import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { type Locale } from '@/types/project';

type ProjectsCTAProps = {
  locale: Locale;
};

export default function ProjectsCTA({
  locale,
}: ProjectsCTAProps) {
  const t = useTranslations('projects.cta');

  return (
    <section className="bg-flora-ivory pb-10">
      <div className="mx-auto max-w-[1480px] px-5 md:px-16">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#062317] via-[#08311F] to-[#051A12] text-flora-ivory">
          <div className="grid gap-10 px-8 py-10 md:grid-cols-[1.2fr_1fr_auto] md:items-center md:px-16 md:py-14">
            <div className="md:col-span-2">
              <h2 className="max-w-[24ch] font-display text-4xl leading-[0.95] tracking-[-0.05em] md:text-6xl">
                {t('title')}
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-7 text-flora-ivory/70 md:text-base">
                {t('description')}
              </p>
            </div>

            {/* <div className="hidden md:block" /> */}

            <Link
              href={`/${locale}/${t('contactPath')}`}
              className="group inline-flex h-12 items-center justify-center gap-5 rounded-full bg-flora-ivory px-10 text-[11px] font-bold uppercase tracking-[0.22em] text-flora-forest transition-all duration-500 hover:px-12"
            >
              {t('button')}

              <ArrowRight
                size={16}
                strokeWidth={2}
                className="transition-transform duration-500 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Decorative leaf */}
          <div className="pointer-events-none absolute bottom-0 right-0 hidden opacity-[0.12] md:block">
            <svg
              width="220"
              height="220"
              viewBox="0 0 220 220"
              fill="none"
            >
              <path
                d="M140 20C140 90 100 140 40 180"
                stroke="white"
                strokeWidth="1.4"
              />
              <path
                d="M115 55C135 35 160 25 190 25"
                stroke="white"
                strokeWidth="1.2"
              />
              <path
                d="M105 95C130 80 165 80 195 95"
                stroke="white"
                strokeWidth="1.2"
              />
              <path
                d="M90 135C120 135 155 145 185 165"
                stroke="white"
                strokeWidth="1.2"
              />
              <path
                d="M65 165C95 180 120 200 145 220"
                stroke="white"
                strokeWidth="1.2"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
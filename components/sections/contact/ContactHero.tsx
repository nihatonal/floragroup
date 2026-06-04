import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function ContactHero() {
  const t = useTranslations('contact.hero');

  return (
    <section className="bg-flora-ivory pt-28 text-flora-forest md:pt-32">
      <div className="mx-auto grid min-h-[70svh] max-w-[1480px] px-5 md:grid-cols-[0.78fr_1.22fr] md:px-16">
        <div className="flex flex-col justify-center pb-12 pt-10 md:pb-20 md:pr-16 md:pt-0">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.24em] text-flora-bronze">
            {t('label')}
          </p>

          <h1 className="font-display text-[clamp(4.5rem,13vw,8rem)] leading-[0.9] tracking-[-0.065em]">
            {t('title')}
          </h1>

          <p className="mt-8 max-w-[440px] font-display text-3xl leading-tight tracking-[-0.04em] text-flora-forest/82 md:text-4xl">
            {t('description')}
          </p>

          <div className="mt-16 h-px w-10 bg-flora-forest/35" />

          <div className="mt-7 space-y-3">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em]">
              {t('location')}
            </p>

            <a
              href={`tel:${t('phoneHref')}`}
              className="block text-sm font-semibold text-flora-forest/78 transition hover:text-flora-bronze"
            >
              {t('phone')}
            </a>

            <a
              href={`mailto:${t('email')}`}
              className="block text-sm font-semibold text-flora-forest/78 transition hover:text-flora-bronze"
            >
              {t('email')}
            </a>
          </div>
        </div>

        <div className="relative min-h-[420px] overflow-hidden rounded-t-[2rem] md:min-h-0 md:rounded-none">
          <Image
            src="/images/contact-hero.webp"
            alt={t('imageAlt')}
            fill
            priority
            quality={90}
            sizes="(max-width: 768px) 100vw, 60vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
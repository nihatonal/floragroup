import { getTranslations } from 'next-intl/server';

type JournalPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: JournalPageProps) {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: 'journal.meta',
  });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function JournalPage() {
  const t = await getTranslations('journal');

  return (
    <main className="bg-flora-ivory text-flora-forest">
      <section className="flex min-h-[70svh] items-center justify-center px-6">
        <div className="max-w-[760px] text-center">
          <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.24em] text-flora-bronze">
            {t('eyebrow')}
          </p>

          <h1 className="font-display text-[clamp(4rem,8vw,7rem)] leading-[0.9] tracking-[-0.06em]">
            {t('title')}
          </h1>

          <p className="mx-auto mt-8 max-w-[580px] text-lg leading-8 text-flora-forest/70">
            {t('description')}
          </p>

          <div className="mx-auto mt-10 h-px w-12 bg-flora-bronze" />

          <p className="mt-10 text-sm uppercase tracking-[0.2em] text-flora-forest/50">
            {t('comingSoon')}
          </p>
        </div>
      </section>
    </main>
  );
}
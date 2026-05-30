'use client';

import { Leaf, PenLine, ShieldCheck, Sparkles } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Container from '@/components/ui/Container';
import SectionLabel from '@/components/ui/SectionLabel';
import FadeUp from '@/components/motion/FadeUp';
import Stagger, { StaggerItem } from '@/components/motion/Stagger';

const values = [
  { key: 'nature', icon: Leaf },
  { key: 'timeless', icon: Sparkles },
  { key: 'quality', icon: ShieldCheck },
  { key: 'custom', icon: PenLine },
] as const;

export default function AboutValues() {
  const t = useTranslations('about.values');

  return (
    <section className="relative overflow-hidden bg-flora-ivory py-20 text-flora-charcoal md:py-28">
      <Container>
        <div className="mb-8 grid gap-8 md:grid-cols-[0.42fr_1fr] md:items-end">
          <div>
            <FadeUp>
              <SectionLabel>{t('label')}</SectionLabel>
            </FadeUp>

            {/* <FadeUp delay={0.08}>
              <h2 className="max-w-[11ch] font-display text-4xl leading-[0.96] tracking-[-0.05em] md:text-6xl">
                {t('title')}
              </h2>
            </FadeUp> */}
          </div>

          {/* <FadeUp delay={0.16}>
            <p className="max-w-xl text-sm leading-7 text-flora-charcoal/65 md:text-base">
              {t('description')}
            </p>
          </FadeUp> */}
        </div>

        <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {values.map((item, index) => {
            const Icon = item.icon;

            return (
              <StaggerItem key={item.key}>
                <article
                  className={`group h-full border border-flora-border/70 bg-white/45 p-7 transition duration-500 hover:-translate-y-1 hover:border-flora-leaf/35 hover:bg-white/70 hover:shadow-card ${
                    index === 1 ? 'lg:mt-10' : ''
                  } ${index === 2 ? 'lg:-mt-4' : ''}`}
                >
                  <Icon
                    size={30}
                    strokeWidth={1.35}
                    className="text-flora-bronze transition duration-500 group-hover:text-flora-leaf"
                  />

                  <h3 className="mt-8 font-display text-3xl leading-none tracking-[-0.04em]">
                    {t(`items.${item.key}.title`)}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-flora-charcoal/62">
                    {t(`items.${item.key}.description`)}
                  </p>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
}
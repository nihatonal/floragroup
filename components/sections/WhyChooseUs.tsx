'use client';

import { Leaf, ShieldCheck, Sparkles, Users } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Container from '@/components/ui/Container';
import SectionLabel from '@/components/ui/SectionLabel';
import FadeUp from '@/components/motion/FadeUp';
import Stagger, { StaggerItem } from '@/components/motion/Stagger';

const items = [
  { key: 'nature', icon: Leaf },
  { key: 'quality', icon: ShieldCheck },
  { key: 'aesthetic', icon: Sparkles },
  { key: 'team', icon: Users },
] as const;

export default function WhyChooseUs() {
  const t = useTranslations('home.whyChooseUs');

  return (
    <section className="relative overflow-hidden bg-flora-forest py-24 text-flora-ivory md:py-32">
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-flora-leaf/10 blur-[130px]" />
        <div className="absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-flora-champagne/10 blur-[120px]" />
      </div>

      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-[0.48fr_1fr]">
          <div>
            <FadeUp>
              <SectionLabel className="text-flora-champagne">
                {t('label')}
              </SectionLabel>
            </FadeUp>

            <FadeUp delay={0.08}>
              <h2 className="max-w-[20ch] font-display text-5xl leading-[0.95] tracking-[-0.05em] md:text-7xl">
                {t('title')}
              </h2>
            </FadeUp>

            <FadeUp delay={0.16}>
              <p className="mt-7 max-w-md text-sm leading-7 text-flora-ivory/62 md:text-base">
                {t('description')}
              </p>
            </FadeUp>
          </div>

          <Stagger className="grid gap-5 sm:grid-cols-2" staggerDelay={0.08}>
            {items.map((item, index) => {
              const Icon = item.icon;

              return (
                <StaggerItem key={item.key}>
                  <article
                    className={`group relative overflow-hidden  border border-flora-ivory/10 bg-flora-deep/50 p-8 transition duration-500 hover:border-flora-champagne/40 hover:bg-flora-ivory/[0.075] ${
                      index === 1 ? 'lg:mt-16' : ''
                    } ${index === 2 ? 'lg:-mt-8' : ''}`}
                  >
                    <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-flora-leaf/10 blur-3xl transition duration-500 group-hover:bg-flora-champagne/10" />

                    <Icon className="text-flora-champagne" size={28} />

                    <h3 className="mt-8 font-display text-3xl leading-none tracking-[-0.04em]">
                      {t(`items.${item.key}.title`)}
                    </h3>

                    <p className="mt-5 text-sm leading-7 text-flora-ivory/60">
                      {t(`items.${item.key}.description`)}
                    </p>
                  </article>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </Container>
    </section>
  );
}
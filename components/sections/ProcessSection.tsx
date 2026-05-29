'use client';

import {
  MoveDown,
  MoveRight,
  ClipboardCheck,
  DraftingCompass,
  Handshake,
  PenTool,
  Sprout,
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import Container from '@/components/ui/Container';
import SectionLabel from '@/components/ui/SectionLabel';
import FadeUp from '@/components/motion/FadeUp';
import Stagger, { StaggerItem } from '@/components/motion/Stagger';

const steps = [
  { key: 'discovery', icon: ClipboardCheck },
  { key: 'design', icon: PenTool },
  { key: 'planning', icon: DraftingCompass },
  { key: 'implementation', icon: Sprout },
  { key: 'support', icon: Handshake },
] as const;

export default function ProcessSection() {
  const t = useTranslations('home.process');

  return (
    <section className="relative overflow-hidden bg-flora-ivory pb-20 text-flora-charcoal md:pb-24">
      <Container>
        <div className="grid gap-2 lg:grid-cols-[0.42fr_1fr] lg:items-start">
          <div>
            <FadeUp>
              <SectionLabel>{t('label')}</SectionLabel>
            </FadeUp>

            <FadeUp delay={0.08}>
              <h2 className="max-w-[19ch] font-display text-4xl leading-[0.98] tracking-[-0.045em] md:text-5xl lg:text-6xl">
                {t('title')}
              </h2>
            </FadeUp>
          </div>

          <Stagger
            className="mx-auto grid w-full max-w-[280px] gap-0 md:max-w-none md:grid-cols-5 md:items-start"
            staggerDelay={0.08}
          >
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === steps.length - 1;

              return (
                <StaggerItem key={step.key}>
                  <article className="relative grid grid-cols-[64px_1fr] gap-x-5 pb-10 md:block md:pb-0 md:text-center">
                    {!isLast && (
                      <span className="absolute left-[32px] top-[72px] h-[calc(100%-42px)] w-px bg-flora-charcoal/18 md:hidden" />
                    )}

                    {!isLast && (
                      <MoveDown
                        size={15}
                        strokeWidth={1.35}
                        className="absolute left-[25px] top-[112px] text-flora-charcoal/45 md:hidden"
                      />
                    )}

                    <div className="relative z-10 flex flex-col items-center md:block">
                      <p className="mb-2 font-display text-xl leading-none tracking-[-0.02em] text-flora-bronze md:mb-5 md:text-4xl">
                        0{index + 1}
                      </p>

                      <div className="grid size-14 place-items-center rounded-[5px] border border-flora-charcoal/22 bg-flora-ivory md:mx-auto md:size-12">
                        <Icon
                          size={36}
                          strokeWidth={1.25}
                          className="text-flora-charcoal/72 md:size-6"
                        />
                      </div>
                    </div>

                    <div className="pt-8 md:pt-0">
                      <h3 className="text-[13px] font-semibold leading-none tracking-[-0.01em] md:mt-5 md:text-sm">
                        {t(`steps.${step.key}.title`)}
                      </h3>

                      <p className="mt-2 max-w-[170px] text-[11px] leading-5 text-flora-charcoal/62 md:mx-auto md:mt-3 md:text-xs">
                        {t(`steps.${step.key}.description`)}
                      </p>
                    </div>

                    {!isLast && (
                      <MoveRight
                        size={22}
                        strokeWidth={1.25}
                        className="absolute right-[-12px] top-[72px] hidden text-flora-charcoal/42 md:block"
                      />
                    )}
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
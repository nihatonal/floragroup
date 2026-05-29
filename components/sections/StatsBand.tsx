'use client';

import { Award, Flower2, Leaf, Trees } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Container from '@/components/ui/Container';
import Stagger, { StaggerItem } from '@/components/motion/Stagger';

const stats = [
  {
    key: 'years',
    value: '12+',
    icon: Leaf,
  },
  {
    key: 'projects',
    value: '250+',
    icon: Trees,
  },
  {
    key: 'satisfaction',
    value: '98%',
    icon: Flower2,
  },
  {
    key: 'team',
    value: '15+',
    icon: Award,
  },
] as const;

export default function StatsBand() {
  const t = useTranslations('home.stats');

  return (
    <section className="relative -mt-px overflow-hidden bg-flora-forest rounded-bl-[5rem] md:rounded-none text-flora-ivory ">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[260px] w-[260px] -translate-x-1/2 rounded-full bg-flora-leaf/12 blur-[100px]" />
        <div className="absolute bottom-0 right-0 h-[220px] w-[220px] rounded-full bg-flora-champagne/10 blur-[90px]" />
      </div>

      <Container className="relative py-16 pb-28 md:py-16">
        <Stagger className="mx-auto grid max-w-[260px] gap-10 md:max-w-none md:grid-cols-4 md:gap-0 ">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <StaggerItem
                key={item.key}
                className={`mx-auto grid w-full grid-cols-[64px_1fr] items-center gap-x-5 md:block md:text-center ${
                  index !== stats.length - 1
                    ? 'md:border-r md:border-flora-ivory/10'
                    : ''
                }`}
              >
                <Icon
                  size={46}
                  strokeWidth={1.25}
                  className="justify-self-center text-flora-champagne md:mx-auto md:mb-4 md:size-[34px]"
                />

                <div>
                  <div className="font-display text-5xl leading-none tracking-[-0.04em] text-flora-ivory md:text-5xl">
                    {item.value}
                  </div>

                  <p className="mt-2 text-[12px] leading-none text-flora-ivory/70 md:mt-3 md:text-[11px]">
                    {t(item.key)}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>


      {/* <div className="pointer-events-none absolute bottom-0 left-0 h-20 w-[100%] rounded-tr-[5rem]  bg-flora-ivory md:hidden" /> */}
    </section>
  );
}
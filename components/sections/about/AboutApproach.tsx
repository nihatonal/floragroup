"use client";

import { Home, Leaf, MapPin, Sprout, Target } from "lucide-react";
import { useTranslations } from "next-intl";
import Container from "@/components/ui/Container";
import FadeUp from "@/components/motion/FadeUp";
import Stagger, { StaggerItem } from "@/components/motion/Stagger";

const steps = [
  { key: "observe", icon: Leaf },
  { key: "understand", icon: MapPin },
  { key: "design", icon: Home },
] as const;

const principles = [
  { key: "vision", icon: Sprout },
  { key: "mission", icon: Target },
] as const;

export default function AboutApproach() {
  const t = useTranslations("about.approach");

  return (
    <section
      id="approach"
      className="relative overflow-hidden bg-flora-ivory text-flora-charcoal"
    >
      <Container className="py-20">
        <FadeUp>
          <p className="mb-12 text-center text-[11px] font-semibold uppercase tracking-[0.32em] text-flora-charcoal/72">
            {t("label")}
          </p>
        </FadeUp>

        <Stagger className="grid gap-0 md:grid-cols-3" staggerDelay={0.08}>
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <StaggerItem key={step.key}>
                <article
                  className={`relative px-4 py-8 md:min-h-[170px] md:px-10 md:py-2 ${
                    index !== steps.length - 1
                      ? "md:border-r md:border-flora-border/80"
                      : ""
                  }`}
                >
                  <span className="pointer-events-none absolute left-2 top-0 font-display text-7xl leading-none tracking-[-0.06em] text-flora-bronze/16 md:left-6 md:text-8xl">
                    0{index + 1}
                  </span>

                  <div className="relative z-10 pl-16 md:pl-20">
                    <Icon
                      size={36}
                      strokeWidth={1.35}
                      className="mb-4 text-flora-forest/76"
                    />

                    <h3 className="font-display text-2xl leading-none tracking-[-0.04em] md:text-3xl">
                      {t(`items.${step.key}.title`)}
                    </h3>

                    <p className="mt-4 max-w-[260px] text-[13px] leading-6 text-flora-charcoal/62">
                      {t(`items.${step.key}.description`)}
                    </p>
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>

      <div className="border-y border-flora-border/70">
        <Container>
          <Stagger className="grid gap-0 md:grid-cols-2" staggerDelay={0.08}>
            {principles.map((item, index) => {
              const Icon = item.icon;

              return (
                <StaggerItem key={item.key}>
                  <article
                    className={`grid gap-6 py-10   md:grid-cols-[72px_1fr] md:py-16 ${
                      index === 0
                        ? "md:pr-14 md:border-r md:border-flora-border/70"
                        : "md:pl-14"
                    }`}
                  >
                    <div className="grid size-14 place-items-center rounded-full border border-flora-border text-flora-forest/72">
                      <Icon size={25} strokeWidth={1.25} />
                    </div>

                    <div>
                      <p className="mb-5 text-[10px] font-semibold uppercase tracking-luxury text-flora-bronze">
                        {t(`${item.key}.label`)}
                      </p>

                      <h3 className="max-w-[24ch] font-display text-3xl leading-[0.98] tracking-[-0.045em] md:text-4xl">
                        {t(`${item.key}.title`)}
                      </h3>

                      <p className="mt-5 max-w-md text-sm leading-7 text-flora-charcoal/62">
                        {t(`${item.key}.description`)}
                      </p>
                    </div>
                  </article>
                </StaggerItem>
              );
            })}
          </Stagger>
        </Container>
      </div>
    </section>
  );
}

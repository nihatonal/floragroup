"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import Container from "@/components/ui/Container";
import FadeUp from "@/components/motion/FadeUp";
import Image from "next/image";
import ImageParallax from "../motion/ImageParallax";

const contactItems = [
  { key: "phone", icon: Phone },
  { key: "email", icon: Mail },
  { key: "location", icon: MapPin },
] as const;

export default function ContactSection() {
  const t = useTranslations("home.contact");

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-flora-night py-16 text-flora-ivory md:py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(79,143,70,0.18),transparent_34%)]" />
      <div className="noise-overlay absolute inset-0 opacity-25" />
      <div className="absolute inset-0">
        <ImageParallax offset={24} className="absolute inset-0">
          <Image
            src="/images/project-main.webp"
            alt=""
            fill
            quality={75}
            sizes="(max-width: 767px) 100vw, 50vw"
            className="scale-110 object-cover opacity-45"
          />
        </ImageParallax>
      </div>

      <div className="noise-overlay absolute inset-0 opacity-25" />

      <Container className="relative">
        <div className="grid gap-10 md:grid-cols-[1fr_0.34fr] md:items-center">
          <div>
            <FadeUp>
              <h2 className="max-w-4xl font-display text-[clamp(3.2rem,6.8vw,7rem)] leading-[0.92] tracking-[-0.055em] text-balance">
                {t("title")}
              </h2>
            </FadeUp>
          </div>

          <FadeUp delay={0.12}>
            <div className="flex flex-col gap-6 md:items-start">
              <Link
                href={t("ctaHref")}
                className="group inline-flex w-fit items-center gap-4 border border-flora-ivory/20 px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] transition duration-500 hover:border-flora-champagne/60 hover:bg-flora-ivory hover:text-flora-night"
              >
                {t("cta")}
                <span className="h-px w-9 bg-current transition-all duration-500 group-hover:w-12" />
              </Link>

              <div className="space-y-4">
                {contactItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.key}
                      className="flex items-start gap-4 text-sm text-flora-ivory/72"
                    >
                      <Icon
                        size={17}
                        strokeWidth={1.5}
                        className="mt-1 shrink-0 text-flora-champagne"
                      />
                      <span>{t(`items.${item.key}.value`)}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { type Locale } from "@/types/project";

type ContactClosingSectionProps = {
  locale: Locale;
};

export default function ContactClosingSection({
  locale,
}: ContactClosingSectionProps) {
  const t = useTranslations("contact.closing");

  const cities = t.raw("cities") as string[];

  return (
    <section className="border-t border-flora-stone/20 bg-flora-ivory">
      <div className="mx-auto max-w-[1480px] px-6 py-24 md:px-12">
        {/* SERVICE AREAS */}

        <div className="text-center">
          <h2 className="font-display text-4xl text-flora-forest md:text-5xl">
            {t("areasTitle")}
          </h2>

          <div className="mx-auto mt-6 h-px w-16 bg-flora-bronze" />

          <div className="mt-12 flex flex-wrap justify-center gap-x-10 gap-y-5 text-lg text-flora-forest/85 md:text-2xl">
            {cities.map((city) => (
              <span key={city}>{city}</span>
            ))}
          </div>
        </div>

        {/* INSTAGRAM */}

        <div className="relative mt-24 overflow-hidden rounded-[32px]">
          <Image
            src="/images/contact-instagram-banner.webp"
            alt="Instagram"
            width={1600}
            height={700}
            className="h-[420px] w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/45" />

          <div className="absolute inset-0 flex items-center">
            <div className="max-w-lg px-8 text-white md:px-14">
              <h3 className="font-display text-4xl leading-tight md:text-6xl">
                {t("instagram.title")}
              </h3>

              <p className="mt-6 text-lg">{t("instagram.handle")}</p>

              <Link
                href="https://instagram.com/floraadinda"
                target="_blank"
                className="mt-8 inline-flex items-center gap-4 border border-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] transition hover:bg-white hover:text-black"
              >
                {t("instagram.button")}
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* FINAL CTA */}

        <div className="relative overflow-hidden py-28 text-center">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-64 bg-[url('/images/leaf-left.svg')] bg-contain bg-left bg-no-repeat opacity-15" />

          <div className="pointer-events-none absolute right-0 top-0 h-full w-64 bg-[url('/images/leaf-right.svg')] bg-contain bg-right bg-no-repeat opacity-15" />

          <h2 className="font-display text-5xl text-flora-forest md:text-7xl">
            {t("cta.title")}
          </h2>

          <div className="mx-auto mt-6 h-px w-16 bg-flora-bronze" />

          <p className="mx-auto mt-8 max-w-xl text-lg leading-8 text-flora-forest/70">
            {t("cta.description")}
          </p>

          <Link
            href="https://wa.me/905321234567"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-4 bg-flora-forest px-10 py-5 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:opacity-90"
          >
            {t("cta.button")}
          </Link>
        </div>
      </div>
    </section>
  );
}

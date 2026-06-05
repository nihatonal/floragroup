import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Container from "@/components/ui/Container";
import FadeUp from "@/components/motion/FadeUp";
import { type Locale } from "@/i18n/routing";

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale() as Locale;

  return (
    <footer className="relative overflow-hidden bg-flora-deep text-flora-ivory">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_88%_20%,rgba(200,173,127,0.08),transparent_30%)]" />
      <div className="noise-overlay absolute inset-0 opacity-20" />

      <Container className="relative py-14 md:py-16">
        <div className="grid gap-12 md:grid-cols-[1.2fr_0.7fr_0.7fr_1fr]">
          <FadeUp>
            <div>
              <span className="block font-display text-2xl tracking-[-0.03em]">
                {t("brand.name")}
              </span>

              <span className="mt-2 block text-[9px] uppercase tracking-luxury text-flora-ivory/45">
                {t("brand.tagline")}
              </span>

              <p className="mt-6 max-w-xs text-sm leading-7 text-flora-ivory/56">
                {t("description")}
              </p>

              {/* <div className="mt-6 flex items-center gap-4 text-flora-ivory/70">
                <a href="#" aria-label="Instagram" className="hover:text-flora-champagne">
                  <Instagram size={17} />
                </a>
                <a href="#" aria-label="LinkedIn" className="hover:text-flora-champagne">
                  <Linkedin size={17} />
                </a>
              </div> */}
            </div>
          </FadeUp>

          <FadeUp delay={0.05}>
            <div>
              <p className="mb-5 text-[10px] uppercase tracking-luxury text-flora-ivory/38">
                {t("navigation.title")}
              </p>

              <div className="space-y-3 text-sm text-flora-ivory/68">
                <Link
                  href={`/${locale}/hakkimizda`}
                  className="block hover:text-flora-champagne"
                >
                  {t("navigation.about")}
                </Link>
                <Link
                  href={`/${locale}/projelerimiz`}
                  className="block hover:text-flora-champagne"
                >
                  {t("navigation.projects")}
                </Link>
                <Link
                  href={`/${locale}/journal`}
                  className="block hover:text-flora-champagne"
                >
                  {t("navigation.journal")}
                </Link>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div>
              <p className="mb-5 text-[10px] uppercase tracking-luxury text-flora-ivory/38">
                {t("services.title")}
              </p>

              <div className="space-y-3 text-sm text-flora-ivory/68">
                <p>{t("services.landscape")}</p>
                <p>{t("services.application")}</p>
                <p>{t("services.maintenance")}</p>
                <p>{t("services.consulting")}</p>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div>
              <p className="mb-5 text-[10px] uppercase tracking-luxury text-flora-ivory/38">
                {t("contact.title")}
              </p>

              <div className="space-y-4 text-sm text-flora-ivory/68">
                <a
                  href={t("contact.phoneHref")}
                  className="flex gap-3 hover:text-flora-champagne"
                >
                  <Phone
                    size={16}
                    className="mt-0.5 shrink-0 text-flora-champagne"
                  />
                  {t("contact.phone")}
                </a>

                <a
                  href={t("contact.emailHref")}
                  className="flex gap-3 hover:text-flora-champagne"
                >
                  <Mail
                    size={16}
                    className="mt-0.5 shrink-0 text-flora-champagne"
                  />
                  {t("contact.email")}
                </a>

                <p className="flex gap-3">
                  <MapPin
                    size={16}
                    className="mt-0.5 shrink-0 text-flora-champagne"
                  />
                  {t("contact.location")}
                </p>
              </div>
            </div>
          </FadeUp>
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-flora-ivory/10 pt-6 text-[11px] uppercase tracking-[0.12em] text-flora-ivory/36 md:flex-row md:items-center md:justify-between">
          <p>{t("copyright")}</p>
          <p>Portfolio Project • Designed & Developed by BravixCreative</p>

          <div className="flex items-center gap-5">
            <Link href="/tr" className="hover:text-flora-champagne">
              TR
            </Link>
            <Link href="/en" className="hover:text-flora-champagne">
              EN
            </Link>
            <Link href="/ru" className="hover:text-flora-champagne">
              RU
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

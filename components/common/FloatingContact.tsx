"use client";

import { Mail, MessageCircle, Phone, X, ArrowRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { type Locale } from "@/i18n/routing";

export default function FloatingContact() {
  const t = useTranslations("floatingContact");
  const tNav = useTranslations("header");
  const locale = useLocale() as Locale;
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight * 0.65);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={cn(
          `
    group
    fixed
    bottom-4
    right-4
    md:bottom-6
    md:right-6
    z-50
   flex

    h-14
    w-[56px]
    md:w-[180px]

    items-center
    rounded-full

    border
    border-flora-bronze/35

    bg-flora-ivory/95
    backdrop-blur-md

    shadow-[0_18px_50px_rgba(32,56,39,0.12)]

    transition-all
    duration-700
    ease-[cubic-bezier(.16,1,.3,1)]

    hover:border-flora-bronze/60
    hover:shadow-[0_25px_70px_rgba(32,56,39,0.18)]
    `,
          isVisible && !isOpen
            ? "pointer-events-auto opacity-100 translate-y-0"
            : "pointer-events-none opacity-0 translate-y-4",
        )}
        aria-label={t("open")}
      >
        <span
          className="
      flex
      size-14
      shrink-0
      items-center
      justify-center

      text-[22px]
      text-flora-bronze

      transition-transform
      duration-700
      ease-[cubic-bezier(.16,1,.3,1)]

      group-hover:rotate-12
    "
        >
          ✦
        </span>

        <span
          className="
          hidden md:block
      text-[11px]
      font-semibold
      uppercase
      tracking-[0.22em]

      text-flora-forest

      opacity-100
      translate-x-2

      transition-all
      duration-700
      ease-[cubic-bezier(.16,1,.3,1)]

      group-hover:translate-x-0
      group-hover:opacity-100
    "
        >
          {t("button")}
        </span>
      </button>

      <div
        className={cn(
          "fixed inset-0 z-50 bg-flora-forest/20 backdrop-blur-[2px] transition-opacity duration-500",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setIsOpen(false)}
      />

      <aside
        className={cn(
          "fixed bottom-5 right-5 z-50 w-[calc(100%-2.5rem)] max-w-[390px] overflow-hidden rounded-[28px] border border-flora-forest/10 bg-flora-ivory p-7 shadow-[0_30px_90px_rgba(32,56,39,0.25)] transition-all duration-500 md:bottom-8 md:right-8",
          isOpen
            ? "translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-6 scale-95 opacity-0",
        )}
      >
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="absolute right-5 top-5 flex size-9 items-center justify-center rounded-full border border-flora-forest/10 text-flora-forest transition hover:bg-flora-forest hover:text-flora-ivory"
          aria-label={t("close")}
        >
          <X size={16} strokeWidth={1.6} />
        </button>

        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-flora-bronze">
          {t("eyebrow")}
        </p>

        <h3 className="mt-5 max-w-[260px] font-display text-4xl leading-[0.95] tracking-[-0.05em] text-flora-forest">
          {t("title")}
        </h3>

        <div className="mt-6 h-px w-12 bg-flora-bronze" />

        <div className="mt-8 space-y-3">
          <ContactItem
            href="https://wa.me/905321234567"
            label={t("whatsapp")}
            icon={<MessageCircle size={18} strokeWidth={1.5} />}
            external
          />

          <ContactItem
            href="mailto:hello@florastudio.com"
            label={t("email")}
            icon={<Mail size={18} strokeWidth={1.5} />}
          />

          <ContactItem
            href="tel:+905321234567"
            label={t("phone")}
            icon={<Phone size={18} strokeWidth={1.5} />}
          />
        </div>

        <div className="mt-7 border-t border-flora-forest/10 pt-5">
          <a
            href={`/${locale}/${tNav("paths.contact")}#contact-form`}
            onClick={() => setIsOpen(false)}
            className="group flex items-center justify-between text-sm font-semibold text-flora-forest"
          >
            {t("form")}
            <ArrowRight
              size={17}
              strokeWidth={1.6}
              className="transition-transform duration-500 group-hover:translate-x-1"
            />
          </a>
        </div>

        <p className="mt-6 text-xs leading-5 text-flora-forest/55">
          {t("responseTime")}
        </p>
      </aside>
    </>
  );
}

type ContactItemProps = {
  href: string;
  label: string;
  icon: React.ReactNode;
  external?: boolean;
};

function ContactItem({ href, label, icon, external }: ContactItemProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex items-center justify-between rounded-2xl px-1 py-3 text-flora-forest transition hover:text-flora-bronze"
    >
      <span className="flex items-center gap-4">
        <span className="text-flora-bronze">{icon}</span>
        <span className="text-sm font-medium">{label}</span>
      </span>

      <ArrowRight
        size={16}
        strokeWidth={1.5}
        className="opacity-45 transition-transform duration-500 group-hover:translate-x-1 group-hover:opacity-100"
      />
    </a>
  );
}

'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import Container from '@/components/ui/Container';
import { cn } from '@/lib/utils';
import { type Locale } from '@/i18n/routing';

export default function Header() {
  const t = useTranslations('header');
  const locale = useLocale() as Locale;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: t('nav.about'), href: `/${locale}/${t('paths.about')}` },
    { label: t('nav.projects'), href: `/${locale}/${t('paths.projects')}` },
    { label: t('nav.gallery'), href: `/${locale}/${t('paths.gallery')}` },
    { label: t('nav.contact'), href: `/${locale}/#contact` },
  ];

  const closeMenu = () => setIsMenuOpen(false);
  const openMenu = () => setIsMenuOpen(true);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 24);
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 transition-all duration-500">
      <Container
        className={cn(
          'relative z-[99] flex items-center justify-between transition-all duration-500',
          isScrolled
            ? 'h-14 rounded-full border border-flora-forest/10 bg-flora-ivory/80 px-6 text-flora-forest shadow-soft backdrop-blur-[20px]'
            : 'h-16 rounded-full border border-flora-forest/10 bg-flora-ivory/70 px-6 text-flora-forest shadow-soft backdrop-blur-[20px]'
        )}
      >
        <Link href={`/${locale}`} onClick={closeMenu} className="group">
          <span className="block font-display text-xl leading-none tracking-[-0.02em]">
            {t('brand.name')}
          </span>

          <span className="mt-1 block text-[9px] uppercase tracking-luxury text-flora-forest/70 transition group-hover:text-flora-forest">
            {t('brand.tagline')}
          </span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[11px] font-semibold uppercase tracking-[0.16em] text-flora-forest/80 transition duration-300 hover:text-flora-leaf"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-flora-forest/70 sm:flex">
            {(['tr', 'en', 'ru'] as const).map((item) => (
              <Link
                key={item}
                href={`/${item}`}
                className={
                  item === locale
                    ? 'text-flora-forest'
                    : 'transition hover:text-flora-leaf'
                }
              >
                {item}
              </Link>
            ))}
          </div>

          <button
            type="button"
            onClick={isMenuOpen ? closeMenu : openMenu}
            className={cn(
              'group relative grid size-11 place-items-center rounded-full border backdrop-blur-xl transition duration-500 lg:hidden',
              isMenuOpen
                ? 'border-flora-forest/10 bg-flora-forest text-flora-ivory'
                : 'border-flora-forest/25 bg-flora-ivory/30 text-flora-forest hover:border-flora-leaf/60 hover:bg-flora-ivory/70'
            )}
            aria-label={isMenuOpen ? t('menu.close') : t('menu.open')}
            aria-expanded={isMenuOpen}
          >
            <span className="relative block h-4 w-5">
              <span
                className={cn(
                  'absolute left-0 top-0 h-px w-5 bg-current transition-all duration-300',
                  isMenuOpen && 'top-2 rotate-45'
                )}
              />
              <span
                className={cn(
                  'absolute left-0 top-2 h-px w-5 bg-current transition-all duration-300',
                  isMenuOpen && 'opacity-0'
                )}
              />
              <span
                className={cn(
                  'absolute bottom-0 left-0 h-px w-5 bg-current transition-all duration-300',
                  isMenuOpen && 'bottom-[7px] -rotate-45'
                )}
              />
            </span>
          </button>
        </div>
      </Container>

      {/* Overlay */}
      <motion.div
        className={cn(
          'fixed inset-0 z-[55] bg-flora-night/35 backdrop-blur-sm lg:hidden',
          isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        )}
        initial={false}
        animate={{
          opacity: isMenuOpen ? 1 : 0,
        }}
        transition={{
          duration: 0.28,
          ease: [0.22, 1, 0.36, 1],
        }}
        onClick={closeMenu}
      />

      {/* Mobile drawer */}
      <motion.div
        className={cn(
          'fixed inset-y-0 right-0 z-[60] h-[100dvh] w-screen transform-gpu overflow-hidden bg-flora-ivory text-flora-forest shadow-premium will-change-transform sm:max-w-[430px] lg:hidden',
          isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        )}
        initial={false}
        animate={{
          x: isMenuOpen ? '0%' : '110%',
        }}
        transition={{
          duration: 0.52,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="absolute -right-24 top-20 h-72 w-72 rounded-full bg-flora-leaf/10 blur-[90px]" />
        <div className="absolute -left-24 bottom-20 h-72 w-72 rounded-full bg-flora-champagne/12 blur-[90px]" />

        <div className="relative flex h-full flex-col px-6 py-6">
          <nav className="mt-20 flex flex-col gap-3">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={false}
                animate={{
                  opacity: isMenuOpen ? 1 : 0,
                  x: isMenuOpen ? 0 : 32,
                }}
                transition={{
                  duration: 0.55,
                  delay: isMenuOpen ? 0.12 + index * 0.07 : 0,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className="group flex items-end justify-between border-b border-flora-forest/10 py-5"
                >
                  <span className="font-display text-[clamp(2.75rem,12vw,4.5rem)] leading-none tracking-[-0.055em] transition duration-500 group-hover:text-flora-leaf">
                    {item.label}
                  </span>

                  <span className="mb-1 text-[11px] text-flora-bronze">
                    0{index + 1}
                  </span>
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="mt-auto border-t border-flora-forest/10 pt-6">
            <div className="mb-6 flex gap-5 text-xs font-semibold uppercase tracking-luxury text-flora-forest/70">
              {(['tr', 'en', 'ru'] as const).map((item) => (
                <Link
                  key={item}
                  href={`/${item}`}
                  onClick={closeMenu}
                  className={
                    item === locale
                      ? 'text-flora-bronze'
                      : 'transition hover:text-flora-leaf'
                  }
                >
                  {item}
                </Link>
              ))}
            </div>

            <p className="max-w-xs text-xs leading-6 text-flora-forest/48">
              {t('menu.note')}
            </p>
          </div>
        </div>
      </motion.div>
    </header>
  );
}

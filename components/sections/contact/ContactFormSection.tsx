"use client";

import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ContactFormSection() {
  const t = useTranslations("contact.form");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      projectType: formData.get("projectType"),
      message: formData.get("message"),
    };
    // await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(payload),
    // });
    console.log("CONTACT FORM:", payload);
  };

  return (
    <section className="bg-flora-ivory text-flora-forest">
      <div className="mx-auto grid max-w-[1480px] border-y border-flora-forest/10 px-5 py-16 md:grid-cols-[0.75fr_1.25fr] md:px-16 md:py-24">
        <div className="pb-12 md:border-r md:border-flora-forest/10 md:pb-0 md:pr-16">
          <h2 className="max-w-[10ch] font-display text-5xl leading-[0.95] tracking-[-0.06em] md:text-7xl">
            {t("title")}
          </h2>

          <div className="mt-8 h-px w-10 bg-flora-forest/35" />

          <p className="mt-8 max-w-[280px] font-display text-2xl leading-snug tracking-[-0.04em] text-flora-forest/82">
            {t("description")}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="md:pl-20">
          <div className="space-y-9">
            <div>
              <label className="mb-3 block text-sm font-semibold text-flora-forest/80">
                {t("fields.name")}
              </label>
              <input
                type="text"
                name="name"
                className="h-12 w-full border-0 border-b border-flora-forest/25 bg-transparent px-0 text-base outline-none transition focus:border-flora-forest"
              />
            </div>

            <div>
              <label className="mb-3 block text-sm font-semibold text-flora-forest/80">
                {t("fields.email")}
              </label>
              <input
                type="email"
                name="email"
                className="h-12 w-full border-0 border-b border-flora-forest/25 bg-transparent px-0 text-base outline-none transition focus:border-flora-forest"
              />
            </div>

            <div>
              <label className="mb-3 block text-sm font-semibold text-flora-forest/80">
                {t("fields.phone")}
              </label>
              <input
                type="tel"
                name="phone"
                className="h-12 w-full border-0 border-b border-flora-forest/25 bg-transparent px-0 text-base outline-none transition focus:border-flora-forest"
              />
            </div>

            <div>
              <label className="mb-3 block text-sm font-semibold text-flora-forest/80">
                {t("fields.projectType")}
              </label>
              <select
                name="projectType"
                defaultValue=""
                className="h-12 w-full border-0 border-b border-flora-forest/25 bg-transparent px-0 text-base outline-none transition focus:border-flora-forest"
              >
                <option value="" disabled>
                  {t("fields.projectTypePlaceholder")}
                </option>
                <option value="villa">{t("options.villa")}</option>
                <option value="hotel">{t("options.hotel")}</option>
                <option value="commercial">{t("options.commercial")}</option>
                <option value="terrace">{t("options.terrace")}</option>
                <option value="consultancy">{t("options.consultancy")}</option>
              </select>
            </div>

            <div>
              <label className="mb-3 block text-sm font-semibold text-flora-forest/80">
                {t("fields.message")}
              </label>
              <textarea
                name="message"
                rows={5}
                className="w-full resize-none border-0 border-b border-flora-forest/25 bg-transparent px-0 py-3 text-base outline-none transition focus:border-flora-forest"
              />
            </div>
          </div>

          <button
            type="submit"
            className="group mt-9 inline-flex h-14 items-center justify-center gap-5 bg-flora-night px-12 text-[11px] font-bold uppercase tracking-[0.22em] text-flora-ivory transition hover:bg-flora-forest"
          >
            {t("submit")}
            <ArrowRight
              size={16}
              strokeWidth={1.7}
              className="transition-transform duration-500 group-hover:translate-x-1"
            />
          </button>
        </form>
      </div>
    </section>
  );
}

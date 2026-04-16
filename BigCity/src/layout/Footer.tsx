import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  footerExploreLinks,
  footerSupportLinks,
} from "../constants/navigation";

function FooterLinks({
  title,
  links,
}: {
  title: string;
  links: Array<{ labelKey: string; to: string }>;
}) {
  const { t } = useTranslation();
  return (
    <div className="md:col-span-2">
      <h4 className="font-semibold text-white">{title}</h4>
      <ul className="mt-4 space-y-3 text-sm text-gray-400">
        {links.map((link) => (
          <li key={link.to}>
            <Link className="transition hover:text-white" to={link.to}>
              {t(link.labelKey)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-200">
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-2xl font-semibold text-white">
              {t("footer.tagline")}
            </h3>
            <p className="mt-1 text-gray-400">{t("footer.taglineDesc")}</p>
          </div>

          <div className="flex gap-3">
            <Link
              to="/listings"
              className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-gray-900! transition hover:bg-gray-100"
            >
              {t("footer.browseListings")}
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
            >
              {t("footer.contactUs")}
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <Link to="/" className="inline-flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
              <span className="font-bold text-white">B</span>
            </div>
            <span className="text-lg font-semibold text-white">BigCity</span>
          </Link>

          <p className="mt-4 leading-relaxed text-gray-400">
            {t("footer.description")}
          </p>

          <div className="mt-5 flex items-center gap-3">
            <a
              href="https://www.instagram.com/bigcitycompany?igsh=MXR1YXVzNW96MHl6Mw=="
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:border-white/20 hover:bg-white/10"
            >
              <span className="text-sm">IG</span>
            </a>
          </div>
        </div>

        <FooterLinks title={t("footer.explore")} links={footerExploreLinks} />
        <FooterLinks title={t("footer.support")} links={footerSupportLinks} />

        <div className="md:col-span-4">
          <h4 className="font-semibold text-white">{t("footer.newsletter")}</h4>
          <p className="mt-4 text-sm text-gray-400">
            {t("footer.newsletterDesc")}
          </p>

          <form
            className="mt-4 flex flex-col gap-3 sm:flex-row"
            onSubmit={(event) => event.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder={t("footer.emailPlaceholder")}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-white/25"
            />
            <button
              type="submit"
              className="rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-gray-950 transition hover:bg-emerald-400"
            >
              {t("footer.subscribe")}
            </button>
          </form>

          <div className="mt-6 space-y-2 text-sm text-gray-400">
            <p>
              <span className="text-gray-300">{t("footer.emailLabel")}</span>{" "}
              <a
                className="transition hover:text-white"
                href="mailto:hello@bigcity.com"
              >
                hello@bigcity.com
              </a>
            </p>
            <p>
              <span className="text-gray-300">{t("footer.phoneLabel")}</span>{" "}
              <a
                className="transition hover:text-white"
                href="tel:+18001234567"
              >
                +1 (800) 123-4567
              </a>
            </p>
            <p>
              <span className="text-gray-300">{t("footer.locationLabel")}</span>{" "}
              Santo Domingo, DR
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>{t("footer.copyright", { year })}</p>
          <div className="flex gap-5">
            {footerSupportLinks.map((link) => (
              <Link
                key={`bottom-${link.to}`}
                to={link.to}
                className="transition hover:text-white"
              >
                {t(link.labelKey)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

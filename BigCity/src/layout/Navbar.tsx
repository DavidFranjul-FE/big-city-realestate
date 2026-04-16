import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { primaryNavigation } from "../constants/navigation";
import { useDisclosure } from "../hooks/useDisclosure";
import { LanguageSwitcher } from "../components/shared/LanguageSwitcher";

export default function Navbar() {
  const { pathname } = useLocation();
  const { isOpen, toggle, close } = useDisclosure();
  const { t } = useTranslation();
  const isHomePage = pathname === "/";

  const navClassName = isHomePage
    ? "bg-gradient-to-b from-black/70 to-transparent"
    : "bg-white shadow-sm border-b border-gray-100";

  const linkClassName = isHomePage
    ? "text-white! hover:text-blue-300 transition"
    : "text-gray-800 hover:text-blue-600 transition";

  const logoSpanClassName = isHomePage ? "text-blue-400" : "text-blue-600";

  const menuButtonClassName = isHomePage ? "text-white" : "text-gray-800";

  return (
    <nav
      className={`absolute left-0 top-0 z-20 w-full px-6 py-5 font-bold md:px-10 ${navClassName}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link
          className={`text-2xl font-bold drop-shadow-lg ${linkClassName}`}
          to="/"
          onClick={close}
        >
          Big<span className={logoSpanClassName}>City</span>
        </Link>

        <ul className="hidden gap-8 md:flex">
          {primaryNavigation.map((item) => (
            <li key={item.to}>
              <Link to={item.to} className={linkClassName}>
                {t(item.labelKey)}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher isHomePage={isHomePage} />
        </div>

        <button
          type="button"
          className={`text-3xl md:hidden ${menuButtonClassName}`}
          onClick={toggle}
          aria-expanded={String(isOpen) as "true" | "false"}
          aria-label={t("nav.toggleMenu")}
        >
          ☰
        </button>
      </div>

      {isOpen ? (
        <div className="mx-auto mt-4 max-w-7xl rounded-2xl bg-white/95 p-4 shadow-lg backdrop-blur md:hidden">
          <ul className="space-y-3">
            {primaryNavigation.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="block rounded-xl px-3 py-2 text-gray-800 transition hover:bg-blue-50"
                  onClick={close}
                >
                  {t(item.labelKey)}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-3 border-t border-gray-100 pt-3">
            <LanguageSwitcher isHomePage={false} />
          </div>
        </div>
      ) : null}
    </nav>
  );
}

import { useTranslation } from "react-i18next";

interface LanguageSwitcherProps {
  isHomePage: boolean;
}

export function LanguageSwitcher({ isHomePage }: LanguageSwitcherProps) {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const toggle = () => {
    i18n.changeLanguage(currentLang === "en" ? "es" : "en");
  };

  const buttonClassName = isHomePage
    ? "text-white! border-white/40 hover:border-white/80 hover:bg-white/10"
    : "text-gray-800 border-gray-200 hover:border-gray-400 hover:bg-gray-50";

  return (
    <button
      type="button"
      onClick={toggle}
      className={`rounded-lg border px-2.5 py-1 text-xs font-bold tracking-wider transition ${buttonClassName}`}
      aria-label="Switch language"
    >
      {currentLang === "en" ? "ES" : "EN"}
    </button>
  );
}

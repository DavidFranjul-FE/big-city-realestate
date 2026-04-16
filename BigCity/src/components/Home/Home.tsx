import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      className="relative h-screen w-full bg-cover bg-center bg-no-repeat bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=60')]"
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 md:px-12 lg:px-20">
        <div className="max-w-2xl text-left">
          <h1 className="text-4xl font-bold leading-tight text-white drop-shadow-lg md:text-6xl">
            {t("home.heading1")}
            <br /> {t("home.heading2")}
          </h1>

          <p className="mt-6 text-lg text-gray-200 md:text-xl">
            {t("home.description")}
          </p>

          <Link
            to="/listings"
            className="mt-8 inline-flex rounded-full bg-blue-600 px-8 py-3 text-lg font-semibold text-white shadow-lg transition hover:bg-blue-800"
          >
            {t("home.viewProjects")}
          </Link>
        </div>
      </div>
    </section>
  );
}

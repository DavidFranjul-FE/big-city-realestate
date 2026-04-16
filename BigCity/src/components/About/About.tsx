import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { companyStatValues, teamMembers } from "../../constants/about";
import { SurfaceCard } from "../shared/SurfaceCard";
import { Stat } from "./Stat";
import { TeamCard } from "./TeamCard";
import { ValueCard } from "./ValueCard";

export default function About() {
  const { t } = useTranslation();

  const stats = t("about.stats", { returnObjects: true }) as Array<{
    label: string;
  }>;
  const values = t("about.values", { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;
  const teamRoles = t("about.teamRoles", { returnObjects: true }) as Array<{
    role: string;
  }>;

  return (
    <div className="mx-auto max-w-6xl px-6 pt-28 pb-12">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
          {t("about.title")}
        </h1>
        <p className="mt-3 text-base leading-relaxed text-gray-600">
          {t("about.description")}
        </p>
      </div>

      <section className="mt-10 grid gap-8 md:grid-cols-2">
        <SurfaceCard className="p-7">
          <h2 className="text-xl font-bold text-gray-900">
            {t("about.mission")}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600">
            {t("about.missionText")}
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {stats.map((stat, i) => (
              <Stat
                key={stat.label}
                label={stat.label}
                value={companyStatValues[i]}
              />
            ))}
          </div>
        </SurfaceCard>

        <SurfaceCard className="overflow-hidden">
          <div className="relative h-56 w-full md:h-full">
            <img
              src="https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1400&q=80"
              alt="Modern home"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <p className="text-sm font-semibold text-white/90">
                {t("about.imageCaption1")}
              </p>
              <p className="mt-1 text-xs text-white/80">
                {t("about.imageCaption2")}
              </p>
            </div>
          </div>
        </SurfaceCard>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-extrabold text-gray-900">
          {t("about.valuesTitle")}
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-600">
          {t("about.valuesDesc")}
        </p>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {values.map((value) => (
            <ValueCard
              key={value.title}
              title={value.title}
              desc={value.description}
            />
          ))}
        </div>
      </section>

      <section className="mt-14">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900">
              {t("about.teamTitle")}
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-600">
              {t("about.teamDesc")}
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex w-fit items-center justify-center rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-800 shadow-sm hover:bg-gray-50"
          >
            {t("about.contactUs")}
          </Link>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {teamMembers.map((member, i) => (
            <TeamCard
              key={member.name}
              name={member.name}
              role={teamRoles[i]?.role ?? ""}
            />
          ))}
        </div>
      </section>

      <SurfaceCard className="mt-14 overflow-hidden">
        <div className="flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-xl font-extrabold text-gray-900">
              {t("about.ctaTitle")}
            </h3>
            <p className="mt-2 text-sm text-gray-600">{t("about.ctaDesc")}</p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              to="/listings"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
            >
              {t("about.browseListings")}
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-800 shadow-sm hover:bg-gray-50"
            >
              {t("about.talkToUs")}
            </Link>
          </div>
        </div>
      </SurfaceCard>
    </div>
  );
}

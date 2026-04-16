import { useTranslation } from "react-i18next";
import { contactInfoValues } from "../../constants/contact";
import { Input, Textarea } from "../shared/Input";
import { SurfaceCard } from "../shared/SurfaceCard";
import { FAQ } from "./FAQ";
import { Field } from "./Field";
import { InfoRow } from "./InfoRow";

export default function Contact() {
  const { t } = useTranslation();

  const contactInfo = t("contact.contactInfo", {
    returnObjects: true,
  }) as Array<{ title: string; hint: string }>;
  const faqs = t("contact.faqs", { returnObjects: true }) as Array<{
    question: string;
    answer: string;
  }>;

  return (
    <div className="mx-auto max-w-6xl px-6 pt-28 pb-12">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
          {t("contact.title")}
        </h1>
        <p className="mt-3 text-base leading-relaxed text-gray-600">
          {t("contact.description")}
        </p>
      </div>

      <section className="mt-10 grid gap-8 md:grid-cols-2">
        <SurfaceCard className="p-7">
          <h2 className="text-xl font-bold text-gray-900">
            {t("contact.sendMessage")}
          </h2>
          {/* <p className="mt-2 text-sm text-gray-600">{t("contact.replyTime")}</p> */}

          <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label={t("contact.firstName")}>
                <Input type="text" placeholder="John" />
              </Field>

              <Field label={t("contact.lastName")}>
                <Input type="text" placeholder="Doe" />
              </Field>
            </div>

            <Field label={t("contact.email")}>
              <Input type="email" placeholder="you@email.com" />
            </Field>

            <Field label={t("contact.phone")}>
              <Input type="tel" placeholder="+1 (809) 000-0000" />
            </Field>

            <Field label={t("contact.helpQuestion")}>
              <Textarea rows={5} placeholder={t("contact.helpPlaceholder")} />
            </Field>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
            >
              {t("contact.sendButton")}
            </button>

            <p className="text-center text-xs text-gray-500">
              {t("contact.legalText")}
            </p>
          </form>
        </SurfaceCard>

        <div className="space-y-6">
          <SurfaceCard className="p-7">
            <h2 className="text-xl font-bold text-gray-900">
              {t("contact.reachUs")}
            </h2>

            <div className="mt-5 space-y-4">
              {contactInfo.map((row, i) => (
                <InfoRow
                  key={row.title}
                  title={row.title}
                  value={contactInfoValues[i].value}
                  hint={row.hint}
                />
              ))}
            </div>
          </SurfaceCard>

          {/* <SurfaceCard className="overflow-hidden">
            <div className="grid h-64 place-items-center bg-gray-50">
              <div className="px-6 text-center">
                <div className="text-sm font-semibold text-gray-800">
                  {t("contact.mapPlaceholder")}
                </div>
                <div className="mt-1 text-xs text-gray-600">
                  {t("contact.mapHelperText")}
                </div>
              </div>
            </div>
          </SurfaceCard> */}

          <SurfaceCard className="p-7">
            <h3 className="text-base font-extrabold text-gray-900">
              {t("contact.quickQuestions")}
            </h3>

            <div className="mt-4 space-y-3">
              {faqs.map((faq) => (
                <FAQ key={faq.question} q={faq.question} a={faq.answer} />
              ))}
            </div>
          </SurfaceCard>
        </div>
      </section>
    </div>
  );
}

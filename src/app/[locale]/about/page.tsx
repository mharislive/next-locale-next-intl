import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("about");
  return <h1 className="text-3xl">{t("title")}</h1>;
}

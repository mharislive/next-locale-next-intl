import { useTranslations } from "next-intl";

export default function Index() {
  const t = useTranslations("home");
  return <h1 className="text-3xl">{t("title")}</h1>;
}

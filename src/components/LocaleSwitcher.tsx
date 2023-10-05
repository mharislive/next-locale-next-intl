import { useLocale } from "next-intl";
import Link from "next-intl/link";

const LocaleSwitcher = () => {
  const locale = useLocale();
  let langCode = "de";
  let language = "German";

  if (locale === "de") {
    langCode = "en";
    language = "English";
  }

  return (
    <Link locale={langCode} href="/">
      Switch to {language}
    </Link>
  );
};
export default LocaleSwitcher;

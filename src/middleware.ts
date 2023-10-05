import createMiddleware from "next-intl/middleware";
import { locales } from "./utils/constant";

export default createMiddleware({
  locales,
  defaultLocale: "en",
  localeDetection: false,
});

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};

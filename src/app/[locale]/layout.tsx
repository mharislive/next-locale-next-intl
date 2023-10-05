import "../../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import Navigation from "@/components/Navigation";
import { notFound } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <div className="max-w-3xl mx-auto my-5 p-3 border-2">
          <NextIntlClientProvider messages={messages} locale={locale}>
            <Navigation />
            {children}
          </NextIntlClientProvider>
        </div>
      </body>
    </html>
  );
}
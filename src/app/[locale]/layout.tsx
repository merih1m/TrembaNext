import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import React from "react";

import { Locale, routing } from "@/i18n/routing";
import { SessionProvider } from "next-auth/react";
import { auth } from "../../../auth";
import Header from "../../components/Header/page";

import "./globals.css";

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();
  const session = await auth();
  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          <NextIntlClientProvider messages={messages}>
            <Header />
            {children}
          </NextIntlClientProvider>
        </SessionProvider>
      </body>
    </html>
  );
}

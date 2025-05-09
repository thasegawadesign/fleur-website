import Providers from "@/components/providers/providers";
import "@/styles/reset.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import clsx from "clsx";
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";

export const metadata: Metadata = {
  title: "架空マカロン専門店 Fleur(フルール)",
  description: "架空マカロン専門店 Fleur(フルール)",
};

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
});

const isProduction = process.env.NODE_ENV === "production";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={clsx(notoSansJP.className)}>
        <Providers>{children}</Providers>
        {isProduction && <GoogleAnalytics gaId={`${process.env.GAID}`} />}
        {isProduction && <VercelAnalytics />}
      </body>
    </html>
  );
}

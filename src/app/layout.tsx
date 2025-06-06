import { body } from "@/app/page.css";
import Providers from "@/components/providers/providers";
import "@/styles/reset.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import clsx from "clsx";
import type { Metadata } from "next";
import "yakuhanjp";

export const metadata: Metadata = {
  title: "架空マカロン専門店『フルール』",
  description: "架空マカロン専門店『フルール』の公式サイトです。",
};

const isProduction = process.env.NODE_ENV === "production";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={clsx(body)}>
        <Providers>{children}</Providers>
        {isProduction && <GoogleAnalytics gaId={`${process.env.GAID}`} />}
        {isProduction && <VercelAnalytics />}
      </body>
    </html>
  );
}

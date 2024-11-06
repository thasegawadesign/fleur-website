import Providers from "@/components/providers/providers";
import "@/styles/reset.css";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={clsx(notoSansJP.className)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

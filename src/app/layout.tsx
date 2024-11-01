import "@csstools/normalize.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "架空マカロン専門店 Fleur(フルール)",
  description: "架空マカロン専門店 Fleur(フルール)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}

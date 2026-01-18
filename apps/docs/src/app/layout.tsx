import { RootProvider } from "fumadocs-ui/provider";
import type { ReactNode } from "react";
import "./globals.css";

// メタデータ
export const metadata = {
  title: "Neumo UI",
  description: "Neumorphism UI Component Library for React/Next.js",
};

// ルートレイアウト
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}

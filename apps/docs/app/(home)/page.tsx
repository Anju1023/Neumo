import {
  HeroSection,
  FeaturesSection,
  ShowcaseSection,
  InstallSection,
  FooterSection,
} from "@/components/landing";

/**
 * HomePage
 *
 * Nuformのランディングページ
 * 各セクションを組み合わせて表示
 */
export default function HomePage() {
  return (
    <main className="min-h-screen bg-nuform-bg">
      {/* ヒーローセクション - キャッチコピーとCTA */}
      <HeroSection />

      {/* 特徴セクション - Nuformの魅力 */}
      <FeaturesSection />

      {/* ショーケースセクション - コンポーネントデモ */}
      <ShowcaseSection />

      {/* インストールセクション - クイックスタート */}
      <InstallSection />

      {/* フッター */}
      <FooterSection />
    </main>
  );
}

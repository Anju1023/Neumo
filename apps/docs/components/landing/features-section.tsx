"use client";

import { Accessibility, Palette, Zap, Code2 } from "lucide-react";
import { Card } from "neumo-ui";

/**
 * 特徴データ
 */
const features = [
  {
    icon: Palette,
    title: "ニューモフィズム2.0",
    description:
      "高コントラストでアクセシブルなデザイン。従来のニューモフィズムの問題点を解決した、実用的で美しいスタイル。",
  },
  {
    icon: Accessibility,
    title: "アクセシビリティ",
    description:
      "WCAG準拠のアクセシブルなコンポーネント。キーボードナビゲーション、スクリーンリーダー対応。",
  },
  {
    icon: Zap,
    title: "React 19対応",
    description:
      "最新のReact機能に完全対応。Server Components、Suspenseなどモダンな開発体験を提供。",
  },
  {
    icon: Code2,
    title: "カスタマイズ可能",
    description:
      "CSS変数でテーマを簡単にカスタマイズ。Tailwind CSSとの親和性も高く、自由度の高いスタイリング。",
  },
];

/**
 * FeaturesSection
 *
 * Neumo UIの特徴を紹介するセクション
 */
export function FeaturesSection() {
  return (
    <section className="py-24 bg-neumo-bg relative z-10">
      <div className="container mx-auto px-4">
        {/* セクションタイトル */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-neumo-text mb-6">
            Why Neumo UI?
          </h2>
          <p className="text-xl text-neumo-text-muted max-w-2xl mx-auto leading-relaxed">
            モダンなUIライブラリに求められるすべてを、
            <br className="hidden md:block" />
            ニューモフィズムデザインで実現
          </p>
        </div>

        {/* 特徴カード */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              variant="elevated"
              padding="lg"
              className="text-center group hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col items-center"
            >
              {/* アイコン */}
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-neumo-bg neumo-elevation-inset mb-6 text-neumo-primary group-hover:text-neumo-primary-hover transition-colors">
                <feature.icon size={32} />
              </div>

              {/* タイトル */}
              <h3 className="text-xl font-bold text-neumo-text mb-4">
                {feature.title}
              </h3>

              {/* 説明 */}
              <p className="text-base text-neumo-text-muted leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
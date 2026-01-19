"use client";

import Link from "next/link";
import { ArrowRight, Github } from "lucide-react";
import { Button, Card, Badge } from "neumo-ui";

/**
 * HeroSection
 *
 * ランディングページのメインビジュアルセクション
 * キャッチコピー、サブコピー、CTAボタンを表示
 */
export function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* 背景アニメーション (Animated Blobs) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-neumo-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-neumo-blob" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-neumo-info/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-neumo-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-neumo-success/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-neumo-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* バッジ */}
          <div className="flex justify-center mb-8">
            <Badge variant="default" className="text-neumo-primary px-4 py-1.5 rounded-full border border-neumo-primary/10 bg-white/50 backdrop-blur-sm">
              <span className="font-bold">v1.0.0</span>
              <span className="mx-2 text-neumo-text-muted/50">•</span>
              <span>React 19 Ready</span>
            </Badge>
          </div>

          {/* メインタイトル */}
          <h1 className="text-5xl md:text-7xl font-bold text-neumo-text mb-8 leading-tight tracking-tight">
            Beautiful{" "}
            <span className="text-neumo-primary drop-shadow-sm relative">
              Neumorphic
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-neumo-primary/20 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
            <br />
            UI Components
          </h1>

          {/* サブコピー */}
          <p className="text-xl md:text-2xl text-neumo-text-muted mb-12 max-w-2xl mx-auto leading-relaxed">
            ニューモフィズム2.0デザインに基づいたモダンなReact UIコンポーネントライブラリ。
            <br className="hidden md:block" />
            アクセシブルで、カスタマイズ可能で、美しい。
          </p>

          {/* CTAボタン */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
            <Link href="/docs">
              <Button variant="primary" size="lg" className="px-8 text-lg h-14 shadow-lg shadow-neumo-primary/20 hover:shadow-neumo-primary/40 transition-shadow" rightIcon={<ArrowRight size={20} />}>
                Get Started
              </Button>
            </Link>
            <a
              href="https://github.com/Anju1023/Neumo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="default" size="lg" className="px-8 text-lg h-14" leftIcon={<Github size={20} />}>
                GitHub
              </Button>
            </a>
          </div>

          {/* プレビューカード */}
          <div className="relative mx-auto max-w-2xl perspective-1000">
            <Card variant="elevated" padding="lg" className="transform rotate-x-12 hover:rotate-0 transition-transform duration-500 ease-out bg-white/60 backdrop-blur-md border border-white/40">
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-neumo-text-muted/10">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-neumo-error shadow-sm" />
                  <div className="w-3 h-3 rounded-full bg-neumo-warning shadow-sm" />
                  <div className="w-3 h-3 rounded-full bg-neumo-success shadow-sm" />
                </div>
                <div className="text-xs text-neumo-text-muted ml-2 font-mono">App.tsx</div>
              </div>
              <pre className="text-left text-sm md:text-base font-mono leading-relaxed overflow-x-auto p-2">
                <code className="text-neumo-text">
{`import { Button } from 'neumo-ui';

export default function App() {
  return (
    <Button variant="primary">
      Click me
    </Button>
  );
}`}
                </code>
              </pre>
            </Card>
            
            {/* カード背面の光 */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-neumo-primary/10 blur-3xl rounded-full pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

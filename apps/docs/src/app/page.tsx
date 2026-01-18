import Link from "next/link";

// トップページ
export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-[var(--neumo-bg)]">
      <div className="text-center">
        {/* タイトル */}
        <h1 className="text-5xl font-bold text-[var(--neumo-text)] mb-4">
          Neumo UI
        </h1>
        
        {/* サブタイトル */}
        <p className="text-xl text-[var(--neumo-text-muted)] mb-8">
          ニューモフィズムデザインのUIコンポーネントライブラリ
        </p>
        
        {/* CTAボタン */}
        <Link
          href="/docs"
          className="
            inline-flex items-center justify-center
            px-6 py-3
            text-lg font-medium
            text-white
            bg-[var(--neumo-primary)]
            rounded-xl
            shadow-[4px_4px_8px_rgba(108,92,231,0.4),-4px_-4px_8px_rgba(162,155,254,0.4)]
            hover:shadow-[6px_6px_12px_rgba(108,92,231,0.5),-6px_-6px_12px_rgba(162,155,254,0.5)]
            transition-all duration-200
          "
        >
          ドキュメントを見る
        </Link>
      </div>
    </main>
  );
}

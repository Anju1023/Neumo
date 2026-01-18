"use client";

import { useState } from "react";
import { Check, Copy, Terminal } from "lucide-react";
import { Card } from "neumo-ui";

/**
 * パッケージマネージャーの種類
 */
type PackageManager = "npm" | "pnpm" | "yarn";

/**
 * インストールコマンド
 */
const installCommands: Record<PackageManager, string> = {
  npm: "npm install neumo-ui",
  pnpm: "pnpm add neumo-ui",
  yarn: "yarn add neumo-ui",
};

/**
 * InstallSection
 *
 * インストール方法を説明するセクション
 */
export function InstallSection() {
  // 選択中のパッケージマネージャー
  const [selectedPm, setSelectedPm] = useState<PackageManager>("npm");
  // コピー完了状態
  const [copied, setCopied] = useState(false);

  /**
   * コマンドをクリップボードにコピー
   */
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(installCommands[selectedPm]);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <section className="py-24 bg-neumo-bg relative z-10">
      <div className="container mx-auto px-4">
        {/* セクションタイトル */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-neumo-text mb-6">
            Quick Start
          </h2>
          <p className="text-xl text-neumo-text-muted">
            お好みのパッケージマネージャーでインストール
          </p>
        </div>

        {/* インストールカード */}
        <div className="max-w-2xl mx-auto">
          <Card variant="elevated" padding="none" className="overflow-hidden">
            {/* パッケージマネージャー選択タブ */}
            <div className="flex border-b border-neumo-text-muted/10 bg-neumo-bg">
              {(["npm", "pnpm", "yarn"] as const).map((pm) => (
                <button
                  key={pm}
                  onClick={() => setSelectedPm(pm)}
                  className={`
                    flex-1 px-6 py-4 text-sm font-bold transition-all
                    ${
                      selectedPm === pm
                        ? "text-neumo-primary bg-neumo-primary/5 shadow-[inset_0_-2px_0_0_var(--color-neumo-primary)]"
                        : "text-neumo-text-muted hover:text-neumo-text hover:bg-neumo-text-muted/5"
                    }
                  `}
                >
                  {pm}
                </button>
              ))}
            </div>

            {/* コマンド表示エリア */}
            <div className="relative p-8 bg-neumo-bg">
              <div className="relative rounded-xl bg-neumo-bg neumo-elevation-inset p-6 flex items-center justify-between group">
                <div className="flex items-center gap-4 overflow-x-auto">
                    <Terminal size={20} className="text-neumo-text-muted shrink-0" />
                    <pre className="text-neumo-text font-mono text-base whitespace-nowrap">
                        {installCommands[selectedPm]}
                    </pre>
                </div>

                {/* コピーボタン */}
                <button
                    onClick={handleCopy}
                    className="ml-4 p-2 rounded-lg text-neumo-text-muted hover:text-neumo-primary hover:bg-neumo-primary/10 transition-colors shrink-0"
                    aria-label={copied ? "Copied!" : "Copy command"}
                >
                    {copied ? <Check size={20} /> : <Copy size={20} />}
                </button>
              </div>
            </div>
          </Card>

          {/* 使用例 */}
          <div className="mt-8 text-center">
            <p className="text-neumo-text-muted mb-4 font-medium">
              Then import the styles in your layout:
            </p>
            <div className="inline-block px-6 py-3 rounded-lg bg-neumo-bg neumo-elevation-inset">
                <code className="text-neumo-text font-mono text-sm">
                import 'neumo-ui/styles.css';
                </code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InstallSection;
"use client";

import { useState, type ReactNode } from "react";
import { Check, Copy, Code, Eye } from "lucide-react";
import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock";

/**
 * ComponentPreviewのProps
 */
interface ComponentPreviewProps {
  /** プレビューに表示するコンポーネント */
  children: ReactNode;
  /** 表示するコード（文字列） */
  code?: string;
  /** タイトル（オプション） */
  title?: string;
  /** 背景色を暗くするか */
  darkBackground?: boolean;
  /** クラス名 */
  className?: string;
}

/**
 * ComponentPreview
 *
 * コンポーネントのプレビューとコードを並べて表示するコンポーネント
 * ドキュメントサイトでライブデモを表示するために使用
 *
 * @example
 * ```tsx
 * <ComponentPreview code={`<Button>Click me</Button>`}>
 *   <Button>Click me</Button>
 * </ComponentPreview>
 * ```
 */
export function ComponentPreview({
  children,
  code,
  title,
  darkBackground = false,
  className = "",
}: ComponentPreviewProps) {
  // タブの状態（"preview" | "code"）
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  // コピー完了状態
  const [copied, setCopied] = useState(false);

  /**
   * コードをクリップボードにコピー
   */
  const handleCopy = async () => {
    if (!code) return;
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  return (
    <div
      className={`
        border border-fd-border rounded-lg overflow-hidden my-4
        ${className}
      `}
    >
      {/* ヘッダー: タイトルとタブ */}
      <div className="flex items-center justify-between border-b border-fd-border bg-fd-muted/50 px-4 py-2">
        {/* タイトル（あれば） */}
        {title && (
          <span className="text-sm font-medium text-fd-foreground">
            {title}
          </span>
        )}

        {/* タブ切り替え */}
        <div className="flex items-center gap-1 ml-auto">
          {/* プレビュータブ */}
          <button
            onClick={() => setActiveTab("preview")}
            className={`
              inline-flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-md transition-colors
              ${
                activeTab === "preview"
                  ? "bg-fd-background text-fd-foreground shadow-sm"
                  : "text-fd-muted-foreground hover:text-fd-foreground"
              }
            `}
            aria-pressed={activeTab === "preview"}
          >
            <Eye size={14} />
            Preview
          </button>

          {/* コードタブ（codeがある場合のみ） */}
          {code && (
            <button
              onClick={() => setActiveTab("code")}
              className={`
                inline-flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-md transition-colors
                ${
                  activeTab === "code"
                    ? "bg-fd-background text-fd-foreground shadow-sm"
                    : "text-fd-muted-foreground hover:text-fd-foreground"
                }
              `}
              aria-pressed={activeTab === "code"}
            >
              <Code size={14} />
              Code
            </button>
          )}
        </div>
      </div>

      {/* コンテンツエリア */}
      <div className="relative">
        {/* プレビュー */}
        {activeTab === "preview" && (
          <div
            className={`
              p-6 flex items-center justify-center min-h-[120px]
              ${darkBackground ? "bg-fd-background-deep" : "bg-[#e0e5ec]"}
            `}
          >
            {children}
          </div>
        )}

        {/* コード */}
        {activeTab === "code" && code && (
          <div className="relative">
            {/* コピーボタン */}
            <button
              onClick={handleCopy}
              className="absolute top-3 right-3 p-2 rounded-md bg-fd-muted hover:bg-fd-muted/80 text-fd-muted-foreground hover:text-fd-foreground transition-colors z-10"
              aria-label={copied ? "Copied!" : "Copy code"}
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
            </button>

            {/* コードブロック（Fumadocsのシンタックスハイライト付き） */}
            <DynamicCodeBlock
              lang="tsx"
              code={code}
              codeblock={{
                allowCopy: false, // 独自のコピーボタンを使うため無効化
                className: "rounded-none border-0", // 親コンテナに角丸があるので内側は角丸なし
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * ComponentShowcase
 *
 * 複数のバリエーションを一覧表示するためのコンポーネント
 *
 * @example
 * ```tsx
 * <ComponentShowcase title="Button Variants">
 *   <Button variant="default">Default</Button>
 *   <Button variant="primary">Primary</Button>
 *   <Button variant="ghost">Ghost</Button>
 * </ComponentShowcase>
 * ```
 */
interface ComponentShowcaseProps {
  /** 表示するコンポーネント */
  children: ReactNode;
  /** タイトル */
  title?: string;
  /** 説明 */
  description?: string;
  /** クラス名 */
  className?: string;
}

export function ComponentShowcase({
  children,
  title,
  description,
  className = "",
}: ComponentShowcaseProps) {
  return (
    <div className={`my-6 ${className}`}>
      {/* タイトルと説明 */}
      {(title || description) && (
        <div className="mb-3">
          {title && (
            <h3 className="text-lg font-semibold text-fd-foreground">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-sm text-fd-muted-foreground mt-1">
              {description}
            </p>
          )}
        </div>
      )}

      {/* コンポーネント表示エリア */}
      <div
        className="
          p-6 rounded-lg border border-fd-border
          bg-[#e0e5ec]
          flex flex-wrap items-center gap-4
        "
      >
        {children}
      </div>
    </div>
  );
}

export default ComponentPreview;

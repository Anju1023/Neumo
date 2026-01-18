import { forwardRef, useId, useState } from "react";
import type { InputProps, InputSize } from "./Input.types";

/**
 * サイズごとのスタイル
 */
const sizeStyles: Record<InputSize, string> = {
  sm: `
    padding: var(--neumo-space-xs) var(--neumo-space-sm);
    font-size: var(--neumo-font-sm);
    border-radius: var(--neumo-radius-sm);
  `,
  md: `
    padding: var(--neumo-space-sm) var(--neumo-space-md);
    font-size: var(--neumo-font-md);
    border-radius: var(--neumo-radius-md);
  `,
  lg: `
    padding: var(--neumo-space-md) var(--neumo-space-lg);
    font-size: var(--neumo-font-lg);
    border-radius: var(--neumo-radius-lg);
  `,
};

/**
 * ベーススタイル（通常状態 - 凹み）
 */
const baseStyles = `
  width: 100%;
  background: var(--neumo-bg);
  color: var(--neumo-text);
  border: none;
  box-shadow: var(--neumo-elevation-inset-sm);
  transition: all var(--neumo-transition);
  outline: none;
`;

/**
 * フォーカススタイル
 */
const focusStyles = `
  box-shadow: var(--neumo-elevation-inset), var(--neumo-focus-ring);
`;

/**
 * エラースタイル
 */
const errorStyles = `
  box-shadow: var(--neumo-elevation-inset-sm), 0 0 0 2px var(--neumo-error);
`;

/**
 * 無効スタイル
 */
const disabledStyles = `
  opacity: 0.5;
  cursor: not-allowed;
`;

/**
 * ラッパースタイル
 */
const wrapperStyles = `
  display: flex;
  flex-direction: column;
  gap: var(--neumo-space-xs);
`;

/**
 * インプットコンテナスタイル
 */
const containerStyles = `
  position: relative;
  display: flex;
  align-items: center;
`;

/**
 * アイコンスタイル
 */
const iconStyles = `
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--neumo-text-muted);
  pointer-events: none;
`;

/**
 * ラベルスタイル
 */
const labelStyles = `
  font-size: var(--neumo-font-sm);
  font-weight: 500;
  color: var(--neumo-text);
`;

/**
 * ヘルパーテキストスタイル
 */
const helperStyles = `
  font-size: var(--neumo-font-xs);
  color: var(--neumo-text-muted);
`;

/**
 * エラーメッセージスタイル
 */
const errorMessageStyles = `
  font-size: var(--neumo-font-xs);
  color: var(--neumo-error);
`;

/**
 * Inputコンポーネント
 *
 * ニューモフィズム2.0デザインのインプットコンポーネント
 * 凹んだ（inset）デザインで、フォーカス時に深くなるエフェクト
 *
 * @example
 * ```tsx
 * <Input
 *   label="Email"
 *   type="email"
 *   placeholder="Enter your email"
 *   helperText="We'll never share your email"
 * />
 * ```
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = "text",
      size = "md",
      error = false,
      errorMessage,
      disabled = false,
      leftIcon,
      rightIcon,
      label,
      helperText,
      style,
      onFocus,
      onBlur,
      ...props
    },
    ref
  ) => {
    // フォーカス状態の管理
    const [isFocused, setIsFocused] = useState(false);

    // ユニークIDの生成（アクセシビリティ用）
    const generatedId = useId();
    const inputId = props.id || generatedId;
    const errorId = `${inputId}-error`;
    const helperId = `${inputId}-helper`;

    // インプットのパディング調整（アイコンがある場合）
    const paddingLeft = leftIcon ? "calc(var(--neumo-space-lg) + 8px)" : undefined;
    const paddingRight = rightIcon ? "calc(var(--neumo-space-lg) + 8px)" : undefined;

    // スタイルを結合
    const inputStyle: React.CSSProperties = {
      ...parseStyles(baseStyles),
      ...parseStyles(sizeStyles[size]),
      ...(isFocused && !error ? parseStyles(focusStyles) : {}),
      ...(error ? parseStyles(errorStyles) : {}),
      ...(disabled ? parseStyles(disabledStyles) : {}),
      paddingLeft,
      paddingRight,
      ...style,
    };

    return (
      <div style={parseStyles(wrapperStyles)}>
        {/* ラベル */}
        {label && (
          <label htmlFor={inputId} style={parseStyles(labelStyles)}>
            {label}
          </label>
        )}

        {/* インプットコンテナ */}
        <div style={parseStyles(containerStyles)}>
          {/* 左アイコン */}
          {leftIcon && (
            <span
              style={{
                ...parseStyles(iconStyles),
                left: "var(--neumo-space-sm)",
              }}
              aria-hidden="true"
            >
              {leftIcon}
            </span>
          )}

          {/* インプット */}
          <input
            ref={ref}
            id={inputId}
            type={type}
            disabled={disabled}
            aria-invalid={error}
            aria-describedby={
              error && errorMessage
                ? errorId
                : helperText
                  ? helperId
                  : undefined
            }
            style={inputStyle}
            onFocus={(e) => {
              setIsFocused(true);
              onFocus?.(e);
            }}
            onBlur={(e) => {
              setIsFocused(false);
              onBlur?.(e);
            }}
            {...props}
          />

          {/* 右アイコン */}
          {rightIcon && (
            <span
              style={{
                ...parseStyles(iconStyles),
                right: "var(--neumo-space-sm)",
              }}
              aria-hidden="true"
            >
              {rightIcon}
            </span>
          )}
        </div>

        {/* エラーメッセージ */}
        {error && errorMessage && (
          <span id={errorId} style={parseStyles(errorMessageStyles)} role="alert">
            {errorMessage}
          </span>
        )}

        {/* ヘルパーテキスト */}
        {!error && helperText && (
          <span id={helperId} style={parseStyles(helperStyles)}>
            {helperText}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

/**
 * CSS文字列をReact.CSSPropertiesオブジェクトに変換
 */
function parseStyles(cssString: string): React.CSSProperties {
  const styles: Record<string, string> = {};
  const declarations = cssString.split(";").filter((d) => d.trim());

  for (const declaration of declarations) {
    const [property, value] = declaration.split(":").map((s) => s.trim());
    if (property && value) {
      // CSS プロパティ名をキャメルケースに変換
      const camelCase = property.replace(/-([a-z])/g, (_, letter) =>
        letter.toUpperCase()
      );
      styles[camelCase] = value;
    }
  }

  return styles as React.CSSProperties;
}

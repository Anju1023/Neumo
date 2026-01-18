import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Badge } from "./Badge";

describe("Badge", () => {
  // 基本レンダリング
  it("renders children correctly", () => {
    render(<Badge>Badge text</Badge>);
    expect(screen.getByText("Badge text")).toBeInTheDocument();
  });

  // バリアントのテスト
  describe("variants", () => {
    it("renders default variant", () => {
      render(<Badge variant="default">Default</Badge>);
      expect(screen.getByText("Default")).toBeInTheDocument();
    });

    it("renders success variant", () => {
      render(<Badge variant="success">Success</Badge>);
      expect(screen.getByText("Success")).toBeInTheDocument();
    });

    it("renders warning variant", () => {
      render(<Badge variant="warning">Warning</Badge>);
      expect(screen.getByText("Warning")).toBeInTheDocument();
    });

    it("renders error variant", () => {
      render(<Badge variant="error">Error</Badge>);
      expect(screen.getByText("Error")).toBeInTheDocument();
    });

    it("renders info variant", () => {
      render(<Badge variant="info">Info</Badge>);
      expect(screen.getByText("Info")).toBeInTheDocument();
    });
  });

  // サイズのテスト
  describe("sizes", () => {
    it("renders small size", () => {
      render(<Badge size="sm">Small</Badge>);
      expect(screen.getByText("Small")).toBeInTheDocument();
    });

    it("renders medium size", () => {
      render(<Badge size="md">Medium</Badge>);
      expect(screen.getByText("Medium")).toBeInTheDocument();
    });
  });

  // カスタムスタイル
  it("applies custom styles", () => {
    render(<Badge style={{ backgroundColor: "purple" }} data-testid="styled-badge">Styled</Badge>);
    const badge = screen.getByTestId("styled-badge");
    // スタイルが適用されていることを確認
    expect(badge.style.backgroundColor).toBe("purple");
  });

  // カスタムクラス
  it("applies custom className", () => {
    render(<Badge className="custom-badge">Custom</Badge>);
    expect(screen.getByText("Custom")).toHaveClass("custom-badge");
  });
});

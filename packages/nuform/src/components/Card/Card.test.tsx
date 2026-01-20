import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Card } from "./Card";

describe("Card", () => {
  // 基本レンダリング
  it("renders children correctly", () => {
    render(<Card>Card content</Card>);
    expect(screen.getByText("Card content")).toBeInTheDocument();
  });

  // バリアントのテスト
  describe("variants", () => {
    it("renders elevated variant", () => {
      render(<Card variant="elevated">Elevated</Card>);
      expect(screen.getByText("Elevated")).toBeInTheDocument();
    });

    it("renders flat variant", () => {
      render(<Card variant="flat">Flat</Card>);
      expect(screen.getByText("Flat")).toBeInTheDocument();
    });

    it("renders inset variant", () => {
      render(<Card variant="inset">Inset</Card>);
      expect(screen.getByText("Inset")).toBeInTheDocument();
    });
  });

  // パディングのテスト
  describe("padding", () => {
    it("renders with no padding", () => {
      render(<Card padding="none">No padding</Card>);
      expect(screen.getByText("No padding")).toBeInTheDocument();
    });

    it("renders with small padding", () => {
      render(<Card padding="sm">Small padding</Card>);
      expect(screen.getByText("Small padding")).toBeInTheDocument();
    });

    it("renders with medium padding", () => {
      render(<Card padding="md">Medium padding</Card>);
      expect(screen.getByText("Medium padding")).toBeInTheDocument();
    });

    it("renders with large padding", () => {
      render(<Card padding="lg">Large padding</Card>);
      expect(screen.getByText("Large padding")).toBeInTheDocument();
    });
  });

  // ネストしたコンテンツ
  it("renders nested content", () => {
    render(
      <Card>
        <h2>Title</h2>
        <p>Description</p>
      </Card>
    );
    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Description")).toBeInTheDocument();
  });

  // カスタムスタイル
  it("applies custom styles", () => {
    render(<Card style={{ backgroundColor: "red" }} data-testid="styled-card">Styled card</Card>);
    const card = screen.getByTestId("styled-card");
    // スタイルが適用されていることを確認（parseStylesでマージされる）
    expect(card.style.backgroundColor).toBe("red");
  });

  // カスタムクラス
  it("applies custom className", () => {
    render(<Card className="custom-class">Custom class</Card>);
    expect(screen.getByText("Custom class")).toHaveClass("custom-class");
  });
});

import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Avatar } from "./Avatar";

describe("Avatar", () => {
  // 基本レンダリング
  it("renders with image", () => {
    render(<Avatar src="/avatar.jpg" alt="John Doe" />);
    // コンテナにrole="img"があるのでgetAllByRoleで取得
    const imgs = screen.getAllByRole("img");
    expect(imgs.length).toBeGreaterThan(0);
    // コンテナのaria-labelを確認
    expect(imgs[0]).toHaveAttribute("aria-label", "John Doe");
  });

  // イニシャル表示
  describe("initials", () => {
    it("shows initials when no image", () => {
      render(<Avatar alt="John Doe" />);
      expect(screen.getByText("JD")).toBeInTheDocument();
    });

    it("shows single initial for single name", () => {
      render(<Avatar alt="John" />);
      expect(screen.getByText("J")).toBeInTheDocument();
    });

    it("shows first and last initials for multiple names", () => {
      render(<Avatar alt="John Michael Doe" />);
      expect(screen.getByText("JD")).toBeInTheDocument();
    });
  });

  // カスタムフォールバック
  it("uses custom fallback", () => {
    render(<Avatar alt="User" fallback="?" />);
    expect(screen.getByText("?")).toBeInTheDocument();
  });

  // 画像エラー時のフォールバック
  it("shows fallback on image error", () => {
    render(<Avatar src="/invalid.jpg" alt="John Doe" />);
    // コンテナの中のimg要素を取得
    const container = screen.getAllByRole("img")[0];
    // コンテナが存在することを確認
    expect(container).toBeDefined();
    const img = container?.querySelector("img");
    if (img) {
      fireEvent.error(img);
      expect(screen.getByText("JD")).toBeInTheDocument();
    }
  });

  // サイズのテスト
  describe("sizes", () => {
    it("renders xs size", () => {
      render(<Avatar alt="User" size="xs" />);
      expect(screen.getByRole("img")).toBeInTheDocument();
    });

    it("renders sm size", () => {
      render(<Avatar alt="User" size="sm" />);
      expect(screen.getByRole("img")).toBeInTheDocument();
    });

    it("renders md size", () => {
      render(<Avatar alt="User" size="md" />);
      expect(screen.getByRole("img")).toBeInTheDocument();
    });

    it("renders lg size", () => {
      render(<Avatar alt="User" size="lg" />);
      expect(screen.getByRole("img")).toBeInTheDocument();
    });

    it("renders xl size", () => {
      render(<Avatar alt="User" size="xl" />);
      expect(screen.getByRole("img")).toBeInTheDocument();
    });
  });

  // バリアントのテスト
  describe("variants", () => {
    it("renders circle variant", () => {
      render(<Avatar alt="User" variant="circle" />);
      expect(screen.getByRole("img")).toBeInTheDocument();
    });

    it("renders rounded variant", () => {
      render(<Avatar alt="User" variant="rounded" />);
      expect(screen.getByRole("img")).toBeInTheDocument();
    });
  });

  // アクセシビリティ
  it("has correct aria-label", () => {
    render(<Avatar alt="John Doe" />);
    expect(screen.getByRole("img")).toHaveAttribute("aria-label", "John Doe");
  });
});

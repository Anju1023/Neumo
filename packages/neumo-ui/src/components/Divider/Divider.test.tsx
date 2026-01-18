import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Divider } from "./Divider";

describe("Divider", () => {
  // 基本レンダリング
  it("renders separator element", () => {
    render(<Divider />);
    expect(screen.getByRole("separator")).toBeInTheDocument();
  });

  // 方向のテスト
  describe("orientations", () => {
    it("renders horizontal orientation by default", () => {
      render(<Divider />);
      expect(screen.getByRole("separator")).toHaveAttribute(
        "aria-orientation",
        "horizontal"
      );
    });

    it("renders horizontal orientation explicitly", () => {
      render(<Divider orientation="horizontal" />);
      expect(screen.getByRole("separator")).toHaveAttribute(
        "aria-orientation",
        "horizontal"
      );
    });

    it("renders vertical orientation", () => {
      render(<Divider orientation="vertical" />);
      expect(screen.getByRole("separator")).toHaveAttribute(
        "aria-orientation",
        "vertical"
      );
    });
  });

  // カスタムスタイル
  it("applies custom styles", () => {
    render(<Divider style={{ margin: "2rem 0" }} />);
    expect(screen.getByRole("separator")).toHaveStyle({ margin: "2rem 0" });
  });

  // カスタムクラス
  it("applies custom className", () => {
    render(<Divider className="custom-divider" />);
    expect(screen.getByRole("separator")).toHaveClass("custom-divider");
  });

  // アクセシビリティ
  it("has correct role", () => {
    render(<Divider />);
    expect(screen.getByRole("separator")).toBeInTheDocument();
  });
});

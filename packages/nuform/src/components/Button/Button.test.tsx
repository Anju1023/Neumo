import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  // 基本レンダリング
  it("renders children correctly", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole("button")).toHaveTextContent("Click me");
  });

  // バリアントのテスト
  describe("variants", () => {
    it("renders default variant", () => {
      render(<Button variant="default">Default</Button>);
      const button = screen.getByRole("button");
      expect(button).toBeInTheDocument();
    });

    it("renders primary variant", () => {
      render(<Button variant="primary">Primary</Button>);
      const button = screen.getByRole("button");
      expect(button).toBeInTheDocument();
    });

    it("renders ghost variant", () => {
      render(<Button variant="ghost">Ghost</Button>);
      const button = screen.getByRole("button");
      expect(button).toBeInTheDocument();
    });
  });

  // サイズのテスト
  describe("sizes", () => {
    it("renders small size", () => {
      render(<Button size="sm">Small</Button>);
      expect(screen.getByRole("button")).toBeInTheDocument();
    });

    it("renders medium size", () => {
      render(<Button size="md">Medium</Button>);
      expect(screen.getByRole("button")).toBeInTheDocument();
    });

    it("renders large size", () => {
      render(<Button size="lg">Large</Button>);
      expect(screen.getByRole("button")).toBeInTheDocument();
    });
  });

  // クリックイベント
  it("handles click events", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  // 無効状態
  it("is disabled when disabled prop is true", () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("does not fire onClick when disabled", () => {
    const handleClick = vi.fn();
    render(
      <Button disabled onClick={handleClick}>
        Disabled
      </Button>
    );

    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).not.toHaveBeenCalled();
  });

  // ローディング状態
  it("shows loading spinner when loading", () => {
    render(<Button loading>Loading</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("aria-busy", "true");
  });

  it("is disabled when loading", () => {
    render(<Button loading>Loading</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  // アイコン
  it("renders left icon", () => {
    render(<Button leftIcon={<span data-testid="left-icon">L</span>}>Button</Button>);
    expect(screen.getByTestId("left-icon")).toBeInTheDocument();
  });

  it("renders right icon", () => {
    render(<Button rightIcon={<span data-testid="right-icon">R</span>}>Button</Button>);
    expect(screen.getByTestId("right-icon")).toBeInTheDocument();
  });

  // アクセシビリティ
  it("has correct aria attributes when disabled", () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole("button")).toHaveAttribute("aria-disabled", "true");
  });
});

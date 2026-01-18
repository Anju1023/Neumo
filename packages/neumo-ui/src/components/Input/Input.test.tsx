import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Input } from "./Input";

describe("Input", () => {
  // 基本レンダリング
  it("renders input element", () => {
    render(<Input placeholder="Enter text" />);
    expect(screen.getByPlaceholderText("Enter text")).toBeInTheDocument();
  });

  // タイプのテスト
  describe("types", () => {
    it("renders text type by default", () => {
      render(<Input />);
      expect(screen.getByRole("textbox")).toHaveAttribute("type", "text");
    });

    it("renders email type", () => {
      render(<Input type="email" />);
      expect(screen.getByRole("textbox")).toHaveAttribute("type", "email");
    });

    it("renders password type", () => {
      render(<Input type="password" />);
      // password type doesn't have textbox role
      expect(document.querySelector('input[type="password"]')).toBeInTheDocument();
    });

    it("renders number type", () => {
      render(<Input type="number" />);
      expect(screen.getByRole("spinbutton")).toHaveAttribute("type", "number");
    });

    it("renders search type", () => {
      render(<Input type="search" />);
      expect(screen.getByRole("searchbox")).toHaveAttribute("type", "search");
    });
  });

  // ラベルのテスト
  it("renders label", () => {
    render(<Input label="Email" />);
    expect(screen.getByText("Email")).toBeInTheDocument();
  });

  it("associates label with input", () => {
    render(<Input label="Email" />);
    const input = screen.getByRole("textbox");
    const label = screen.getByText("Email");
    expect(label).toHaveAttribute("for", input.id);
  });

  // ヘルパーテキスト
  it("renders helper text", () => {
    render(<Input helperText="This is a hint" />);
    expect(screen.getByText("This is a hint")).toBeInTheDocument();
  });

  // エラー状態
  it("renders error state", () => {
    render(<Input error errorMessage="Invalid input" />);
    expect(screen.getByRole("textbox")).toHaveAttribute("aria-invalid", "true");
    expect(screen.getByText("Invalid input")).toBeInTheDocument();
  });

  it("hides helper text when error is shown", () => {
    render(<Input error errorMessage="Error" helperText="Helper" />);
    expect(screen.getByText("Error")).toBeInTheDocument();
    expect(screen.queryByText("Helper")).not.toBeInTheDocument();
  });

  // 無効状態
  it("is disabled when disabled prop is true", () => {
    render(<Input disabled />);
    expect(screen.getByRole("textbox")).toBeDisabled();
  });

  // イベントハンドリング
  it("handles onChange events", () => {
    const handleChange = vi.fn();
    render(<Input onChange={handleChange} />);

    fireEvent.change(screen.getByRole("textbox"), { target: { value: "test" } });
    expect(handleChange).toHaveBeenCalled();
  });

  it("handles onFocus events", () => {
    const handleFocus = vi.fn();
    render(<Input onFocus={handleFocus} />);

    fireEvent.focus(screen.getByRole("textbox"));
    expect(handleFocus).toHaveBeenCalled();
  });

  it("handles onBlur events", () => {
    const handleBlur = vi.fn();
    render(<Input onBlur={handleBlur} />);

    fireEvent.blur(screen.getByRole("textbox"));
    expect(handleBlur).toHaveBeenCalled();
  });

  // アイコン
  it("renders left icon", () => {
    render(<Input leftIcon={<span data-testid="left-icon">L</span>} />);
    expect(screen.getByTestId("left-icon")).toBeInTheDocument();
  });

  it("renders right icon", () => {
    render(<Input rightIcon={<span data-testid="right-icon">R</span>} />);
    expect(screen.getByTestId("right-icon")).toBeInTheDocument();
  });

  // サイズ
  describe("sizes", () => {
    it("renders small size", () => {
      render(<Input size="sm" />);
      expect(screen.getByRole("textbox")).toBeInTheDocument();
    });

    it("renders medium size", () => {
      render(<Input size="md" />);
      expect(screen.getByRole("textbox")).toBeInTheDocument();
    });

    it("renders large size", () => {
      render(<Input size="lg" />);
      expect(screen.getByRole("textbox")).toBeInTheDocument();
    });
  });
});

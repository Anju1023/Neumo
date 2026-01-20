import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { Toast } from "./Toast";
import { ToastProvider } from "./ToastProvider";
import { useToast } from "./useToast";

describe("Toast", () => {
  // タイマーのモック
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  // 基本レンダリング
  describe("rendering", () => {
    it("renders title correctly", () => {
      render(<Toast title="Test Title" duration={Infinity} />);
      expect(screen.getByText("Test Title")).toBeInTheDocument();
    });

    it("renders description correctly", () => {
      render(<Toast description="Test Description" duration={Infinity} />);
      expect(screen.getByText("Test Description")).toBeInTheDocument();
    });

    it("renders both title and description", () => {
      render(
        <Toast title="Title" description="Description" duration={Infinity} />
      );
      expect(screen.getByText("Title")).toBeInTheDocument();
      expect(screen.getByText("Description")).toBeInTheDocument();
    });

    it("has role=alert for accessibility", () => {
      render(<Toast title="Alert" duration={Infinity} />);
      expect(screen.getByRole("alert")).toBeInTheDocument();
    });
  });

  // バリアントのテスト
  describe("variants", () => {
    it("renders default variant without icon", () => {
      render(<Toast variant="default" title="Default" duration={Infinity} />);
      const alert = screen.getByRole("alert");
      expect(alert).toBeInTheDocument();
      // default バリアントはアイコンなし
      expect(alert.querySelectorAll("svg").length).toBe(1); // 閉じるボタンのみ
    });

    it("renders success variant with icon", () => {
      render(<Toast variant="success" title="Success" duration={Infinity} />);
      const alert = screen.getByRole("alert");
      expect(alert).toBeInTheDocument();
      // success バリアントはアイコンあり（閉じるボタン + アイコン = 2）
      expect(alert.querySelectorAll("svg").length).toBe(2);
    });

    it("renders error variant with icon", () => {
      render(<Toast variant="error" title="Error" duration={Infinity} />);
      const alert = screen.getByRole("alert");
      expect(alert).toBeInTheDocument();
      expect(alert.querySelectorAll("svg").length).toBe(2);
    });

    it("renders info variant with icon", () => {
      render(<Toast variant="info" title="Info" duration={Infinity} />);
      const alert = screen.getByRole("alert");
      expect(alert).toBeInTheDocument();
      expect(alert.querySelectorAll("svg").length).toBe(2);
    });

    it("renders warning variant with icon", () => {
      render(<Toast variant="warning" title="Warning" duration={Infinity} />);
      const alert = screen.getByRole("alert");
      expect(alert).toBeInTheDocument();
      expect(alert.querySelectorAll("svg").length).toBe(2);
    });
  });

  // 閉じるボタン
  describe("close button", () => {
    it("renders close button", () => {
      render(<Toast title="Test" duration={Infinity} />);
      expect(screen.getByRole("button", { name: /close/i })).toBeInTheDocument();
    });

    it("calls onClose when close button is clicked", async () => {
      const handleClose = vi.fn();
      render(<Toast title="Test" onClose={handleClose} duration={Infinity} />);

      fireEvent.click(screen.getByRole("button", { name: /close/i }));

      // アニメーション待ち（200ms）
      await act(async () => {
        vi.advanceTimersByTime(200);
      });

      expect(handleClose).toHaveBeenCalledTimes(1);
    });
  });

  // 自動クローズ
  describe("auto close", () => {
    it("calls onClose after duration", async () => {
      const handleClose = vi.fn();
      render(<Toast title="Test" duration={3000} onClose={handleClose} />);

      // duration経過前は呼ばれない
      await act(async () => {
        vi.advanceTimersByTime(2999);
      });
      expect(handleClose).not.toHaveBeenCalled();

      // duration経過 + アニメーション時間（200ms）
      await act(async () => {
        vi.advanceTimersByTime(201);
      });
      expect(handleClose).toHaveBeenCalledTimes(1);
    });

    it("does not auto close when duration is Infinity", async () => {
      const handleClose = vi.fn();
      render(<Toast title="Test" duration={Infinity} onClose={handleClose} />);

      await act(async () => {
        vi.advanceTimersByTime(10000);
      });

      expect(handleClose).not.toHaveBeenCalled();
    });
  });

  // カスタムクラス
  it("applies custom className", () => {
    render(<Toast title="Test" className="custom-class" duration={Infinity} />);
    expect(screen.getByRole("alert")).toHaveClass("custom-class");
  });
});

describe("ToastProvider", () => {
  // useToastを使うテスト用コンポーネント
  const TestComponent = () => {
    const { toast, dismiss, toasts } = useToast();

    return (
      <div>
        <button onClick={() => toast({ title: "New Toast", duration: Infinity })}>Add Toast</button>
        <button
          onClick={() => toast({ title: "Success", variant: "success", duration: Infinity })}
        >
          Add Success
        </button>
        <button onClick={() => toasts[0]?.id && dismiss(toasts[0].id)}>
          Dismiss First
        </button>
        <div data-testid="toast-count">{toasts.length}</div>
      </div>
    );
  };

  it("renders children", () => {
    render(
      <ToastProvider>
        <div data-testid="child">Child Content</div>
      </ToastProvider>
    );
    expect(screen.getByTestId("child")).toBeInTheDocument();
  });

  it("adds toast when toast() is called", () => {
    render(
      <ToastProvider>
        <TestComponent />
      </ToastProvider>
    );

    expect(screen.getByTestId("toast-count")).toHaveTextContent("0");

    fireEvent.click(screen.getByText("Add Toast"));

    expect(screen.getByTestId("toast-count")).toHaveTextContent("1");
    expect(screen.getByText("New Toast")).toBeInTheDocument();
  });

  it("adds multiple toasts", () => {
    render(
      <ToastProvider>
        <TestComponent />
      </ToastProvider>
    );

    fireEvent.click(screen.getByText("Add Toast"));
    fireEvent.click(screen.getByText("Add Success"));

    expect(screen.getByTestId("toast-count")).toHaveTextContent("2");
  });

  it("dismisses toast when dismiss() is called", async () => {
    vi.useFakeTimers();
    
    render(
      <ToastProvider>
        <TestComponent />
      </ToastProvider>
    );

    // Toast追加
    fireEvent.click(screen.getByText("Add Toast"));
    expect(screen.getByTestId("toast-count")).toHaveTextContent("1");

    // Toast削除
    fireEvent.click(screen.getByText("Dismiss First"));

    // アニメーション終了を待つ
    await act(async () => {
      vi.advanceTimersByTime(300);
    });

    expect(screen.getByTestId("toast-count")).toHaveTextContent("0");
    
    vi.useRealTimers();
  });

  it("removes toast when close button is clicked", async () => {
    vi.useFakeTimers();
    
    render(
      <ToastProvider>
        <TestComponent />
      </ToastProvider>
    );

    fireEvent.click(screen.getByText("Add Toast"));
    expect(screen.getByText("New Toast")).toBeInTheDocument();

    // 閉じるボタンをクリック
    fireEvent.click(screen.getByRole("button", { name: /close/i }));

    // アニメーション終了を待つ
    await act(async () => {
      vi.advanceTimersByTime(300);
    });

    expect(screen.getByTestId("toast-count")).toHaveTextContent("0");
    
    vi.useRealTimers();
  });
});

describe("useToast", () => {
  it("throws error when used outside ToastProvider", () => {
    // エラーを捕捉するためにconsole.errorをモック
    const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    const TestComponent = () => {
      useToast();
      return null;
    };

    expect(() => render(<TestComponent />)).toThrow(
      "useToast must be used within a ToastProvider"
    );

    consoleSpy.mockRestore();
  });

  it("returns toast and dismiss functions", () => {
    let hookResult: ReturnType<typeof useToast> | null = null;

    const TestComponent = () => {
      hookResult = useToast();
      return null;
    };

    render(
      <ToastProvider>
        <TestComponent />
      </ToastProvider>
    );

    expect(hookResult).not.toBeNull();
    expect(typeof hookResult!.toast).toBe("function");
    expect(typeof hookResult!.dismiss).toBe("function");
    expect(Array.isArray(hookResult!.toasts)).toBe(true);
  });
});

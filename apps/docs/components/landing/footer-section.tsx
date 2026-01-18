"use client";

import Link from "next/link";
import { Github, Twitter, Heart } from "lucide-react";

/**
 * FooterSection
 *
 * ランディングページのフッターセクション
 */
export function FooterSection() {
  return (
    <footer className="py-16 border-t border-neumo-text-muted/10 bg-neumo-bg relative z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* ロゴ・コピーライト */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-neumo-text mb-2 tracking-tight">
              Neumo UI
            </h3>
            <p className="text-sm text-neumo-text-muted flex items-center justify-center md:justify-start gap-1">
              Built with <Heart size={14} className="text-neumo-error fill-neumo-error" /> by{" "}
              <a
                href="https://github.com/your-username"
                className="text-neumo-text font-medium hover:text-neumo-primary transition-colors decoration-neumo-primary/30 underline-offset-4 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Anju
              </a>
            </p>
          </div>

          {/* リンク */}
          <nav className="flex items-center gap-8">
            <Link
              href="/docs"
              className="text-sm font-medium text-neumo-text-muted hover:text-neumo-primary transition-colors"
            >
              Documentation
            </Link>
            <Link
              href="/docs/components/button"
              className="text-sm font-medium text-neumo-text-muted hover:text-neumo-primary transition-colors"
            >
              Components
            </Link>
            <div className="flex items-center gap-4 border-l border-neumo-text-muted/20 pl-8">
                <a
                href="https://github.com/your-repo/neumo-ui"
                className="text-neumo-text-muted hover:text-neumo-text transition-colors p-2 hover:bg-neumo-text-muted/5 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                >
                <Github size={20} />
                </a>
                <a
                href="https://twitter.com/your-handle"
                className="text-neumo-text-muted hover:text-neumo-text transition-colors p-2 hover:bg-neumo-text-muted/5 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                >
                <Twitter size={20} />
                </a>
            </div>
          </nav>
        </div>

        {/* ライセンス */}
        <div className="mt-12 pt-8 border-t border-neumo-text-muted/10 text-center">
          <p className="text-xs text-neumo-text-muted/80">
            MIT License © {new Date().getFullYear()} Neumo UI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
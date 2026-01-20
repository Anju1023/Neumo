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
    <footer className="py-16 border-t border-nuform-text-muted/10 bg-nuform-bg relative z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* ロゴ・コピーライト */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-nuform-text mb-2 tracking-tight">
              Nuform
            </h3>
            <p className="text-sm text-nuform-text-muted flex items-center justify-center md:justify-start gap-1">
              Built with <Heart size={14} className="text-nuform-error fill-nuform-error" /> by{" "}
              <a
                href="https://github.com/your-username"
                className="text-nuform-text font-medium hover:text-nuform-primary transition-colors decoration-nuform-primary/30 underline-offset-4 hover:underline"
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
              className="text-sm font-medium text-nuform-text-muted hover:text-nuform-primary transition-colors"
            >
              Documentation
            </Link>
            <Link
              href="/docs/components/button"
              className="text-sm font-medium text-nuform-text-muted hover:text-nuform-primary transition-colors"
            >
              Components
            </Link>
            <div className="flex items-center gap-4 border-l border-nuform-text-muted/20 pl-8">
                <a
                href="https://github.com/your-repo/nuform"
                className="text-nuform-text-muted hover:text-nuform-text transition-colors p-2 hover:bg-nuform-text-muted/5 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                >
                <Github size={20} />
                </a>
                <a
                href="https://twitter.com/your-handle"
                className="text-nuform-text-muted hover:text-nuform-text transition-colors p-2 hover:bg-nuform-text-muted/5 rounded-full"
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
        <div className="mt-12 pt-8 border-t border-nuform-text-muted/10 text-center">
          <p className="text-xs text-nuform-text-muted/80">
            MIT License © {new Date().getFullYear()} Nuform. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
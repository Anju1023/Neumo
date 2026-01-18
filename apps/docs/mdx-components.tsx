import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';

// カスタムコンポーネント
import { ComponentPreview, ComponentShowcase } from '@/components/ui/component-preview';

// Neumo UIコンポーネント（クライアントコンポーネントラッパー経由）
import { Button, Card, Input, Avatar, Badge, Divider } from '@/components/ui/neumo-components';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    // ライブデモ用コンポーネント
    ComponentPreview,
    ComponentShowcase,
    // Neumo UIコンポーネント（MDXで直接使用可能にする）
    Button,
    Card,
    Input,
    Avatar,
    Badge,
    Divider,
    ...components,
  };
}

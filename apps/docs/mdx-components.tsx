import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';

// Fumadocs UIコンポーネント
import { Callout } from 'fumadocs-ui/components/callout';
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import { Step, Steps } from 'fumadocs-ui/components/steps';
import { Accordion, Accordions } from 'fumadocs-ui/components/accordion';
import { TypeTable } from 'fumadocs-ui/components/type-table';

// カスタムコンポーネント
import { ComponentPreview, ComponentShowcase } from '@/components/ui/component-preview';

// Nuformコンポーネント（クライアントコンポーネントラッパー経由）
// 注意: Fumadocsの Card/Cards と名前衝突を避けるため Nuform プレフィックスを使用
import {
  Button as NuformButton,
  Card as NuformCard,
  Input as NuformInput,
  Avatar as NuformAvatar,
  Badge as NuformBadge,
  Divider as NuformDivider,
  Toast as NuformToast,
  ToastProvider as NuformToastProvider,
} from '@/components/ui/nuform-components';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    // Fumadocs UIコンポーネント（MDXで直接使用可能にする）
    Callout,
    Tab,
    Tabs,
    Step,
    Steps,
    Accordion,
    Accordions,
    TypeTable,
    // ライブデモ用コンポーネント
    ComponentPreview,
    ComponentShowcase,
    // Nuformコンポーネント（Nuformプレフィックス付き）
    // ドキュメント内のライブデモで使用
    NuformButton,
    NuformCard,
    NuformInput,
    NuformAvatar,
    NuformBadge,
    NuformDivider,
    NuformToast,
    NuformToastProvider,
    ...components,
  };
}

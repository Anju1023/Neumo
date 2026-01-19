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

// Neumo UIコンポーネント（クライアントコンポーネントラッパー経由）
// 注意: Fumadocsの Card/Cards と名前衝突を避けるため Neumo プレフィックスを使用
import {
  Button as NeumoButton,
  Card as NeumoCard,
  Input as NeumoInput,
  Avatar as NeumoAvatar,
  Badge as NeumoBadge,
  Divider as NeumoDivider,
  Toast as NeumoToast,
  ToastProvider as NeumoToastProvider,
} from '@/components/ui/neumo-components';

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
    // Neumo UIコンポーネント（Neumoプレフィックス付き）
    // ドキュメント内のライブデモで使用
    NeumoButton,
    NeumoCard,
    NeumoInput,
    NeumoAvatar,
    NeumoBadge,
    NeumoDivider,
    NeumoToast,
    NeumoToastProvider,
    ...components,
  };
}

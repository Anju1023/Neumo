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
import { Button, Card, Input, Avatar, Badge, Divider } from '@/components/ui/neumo-components';

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

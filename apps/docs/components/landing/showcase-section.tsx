"use client";

import { Button, Card, Input, Avatar, Badge, Divider } from "@anju/nuform";

/**
 * ShowcaseSection
 *
 * コンポーネントのショーケースセクション
 * 実際のコンポーネントを表示して魅力をアピール
 */
export function ShowcaseSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* セクションタイトル */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-nuform-text mb-6">
            Component Showcase
          </h2>
          <p className="text-xl text-nuform-text-muted max-w-2xl mx-auto">
            美しく、使いやすいコンポーネントたち
          </p>
        </div>

        {/* ショーケースグリッド */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto mb-20">
          {/* ボタン展示 */}
          <Card variant="flat" padding="lg" className="flex flex-col h-full">
            <h3 className="text-xl font-bold text-nuform-text mb-6 flex items-center gap-2">
              <span className="w-2 h-8 rounded-full bg-nuform-primary" />
              Buttons
            </h3>
            <div className="flex flex-wrap gap-4 items-center justify-center p-8 rounded-2xl bg-nuform-bg nuform-elevation-inset grow">
              <Button variant="default">Default</Button>
              <Button variant="primary">Primary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button loading>Loading</Button>
            </div>
          </Card>

          {/* フォーム展示 */}
          <Card variant="flat" padding="lg" className="flex flex-col h-full">
            <h3 className="text-xl font-bold text-nuform-text mb-6 flex items-center gap-2">
              <span className="w-2 h-8 rounded-full bg-nuform-success" />
              Form Elements
            </h3>
            <div className="space-y-6 p-8 rounded-2xl bg-nuform-bg nuform-elevation-inset grow">
              <Input label="Email" placeholder="you@example.com" />
              <Input label="Password" type="password" placeholder="Enter password" />
            </div>
          </Card>

          {/* アバター＆バッジ展示 */}
          <Card variant="flat" padding="lg" className="flex flex-col h-full">
            <h3 className="text-xl font-bold text-nuform-text mb-6 flex items-center gap-2">
              <span className="w-2 h-8 rounded-full bg-nuform-warning" />
              Avatars & Badges
            </h3>
            <div className="p-8 rounded-2xl bg-nuform-bg nuform-elevation-inset grow flex flex-col justify-center gap-8">
              <div className="flex items-center justify-center gap-6">
                <Avatar alt="Alice" size="sm" />
                <Avatar alt="Bob" size="md" />
                <Avatar alt="Charlie" size="lg" />
                <Avatar alt="Diana" size="xl" />
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge variant="default">Default</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="error">Error</Badge>
                <Badge variant="info">Info</Badge>
              </div>
            </div>
          </Card>

          {/* カード展示 */}
          <Card variant="flat" padding="lg" className="flex flex-col h-full">
            <h3 className="text-xl font-bold text-nuform-text mb-6 flex items-center gap-2">
              <span className="w-2 h-8 rounded-full bg-nuform-info" />
              Card Variants
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-8 rounded-2xl bg-nuform-bg nuform-elevation-inset grow">
              <Card variant="elevated" padding="md" className="text-center flex items-center justify-center aspect-square">
                <span className="text-sm font-medium text-nuform-text">Elevated</span>
              </Card>
              <Card variant="flat" padding="md" className="text-center flex items-center justify-center aspect-square bg-transparent border border-nuform-text-muted/20">
                <span className="text-sm font-medium text-nuform-text">Flat</span>
              </Card>
              <Card variant="inset" padding="md" className="text-center flex items-center justify-center aspect-square">
                <span className="text-sm font-medium text-nuform-text">Inset</span>
              </Card>
            </div>
          </Card>
        </div>

        {/* プロフィールカードデモ */}
        <div className="max-w-lg mx-auto">
          <Card variant="elevated" padding="lg" className="transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center gap-5 mb-6">
              <div className="relative">
                <Avatar alt="John Doe" size="xl" className="border-4 border-nuform-bg" />
                <div className="absolute bottom-0 right-0 w-5 h-5 bg-nuform-success rounded-full border-4 border-nuform-bg" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-nuform-text">John Doe</h4>
                <p className="text-nuform-text-muted">Frontend Developer</p>
              </div>
              <Button variant="ghost" size="sm" className="ml-auto">
                ...
              </Button>
            </div>
            
            <Divider className="my-6" />
            
            <p className="text-nuform-text leading-relaxed mb-6">
              Building beautiful UIs with Nuform components. 
              Love the new version 2.0! #neumorphism #react
            </p>
            
            <div className="flex gap-4">
              <Button variant="primary" className="flex-1">Follow</Button>
              <Button variant="default" className="flex-1">Message</Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default ShowcaseSection;
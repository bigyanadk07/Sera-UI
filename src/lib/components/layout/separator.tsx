import React from 'react';
import { Separator } from "@/components/ui/separator";
import { ComponentExample } from '@/lib/types';

export const separatorExample: ComponentExample = {
  id: 'separator',
  title: 'Separator',
  description: 'Visually or semantically separates content.',
  category: 'Layout',
  preview: 'https://images.unsplash.com/photo-1618335829737-2228915674e0?q=80&w=800&auto=format&fit=crop',
  code: `import { Separator } from "@/components/ui/separator"

export function SeparatorDemo() {
  return (
    <div>
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
        <p className="text-sm text-muted-foreground">
          An open-source UI component library.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  )
}`,
  component: React.createElement('div', {}, [
    React.createElement('div', { className: "space-y-1", key: "header" }, [
      React.createElement('h4', { className: "text-sm font-medium leading-none", key: "title" }, "Radix Primitives"),
      React.createElement('p', { className: "text-sm text-muted-foreground", key: "desc" }, "An open-source UI component library.")
    ]),
    React.createElement(Separator, { className: "my-4", key: "separator1" }),
    React.createElement('div', { className: "flex h-5 items-center space-x-4 text-sm", key: "links" }, [
      React.createElement('div', { key: "blog" }, "Blog"),
      React.createElement(Separator, { orientation: "vertical", key: "separator2" }),
      React.createElement('div', { key: "docs" }, "Docs"),
      React.createElement(Separator, { orientation: "vertical", key: "separator3" }),
      React.createElement('div', { key: "source" }, "Source")
    ])
  ])
};
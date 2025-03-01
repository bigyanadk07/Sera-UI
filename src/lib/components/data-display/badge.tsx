import React from 'react';
import { Badge } from "@/components/ui/badge";
import { ComponentExample } from '@/lib/types';

export const badgeExample: ComponentExample = {
  id: 'badge',
  title: 'Badge',
  description: 'Displays a badge or a component that looks like a badge.',
  category: 'Data Display',
  preview: 'https://images.unsplash.com/photo-1618335829737-2228915674e0?q=80&w=800&auto=format&fit=crop',
  code: `import { Badge } from "@/components/ui/badge"

export function BadgeDemo() {
  return (
    <div className="flex gap-2">
      <Badge>Badge</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="destructive">Destructive</Badge>
    </div>
  )
}`,
  component: React.createElement('div', { className: "flex gap-2" }, [
    React.createElement(Badge, { key: "default" }, "Badge"),
    React.createElement(Badge, { variant: "secondary", key: "secondary" }, "Secondary"),
    React.createElement(Badge, { variant: "outline", key: "outline" }, "Outline"),
    React.createElement(Badge, { variant: "destructive", key: "destructive" }, "Destructive")
  ])
};
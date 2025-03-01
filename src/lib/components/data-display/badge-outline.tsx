import React from 'react';
import { Badge } from "@/components/ui/badge";
import { ComponentExample } from '@/lib/types';

export const badgeOutlineExample: ComponentExample = {
  id: 'badge-outline',
  title: 'Outline Badge',
  description: 'A badge with an outline style for subtle indicators.',
  category: 'Data Display',
  preview: 'https://images.unsplash.com/photo-1618335829737-2228915674e0?q=80&w=800&auto=format&fit=crop',
  code: `import { Badge } from "@/components/ui/badge"

export function BadgeOutlineDemo() {
  return <Badge variant="outline">Outline</Badge>
}`,
  component: React.createElement(Badge, { variant: "outline" }, "Outline")
};
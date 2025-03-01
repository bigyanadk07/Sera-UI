import React from 'react';
import { Badge } from "@/components/ui/badge";
import { ComponentExample } from '@/lib/types';

export const badgeSecondaryExample: ComponentExample = {
  id: 'badge-secondary',
  title: 'Secondary Badge',
  description: 'A secondary badge with less visual prominence.',
  category: 'Data Display',
  preview: 'https://images.unsplash.com/photo-1618335829737-2228915674e0?q=80&w=800&auto=format&fit=crop',
  code: `import { Badge } from "@/components/ui/badge"

export function BadgeSecondaryDemo() {
  return <Badge variant="secondary">Secondary</Badge>
}`,
  component: React.createElement(Badge, { variant: "secondary" }, "Secondary")
};
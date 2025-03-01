import React from 'react';
import { Badge } from "@/components/ui/badge";
import { ComponentExample } from '@/lib/types';

export const badgeDestructiveExample: ComponentExample = {
  id: 'badge-destructive',
  title: 'Destructive Badge',
  description: 'A badge with destructive styling for error or warning states.',
  category: 'Data Display',
  preview: 'https://images.unsplash.com/photo-1618335829737-2228915674e0?q=80&w=800&auto=format&fit=crop',
  code: `import { Badge } from "@/components/ui/badge"

export function BadgeDestructiveDemo() {
  return <Badge variant="destructive">Destructive</Badge>
}`,
  component: React.createElement(Badge, { variant: "destructive" }, "Destructive")
};
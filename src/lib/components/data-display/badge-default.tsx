import React from 'react';
import { Badge } from "@/components/ui/badge";
import { ComponentExample } from '@/lib/types';

export const badgeDefaultExample: ComponentExample = {
  id: 'badge-default',
  title: 'Badge',
  description: 'A standard badge component for displaying status or labels.',
  category: 'Data Display',
  preview: 'https://images.unsplash.com/photo-1618335829737-2228915674e0?q=80&w=800&auto=format&fit=crop',
  code: `import { Badge } from "@/components/ui/badge"

export function BadgeDemo() {
  return <Badge>Badge</Badge>
}`,
  component: React.createElement(Badge, {}, "Badge")
};
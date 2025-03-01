import React from 'react';
import { Button } from "@/components/ui/button";
import { ComponentExample } from '@/lib/types';

export const buttonSecondaryExample: ComponentExample = {
  id: 'button-secondary',
  title: 'Secondary Button',
  description: 'A secondary button with less visual prominence.',
  category: 'Forms',
  preview: 'https://images.unsplash.com/photo-1618335829737-2228915674e0?q=80&w=800&auto=format&fit=crop',
  code: `import { Button } from "@/components/ui/button"

export function ButtonSecondaryDemo() {
  return <Button variant="secondary">Secondary</Button>
}`,
  component: React.createElement(Button, { variant: "secondary" }, "Secondary")
};
import React from 'react';
import { Button } from "@/components/ui/button";
import { ComponentExample } from '@/lib/types';

export const buttonExample: ComponentExample = {
  id: 'button',
  title: 'Button',
  description: 'A standard button component for user interactions.',
  category: 'Forms',
  preview: 'https://images.unsplash.com/photo-1618335829737-2228915674e0?q=80&w=800&auto=format&fit=crop',
  code: `import { Button } from "@/components/ui/button"

export function ButtonDemo() {
  return <Button>Click me</Button>
}`,
  component: React.createElement(Button, {}, "Click me")
};
import React from 'react';
import { Button } from "@/components/ui/button";
import { ComponentExample } from '@/lib/types';

export const buttonOutlineExample: ComponentExample = {
  id: 'button-outline',
  title: 'Outline Button',
  description: 'A button with an outline style for secondary actions.',
  category: 'Forms',
  preview: 'https://images.unsplash.com/photo-1618335829737-2228915674e0?q=80&w=800&auto=format&fit=crop',
  code: `import { Button } from "@/components/ui/button"

export function ButtonOutlineDemo() {
  return <Button variant="outline">Outline</Button>
}`,
  component: React.createElement(Button, { variant: "outline" }, "Outline")
};
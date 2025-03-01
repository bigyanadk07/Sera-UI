import React from 'react';
import { Button } from "@/components/ui/button";
import { ComponentExample } from '@/lib/types';

export const buttonGhostExample: ComponentExample = {
  id: 'button-ghost',
  title: 'Ghost Button',
  description: 'A button with minimal visual styling for subtle actions.',
  category: 'Forms',
  preview: 'https://images.unsplash.com/photo-1618335829737-2228915674e0?q=80&w=800&auto=format&fit=crop',
  code: `import { Button } from "@/components/ui/button"

export function ButtonGhostDemo() {
  return <Button variant="ghost">Ghost</Button>
}`,
  component: React.createElement(Button, { variant: "ghost" }, "Ghost")
};
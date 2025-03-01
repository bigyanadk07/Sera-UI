import React from 'react';
import { Button } from "@/components/ui/button";
import { ComponentExample } from '@/lib/types';

export const buttonLinkExample: ComponentExample = {
  id: 'button-link',
  title: 'Link Button',
  description: 'A button that appears as a link for navigation actions.',
  category: 'Forms',
  preview: 'https://images.unsplash.com/photo-1618335829737-2228915674e0?q=80&w=800&auto=format&fit=crop',
  code: `import { Button } from "@/components/ui/button"

export function ButtonLinkDemo() {
  return <Button variant="link">Link</Button>
}`,
  component: React.createElement(Button, { variant: "link" }, "Link")
};
import React from 'react';
import { ComponentExample } from '@/lib/types';

// Create the breadcrumb component
const BreadcrumbDemo = () => {
  return (
    <nav className="flex">
      <ol className="flex items-center space-x-2">
        <li><a href="#" className="text-muted-foreground hover:text-primary">Home</a></li>
        <li className="text-muted-foreground">/</li>
        <li><a href="#" className="text-muted-foreground hover:text-primary">Category</a></li>
        <li className="text-muted-foreground">/</li>
        <li><span className="font-medium">Current Page</span></li>
      </ol>
    </nav>
  );
};

export const breadcrumbExample: ComponentExample = {
  id: 'breadcrumb',
  title: 'Breadcrumb',
  description: "A navigation component showing the user's location in the site hierarchy.",
  category: 'Navigation',
  preview: 'https://images.unsplash.com/photo-1618335829737-2228915674e0?q=80&w=800&auto=format&fit=crop',
  code: `export function Breadcrumb() {
  return (
    <nav className="flex">
      <ol className="flex items-center space-x-2">
        <li><a href="#" className="text-muted-foreground hover:text-primary">Home</a></li>
        <li className="text-muted-foreground">/</li>
        <li><a href="#" className="text-muted-foreground hover:text-primary">Category</a></li>
        <li className="text-muted-foreground">/</li>
        <li><span className="font-medium">Current Page</span></li>
      </ol>
    </nav>
  );
}`,
  component: React.createElement(BreadcrumbDemo)
};
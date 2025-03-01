# Component Library Structure

This document explains how to add new components and categories to the UI library.

## Directory Structure

```
src/lib/
├── components.ts            # Main registry of all components
├── component-creator.ts     # Helper to create components
├── types.ts                 # Type definitions
└── components/              # Component definitions organized by category
    ├── forms/               # Form components
    ├── navigation/          # Navigation components
    ├── layout/              # Layout components
    └── ...                  # Other categories
```

## Adding a New Component to an Existing Category

1. Create a new file in the appropriate category folder:

```tsx
// src/lib/components/forms/my-button.tsx
import React from 'react';
import { Button } from "@/components/ui/button";
import { ComponentExample } from '@/lib/types';
import { createComponent } from '@/lib/component-creator';

export const myButtonExample = createComponent({
  id: 'my-button',
  title: 'My Button',
  description: 'A custom button component',
  category: 'Forms',
  code: `import { Button } from "@/components/ui/button"

export function MyButton() {
  return <Button>My Button</Button>
}`,
  component: React.createElement(Button, {}, "My Button")
});
```

2. Import and add the component to the components registry:

```tsx
// src/lib/components.ts
import { myButtonExample } from './components/forms/my-button';

export const components: ComponentExample[] = [
  // ... existing components
  myButtonExample,
];
```

## Adding a New Category

1. Update the ComponentCategory type in `src/lib/types.ts`:

```tsx
export type ComponentCategory =
  | 'Forms'
  | 'Navigation'
  | 'Layout'
  | 'Data Display'
  | 'Feedback'
  | 'Overlays'
  | 'Typography'
  | 'MyNewCategory'; // Add your new category here

// Also update the categories array
export const categories: ComponentCategory[] = [
  'Forms',
  'Navigation',
  'Layout',
  'Data Display',
  'Feedback',
  'Overlays',
  'Typography',
  'MyNewCategory', // Add your new category here
];
```

2. Create a new folder for your category:

```
mkdir src/lib/components/my-new-category
```

3. Add components to your new category following the same pattern as existing components.

## Example: Adding a Breadcrumb Component to Navigation Category

1. Create the component file:

```tsx
// src/lib/components/navigation/breadcrumb.tsx
import React from 'react';
import { createComponent } from '@/lib/component-creator';

// Create your breadcrumb component here
const BreadcrumbDemo = () => {
  // Your component implementation
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

export const breadcrumbExample = createComponent({
  id: 'breadcrumb',
  title: 'Breadcrumb',
  description: 'A navigation component showing the user's location in the site hierarchy.',
  category: 'Navigation',
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
});
```

2. Add the component to the registry:

```tsx
// src/lib/components.ts
import { breadcrumbExample } from './components/navigation/breadcrumb';

export const components: ComponentExample[] = [
  // ... existing components
  breadcrumbExample,
];
```

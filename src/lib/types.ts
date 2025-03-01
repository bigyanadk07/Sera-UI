export type ComponentCategory =
  | 'Forms'
  | 'Navigation'
  | 'Layout'
  | 'Data Display'
  | 'Feedback'
  | 'Overlays'
  | 'Typography'
  | 'Breadcrumbs'
  | 'Carousel';

export interface ComponentExample {
  id: string;
  title: string;
  description: string;
  category: ComponentCategory;
  preview: string;
  code: string;
  component: JSX.Element;
}

export const categories: ComponentCategory[] = [
  'Forms',
  'Navigation',
  'Layout',
  'Data Display',
  'Feedback',
  'Overlays',
  'Typography',
  'Breadcrumbs',
  'Carousel',
];

// Helper function to register a component
export function registerComponent(component: ComponentExample): ComponentExample {
  return component;
}
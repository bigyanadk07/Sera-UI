import { ComponentExample, ComponentCategory, registerComponent } from './types';

/**
 * Helper function to create a new component example
 * 
 * @param options Component options
 * @returns ComponentExample object
 */
export function createComponent({
  id,
  title,
  description,
  category,
  preview = 'https://images.unsplash.com/photo-1618335829737-2228915674e0?q=80&w=800&auto=format&fit=crop',
  code,
  component
}: {
  id: string;
  title: string;
  description: string;
  category: ComponentCategory;
  preview?: string;
  code: string;
  component: JSX.Element;
}): ComponentExample {
  return registerComponent({
    id,
    title,
    description,
    category,
    preview,
    code,
    component
  });
}

/**
 * Example usage:
 * 
 * import { Button } from "@/components/ui/button";
 * 
 * export const myButtonExample = createComponent({
 *   id: 'my-button',
 *   title: 'My Button',
 *   description: 'A custom button component',
 *   category: 'Forms',
 *   code: `import { Button } from "@/components/ui/button"
 * 
 * export function MyButton() {
 *   return <Button>My Button</Button>
 * }`,
 *   component: React.createElement(Button, {}, "My Button")
 * });
 */
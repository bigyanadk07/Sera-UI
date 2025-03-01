import React from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import { ComponentExample } from '@/lib/types';

export const checkboxExample: ComponentExample = {
  id: 'checkbox',
  title: 'Checkbox',
  description: 'A control that allows the user to toggle between checked and not checked.',
  category: 'Forms',
  preview: 'https://images.unsplash.com/photo-1618335829737-2228915674e0?q=80&w=800&auto=format&fit=crop',
  code: `import { Checkbox } from "@/components/ui/checkbox"

export function CheckboxDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>
  )
}`,
  component: React.createElement('div', { className: "flex items-center space-x-2" }, [
    React.createElement(Checkbox, { id: "terms", key: "checkbox" }),
    React.createElement('label', { 
      htmlFor: "terms", 
      className: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      key: "label"
    }, "Accept terms and conditions")
  ])
};
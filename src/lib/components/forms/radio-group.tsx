import React from 'react';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ComponentExample } from '@/lib/types';

export const radioGroupExample: ComponentExample = {
  id: 'radio-group',
  title: 'Radio Group',
  description: 'A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.',
  category: 'Forms',
  preview: 'https://images.unsplash.com/photo-1618335829737-2228915674e0?q=80&w=800&auto=format&fit=crop',
  code: `import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="compact" id="r3" />
        <Label htmlFor="r3">Compact</Label>
      </div>
    </RadioGroup>
  )
}`,
  component: React.createElement(RadioGroup, { defaultValue: "comfortable" }, [
    React.createElement('div', { className: "flex items-center space-x-2", key: "default" }, [
      React.createElement(RadioGroupItem, { value: "default", id: "r1", key: "radio1" }),
      React.createElement(Label, { htmlFor: "r1", key: "label1" }, "Default")
    ]),
    React.createElement('div', { className: "flex items-center space-x-2", key: "comfortable" }, [
      React.createElement(RadioGroupItem, { value: "comfortable", id: "r2", key: "radio2" }),
      React.createElement(Label, { htmlFor: "r2", key: "label2" }, "Comfortable")
    ]),
    React.createElement('div', { className: "flex items-center space-x-2", key: "compact" }, [
      React.createElement(RadioGroupItem, { value: "compact", id: "r3", key: "radio3" }),
      React.createElement(Label, { htmlFor: "r3", key: "label3" }, "Compact")
    ])
  ])
};
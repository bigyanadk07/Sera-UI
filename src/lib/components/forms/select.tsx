import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ComponentExample } from '@/lib/types';

export const selectExample: ComponentExample = {
  id: 'select',
  title: 'Select',
  description: 'Displays a list of options for the user to pick from—triggered by a button.',
  category: 'Forms',
  preview: 'https://images.unsplash.com/photo-1618335829737-2228915674e0?q=80&w=800&auto=format&fit=crop',
  code: `import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem>
      </SelectContent>
    </Select>
  )
}`,
  component: React.createElement(Select, {}, [
    React.createElement(SelectTrigger, { className: "w-[180px]", key: "trigger" }, 
      React.createElement(SelectValue, { placeholder: "Theme", key: "value" })
    ),
    React.createElement(SelectContent, { key: "content" }, [
      React.createElement(SelectItem, { value: "light", key: "light" }, "Light"),
      React.createElement(SelectItem, { value: "dark", key: "dark" }, "Dark"),
      React.createElement(SelectItem, { value: "system", key: "system" }, "System")
    ])
  ])
};
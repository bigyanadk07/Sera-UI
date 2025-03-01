import React from 'react';
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { ComponentExample } from '@/lib/types';

export const switchExample: ComponentExample = {
  id: 'switch',
  title: 'Switch',
  description: 'A control that allows the user to toggle between checked and not checked.',
  category: 'Forms',
  preview: 'https://images.unsplash.com/photo-1618335829737-2228915674e0?q=80&w=800&auto=format&fit=crop',
  code: `import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export function SwitchDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  )
}`,
  component: React.createElement('div', { className: "flex items-center space-x-2" }, [
    React.createElement(Switch, { id: "airplane-mode", key: "switch" }),
    React.createElement(Label, { htmlFor: "airplane-mode", key: "label" }, "Airplane Mode")
  ])
};
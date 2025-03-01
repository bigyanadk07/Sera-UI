import React from 'react';
import { Progress } from "@/components/ui/progress";
import { ComponentExample } from '@/lib/types';

export const progressExample: ComponentExample = {
  id: 'progress',
  title: 'Progress',
  description: 'Displays an indicator showing the completion progress of a task.',
  category: 'Feedback',
  preview: 'https://images.unsplash.com/photo-1618335829737-2228915674e0?q=80&w=800&auto=format&fit=crop',
  code: `import { Progress } from "@/components/ui/progress"

export function ProgressDemo() {
  return <Progress value={33} className="w-[60%]" />
}`,
  component: React.createElement(Progress, { value: 33, className: "w-[300px]" })
};
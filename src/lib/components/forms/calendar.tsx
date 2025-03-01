import React from 'react';
import { Calendar } from "@/components/ui/calendar";
import { ComponentExample } from '@/lib/types';

export const calendarExample: ComponentExample = {
  id: 'calendar',
  title: 'Calendar',
  description: 'A calendar component that allows users to select dates.',
  category: 'Forms',
  preview: 'https://images.unsplash.com/photo-1618335829737-2228915674e0?q=80&w=800&auto=format&fit=crop',
  code: `import { Calendar } from "@/components/ui/calendar"

export function CalendarDemo() {
  return (
    <Calendar />
  )
}`,
  component: React.createElement(Calendar, { className: "rounded-md border" })
};
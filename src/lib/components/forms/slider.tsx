import React from 'react';
import { Slider } from "@/components/ui/slider";
import { ComponentExample } from '@/lib/types';

export const sliderExample: ComponentExample = {
  id: 'slider',
  title: 'Slider',
  description: 'An input where the user selects a value from within a given range.',
  category: 'Forms',
  preview: 'https://images.unsplash.com/photo-1618335829737-2228915674e0?q=80&w=800&auto=format&fit=crop',
  code: `import { Slider } from "@/components/ui/slider"

export function SliderDemo() {
  return (
    <Slider defaultValue={[33]} max={100} step={1} />
  )
}`,
  component: React.createElement(Slider, { defaultValue: [33], max: 100, step: 1, className: "w-[300px]" })
};
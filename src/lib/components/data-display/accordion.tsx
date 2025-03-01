import React from 'react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { ComponentExample } from '@/lib/types';

export const accordionExample: ComponentExample = {
  id: 'accordion',
  title: 'Accordion',
  description: 'A vertically stacked set of interactive headings that each reveal a section of content.',
  category: 'Data Display',
  preview: 'https://images.unsplash.com/photo-1618335829737-2228915674e0?q=80&w=800&auto=format&fit=crop',
  code: `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other components.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}`,
  component: React.createElement(Accordion, { type: "single", collapsible: true, className: "w-full max-w-[350px]" }, [
    React.createElement(AccordionItem, { value: "item-1", key: "item-1" }, [
      React.createElement(AccordionTrigger, { key: "trigger-1" }, "Is it accessible?"),
      React.createElement(AccordionContent, { key: "content-1" }, "Yes. It adheres to the WAI-ARIA design pattern.")
    ]),
    React.createElement(AccordionItem, { value: "item-2", key: "item-2" }, [
      React.createElement(AccordionTrigger, { key: "trigger-2" }, "Is it styled?"),
      React.createElement(AccordionContent, { key: "content-2" }, "Yes. It comes with default styles that matches the other components.")
    ])
  ])
};
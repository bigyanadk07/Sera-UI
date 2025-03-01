import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ComponentExample } from '@/lib/types';

export const cardExample: ComponentExample = {
  id: 'card',
  title: 'Card',
  description: 'A flexible card component for displaying content in a contained format.',
  category: 'Layout',
  preview: 'https://images.unsplash.com/photo-1618335829737-2228915674e0?q=80&w=800&auto=format&fit=crop',
  code: `import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function CardDemo() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  )
}`,
  component: React.createElement(Card, { className: "w-[350px]" }, [
    React.createElement(CardHeader, { key: "header" }, [
      React.createElement(CardTitle, { key: "title" }, "Card Title"),
      React.createElement(CardDescription, { key: "desc" }, "Card Description")
    ]),
    React.createElement(CardContent, { key: "content" }, 
      React.createElement("p", { key: "text" }, "Card Content")
    ),
    React.createElement(CardFooter, { key: "footer" },
      React.createElement(Button, { key: "button" }, "Action")
    )
  ])
};
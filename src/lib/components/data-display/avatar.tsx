import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ComponentExample } from '@/lib/types';

export const avatarExample: ComponentExample = {
  id: 'avatar',
  title: 'Avatar',
  description: 'An image element with a fallback for representing the user.',
  category: 'Data Display',
  preview: 'https://images.unsplash.com/photo-1618335829737-2228915674e0?q=80&w=800&auto=format&fit=crop',
  code: `import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}`,
  component: React.createElement(Avatar, {}, [
    React.createElement(AvatarImage, { src: "https://github.com/shadcn.png", alt: "@shadcn", key: "image" }),
    React.createElement(AvatarFallback, { key: "fallback" }, "CN")
  ])
};
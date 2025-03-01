import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ComponentExample } from '@/lib/types';

export const tabsExample: ComponentExample = {
  id: 'tabs',
  title: 'Tabs',
  description: 'A set of layered sections of content—known as tab panels—that display one panel of content at a time.',
  category: 'Navigation',
  preview: 'https://images.unsplash.com/photo-1618335829737-2228915674e0?q=80&w=800&auto=format&fit=crop',
  code: `import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">Make changes to your account here.</TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  )
}`,
  component: React.createElement(Tabs, { defaultValue: "account", className: "w-[400px]" }, [
    React.createElement(TabsList, { key: "list" }, [
      React.createElement(TabsTrigger, { value: "account", key: "account" }, "Account"),
      React.createElement(TabsTrigger, { value: "password", key: "password" }, "Password")
    ]),
    React.createElement(TabsContent, { value: "account", key: "account-content" }, "Make changes to your account here."),
    React.createElement(TabsContent, { value: "password", key: "password-content" }, "Change your password here.")
  ])
};
import React from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { ComponentExample } from '@/lib/types';

export const alertDialogExample: ComponentExample = {
  id: 'alert-dialog',
  title: 'Alert Dialog',
  description: 'A modal dialog that interrupts the user with important content and expects a response.',
  category: 'Overlays',
  preview: 'https://images.unsplash.com/photo-1618335829737-2228915674e0?q=80&w=800&auto=format&fit=crop',
  code: `import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

export function AlertDialogDemo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Show Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}`,
  component: React.createElement(AlertDialog, {}, [
    React.createElement(AlertDialogTrigger, { asChild: true, key: "trigger" },
      React.createElement(Button, { variant: "outline" }, "Show Dialog")
    ),
    React.createElement(AlertDialogContent, { key: "content" }, [
      React.createElement(AlertDialogHeader, { key: "header" }, [
        React.createElement(AlertDialogTitle, { key: "title" }, "Are you absolutely sure?"),
        React.createElement(AlertDialogDescription, { key: "description" }, 
          "This action cannot be undone. This will permanently delete your account and remove your data from our servers."
        )
      ]),
      React.createElement(AlertDialogFooter, { key: "footer" }, [
        React.createElement(AlertDialogCancel, { key: "cancel" }, "Cancel"),
        React.createElement(AlertDialogAction, { key: "action" }, "Continue")
      ])
    ])
  ])
};
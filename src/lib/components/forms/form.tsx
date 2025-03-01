import React from 'react';
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { ComponentExample } from '@/lib/types';

// Create a React component for the form demo
const FormDemo = () => {
  const form = useForm({
    defaultValues: {
      username: "",
      email: "",
    },
  });

  // Using React.createElement instead of JSX
  return React.createElement(Form, { ...form }, 
    React.createElement('form', { className: "w-full max-w-sm space-y-6" }, [
      React.createElement(FormField, {
        key: "username-field",
        control: form.control,
        name: "username",
        render: ({ field }) => 
          React.createElement(FormItem, {}, [
            React.createElement(FormLabel, { key: "username-label" }, "Username"),
            React.createElement(FormControl, { key: "username-control" }, 
              React.createElement(Input, { 
                key: "username-input",
                placeholder: "Enter your username", 
                ...field 
              })
            ),
            React.createElement(FormDescription, { key: "username-desc" }, 
              "This is your public display name."
            ),
            React.createElement(FormMessage, { key: "username-message" })
          ])
      }),
      React.createElement(FormField, {
        key: "email-field",
        control: form.control,
        name: "email",
        render: ({ field }) => 
          React.createElement(FormItem, {}, [
            React.createElement(FormLabel, { key: "email-label" }, "Email"),
            React.createElement(FormControl, { key: "email-control" }, 
              React.createElement(Input, { 
                key: "email-input",
                placeholder: "Enter your email", 
                type: "email",
                ...field 
              })
            ),
            React.createElement(FormDescription, { key: "email-desc" }, 
              "We'll never share your email with anyone else."
            ),
            React.createElement(FormMessage, { key: "email-message" })
          ])
      }),
      React.createElement(Button, { key: "submit-button", type: "submit" }, "Submit")
    ])
  );
};

export const formExample: ComponentExample = {
  id: 'form',
  title: 'Form',
  description: 'A form component with validation and error handling.',
  category: 'Forms',
  preview: 'https://images.unsplash.com/photo-1618335829737-2228915674e0?q=80&w=800&auto=format&fit=crop',
  code: `import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

export function FormDemo() {
  const form = useForm({
    defaultValues: {
      username: "",
      email: "",
    },
  })

  return (
    <Form {...form}>
      <form className="w-full max-w-sm space-y-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Enter your username" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" type="email" {...field} />
              </FormControl>
              <FormDescription>
                We'll never share your email with anyone else.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}`,
  component: React.createElement(FormDemo, {})
};
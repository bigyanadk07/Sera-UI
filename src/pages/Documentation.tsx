import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ArrowRight, Book, Code, Package, Copy, CheckCheck } from 'lucide-react';

export default function Documentation() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const guides = [
    {
      title: 'Getting Started',
      description: 'Learn how to install and set up the UI library in your project.',
      icon: <Package className="h-8 w-8" />,
      href: '#getting-started',
      iconColor: 'text-primary',
    },
    {
      title: 'Components API',
      description: 'Explore the API documentation for all available components.',
      icon: <Code className="h-8 w-8" />,
      href: '#components-api',
      iconColor: 'text-primary',
    },
    {
      title: 'Usage Guidelines',
      description: 'Best practices and guidelines for using the components effectively.',
      icon: <Book className="h-8 w-8" />,
      href: '#guidelines',
      iconColor: 'text-primary',
    },
  ];

  const codeSnippets = [
    {
      code: 'npm install @ui-library/react',
      language: 'bash',
    },
    {
      code: `import { Button } from '@ui-library/react'

function App() {
  return <Button>Click me</Button>
}`,
      language: 'jsx',
    },
  ];

  return (
    <div>
      {/* Background Pattern - matching the Home page */}
      <div className="absolute inset-0 -z-10 h-full w-full "></div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section - simplified to match Home page style */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-4xl font-bold tracking-tighter mb-6">Documentation</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about using our UI components to build beautiful, accessible interfaces.
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {guides.map((guide) => (
              <Card 
                key={guide.title} 
                className="transition-colors hover:border-primary border"
              >
                <CardHeader className="pb-2">
                  <div className={`${guide.iconColor} mb-4`}>{guide.icon}</div>
                  <CardTitle>{guide.title}</CardTitle>
                  <CardDescription className="text-base">{guide.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="group" asChild>
                    {/* <Link to={guide.href}>
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link> */}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Installation */}
          <section id="getting-started" className="mb-20 p-8 rounded-lg bg-background border">
            <div className="flex items-center mb-6">
              <Package className="h-8 w-8 text-primary mr-4" />
              <h2 className="text-3xl font-bold">Installation</h2>
            </div>
            <p className="text-muted-foreground mb-6 text-lg">
              Get started by installing the package using your preferred package manager.
            </p>
            <div className="relative mb-6 group">
              <pre className="bg-muted p-6 rounded-lg font-mono text-base leading-relaxed overflow-x-auto">
                <code>{codeSnippets[0].code}</code>
              </pre>
              <button 
                className="absolute top-3 right-3 p-2 rounded-lg bg-muted-foreground/20 opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => handleCopy(codeSnippets[0].code, 0)}
              >
                {copiedIndex === 0 ? <CheckCheck className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>
            <p className="text-muted-foreground mb-6 text-lg">
              After installation, you can import components directly in your React application:
            </p>
            <div className="relative group">
              <pre className="bg-muted p-6 rounded-lg font-mono text-base leading-relaxed overflow-x-auto">
                <code className="language-jsx">{codeSnippets[1].code}</code>
              </pre>
              <button 
                className="absolute top-3 right-3 p-2 rounded-lg bg-muted-foreground/20 opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => handleCopy(codeSnippets[1].code, 1)}
              >
                {copiedIndex === 1 ? <CheckCheck className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>
          </section>

          {/* Components API */}
          <section id="components-api" className="mb-20 p-8 rounded-lg bg-background border">
            <div className="flex items-center mb-6">
              <Code className="h-8 w-8 text-primary mr-4" />
              <h2 className="text-3xl font-bold">Components API</h2>
            </div>
            <p className="text-muted-foreground mb-8 text-lg">
              Each component is built with accessibility and customization in mind.
              Explore our component library to find detailed API documentation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link to="/components">
                  Browse Components
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              {/* <Button variant="outline" size="lg">
                <Link to="/examples">View Examples</Link>
              </Button> */}
            </div>
          </section>

          {/* Guidelines */}
          <section id="guidelines" className="mb-12 p-8 rounded-lg bg-background border">
            <div className="flex items-center mb-6">
              <Book className="h-8 w-8 text-primary mr-4" />
              <h2 className="text-3xl font-bold">Usage Guidelines</h2>
            </div>
            <div className="prose dark:prose-invert max-w-none text-lg">
              <h3 className="text-2xl font-medium mb-4">Accessibility</h3>
              <p className="mb-6 text-muted-foreground">
                All components follow WAI-ARIA guidelines and are thoroughly tested
                for accessibility compliance. We ensure that keyboard navigation, 
                screen reader support, and proper focus management are implemented.
              </p>

              <h3 className="text-2xl font-medium mb-4">Customization</h3>
              <p className="mb-6 text-muted-foreground">
                Components can be customized using Tailwind CSS classes or by
                extending the default theme configuration. Our theming system
                allows for easy adaptation to your brand colors and styling preferences.
              </p>

              <h3 className="text-2xl font-medium mb-4">Best Practices</h3>
              <ul className="space-y-3 mb-6 text-muted-foreground">
                <li>Use semantic HTML elements whenever possible</li>
                <li>Maintain consistent spacing using the provided utilities</li>
                <li>Follow the component composition patterns</li>
                <li>Test for accessibility and responsive behavior</li>
                <li>Favor composition over configuration for complex UI</li>
              </ul>
            </div>
          </section>

          {/* Call to Action - matching Home page style */}
          <section className="py-24">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Start building your next project with our beautiful, responsive, and
                accessible UI components.
              </p>
              <Button asChild size="lg">
                <Link to="/components">Get Started</Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
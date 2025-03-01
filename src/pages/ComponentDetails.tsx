import { useParams, useOutletContext, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Copy, Check, Code as CodeIcon } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useEffect, useState } from 'react';
import type { ComponentExample } from '@/lib/types';
import {MoveLeft} from 'lucide-react'

type ContextType = {
  components: ComponentExample[];
};

export default function ComponentDetails() {
  const { id } = useParams();
  const { toast } = useToast();
  const { components } = useOutletContext<ContextType>();
  const component = components.find((c) => c.id === id);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!component) {
    return (
      <div>
        <h1 className="text-2xl font-bold">Component not found</h1>
      </div>
    );
  }

  const handleCopyCode = () => {
    navigator.clipboard.writeText(component.code);
    setCopied(true);
    toast({
      title: 'Code copied',
      description: 'The component code has been copied to your clipboard.',
    });
    
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div>
      <div className='mb-5'>
        <Link to="/components">
          <Button className='gap-2'>
            <span><MoveLeft/></span>
            <span>Back</span>
          </Button>
        </Link>
      </div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{component.title}</h1>
        <p className="text-lg text-muted-foreground mb-4">
          {component.description}
        </p>
        <Badge variant="secondary">{component.category}</Badge>
      </div>

      <Tabs defaultValue="preview" className="space-y-4">
        <TabsList className="w-full md:w-auto">
          <TabsTrigger value="preview" className="flex-1 md:flex-none">Preview</TabsTrigger>
          <TabsTrigger value="code" className="flex-1 md:flex-none">Code</TabsTrigger>
        </TabsList>

        <TabsContent value="preview" className="space-y-4">
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <div className="flex items-center justify-center min-h-[200px]">
              {component.component}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="code">
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <div className="bg-zinc-800 dark:bg-zinc-900 text-white p-3 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <CodeIcon className="h-4 w-4 text-zinc-400" />
                  <span className="text-sm font-mono">Component Code</span>
                </div>
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-8 w-8 text-zinc-300 hover:text-white hover:bg-zinc-700"
                  onClick={handleCopyCode}
                >
                  {copied ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
              <pre className="bg-zinc-900 dark:bg-zinc-950 p-6 overflow-x-auto text-zinc-100 rounded-b-lg">
                <code className="text-sm font-mono">{component.code}</code>
              </pre>
            </div>
          </div>
          
          {/* HyperUI-style Copy-Paste Section */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">Ready to Use</h3>
            <div className="bg-muted rounded-lg p-4">
              <p className="mb-4 text-muted-foreground">
                Copy and paste the following code into your project to use this component:
              </p>
              <div className="relative">
                <div className="absolute top-3 right-3">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="h-8 flex items-center gap-1"
                    onClick={handleCopyCode}
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </Button>
                </div>
                <div className="bg-background border rounded-lg p-4 pt-12 overflow-x-auto">
                  <pre className="text-sm">
                    <code>{component.code}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
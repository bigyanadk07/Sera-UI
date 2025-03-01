import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { components, categories, type ComponentCategory } from '@/lib/components';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Search, Package, ChevronRight, LayoutGrid } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export default function Components() {
  const [selectedCategory, setSelectedCategory] = useState<ComponentCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredComponents = components.filter((component) => {
    const matchesCategory = selectedCategory === 'all' || component.category === selectedCategory;
    const matchesSearch = component.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         component.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const isComponentList = location.pathname === '/components';

  // Get category counts for displaying in sidebar
  const categoryCount = categories.reduce((acc, category) => {
    acc[category] = components.filter(c => c.category === category).length;
    return acc;
  }, {} as Record<string, number>);

  // Get icon by category
  const getCategoryIcon = (category: string) => {
    const iconMap: Record<string, React.ReactNode> = {
      Forms: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 10h18" /><path d="M7 15h2" /><path d="M12 15h5" /></svg>,
      Navigation: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" /><path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" /><path d="M12 3v6" /></svg>,
      Display: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M3 9h18" /><path d="M3 15h18" /></svg>,
      Feedback: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>,
      Carousel: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="6" width="20" height="12" rx="2" /><path d="M7 12h.01" /><path d="M12 12h.01" /><path d="M17 12h.01" /></svg>
    };
    
    return iconMap[category] || <Package className="w-4 h-4" />;
  };

  return (
    <div className="container py-8 mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Components</h1>
        <p className="text-muted-foreground mt-1">Components SeraUI offers</p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="sticky top-24">
            <div className="space-y-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search components..."
                  className="pl-9 w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="p-4 bg-muted/30 rounded-lg border border-border/50">
                <h2 className="text-base font-medium mb-3">Categories</h2>
                <ScrollArea className="h-[calc(100vh-20rem)] pr-4">
                  <div className="space-y-1">
                    <Button
                      variant={selectedCategory === 'all' ? 'secondary' : 'ghost'}
                      className="w-full justify-between font-normal h-9"
                      onClick={() => setSelectedCategory('all')}
                    >
                      <span className="flex items-center">
                        <Package className="w-4 h-4 mr-2 text-muted-foreground" /> 
                        All Components
                      </span>
                      <Badge variant="outline" className="ml-auto">
                        {components.length}
                      </Badge>
                    </Button>
                    
                    <Separator className="my-2" />
                    
                    {categories.map((category) => (
                      <Button
                        key={category}
                        variant={selectedCategory === category ? 'secondary' : 'ghost'}
                        className="w-full justify-between font-normal h-9"
                        onClick={() => setSelectedCategory(category)}
                      >
                        <span className="flex items-center">
                          {getCategoryIcon(category)}
                          <span className="ml-2">{category}</span>
                        </span>
                        <Badge variant="outline" className="ml-auto">
                          {categoryCount[category]}
                        </Badge>
                      </Button>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {isComponentList && (
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-semibold">
                  {selectedCategory === 'all' ? 'All Components' : selectedCategory}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {filteredComponents.length} component{filteredComponents.length !== 1 ? 's' : ''}
                </p>
              </div>
              <div className="flex space-x-2">
                <Button 
                  size="sm" 
                  variant={viewMode === 'grid' ? 'secondary' : 'outline'}
                  onClick={() => setViewMode('grid')}
                >
                  <LayoutGrid className="h-4 w-4" />
                </Button>
                <Button 
                  size="sm" 
                  variant={viewMode === 'list' ? 'secondary' : 'outline'}
                  onClick={() => setViewMode('list')}
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="8" y1="6" x2="21" y2="6" />
                    <line x1="8" y1="12" x2="21" y2="12" />
                    <line x1="8" y1="18" x2="21" y2="18" />
                    <line x1="3" y1="6" x2="3.01" y2="6" />
                    <line x1="3" y1="12" x2="3.01" y2="12" />
                    <line x1="3" y1="18" x2="3.01" y2="18" />
                  </svg>
                </Button>
              </div>
            </div>
          )}
          
          {isComponentList ? (
            viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredComponents.map((component) => (
                  <Link key={component.id} to={`/components/${component.id}`}>
                    <div className="group relative overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-md hover:border-primary/20">
                      <div className="p-5">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center text-primary">
                            {getCategoryIcon(component.category)}
                          </div>
                          <h3 className="text-lg font-medium">{component.title}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-2">{component.description}</p>
                        <div className="mt-4 pt-3 border-t flex items-center text-sm text-muted-foreground">
                          <Badge variant="secondary" className="text-xs font-normal">
                            {component.category}
                          </Badge>
                          <span className="ml-auto text-xs font-medium text-primary group-hover:underline flex items-center">
                            View details <ChevronRight className="ml-1 h-3 w-3" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="space-y-3">
                {filteredComponents.map((component) => (
                  <Link key={component.id} to={`/components/${component.id}`}>
                    <div className="group relative overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-md hover:border-primary/20 p-4">
                      <div className="flex items-start md:items-center gap-4">
                        <div className="h-10 w-10 rounded-md bg-primary/10 flex-shrink-0 flex items-center justify-center text-primary">
                          {getCategoryIcon(component.category)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base font-medium">{component.title}</h3>
                          <p className="text-sm text-muted-foreground line-clamp-1">{component.description}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge variant="secondary" className="text-xs font-normal hidden md:inline-flex">
                            {component.category}
                          </Badge>
                          <Button variant="ghost" size="sm" className="group-hover:bg-primary/10">
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )
          ) : (
            <Outlet context={{ components }} />
          )}
        </main>
      </div>
    </div>
  );
}
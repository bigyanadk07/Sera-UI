import React from 'react';
import { ComponentExample } from '@/lib/types';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from '@/components/ui/carousel';


const CarouselDemo = () => (
  <Carousel className="w-full max-w-md mx-auto">
    <CarouselContent>
      <CarouselItem>
        <div className="p-6 bg-slate-100 rounded-md flex items-center justify-center h-40">
          <span className="text-3xl font-semibold text-black">1</span>
        </div>
      </CarouselItem>
      <CarouselItem>
        <div className="p-6 bg-slate-100 rounded-md flex items-center justify-center h-40">
          <span className="text-3xl font-semibold text-black">2</span>
        </div>
      </CarouselItem>
      <CarouselItem>
        <div className="p-6 bg-slate-100 rounded-md flex items-center justify-center h-40">
          <span className="text-3xl font-semibold text-black">3</span>
        </div>
      </CarouselItem>
    </CarouselContent>
    <div className="flex justify-center gap-2 mt-4">
      <CarouselPrevious />
      <CarouselNext />
    </div>
  </Carousel>
);

export const carouselExample: ComponentExample = {
  id: 'carousel',
  title: 'Carousel',
  description: 'A slideshow component for cycling through elements like images or slides of text.',
  category: 'Carousel',
  preview: 'https://images.unsplash.com/photo-1516214104703-d870798883c5?q=80&w=800&auto=format&fit=crop',
  code: `import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"

export function CarouselDemo() {
  return (
    <Carousel className="w-full max-w-md mx-auto">
      <CarouselContent>
        <CarouselItem>
          <div className="p-6 bg-slate-100 rounded-md flex items-center justify-center h-40">
            <span className="text-3xl font-semibold">Slide 1</span>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="p-6 bg-slate-100 rounded-md flex items-center justify-center h-40">
            <span className="text-3xl font-semibold">Slide 2</span>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="p-6 bg-slate-100 rounded-md flex items-center justify-center h-40">
            <span className="text-3xl font-semibold">Slide 3</span>
          </div>
        </CarouselItem>
      </CarouselContent>
      <div className="flex justify-center gap-2 mt-4">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  )
}`,
  component: React.createElement(CarouselDemo)
};
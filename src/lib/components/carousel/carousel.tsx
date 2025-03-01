import React, { useState, useEffect } from 'react';
import { ComponentExample } from '@/lib/types';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from '@/components/ui/carousel';

const EnhancedCarouselDemo = () => {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [progress, setProgress] = useState(0);

  // Track current slide and count
  useEffect(() => {
    if (!api) return;
    setCount(api.slideNodes().length);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
      setProgress(0);
    });
    setCurrent(api.selectedScrollSnap());
  }, [api]);

  // Setup autoplay
  useEffect(() => {
    if (!api || !autoplay) return;
    
    // Reset progress
    setProgress(0);
    
    // Progress update interval
    const intervalTime = 30; // Update progress every 30ms
    const autoplayTime = 5000; // 5 seconds per slide
    
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + (intervalTime / autoplayTime) * 100;
        return Math.min(newProgress, 100);
      });
    }, intervalTime);
    
    // Slide change interval
    const slideInterval = setTimeout(() => {
      api.scrollNext();
    }, autoplayTime);
    
    return () => {
      clearInterval(progressInterval);
      clearTimeout(slideInterval);
    };
  }, [api, autoplay, current]);

  // Toggle autoplay
  const toggleAutoplay = () => {
    setAutoplay(prev => !prev);
  };

  // Slide data
  const slides = [
    {
      title: "Mountain Expedition",
      description: "Explore majestic peaks and valleys",
      color: "from-blue-600 to-indigo-900"
    },
    {
      title: "Coastal Getaway",
      description: "Relax on pristine beaches",
      color: "from-cyan-500 to-blue-700"
    },
    {
      title: "Urban Experience",
      description: "Discover vibrant city culture",
      color: "from-violet-600 to-purple-900"
    },
    {
      title: "Forest Retreat",
      description: "Find peace among ancient trees",
      color: "from-emerald-600 to-green-900"
    }
  ];

  return (
    <div className="w-full max-w-3xl mx-auto relative">
      {/* Heading */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Featured Destinations</h2>
        <div className="text-sm font-medium">
          {current + 1} / {count}
        </div>
      </div>
      
      {/* Carousel */}
      <Carousel 
        setApi={setApi}
        className="w-full" 
        opts={{
          loop: true,
          align: "start"
        }}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="h-80 rounded-xl overflow-hidden relative shadow-lg">
                <div className={`absolute inset-0 bg-gradient-to-br ${slide.color}`}></div>
                <div className="absolute inset-0 bg-black/20"></div>
                
                {/* Text content */}
                <div className="relative h-full flex flex-col justify-end p-8 text-white">
                  <h3 className="text-3xl font-bold mb-2">{slide.title}</h3>
                  <p className="text-lg mb-6 opacity-90">{slide.description}</p>
                  <button className="bg-white text-black font-medium py-2 px-4 rounded-md w-fit hover:bg-white/90 transition-colors">
                    Explore Now
                  </button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Controls */}
        <div className="flex justify-center items-center mt-4 gap-4">
          <CarouselPrevious 
            variant="outline" 
            size="icon" 
            className="static translate-y-0 h-10 w-10 rounded-full border-gray-200"
          />
          
          <button 
            onClick={toggleAutoplay} 
            className="h-10 w-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            {autoplay ? (
              <span className="h-4 w-4 bg-gray-700 rounded-sm"></span>
            ) : (
              <span className="h-0 w-0 ml-1 border-t-8 border-b-8 border-r-0 border-l-12 border-t-transparent border-b-transparent border-l-gray-700"></span>
            )}
          </button>
          
          <CarouselNext 
            variant="outline" 
            size="icon" 
            className="static translate-y-0 h-10 w-10 rounded-full border-gray-200"
          />
        </div>
        
        {/* Progress bar */}
        <div className="mt-4 h-1 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-blue-600 transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-2 rounded-full transition-all ${
                current === index 
                  ? "w-8 bg-blue-600" 
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
};

export const carouselExample: ComponentExample = {
  id: 'carousel',
  title: 'Carousel',
  description: 'A slideshow component for cycling through elements with autoplay, progress tracking, and intuitive navigation.',
  category: 'Carousel',
  preview: 'https://images.unsplash.com/photo-1516214104703-d870798883c5?q=80&w=800&auto=format&fit=crop',
  code: `import { useState, useEffect } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from "@/components/ui/carousel"

export function CarouselDemo() {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [progress, setProgress] = useState(0);

  // Track current slide and count
  useEffect(() => {
    if (!api) return;
    setCount(api.slideNodes().length);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
      setProgress(0);
    });
    setCurrent(api.selectedScrollSnap());
  }, [api]);

  // Setup autoplay
  useEffect(() => {
    if (!api || !autoplay) return;
    
    const intervalTime = 30;
    const autoplayTime = 5000;
    
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + (intervalTime / autoplayTime) * 100;
        return Math.min(newProgress, 100);
      });
    }, intervalTime);
    
    const slideInterval = setTimeout(() => {
      api.scrollNext();
    }, autoplayTime);
    
    return () => {
      clearInterval(progressInterval);
      clearTimeout(slideInterval);
    };
  }, [api, autoplay, current]);

  // Toggle autoplay
  const toggleAutoplay = () => {
    setAutoplay(prev => !prev);
  };

  // Slide data
  const slides = [
    {
      title: "Mountain Expedition",
      description: "Explore majestic peaks and valleys",
      color: "from-blue-600 to-indigo-900"
    },
    {
      title: "Coastal Getaway",
      description: "Relax on pristine beaches",
      color: "from-cyan-500 to-blue-700"
    },
    {
      title: "Urban Experience",
      description: "Discover vibrant city culture",
      color: "from-violet-600 to-purple-900"
    },
    {
      title: "Forest Retreat",
      description: "Find peace among ancient trees",
      color: "from-emerald-600 to-green-900"
    }
  ];

  return (
    <div className="w-full max-w-3xl mx-auto relative">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Featured Destinations</h2>
        <div className="text-sm font-medium">
          {current + 1} / {count}
        </div>
      </div>
      
      <Carousel 
        setApi={setApi}
        className="w-full" 
        opts={{
          loop: true,
          align: "start"
        }}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="h-80 rounded-xl overflow-hidden relative shadow-lg">
                <div className={\`absolute inset-0 bg-gradient-to-br \${slide.color}\`}></div>
                <div className="absolute inset-0 bg-black/20"></div>
                
                <div className="relative h-full flex flex-col justify-end p-8 text-white">
                  <h3 className="text-3xl font-bold mb-2">{slide.title}</h3>
                  <p className="text-lg mb-6 opacity-90">{slide.description}</p>
                  <button className="bg-white text-black font-medium py-2 px-4 rounded-md w-fit hover:bg-white/90 transition-colors">
                    Explore Now
                  </button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <div className="flex justify-center items-center mt-4 gap-4">
          <CarouselPrevious 
            variant="outline" 
            size="icon" 
            className="static translate-y-0 h-10 w-10 rounded-full border-gray-200"
          />
          
          <button 
            onClick={toggleAutoplay} 
            className="h-10 w-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            {autoplay ? (
              <span className="h-4 w-4 bg-gray-700 rounded-sm"></span>
            ) : (
              <span className="h-0 w-0 ml-1 border-t-8 border-b-8 border-r-0 border-l-12 border-t-transparent border-b-transparent border-l-gray-700"></span>
            )}
          </button>
          
          <CarouselNext 
            variant="outline" 
            size="icon" 
            className="static translate-y-0 h-10 w-10 rounded-full border-gray-200"
          />
        </div>
        
        <div className="mt-4 h-1 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-blue-600 transition-all duration-100 ease-linear"
            style={{ width: \`\${progress}%\` }}
          />
        </div>
        
        <div className="flex justify-center gap-2 mt-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={\`h-2 rounded-full transition-all \${
                current === index 
                  ? "w-8 bg-blue-600" 
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              }\`}
              aria-label={\`Go to slide \${index + 1}\`}
            />
          ))}
        </div>
      </Carousel>
    </div>
  )
}`,
  component: React.createElement(EnhancedCarouselDemo)
};

export default carouselExample;
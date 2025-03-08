import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Box, Palette, Zap, Star, Shield, Code, Calendar, Settings, Users } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion, AnimatePresence } from 'framer-motion';

// Create a module-level variable to track first load
// This will persist across component remounts due to navigation
let isFirstLoad = true;

export default function Home() {
  const isFirstMount = useRef(isFirstLoad);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // After first load, set the flag to false
    if (isFirstLoad) {
      isFirstLoad = false;
    }
    
    // Component cleanup
    return () => {};
  }, []);

  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: <Box className="h-10 w-10" />,
      title: 'Ready-made Components',
      description: 'A comprehensive collection of pre-built components ready for your next project.',
    },
    {
      icon: <Palette className="h-10 w-10" />,
      title: 'Customizable Design',
      description: 'Easily customize components to match your brand and design requirements.',
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: 'Fast Implementation',
      description: 'Quick integration with copy-paste functionality and clear documentation.',
    },
    {
      icon: <Star className="h-10 w-10" />,
      title: 'Premium Quality',
      description: 'Meticulously crafted components that follow best practices and modern design trends.',
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: 'Accessibility Built-in',
      description: 'Every component is built with accessibility in mind, ensuring your app works for everyone.',
    },
    {
      icon: <Code className="h-10 w-10" />,
      title: 'Developer Friendly',
      description: 'Clean, well-documented code that makes customization and extension straightforward.',
    },
  ];

  const testimonials = [
    {
      quote: "These components saved me weeks of development time. The quality is outstanding.",
      author: "Dipesh Kumar Mandal",
      role: "Frontend Developer",
      company: "Wisdom Technnologies"
    },
    {
      quote: "I've used many component libraries, but this one stands out for its flexibility and design.",
      author: "Milan Yadav",
      role: "Co-Founder & Full Stack Developer",
      company: "Wisdom Technnologies"
    },
    {
      quote: "The documentation is excellent, making implementation a breeze even for junior developers.",
      author: "Chris Maharjan",
      role: "Frontend Developer",
      company: "Wisdom Technnologies"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const heroImageAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.2
      }
    }
  };

  // Function to conditionally apply animations
  const animateOnlyOnFirstLoad = (animationProps) => {
    // Return animation props only on first load, otherwise return empty object
    return isFirstMount.current ? animationProps : { animate: "visible" };
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Gradient Overlay */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              className="text-left space-y-6 max-w-2xl"
              initial={isFirstMount.current ? "hidden" : false}
              animate="visible"
              variants={fadeIn}
            >
              <motion.div 
                className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full font-medium text-sm mb-2"
                {...animateOnlyOnFirstLoad({
                  initial: { opacity: 0, x: -20 },
                  animate: { opacity: 1, x: 0 },
                  transition: { delay: 0.1 }
                })}
              >
                v1.0 Now Available
              </motion.div>
              <motion.h1 
                className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight"
                {...animateOnlyOnFirstLoad({
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.2, duration: 0.8 }
                })}
              >
                Beautiful UI Components for <span className="text-primary">Modern</span> Web Applications
              </motion.h1>
              <motion.p 
                className="text-xl text-muted-foreground"
                {...animateOnlyOnFirstLoad({
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: { delay: 0.4 }
                })}
              >
                A collection of professionally designed, fully customizable UI components
                built with React and Tailwind CSS. Perfect for your next project.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                {...animateOnlyOnFirstLoad({
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.5 }
                })}
              >
                <Button asChild size="lg" className="rounded-full">
                  <Link to="/components">
                    Browse Components
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full">
                  <Link to="/documentation">View Documentation</Link>
                </Button>
              </motion.div>
              <motion.div 
                className="pt-6 flex flex-col sm:flex-row items-center gap-4 text-sm"
                {...animateOnlyOnFirstLoad({
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: { delay: 0.6 }
                })}
              >
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3">
                    {/* Replace letters with avatar images */}
                    {['Wisdom Technologies', 'Sera Corporation'].map((company, i) => (
                      <motion.div 
                        key={i} 
                        className="w-10 h-10 rounded-full bg-background border-2 border-background shadow-sm overflow-hidden"
                        title={`${company} uses our components`}
                        {...animateOnlyOnFirstLoad({
                          initial: { x: -20, opacity: 0 },
                          animate: { x: 0, opacity: 1 },
                          transition: { delay: 0.7 + i * 0.1 }
                        })}
                      >
                        <div className={`w-full h-full flex items-center justify-center bg-primary-${i*100 + 100}`}>
                          <span className="font-semibold text-xs text-white">{company.charAt(0).toUpperCase()}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <motion.svg 
                        key={i} 
                        className="w-4 h-4 fill-current" 
                        viewBox="0 0 24 24"
                        {...animateOnlyOnFirstLoad({
                          initial: { opacity: 0, rotate: -30 },
                          animate: { opacity: 1, rotate: 0 },
                          transition: { delay: 0.8 + i * 0.1 }
                        })}
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </motion.svg>
                    ))}
                  </div>
                  <span className="text-muted-foreground">Trusted by <span className="font-semibold text-foreground">thousands of</span> developers.</span>
                </div>
              </motion.div>
            </motion.div>
            <motion.div 
              className="w-full lg:w-1/2 relative"
              variants={heroImageAnimation}
              initial={isFirstMount.current ? "hidden" : false}
              animate="visible"
            >
              <div className="relative bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-4 shadow-xl">
                <div className="aspect-video bg-background rounded-lg overflow-hidden border flex items-center justify-center">
                  <motion.div 
                    className="grid grid-cols-2 gap-4 p-6 w-full max-w-md"
                    {...animateOnlyOnFirstLoad({
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      transition: { delay: 0.5, duration: 0.5 }
                    })}
                  >
                    {[
                      { icon: <Box className="h-8 w-8 text-primary/70" />, delay: 0.7 },
                      { icon: <Calendar className="h-8 w-8 text-primary/70" />, delay: 0.8 },
                      { icon: <Settings className="h-8 w-8 text-primary/70" />, delay: 0.9 },
                      { icon: <Users className="h-8 w-8 text-primary/70" />, delay: 1.0 }
                    ].map((item, index) => (
                      <motion.div 
                        key={index}
                        className="h-24 rounded-lg bg-primary/10 flex items-center justify-center"
                        {...animateOnlyOnFirstLoad({
                          initial: { opacity: 0, scale: 0.8 },
                          animate: { opacity: 1, scale: 1 },
                          transition: { 
                            delay: item.delay,
                            type: "spring",
                            stiffness: 200,
                            damping: 20
                          }
                        })}
                        whileHover={{ 
                          scale: 1.05, 
                          backgroundColor: "rgba(var(--primary), 0.2)" 
                        }}
                      >
                        {item.icon}
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
                <motion.div 
                  className="absolute -bottom-3 -right-3 w-24 h-24 bg-primary/20 rounded-full blur-xl"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.7, 0.5]
                  }}
                  transition={{ 
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut"
                  }}
                />
                <motion.div 
                  className="absolute -top-3 -left-3 w-20 h-20 bg-primary/30 rounded-full blur-xl"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.6, 0.8, 0.6]
                  }}
                  transition={{ 
                    repeat: Infinity,
                    duration: 4,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        </div>
      </section>

      {/* Features Section - Interactive */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            {...animateOnlyOnFirstLoad({
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.6 }
            })}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to build modern, accessible, and beautiful user interfaces.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial={isFirstMount.current ? "hidden" : false}
            animate={isFirstMount.current ? "visible" : undefined}
            whileInView={isFirstMount.current ? undefined : "visible"}
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ y: -5 }}
              >
                <Card
                  className={`transition-all duration-300 cursor-pointer border-2 ${index === activeFeature ? 'border-primary scale-105 shadow-lg' : 'border-transparent hover:border-primary/50'}`}
                  onClick={() => setActiveFeature(index)}
                >
                  <CardContent className="p-6">
                    <motion.div 
                      className={`text-primary mb-4 transition-transform duration-300 ${index === activeFeature ? 'scale-110' : ''}`}
                      animate={index === activeFeature ? { rotate: [0, 5, 0, -5, 0] } : {}}
                      transition={index === activeFeature ? { 
                        duration: 0.5,
                        repeat: 0,
                        ease: "easeInOut"
                      } : {}}
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Code Preview Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              className="w-full lg:w-1/2"
              {...animateOnlyOnFirstLoad({
                initial: { opacity: 0, x: -50 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true },
                transition: { duration: 0.6 }
              })}
            >
              <div className="bg-muted rounded-xl p-4 shadow-md">
                <motion.pre 
                  className="text-sm overflow-x-auto p-4 rounded bg-background"
                  {...animateOnlyOnFirstLoad({
                    initial: { opacity: 0 },
                    whileInView: { opacity: 1 },
                    viewport: { once: true },
                    transition: { delay: 0.3, duration: 0.8 }
                  })}
                >
                  <code className="text-foreground">
{`import { Button } from '@/components/ui/button';

export function App() {
  return (
    <Button variant="primary" size="lg">
      Get Started
    </Button>
  );
}`}
                  </code>
                </motion.pre>
              </div>
            </motion.div>
            <motion.div 
              className="w-full lg:w-1/2 space-y-6"
              {...animateOnlyOnFirstLoad({
                initial: { opacity: 0, x: 50 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true },
                transition: { duration: 0.6 }
              })}
            >
              <h2 className="text-3xl md:text-4xl font-bold">Simple to Implement</h2>
              <p className="text-lg text-muted-foreground">
                Our components are designed to be easy to use and implement in your projects.
                Just import what you need and you're ready to go.
              </p>
              <motion.ul 
                className="space-y-3"
                variants={staggerContainer}
                initial={isFirstMount.current ? "hidden" : false}
                animate={isFirstMount.current ? "visible" : undefined}
                whileInView={isFirstMount.current ? undefined : "visible"}
                viewport={{ once: true }}
              >
                {[
                  "TypeScript support out of the box",
                  "Full dark mode support",
                  "Copy-paste ready code examples"
                ].map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-center gap-2"
                    variants={fadeIn}
                    custom={index}
                  >
                    <motion.div 
                      className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center"
                      {...animateOnlyOnFirstLoad({
                        initial: { scale: 0 },
                        whileInView: { scale: 1 },
                        viewport: { once: true },
                        transition: { delay: 0.3 + index * 0.1 }
                      })}
                    >
                      <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </motion.div>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
              <motion.div
                {...animateOnlyOnFirstLoad({
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { delay: 0.6 }
                })}
              >
                <Button asChild>
                  <Link to="/documentation">
                    Explore the Docs
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            {...animateOnlyOnFirstLoad({
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.6 }
            })}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Developers Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of satisfied developers building with our components.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial={isFirstMount.current ? "hidden" : false}
            animate={isFirstMount.current ? "visible" : undefined}
            whileInView={isFirstMount.current ? undefined : "visible"}
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index} 
                className="bg-background p-6 rounded-xl shadow-sm border"
                variants={fadeIn}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      {...animateOnlyOnFirstLoad({
                        initial: { opacity: 0, y: 10 },
                        whileInView: { opacity: 1, y: 0 },
                        viewport: { once: true },
                        transition: { delay: 0.1 * i }
                      })}
                    >
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    </motion.div>
                  ))}
                </div>
                <p className="text-foreground mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm text-slate-500">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section with Enhanced Design */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-background to-secondary/10"></div>
        <motion.div 
          className="container mx-auto px-4 relative z-10"
          {...animateOnlyOnFirstLoad({
            initial: { opacity: 0, y: 50 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.8 }
          })}
        >
          <motion.div 
            className="max-w-3xl mx-auto bg-background rounded-2xl p-8 md:p-12 shadow-xl border text-center"
            {...animateOnlyOnFirstLoad({
              initial: { scale: 0.9 },
              whileInView: { scale: 1 },
              viewport: { once: true },
              transition: { 
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: 0.2
              }
            })}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              {...animateOnlyOnFirstLoad({
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { delay: 0.3 }
              })}
            >
              Ready to Build Something Amazing?
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
              {...animateOnlyOnFirstLoad({
                initial: { opacity: 0 },
                whileInView: { opacity: 1 },
                viewport: { once: true },
                transition: { delay: 0.4 }
              })}
            >
              Start building your next project with our beautiful, responsive, and
              accessible UI components.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              {...animateOnlyOnFirstLoad({
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { delay: 0.5 }
              })}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" className="rounded-full">
                  <Link to="/components">Get Started Today</Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild variant="outline" size="lg" className="rounded-full">
                  <Link to="/documentation">Read Documentation</Link>
                </Button>
              </motion.div>
            </motion.div>
            <motion.div 
              className="mt-8 pt-8 border-t text-sm text-muted-foreground"
              {...animateOnlyOnFirstLoad({
                initial: { opacity: 0 },
                whileInView: { opacity: 1 },
                viewport: { once: true },
                transition: { delay: 0.6 }
              })}
            >
              <p>We're Open Source. No credit card required. Start building for free.</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
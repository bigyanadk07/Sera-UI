import { Button } from '@/components/ui/button';
import { Github, Twitter, Mail, ArrowRight, Heart, Code, BookOpen, Users, Shield } from 'lucide-react';
import { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = [
    {
      name: "Bigyan Adhikari",
      role: "Lead Developer",
      bio: "Full-stack developer with 2+ years of experience in React ecosystem."
    },
  ];

  const values = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Quality",
      description: "We maintain high standards for code quality, performance, and design consistency."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community",
      description: "We believe in the power of community and collaborative development."
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Education",
      description: "We're committed to helping developers learn and grow through documentation and examples."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Background Pattern */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-6">
              <Heart className="mr-1 h-4 w-4" /> Made with passion
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About UI Library</h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We're building the next generation of UI components to empower developers 
              to create beautiful, accessible, and performant web applications.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <a href="#our-story">Our Story</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="https://github.com/your-username/ui-library" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </section>

      {/* Our Story Section */}
      <section id="our-story" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-border"></div>
              <span className="text-primary font-medium">Our Story</span>
              <div className="h-px flex-1 bg-border"></div>
            </div>
            <h2 className="text-3xl font-bold mb-6 text-center">How It All Started</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                SeraUI began in late 2023 as a passion project to solve the common challenges 
                developers face when building modern web applications. What started as a small 
                collection of components has grown into a comprehensive library.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our journey has been guided by a simple philosophy: building user interfaces 
                should be enjoyable, not frustrating. We've focused on creating components 
                that are not only beautiful but also accessible, customizable, and easy to use.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Today, we're proud to see our components powering applications across different organizations. And we're just getting started.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Mission & Values</h2>
              <p className="text-xl text-muted-foreground">
                Building better UIs through thoughtful design and accessible implementation.
              </p>
            </div>
            
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-4">Mission</h3>
              <div className="bg-primary/5 border border-primary/10 rounded-lg p-6">
                <p className="text-lg mb-0">
                  We believe that building great user interfaces should be simple and
                  enjoyable. Our mission is to provide developers with a comprehensive
                  set of high-quality, accessible, and customizable UI components that
                  make it easy to create beautiful web applications.
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">Values</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {values.map((value, index) => (
                  <Card key={index} className="border-0 shadow-sm">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                        {value.icon}
                      </div>
                      <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose UI Library?</h2>
              <p className="text-xl text-muted-foreground">
                Our features are designed with developers and end-users in mind.
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center md:mt-2">
                  <span className="text-3xl">🎨</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Beautiful Design</h3>
                  <p className="text-muted-foreground mb-4">
                    Our components are meticulously crafted with attention to detail and modern
                    design principles. Each component is visually cohesive and follows contemporary UI trends.
                  </p>
                  <p className="text-muted-foreground">
                    We prioritize aesthetics without sacrificing functionality, ensuring your applications 
                    not only work well but look stunning too.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center md:mt-2">
                  <span className="text-3xl">♿️</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Accessibility First</h3>
                  <p className="text-muted-foreground mb-4">
                    Accessibility isn't an afterthought—it's built into the foundation of our components.
                    We follow WAI-ARIA guidelines and best practices to ensure your applications are usable by everyone.
                  </p>
                  <p className="text-muted-foreground">
                    From keyboard navigation to screen reader support, we've taken care of the details 
                    so you can build inclusive user experiences with confidence.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center md:mt-2">
                  <span className="text-3xl">🎯</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Developer Experience</h3>
                  <p className="text-muted-foreground mb-4">
                    We believe that great tools should be a joy to use. Our components feature intuitive APIs,
                    consistent patterns, and comprehensive documentation to make your development experience smooth.
                  </p>
                  <p className="text-muted-foreground">
                    From detailed code examples to interactive demonstrations, we provide the resources
                    you need to implement our components quickly and effectively.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center md:mt-2">
                  <Code className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Customization & Flexibility</h3>
                  <p className="text-muted-foreground mb-4">
                    We understand that every project is unique. That's why our components are designed
                    to be highly customizable while maintaining their accessibility and functionality.
                  </p>
                  <p className="text-muted-foreground">
                    With support for theming, style variants, and component composition, you can adapt
                    our library to match your brand identity and specific requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Meet The Team</h2>
              <p className="text-xl text-muted-foreground">
                The people behind UI Library who make it all possible.
              </p>
            </div>
            
            <div className="grid md:grid-cols-1 gap-6">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-card text-card-foreground rounded-lg p-6 border shadow-sm">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xl font-semibold text-primary">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-center mb-1">{member.name}</h3>
                  <p className="text-sm text-primary text-center mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-center">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Source */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Open Source</h2>
              <p className="text-xl text-muted-foreground mb-6">
                UI Library is proudly open source and community-driven.
              </p>
            </div>
            
            <div className="bg-card border rounded-xl p-8 text-center mb-8">
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We believe in the power of open source to drive innovation and quality. Our project
                is freely available for anyone to use, modify, and contribute to. Whether you're fixing bugs,
                improving documentation, or proposing new features, your help is invaluable to making
                UI Library better for everyone.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg">
                  <a
                    href="https://github.com/bigyanadk07"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                  >
                    <Github className="mr-2 h-5 w-5" />
                    Star on GitHub
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a
                    href="https://github.com/your-username/ui-library/blob/main/CONTRIBUTING.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                  >
                    <Code className="mr-2 h-5 w-5" />
                    Contribute
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-4 flex-wrap">
              {/* <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-sm">MIT License</span>
              </div> */}
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span className="text-sm">TypeScript</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                <span className="text-sm">React</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
                <span className="text-sm">Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
              <p className="text-xl text-muted-foreground">
                Have questions, feedback, or want to contribute? We'd love to hear from you.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <a 
                href="https://github.com/bigyanadk07" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-card hover:bg-accent/50 border rounded-lg p-6 text-center transition-colors"
              >
                <Github className="h-8 w-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold mb-2">GitHub</h3>
                <p className="text-sm text-muted-foreground">Report issues or contribute to the project</p>
              </a>
              
              <a 
                href="https://x.com/SeraUICorp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-card hover:bg-accent/50 border rounded-lg p-6 text-center transition-colors"
              >
                <Twitter className="h-8 w-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold mb-2">Twitter</h3>
                <p className="text-sm text-muted-foreground">Follow us for updates and tips</p>
              </a>
              
              <a 
                href="mailto:seracorp0@gmail.com" 
                className="bg-card hover:bg-accent/50 border rounded-lg p-6 text-center transition-colors"
              >
                <Mail className="h-8 w-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-sm text-muted-foreground">Reach out directly for inquiries</p>
              </a>
            </div>
            
            <div className="text-center">
              <Button asChild>
                <a href="/documentation">
                  Explore Documentation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
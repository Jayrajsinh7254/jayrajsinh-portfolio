
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: 'E-Commerce Dashboard',
      description: 'A comprehensive dashboard for managing e-commerce operations with real-time analytics, inventory management, and sales tracking.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      category: 'Web App',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/Jayrajsinh7254/trend-maven-boutique',
    },
    {
      title: 'Healthy Food Manage',
      description: 'A collaborative task management application with drag-and-drop functionality, team collaboration features, and deadline tracking.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop',
      category: 'Web App',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/Jayrajsinh7254/foodie-fit-guide',
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing modern design principles with smooth animations and optimal performance.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop',
      category: 'UI/UX',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      title: 'Weather App',
      description: 'A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
      category: 'Mobile App',
      technologies: ['React Native', 'Weather API', 'Redux'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.dev/Jayrajsinh7254/modern-front-frame',
    },
    // {
    //   title: 'Learning Platform',
    //   description: 'An interactive learning platform with video streaming, progress tracking, and gamification elements.',
    //   image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
    //   category: 'Web App',
    //   technologies: ['React', 'Firebase', 'Stripe API'],
    //   liveUrl: 'https://example.com',
    //   githubUrl: 'https://github.com',
    // },
    // {
    //   title: 'Design System',
    //   description: 'A comprehensive design system with reusable components, documentation, and theming capabilities.',
    //   image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
    //   category: 'UI/UX',
    //   technologies: ['React', 'Storybook', 'CSS Variables'],
    //   liveUrl: 'https://example.com',
    //   githubUrl: 'https://github.com',
    // },
  ];

  const categories = ['All', 'Web App', 'UI/UX', 'Mobile App'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="section-padding bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and side projects
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                filter === category 
                  ? 'bg-primary text-primary-foreground' 
                  : 'border-primary text-primary hover:bg-primary hover:text-primary-foreground'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.title} 
              className="overflow-hidden glass-effect hover:scale-105 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <Button
                      size="sm"
                      className="bg-background/80 text-foreground hover:bg-background"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      className="bg-background/80 text-foreground hover:bg-background"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-primary">{project.title}</h3>
                  <Badge variant="secondary">{project.category}</Badge>
                </div>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className="text-xs border-primary/30 text-primary"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <Button
                    size="sm"
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;


import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card/50"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-400/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Profile image */}
        <div className="mb-8 animate-fade-in">
          <img
            src="/lovable-uploads/a77505f7-40db-4110-9a5b-700e5d5b427a.png"
            alt="Jayrajsinh Chavda"
            className="w-32 h-32 rounded-full mx-auto border-4 border-primary/20 shadow-xl object-cover"
          />
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
          Hi, I'm{' '}
          <span className="gradient-text">Jayrajsinh Chavda</span>
        </h1>
        
        <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 animate-fade-in-up delay-200">
          Passionate Front-End Developer
        </h2>
        
        <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-300">
          I craft beautiful, responsive, and user-friendly web experiences using modern technologies. 
          Let's build something amazing together.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up delay-500">
          <Button
            onClick={scrollToProjects}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </Button>
          <Button
            onClick={scrollToContact}
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-3 rounded-lg transition-all duration-300"
          >
            Contact Me
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="animate-bounce-subtle">
          <ArrowDown className="w-6 h-6 mx-auto text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

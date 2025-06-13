
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/jayrajsinh-chavda-82116825b/',
      icon: Linkedin,
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Jayrajsinh7254',
      icon: Github,
    },
    {
      name: 'Email',
      url: 'jayrajsinhchavda87@gmail.com',
      icon: Mail,
    }
  ];

  return (
    <footer className="bg-card/50 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold gradient-text mb-2">Jayrajsinh Chavda</h3>
            <p className="text-muted-foreground">Front-End Developer</p>
          </div>

          <div className="flex items-center space-x-6 mb-6 md:mb-0">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          <Button
            onClick={scrollToTop}
            variant="outline"
            size="sm"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <ArrowUp className="w-4 h-4 mr-2" />
            Back to Top
          </Button>
        </div>

        <hr className="border-border my-8" />

        <div className="text-center text-muted-foreground">
          <p>&copy; {currentYear} Jayrajsinh Chavda. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const About = () => {
  const downloadResume = () => {
    // In a real implementation, this would download the actual resume file
    window.open('/resume.pdf', '_blank');
  };

  return (
    <section id="about" className="section-padding bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 gradient-text">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know the person behind the code
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="p-8 glass-effect">
              <h3 className="text-2xl font-semibold mb-4 text-primary">My Journey</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                With over 1 years of experience in front-end development, I specialize in creating 
                intuitive, responsive, and performant web applications. My passion lies in bridging 
                the gap between design and functionality, ensuring every user interaction is 
                meaningful and delightful.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I'm constantly learning and adapting to new technologies, with a focus on React, 
                TypeScript, and modern web standards. When I'm not coding, you'll find me 
                exploring design trends, contributing to open-source projects, or mentoring 
                aspiring developers.
              </p>
            </Card>

            <Card className="p-8 glass-effect">
              <h3 className="text-2xl font-semibold mb-4 text-primary">What I Do</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Responsive Web Development
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  React & TypeScript Applications
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  UI/UX Implementation
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Performance Optimization
                </li>
                {/* <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Cross-browser Compatibility
                </li> */}
              </ul>
            </Card>

            <Button
              onClick={downloadResume}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Download Resume
            </Button>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
                alt="Workspace"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-primary/20 to-teal-400/20 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/jayrajsinh-chavda-82116825b/',
      icon: Linkedin,
      color: 'hover:text-blue-400'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Jayrajsinh7254',
      icon: Github,
      color: 'hover:text-gray-400'
    },
    {
      name: 'Email',
      url: 'chavdajayrajsinh87@gmail.com',
      icon: Mail,
      color: 'hover:text-primary'
    }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 gradient-text">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's discuss your next project or just say hello
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-8 glass-effect">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Let's Connect</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I'm always excited to work on new projects and collaborate with fellow developers, 
                designers, and entrepreneurs. Whether you have a project in mind or just want to 
                chat about technology, feel free to reach out!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">jayrajsinh87@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-xs text-primary-foreground">📍</span>
                  </div>
                  <span className="text-muted-foreground">Ahmedabad, Gujarat</span>
                </div>
              </div>
            </Card>

            {/* Social Media */}
            <Card className="p-8 glass-effect">
              <h3 className="text-xl font-semibold mb-6 text-primary">Follow Me</h3>
              <div className="flex space-x-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center w-12 h-12 rounded-full bg-muted/50 transition-all duration-300 hover:scale-110 ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8 glass-effect">
            <h3 className="text-2xl font-semibold mb-6 text-primary">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-background/50 border-muted focus:border-primary"
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-background/50 border-muted focus:border-primary"
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-background/50 border-muted focus:border-primary resize-none"
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;

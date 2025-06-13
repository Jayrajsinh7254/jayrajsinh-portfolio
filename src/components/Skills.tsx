
import React from 'react';
import { Card } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Technologies',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'JavaScript (ES6+)', level: 95 },
        { name: 'HTML5', level: 98 },
        { name: 'CSS3/SCSS', level: 92 },
        { name: 'Tailwind CSS', level: 88 },
      ]
    },
    {
      title: 'Tools & Frameworks',
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'Webpack/Vite', level: 80 },
        { name: 'Node.js', level: 75 },
        { name: 'Next.js', level: 85 },
        { name: 'Figma', level: 82 },
        { name: 'Jest/Testing', level: 78 },
      ]
    },
    {
      title: 'Soft Skills',
      skills: [
        { name: 'Problem Solving', level: 95 },
        { name: 'Team Collaboration', level: 92 },
        { name: 'Communication', level: 88 },
        { name: 'Project Management', level: 85 },
        { name: 'Mentoring', level: 80 },
        { name: 'Adaptability', level: 90 },
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 gradient-text">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiencies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={category.title} className="p-6 glass-effect hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-6 text-primary">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-primary to-teal-400 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 6 + skillIndex) * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Technology icons section */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8 text-primary">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind', 'Git', 'Figma'].map((tech) => (
              <div
                key={tech}
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                  <span className="text-xs font-bold">{tech.charAt(0)}</span>
                </div>
                <span className="text-sm font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

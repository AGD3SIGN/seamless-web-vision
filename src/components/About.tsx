
import React from 'react';

const About = () => {
  const experiences = [
    {
      year: '2023',
      title: 'Senior Frontend Developer',
      company: 'Tech Innovations Inc.',
      description: 'Led development of responsive web applications using React and TypeScript.',
    },
    {
      year: '2022',
      title: 'Full Stack Developer',
      company: 'Digital Solutions Co.',
      description: 'Built scalable web platforms with modern JavaScript frameworks.',
    },
    {
      year: '2021',
      title: 'Freelance Web Developer',
      company: 'Independent',
      description: 'Started freelance career focusing on small business websites.',
    },
  ];

  return (
    <section id="about" className="section bg-[var(--bg-color)]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div data-aos="fade-right">
            <h2 className="font-title text-[var(--text-color)] mb-8">
              About <span className="text-[var(--accent-color)]">Brandon</span>
            </h2>
            
            <div className="space-y-6 text-[var(--text-secondary)]">
              <p className="text-lg leading-relaxed">
                With over 5 years of experience in web development, I specialize in creating 
                modern, accessible, and high-performance web applications that drive business growth.
              </p>
              
              <p className="text-lg leading-relaxed">
                My approach combines technical expertise with a deep understanding of user experience, 
                ensuring every project not only looks great but performs exceptionally across all devices.
              </p>
              
              <p className="text-lg leading-relaxed">
                I believe in the power of clean code, semantic HTML, and progressive enhancement 
                to create web experiences that are inclusive and accessible to everyone.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-[var(--accent-color)]">
                <i className="ri-code-line text-xl"></i>
                <span className="font-medium">Clean Code</span>
              </div>
              <div className="flex items-center gap-2 text-[var(--accent-color)]">
                <i className="ri-responsive-line text-xl"></i>
                <span className="font-medium">Responsive Design</span>
              </div>
              <div className="flex items-center gap-2 text-[var(--accent-color)]">
                <i className="ri-speed-line text-xl"></i>
                <span className="font-medium">Performance</span>
              </div>
            </div>
          </div>

          {/* Experience Timeline */}
          <div data-aos="fade-left">
            <h3 className="font-title text-2xl text-[var(--text-color)] mb-8">Experience</h3>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className="relative pl-8 border-l-2 border-[var(--border)] pb-8 last:pb-0"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  {/* Timeline dot */}
                  <div className="absolute w-4 h-4 bg-[var(--accent-color)] rounded-full -left-2 top-0"></div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium text-[var(--accent-color)] bg-[var(--accent-color)] bg-opacity-10 px-3 py-1 rounded-full">
                        {exp.year}
                      </span>
                    </div>
                    <h4 className="font-title text-xl text-[var(--text-color)]">{exp.title}</h4>
                    <p className="font-medium text-[var(--text-secondary)]">{exp.company}</p>
                    <p className="text-[var(--text-secondary)] leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


import React, { useState } from 'react';
import ProjectModal from './ProjectModal';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Full Stack Development',
      description: 'Modern e-commerce platform with advanced search, payment integration, and real-time inventory management.',
      image: '/placeholder.svg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      caseStudy: {
        challenge: 'The client needed a scalable e-commerce solution that could handle high traffic and provide excellent user experience.',
        solution: 'Built a modern React-based frontend with Node.js backend, implementing advanced features like real-time inventory, smart search, and seamless checkout.',
        results: ['40% increase in conversion rate', '60% faster page load times', '25% reduction in cart abandonment'],
        features: ['Real-time inventory management', 'Advanced product search', 'Secure payment processing', 'Mobile-optimized design'],
        timeline: '8 weeks',
        role: 'Full Stack Developer'
      }
    },
    {
      id: 2,
      title: 'SaaS Dashboard',
      category: 'Frontend Development',
      description: 'Comprehensive analytics dashboard with real-time data visualization and customizable reporting features.',
      image: '/placeholder.svg',
      technologies: ['React', 'TypeScript', 'D3.js', 'REST API'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      caseStudy: {
        challenge: 'Create an intuitive dashboard that could display complex data in an easy-to-understand format for non-technical users.',
        solution: 'Developed a responsive React dashboard with interactive charts, customizable widgets, and real-time data updates.',
        results: ['50% improvement in user engagement', '35% reduction in support tickets', '90% user satisfaction score'],
        features: ['Interactive data visualization', 'Customizable widgets', 'Real-time updates', 'Export functionality'],
        timeline: '6 weeks',
        role: 'Frontend Developer & UX Designer'
      }
    },
    {
      id: 3,
      title: 'Healthcare Portal',
      category: 'Web Application',
      description: 'Patient management system with appointment scheduling, medical records, and secure communication features.',
      image: '/placeholder.svg',
      technologies: ['React', 'Firebase', 'Material-UI', 'WebRTC'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      caseStudy: {
        challenge: 'Build a HIPAA-compliant healthcare portal that ensures patient privacy while providing seamless user experience.',
        solution: 'Implemented secure authentication, encrypted data storage, and intuitive interface for both patients and healthcare providers.',
        results: ['80% reduction in appointment scheduling time', '95% user adoption rate', 'HIPAA compliance achieved'],
        features: ['Secure patient portal', 'Appointment scheduling', 'Medical record management', 'Video consultations'],
        timeline: '12 weeks',
        role: 'Full Stack Developer'
      }
    },
    {
      id: 4,
      title: 'Restaurant Website',
      category: 'Web Design & Development',
      description: 'Modern restaurant website with online ordering, table reservations, and integrated payment system.',
      image: '/placeholder.svg',
      technologies: ['React', 'Gatsby', 'Contentful', 'Stripe'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      caseStudy: {
        challenge: 'Create an engaging restaurant website that drives online orders and table reservations while showcasing the brand.',
        solution: 'Built a visually stunning website with optimized performance, online ordering system, and seamless reservation flow.',
        results: ['200% increase in online orders', '150% boost in table reservations', '3x faster loading times'],
        features: ['Online ordering system', 'Table reservation', 'Menu management', 'Customer reviews'],
        timeline: '4 weeks',
        role: 'Web Designer & Developer'
      }
    }
  ];

  const handleProjectClick = (project) => {
    console.log('Opening project modal:', project.title);
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    console.log('Closing project modal');
    setSelectedProject(null);
  };

  return (
    <section id="portfolio" className="section bg-[var(--bg-color)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="font-title text-[var(--text-color)] mb-6">
            Featured <span className="text-[var(--accent-color)]">Projects</span>
          </h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
            A showcase of recent projects demonstrating expertise in modern web development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <article 
              key={project.id}
              className="card group cursor-pointer hover:shadow-2xl"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              onClick={() => handleProjectClick(project)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleProjectClick(project);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`View details for ${project.title}`}
            >
              <figure className="mb-6">
                <div className="aspect-video bg-[var(--border)] rounded-lg overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={`Screenshot of ${project.title}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </figure>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-[var(--accent-color)] bg-[var(--accent-color)] bg-opacity-10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <i className="ri-arrow-right-line text-[var(--accent-color)] group-hover:translate-x-2 transition-transform"></i>
                </div>
                
                <h3 className="font-title text-xl text-[var(--text-color)] group-hover:text-[var(--accent-color)] transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-xs px-2 py-1 bg-[var(--hover-bg)] text-[var(--text-secondary)] rounded border border-[var(--border)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="400">
          <a 
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const contactSection = document.querySelector('#contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="btn btn-primary text-lg px-8 py-4"
          >
            <i className="ri-chat-1-line"></i>
            Let's Build Something Amazing
          </a>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
};

export default Portfolio;

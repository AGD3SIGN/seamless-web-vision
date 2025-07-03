
import React, { useEffect } from 'react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  caseStudy: {
    challenge: string;
    solution: string;
    results: string[];
    features: string[];
    timeline: string;
    role: string;
  };
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    
    // Handle escape key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    
    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="modal-overlay"
      onClick={handleOverlayClick}
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-title"
    >
      <div className="modal-content">
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          <i className="ri-close-line"></i>
        </button>

        <div className="space-y-8">
          {/* Header */}
          <header>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm font-medium text-[var(--accent-color)] bg-[var(--accent-color)] bg-opacity-10 px-3 py-1 rounded-full">
                {project.category}
              </span>
              <span className="text-sm text-[var(--text-secondary)]">
                {project.caseStudy.timeline}
              </span>
            </div>
            <h1 id="modal-title" className="font-title text-3xl text-[var(--text-color)] mb-4">
              {project.title}
            </h1>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <a 
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <i className="ri-external-link-line"></i>
                View Live Site
              </a>
              <a 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <i className="ri-github-line"></i>
                View Code
              </a>
            </div>
          </header>

          {/* Project Image */}
          <figure className="aspect-video bg-[var(--border)] rounded-lg overflow-hidden">
            <img 
              src={project.image} 
              alt={`Screenshot of ${project.title}`}
              className="w-full h-full object-cover"
            />
          </figure>

          {/* Case Study Content */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Challenge & Solution */}
            <div className="space-y-6">
              <section>
                <h2 className="font-title text-xl text-[var(--text-color)] mb-3">
                  The Challenge
                </h2>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {project.caseStudy.challenge}
                </p>
              </section>

              <section>
                <h2 className="font-title text-xl text-[var(--text-color)] mb-3">
                  The Solution
                </h2>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {project.caseStudy.solution}
                </p>
              </section>
            </div>

            {/* Results & Features */}
            <div className="space-y-6">
              <section>
                <h2 className="font-title text-xl text-[var(--text-color)] mb-3">
                  Results Achieved
                </h2>
                <ul className="space-y-2">
                  {project.caseStudy.results.map((result, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <i className="ri-check-line text-[var(--accent-color)]"></i>
                      <span className="text-[var(--text-secondary)]">{result}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="font-title text-xl text-[var(--text-color)] mb-3">
                  Key Features
                </h2>
                <ul className="space-y-2">
                  {project.caseStudy.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <i className="ri-star-line text-[var(--accent-color)]"></i>
                      <span className="text-[var(--text-secondary)]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>

          {/* Technologies & Role */}
          <div className="border-t border-[var(--border)] pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-title text-lg text-[var(--text-color)] mb-3">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-[var(--hover-bg)] text-[var(--text-secondary)] rounded border border-[var(--border)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-title text-lg text-[var(--text-color)] mb-3">
                  My Role
                </h3>
                <p className="text-[var(--text-secondary)]">
                  {project.caseStudy.role}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;

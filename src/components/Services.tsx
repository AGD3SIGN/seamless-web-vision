
import React from 'react';

const Services = () => {
  const services = [
    {
      icon: 'ri-code-box-line',
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies like React, TypeScript, and Node.js.',
      features: ['Responsive Design', 'SEO Optimization', 'Performance Focused', 'Cross-browser Compatible']
    },
    {
      icon: 'ri-layout-3-line',
      title: 'UI/UX Design',
      description: 'User-centered design that combines aesthetics with functionality to create engaging digital experiences.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems']
    },
    {
      icon: 'ri-smartphone-line',
      title: 'Mobile-First Development',
      description: 'Mobile-optimized websites that provide exceptional user experience across all devices and screen sizes.',
      features: ['Progressive Web Apps', 'Touch Optimization', 'Fast Loading', 'Offline Functionality']
    },
    {
      icon: 'ri-search-engine-line',
      title: 'SEO & Performance',
      description: 'Technical SEO implementation and performance optimization to improve search rankings and user experience.',
      features: ['Core Web Vitals', 'Schema Markup', 'Site Speed', 'Accessibility']
    },
    {
      icon: 'ri-shopping-cart-line',
      title: 'E-commerce Solutions',
      description: 'Complete e-commerce platforms with secure payment processing and inventory management systems.',
      features: ['Payment Integration', 'Inventory Management', 'Order Tracking', 'Analytics']
    },
    {
      icon: 'ri-tools-line',
      title: 'Maintenance & Support',
      description: 'Ongoing website maintenance, updates, and technical support to keep your site running smoothly.',
      features: ['Regular Updates', 'Security Monitoring', 'Bug Fixes', '24/7 Support']
    }
  ];

  return (
    <section id="services" className="section bg-[var(--card-bg)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="font-title text-[var(--text-color)] mb-6">
            Services I <span className="text-[var(--accent-color)]">Offer</span>
          </h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
            Comprehensive web development services designed to help your business succeed online
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <article 
              key={index}
              className="card group hover:shadow-xl"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="mb-6">
                <i className={`${service.icon} text-4xl text-[var(--accent-color)] group-hover:scale-110 transition-transform duration-300`}></i>
              </div>
              
              <h3 className="font-title text-xl text-[var(--text-color)] mb-4 group-hover:text-[var(--accent-color)] transition-colors">
                {service.title}
              </h3>
              
              <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3 text-sm">
                    <i className="ri-check-line text-[var(--accent-color)]"></i>
                    <span className="text-[var(--text-secondary)]">{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="600">
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
            <i className="ri-message-line"></i>
            Let's Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;

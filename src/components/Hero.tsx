
import React from 'react';

const Hero = () => {
  const handleScrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollDown = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      role="banner"
    >
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-color)] via-[var(--bg-color)] to-[var(--card-bg)] opacity-50"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div data-aos="fade-up" data-aos-delay="100">
          <h1 className="font-title text-[var(--text-color)] mb-6 leading-tight">
            Crafting Digital
            <span className="block text-[var(--accent-color)]">Experiences</span>
          </h1>
        </div>
        
        <div data-aos="fade-up" data-aos-delay="200">
          <p className="text-xl md:text-2xl text-[var(--text-secondary)] mb-8 max-w-3xl mx-auto leading-relaxed">
            Freelance web developer specializing in modern, accessible, and high-performance 
            web applications that drive business growth.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16" data-aos="fade-up" data-aos-delay="300">
          <button
            onClick={handleScrollToContact}
            className="btn btn-primary text-lg px-8 py-4"
            aria-label="Start your project with Brandon Torres"
          >
            <i className="ri-rocket-line"></i>
            Start Your Project
          </button>
          
          <a 
            href="/portfolio" 
            className="btn btn-secondary text-lg px-8 py-4"
            onClick={(e) => {
              e.preventDefault();
              const portfolioSection = document.querySelector('#portfolio');
              if (portfolioSection) {
                portfolioSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            aria-label="View Brandon Torres portfolio"
          >
            <i className="ri-eye-line"></i>
            View My Work
          </a>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2" data-aos="fade-up" data-aos-delay="400">
          <button
            onClick={handleScrollDown}
            className="flex flex-col items-center text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors group"
            aria-label="Scroll down to learn more"
          >
            <span className="text-sm mb-2 font-medium">Scroll Down</span>
            <i className="ri-arrow-down-line text-xl animate-bounce group-hover:text-[var(--accent-color)]"></i>
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-[var(--accent-color)] opacity-10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-[var(--primary-color)] opacity-10 rounded-full blur-2xl"></div>
    </section>
  );
};

export default Hero;


import React from 'react';

const Benefits = () => {
  const benefits = [
    {
      icon: 'ri-speed-line',
      title: 'Lightning Fast Performance',
      description: 'Optimized code and modern techniques ensure your website loads in under 2 seconds.',
      metric: '< 2s Load Time'
    },
    {
      icon: 'ri-search-line',
      title: 'SEO Optimized',
      description: 'Built-in SEO best practices help your website rank higher in search results.',
      metric: '+40% Traffic'
    },
    {
      icon: 'ri-smartphone-line',
      title: 'Mobile-First Design',
      description: 'Responsive design ensures perfect functionality across all devices and screen sizes.',
      metric: '100% Responsive'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Secure & Reliable',
      description: 'Industry-standard security practices protect your website and user data.',
      metric: '99.9% Uptime'
    }
  ];

  return (
    <section id="benefits" className="section bg-[var(--card-bg)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="font-title text-[var(--text-color)] mb-6">
            Why Choose <span className="text-[var(--accent-color)]">My Services</span>
          </h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
            Business-driven advantages that help you succeed online
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-[var(--accent-color)] bg-opacity-10 rounded-full flex items-center justify-center mx-auto group-hover:bg-opacity-20 transition-all duration-300">
                  <i className={`${benefit.icon} text-2xl text-[var(--accent-color)]`}></i>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="text-2xl font-bold text-[var(--accent-color)] mb-2">
                  {benefit.metric}
                </div>
              </div>
              
              <h3 className="font-title text-lg text-[var(--text-color)] mb-3">
                {benefit.title}
              </h3>
              
              <p className="text-[var(--text-secondary)] leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonial Quote */}
        <div className="max-w-4xl mx-auto text-center" data-aos="fade-up" data-aos-delay="400">
          <blockquote className="bg-[var(--bg-color)] p-8 rounded-2xl border border-[var(--border)]">
            <div className="text-4xl text-[var(--accent-color)] mb-4">"</div>
            <p className="text-xl text-[var(--text-color)] leading-relaxed mb-6 font-title">
              Working with Brandon transformed our online presence. Our website not only looks amazing 
              but also performs exceptionally well, resulting in a 150% increase in conversions.
            </p>
            <footer className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-[var(--accent-color)] bg-opacity-20 rounded-full flex items-center justify-center">
                <i className="ri-user-line text-[var(--accent-color)]"></i>
              </div>
              <div className="text-left">
                <cite className="font-medium text-[var(--text-color)] not-italic">Sarah Johnson</cite>
                <div className="text-sm text-[var(--text-secondary)]">CEO, TechStart Inc.</div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Benefits;

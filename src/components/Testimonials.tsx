
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      avatar: '/placeholder.svg',
      content: 'Working with Brandon transformed our online presence. Our website not only looks amazing but also performs exceptionally well, resulting in a 150% increase in conversions.',
      rating: 5,
      project: 'E-commerce Platform'
    },
    {
      name: 'Michael Chen',
      role: 'Founder, Digital Solutions',
      avatar: '/placeholder.svg',
      content: 'Brandon delivered our SaaS dashboard ahead of schedule with incredible attention to detail. The user experience is outstanding and our customers love the intuitive interface.',
      rating: 5,
      project: 'SaaS Dashboard'
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Medical Director, HealthCare Plus',
      avatar: '/placeholder.svg',
      content: 'The healthcare portal Brandon built for us is exactly what we needed. It\'s secure, user-friendly, and has significantly improved our patient engagement rates.',
      rating: 5,
      project: 'Healthcare Portal'
    },
    {
      name: 'James Wilson',
      role: 'Restaurant Owner, Bella Vista',
      avatar: '/placeholder.svg',
      content: 'Our new restaurant website has doubled our online orders! Brandon understood our brand perfectly and created something that truly represents our restaurant.',
      rating: 5,
      project: 'Restaurant Website'
    }
  ];

  return (
    <section id="testimonials" className="section bg-[var(--card-bg)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="font-title text-[var(--text-color)] mb-6">
            What Clients <span className="text-[var(--accent-color)]">Say</span>
          </h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
            Don't just take my word for it - hear from satisfied clients who have seen real results
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <article 
              key={index}
              className="bg-[var(--bg-color)] p-8 rounded-2xl border border-[var(--border)] hover:shadow-lg transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Quote Icon */}
              <div className="text-4xl text-[var(--accent-color)] mb-4 opacity-50">
                <i className="ri-double-quotes-l"></i>
              </div>

              {/* Content */}
              <blockquote className="mb-6">
                <p className="text-[var(--text-color)] leading-relaxed text-lg">
                  {testimonial.content}
                </p>
              </blockquote>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <i key={starIndex} className="ri-star-fill text-[var(--accent-color)]"></i>
                ))}
              </div>

              {/* Author Info */}
              <footer className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[var(--accent-color)] bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-user-line text-[var(--accent-color)]"></i>
                </div>
                <div>
                  <cite className="font-medium text-[var(--text-color)] not-italic block">
                    {testimonial.name}
                  </cite>
                  <div className="text-sm text-[var(--text-secondary)]">
                    {testimonial.role}
                  </div>
                  <div className="text-xs text-[var(--accent-color)] mt-1">
                    Project: {testimonial.project}
                  </div>
                </div>
              </footer>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="400">
          <div className="bg-[var(--bg-color)] p-8 rounded-2xl border border-[var(--border)] max-w-2xl mx-auto">
            <h3 className="font-title text-2xl text-[var(--text-color)] mb-4">
              Ready to Join These Success Stories?
            </h3>
            <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
              Let's discuss how I can help transform your business with a modern, 
              high-performing website.
            </p>
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
              Start Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

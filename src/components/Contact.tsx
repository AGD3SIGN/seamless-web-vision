
import React from 'react';

const Contact = () => {
  const contactInfo = [
    {
      icon: 'ri-user-line',
      label: 'Name',
      value: 'Brandon Torres',
      href: null
    },
    {
      icon: 'ri-mail-line',
      label: 'Email',
      value: 'brandon@example.com',
      href: 'mailto:brandon@example.com'
    },
    {
      icon: 'ri-phone-line',
      label: 'Phone',
      value: '(555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: 'ri-map-pin-line',
      label: 'Location',
      value: 'Saline County, AR',
      href: null
    },
    {
      icon: 'ri-time-line',
      label: 'Hours',
      value: 'Mon–Fri: 9am – 5pm',
      href: null
    }
  ];

  return (
    <section id="contact" className="section bg-[var(--bg-color)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="font-title text-[var(--text-color)] mb-6">
            Get In <span className="text-[var(--accent-color)]">Touch</span>
          </h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
            Ready to start your project? Let's discuss how I can help bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div data-aos="fade-right">
            <div className="space-y-8">
              <div>
                <h3 className="font-title text-2xl text-[var(--text-color)] mb-6">
                  Let's Start a Conversation
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
                  I'm always excited to work on new projects and help businesses succeed online. 
                  Whether you need a complete website overhaul or just want to discuss your ideas, 
                  I'm here to help.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[var(--accent-color)] bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className={`${info.icon} text-[var(--accent-color)] text-lg`}></i>
                    </div>
                    <div>
                      <div className="text-sm text-[var(--text-secondary)] font-medium">
                        {info.label}
                      </div>
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="text-[var(--text-color)] hover:text-[var(--accent-color)] transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-[var(--text-color)]">
                          {info.value}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-8 border-t border-[var(--border)]">
                <h4 className="font-title text-lg text-[var(--text-color)] mb-4">
                  Follow Me
                </h4>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/brandontorres"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[var(--card-bg)] rounded-lg flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent-color)] hover:bg-[var(--hover-bg)] transition-all"
                    aria-label="GitHub Profile"
                  >
                    <i className="ri-github-line"></i>
                  </a>
                  <a 
                    href="https://linkedin.com/in/brandontorres"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[var(--card-bg)] rounded-lg flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent-color)] hover:bg-[var(--hover-bg)] transition-all"
                    aria-label="LinkedIn Profile"
                  >
                    <i className="ri-linkedin-line"></i>
                  </a>
                  <a 
                    href="https://twitter.com/brandontorres"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[var(--card-bg)] rounded-lg flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent-color)] hover:bg-[var(--hover-bg)] transition-all"
                    aria-label="Twitter Profile"
                  >
                    <i className="ri-twitter-line"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div data-aos="fade-left">
            <div className="h-full min-h-[500px] bg-[var(--card-bg)] rounded-2xl overflow-hidden border border-[var(--border)]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206014.72635933403!2d-92.7306!3d34.5199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c2b0d7fcf62b6d%3A0x15c72a32ed28c950!2sSaline%20County%2C%20AR!5e0!3m2!1sen!2sus!4v1642784942987!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '500px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Brandon Torres Location - Saline County, AR"
                aria-label="Map showing the location of Brandon Torres in Saline County, Arkansas"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="300">
          <div className="bg-[var(--card-bg)] p-8 rounded-2xl border border-[var(--border)] max-w-2xl mx-auto">
            <h3 className="font-title text-2xl text-[var(--text-color)] mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
              Send me an email or give me a call to discuss your project. 
              I typically respond within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:brandon@example.com"
                className="btn btn-primary text-lg px-8 py-4"
              >
                <i className="ri-mail-line"></i>
                Send Email
              </a>
              <a 
                href="tel:+15551234567"
                className="btn btn-secondary text-lg px-8 py-4"
              >
                <i className="ri-phone-line"></i>
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#contact', label: 'Contact' }
  ];

  const socialLinks = [
    { href: 'https://github.com/brandontorres', icon: 'ri-github-line', label: 'GitHub' },
    { href: 'https://linkedin.com/in/brandontorres', icon: 'ri-linkedin-line', label: 'LinkedIn' },
    { href: 'https://twitter.com/brandontorres', icon: 'ri-twitter-line', label: 'Twitter' },
    { href: 'mailto:brandon@example.com', icon: 'ri-mail-line', label: 'Email' }
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[var(--card-bg)] border-t border-[var(--border)]" role="contentinfo">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand & Description */}
          <div>
            <h3 className="font-title text-xl text-[var(--text-color)] mb-4">
              Brandon Torres
            </h3>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
              Freelance web developer creating modern, accessible, and high-performance 
              web applications that drive business growth.
            </p>
            <div className="flex items-center gap-2 text-[var(--text-secondary)]">
              <i className="ri-map-pin-line text-[var(--accent-color)]"></i>
              <span>Saline County, AR</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-title text-lg text-[var(--text-color)] mb-4">
              Quick Links
            </h4>
            <nav>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                      className="text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-title text-lg text-[var(--text-color)] mb-4">
              Connect
            </h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <i className="ri-mail-line text-[var(--accent-color)]"></i>
                <a 
                  href="mailto:brandon@example.com"
                  className="text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors"
                >
                  brandon@example.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <i className="ri-phone-line text-[var(--accent-color)]"></i>
                <a 
                  href="tel:+15551234567"
                  className="text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors"
                >
                  (555) 123-4567
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-10 h-10 bg-[var(--bg-color)] rounded-lg flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent-color)] hover:bg-[var(--hover-bg)] transition-all"
                  aria-label={social.label}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[var(--border)] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[var(--text-secondary)] text-sm">
            © {currentYear} Brandon Torres. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6 text-sm text-[var(--text-secondary)]">
            <a 
              href="/privacy-policy" 
              className="hover:text-[var(--accent-color)] transition-colors"
              onClick={(e) => e.preventDefault()}
            >
              Privacy Policy
            </a>
            <a 
              href="/terms-of-service" 
              className="hover:text-[var(--accent-color)] transition-colors"
              onClick={(e) => e.preventDefault()}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import React from 'react';

const Features = () => {
  const features = [
    {
      icon: 'ri-brain-line',
      title: 'Advanced Intelligence',
      subtitle: 'Human-Like Intuition',
      description: 'Built with cutting-edge technology to understand, learn, and adapt to your unique needs.',
    },
    {
      icon: 'ri-user-heart-line',
      title: 'Adaptive Learning',
      subtitle: 'Personalized Experience',
      description: 'Every project learns from your interactions, continuously improving its responses and actions to better serve your needs.',
    },
    {
      icon: 'ri-chat-3-line',
      title: 'Natural Interaction',
      subtitle: 'Seamless Communication',
      description: 'Communicate using natural language and gestures. The system understands context and responds appropriately.',
    },
    {
      icon: 'ri-speed-line',
      title: 'Precise Movement',
      subtitle: 'Exceptional Performance',
      description: 'Advanced optimization provides fluid, lightning-fast performance with exceptional balance and coordination.',
    },
    {
      icon: 'ri-eye-line',
      title: 'Spatial Awareness',
      subtitle: 'Environmental Intelligence',
      description: 'Advanced sensors and mapping technology allow seamless navigation through complex environments with ease.',
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Enhanced Security',
      subtitle: 'Protected & Private',
      description: 'Built-in protocols protect your data and privacy, while physical safeguards ensure safe operation.',
    },
    {
      icon: 'ri-tools-line',
      title: 'Task Assistance',
      subtitle: 'Versatile Capabilities',
      description: 'From simple reminders to complex multi-step tasks, providing assistance with a wide range of activities.',
    },
  ];

  return (
    <section id="features" className="section bg-[var(--bg-color)]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-block px-4 py-2 bg-[var(--accent-color)] bg-opacity-10 rounded-full mb-6">
            <span className="text-[var(--accent-color)] font-medium text-sm uppercase tracking-wide">
              Features
            </span>
          </div>
          
          <h2 className="font-title text-[var(--text-color)] mb-6 max-w-4xl mx-auto">
            Advanced Intelligence,
            <br />
            <span className="text-[var(--text-color)]">Human-Like Intuition</span>
          </h2>
          
          <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
            Built with cutting-edge technology to understand, learn, and adapt to your 
            unique needs.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <article 
              key={index}
              className="group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex flex-col h-full">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-12 h-12 bg-[var(--accent-color)] bg-opacity-10 rounded-lg flex items-center justify-center group-hover:bg-opacity-20 transition-all duration-300">
                    <i className={`${feature.icon} text-xl text-[var(--accent-color)]`}></i>
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-title text-xl text-[var(--text-color)] mb-2 group-hover:text-[var(--accent-color)] transition-colors">
                    {feature.title}
                  </h3>
                  
                  <h4 className="font-medium text-[var(--text-secondary)] mb-4 text-sm uppercase tracking-wide">
                    {feature.subtitle}
                  </h4>
                  
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

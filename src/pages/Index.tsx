
import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Features from '../components/Features';
import Benefits from '../components/Benefits';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollProgress from '../components/ScrollProgress';
import ScrollToTop from '../components/ScrollToTop';

const Index = () => {
  useEffect(() => {
    // Initialize AOS animations
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 100,
      });
    }
  }, []);

  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Features />
        <Benefits />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;

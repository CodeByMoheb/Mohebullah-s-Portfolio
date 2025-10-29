import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SocialLinks from './components/SocialLinks';
import { Page } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const scrollNavigating = useRef(false);

  const handleNavigate = (page: Page) => {
    scrollNavigating.current = true;
    setCurrentPage(page);
    if (page === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(page);
      if (element) {
        const y = element.getBoundingClientRect().top + window.scrollY - 100; // 100px offset for header
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
    setTimeout(() => {
      scrollNavigating.current = false;
    }, 1000); // Allow time for smooth scroll to finish
  };
  
  const handleHeroNavigate = () => {
    handleNavigate('contact');
  };

  useEffect(() => {
    const sections: Page[] = ['about', 'experience', 'skills', 'projects', 'certifications', 'contact'];
    const observer = new IntersectionObserver((entries) => {
      if (scrollNavigating.current) return;
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setCurrentPage(entry.target.id as Page);
        }
      });

      // Handle hero section visibility
      const heroSection = document.getElementById('hero');
      if (heroSection && window.scrollY < heroSection.offsetHeight / 2) {
        setCurrentPage('home');
      }

    }, { rootMargin: "-40% 0px -60% 0px" });

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="bg-primary text-slate font-sans selection:bg-accent/20">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      
      <div className="hidden md:block fixed bottom-0 left-12 w-10 z-30">
        <SocialLinks />
      </div>

      <div className="hidden md:block fixed bottom-0 right-12 w-10 z-30">
        <div className="flex flex-col items-center">
          <a href="mailto:mohebullah.cse@gmail.com" className="text-sm writing-vertical-rl text-slate hover:text-accent transform hover:-translate-y-1 transition-all duration-300 font-mono tracking-widest">
            mohebullah.cse@gmail.com
          </a>
          <div className="w-px h-24 bg-slate mt-6"></div>
        </div>
      </div>

      <main className="container mx-auto px-6 md:px-24 lg:px-48">
        <div id="hero"><Hero onNavigate={handleHeroNavigate} /></div>
        <div id="about"><About /></div>
        <div id="experience"><Experience /></div>
        <div id="skills"><Skills /></div>
        <div id="projects"><Projects /></div>
        <div id="certifications"><Certifications /></div>
        <div id="contact"><Contact /></div>
        <Footer />
      </main>
    </div>
  );
}

export default App;
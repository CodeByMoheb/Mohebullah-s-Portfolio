import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { Page } from '../types';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const handleLinkClick = (e: React.MouseEvent, page: Page) => {
    e.preventDefault();
    onNavigate(page);
  };

  const handleMobileLinkClick = (e: React.MouseEvent, page: Page) => {
    e.preventDefault();
    onNavigate(page);
    setIsMenuOpen(false);
  };

  const mobileMenuLinks = NAV_LINKS.filter(link => link.page !== 'projects' && link.page !== 'contact');

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-primary/80 backdrop-blur-sm shadow-2xl shadow-black/30' : 'bg-transparent'}`}>
        <nav className="container mx-auto px-6 md:px-12 lg:px-24 py-4 flex justify-between items-center">
          <a href="#" onClick={(e) => handleLinkClick(e, 'home')} className="z-50" aria-label="Go to homepage">
             <svg width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent-cyan hover:text-accent-pink transition-colors duration-300">
                <path d="M10 40V10H15L25 25L35 10H40V40H35V17.5L27.5 30H22.5L15 17.5V40H10Z" fill="currentColor"/>
             </svg>
          </a>
          
          <div className="flex items-center space-x-6">
            {/* Desktop nav */}
            <div className="hidden md:flex items-center space-x-6">
              {NAV_LINKS.map((link, index) => (
                <a key={link.name} href={`#${link.page}`} onClick={(e) => handleLinkClick(e, link.page as Page)} className={`transition-colors duration-300 text-sm ${currentPage === link.page ? 'text-accent-cyan' : 'text-light-slate hover:text-accent-cyan'}`}>
                  <span className="text-accent-pink mr-1 font-mono">0{index + 1}.</span>{link.name}
                </a>
              ))}
            </div>

            {/* Mobile visible nav */}
            <div className="flex md:hidden items-center space-x-4">
                 <a href="#projects" onClick={(e) => handleLinkClick(e, 'projects')} className={`transition-colors duration-300 text-sm ${currentPage === 'projects' ? 'text-accent-cyan' : 'text-light-slate hover:text-accent-cyan'}`}>
                    Projects
                 </a>
                 <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')} className={`transition-colors duration-300 text-sm ${currentPage === 'contact' ? 'text-accent-cyan' : 'text-light-slate hover:text-accent-cyan'}`}>
                    Contact
                 </a>
            </div>

            {/* Animated Hamburger Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="hamburger-button z-50"
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                <span className={`line top ${isMenuOpen ? 'open' : ''}`}></span>
                <span className={`line middle ${isMenuOpen ? 'open' : ''}`}></span>
                <span className={`line bottom ${isMenuOpen ? 'open' : ''}`}></span>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Overlay */}
      <div 
        onClick={() => setIsMenuOpen(false)}
        className={`fixed inset-0 bg-primary/60 z-30 transition-opacity duration-300 md:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        aria-hidden="true"
      />

      {/* Side Menu */}
      <aside className={`fixed top-0 right-0 h-full w-[70vw] max-w-sm bg-secondary/90 backdrop-blur-md shadow-2xl shadow-black/30 z-40 transform transition-transform duration-500 ease-custom-bezier md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <nav className="h-full flex flex-col items-center justify-center">
          <ul className="flex flex-col items-center space-y-8">
            {mobileMenuLinks.map((link, index) => (
              <li key={link.name} className={`transition-all duration-300 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{transitionDelay: `${150 + index * 100}ms`}}>
                <a href={`#${link.page}`} onClick={(e) => handleMobileLinkClick(e, link.page as Page)} className="text-xl text-light-slate hover:text-accent-cyan transition-colors duration-300 font-mono">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Header;
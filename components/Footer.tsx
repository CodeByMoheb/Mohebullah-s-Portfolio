import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-8">
        <div className="md:hidden flex justify-center items-center space-x-6 mb-6">
            {SOCIAL_LINKS.map(link => (
                <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className="text-slate hover:text-accent transition-colors duration-300"
                >
                    {link.icon}
                </a>
            ))}
        </div>
        <div className="text-center text-sm text-dark-slate font-mono">
            <p>Designed & Built by Md. Mohebullah</p>
            <p>All rights reserved © 2024</p>
        </div>
    </footer>
  );
};

export default Footer;
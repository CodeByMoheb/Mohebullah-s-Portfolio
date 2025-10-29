import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const SocialLinks: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center space-y-6">
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            className="text-slate hover:text-accent transform hover:-translate-y-1 transition-all duration-300"
          >
            {link.icon}
          </a>
        ))}
      </div>
      <div className="w-px h-24 bg-slate mt-6"></div>
    </div>
  );
};

export default SocialLinks;

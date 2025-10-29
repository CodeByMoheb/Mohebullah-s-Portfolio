import React from 'react';
import SectionHeader from './SectionHeader';
import { CERTIFICATIONS_DATA } from '../constants';
import { ExternalLink } from 'lucide-react';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24">
      <SectionHeader title="Certifications & Learning" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {CERTIFICATIONS_DATA.map((cert) => (
          <a
            key={cert.title}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-6 bg-secondary p-6 rounded-sm shadow-md hover:shadow-glow hover:-translate-y-1.5 transition-all duration-300 ease-custom-bezier"
          >
            <img src={cert.image} alt={cert.title} className="w-24 h-24 object-contain rounded-sm bg-light-slate p-2" />
            <div className="flex-1">
              <h3 className="text-lg font-bold text-light-slate group-hover:text-accent transition-colors duration-300">{cert.title}</h3>
              <p className="text-slate text-sm">{cert.issuer}</p>
              <p className="text-dark-slate text-xs mt-1 font-mono">{cert.date}</p>
            </div>
            <ExternalLink className="w-5 h-5 text-slate group-hover:text-accent transition-colors duration-300 flex-shrink-0" />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Certifications;

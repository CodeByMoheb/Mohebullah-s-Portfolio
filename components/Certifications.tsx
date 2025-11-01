import React, { useState } from 'react';
import SectionHeader from './SectionHeader';
import { CERTIFICATIONS_DATA } from '../constants';
import { ExternalLink } from 'lucide-react';
import CertificatePreview from './CertificatePreview';

const CERTIFICATES_PER_PAGE = 4; // Display a maximum of 4 per page to demonstrate pagination

const Certifications: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(CERTIFICATIONS_DATA.length / CERTIFICATES_PER_PAGE);
  const startIndex = (currentPage - 1) * CERTIFICATES_PER_PAGE;
  const currentCertificates = CERTIFICATIONS_DATA.slice(startIndex, startIndex + CERTIFICATES_PER_PAGE);

  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const goToPrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <section id="certifications" className="py-24">
      <SectionHeader title="Certifications & Learning" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[320px]"> {/* Set a min-height to prevent layout shift */}
        {currentCertificates.map((cert) => (
          <a
            key={cert.title}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-6 bg-secondary/60 backdrop-blur-sm border border-dark-slate/50 p-6 rounded-sm shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 ease-custom-bezier"
          >
            <CertificatePreview url={cert.url} fallbackImage={cert.image} />
            <div className="flex-1">
              <h3 className="text-lg font-bold text-light-slate group-hover:text-accent-cyan transition-colors duration-300">{cert.title}</h3>
              <p className="text-slate text-sm">{cert.issuer}</p>
              <p className="text-dark-slate text-xs mt-1 font-mono">{cert.date}</p>
            </div>
            <ExternalLink className="w-5 h-5 text-slate group-hover:text-accent-cyan transition-colors duration-300 flex-shrink-0" />
          </a>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-12 space-x-6">
          <button
            onClick={goToPrevPage}
            disabled={currentPage === 1}
            className="px-6 py-2 border border-accent-pink/50 text-accent-pink rounded-sm hover:bg-accent-pink/10 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-mono text-sm"
            aria-label="Go to previous page"
          >
            Previous
          </button>
          <span className="text-slate font-mono text-sm">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className="px-6 py-2 border border-accent-cyan/50 text-accent-cyan rounded-sm hover:bg-accent-cyan/10 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-mono text-sm"
            aria-label="Go to next page"
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
};

export default Certifications;
import React from 'react';

interface SectionHeaderProps {
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return (
    <div className="flex items-center mb-12 w-full">
      <h2 className="text-2xl md:text-3xl font-bold text-light-slate whitespace-nowrap font-sans">
        {title}
      </h2>
      <div className="h-px bg-gradient-to-r from-accent-pink to-accent-cyan w-full ml-4"></div>
    </div>
  );
};

export default SectionHeader;
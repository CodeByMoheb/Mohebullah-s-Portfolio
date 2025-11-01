import React, { useState } from 'react';
import SectionHeader from './SectionHeader';
import { PROJECTS_DATA } from '../constants';
import { Github, ExternalLink, ChevronRight, ChevronDown } from 'lucide-react';
import { Project } from '../types';
import ProjectImageCollage from './ProjectImageCollage';

const FeaturedProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  return (
    <div className="mb-20 group transition-all duration-300 ease-custom-bezier">
      {/* 1. Title & Links */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 mb-4">
        <div>
          <p className="text-accent-cyan text-sm font-mono">{project.role || 'Featured Project'}</p>
          <h3 className="text-2xl font-bold text-light-slate">
            <a href={project.liveUrl || project.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent-cyan transition-colors duration-300">
              {project.title}
              <span className="text-accent-pink/80 text-lg font-mono ml-2">({project.year})</span>
            </a>
          </h3>
        </div>
        <div className="flex items-center gap-4 self-start sm:self-center">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-light-slate hover:text-accent-cyan transition-colors duration-300" aria-label={`${project.title} GitHub repository`}>
            <Github size={24} />
          </a>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-light-slate hover:text-accent-cyan transition-colors duration-300" aria-label={`${project.title} live site`}>
              <ExternalLink size={24} />
            </a>
          )}
        </div>
      </div>

      {/* 2. Image Collage */}
      <div className="mb-6 rounded-sm shadow-lg hover:shadow-2xl transition-shadow duration-300">
         <a href={project.liveUrl || project.githubUrl} target="_blank" rel="noopener noreferrer" className="block rounded-sm overflow-hidden">
            <ProjectImageCollage images={project.images} title={project.title} />
        </a>
      </div>

      {/* 3. Toggle Button */}
      <div className="text-center my-4">
        <button
          onClick={() => setIsDescriptionVisible(!isDescriptionVisible)}
          className="inline-flex items-center justify-center px-6 py-2 border border-accent-cyan/50 text-accent-cyan/80 rounded-sm hover:bg-accent-cyan/10 transition-all duration-300 ease-custom-bezier font-mono text-sm"
          aria-expanded={isDescriptionVisible}
        >
          <span>{isDescriptionVisible ? 'Hide Description' : 'Show Description'}</span>
          <ChevronDown className={`w-5 h-5 ml-2 transition-transform duration-300 ${isDescriptionVisible ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {/* 4. Description, Features, and Tags (Collapsible) */}
      <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isDescriptionVisible ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="grid md:grid-cols-2 gap-6 pt-4">
          <div className="bg-secondary/70 backdrop-blur-sm p-6 rounded-sm border border-dark-slate/50">
            <p className="text-slate">{project.description}</p>
          </div>
          <div className="bg-secondary/70 backdrop-blur-sm p-6 rounded-sm border border-dark-slate/50">
            {project.keyFeatures && (
              <div className="mb-4">
                <ul className="space-y-2">
                  {project.keyFeatures.map(feature => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-slate/90">
                      <ChevronRight className="w-4 h-4 mt-1 text-accent-pink flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate font-mono mt-4">
              {project.tags.map(tag => <li key={tag}>{tag}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};


const OtherProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  return (
    <div className="bg-secondary/60 backdrop-blur-sm border border-dark-slate/50 rounded-sm shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-custom-bezier flex flex-col group">
      {/* 1. Title and Links */}
      <div className="p-6 pb-4">
        <div className="flex justify-between items-start gap-4">
          <h3 className="text-xl font-bold text-light-slate">
             <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="group-hover:text-accent-cyan transition-colors duration-300">
                {project.title}
                <span className="block text-accent-pink/80 text-base font-mono mt-1">({project.year})</span>
             </a>
          </h3>
          <div className="flex items-center gap-4 flex-shrink-0 mt-1">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} GitHub repository`} className="text-light-slate hover:text-accent-cyan transition-colors duration-300"><Github size={22} /></a>
              {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live site`} className="text-light-slate hover:text-accent-cyan transition-colors duration-300"><ExternalLink size={22} /></a>}
          </div>
        </div>
      </div>

      {/* 2. Image Collage */}
      <div className="px-6">
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="block rounded-sm overflow-hidden">
            <ProjectImageCollage images={project.images} title={project.title} />
        </a>
      </div>
      
      {/* 3. Toggle Button */}
       <div className="my-4 px-6">
          <button
            onClick={() => setIsDescriptionVisible(!isDescriptionVisible)}
            className="w-full flex items-center justify-center px-4 py-2 border border-accent-cyan/40 text-accent-cyan/70 rounded-sm hover:bg-accent-cyan/10 transition-all duration-300 ease-custom-bezier font-mono text-xs"
            aria-expanded={isDescriptionVisible}
          >
            <span>{isDescriptionVisible ? 'Hide Details' : 'Show Details'}</span>
            <ChevronDown className={`w-4 h-4 ml-2 transition-transform duration-300 ${isDescriptionVisible ? 'rotate-180' : ''}`} />
          </button>
        </div>

      {/* 4. Description and Tags (Collapsible) */}
      <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isDescriptionVisible ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 pb-6 flex flex-col flex-grow">
            <p className="text-slate text-sm flex-grow mb-4">{project.description}</p>
            <ul className="flex flex-wrap gap-x-4 text-xs text-slate font-mono mt-auto">
            {project.tags.map(tag => <li key={tag}>{tag}</li>)}
            </ul>
        </div>
      </div>
    </div>
  )
}

const PROJECTS_PER_PAGE = 3;

const Projects: React.FC = () => {
    const featuredProjects = PROJECTS_DATA.filter(p => p.featured);
    const otherProjects = PROJECTS_DATA.filter(p => !p.featured);
    
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(otherProjects.length / PROJECTS_PER_PAGE);
    const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
    const currentOtherProjects = otherProjects.slice(startIndex, startIndex + PROJECTS_PER_PAGE);
  
    const goToNextPage = () => {
      setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };
  
    const goToPrevPage = () => {
      setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

  return (
    <section id="projects" className="py-24">
      <SectionHeader title="Things I've Built" />
      <div>
        {featuredProjects.map((project) => (
          <FeaturedProjectCard key={project.title} project={project} />
        ))}
      </div>

      <div className="text-center mt-16 mb-12">
        <h3 className="text-2xl font-bold text-light-slate">Other Noteworthy Projects</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[550px]">
          {currentOtherProjects.map(project => <OtherProjectCard key={project.title} project={project} />)}
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

export default Projects;
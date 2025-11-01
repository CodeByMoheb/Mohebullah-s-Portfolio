import React from 'react';
import SectionHeader from './SectionHeader';
import { PROJECTS_DATA } from '../constants';
import { Github, ExternalLink, ChevronRight } from 'lucide-react';
import { Project } from '../types';

const FeaturedProjectCard: React.FC<{ project: Project; isReversed: boolean }> = ({ project, isReversed }) => {
  const textOrder = isReversed ? 'md:order-1' : 'md:order-2';
  const imageOrder = isReversed ? 'md:order-2' : 'md:order-1';
  const textAlign = isReversed ? 'md:text-left' : 'md:text-right';
  const contentAlign = isReversed ? 'md:items-start' : 'md:items-end';
  const tagAlign = isReversed ? 'md:justify-start' : 'md:justify-end';

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center mb-16">
      <div className={`relative group md:col-span-3 ${imageOrder}`}>
        <a href={project.liveUrl || project.githubUrl} target="_blank" rel="noopener noreferrer">
          <div className="absolute inset-0 bg-primary/60 rounded-sm z-10 group-hover:bg-transparent transition-colors duration-300"></div>
          <img src={project.image} alt={project.title} className="rounded-sm w-full h-auto object-cover" />
        </a>
      </div>
      <div className={`relative z-20 md:col-span-2 ${textOrder} ${contentAlign} flex flex-col`}>
        <p className="text-accent text-sm mb-2">{project.role || 'Featured Project'}</p>
        <h3 className={`text-2xl font-bold text-light-slate mb-4 hover:text-accent transition-colors duration-300 ${textAlign}`}>
            <a href={project.liveUrl || project.githubUrl} target="_blank" rel="noopener noreferrer">
                {project.title} <span className="text-accent/80 text-lg font-mono">({project.year})</span>
            </a>
        </h3>
        <div className="bg-secondary p-6 rounded-sm shadow-lg mb-4">
          <p className={`text-slate ${textAlign}`}>{project.description}</p>
          {project.keyFeatures && (
            <ul className="mt-4 space-y-2">
              {project.keyFeatures.map(feature => (
                <li key={feature} className={`flex items-start gap-2 text-sm text-slate/90 ${isReversed ? '' : 'md:flex-row-reverse'}`}>
                  <ChevronRight className="w-4 h-4 mt-1 text-accent flex-shrink-0" />
                  <span className={`flex-grow ${textAlign}`}>{feature}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        <ul className={`flex flex-wrap gap-x-4 gap-y-2 text-sm text-dark-slate mb-4 ${tagAlign} font-mono`}>
          {project.tags.map(tag => <li key={tag}>{tag}</li>)}
        </ul>
        <div className={`flex items-center gap-4 ${tagAlign}`}>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-light-slate hover:text-accent transition-colors duration-300">
            <Github size={24} />
          </a>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-light-slate hover:text-accent transition-colors duration-300">
              <ExternalLink size={24} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const OtherProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-secondary p-6 rounded-sm shadow-lg hover:shadow-glow hover:-translate-y-2 transition-all duration-300 ease-custom-bezier flex flex-col group">
      <div className="flex justify-between items-center mb-4">
        <svg className="w-10 h-10 text-accent" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
        <div className="flex items-center gap-4">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-light-slate hover:text-accent transition-colors duration-300"><Github size={20} /></a>
            {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-light-slate hover:text-accent transition-colors duration-300"><ExternalLink size={20} /></a>}
        </div>
      </div>
      <h3 className="text-xl font-bold text-light-slate mb-2 group-hover:text-accent transition-colors duration-300">
        {project.title}
        <span className="text-accent/80 text-base font-mono ml-2">({project.year})</span>
      </h3>
      <p className="text-slate text-sm flex-grow mb-4">{project.description}</p>
      <ul className="flex flex-wrap gap-x-4 text-xs text-dark-slate font-mono">
        {project.tags.map(tag => <li key={tag}>{tag}</li>)}
      </ul>
    </div>
  )
}

const Projects: React.FC = () => {
    const featuredProjects = PROJECTS_DATA.filter(p => p.featured);
    const otherProjects = PROJECTS_DATA.filter(p => !p.featured);

  return (
    <section id="projects" className="py-24">
      <SectionHeader title="Things I've Built" />
      <div>
        {featuredProjects.map((project, index) => (
          <FeaturedProjectCard key={project.title} project={project} isReversed={index % 2 !== 0} />
        ))}
      </div>

      <div className="text-center mt-16 mb-12">
        <h3 className="text-2xl font-bold text-light-slate">Other Noteworthy Projects</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map(project => <OtherProjectCard key={project.title} project={project} />)}
      </div>
    </section>
  );
};

export default Projects;
import React from 'react';
import SectionHeader from './SectionHeader';
import { PROJECTS_DATA } from '../constants';
import { Github, ExternalLink, ChevronRight } from 'lucide-react';
import { Project } from '../types';
import ProjectImageCollage from './ProjectImageCollage';

const FeaturedProjectCard: React.FC<{ project: Project; isReversed: boolean }> = ({ project, isReversed }) => {
  const textOrder = isReversed ? 'md:order-1' : 'md:order-2';
  const imageOrder = isReversed ? 'md:order-2' : 'md:order-1';
  const textAlign = isReversed ? 'md:text-left' : 'md:text-right';
  const contentAlign = isReversed ? 'md:items-start' : 'md:items-end';
  const tagAlign = isReversed ? 'md:justify-start' : 'md:justify-end';

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center mb-16">
      <div className={`md:col-span-3 ${imageOrder}`}>
        <a href={project.liveUrl || project.githubUrl} target="_blank" rel="noopener noreferrer" className="block rounded-sm">
            <ProjectImageCollage images={project.images} title={project.title} />
        </a>
      </div>
      <div className={`relative z-20 md:col-span-2 ${textOrder} ${contentAlign} flex flex-col`}>
        <p className="text-accent text-sm mb-2 font-mono">{project.role || 'Featured Project'}</p>
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
        <ul className={`flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate mb-4 ${tagAlign} font-mono`}>
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
    <div className="bg-secondary rounded-sm shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-custom-bezier flex flex-col group overflow-hidden">
      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
        <ProjectImageCollage images={project.images} title={project.title} />
      </a>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start gap-4 mb-4">
          <h3 className="text-xl font-bold text-light-slate group-hover:text-accent transition-colors duration-300">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                {project.title}
                <span className="block text-accent/80 text-base font-mono mt-1">({project.year})</span>
            </a>
          </h3>
          <div className="flex items-center gap-4 flex-shrink-0 mt-1">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} GitHub repository`} className="text-light-slate hover:text-accent transition-colors duration-300"><Github size={22} /></a>
              {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live site`} className="text-light-slate hover:text-accent transition-colors duration-300"><ExternalLink size={22} /></a>}
          </div>
        </div>
        <p className="text-slate text-sm flex-grow mb-4">{project.description}</p>
        <ul className="flex flex-wrap gap-x-4 text-xs text-slate font-mono mt-auto">
          {project.tags.map(tag => <li key={tag}>{tag}</li>)}
        </ul>
      </div>
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherProjects.map(project => <OtherProjectCard key={project.title} project={project} />)}
      </div>
    </section>
  );
};

export default Projects;
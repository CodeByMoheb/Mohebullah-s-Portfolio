import React from 'react';
import SectionHeader from './SectionHeader';
import { SKILLS_DATA } from '../constants';

const Skills: React.FC = () => {
  return (
    <section className="py-24">
      <SectionHeader title="My Tech Stack" />
      <div className="space-y-12">
        {SKILLS_DATA.map((category) => (
          <div key={category.title}>
            <h3 className="text-xl font-semibold text-light-slate mb-6 font-sans">{category.title}</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
              {category.skills.map((skill) => (
                <div key={skill.name} className="relative group flex flex-col items-center text-center p-4 rounded-sm bg-secondary/50 shadow-md hover:shadow-lg hover:bg-secondary hover:-translate-y-1.5 transition-all duration-300 ease-custom-bezier">
                  <div className="w-12 h-12 mb-2 text-slate group-hover:text-accent transition-colors duration-300">{skill.icon}</div>
                  <span className="text-sm font-medium text-slate group-hover:text-light-slate transition-colors duration-300">{skill.name}</span>
                  {skill.description && (
                    <div className="absolute bottom-full mb-2 w-max max-w-xs p-3 text-sm text-left text-light-slate bg-secondary border border-dark-slate rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                      <p className="font-bold text-accent -mt-1 mb-1">{skill.name}</p>
                      <p className="text-xs text-slate">{skill.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
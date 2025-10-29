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
                <div key={skill.name} className="flex flex-col items-center text-center p-4 rounded-sm bg-secondary shadow-md hover:shadow-glow hover:-translate-y-1.5 transition-all duration-300 ease-custom-bezier">
                  <div className="w-12 h-12 mb-2 text-accent">{skill.icon}</div>
                  <span className="text-sm font-medium text-slate">{skill.name}</span>
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
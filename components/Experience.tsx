import React from 'react';
import SectionHeader from './SectionHeader';
import { EXPERIENCE_DATA } from '../constants';
import { ChevronRight } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24">
      <SectionHeader title="Where I've Worked" />
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Timeline Spine */}
        <div className="absolute top-0 h-full w-0.5 bg-dark-slate left-5 md:left-1/2 md:-translate-x-1/2"></div>

        <div className="space-y-12">
          {EXPERIENCE_DATA.map((item, index) => (
            <div key={index} className="relative">
              {/* Timeline Dot */}
              <div className="absolute w-5 h-5 bg-accent rounded-full left-5 -translate-x-[9px] mt-1 md:left-1/2 md:-translate-x-1/2 z-10 border-4 border-primary"></div>

              {/* Content Card Container */}
              <div className="pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-x-8">
                
                {/* Position the card based on index (even/odd) */}
                <div className={`
                  ${index % 2 === 0 ? 'md:col-start-1 md:row-start-1 md:text-right' : 'md:col-start-2 md:row-start-1'}
                `}>
                  <div className="bg-secondary p-6 rounded-sm shadow-lg hover:shadow-xl hover:-translate-y-1 transition-transform duration-300 ease-custom-bezier">
                    <h3 className="text-xl font-semibold text-light-slate font-sans">
                      {item.role} <span className="text-accent">@ {item.company}</span>
                    </h3>
                    <p className="text-sm my-2 font-mono text-slate/80">{item.period}</p>
                    <ul className="space-y-2 text-slate text-left">
                      {item.description.map((desc, i) => (
                        <li key={i} className="flex items-start">
                          <ChevronRight className="w-4 h-4 mr-2 mt-1 text-accent flex-shrink-0" />
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

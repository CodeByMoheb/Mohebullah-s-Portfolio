import React, { useState } from 'react';
import SectionHeader from './SectionHeader';
import { EXPERIENCE_DATA } from '../constants';
import { ChevronRight } from 'lucide-react';

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-24">
      <SectionHeader title="Where I've Worked" />
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b-2 md:border-b-0 md:border-l-2 border-dark-slate/30">
          {EXPERIENCE_DATA.map((item, index) => (
            <button
              key={item.company}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-3 whitespace-nowrap text-left text-sm transition-all duration-300 ease-custom-bezier ${
                activeTab === index
                  ? 'border-b-2 md:border-b-0 md:border-l-2 border-accent text-accent bg-accent/10'
                  : 'border-transparent text-slate hover:bg-accent/5 hover:text-accent'
              }`}
            >
              {item.company}
            </button>
          ))}
        </div>
        <div className="flex-grow min-h-[250px]">
          {EXPERIENCE_DATA.map((item, index) => (
            <div
              key={item.company}
              className={`transition-opacity duration-300 ${activeTab === index ? 'opacity-100' : 'opacity-0 absolute -z-10'}`}
            >
              <h3 className="text-xl font-semibold text-light-slate font-sans">
                {item.role} <span className="text-accent">@ {item.company}</span>
              </h3>
              <p className="text-sm mb-4">{item.period}</p>
              <ul className="space-y-2">
                {item.description.map((desc, i) => (
                  <li key={i} className="flex items-start">
                    <ChevronRight className="w-4 h-4 mr-2 mt-1 text-accent flex-shrink-0" />
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
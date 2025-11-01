import React, { useEffect, useRef } from 'react';
import SectionHeader from './SectionHeader';
import { EXPERIENCE_DATA } from '../constants';

const Experience: React.FC = () => {
  const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -100px 0px', // Animate items when they are 100px from the bottom of the viewport
    });

    timelineRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      timelineRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="experience" className="py-24">
      <SectionHeader title="Where I've Worked" />
      <div className="relative max-w-3xl mx-auto">
        {/* Vertical Timeline Spine */}
        <div className="absolute top-2 h-full w-0.5 bg-dark-slate left-4"></div>

        <div className="space-y-12">
          {EXPERIENCE_DATA.map((item, index) => (
            <div 
              key={index}
              ref={el => { timelineRefs.current[index] = el }}
              className="relative pl-12 timeline-entry"
            >
              {/* Timeline Dot */}
              <div className="absolute w-4 h-4 bg-accent-cyan rounded-full left-4 -translate-x-[7px] mt-2 z-10 border-4 border-primary"></div>

              {/* Content */}
              <div className="p-1 group">
                 <p className="text-sm mb-1 font-mono text-slate/80">{item.period}</p>
                 <h3 className="text-xl font-semibold text-light-slate font-sans group-hover:text-accent-cyan transition-colors duration-300">
                    {item.role} <span className="text-accent-pink/80">@ {item.company}</span>
                 </h3>
                 <p className="text-slate mt-2 text-base">
                    {item.description}
                 </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
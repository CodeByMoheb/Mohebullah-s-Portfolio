import React from 'react';
import SectionHeader from './SectionHeader';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24">
      <SectionHeader title="About Me" />
      <div className="max-w-4xl">
        <div className="space-y-4 text-slate">
          <p>
            Hello! I'm Md. Mohebullah, a passionate <span className="text-accent">Full Stack Developer</span> and <span className="text-accent">Machine Learning Enthusiast</span>. My interest in web development started back in 2022 when I decided to build a simple website for a community project — turns out hacking together a custom solution taught me a lot about ASP.NET & C#!
          </p>
          <p>
            Fast-forward to today, I've had the privilege of working at a software company, building real-world applications. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients. I specialize in the <span className="text-accent">ASP.NET platform</span> and have a growing interest in data science and machine learning.
          </p>
           <p>
            Beyond coding, I have a passion for teaching and simplifying complex topics for others.
          </p>
        </div>
        <div className="mt-8">
            <h3 className="text-xl font-semibold text-light-slate mb-4 font-sans">Education</h3>
            <div className="bg-secondary p-4 rounded-sm">
                <p className="font-bold text-light-slate">B.Sc. in Computer Science & Engineering (CSE)</p>
                <p className="text-sm text-slate">IUBAT – International University of Business Agriculture and Technology</p>
                <p className="text-xs text-dark-slate font-mono mt-1">Sep 2021 – 2025 | CGPA: 3.63 / 4.00</p>
                 <p className="text-sm mt-2 text-slate/80">
                    <span className="font-semibold">Relevant coursework:</span> OOP, Databases, Data Structures & Algorithms, Operating Systems, Computer Networks, Machine Learning, Deep Learning.
                </p>
            </div>
        </div>

      </div>
    </section>
  );
};

export default About;
import React from 'react';
import SectionHeader from './SectionHeader';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24">
      <SectionHeader title="About Me" />
      <div className="flex flex-col md:flex-row items-start gap-12">
        <div className="md:w-2/3 space-y-4">
          <p>
            Hello! I'm Md. Mohebullah, a passionate <span className="text-accent">Full Stack ASP.NET Developer</span> and <span className="text-accent">Machine Learning Enthusiast</span>. I build practical web applications using ASP.NET and SQL Server, and I enjoy exploring machine learning with Python.
          </p>
          <p>
            I have completed an internship at E-Group Ltd, where I learned and developed ASP.NET web applications with Microsoft SQL Server. My skills include <span className="text-accent">Python, ASP.NET MVC, Microsoft SQL Server</span>, and data/ML libraries such as NumPy, Pandas, and Matplotlib. I am always eager to learn new technologies and improve my craft.
          </p>
           <p>
            Beyond coding, I have a passion for teaching and simplifying complex topics. 
          </p>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-light-slate mb-4 font-sans">Education</h3>
            <div className="bg-secondary p-4 rounded-sm">
                <p className="font-bold text-light-slate">B.Sc. in Computer Science & Engineering (CSE)</p>
                <p className="text-sm">IUBAT – International University of Business Agriculture and Technology</p>
                <p className="text-xs text-dark-slate font-mono mt-1">Sep 2021 – 2025 | CGPA: 3.63 / 4.00</p>
                 <p className="text-sm mt-2 text-slate/80">
                    <span className="font-semibold">Relevant coursework:</span> OOP, Databases, Data Structures & Algorithms, Operating Systems, Computer Networks, Machine Learning, Deep Learning.
                </p>
            </div>
          </div>

        </div>
        <div className="md:w-1/3 flex justify-center group mt-4 md:mt-0">
            <div className="relative w-64 h-64">
                <div className="absolute inset-0 rounded-sm border-2 border-accent transform translate-x-4 translate-y-4 transition-transform duration-300 ease-custom-bezier group-hover:translate-x-2 group-hover:translate-y-2"></div>
                <div className="relative w-full h-full rounded-sm overflow-hidden z-10">
                  <div className="absolute inset-0 bg-accent/40 group-hover:bg-transparent transition-colors duration-300"></div>
                  <img 
                      src="https://avatars.githubusercontent.com/u/101861788?v=4" 
                      alt="Md. Mohebullah" 
                      className="w-full h-full object-cover"
                  />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
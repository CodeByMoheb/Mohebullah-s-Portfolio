import React from 'react';

interface HeroProps {
  onNavigate: () => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="min-h-screen flex flex-col justify-center py-20">
      <p className="text-accent mb-4 fade-in delay-100">Hi, my name is</p>
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-light-slate fade-in delay-200 font-sans">
        Md. Mohebullah.
      </h1>
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-dark-slate fade-in delay-300 font-sans">
        Full Stack Developer & ML Enthusiast.
      </h2>
      <p className="max-w-xl mt-6 text-base md:text-lg fade-in delay-400">
        I build practical web applications using ASP.NET and SQL Server, and I enjoy exploring machine learning with Python. I am always eager to learn new technologies and improve my craft.
      </p>
      <div className="mt-8 fade-in delay-500">
        <button 
          onClick={onNavigate} 
          className="inline-block px-8 py-4 border border-accent text-accent rounded-sm hover:bg-accent/10 hover:shadow-glow transition-all duration-300 ease-custom-bezier"
        >
          Get In Touch
        </button>
      </div>
    </section>
  );
};

export default Hero;
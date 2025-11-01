import React from 'react';

interface HeroProps {
  onNavigate: () => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {

  return (
    <section className="flex flex-col md:flex-row items-center gap-12 py-24 md:py-32">
        <div className="md:w-3/5 lg:w-2/3">
            <p className="text-accent-cyan mb-4 font-mono fade-in delay-100">Hi, my name is</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-light-slate fade-in delay-200 font-sans gradient-text">
                Md. Mohebullah.
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate fade-in delay-300 font-sans">
                I build things for the web.
            </h2>
            <p className="max-w-xl mt-6 text-base md:text-lg fade-in delay-400">
                I'm a full stack developer specializing in building exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products using ASP.NET and modern web technologies.
            </p>
            <div className="mt-8 fade-in delay-500">
                <button 
                onClick={onNavigate} 
                className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-light-slate rounded-sm group bg-gradient-to-br from-accent-pink to-accent-cyan hover:text-white"
                >
                    <span className="relative px-8 py-4 transition-all ease-in duration-150 bg-primary rounded-sm group-hover:bg-opacity-0">
                        Get In Touch
                    </span>
                </button>
            </div>
        </div>
        <div 
            className="md:w-2/5 lg:w-1/3 flex justify-center md:justify-end group mt-8 md:mt-0 fade-in delay-400"
        >
            <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent-pink to-accent-cyan rounded-sm blur-md opacity-75 group-hover:opacity-100 transition duration-500 group-hover:duration-200 animate-tilt"></div>
                <div className="relative w-full h-full rounded-sm overflow-hidden z-10 bg-primary">
                    <img 
                        src="https://res.cloudinary.com/dzlfgx5d7/image/upload/v1759242075/gallery/zidan_yfdhgy.jpg" 
                        alt="Md. Mohebullah" 
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    </section>
  );
};

export default Hero;
import React, { useState, useEffect } from 'react';

interface HeroProps {
  onNavigate: () => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Apply a subtle parallax effect by moving the image up at a fraction of the scroll speed
      // This creates a sense of depth as the content scrolls over it.
      setOffsetY(window.scrollY * 0.2);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup function to remove the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <section className="flex flex-col md:flex-row items-center gap-12 py-24 md:py-32">
        <div className="md:w-3/5 lg:w-2/3">
            <p className="text-accent mb-4 font-mono fade-in delay-100">Hi, my name is</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-light-slate fade-in delay-200 font-sans">
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
                className="inline-block px-8 py-4 border border-accent text-accent rounded-sm hover:bg-accent/10 transition-all duration-300 ease-custom-bezier"
                >
                Get In Touch
                </button>
            </div>
        </div>
        <div 
            className="md:w-2/5 lg:w-1/3 flex justify-center md:justify-end group mt-8 md:mt-0 fade-in delay-400"
            style={{ transform: `translateY(${offsetY}px)` }}
        >
            <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                <div className="absolute inset-0 rounded-sm border-2 border-accent transform translate-x-4 translate-y-4 transition-transform duration-300 ease-custom-bezier group-hover:translate-x-3 group-hover:translate-y-3"></div>
                <div className="relative w-full h-full rounded-sm overflow-hidden z-10">
                    <div className="absolute inset-0 bg-primary/40 group-hover:bg-transparent transition-colors duration-300"></div>
                    <img 
                        src="https://res.cloudinary.com/dzlfgx5d7/image/upload/v1759242075/gallery/zidan_yfdhgy.jpg" 
                        alt="Md. Mohebullah" 
                        className="w-full h-full object-cover filter grayscale hover:filter-none transition-all duration-300"
                    />
                </div>
            </div>
        </div>
    </section>
  );
};

export default Hero;
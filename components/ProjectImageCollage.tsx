import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectImageCollageProps {
  images: string[];
  title: string;
}

const ProjectImageCollage: React.FC<ProjectImageCollageProps> = ({ images, title }) => {
  // Fallback UI for projects with one or zero images
  if (!images || images.length < 2) {
    const singleImageUrl = images?.[0] || `https://placehold.co/600x400/0D0D2B/00F2EA?text=${encodeURIComponent(title)}`;
    return (
      <div className="aspect-w-16 aspect-h-9">
        <img 
          src={singleImageUrl} 
          alt={title} 
          className="w-full h-full object-cover rounded-sm"
        />
      </div>
    );
  }

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="flex flex-col gap-2">
      {/* Main Image Viewer */}
      <div className="relative group aspect-w-16 aspect-h-9 rounded-sm overflow-hidden">
        {/* Image with transition */}
        <div className="w-full h-full">
            <img 
              src={images[currentIndex]} 
              alt={`${title} view ${currentIndex + 1}`}
              className="w-full h-full object-cover transition-opacity duration-300"
              key={currentIndex} // Add key to trigger re-render on change for transitions
            />
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={goToPrevious} 
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-primary/50 text-light-slate p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-primary/80 z-10 focus:outline-none focus:ring-2 focus:ring-accent-pink"
          aria-label="Previous image"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={goToNext} 
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-primary/50 text-light-slate p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-primary/80 z-10 focus:outline-none focus:ring-2 focus:ring-accent-cyan"
          aria-label="Next image"
        >
          <ChevronRight size={24} />
        </button>
      </div>
      
      {/* Thumbnail Filmstrip */}
      <div className="flex justify-center gap-2 mt-1">
        {images.map((image, index) => (
          <button 
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-16 h-10 rounded-sm overflow-hidden border-2 transition-all duration-300 ease-custom-bezier focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-accent-cyan ${currentIndex === index ? 'border-accent-cyan scale-110' : 'border-transparent hover:border-dark-slate opacity-60 hover:opacity-100'}`}
            aria-label={`Go to image ${index + 1}`}
          >
            <img 
              src={image} 
              alt={`${title} thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProjectImageCollage;
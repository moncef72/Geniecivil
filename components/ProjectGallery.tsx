
import React, { useState, useEffect } from 'react';
import { Project } from '../types';

interface ProjectGalleryProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ project, onClose }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      setActiveIndex(0);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [project]);

  if (!project) return null;

  const next = () => setActiveIndex((prev) => (prev + 1) % project.gallery.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-fade-in">
      <div 
        className="absolute inset-0 bg-slate-950/95 backdrop-blur-xl cursor-zoom-out"
        onClick={onClose}
      ></div>
      
      <div className="relative z-10 w-full max-w-6xl flex flex-col h-full max-h-[90vh]">
        {/* Header Modale */}
        <div className="flex justify-between items-center mb-6 text-white">
          <div>
            <span className="text-orange-500 text-[10px] font-black uppercase tracking-widest mb-1 block">
              Projet {project.id} • {project.category}
            </span>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tighter">{project.title}</h3>
          </div>
          <button 
            onClick={onClose}
            className="w-12 h-12 rounded-full bg-white/10 hover:bg-orange-500 transition-colors flex items-center justify-center group"
          >
            <svg className="w-6 h-6 transition-transform group-hover:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Main Display Area */}
        <div className="relative flex-grow bg-black rounded-[2rem] overflow-hidden group shadow-2xl border border-white/5">
          <img 
            src={project.gallery[activeIndex]} 
            alt={`Chantier ${project.title} - Photo ${activeIndex + 1}`}
            className="w-full h-full object-contain transition-opacity duration-500"
          />

          {/* Navigation Arrows */}
          {project.gallery.length > 1 && (
            <>
              <button 
                onClick={prev}
                className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-orange-500 transition-all opacity-0 group-hover:opacity-100 backdrop-blur-md"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button 
                onClick={next}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-orange-500 transition-all opacity-0 group-hover:opacity-100 backdrop-blur-md"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
              </button>
            </>
          )}

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/50 backdrop-blur-md rounded-full text-[10px] font-bold text-white tracking-widest border border-white/10">
            {activeIndex + 1} / {project.gallery.length}
          </div>
        </div>

        {/* Thumbnails */}
        <div className="flex justify-center gap-4 mt-8 overflow-x-auto pb-4 px-2">
          {project.gallery.map((img, idx) => (
            <button 
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${idx === activeIndex ? 'border-orange-500 scale-110 shadow-lg' : 'border-transparent opacity-50 hover:opacity-100'}`}
            >
              <img src={img} className="w-full h-full object-cover" alt="miniature" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectGallery;

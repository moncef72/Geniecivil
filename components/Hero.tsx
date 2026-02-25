
import React from 'react';

interface HeroProps {
  onCtaClick: (e: React.MouseEvent) => void;
  onFeasibilityClick: (e: React.MouseEvent) => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick, onFeasibilityClick }) => {
  return (
    <div id="home" className="relative h-[95vh] flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Image - Real Construction Site Atmosphere */}
      <div 
        className="absolute inset-0 z-0 scale-105 opacity-60 transition-transform duration-[15s] ease-out animate-slow-zoom"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      
      {/* Gradient for legibility and "Tech" feel */}
      <div className="absolute inset-0 z-1 bg-gradient-to-tr from-slate-950 via-slate-950/40 to-orange-900/20"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-10 rounded-full bg-white/5 border border-white/10 backdrop-blur-md opacity-0 translate-y-4" style={{ animation: 'fadeInUp 0.8s ease-out 0.2s forwards' }}>
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
          <span className="text-white/80 text-[10px] font-bold uppercase tracking-[0.3em]">Élite Technique Vermeer 36*50</span>
        </div>
        
        <h1 className="text-6xl md:text-9xl font-extrabold text-white mb-10 leading-[0.85] tracking-tighter opacity-0 translate-y-6" style={{ animation: 'fadeInUp 1s cubic-bezier(0.22, 1, 0.36, 1) 0.4s forwards' }}>
          L'Ingénierie <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Sans Limite</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-slate-300 mb-14 max-w-2xl mx-auto font-light leading-relaxed opacity-0 translate-y-4" style={{ animation: 'fadeInUp 1s ease-out 0.6s forwards' }}>
          Maîtrise absolue du <strong>Sans Tranchée</strong>. MBCC déploie la puissance du Vermeer 36*50 pour vos réseaux structurants.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center opacity-0 translate-y-4" style={{ animation: 'fadeInUp 1s ease-out 0.8s forwards' }}>
          <button 
            onClick={onCtaClick}
            className="w-full sm:w-auto px-12 py-6 bg-white text-slate-900 rounded-full font-bold text-xs uppercase tracking-widest transition-all hover:bg-orange-500 hover:text-white transform hover:-translate-y-1 shadow-2xl active:scale-95"
          >
            Découvrir nos technologies
          </button>
          <button 
            onClick={onFeasibilityClick}
            className="w-full sm:w-auto px-12 py-6 bg-orange-500 text-white border border-orange-500/20 rounded-full font-bold text-xs uppercase tracking-widest transition-all transform hover:-translate-y-1 shadow-xl shadow-orange-500/30 hover:bg-white hover:text-slate-900 active:scale-95"
          >
            Étude technique gratuite
          </button>
        </div>
      </div>

      {/* Technical HUD-style data overlay */}
      <div className="absolute bottom-12 right-12 hidden lg:flex flex-col gap-4 text-right opacity-40 hover:opacity-100 transition-opacity">
        <div className="space-y-1">
          <p className="text-[10px] font-bold text-orange-500 uppercase tracking-widest">Opérationnel 24/7</p>
          <p className="text-2xl font-black text-white">Disponibilité Immédiate</p>
        </div>
        <div className="space-y-1">
          <p className="text-[10px] font-bold text-orange-500 uppercase tracking-widest">Couple de forage</p>
          <p className="text-2xl font-black text-white">6780 Nm</p>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slowZoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
        .animate-slow-zoom {
          animation: slowZoom 20s ease-out infinite alternate;
        }
      `}} />
    </div>
  );
};

export default Hero;

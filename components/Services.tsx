
import React from 'react';
import { SERVICES } from '../constants';

interface ServicesProps {
  onServiceClick: () => void;
}

const Services: React.FC<ServicesProps> = ({ onServiceClick }) => {
  return (
    <section id="services" className="py-32 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8 reveal">
          <div className="max-w-2xl">
            <h2 className="text-orange-500 text-[10px] font-bold tracking-[0.3em] uppercase mb-6">Expertises Techniques MBCC</h2>
            <h3 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
              Ingénierie de <br /><span className="text-orange-500">Haute Capacité</span>.
            </h3>
          </div>
          <p className="text-slate-500 max-w-sm text-sm leading-relaxed">
            Comme nos tunneliers de dernière génération, nos équipes déploient une puissance de calcul et d'exécution inégalée.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 reveal-container">
          {SERVICES.map((service, idx) => (
            <button 
              key={service.id} 
              onClick={onServiceClick}
              className="stagger-item text-left group relative p-10 bg-slate-50 rounded-[2.5rem] transition-all duration-500 hover:bg-slate-900 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10 overflow-hidden active:scale-95 border border-slate-100"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="relative z-10">
                <div className="w-14 h-14 mb-8 rounded-2xl bg-white flex items-center justify-center shadow-sm group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                
                <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-white transition-colors">
                  {service.title}
                </h4>
                
                <p className="text-slate-500 text-sm leading-relaxed mb-8 group-hover:text-slate-400 transition-colors line-clamp-3">
                  {service.description}
                </p>

                {/* Technical Specs Overlay */}
                <div className="pt-6 border-t border-slate-200 group-hover:border-white/10 flex flex-col gap-2">
                  {Object.entries(service.specs || {}).map(([key, val]) => (
                    <div key={key} className="flex justify-between items-center">
                      <span className="text-[10px] font-bold uppercase text-slate-400 group-hover:text-slate-500">{key}</span>
                      <span className="text-[10px] font-black text-slate-900 group-hover:text-orange-400">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                <span className="bg-orange-500 text-white text-[9px] font-black uppercase px-3 py-1 rounded-full tracking-tighter">Élite Tech</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

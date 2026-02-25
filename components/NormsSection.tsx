
import React from 'react';

const NormsSection: React.FC = () => {
  const norms = [
    {
      code: "ISO 9001",
      title: "Qualité de Management",
      desc: "Certification de nos processus organisationnels garantissant la conformité constante de nos forages et la satisfaction client.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      code: "ISO 14001",
      title: "Environnement",
      desc: "Engagement strict pour minimiser l'impact écologique de nos chantiers HDD, notamment par le recyclage des boues de forage.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
        </svg>
      )
    },
    {
      code: "ISO 45001",
      title: "Santé & Sécurité",
      desc: "Norme de référence pour la prévention des risques professionnels sur nos sites de micro-tunnelage et fonçage.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 17c-.77 1.333.192 3 1.732 3z" />
        </svg>
      )
    },
    {
      code: "NF EN 12889",
      title: "Trenchless Tech",
      desc: "Standard européen spécifique pour la réalisation de réseaux sans tranchée (Micro-tunnelage et Fonçage horizontal).",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    }
  ];

  return (
    <section id="norms" className="py-32 bg-slate-50 relative overflow-hidden scroll-mt-20">
      {/* Background Blueprint effect */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-blueprint"></div>
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center mb-24 reveal">
          <h2 className="text-orange-500 text-[10px] font-bold tracking-[0.4em] uppercase mb-6">Cadre Règlementaire MBCC</h2>
          <h3 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8">
            L'Excellence sous <br /><span className="text-orange-500">Haute Norme</span>.
          </h3>
          <p className="text-slate-500 max-w-2xl mx-auto font-light text-lg">
            La sécurité et la qualité ne sont pas des options. MBCC opère selon les standards internationaux les plus rigoureux pour garantir l'intégrité de vos infrastructures.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 reveal-container">
          {norms.map((norm, idx) => (
            <div 
              key={idx} 
              className="stagger-item bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-orange-500/5 hover:-translate-y-2 group"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="text-orange-500 mb-8 transition-transform duration-500 group-hover:scale-110">
                {norm.icon}
              </div>
              <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">{norm.code}</h4>
              <h5 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-orange-500 transition-colors">{norm.title}</h5>
              <p className="text-slate-500 text-sm leading-relaxed font-light">
                {norm.desc}
              </p>
              
              <div className="mt-8 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-[-10px] group-hover:translate-x-0">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                <span className="text-[9px] font-bold uppercase text-slate-400">Conformité Auditée</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-slate-900 rounded-[3rem] p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 reveal">
          <div className="max-w-xl">
            <h4 className="text-white text-2xl md:text-3xl font-bold mb-4">Besoin de certificats spécifiques pour votre appel d'offre ?</h4>
            <p className="text-slate-400 font-light">Notre bureau d'études fournit l'ensemble des attestations et rapports de conformité pour chaque phase de chantier.</p>
          </div>
          <a 
            href="#contact-form" 
            className="px-10 py-5 bg-orange-500 text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all whitespace-nowrap active:scale-95 shadow-lg shadow-orange-500/20"
          >
            Télécharger le Dossier Qualité
          </a>
        </div>
      </div>
    </section>
  );
};

export default NormsSection;

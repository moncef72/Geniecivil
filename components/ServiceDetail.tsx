
import React, { useEffect } from 'react';

interface ServiceDetailProps {
  onBack: () => void;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const CASE_STUDIES = [
    {
      title: "Alésage Haute Performance HDD",
      challenge: "Terrains mixtes abrasifs (silice/calcaire) nécessitant un couple constant.",
      solution: "Déploiement de notre nouvel aléseur à haute résistance (carbure de tungstène) avec buses d'injection optimisées.",
      result: "Réduction de 35% du temps d'alésage et usure réduite des tiges de forage sur 400m.",
      image: "https://i.ibb.co/RGsqs7V5/foncage.jpg?ato=format&fit=crop&w=800&q=80?auto=format&fit=crop&w=800&q=80?ato=format&fit=crop&w=800&q=80?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Réseau d'assainissement",
      challenge: "Interdiction formelle de tassement (tolérance < 2mm) sous une autoroute majeure.",
      solution: "Fonçage horizontal avec guidage laser gyroscopique MBCC et surveillance topographique.",
      result: "Pose de 120m de buses béton Ø1200 avec une précision MBCC de 5mm.",
      image: "https://i.ibb.co/SXcqNZtc/manchette-de-raccordement.jpg?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 animate-fade-in">
      {/* Header Technique */}
      <div className="max-w-7xl mx-auto px-8 mb-20">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-400 hover:text-orange-500 transition-colors mb-12 group"
        >
          <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Retour à MBCC Accueil</span>
        </button>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 leading-tight">
              Ingénierie MBCC <br /><span className="text-orange-500">Sans Tranchée</span>
            </h1>
            <p className="text-slate-500 text-lg font-light leading-relaxed mb-8">
              L'expertise MBCC repose sur la maîtrise des outils de coupe les plus avancés. Chaque tête de forage est sélectionnée pour sa performance pure en milieu hostile.
            </p>
          </div>
          <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Capacités d'Intervention MBCC</h2>
            <div className="space-y-6">
              <div className="flex justify-between border-b border-slate-200 pb-4">
                <span className="text-slate-900 font-bold text-sm">Longueurs Max</span>
                <span className="text-orange-500 font-bold text-sm">100m</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-4">
                <span className="text-slate-900 font-bold text-sm">Diamètres</span>
                <span className="text-orange-500 font-bold text-sm">Ø50mm à Ø1500mm</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-4">
                <span className="text-slate-900 font-bold text-sm">Sols Maîtrisés</span>
                <span className="text-orange-500 font-bold text-sm">Argile, Sable, Roche</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Retours d'Expériences (Case Studies) */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-16">
            <h2 className="text-slate-900 text-3xl md:text-5xl font-extrabold mb-4">Expériences MBCC Terrain</h2>
            <p className="text-slate-500 max-w-2xl">Découvrez comment nos outils de pointe résolvent des problématiques critiques lors de nos dernières interventions.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {CASE_STUDIES.map((study, idx) => (
              <div key={idx} className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 flex flex-col group">
                <div className="h-64 overflow-hidden bg-slate-100 flex items-center justify-center">
                  <img src={study.image} alt={study.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-10 flex-grow">
                  <h4 className="text-2xl font-bold text-slate-900 mb-6">{study.title}</h4>
                  <div className="space-y-6">
                    <div>
                      <p className="text-[10px] font-bold text-orange-500 uppercase tracking-widest mb-1">Le Défi</p>
                      <p className="text-slate-600 text-sm leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">La Solution MBCC</p>
                      <p className="text-slate-600 text-sm leading-relaxed">{study.solution}</p>
                    </div>
                    <div className="pt-4 mt-4 border-t border-slate-50">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Résultat final</p>
                      <p className="text-slate-900 font-bold text-sm">{study.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 text-center">
        <div className="max-w-4xl mx-auto px-8">
          <h3 className="text-3xl font-extrabold text-slate-900 mb-8">Partager une expertise MBCC sur votre projet ?</h3>
          <p className="text-slate-500 mb-12 font-light">Nos ingénieurs analysent vos contraintes pour vous proposer la meilleure expérience de franchissement.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button onClick={onBack} className="px-10 py-5 border border-slate-200 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-slate-50 transition-all">Retour</button>
            <a href="mailto:monceflaz72@gmail.com" className="px-10 py-5 bg-orange-500 text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-slate-900 transition-all">Contacter MBCC</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;

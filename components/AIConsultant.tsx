
import React, { useState } from 'react';
import { getEngineeringAdvice } from '../services/geminiService';

const AIConsultant: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleConsult = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setResponse('');
    const result = await getEngineeringAdvice(query);
    setResponse(result);
    setLoading(false);
  };

  return (
    <section id="ai-consult" className="py-32 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-[2.5rem] p-10 md:p-16 shadow-2xl shadow-slate-200/50 border border-slate-100">
          <div className="text-center mb-12">
            <span className="text-orange-500 text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block">Assistant MBCC IA</span>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Conseil Technique Immédiat</h3>
            <p className="text-slate-500 text-sm max-w-xl mx-auto leading-relaxed">
              Décrivez votre projet : problématique de franchissement, forage dirigé ou <strong>contrainte de soutènement en cintres dans les galeries souterraines</strong> pour obtenir une analyse préliminaire.
            </p>
          </div>

          <form onSubmit={handleConsult} className="relative">
            <div className="relative group">
              <textarea
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ex: Calcul de la contrainte de soutènement en cintres pour une galerie de 5m de diamètre en terrain meuble..."
                className="w-full bg-slate-50 border-0 text-slate-900 placeholder-slate-400 rounded-3xl p-6 md:p-8 focus:ring-2 focus:ring-orange-500/20 focus:outline-none transition-all min-h-[160px] text-sm md:text-base mb-6"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={loading || !query}
              className={`w-full py-5 rounded-full font-bold text-sm uppercase tracking-widest transition-all ${
                loading ? 'bg-slate-200 text-slate-400 cursor-not-allowed' : 'bg-slate-900 hover:bg-orange-500 text-white shadow-xl shadow-slate-900/10'
              }`}
            >
              {loading ? 'Analyse en cours...' : 'Consulter l\'IA MBCC'}
            </button>
          </form>

          {response && (
            <div className="mt-12 p-8 bg-slate-900 text-white rounded-3xl animate-fade-in relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 blur-3xl rounded-full translate-x-10 -translate-y-10"></div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center">
                   <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <span className="text-xs font-bold uppercase tracking-widest">Rapport de faisabilité MBCC IA</span>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-wrap">
                {response}
              </p>
              <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center">
                <span className="text-[10px] text-slate-500 italic">Validation ingénieur MBCC requise</span>
                <a href="#contact-form" className="text-[10px] font-bold uppercase text-orange-400 hover:text-white transition-colors underline underline-offset-4">Parler à un expert</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AIConsultant;

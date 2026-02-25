
import React, { useState } from 'react';

const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Forage Dirigé (HDD)',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const targetEmail = "monceflaz72@gmail.com";
    const subjectPrefix = "[MBCC CONTACT]";
    
    const body = `NOUVELLE DEMANDE DE PROJET MBCC\n` +
                 `==========================\n\n` +
                 `CLIENT : ${formData.name}\n` +
                 `EMAIL  : ${formData.email}\n` +
                 `TEL    : ${formData.phone}\n` +
                 `PROJET : ${formData.subject}\n\n` +
                 `MESSAGE DU CLIENT :\n` +
                 `--------------------------\n` +
                 `${formData.message}\n` +
                 `--------------------------\n\n` +
                 `Demande générée via le portail MBCC Engineering.`;

    const mailtoLink = `mailto:${targetEmail}?subject=${encodeURIComponent(`${subjectPrefix} ${formData.subject}`)}&body=${encodeURIComponent(body)}`;
    
    setSubmitted(true);
    
    const link = document.createElement('a');
    link.href = mailtoLink;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setSubmitted(false);
    }, 10000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact-form" className="py-32 bg-slate-50 scroll-mt-20 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-white rounded-[3.5rem] shadow-2xl shadow-slate-200/60 overflow-hidden border border-slate-100">
          <div className="grid lg:grid-cols-5">
            
            {/* Left Column: Info Panet (Dark) */}
            <div className="lg:col-span-2 bg-slate-900 p-12 md:p-16 text-white relative">
              <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-blueprint"></div>
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="mb-12">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-[10px] font-bold uppercase tracking-widest mb-6">
                    Canal Prioritaire
                  </span>
                  <h3 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight tracking-tighter">
                    Donnez vie à vos <span className="text-orange-500">ambitions</span> souterraines.
                  </h3>
                  <p className="text-slate-400 font-light leading-relaxed">
                    Besoin d'une étude technique rapide ou d'un devis pour un franchissement complexe ? Nos experts MBCC vous répondent sous 24 heures ouvrées.
                  </p>
                </div>

                <div className="space-y-10 mb-12 flex-grow">
                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <div>
                      <p className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-1">Expertise Directe</p>
                      <p className="text-lg font-bold text-white tracking-tight">monceflaz72@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <div>
                      <p className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-1">Siège Ingénierie</p>
                      <p className="text-lg font-bold text-white tracking-tight">12 Avenue des Ponts, Paris</p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/5">
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-3">
                      {[1, 2, 3].map(i => (
                        <img key={i} className="w-8 h-8 rounded-full border-2 border-slate-900" src={`https://i.pravatar.cc/100?u=${i}`} alt="Expert" />
                      ))}
                    </div>
                    <p className="text-[10px] text-slate-500 font-medium">Nos ingénieurs sont en ligne</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form Panel (Light) */}
            <div className="lg:col-span-3 p-12 md:p-16 bg-white relative">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-12 animate-fade-in">
                  <div className="w-28 h-28 bg-orange-500/10 rounded-full flex items-center justify-center text-orange-500 mb-8 animate-bounce-slow">
                    <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h4 className="text-4xl font-black text-slate-900 mb-4 tracking-tighter">Transmission en cours...</h4>
                  <p className="text-slate-500 mb-8 max-w-sm mx-auto leading-relaxed">
                    Votre demande a été structurée pour notre bureau d'études. Votre client mail va s'ouvrir pour finaliser l'envoi vers <strong>monceflaz72@gmail.com</strong>.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="group flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-orange-500 transition-all shadow-xl shadow-slate-900/10 active:scale-95"
                  >
                    <span>Modifier la demande</span>
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="group space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-focus-within:text-orange-500 transition-colors ml-1">Identité / Entreprise</label>
                      <div className="relative">
                        <input
                          required
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Nom complet"
                          className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 placeholder-slate-300 focus:bg-white focus:ring-4 focus:ring-orange-500/5 focus:border-orange-500/30 outline-none transition-all"
                        />
                      </div>
                    </div>
                    <div className="group space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-focus-within:text-orange-500 transition-colors ml-1">Téléphone de contact</label>
                      <input
                        required
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+33 6 ..."
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 placeholder-slate-300 focus:bg-white focus:ring-4 focus:ring-orange-500/5 focus:border-orange-500/30 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="group space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-focus-within:text-orange-500 transition-colors ml-1">Email professionnel</label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="votre@entreprise.com"
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 placeholder-slate-300 focus:bg-white focus:ring-4 focus:ring-orange-500/5 focus:border-orange-500/30 outline-none transition-all"
                    />
                  </div>

                  <div className="group space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-focus-within:text-orange-500 transition-colors ml-1">Type de Projet</label>
                    <div className="relative">
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:bg-white focus:ring-4 focus:ring-orange-500/5 focus:border-orange-500/30 outline-none transition-all appearance-none cursor-pointer"
                      >
                        <option>Forage Dirigé (HDD)</option>
                        <option>Fonçage de Conduite</option>
                        <option>Micro-tunnelage TBM</option>
                        <option>Étude Géotechnique G2</option>
                        <option>Expertise Technique MBCC</option>
                      </select>
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>
                  </div>

                  <div className="group space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-focus-within:text-orange-500 transition-colors ml-1">Détails techniques / Contraintes</label>
                    <textarea
                      required
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Expliquez-nous brièvement votre besoin (longueur, diamètre, nature du sol...)"
                      rows={4}
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 placeholder-slate-300 focus:bg-white focus:ring-4 focus:ring-orange-500/5 focus:border-orange-500/30 outline-none transition-all shadow-sm resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full group relative overflow-hidden bg-slate-900 text-white rounded-2xl py-6 font-black text-xs uppercase tracking-[0.3em] transition-all hover:bg-orange-500 shadow-xl shadow-slate-900/10 hover:shadow-orange-500/20 active:scale-[0.98]"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-4">
                      Envoyer au Bureau d'Études
                      <svg className="w-5 h-5 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                    </span>
                  </button>
                  
                  <p className="text-center text-[9px] text-slate-400 font-medium">
                    En cliquant, votre messagerie s'ouvrira pour envoyer la demande à monceflaz72@gmail.com
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}} />
    </section>
  );
};

export default ContactSection;


import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AIConsultant from './components/AIConsultant';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ServiceDetail from './components/ServiceDetail';
import ContactSection from './components/ContactSection';
import NormsSection from './components/NormsSection';
import ProjectGallery from './components/ProjectGallery';
import { PROJECTS } from './constants';
import { Project } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'details'>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Animation Observer Logic
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal, .reveal-container');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [currentPage]);

  const navigateToDetails = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setCurrentPage('details');
    window.scrollTo(0, 0);
  };

  const navigateToHome = () => {
    setCurrentPage('home');
    window.scrollTo(0, 0);
  };

  const handleNavClick = (href: string) => {
    const targetId = href.replace('#', '');
    
    const scrollToSection = () => {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    if (currentPage === 'details') {
      setCurrentPage('home');
      setTimeout(scrollToSection, 100);
    } else {
      scrollToSection();
    }
  };

  const handleFeasibilityClick = (e: React.MouseEvent) => {
    e.preventDefault();
    handleNavClick('#contact-form');
  };

  if (currentPage === 'details') {
    return (
      <div className="min-h-screen bg-white">
        <Navbar onBrandClick={navigateToHome} onNavClick={handleNavClick} />
        <ServiceDetail onBack={navigateToHome} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar onBrandClick={navigateToHome} onNavClick={handleNavClick} />
      
      <main>
        <Hero onCtaClick={navigateToDetails} onFeasibilityClick={handleFeasibilityClick} />
        
        {/* Intro Section - Human Expertise Featuring Moncef Laz */}
        <section id="about" className="py-32 bg-white overflow-hidden scroll-mt-20">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className="relative group reveal">
                <div className="absolute -inset-6 bg-orange-500/10 rounded-[4rem] scale-95 group-hover:scale-100 transition-transform duration-700"></div>
                {/* Profile Portrait */}
                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl z-10 bg-slate-100">
                  <img 
                    src="https://i.ibb.co/5hNBvHmG/tunnel.jpg?fit=crop&w=1200&q=80" 
                    alt="M Lazrak - Fondateur MBCC" 
                    className="w-full object-cover aspect-[4/5] grayscale hover:grayscale-0 transition-all duration-1000"
                  />
                  <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-slate-900 to-transparent">
                     <p className="text-white font-black text-2xl mb-1 tracking-tighter">M Lazrak</p>
                     <p className="text-orange-500 text-[10px] font-bold uppercase tracking-[0.3em]">Fondateur & Expert Technique</p>
                  </div>
                </div>
                
                {/* Floating Quote Card */}
                <div className="absolute -bottom-10 -right-6 z-20 bg-white p-8 rounded-[2rem] shadow-2xl border border-slate-100 max-w-xs hidden md:block animate-bounce-slow">
                  <svg className="w-8 h-8 text-orange-500 mb-4 opacity-30" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3L21.017 3V15C21.017 18.3137 18.3307 21 15.017 21H14.017ZM3.01697 21L3.01697 18C3.01697 16.8954 3.9124 16 5.01697 16H8.01697C8.56925 16 9.01697 15.5523 9.01697 15V9C9.01697 8.44772 8.56925 8 8.01697 8H5.01697C3.9124 8 3.01697 7.10457 3.01697 6V3L10.017 3V15C10.017 18.3137 7.3307 21 4.01697 21H3.01697Z" /></svg>
                  <p className="text-slate-600 text-sm italic font-light leading-relaxed">
                    "Ma priorité est d'apporter une réponse technique irréprochable là où les autres voient des obstacles."
                  </p>
                </div>
              </div>
              
              <div className="reveal" style={{ transitionDelay: '200ms' }}>
                <h2 className="text-orange-500 text-[10px] font-bold tracking-[0.3em] uppercase mb-6">La Direction Technique MBCC</h2>
                <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
                  L'expérience terrain au service de l'<span className="text-orange-500">innovation</span>.
                </h3>
                <p className="text-slate-500 text-lg mb-10 leading-relaxed font-light">
                  Depuis plus de 26 ans, nos compétence pilote des chantiers stratégiques d'assainissement et de forage à travers l’Allemagne, la France et le Maroc. Notre expertise garantit une vision réaliste et pragmatique de chaque défi souterrain.
                </p>
                
                <div className="grid grid-cols-2 gap-8 mb-12">
                  <div className="reveal" style={{ transitionDelay: '400ms' }}>
                    <div className="flex items-center gap-3 mb-1">
                       <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                       <p className="text-3xl font-black text-slate-900">+26</p>
                    </div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Années d'Expertise</p>
                  </div>
                  <div className="reveal" style={{ transitionDelay: '500ms' }}>
                    <div className="flex items-center gap-3 mb-1">
                       <span className="w-2 h-2 rounded-full bg-slate-900"></span>
                       <p className="text-3xl font-black text-slate-900">100%</p>
                    </div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Tirs de Forage Réussis</p>
                  </div>
                </div>

                <button 
                  onClick={navigateToDetails}
                  className="inline-flex items-center gap-6 group bg-slate-900 px-10 py-5 rounded-full hover:bg-orange-500 transition-all shadow-xl shadow-slate-900/10 active:scale-95"
                >
                  <span className="text-white font-bold text-xs uppercase tracking-[0.2em]">Consulter nos références</span>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transform group-hover:translate-x-2 transition-transform">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>

        <Services onServiceClick={navigateToDetails} />

        {/* ATELIER DE PRODUCTION METALLIQUE SECTION */}
        <section className="py-32 bg-slate-950 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-blueprint pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="reveal">
                <h2 className="text-orange-500 text-[10px] font-bold tracking-[0.4em] uppercase mb-6">Unité de Fabrication MBCC</h2>
                <h3 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
                  Atelier de production <br /><span className="text-orange-500">Métallique</span>.
                </h3>
                <p className="text-slate-400 text-lg mb-10 font-light leading-relaxed">
                  Notre atelier de conception et fabrication métallique nous permet de répondre aux besoins spécifiques de chaque chantier avec une réactivité totale.
                </p>
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
                  <div className="flex gap-4 items-start group">
                    <div className="w-6 h-6 rounded-full bg-orange-500/20 border border-orange-500 flex items-center justify-center text-orange-500 mt-1 group-hover:bg-orange-500 group-hover:text-white transition-all">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-white uppercase text-xs tracking-widest mb-1">Benne Industrielle</h4>
                      <p className="text-slate-500 text-sm">Fabrication robuste sur mesure pour la gestion des déblais.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start group">
                    <div className="w-6 h-6 rounded-full bg-orange-500/20 border border-orange-500 flex items-center justify-center text-orange-500 mt-1 group-hover:bg-orange-500 group-hover:text-white transition-all">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-white uppercase text-xs tracking-widest mb-1">Alésage & Swivel</h4>
                      <p className="text-slate-500 text-sm">Aléseurs et accessoires de haute résistance pour forage HDD.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start group sm:col-span-2">
                    <div className="w-6 h-6 rounded-full bg-orange-500/20 border border-orange-500 flex items-center justify-center text-orange-500 mt-1 group-hover:bg-orange-500 group-hover:text-white transition-all">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-white uppercase text-xs tracking-widest mb-1">Galerie Souterraine</h4>
                      <p className="text-slate-500 text-sm">Accessoires, cintres lourdes et légères pour le soutènement de galeries.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="reveal relative flex justify-center lg:justify-end" style={{ transitionDelay: '300ms' }}>
                 <div className="relative max-w-lg w-full">
                    {/* Background glow */}
                    <div className="absolute inset-0 bg-orange-500/10 blur-[100px] rounded-full scale-110"></div>
                    
                    {/* ATELIER IMAGE - High Tech Metal Fabrication style */}
                    <div className="relative z-10 bg-slate-900 p-4 rounded-[3rem] border border-white/5 shadow-2xl overflow-hidden group">
                       <img 
                        src="https://i.ibb.co/6J7h9Rcm/la-roue.jpg?auto=format&fit=crop&w=1200&q=80" 
                        alt="Expertise Métallique MBCC" 
                        className="rounded-[2.5rem] w-full h-auto object-cover aspect-[4/3] group-hover:scale-110 transition-transform duration-1000 brightness-75 group-hover:brightness-100"
                       />
                    </div>

                    {/* Technical floating badges - Positioned further left/right as requested */}
                    <div className="absolute -top-10 -left-20 bg-white p-7 rounded-[2.5rem] shadow-2xl animate-bounce-slow hidden md:block z-20 border border-slate-100">
                       <p className="text-slate-500 text-[8px] font-black uppercase tracking-widest mb-1">Soudure</p>
                       <p className="text-slate-900 text-3xl font-black">Hautes <span className="text-orange-500 text-sm">Normes</span></p>
                    </div>

                    <div className="absolute -bottom-10 -right-20 bg-white p-7 rounded-[2.5rem] shadow-2xl animate-bounce-slow hidden md:block z-20 border border-slate-100" style={{ animationDelay: '1.5s' }}>
                       <p className="text-orange-500 text-[8px] font-black uppercase tracking-widest mb-1">Maîtrise de l'Acier</p>
                       <p className="text-slate-900 text-2xl font-black leading-tight">Conception <br /><span className="text-orange-500 text-xs">Critique</span></p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        <NormsSection />

        {/* Section Réalisations (Projects) */}
        <section id="projects" className="py-32 bg-slate-900 text-white overflow-hidden scroll-mt-24">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 reveal">
              <div className="max-w-2xl">
                <h2 className="text-orange-500 text-[10px] font-bold tracking-[0.3em] uppercase mb-6">Portfolio MBCC</h2>
                <h3 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">Nos Réalisations <br />Majeures.</h3>
                <p className="text-slate-400 font-light">Cliquez sur un projet pour visualiser les étapes détaillées du chantier.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 reveal-container">
              {PROJECTS.map((p, idx) => (
                <div 
                  key={p.id} 
                  onClick={() => setSelectedProject(p)}
                  className="stagger-item relative h-[450px] group overflow-hidden rounded-[2.5rem] cursor-pointer bg-slate-800"
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <img 
                    src={p.imageUrl} 
                    alt={p.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-30"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent"></div>
                  
                  {/* Gallery Badge */}
                  <div className="absolute top-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                    <span className="flex items-center gap-2 bg-orange-500 text-white text-[9px] font-black uppercase px-3 py-1.5 rounded-full tracking-widest shadow-lg">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                      {p.gallery.length} Photos
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 p-8 w-full">
                    <div className="flex justify-between items-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div>
                        <span className="text-orange-500 text-[9px] font-bold uppercase tracking-[0.3em] mb-2 block">{p.category}</span>
                        <h4 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors mb-2">{p.title}</h4>
                        <p className="text-[10px] text-slate-400 line-clamp-1 opacity-0 group-hover:opacity-100 transition-opacity duration-700">{p.description}</p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                         <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <AIConsultant />

        <div className="scroll-mt-24" id="testimonials">
          <Testimonials />
        </div>
        
        <ContactSection />
      </main>

      <Footer />

      {/* Lightbox Gallery Overlay */}
      <ProjectGallery 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
};

export default App;

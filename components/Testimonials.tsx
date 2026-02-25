
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-orange-500 text-[10px] font-bold tracking-[0.3em] uppercase mb-6">Confiance & Expertise</h2>
            <h3 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">Ils nous font <br />confiance.</h3>
          </div>
          <p className="text-slate-500 max-w-sm text-sm leading-relaxed">
            La satisfaction de nos clients est le socle de notre réputation technique. Voici quelques retours sur nos collaborations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 flex flex-col relative group hover:bg-white hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500">
              <div className="absolute top-10 right-10 text-orange-500/20 group-hover:text-orange-500/40 transition-colors">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3L21.017 3V15C21.017 18.3137 18.3307 21 15.017 21H14.017ZM3.01697 21L3.01697 18C3.01697 16.8954 3.9124 16 5.01697 16H8.01697C8.56925 16 9.01697 15.5523 9.01697 15V9C9.01697 8.44772 8.56925 8 8.01697 8H5.01697C3.9124 8 3.01697 7.10457 3.01697 6V3L10.017 3V15C10.017 18.3137 7.3307 21 4.01697 21H3.01697Z" />
                </svg>
              </div>
              
              <div className="flex-grow">
                <p className="text-slate-600 text-lg font-light leading-relaxed mb-12 italic relative z-10">
                  "{t.content}"
                </p>
              </div>

              <div className="flex items-center gap-5 mt-4">
                <div className="relative">
                   <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full grayscale group-hover:grayscale-0 transition-all duration-500 object-cover border-2 border-white shadow-sm" />
                   <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-[10px] font-bold">✓</div>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">{t.name}</h4>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-orange-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

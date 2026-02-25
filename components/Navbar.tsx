
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onBrandClick: () => void;
  onNavClick: (href: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onBrandClick, onNavClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    onNavClick(href);
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Expertises', href: '#services' },
    { name: 'Normes', href: '#norms' },
    { name: 'Réalisations', href: '#projects' },
    { name: 'Témoignages', href: '#testimonials' },
    { name: 'Conseil IA', href: '#ai-consult' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-xl border-b border-slate-100 py-4 shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <button 
              onClick={(e) => { e.preventDefault(); onBrandClick(); }}
              className={`text-2xl font-black tracking-tighter transition-colors ${isScrolled ? 'text-slate-900' : 'text-white'}`}
            >
              MB<span className="text-orange-500">CC</span>
            </button>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-[11px] font-bold uppercase tracking-widest transition-all hover:text-orange-500 ${isScrolled ? 'text-slate-500' : 'text-white/70 hover:text-white'}`}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact-form"
                onClick={(e) => handleLinkClick(e, '#contact-form')}
                className={`px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all ${
                  isScrolled 
                  ? 'bg-slate-900 text-white hover:bg-orange-500 shadow-lg shadow-slate-900/10' 
                  : 'bg-white text-slate-900 hover:bg-orange-500 hover:text-white'
                }`}
              >
                Contact
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${isScrolled ? 'text-slate-900' : 'text-white'} p-2`}
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white fixed inset-0 z-40 flex flex-col items-center justify-center space-y-8 animate-fade-in">
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-8 right-8 text-slate-900"
          >
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-4xl font-black text-slate-900 hover:text-orange-500"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact-form"
            onClick={(e) => handleLinkClick(e, '#contact-form')}
            className="px-12 py-5 bg-orange-500 text-white rounded-full font-bold text-xl"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

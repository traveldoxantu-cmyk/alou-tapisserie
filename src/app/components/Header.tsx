import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ACCUEIL', href: '#' },
    { name: 'COLLECTION', href: '#collections' },
    { name: 'À PROPOS', href: '#our-story' },
    { name: 'GALERIE', href: '#collections' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl transition-all duration-500`}
    >
      <div 
        className={`flex items-center justify-between px-10 py-3 rounded-full transition-all duration-500 border ${
          isScrolled 
            ? 'bg-white shadow-[0_8px_40px_rgba(0,0,0,0.08)] border-white/20' 
            : 'bg-[#F2EEE8]/90 backdrop-blur-xl border-[#331D19]/10'
        }`}
      >
        {/* Left: Logo */}
        <div className="flex-1 flex justify-start">
          <Link to="/" className="transition-transform hover:scale-105 duration-300">
            <img 
              src="/assets/logo_principal.png" 
              alt="ALOU" 
              className="h-10 md:h-16 w-auto"
            />
          </Link>
        </div>

        {/* Center: Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative transition-colors duration-300 text-[10px] font-bold tracking-[0.2em] text-[#331D19] hover:text-[#331D19]/60 ${
                link.name === 'ACCUEIL' ? 'after:content-[""] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-px after:bg-[#331D19]' : ''
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="flex-1 hidden lg:flex items-center justify-end gap-6">
          <button 
            className="px-8 py-3 rounded-full text-[10px] font-bold tracking-[0.2em] transition-all uppercase border border-[#331D19] text-[#331D19] hover:bg-[#331D19] hover:text-white"
          >
            Connexion
          </button>
          <button 
            className="w-11 h-11 flex items-center justify-center rounded-full transition-all relative bg-[#F2EEE8] text-[#331D19] hover:bg-[#E5E1DA]"
          >
            <ShoppingBag size={18} />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#331D19] text-white text-[8px] flex items-center justify-center rounded-full font-bold">0</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden p-2 transition-colors ${isScrolled ? 'text-[#331D19]' : 'text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 right-0 z-40 bg-white/95 backdrop-blur-2xl rounded-[40px] p-10 shadow-2xl border border-white/20 lg:hidden"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-serif text-[#331D19] hover:pl-2 transition-all border-b border-[#331D19]/5 pb-4"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center justify-between mt-4">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex-1 mr-4 py-5 bg-[#331D19] text-white rounded-full text-center text-xs font-bold uppercase tracking-widest shadow-xl"
                >
                  Connexion
                </button>
                <div className="p-5 bg-[#F2EEE8] rounded-full text-[#331D19] relative">
                  <ShoppingBag size={24} />
                  <span className="absolute top-0 right-0 w-5 h-5 bg-[#331D19] text-white text-[10px] flex items-center justify-center rounded-full font-bold">0</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

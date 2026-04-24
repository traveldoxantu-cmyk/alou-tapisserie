import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router';

export const Footer = () => {
  return (
    <footer className="bg-[#331D19] pt-16 pb-8 rounded-t-[60px] md:rounded-t-[100px] text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* LA MARQUE */}
          <div className="space-y-4">
            <h4 className="text-sm font-serif uppercase tracking-widest">LA MARQUE</h4>
            <p className="text-white/60 text-xs leading-relaxed max-w-xs">
              ALOU TAPISSERIE est une marque artisanale d'excellence spécialisée dans la création de salons sur mesure.
            </p>
            <div className="pt-2">
              <img src="/assets/logo_white.png" alt="ALOU" className="h-14 w-auto" />
            </div>
          </div>

          {/* LIENS UTILES */}
          <div className="space-y-4">
            <h4 className="text-sm font-serif uppercase tracking-widest">LIENS UTILES</h4>
            <ul className="space-y-2 text-xs text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Conditions Générales</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Politiques de confidentialité</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Livraisons & Retours</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mentions Légales</a></li>
            </ul>
          </div>

          {/* À PROPOS */}
          <div className="space-y-4">
            <h4 className="text-sm font-serif uppercase tracking-widest">À PROPOS</h4>
            <ul className="space-y-2 text-xs text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Nos Collections</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Notre Savoir-faire</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Notre Histoire</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contactez-nous</a></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="space-y-4">
            <h4 className="text-sm font-serif uppercase tracking-widest">CONTACT</h4>
            <ul className="space-y-3 text-xs text-white/60">
              <li className="flex items-center gap-4">
                <MapPin size={14} className="shrink-0" />
                <span>DAKAR, SÉNÉGAL</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={14} className="shrink-0" />
                <span>contact@alou-tapisserie.com</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={14} className="shrink-0" />
                <span>+221 33 800 00 00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">
          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-white transition-colors"><Facebook size={18} /></a>
            <a href="#" className="hover:text-white transition-colors"><Instagram size={18} /></a>
            <a href="#" className="hover:text-white transition-colors"><Twitter size={18} /></a>
            <a href="#" className="hover:text-white transition-colors"><Phone size={18} /></a>
          </div>
          <p>© 2026, ALOU TAPISSERIE. DESIGNED BY ALOU STUDIO.</p>
        </div>
      </div>
    </footer>
  );
};

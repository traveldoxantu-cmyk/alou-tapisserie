import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { stats } from '../../data/stats';

export const Hero = () => {
  return (
    <section className="relative h-screen min-h-[750px] flex items-center justify-center overflow-hidden bg-[#331D19]">
      {/* Full Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="/assets/products/sofa_white_boucle.jpg"
          alt="Alou Tapisserie Showroom"
          className="w-full h-full object-cover grayscale-[0.05] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-[#331D19]/30"></div>
      </div>

      {/* Centered Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-white text-5xl md:text-8xl font-serif font-bold tracking-tight uppercase mb-6 leading-[1.1]">
            L'ART DU MEUBLE <br />
            <span className="italic font-light">SUR MESURE À DAKAR</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-white/70 text-xs md:text-sm tracking-[0.15em] uppercase mb-12 max-w-2xl mx-auto"
          >
            Salons, lits, fauteuils fabriqués à la main par nos artisans sénégalais.
          </motion.p>
          
          {/* Buttons removed as requested */}
        </motion.div>
      </div>

      {/* Stats counter removed as requested */}
    </section>
  );
};

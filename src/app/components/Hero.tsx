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

      {/* Glassmorphic Footer Overlay */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl h-[180px] md:h-[220px] bg-white/80 backdrop-blur-2xl rounded-t-[60px] md:rounded-t-[100px] z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.1)] border-x border-t border-white/40"
      >
        <div className="h-full flex items-center justify-center px-8 md:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-8 md:gap-12">
            {stats.map((stat, i) => (
              <div key={i} className="text-center space-y-2">
                <div className="text-2xl md:text-4xl font-serif text-[#331D19]">{stat.value}</div>
                <div className="text-[8px] md:text-[10px] font-bold tracking-[0.1em] text-[#331D19]/40 uppercase max-w-[100px] mx-auto">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

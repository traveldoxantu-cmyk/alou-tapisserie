import { motion } from 'motion/react';

export const OurStory = () => {
  return (
    <section id="our-story" className="py-32 bg-[#F2EEE8]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1000&auto=format&fit=crop"
                alt="Atelier Alou Tapisserie"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute bottom-10 right-[-20px] md:right-[-40px] bg-[#331D19] text-white rounded-[20px] px-8 py-6 shadow-2xl">
              <div className="font-serif text-2xl mb-1">Fondée en 2014</div>
              <div className="text-[10px] text-white/60 uppercase tracking-widest">À Dakar, Sénégal</div>
            </div>
          </motion.div>

          {/* Text Column */}
          <div className="space-y-10">
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-[10px] font-bold tracking-[0.4em] text-[#331D19]/40 uppercase mb-4"
              >
                NOTRE HISTOIRE
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-serif text-[#331D19] uppercase tracking-tight leading-tight"
              >
                Un savoir-faire <br /> né à Dakar
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6 text-[#331D19]/70 text-sm leading-relaxed"
            >
              <p>
                Depuis plus de 10 ans, Alou Tapisserie incarne l'excellence artisanale au Sénégal. 
                Fondée par des artisans passionnés, notre maison perpétue un savoir-faire 
                transmis de génération en génération.
              </p>
              <p>
                Chaque salon, chaque lit, chaque fauteuil est fabriqué à la main dans notre 
                atelier de Dakar, avec des matériaux soigneusement sélectionnés pour leur 
                qualité et leur durabilité.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-12 pt-6">
              <div>
                <div className="font-serif text-4xl text-[#331D19] mb-2">10+ ans</div>
                <div className="text-[10px] text-[#331D19]/40 uppercase font-bold tracking-widest">D'EXPÉRIENCE</div>
              </div>
              <div>
                <div className="font-serif text-4xl text-[#331D19] mb-2">5 000+</div>
                <div className="text-[10px] text-[#331D19]/40 uppercase font-bold tracking-widest">PIÈCES CRÉÉES</div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <a
                href="#collections"
                className="inline-block text-[#331D19] text-[10px] font-bold tracking-[0.2em] uppercase border-b border-[#331D19]/20 pb-2 hover:border-[#331D19] transition-all"
              >
                Voir nos créations
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

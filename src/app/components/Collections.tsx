import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const collections = [
  {
    id: 'oasis-beige',
    title: 'OASIS BEIGE',
    subtitle: 'MINIMALISME CONTEMPORAIN',
    price: 'Sur Devis',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'velours-royal',
    title: 'LE VELOURS ROYAL',
    subtitle: 'COLLECTION ÉMERAUDE',
    price: 'Sur Devis',
    image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1992&auto=format&fit=crop',
  },
  {
    id: 'tissu-boucle',
    title: 'TISSU BOUCLÉ',
    subtitle: 'COURBES SCULPTURALES',
    price: 'Sur Devis',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop',
  },
  {
    id: 'reproduction-fidele',
    title: 'MODÈLE SUR MESURE',
    subtitle: 'REPRODUCTION FIDÈLE',
    price: 'Sur Devis',
    image: 'https://images.unsplash.com/photo-1594913785202-58389bbc3379?q=80&w=2000&auto=format&fit=crop',
  },
];

export const Collections = () => {
  return (
    <section id="collections" className="py-32 bg-[#FDFCFB] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-serif text-[#331D19] uppercase tracking-tight mb-4"
          >
            COLLECTION
          </motion.h2>
          <motion.p
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3 }}
             className="text-[10px] font-bold tracking-[0.4em] text-[#331D19]/40 uppercase"
          >
            SAVOIR-FAIRE & ÉLÉGANCE
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {collections.map((col, index) => (
            <motion.div
              key={col.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <a href="#contact" className="block cursor-pointer">
                <div className="relative aspect-[4/5] rounded-[30px] overflow-hidden mb-6 bg-[#F2EEE8] border border-[#331D19]/5">
                  <ImageWithFallback
                    src={col.image}
                    alt={col.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  {/* Hover Overlay with Button */}
                  <div className="absolute inset-0 bg-[#331D19]/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px]">
                    <span className="px-8 py-3 bg-white text-[#331D19] rounded-full text-[10px] font-bold tracking-[0.2em] uppercase transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      S’informer
                    </span>
                  </div>
                </div>
                
                <div className="space-y-1">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-xl font-serif text-[#331D19] tracking-wide">{col.title}</h3>
                    <span className="text-xs font-bold text-[#331D19]">{col.price}</span>
                  </div>
                  <p className="text-[10px] font-bold tracking-widest text-[#331D19]/30 uppercase">{col.subtitle}</p>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { products } from '../../data/products';

export const BestSellers = () => {
  const [filter, setFilter] = useState('Tous');
  const categories = ['Tous', 'Salon', 'Lit', 'Fauteuil', 'Pouf'];

  const filteredProducts = filter === 'Tous' 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <section id="collections" className="py-32 bg-[#FDFCFB] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3 }}
             className="text-[10px] font-bold tracking-[0.4em] text-[#331D19]/40 uppercase mb-4"
          >
            NOS CRÉATIONS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-serif text-[#331D19] uppercase tracking-tight mb-8"
          >
            Savoir-faire & Élégance
          </motion.h2>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-300 ${
                  filter === cat 
                    ? 'bg-[#331D19] text-white shadow-lg' 
                    : 'bg-[#F2EEE8] text-[#331D19] hover:bg-[#E5E1DA]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((col, index) => (
              <motion.div
                key={col.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group"
              >
                <a href="#contact" className="block cursor-pointer">
                  <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden mb-6 bg-[#F2EEE8] border border-[#331D19]/5">
                    <ImageWithFallback
                      src={col.image}
                      alt={col.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    
                    {/* Badge */}
                    {col.badge && (
                      <div className="absolute top-6 left-6 bg-[#331D19] text-white text-[9px] px-4 py-1.5 rounded-full font-bold tracking-widest uppercase shadow-lg">
                        {col.badge}
                      </div>
                    )}

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-[#331D19]/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px]">
                      <span className="px-8 py-3 bg-white text-[#331D19] rounded-full text-[10px] font-bold tracking-[0.2em] uppercase transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        S’informer
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-serif text-[#331D19] tracking-wide mb-1">{col.title}</h3>
                        <p className="text-[10px] font-bold tracking-widest text-[#331D19]/30 uppercase">{col.subtitle}</p>
                      </div>
                    </div>
                    <div className="text-lg font-serif text-[#331D19] border-t border-[#331D19]/5 pt-3">
                      {col.price}
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

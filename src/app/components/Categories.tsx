import { motion } from 'motion/react';
import { categories } from '../../data/categories';

export const Categories = () => {
  return (
    <section id="categories" className="py-32 bg-[#FDFCFB]">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] font-bold tracking-[0.4em] text-[#331D19]/40 uppercase mb-4"
          >
            NOTRE UNIVERS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif text-[#331D19] uppercase tracking-tight"
          >
            Explorez nos catégories
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <motion.a
              key={cat.title}
              href={cat.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[280px] rounded-[30px] overflow-hidden bg-[#F2EEE8]"
            >
              <img
                src={cat.image}
                alt={cat.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#331D19]/80 via-[#331D19]/20 to-transparent transition-opacity group-hover:opacity-90"></div>
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-2 mb-3">
                  <cat.icon size={16} className="text-white/60" />
                  <span className="bg-white/10 backdrop-blur-sm text-white text-[9px] px-3 py-1 rounded-full font-bold tracking-widest uppercase">
                    {cat.count}
                  </span>
                </div>
                <h3 className="text-2xl font-serif text-white mb-1">{cat.title}</h3>
                <p className="text-white/60 text-[10px] uppercase tracking-widest leading-none">
                  {cat.subtitle}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

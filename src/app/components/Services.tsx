import React from 'react';
import { motion } from 'motion/react';
import { Sofa, Palette, Sparkles, Ruler } from 'lucide-react';

const services = [
  {
    icon: <Sofa className="w-6 h-6" />,
    title: 'Tapisserie de Luxe',
    description: 'Restauration et création de pièces uniques avec une précision artisanale.',
    tag: 'ARTISANAT',
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: 'Conseil en Design',
    description: 'Expertise dans le choix des nuances et des textures pour une harmonie parfaite.',
    tag: 'DESIGN',
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Matières Nobles',
    description: 'Sélection rigoureuse des tissus et cuirs les plus prestigieux du marché.',
    tag: 'QUALITÉ',
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-32 bg-[#FDFCFB] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="w-16 h-16 rounded-full bg-[#F2EEE8] flex items-center justify-center text-[#331D19] mb-10 group-hover:bg-[#331D19] group-hover:text-white transition-all duration-700">
                {service.icon}
              </div>
              
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#331D19]/40">
                  {service.tag}
                </span>
                <span className="h-px w-8 bg-[#331D19]/10"></span>
              </div>

              <h3 className="text-3xl font-serif text-[#331D19] mb-6 group-hover:translate-x-1 transition-transform duration-500">
                {service.title}
              </h3>
              
              <p className="text-[#331D19]/60 leading-relaxed mb-8 max-w-sm text-sm">
                {service.description}
              </p>
              
              <a href="#contact" className="text-[#331D19] text-[10px] font-bold tracking-[0.2em] uppercase flex items-center gap-2 group/btn relative overflow-hidden w-fit">
                <span className="relative z-10">EN SAVOIR PLUS</span>
                <div className="absolute bottom-0 left-0 w-full h-px bg-[#331D19] origin-left scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500"></div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

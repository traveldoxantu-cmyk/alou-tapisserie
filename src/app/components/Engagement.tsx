import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Zap, Layers, Sofa, Hammer } from 'lucide-react';

export const Engagement = () => {
  return (
    <section id="engagement" className="py-32 bg-[#FDFCFB] overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="mb-24">
          <h2 className="text-4xl md:text-6xl font-serif text-[#331D19] uppercase tracking-tight mb-4">
            Notre Engagement
          </h2>
          <div className="h-px w-24 bg-[#331D19]/20"></div>
        </div>

        {/* Engagement Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-12 bg-white rounded-[40px] border border-[#F2EEE8] shadow-sm group hover:shadow-xl transition-all duration-700"
          >
            <div className="h-1 bg-[#331D19] w-12 mb-8"></div>
            <h3 className="text-2xl font-serif text-[#331D19] mb-6">Reproduction Fidèle</h3>
            <p className="text-[#331D19]/60 leading-relaxed text-sm">
              Amenez-nous n'importe quel modèle vu sur Pinterest, dans un magazine ou une villa de luxe. 
              Nous le reproduisons à l'identique avec une précision artisanale absolue.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-12 bg-white rounded-[40px] border border-[#F2EEE8] shadow-sm group hover:shadow-xl transition-all duration-700"
          >
            <div className="h-1 bg-[#331D19] w-12 mb-8"></div>
            <h3 className="text-2xl font-serif text-[#331D19] mb-6">Qualité Dernière Génération</h3>
            <p className="text-[#331D19]/60 leading-relaxed text-sm">
              Nous utilisons des matériaux de pointe : mousses haute résilience, tissus antitaches 
              et structures en bois massif pour garantir une longévité exceptionnelle.
            </p>
          </motion.div>
        </div>

        {/* Matériaux Nobles Section */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-serif text-[#331D19] uppercase tracking-tight">
            Nos Matériaux Nobles
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Layers className="w-8 h-8" />,
              title: 'Tissus',
              desc: 'Velours italien, cuirs pleine fleur et bouclés haut de gamme.'
            },
            {
              icon: <Sofa className="w-8 h-8" />,
              title: 'Mousses',
              desc: 'Mousse HR (Haute Résilience) pour une assise qui ne s’affaisse jamais.'
            },
            {
              icon: <Hammer className="w-8 h-8" />,
              title: 'Châssis',
              desc: 'Structures en bois de hêtre ou de teck, assemblées pour durer.'
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 text-center space-y-6"
            >
              <div className="w-20 h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto text-[#331D19]/40 group-hover:text-[#331D19] transition-colors">
                {item.icon}
              </div>
              <h4 className="text-xl font-serif text-[#331D19]">{item.title}</h4>
              <p className="text-xs text-[#331D19]/60 leading-relaxed max-w-[200px] mx-auto">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <a
              href="#collections"
              className="inline-block px-12 py-4 bg-[#331D19] text-white rounded-full text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-[#331D19]/80 transition-all duration-500 shadow-xl"
            >
              Découvrir nos créations
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

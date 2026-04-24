import { motion } from 'motion/react';
import { processSteps } from '../../data/process';

export const Process = () => {
  return (
    <section id="process" className="py-16 md:py-32 bg-[#FDFCFB]">
      <div className="mx-4 md:mx-8 bg-[#331D19] rounded-[60px] py-24 md:py-32 px-6 overflow-hidden relative">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-24">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[10px] font-bold tracking-[0.4em] text-white/40 uppercase mb-4"
            >
              COMMENT ÇA MARCHE
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-serif text-white uppercase tracking-tight"
            >
              De l'idée à la livraison
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative group"
              >
                {/* Large Background Number */}
                <div className="absolute top-[-20px] left-[-10px] font-serif text-8xl text-white/5 pointer-events-none group-hover:text-white/10 transition-colors duration-700">
                  {step.number}
                </div>

                <div className="relative space-y-6">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white border border-white/10 group-hover:bg-white group-hover:text-[#331D19] transition-all duration-500">
                    <step.icon size={24} />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-serif text-white tracking-wide">{step.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Arrow for desktop */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 right-[-15%] text-white/20 text-2xl font-light">
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

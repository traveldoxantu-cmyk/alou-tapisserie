import React from 'react';
import { motion } from 'motion/react';
import { stats } from '../../data/stats';

export const Features = () => {
  return (
    <section className="py-20 bg-[#FDFCFB]">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-[#F2EEE8] p-12 md:p-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 items-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center space-y-4"
              >
                <div className="mb-2">
                  <stat.icon className="w-8 h-8 text-[#331D19]/40" />
                </div>
                <div className="text-4xl md:text-5xl font-serif text-[#331D19]">
                  {stat.value}
                </div>
                <div className="text-[10px] font-bold tracking-[0.2em] text-[#331D19]/40 uppercase max-w-[120px]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

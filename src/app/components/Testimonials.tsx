import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { testimonials } from '../../data/testimonials';

export const Testimonials = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' });

  return (
    <section id="testimonials" className="py-32 bg-[#FDFCFB] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
           <h2 className="text-5xl md:text-7xl font-serif text-[#331D19] uppercase tracking-tight">
             Témoignages <br />
             <span className="italic font-light text-[#8C827D]">de nos clients</span>
           </h2>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 gap-12">
          {testimonials.map((testi, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-12 md:p-16 rounded-[40px] relative border border-[#F2EEE8] shadow-[0_10px_40px_rgba(0,0,0,0.02)] group hover:border-[#331D19]/20 transition-all duration-700"
            >
              <Quote className="absolute top-12 right-12 w-12 h-12 text-[#331D19]/5" />
              
              <div className="flex gap-1 mb-10 text-[#331D19]">
                {[...Array(testi.rating)].map((_, i) => (
                  <Star key={i} fill="currentColor" size={14} />
                ))}
              </div>
              
              <p className="text-2xl font-serif text-[#331D19] leading-relaxed mb-12 italic">
                "{testi.content}"
              </p>
              
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-full bg-[#F2EEE8] overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                   <img src={`https://i.pravatar.cc/150?u=${testi.name}`} alt={testi.name} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-lg font-serif text-[#331D19]">{testi.name}</h4>
                  <p className="text-[#331D19]/40 text-[10px] font-bold uppercase tracking-[0.2em]">{testi.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((testi, i) => (
              <div key={i} className="flex-[0_0_100%] min-w-0 pl-4">
                <div className="bg-white p-10 rounded-[40px] relative border border-[#F2EEE8] shadow-sm">
                  <div className="flex gap-1 mb-8 text-[#331D19]">
                    {[...Array(testi.rating)].map((_, i) => (
                      <Star key={i} fill="currentColor" size={12} />
                    ))}
                  </div>
                  <p className="text-xl font-serif text-[#331D19] leading-relaxed mb-10 italic">
                    "{testi.content}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#F2EEE8] overflow-hidden grayscale">
                       <img src={`https://i.pravatar.cc/150?u=${testi.name}`} alt={testi.name} loading="lazy" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="text-base font-serif text-[#331D19]">{testi.name}</h4>
                      <p className="text-[#331D19]/40 text-[8px] font-bold uppercase tracking-[0.2em]">{testi.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

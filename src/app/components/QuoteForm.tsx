import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { Send, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

export const QuoteForm = () => {
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm();

  const onSubmit = async (data: any) => {
    await new Promise(resolve => setTimeout(resolve, 1500));
    toast.success('Votre message a été envoyé avec succès !');
    reset();
  };

  return (
    <section id="contact" className="py-32 bg-[#FDFCFB]">
      <div className="container mx-auto px-6">
        <div className="bg-[#331D19] rounded-[40px] p-12 md:p-24 overflow-hidden relative shadow-2xl">
          {/* Subtle light effect */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 blur-[120px] rounded-full"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
            <div>
              <h2 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-tight">
                Commençons <br />
                <span className="italic font-light text-[#E5E1DA]">votre projet.</span>
              </h2>
              <p className="text-[#E5E1DA]/60 text-lg mb-12 max-w-sm leading-relaxed">
                Une idée, un besoin ? Nos experts vous accompagnent pour transformer votre intérieur avec excellence.
              </p>
              
              <div className="space-y-8">
                 <div className="text-white">
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E5E1DA]/40 mb-2">EMAIL</div>
                    <a href="mailto:contact@alou-tapisserie.com" className="text-2xl font-serif border-b border-white/10 pb-4 flex items-center justify-between group cursor-pointer hover:text-[#E5E1DA] transition-colors">
                       contact@alou-tapisserie.com
                       <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform opacity-40 group-hover:opacity-100" />
                    </a>
                 </div>
                 <div className="text-white">
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E5E1DA]/40 mb-2">TÉLÉPHONE</div>
                    <a href="tel:+221338000000" className="text-2xl font-serif border-b border-white/10 pb-4 flex items-center justify-between group cursor-pointer hover:text-[#E5E1DA] transition-colors">
                       +221 33 800 00 00
                       <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform opacity-40 group-hover:opacity-100" />
                    </a>
                 </div>
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-10 bg-white/5 backdrop-blur-sm p-10 rounded-[30px] border border-white/10">
              <div className="space-y-8">
                <div className="group">
                  <label className="text-[10px] font-bold tracking-widest text-[#E5E1DA]/40 uppercase block mb-2">Nom Complet</label>
                  <input
                    {...register('name', { required: true })}
                    className="w-full bg-transparent border-b border-white/10 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white transition-all font-serif text-xl"
                    placeholder="Votre nom"
                  />
                </div>
                <div className="group">
                  <label className="text-[10px] font-bold tracking-widest text-[#E5E1DA]/40 uppercase block mb-2">Adresse Email</label>
                  <input
                    {...register('email', { required: true })}
                    className="w-full bg-transparent border-b border-white/10 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white transition-all font-serif text-xl"
                    placeholder="email@exemple.com"
                  />
                </div>
                <div className="group">
                  <label className="text-[10px] font-bold tracking-widest text-[#E5E1DA]/40 uppercase block mb-2">Message</label>
                  <textarea
                    {...register('message', { required: true })}
                    rows={4}
                    className="w-full bg-transparent border-b border-white/10 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white transition-all font-serif text-xl resize-none"
                    placeholder="Parlez-nous de votre projet..."
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 bg-[#FDFCFB] text-[#331D19] rounded-full font-bold text-xs tracking-[0.2em] uppercase hover:bg-white transition-all flex items-center justify-center gap-3 group shadow-xl"
              >
                {isSubmitting ? 'ENVOI EN COURS...' : 'ENVOYER LE MESSAGE'}
                <Send size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

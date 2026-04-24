import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/33123456789"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[90] w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.4)] group"
    >
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></div>
      <MessageCircle size={32} />
      
      {/* Tooltip */}
      <div className="absolute right-full mr-4 bg-white text-black py-2 px-4 rounded-xl font-bold text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
        Une question ? Contactez-nous !
      </div>
    </motion.a>
  );
};

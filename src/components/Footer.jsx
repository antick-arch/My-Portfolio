import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/10 py-20 w-full">
      <div className="max-w-[1200px] mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-2">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-lg font-bold text-white font-h1 uppercase tracking-widest"
          >
            DEV.PRTFL
          </motion.span>
          <p className="font-manrope text-sm text-slate-500 opacity-100 hover:opacity-80 transition-opacity">© 2024 Developer Portfolio. Engineered for Performance.</p>
        </div>
        <div className="flex gap-10">
          {['Github', 'LinkedIn', 'Twitter', 'Resume'].map((social, i) => (
            <motion.a 
              key={social}
              whileHover={{ y: -3, color: "rgba(59, 130, 246, 1)" }}
              className="text-slate-500 transition-colors font-manrope text-sm cursor-pointer" 
            >
              {social}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

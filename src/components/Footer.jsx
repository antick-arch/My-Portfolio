import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { name: 'Github', url: 'https://github.com/antick-arch' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/antick-chandra-kuri-941b532b3?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
    { name: 'YouTube', url: 'https://www.youtube.com/@silentkiller4.0' },
    { name: 'Resume', url: '#' }
  ];

  return (
    <footer className="bg-slate-950 border-t border-white/10 py-20 w-full">
      <div className="max-w-[1200px] mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-lg font-bold text-white font-h1 uppercase tracking-widest"
          >
            ANTICK
          </motion.span>
          <p className="font-manrope text-sm text-slate-500 opacity-100 hover:opacity-80 transition-opacity">© 2024 Developer Portfolio. Engineered for Performance.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {socialLinks.map((link, i) => (
            <motion.a 
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, color: "rgba(59, 130, 246, 1)" }}
              className="text-slate-500 transition-colors font-manrope text-sm cursor-pointer" 
            >
              {link.name}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

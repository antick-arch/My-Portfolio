import React from 'react';
import { motion } from 'framer-motion';
import antickChandraKuri from '../assets/antick-chandra-kuri.png';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
    },
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      const navbarHeight = 80; // Approximate navbar height
      const targetPosition = projectsSection.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="max-w-[1200px] mx-auto px-4 md:px-8 pt-24 md:pt-32 pb-20 md:pb-32 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden pointer-events-none -z-10">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 w-64 md:w-96 h-64 md:h-96 bg-primary-container/20 blur-[120px] rounded-full"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.12, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute top-[600px] md:top-[800px] right-10 w-64 md:w-80 h-64 md:h-80 bg-tertiary-container/20 blur-[100px] rounded-full"
        />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1 space-y-6 md:space-y-8 text-center lg:text-left z-10"
      >
        <motion.span 
          variants={itemVariants}
          className="inline-block px-4 py-1.5 rounded-full glass-card text-primary font-label-caps text-xs md:text-label-caps uppercase tracking-widest border-l-2 border-l-primary"
        >
          Available for projects
        </motion.span>
        
        <motion.h1 variants={itemVariants} className="font-h1 text-3xl md:text-5xl lg:text-6xl text-white leading-[1.1] md:leading-tight">
          Hi! I'm <span className="bg-gradient-to-r from-[#1e60ff] to-[#b6c4ff] bg-clip-text text-transparent">Antick Chandra Kuri</span>, a Full-Stack Engineer crafting digital experiences.
        </motion.h1>
        
        <motion.p variants={itemVariants} className="font-body-lg text-base md:text-lg lg:text-body-lg text-on-surface-variant max-w-xl mx-auto lg:mx-0">
          Turning complex problems into elegant, high-performance solutions with a focus on user-centric design and technical excellence.
        </motion.p>
        
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -10px rgba(30, 96, 255, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToProjects}
            aria-label="View Projects"
            className="bg-primary-container text-on-primary-container px-8 py-4 rounded-xl font-bold text-base md:text-lg transition-all"
          >
            View Projects
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-base md:text-lg transition-all"
          >
            Download CV
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="flex-1 flex justify-center relative z-10 w-full max-w-[400px] lg:max-w-none"
      >
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[480px] lg:h-[480px]">
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-0 bg-primary-container/20 rounded-full blur-3xl"
          />
          <div className="absolute inset-0 border border-primary/20 rounded-full animate-spin-slow" />
          <div className="absolute inset-4 border border-primary/10 rounded-full animate-spin-slow-reverse" />
          
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full h-full"
          >
            <img 
              className="w-full h-full object-cover rounded-full border-4 border-white/10 relative z-10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" 
              alt="Professional portrait of Antick Chandra Kuri" 
              src={antickChandraKuri} 
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

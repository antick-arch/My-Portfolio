import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'DigiTools: Digital Product Marketplace',
      desc: 'A sophisticated product showcase and cart-based web app where users can browse curated digital tools with a seamless interactive experience.',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426',
      tags: ['React', 'Vite', 'Tailwind CSS', 'Axios'],
      github: 'https://github.com/antick-arch/DigiTools',
      live: 'https://digitool-shopping.netlify.app/'
    },
    {
      title: 'BPL-Dream: Cricket Squad Architect',
      desc: 'An interactive squad builder featuring a complex player selection system with real-time coin management and validation logic.',
      img: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=2670',
      tags: ['React.js', 'Tailwind CSS', 'React-Toastify'],
      github: 'https://github.com/antick-arch/BPL-Dream',
      live: 'https://bpl-player-selector11.netlify.app/'
    },
    {
      title: 'LensCraft: Photography Portfolio',
      desc: 'Pixel-perfect transformation of a high-fidelity Figma design into a sophisticated photography portfolio with a dark aesthetic.',
      img: 'https://images.unsplash.com/photo-1452784444945-3f422708fe5e?auto=format&fit=crop&q=80&w=2672',
      tags: ['HTML5', 'Tailwind CSS', 'Figma'],
      github: 'https://github.com/antick-arch/LensCraft-A-Photography-Portfolio-Figma-to-Tailwind',
      live: 'https://antick-arch.github.io/LensCraft-A-Photography-Portfolio-Figma-to-Tailwind/'
    },
    {
      title: 'GitHub Issue Tracker',
      desc: 'A high-performance utility for tracking project issues, built with modern JavaScript ES6+ features and minimal design.',
      img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2670',
      tags: ['JavaScript ES6+', 'HTML5', 'Tailwind CSS'],
      github: 'https://github.com/antick-arch/github-issue-tracker',
      live: 'https://antick-arch.github.io/github-issue-tracker/'
    }
  ];

  return (
    <section className="py-[80px] md:py-[120px] px-4 md:px-8 max-w-[1200px] mx-auto" id="projects">
      <div className="flex flex-col items-center mb-12 md:mb-16 text-center">
        <span className="font-label-caps text-primary mb-4 block">PORTFOLIO.EXE</span>
        <h2 className="font-h2 text-3xl md:text-h2 text-white">Recent Projects</h2>
      </div>
      <div className="space-y-16 md:space-y-24">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="glass-panel rounded-3xl overflow-hidden flex flex-col lg:flex-row border border-white/10 group relative"
          >
            <div className="lg:w-2/5 aspect-[16/10] lg:aspect-[4/3] overflow-hidden relative">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                className="w-full h-full object-cover transition-all duration-700"
                alt={project.title}
                src={project.img}
              />
              <div className="absolute inset-0 bg-primary-container/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
            <div className="lg:w-3/5 p-6 md:p-12 flex flex-col justify-center bg-surface-container-low/50">
              <h3 className="font-h3 text-xl md:text-2xl lg:text-3xl text-white mb-4 group-hover:text-primary transition-colors leading-tight">{project.title}</h3>
              <p className="text-on-surface-variant text-sm md:text-base mb-8 leading-relaxed">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag, j) => (
                  <span key={j} className="px-2.5 py-1 bg-surface-container rounded-full text-[10px] md:text-xs font-semibold text-primary border border-primary/10 uppercase tracking-wider">{tag}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 mt-auto">
                <motion.a
                  whileHover={{ y: -3, backgroundColor: "rgba(30, 96, 255, 0.1)" }}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-surface-container text-white rounded-xl font-bold transition-all border border-white/5 text-sm md:text-base"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-symbols-outlined text-xl">terminal</span> GitHub
                </motion.a>
                <motion.a
                  whileHover={{ y: -3, boxShadow: "0 10px 20px -5px rgba(30, 96, 255, 0.4)" }}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-primary-container text-white rounded-xl font-bold transition-all text-sm md:text-base"
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-symbols-outlined text-xl">open_in_new</span> Live Demo
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

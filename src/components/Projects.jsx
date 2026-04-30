import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'GameHub: The Ultimate Livestreaming Platform',
      desc: 'This Twitch clone built with Next.js, Prisma, Tailwind, PostgreSQL, and TypeScript offers RTMP/WHIP streaming, real-time chat, viewer count, streamer dashboard, chat controls, and advanced search with SSR for speed.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZgF9oQqdCO05Sx2ob3hUDMOPX7bNo7H7BGRoNp0hgyFbxdSObIHzkrXsEiaf4WjefjnFNPxXWk4YS9Vb09esemwU5-h0PVsAOQCn5gSqMBuGNcJM0ov29D_7tx3iGh2cqImWgD9zbXrUYyuP7l5bwCInqb2-lopnhYkiEDoY1_P1xNMHYVUDHqSa-wcZse1zbzEK1MVGr8aU3qwG002s4lPz_QJN1gp17IUTRzckrXcxw4DxLMa0fnYAtSg3jeHZS4-5gfhMj1MQ',
      tags: ['TypeScript', 'Next.js', 'Node.js', 'Socket.io', 'PostgreSQL']
    },
    {
      title: 'FoodieHub: Complete Food Ordering & Delivery App',
      desc: 'Food Ordering App is a full-stack solution built with React.js, MongoDB, Express, Node.js, and Stripe. It offers secure order placement, user authentication, an admin panel, promo codes, and real-time updates.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRQim9NHr4o3eWLOqsR79gCV0o-BKmwTgVLS6r0_861WPU7veMDNTFU2Va_fthOiG3PU2D1ILD8Puanh4y9TSoUZBRmPmF_60taH8mz4MnNv1_kTHX7eaqeiFG9rnQ8p4Szr1YZvTb7ZIHtwEDXlGRbcfzL2mCBK87MB2RYoCoRml8bOFnf_R2ZZbb0yURX6tVu3JUwQPXDfX6stBiXoC7qdQeT2cvB-TDS1jS8mB-HZMvmzSNcb8ErcJEMn-Ge798HT7sS9awZVs',
      tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Stripe']
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
                  href="#"
                >
                  <span className="material-symbols-outlined text-xl">terminal</span> GitHub
                </motion.a>
                <motion.a 
                  whileHover={{ y: -3, boxShadow: "0 10px 20px -5px rgba(30, 96, 255, 0.4)" }}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-primary-container text-white rounded-xl font-bold transition-all text-sm md:text-base" 
                  href="#"
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

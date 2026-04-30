import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    { icon: 'terminal', title: 'Frontend Systems', desc: 'Building ultra-fast, accessible, and reactive user interfaces that convert users into advocates.', link: 'VIEW CASE STUDIES' },
    { icon: 'dns', title: 'API Design', desc: 'Engineering robust REST and GraphQL endpoints that serve as the backbone for complex applications.', link: 'VIEW DOCS' },
    { icon: 'speed', title: 'Perf Audits', desc: 'Identifying bottlenecks and optimizing Core Web Vitals to achieve perfect lighthouse scores.', link: 'IMPROVE SPEED' },
  ];

  return (
    <section className="py-[80px] md:py-[120px] bg-surface-container-lowest/50 px-4 md:px-8" id="services">
      <div className="max-w-[1200px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-20 flex flex-col md:flex-row justify-between items-center md:items-end gap-6 text-center md:text-left"
        >
          <div>
            <span className="font-label-caps text-primary mb-4 block">CAPABILITIES</span>
            <h2 className="font-h2 text-3xl md:text-h2 text-white">Full-Spectrum Engineering</h2>
          </div>
          <div className="hidden md:block h-[1px] flex-1 mx-12 lg:mx-20 bg-white/10"></div>
          <span className="text-on-surface-variant font-label-caps hidden sm:block">03 SERVICES</span>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ backgroundColor: "rgba(30, 96, 255, 1)" }}
              className="group relative bg-surface p-8 md:p-12 transition-all duration-500 border-b md:border-b-0 md:border-r border-white/5 last:border-0"
            >
              <motion.span 
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="material-symbols-outlined text-4xl text-primary group-hover:text-white mb-6 md:mb-8 transition-colors block"
              >
                {service.icon}
              </motion.span>
              <h3 className="font-h3 text-xl md:text-h3 text-white mb-4">{service.title}</h3>
              <p className="text-on-surface-variant group-hover:text-white/80 transition-colors mb-8 text-sm md:text-base leading-relaxed">{service.desc}</p>
              <div className="h-auto md:h-0 group-hover:h-12 overflow-hidden transition-all duration-500 mt-auto">
                <a className="text-white font-bold flex items-center gap-2 text-sm md:text-base" href="#">
                  {service.link} <span className="material-symbols-outlined">arrow_forward</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

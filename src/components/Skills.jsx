import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const skillsRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 85%",
        },
        y: 30,
        opacity: 0,
        stagger: 0.05,
        duration: 0.6,
        ease: "power3.out"
      });
    });
    return () => ctx.revert();
  }, []);

  const skills = [
    { icon: 'javascript', title: 'TypeScript', desc: 'Type-safe architecture & enterprise logic.' },
    { icon: 'layers', title: 'React / Next.js', desc: 'SSG, ISR, and dynamic edge rendering.' },
    { icon: 'database', title: 'PostgreSQL', desc: 'Complex relational data modeling.' },
    { icon: 'cloud', title: 'AWS / GCP', desc: 'Serverless and kubernetes orchestration.' },
    { icon: 'api', title: 'GraphQL', desc: 'Optimized federated data fetching.' },
    { icon: 'palette', title: 'Tailwind CSS', desc: 'Atomic design and design systems.' },
  ];

  return (
    <section ref={skillsRef} className="py-[80px] md:py-[120px] px-4 md:px-8 max-w-[1200px] mx-auto" id="skills">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
        <div className="lg:col-span-4 flex flex-col justify-between">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <span className="font-label-caps text-primary mb-4 block">CORE_STACK</span>
            <h2 className="font-h2 text-3xl md:text-h2 text-white mb-6">Technical Arsenal</h2>
            <p className="text-on-surface-variant font-body-md max-w-md mx-auto lg:mx-0">My expertise spans the full spectrum of high-performance development, focusing on scalability and speed.</p>
          </motion.div>
          <div className="mt-12 space-y-4 max-w-md mx-auto lg:mx-0 w-full">
            {[
              { label: 'BACKEND_PERFORMANCE', val: '98%' },
              { label: 'UI_PRECISION', val: '95%' },
              { label: 'CLOUD_INFRA', val: '92%' },
            ].map((stat, i) => (
              <div key={i} className="flex justify-between items-end border-b border-white/10 pb-2">
                <span className="font-label-caps text-xs md:text-sm">{stat.label}</span>
                <motion.span 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="text-primary font-bold"
                >
                  {stat.val}
                </motion.span>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-8">
          <div className="bg-surface-container-low rounded-xl border border-white/10 overflow-hidden h-[450px] md:h-[500px] flex flex-col shadow-2xl">
            <div className="flex items-center justify-between px-4 md:px-6 py-3 bg-surface-container border-b border-white/10">
              <div className="flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
              </div>
              <span className="font-label-caps text-[10px] md:text-xs opacity-50">terminal — skills.sh</span>
              <span className="material-symbols-outlined text-sm opacity-50">more_horiz</span>
            </div>
            <div className="p-6 md:p-8 font-mono text-xs md:text-sm overflow-y-auto terminal-scroll">
              <div className="mb-6">
                <p className="text-green-400 mb-1">$ system.analyze(tech_stack)</p>
                <p className="text-on-surface-variant">&gt; Scanning repositories...</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {skills.map((skill, i) => (
                  <motion.div 
                    key={i}
                    ref={el => cardsRef.current[i] = el}
                    whileHover={{ 
                      scale: 1.02, 
                      rotateY: 5,
                      boxShadow: "0 10px 30px rgba(30, 96, 255, 0.1)",
                      borderColor: "rgba(30, 96, 255, 0.3)"
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="p-4 bg-white/5 border border-white/5 rounded cursor-default transition-colors duration-300"
                  >
                    <span className="material-symbols-outlined text-primary mb-2 text-xl md:text-2xl">{skill.icon}</span>
                    <p className="font-bold text-white mb-1 text-sm md:text-base">{skill.title}</p>
                    <p className="text-[10px] md:text-xs text-on-surface-variant leading-relaxed">{skill.desc}</p>
                  </motion.div>
                ))}
              </div>
              <p className="mt-8 text-green-400">$ exit_</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

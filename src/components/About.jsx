import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/antick-chandra-kuri.png';

const About = () => {
  const stats = [
    { label: 'Projects', value: '15+' },
    { label: 'Years Exp', value: '2+' },
    { label: 'LeetCode', value: '500+' },
  ];

  const highlights = [
    {
      icon: 'code',
      title: 'Frontend Development',
      description: 'React, Tailwind, Modern JS',
    },
    {
      icon: 'devices',
      title: 'Responsive Design',
      description: 'Pixel-perfect execution',
    },
    {
      icon: 'terminal',
      title: 'Problem Solving',
      description: 'Data Structures & Algos',
    },
    {
      icon: 'palette',
      title: 'UI/UX Strategy',
      description: 'User-centric methodology',
    },
  ];

  return (
    <section className="min-h-screen pt-28 pb-16 px-4 md:px-8 font-['Plus_Jakarta_Sans']">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Profile & Stats Section (Left Column) */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col items-center gap-8"
          >
            <div className="relative group w-full max-w-[500px]">
              {/* Decorative Background Element */}
              <div className="absolute -inset-10 bg-gradient-to-tr from-primary-container/20 to-tertiary-container/20 rounded-full blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-1000 animate-pulse"></div>
              
              <motion.div
                animate={{ translateY: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 group-hover:shadow-primary-container/20"
              >
                <img
                  alt="Profile image"
                  className="w-full aspect-[4/5] object-cover"
                  src={profileImg}
                />
                {/* Floating Availability Badge */}
                <div className="absolute bottom-6 left-6 glass-card px-4 py-2 rounded-full flex items-center gap-2 border border-white/20 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-ping"></span>
                  <span className="text-[12px] font-bold uppercase tracking-wider text-white">Available for hire</span>
                </div>
              </motion.div>
            </div>

            {/* Stats Grid */}
            <div className="w-full grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="glass-card p-4 rounded-2xl text-center shadow-sm hover:translate-y-[-4px] transition-transform duration-300"
                >
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Content Section (Right Column) */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col gap-8"
          >
            <div className="glass-card p-8 lg:p-12 rounded-[2rem] border border-white/10 shadow-xl">
              <div className="inline-block bg-primary-container text-white px-5 py-1.5 rounded-full text-[12px] font-bold mb-6 uppercase tracking-[0.2em]">
                About Me
              </div>
              
              <h1 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                I’m a passionate Frontend Developer building <span className="text-primary-container italic">clean & user-friendly</span> web experiences.
              </h1>
              
              <p className="text-lg text-slate-400 mb-8 max-w-2xl leading-relaxed">
                I am a Computer and Communication Engineering student at IIUC, focused on modern web development. I enjoy turning complex ideas into elegant, responsive real-world projects.
              </p>

              {/* Key Highlights Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors duration-300 border border-transparent hover:border-white/10"
                  >
                    <div className="w-12 h-12 shrink-0 rounded-xl bg-primary-container text-white flex items-center justify-center shadow-md">
                      <span className="material-symbols-outlined">{item.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-white font-bold mb-1">{item.title}</h3>
                      <p className="text-slate-400 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Motto Section */}
              <div className="border-l-[6px] border-primary-container pl-6 py-6 mb-8 bg-primary-container/10 rounded-r-2xl">
                <p className="text-xl italic text-white leading-relaxed">
                  "My motto is 'Do or Die' — I always push myself beyond limits to deliver excellence."
                </p>
              </div>

              {/* CTA Actions */}
              <div className="flex flex-wrap gap-4 items-center">
                <button className="bg-primary-container text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:shadow-2xl hover:scale-105 transition-all active:scale-95 duration-300 group">
                  <span className="material-symbols-outlined group-hover:animate-bounce">download</span>
                  Download Resume
                </button>
                <button className="bg-transparent text-white border-2 border-white/20 px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-white hover:text-black transition-all active:scale-95 duration-300">
                  <span className="material-symbols-outlined">mail</span>
                  Get In Touch
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

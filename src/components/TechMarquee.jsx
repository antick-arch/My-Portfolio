import React from 'react';

const TechMarquee = () => {
  const techs = ['REACT.JS', 'NODE.JS', 'TYPESCRIPT', 'NEXT.JS', 'GRAPHQL', 'TAILWIND CSS', 'POSTGRESQL', 'AWS CLOUD', 'DOCKER'];

  return (
    <section className="py-12 border-y border-white/5 bg-surface-container-lowest/30 overflow-hidden relative">
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10"></div>
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10"></div>
      <div className="marquee-container flex">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16 px-8">
          {techs.map((tech, i) => (
            <span key={i} className="text-primary font-label-caps text-label-caps tracking-[0.2em] opacity-60 hover:opacity-100 transition-opacity cursor-default">{tech}</span>
          ))}
          {/* Duplicate for seamless loop */}
          {techs.map((tech, i) => (
            <span key={`dup-${i}`} className="text-primary font-label-caps text-label-caps tracking-[0.2em] opacity-60 hover:opacity-100 transition-opacity cursor-default">{tech}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechMarquee;

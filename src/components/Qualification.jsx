import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Qualification = () => {
  const lineRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 20%",
            end: "bottom 80%",
            scrub: true
          }
        }
      );
    });
    return () => ctx.revert();
  }, []);

  const experiences = [
    { title: 'Member Secretary At Computer And Communication Engineering Club', company: 'International Islamic University Chittagong', date: 'Spring 2026 - Present' },
    { title: 'Problem Solver', company: 'Codeforce, CodeChef, HackerRank', date: 'Spring: 2024 - Present' },
    { title: 'Full-Stack Developer', company: 'Upwork, Freelancer', date: 'Spring: 2024 - Present' },
  ];

  const education = [
    { title: 'B.Sc. Engg. In Computer and Communication Engineering', company: 'International Islamic University Chittagong', date: 'Spring: 2024 - Autumn: 2027' },
    { title: 'Higher Secondary School Certificate', company: 'Iqbal Memorial Govt. College', date: 'Nov 2, 2024' },
    { title: 'Secondary School Certificate', company: 'Jamidar Hat Begum Nurunnahar High School', date: 'Nov 9, 2024' },
  ];

  return (
    <section ref={sectionRef} className="py-[80px] md:py-[120px] px-4 md:px-8 max-w-[1200px] mx-auto overflow-visible" id="qualification">
      <div className="flex flex-col items-center mb-16 text-center">
        <span className="font-label-caps text-primary mb-4 block">MY JOURNEY</span>
        <h2 className="font-h2 text-3xl md:text-h2 text-white">Qualification</h2>
      </div>

      <div className="relative w-full">
        {/* Vertical Timeline Line */}
        <div
          ref={lineRef}
          className="absolute left-4 lg:left-1/2 lg:-translate-x-1/2 w-[2px] h-full origin-top"
          style={{ background: 'linear-gradient(to bottom, transparent, #1e60ff 10%, #1e60ff 90%, transparent)' }}
        ></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 lg:gap-32">
          {/* Experience Section */}
          <div className="space-y-12">
            <div className="flex items-center lg:justify-end gap-4 mb-12 pl-12 lg:pl-0">
              <h3 className="font-h3 text-xl md:text-h3 text-white">Experience</h3>
              <span className="material-symbols-outlined text-primary text-2xl md:text-3xl">work</span>
            </div>

            <div className="space-y-12">
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative pl-12 lg:pl-0 lg:pr-12 text-left lg:text-right group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[13px] lg:left-auto lg:right-[-1px] lg:translate-x-1/2 top-1.5 w-3 h-3 bg-[#1e60ff] rounded-full shadow-[0_0_10px_#1e60ff] z-10" />

                  <h4 className="font-bold text-white text-lg md:text-xl group-hover:text-primary transition-colors">{exp.title}</h4>
                  <p className="text-primary font-label-caps text-xs md:text-sm mb-2">{exp.company}</p>
                  <p className="text-on-surface-variant flex items-center lg:justify-end gap-2 text-xs md:text-sm">
                    <span className="material-symbols-outlined text-[10px] md:text-xs">calendar_today</span> {exp.date}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-12">
            <div className="flex items-center gap-4 mb-12 pl-12 lg:pl-0">
              <span className="material-symbols-outlined text-primary text-2xl md:text-3xl">school</span>
              <h3 className="font-h3 text-xl md:text-h3 text-white">Education</h3>
            </div>

            <div className="space-y-12">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative pl-12 lg:pl-12 text-left group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[13px] lg:left-[-1px] lg:-translate-x-1/2 top-1.5 w-3 h-3 bg-[#1e60ff] rounded-full shadow-[0_0_10px_#1e60ff] z-10" />

                  <h4 className="font-bold text-white text-lg md:text-xl group-hover:text-primary transition-colors">{edu.title}</h4>
                  <p className="text-primary font-label-caps text-xs md:text-sm mb-2">{edu.company}</p>
                  <p className="text-on-surface-variant flex items-center gap-2 text-xs md:text-sm">
                    <span className="material-symbols-outlined text-[10px] md:text-xs">calendar_today</span> {edu.date}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;

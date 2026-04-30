import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Smooth scroll progress for the circle
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(30, 96, 255, 0.5)" }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 z-[60] w-14 h-14 bg-slate-900 border border-white/10 rounded-full flex items-center justify-center text-primary group shadow-2xl overflow-hidden"
          aria-label="Scroll to top"
        >
          {/* Progress Ring */}
          <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none">
            <motion.circle
              cx="28"
              cy="28"
              r="26"
              stroke="currentColor"
              strokeWidth="2"
              fill="transparent"
              className="text-primary/20"
            />
            <motion.circle
              cx="28"
              cy="28"
              r="26"
              stroke="currentColor"
              strokeWidth="2"
              fill="transparent"
              style={{
                pathLength: scrollYProgress,
              }}
              className="text-primary"
            />
          </svg>

          {/* Arrow Icon */}
          <motion.span 
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="material-symbols-outlined text-2xl relative z-10 group-hover:text-white transition-colors"
          >
            arrow_upward
          </motion.span>

          {/* Hover Glow */}
          <div className="absolute inset-0 bg-primary-container/0 group-hover:bg-primary-container/10 transition-colors" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;

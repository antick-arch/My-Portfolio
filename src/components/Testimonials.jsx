import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    { quote: "Exceptional technical depth. Delivered a complex migration ahead of schedule with zero downtime for our 500k users.", name: "James Arclight", role: "CTO @ TECHFLOW", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTa59fsfjrZjOxUqtW9BMTp1TgQEWIuakz_c96W-R7paGcmGWwiUw34j4hbj91R9aC0QptmXVH0eSBRrQPIQEqW3RmWrVVx6ZIVm6Mj7nWpviFgXlzhSVm8Jhetj1M3FkEpk1LzifvHDoUqsFMoxPKrtK_4NNdnau4LFOUdpCWclWCHtQhngM5p1l0oi8Cm3tJelgeMBSHZVywyV-Wb2pY3iWswuhUsFPLXfeuiCorSAILpg1D-RFagQI3UPfLvA5ZW3Q5IrEkKy0" },
    { quote: "His ability to translate business requirements into high-performance code is unmatched. A true partner in our growth.", name: "Sarah Chen", role: "FOUNDER @ VELOCITY", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXOqh6nQ2-cEG8PxR4ZfGGc2jufzlW-NLYKTYmKB0IVhFGHtQAKGsBHQ5et20CFaQyIE-YPJ3DvBFp31lOyc33M0sJl68XHNh0hMoq4LbDGMG1spHah19Cq88byYEmGcSWdGgbCe_nlE2Pl2eYR150ZdoVN10rJY-qhPpD5zl78IaAEE3-b24mZJW5Dpkp_q2BtlP9C1-O2LePxAo2-TIggH24GWV3hMtsVi6B8o9-M_1r_LLYbMH8ayxK91r1rYSWv_Z3iSz4VEg" },
    { quote: "One of the few developers who actually understands UI design. The precision in his frontend work is incredible.", name: "Marcus Thorne", role: "DESIGN DIR @ PIXELMIND", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwn3x_9S97h3GAAeClSZcg8jXR5tHVQmbbKKoAd7Y3KXhWUdCSj82ndQt200r7piTLdPiB34LNMGzwbVzRgdYrkKNLZX1P5zzBm5z3sieKXLJvLmcb0CTz33kgczEXGizyke0FF5qQwJ7nRbnZmR2oAHM4hv9Dk0-NxCxoLIGBHgs_i1iaSXx7ztN6LLNCmpR-6HNqUvtY33aO78ZDL8L2DjsLQYpD5AbG2H9ka8kM2Vhqq1ke_9hCVT7nkTf1gmdfXR4tS8GWIUI" }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-[80px] md:py-[120px] bg-primary-container/5 overflow-hidden px-4 md:px-8">
      <div className="max-w-[1200px] mx-auto mb-10 md:mb-16 flex flex-col md:flex-row justify-between items-center md:items-end gap-6 text-center md:text-left">
        <div>
          <span className="font-label-caps text-primary mb-4 block">RECOGNITION</span>
          <h2 className="font-h2 text-3xl md:text-h2 text-white">Trust from Industry Leaders</h2>
        </div>
        <div className="flex gap-4">
          <button onClick={prev} className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all transition-colors" aria-label="Previous testimonial">
            <span className="material-symbols-outlined text-sm md:text-base">arrow_back</span>
          </button>
          <button onClick={next} className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all transition-colors" aria-label="Next testimonial">
            <span className="material-symbols-outlined text-sm md:text-base">arrow_forward</span>
          </button>
        </div>
      </div>
      
      <div className="relative min-h-[500px] md:min-h-[400px] max-w-[1200px] mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full"
          >
            <div className="glass-panel p-8 md:p-12 rounded-3xl border-t-4 border-t-primary flex flex-col md:flex-row gap-8 md:gap-12 items-center text-center md:text-left">
              <div className="w-24 h-24 md:w-48 md:h-48 rounded-2xl overflow-hidden shrink-0 border-2 border-primary/20 shadow-xl">
                <img className="w-full h-full object-cover" alt={testimonials[activeIndex].name} src={testimonials[activeIndex].img} />
              </div>
              <div className="flex-1">
                <span className="material-symbols-outlined text-4xl md:text-6xl text-primary/20 mb-4 md:mb-6 block">format_quote</span>
                <p className="text-white text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 leading-relaxed italic">"{testimonials[activeIndex].quote}"</p>
                <div>
                  <p className="font-bold text-white text-lg md:text-xl">{testimonials[activeIndex].name}</p>
                  <p className="text-xs md:text-sm font-label-caps text-primary tracking-widest mt-1 uppercase">{testimonials[activeIndex].role}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Testimonials;

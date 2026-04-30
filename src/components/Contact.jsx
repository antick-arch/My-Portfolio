import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-4 md:px-8 py-[80px] md:py-[120px]" id="contact">
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col lg:flex-row glass-card rounded-[24px] md:rounded-[32px] overflow-hidden shadow-2xl"
      >
        <div className="flex-1 bg-primary-container p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="z-10">
            <h2 className="font-h2 text-3xl md:text-h2 mb-6 leading-tight">Let's build something extraordinary together.</h2>
            <p className="opacity-80 mb-12 text-base md:text-lg">Whether you have a specific project in mind or just want to chat about tech, I'm always open to new connections.</p>
            <div className="space-y-6 md:space-y-8">
              {[
                { icon: 'mail', label: 'Email Me', value: 'hello@leocarter.dev' },
                { icon: 'call', label: 'Call Me', value: '+1 (555) 000-1234' },
                { icon: 'location_on', label: 'Location', value: 'San Francisco, CA' },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 md:gap-6"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-xl md:text-2xl">{item.icon}</span>
                  </div>
                  <div>
                    <span className="block text-white/60 text-[10px] md:text-xs uppercase font-label-caps tracking-widest">{item.label}</span>
                    <span className="text-base md:text-lg font-bold truncate">{item.value}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="flex gap-4 mt-12 z-10">
            {['public', 'group', 'terminal'].map((icon, i) => (
              <motion.a 
                key={i}
                whileHover={{ y: -3, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition-colors" 
                href="#"
              >
                <span className="material-symbols-outlined text-xl">{icon}</span>
              </motion.a>
            ))}
          </div>
        </div>
        <div className="flex-[1.2] p-8 md:p-12 bg-surface-container">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-on-surface-variant font-label-caps text-[10px] md:text-xs uppercase tracking-wider">Your Name</label>
                <motion.input 
                  whileFocus={{ borderColor: "rgba(30, 96, 255, 1)", scale: 1.01 }}
                  className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3.5 text-white outline-none transition-all text-sm md:text-base focus:bg-background" 
                  placeholder="John Doe" 
                  type="text" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-on-surface-variant font-label-caps text-[10px] md:text-xs uppercase tracking-wider">Email Address</label>
                <motion.input 
                  whileFocus={{ borderColor: "rgba(30, 96, 255, 1)", scale: 1.01 }}
                  className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3.5 text-white outline-none transition-all text-sm md:text-base focus:bg-background" 
                  placeholder="john@example.com" 
                  type="email" 
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-on-surface-variant font-label-caps text-[10px] md:text-xs uppercase tracking-wider">Subject</label>
              <div className="relative">
                <select className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3.5 text-white outline-none transition-all appearance-none text-sm md:text-base focus:bg-background">
                  <option>Freelance Project</option>
                  <option>Full-time Opportunity</option>
                  <option>Just Saying Hi</option>
                </select>
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">expand_more</span>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-on-surface-variant font-label-caps text-[10px] md:text-xs uppercase tracking-wider">Message</label>
              <motion.textarea 
                whileFocus={{ borderColor: "rgba(30, 96, 255, 1)", scale: 1.01 }}
                className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3.5 text-white outline-none transition-all resize-none text-sm md:text-base focus:bg-background" 
                placeholder="Tell me about your project..." 
                rows="4"
              />
            </div>
            <motion.button 
              whileHover={{ 
                scale: 1.01, 
                backgroundColor: "rgba(30, 96, 255, 0.9)",
                boxShadow: "0 10px 20px -5px rgba(30, 96, 255, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-primary-container text-white py-4 rounded-xl font-bold text-base md:text-lg transition-all" 
              type="submit"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  const navBackground = useTransform(
    scrollY,
    [0, 50],
    ['rgba(12, 19, 36, 0)', 'rgba(12, 19, 36, 0.9)']
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '/', isRouter: true },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '/about', isRouter: true },
    { name: 'Contact', href: '#contact' },
  ];

  const getHref = (href) => {
    if (href.startsWith('#') && location.pathname !== '/') {
      return `/${href}`;
    }
    return href;
  };

  return (
    <>
      <motion.nav
        style={{ backgroundColor: navBackground }}
        className={`fixed top-0 w-full z-[100] backdrop-blur-xl border-b transition-all duration-300 ${isScrolled ? 'border-white/10 h-16 md:h-20' : 'border-transparent h-20'
          }`}
      >
        <div className="flex justify-between items-center w-full max-w-[1200px] mx-auto px-4 md:px-8 h-full">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl md:text-2xl font-black tracking-tighter text-white uppercase font-h1"
          >
            Antick
          </motion.span>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link, index) => (
              link.isRouter ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-slate-400 font-medium hover:text-white transition-all duration-300 font-manrope relative group text-sm lg:text-base"
                >
                  {link.name}
                  <motion.span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-container group-hover:w-full transition-all duration-300"
                  />
                </Link>
              ) : (
                <motion.a
                  key={link.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className="text-slate-400 font-medium hover:text-white transition-all duration-300 font-manrope relative group text-sm lg:text-base"
                  href={getHref(link.href)}
                >
                  {link.name}
                  <motion.span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-container group-hover:w-full transition-all duration-300"
                  />
                </motion.a>
              )
            ))}
          </div>

          <div className="flex items-center gap-4">
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:block bg-primary-container text-on-primary-container px-4 md:px-6 py-2 md:py-2.5 rounded-full font-bold text-sm transition-transform shadow-lg shadow-primary-container/20"
            >
              Hire Me
            </motion.button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white p-2"
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined text-3xl">
                {isMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[90] bg-[#0c1324] pt-24 px-8 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, index) => (
                link.isRouter ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-2xl font-bold text-slate-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <motion.a
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    href={getHref(link.href)}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-2xl font-bold text-slate-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </motion.a>
                )
              ))}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="w-full bg-primary-container text-white py-4 rounded-xl font-bold text-xl mt-4"
              >
                Hire Me
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

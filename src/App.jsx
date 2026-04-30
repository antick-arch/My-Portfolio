import React from 'react';
import SmoothScroll from './components/SmoothScroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechMarquee from './components/TechMarquee';
import Skills from './components/Skills';
import Services from './components/Services';
import Qualification from './components/Qualification';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <ScrollToTop />
      <div className="bg-[#0c1324] overflow-x-hidden selection:bg-primary-container selection:text-white">
        <Navbar />
        <main>
          <Hero />
          <TechMarquee />
          <Skills />
          <Services />
          <Qualification />
          <Projects />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}

export default App;

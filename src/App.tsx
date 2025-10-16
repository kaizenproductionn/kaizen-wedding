import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { AnimateOnScroll } from './components/AnimateOnScroll';

const pageTransition = {
  in: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeInOut' },
  },
  out: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

function App() {
  const testimonials = [
    {
      id: '1',
      name: 'Sarah Johnson',
      role: 'Bride',
      rating: 5,
      quote: 'Kaizen Production captured our wedding day beautifully. Every photo tells our story with such emotion and artistry. We couldn\'t be happier!',
    },
    {
      id: '2',
      name: 'Michael Chen',
      role: 'Groom',
      rating: 5,
      quote: 'The team was professional, creative, and made us feel so comfortable. The photos are absolutely stunning and we treasure them every day.',
    },
    {
      id: '3',
      name: 'Emma & David',
      role: 'Happy Couple',
      rating: 5,
      quote: 'From our engagement session to the wedding day, the experience was flawless. They captured moments we didn\'t even know happened!',
    },
  ];

  return (
    <AnimatePresence mode="wait">
      <div id="home" className="min-h-screen bg-white overflow-x-hidden">
        <Navbar />
        

          <HeroSection />


        <AnimateOnScroll>
          <About />
        </AnimateOnScroll>

        <AnimateOnScroll>
          <Portfolio />
        </AnimateOnScroll>

        <AnimateOnScroll direction="right">
          <Services />
        </AnimateOnScroll>

        <AnimateOnScroll direction="left">
          <Testimonials testimonials={testimonials} />
        </AnimateOnScroll>

        <AnimateOnScroll>
          <Contact />
        </AnimateOnScroll>

        <Footer />
      </div>
    </AnimatePresence>
  );
}

export default App;

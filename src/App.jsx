import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from './components/HeroSection';
import Destinations from './components/Destinations';
import Booking from './components/Booking';
import AboutStory from './components/AboutStory';
import Contact from './components/Contact';

const TopNav = () => (
  <div className="fixed inset-x-0 top-0 z-40">
    <div className="mx-auto max-w-7xl px-4 py-3">
      <div className="flex items-center justify-between rounded-full bg-white/10 px-4 py-2 shadow-lg ring-1 ring-white/20 backdrop-blur-md">
        <a href="#home" className="text-white font-semibold tracking-tight">Aerolight</a>
        <nav className="hidden md:flex items-center gap-6 text-white/80">
          <a className="hover:text-white transition" href="#destinations">Destinations</a>
          <a className="hover:text-white transition" href="#booking">Booking</a>
          <a className="hover:text-white transition" href="#about">Story</a>
          <a className="hover:text-white transition" href="#contact">Contact</a>
        </nav>
      </div>
    </div>
  </div>
);

// Airplane scroller indicator that flies to next section on scroll
const AirplaneScroller = () => {
  // We represent the airplane as a minimal abstract shape (no literal icon) using a small rotated pill
  return (
    <motion.div
      className="pointer-events-none fixed bottom-6 right-6 z-40"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <a href="#destinations" className="group relative block">
        <motion.span
          aria-hidden
          className="block h-3 w-10 origin-center -rotate-12 rounded-full bg-gradient-to-r from-white to-orange-400 shadow-[0_0_30px_rgba(251,146,60,0.35)]"
          animate={{ x: [0, 6, -2, 0] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <span className="sr-only">Scroll to next section</span>
        <span className="absolute -left-2 -top-2 h-6 w-6 rounded-full bg-white/10 blur"></span>
      </a>
    </motion.div>
  );
};

const Footer = () => (
  <footer className="py-16 text-center text-sm text-sky-900/70 dark:text-white/60">
    © {new Date().getFullYear()} Aerolight Travel. All rights reserved.
  </footer>
);

const App = () => {
  return (
    <div className="min-h-screen scroll-smooth bg-gradient-to-b from-[#0b0f1a] via-[#0b0f1a] to-[#0b0f1a] text-sky-950">
      <TopNav />
      <HeroSection />
      <AirplaneScroller />
      <Destinations />
      <Booking />
      <AboutStory />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

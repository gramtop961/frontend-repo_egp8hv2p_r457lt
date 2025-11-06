import React from 'react';
import HeroSection from './components/HeroSection';
import Destinations from './components/Destinations';
import Booking from './components/Booking';
import AboutStory from './components/AboutStory';
import Contact from './components/Contact';
import { motion } from 'framer-motion';

function TopNav() {
  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-white/30 border-b border-white/30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a href="#home" className="text-lg font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-cyan-600">
          AERIA TRAVEL
        </a>
        <nav className="hidden gap-6 text-sm text-slate-700 md:flex">
          <a className="hover:text-sky-600 transition" href="#destinations">Destinations</a>
          <a className="hover:text-sky-600 transition" href="#booking">Booking</a>
          <a className="hover:text-sky-600 transition" href="#about">Story</a>
          <a className="hover:text-sky-600 transition" href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

function PageEdgeWinds() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-40">
      <motion.div
        className="absolute left-0 top-0 h-48 w-48 rounded-3xl bg-gradient-to-br from-sky-300/40 via-white/20 to-transparent blur-2xl"
        initial={{ x: -40, y: -40, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="absolute right-0 bottom-0 h-56 w-56 rounded-3xl bg-gradient-to-tl from-cyan-300/40 via-white/10 to-transparent blur-2xl"
        initial={{ x: 40, y: 40, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}

export default function App() {
  return (
    <div className="scroll-smooth selection:bg-sky-200 selection:text-sky-900">
      <TopNav />
      <PageEdgeWinds />
      <main className="flex flex-col">
        <HeroSection />
        <Destinations />
        <Booking />
        <AboutStory />
        <Contact />
      </main>
      <footer className="bg-white/60 backdrop-blur border-t border-slate-100 py-8 text-center text-sm text-slate-600">
        © {new Date().getFullYear()} Aeria Travel — Crafted for smooth, cinematic journeys.
      </footer>
    </div>
  );
}

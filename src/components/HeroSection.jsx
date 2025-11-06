import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const CornerWinds = () => (
  <>
    <motion.div
      aria-hidden
      className="pointer-events-none absolute -inset-8 blur-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.7 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
    >
      <motion.div
        className="absolute left-0 top-0 h-64 w-64 bg-gradient-to-br from-sky-400/50 via-white/20 to-transparent rounded-3xl"
        initial={{ x: -80, y: -80, rotate: -8, opacity: 0 }}
        animate={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="absolute right-0 bottom-0 h-72 w-72 bg-gradient-to-tl from-cyan-400/50 via-white/10 to-transparent rounded-3xl"
        initial={{ x: 80, y: 80, rotate: 8, opacity: 0 }}
        animate={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      />
    </motion.div>
  </>
);

export default function HeroSection() {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 600], [0, -60]);
  const opacityFade = useTransform(scrollY, [0, 400], [1, 0.85]);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-sky-50 via-white to-sky-50">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <CornerWinds />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-sky-100/50" />

      <motion.div
        style={{ y: yParallax, opacity: opacityFade }}
        className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center"
      >
        <motion.h1
          className="font-extrabold tracking-tight text-5xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-sky-500 via-cyan-500 to-sky-700"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          Your Journey Begins Here
        </motion.h1>
        <motion.p
          className="mt-5 max-w-2xl text-base md:text-lg text-slate-600"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: 'easeOut' }}
        >
          Drift through destinations with smooth, cinematic transitions that feel like moving through air.
        </motion.p>
        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
        >
          <a href="#destinations" className="rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 px-6 py-3 text-white shadow-lg shadow-sky-500/30 transition hover:shadow-sky-500/50">
            Explore Destinations
          </a>
          <a href="#booking" className="rounded-full border border-sky-300/60 bg-white/50 px-6 py-3 text-sky-700 backdrop-blur-md transition hover:bg-white/70">
            Book a Trip
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-slate-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 1.2 }}
      >
        <div className="h-10 w-10 animate-bounce rounded-full bg-gradient-to-b from-sky-300/60 to-sky-500/40 blur-[1px]" />
      </motion.div>
    </section>
  );
}

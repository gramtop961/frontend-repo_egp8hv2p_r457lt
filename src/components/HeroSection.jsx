import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.6]);

  // Edge winds animation
  useEffect(() => {
    // no-op: framer handles animations declaratively
  }, []);

  return (
    <section ref={ref} id="home" className="relative min-h-[92vh] w-full flex items-center justify-center overflow-hidden">
      {/* Spline 3D scene as interactive cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient haze overlays - keep interactive */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-transparent" />
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-gradient-to-br from-white/10 to-transparent blur-3xl" />
        <div className="absolute -right-40 -bottom-40 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-orange-400/10 to-transparent blur-3xl" />
      </div>

      {/* Parallax heading */}
      <motion.div style={{ y, opacity }} className="relative z-10 px-6 text-center max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl font-semibold tracking-tight text-white drop-shadow-2xl"
        >
          Glide Into Your Next Journey
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-4 text-lg md:text-2xl text-white/80"
        >
          Experience a premium way to discover, plan, and book—guided by motion and calm.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-8 flex items-center justify-center gap-3"
        >
          <a href="#destinations" className="rounded-full bg-white/10 px-6 py-3 text-white backdrop-blur-md hover:bg-white/20 transition">
            Explore Destinations
          </a>
          <a href="#booking" className="rounded-full bg-gradient-to-r from-orange-500 to-amber-400 px-6 py-3 text-black font-medium shadow-lg shadow-orange-500/20">
            Book a Trip
          </a>
        </motion.div>
      </motion.div>

      {/* Page edge ambient winds */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute left-0 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-white/10 to-transparent blur-3xl"
          animate={{ x: [0, 10, -6, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute right-0 top-1/3 h-52 w-52 translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-l from-orange-300/10 to-transparent blur-3xl"
          animate={{ x: [0, -12, 8, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    </section>
  );
};

export default HeroSection;

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// A diagonal wind/air sweep used between sections
export default function WindTransition({ children, sectionKey }) {
  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={sectionKey}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -24 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      </AnimatePresence>

      {/* Corner gusts */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-20% 0px -20% 0px' }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="absolute -left-10 -top-10 h-40 w-40 rotate-6 bg-gradient-to-br from-sky-300/50 via-white/20 to-transparent blur-xl"
          initial={{ x: -30, y: -30, opacity: 0 }}
          whileInView={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div
          className="absolute -right-12 -bottom-12 h-48 w-48 -rotate-6 bg-gradient-to-tl from-cyan-300/50 via-white/10 to-transparent blur-xl"
          initial={{ x: 30, y: 30, opacity: 0 }}
          whileInView={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.div>
    </div>
  );
}

import { motion } from 'framer-motion';
import React from 'react';

const WindTransition = ({ children, className = '' }) => {
  return (
    <motion.section
      className={`relative overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Diagonal corner wind sweeps */}
      <div className="pointer-events-none absolute -inset-16">
        <motion.div
          className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-sky-300/40 to-cyan-200/0 blur-3xl"
          initial={{ opacity: 0, x: -40, y: -40 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        />
        <motion.div
          className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-gradient-to-tr from-blue-400/30 to-transparent blur-3xl"
          initial={{ opacity: 0, x: 40, y: 40 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.1 }}
        />
      </div>
      <div className="relative z-10">{children}</div>
    </motion.section>
  );
};

export default WindTransition;

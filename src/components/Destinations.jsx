import React from 'react';
import { motion } from 'framer-motion';
import WindTransition from './WindTransition';

const destinations = [
  { title: 'Santorini, Greece', img: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1200&q=60' },
  { title: 'Kyoto, Japan', img: 'https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?auto=format&fit=crop&w=1200&q=60' },
  { title: 'Reykjavík, Iceland', img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=60' },
  { title: 'Banff, Canada', img: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=60' },
];

const Destinations = () => {
  return (
    <WindTransition>
      <div id="destinations" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-sky-950 dark:text-white">Featured Destinations</h2>
          <p className="mt-2 text-sky-800/70 dark:text-white/70">Handpicked places that feel like a breath of fresh air.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((d, i) => (
            <motion.article
              key={d.title}
              initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl bg-white/70 ring-1 ring-black/5 shadow-lg dark:bg-white/5"
            >
              <img src={d.img} alt={d.title} className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="p-4">
                <h3 className="text-lg font-medium text-sky-950 dark:text-white">{d.title}</h3>
              </div>
              {/* Wind overlay */}
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-t from-sky-950/20 to-transparent" />
                <motion.div
                  className="absolute -right-16 -bottom-16 h-48 w-48 rounded-full bg-gradient-to-tr from-cyan-300/20 to-transparent blur-3xl"
                  animate={{ x: [0, -10, 6, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </WindTransition>
  );
};

export default Destinations;

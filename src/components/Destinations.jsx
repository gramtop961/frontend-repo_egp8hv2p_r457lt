import React from 'react';
import { motion } from 'framer-motion';
import WindTransition from './WindTransition';

const destinations = [
  { id: 1, name: 'Santorini, Greece', img: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=1400&auto=format&fit=crop' },
  { id: 2, name: 'Kyoto, Japan', img: 'https://images.unsplash.com/photo-1544986581-efac024faf62?q=80&w=1400&auto=format&fit=crop' },
  { id: 3, name: 'Banff, Canada', img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1400&auto=format&fit=crop' },
  { id: 4, name: 'Amalfi Coast, Italy', img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop' }
];

export default function Destinations() {
  return (
    <section id="destinations" className="relative bg-gradient-to-b from-sky-50 via-white to-sky-50 py-24">
      <WindTransition sectionKey="destinations">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-800">Destinations</h2>
              <p className="mt-2 text-slate-600">Each place glides into view as if carried by a gentle breeze.</p>
            </div>
            <div className="hidden md:block text-right text-slate-500">Scroll for more</div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {destinations.map((d, idx) => (
              <motion.article
                key={d.id}
                initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden rounded-2xl bg-white/70 shadow-xl shadow-sky-100/60 backdrop-blur-md"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <img src={d.img} alt={d.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  {/* wind-like diagonal overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-sky-200/0 via-white/0 to-sky-300/20" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-slate-800">{d.name}</h3>
                  <p className="mt-1 text-sm text-slate-600">Curated experiences that feel effortless.</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </WindTransition>
    </section>
  );
}

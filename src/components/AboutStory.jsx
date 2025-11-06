import React from 'react';
import { motion } from 'framer-motion';
import WindTransition from './WindTransition';

const paragraphs = [
  'We craft journeys that feel effortless — like gliding on a current of air.',
  'Our team curates details with care, so each moment feels cinematic and calm.',
  'From the first hello to your final sunset, we turn movement into memory.'
];

export default function AboutStory() {
  return (
    <section id="about" className="relative bg-gradient-to-b from-sky-50 via-white to-sky-50 py-24">
      <WindTransition sectionKey="about">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-800">Our Story</h2>
            <p className="mt-2 text-slate-600">Told through flowing transitions like air currents.</p>
          </div>
          <div className="space-y-8">
            {paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24, filter: 'blur(4px)' }}
                whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="text-lg leading-relaxed text-slate-700"
              >
                {p}
              </motion.p>
            ))}
          </div>
        </div>
      </WindTransition>
    </section>
  );
}

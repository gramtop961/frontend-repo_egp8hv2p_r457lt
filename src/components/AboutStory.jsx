import React from 'react';
import { motion } from 'framer-motion';
import WindTransition from './WindTransition';

const paragraphs = [
  'We craft journeys that feel as effortless as a steady tailwind, blending precision with a sense of calm.',
  'From first search to final touchdown, every moment is designed to glide smoothly.',
  'Our team obsesses over the details so you can enjoy the view and the feeling of motion.'
];

const AboutStory = () => {
  return (
    <WindTransition>
      <div id="about" className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="mb-6 text-3xl md:text-4xl font-semibold text-sky-950 dark:text-white">Our story</h2>
        <div className="space-y-6">
          {paragraphs.map((t, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.05 }}
              className="text-lg leading-relaxed text-sky-900/80 dark:text-white/80"
            >
              {t}
            </motion.p>
          ))}
        </div>
      </div>
    </WindTransition>
  );
};

export default AboutStory;

import React from 'react';
import { motion } from 'framer-motion';
import WindTransition from './WindTransition';

const Contact = () => {
  return (
    <WindTransition>
      <div id="contact" className="mx-auto max-w-4xl px-6 py-20">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-sky-950 dark:text-white">Contact</h2>
          <p className="mt-2 text-sky-800/70 dark:text-white/70">We’ll get back with a gentle tailwind.</p>
        </div>
        <motion.form
          initial={{ opacity: 0, scale: 0.98, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          onSubmit={(e) => e.preventDefault()}
          className="grid gap-4 rounded-2xl bg-white/70 p-6 shadow-xl ring-1 ring-black/5 backdrop-blur-md dark:bg-white/5"
        >
          <label className="grid gap-2">
            <span className="text-sm text-sky-900/80 dark:text-white/70">Name</span>
            <input className="rounded-xl border border-white/20 bg-white/60 px-4 py-3 outline-none backdrop-blur placeholder-sky-800/60 focus:ring-2 focus:ring-sky-400 dark:bg-white/10 dark:placeholder-white/50" placeholder="Your name" />
          </label>
          <label className="grid gap-2">
            <span className="text-sm text-sky-900/80 dark:text-white/70">Email</span>
            <input type="email" className="rounded-xl border border-white/20 bg-white/60 px-4 py-3 outline-none backdrop-blur placeholder-sky-800/60 focus:ring-2 focus:ring-sky-400 dark:bg-white/10 dark:placeholder-white/50" placeholder="you@example.com" />
          </label>
          <label className="grid gap-2">
            <span className="text-sm text-sky-900/80 dark:text-white/70">Message</span>
            <textarea rows={5} className="rounded-xl border border-white/20 bg-white/60 px-4 py-3 outline-none backdrop-blur placeholder-sky-800/60 focus:ring-2 focus:ring-sky-400 dark:bg-white/10 dark:placeholder-white/50" placeholder="Tell us a little about your trip" />
          </label>
          <div className="flex justify-end">
            <button className="rounded-full bg-gradient-to-r from-orange-500 to-amber-400 px-6 py-3 text-black font-medium shadow-lg shadow-orange-500/20">Send</button>
          </div>
        </motion.form>
      </div>
    </WindTransition>
  );
};

export default Contact;

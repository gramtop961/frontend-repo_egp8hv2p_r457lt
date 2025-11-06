import React from 'react';
import { motion } from 'framer-motion';
import WindTransition from './WindTransition';

const Booking = () => {
  return (
    <WindTransition>
      <div id="booking" className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-sky-950 dark:text-white">Book your escape</h2>
          <p className="mt-2 text-sky-800/70 dark:text-white/70">Set the course. We’ll handle the tailwind.</p>
        </div>
        <motion.form
          initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="grid gap-4 rounded-2xl bg-white/70 p-6 shadow-xl ring-1 ring-black/5 backdrop-blur-md dark:bg-white/5"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2">
              <span className="text-sm text-sky-900/80 dark:text-white/70">From</span>
              <input className="rounded-xl border border-white/20 bg-white/60 px-4 py-3 outline-none backdrop-blur placeholder-sky-800/60 focus:ring-2 focus:ring-sky-400 dark:bg-white/10 dark:placeholder-white/50" placeholder="City or Airport" />
            </label>
            <label className="grid gap-2">
              <span className="text-sm text-sky-900/80 dark:text-white/70">To</span>
              <input className="rounded-xl border border-white/20 bg-white/60 px-4 py-3 outline-none backdrop-blur placeholder-sky-800/60 focus:ring-2 focus:ring-sky-400 dark:bg-white/10 dark:placeholder-white/50" placeholder="City or Airport" />
            </label>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <label className="grid gap-2">
              <span className="text-sm text-sky-900/80 dark:text-white/70">Depart</span>
              <input type="date" className="rounded-xl border border-white/20 bg-white/60 px-4 py-3 outline-none backdrop-blur focus:ring-2 focus:ring-sky-400 dark:bg-white/10" />
            </label>
            <label className="grid gap-2">
              <span className="text-sm text-sky-900/80 dark:text-white/70">Return</span>
              <input type="date" className="rounded-xl border border-white/20 bg-white/60 px-4 py-3 outline-none backdrop-blur focus:ring-2 focus:ring-sky-400 dark:bg-white/10" />
            </label>
            <label className="grid gap-2">
              <span className="text-sm text-sky-900/80 dark:text-white/70">Passengers</span>
              <input type="number" min="1" defaultValue={1} className="rounded-xl border border-white/20 bg-white/60 px-4 py-3 outline-none backdrop-blur focus:ring-2 focus:ring-sky-400 dark:bg-white/10" />
            </label>
          </div>
          <div className="flex justify-end">
            <button className="rounded-full bg-gradient-to-r from-orange-500 to-amber-400 px-6 py-3 text-black font-medium shadow-lg shadow-orange-500/20">Search Flights</button>
          </div>
        </motion.form>
      </div>
    </WindTransition>
  );
};

export default Booking;

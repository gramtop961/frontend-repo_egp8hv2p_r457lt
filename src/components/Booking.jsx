import React from 'react';
import { motion } from 'framer-motion';
import WindTransition from './WindTransition';

export default function Booking() {
  return (
    <section id="booking" className="relative bg-gradient-to-b from-white via-sky-50 to-white py-24">
      <WindTransition sectionKey="booking">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-800">Booking</h2>
            <p className="mt-2 text-slate-600">Smooth, floating inputs keep the focus clear.</p>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-6 rounded-3xl bg-white/70 p-8 shadow-xl shadow-sky-100/60 backdrop-blur-md md:grid-cols-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex flex-col gap-2">
              <label className="text-sm text-slate-700">From</label>
              <input className="rounded-xl border border-slate-200/60 bg-white/70 px-4 py-3 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100" placeholder="City or airport" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-slate-700">To</label>
              <input className="rounded-xl border border-slate-200/60 bg-white/70 px-4 py-3 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100" placeholder="Destination" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-slate-700">Departure</label>
              <input type="date" className="rounded-xl border border-slate-200/60 bg-white/70 px-4 py-3 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-slate-700">Return</label>
              <input type="date" className="rounded-xl border border-slate-200/60 bg-white/70 px-4 py-3 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100" />
            </div>
            <div className="md:col-span-2 flex items-center justify-between">
              <div className="text-sm text-slate-600">Flexible dates for a breezier search</div>
              <button className="rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 px-6 py-3 text-white shadow-lg shadow-sky-500/30 transition hover:shadow-sky-500/50">Search</button>
            </div>
          </motion.form>
        </div>
      </WindTransition>
    </section>
  );
}

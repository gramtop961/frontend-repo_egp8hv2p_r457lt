import React from 'react';
import { motion } from 'framer-motion';
import WindTransition from './WindTransition';

export default function Contact() {
  return (
    <section id="contact" className="relative bg-gradient-to-b from-white via-sky-50 to-white py-24">
      <WindTransition sectionKey="contact">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-800">Contact</h2>
            <p className="mt-2 text-slate-600">Reach out — this page opens with a subtle wind burst.</p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl bg-white/70 p-8 shadow-2xl shadow-sky-100/70 backdrop-blur-md"
          >
            <form className="grid gap-6 md:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
              <input className="rounded-xl border border-slate-200/60 bg-white/70 px-4 py-3 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100" placeholder="Name" />
              <input className="rounded-xl border border-slate-200/60 bg-white/70 px-4 py-3 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100" placeholder="Email" />
              <textarea rows="5" className="md:col-span-2 rounded-xl border border-slate-200/60 bg-white/70 px-4 py-3 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100" placeholder="Message" />
              <div className="md:col-span-2 flex items-center justify-end">
                <button className="rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 px-6 py-3 text-white shadow-lg shadow-sky-500/30 transition hover:shadow-sky-500/50">Send</button>
              </div>
            </form>
          </motion.div>
        </div>
      </WindTransition>
    </section>
  );
}

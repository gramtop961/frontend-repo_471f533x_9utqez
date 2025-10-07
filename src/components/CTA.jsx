import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';

export default function CTA() {
  return (
    <section id="early-access" className="border-t border-white/10 bg-[#07090e] py-16">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">Be first. Be passwordless.</h2>
        <p className="mt-2 text-sm text-white/60">Join our early-access list and we’ll send the SDK when it’s ready.</p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto mt-6 flex w-full max-w-lg items-center gap-2"
        >
          <div className="flex grow items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-left text-white focus-within:ring-2 focus-within:ring-cyan-400/50">
            <Mail className="h-4 w-4 text-white/60" />
            <input
              type="email"
              required
              placeholder="you@company.com"
              className="w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-[#0b0d12] shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5"
          >
            Request access
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>

        <p className="mt-3 text-xs text-white/50">We care about privacy. No spam, ever.</p>
      </div>
    </section>
  );
}

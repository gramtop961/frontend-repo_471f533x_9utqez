import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Fingerprint } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0b0d12]">
      {/* Decorative gradient haze */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-24 left-1/2 h-72 w-[48rem] -translate-x-1/2 rounded-full bg-[conic-gradient(var(--tw-gradient-stops))] from-cyan-500 via-indigo-500 to-fuchsia-500 opacity-20 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-20 md:grid-cols-2 lg:gap-16 lg:py-28">
        {/* Copy */}
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
            <Fingerprint className="h-3.5 w-3.5 text-cyan-400" />
            Biometric + Passkeys for modern apps
          </div>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Auth that <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-fuchsia-300 bg-clip-text text-transparent">disappears</span>.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            Passwordless, privacy-first authentication your users will love. Drop
            in biometric logins and passkeys with a single line of code. No
            passwords, no friction.
          </p>

          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <a
              href="#early-access"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-4 py-2.5 text-sm font-medium text-[#0b0d12] shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5 hover:shadow-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
            >
              <Rocket className="h-4 w-4" />
              Request early access
            </a>
            <a
              href="#code"
              className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-white/90 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
            >
              View one-line install
            </a>
          </div>

          <div className="mt-6 flex items-center gap-4 text-xs text-white/50">
            <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 text-emerald-300">
              WebAuthn / FIDO2
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5">SOC 2</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5">GDPR</span>
          </div>
        </div>

        {/* 3D Spline Scene */}
        <div className="relative aspect-[4/3] w-full md:aspect-[4/3] lg:aspect-square">
          <div className="absolute inset-0 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 shadow-[0_0_0_1px_rgba(255,255,255,0.05)]">
            <Spline
              scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

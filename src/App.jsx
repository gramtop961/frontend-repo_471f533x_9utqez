import React from 'react';
import HeroSection from './components/HeroSection';
import TrustBar from './components/TrustBar';
import CodeSnippets from './components/CodeSnippets';
import CTA from './components/CTA';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#0b0d12] font-inter text-white">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-cyan-400 via-blue-400 to-fuchsia-500" />
          <span className="text-sm font-semibold tracking-tight">GhostAuth</span>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-white/70 sm:flex">
          <a href="#code" className="hover:text-white">Developers</a>
          <a href="#early-access" className="hover:text-white">Pricing</a>
          <a href="#early-access" className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-white hover:bg-white/10">Get access</a>
        </nav>
      </header>

      <main>
        <HeroSection />
        <TrustBar />
        <CodeSnippets />
        <CTA />
      </main>

      <footer className="border-t border-white/10 bg-[#07090e] py-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 text-xs text-white/50">
          <div>© {new Date().getFullYear()} GhostAuth, Inc.</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Security</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

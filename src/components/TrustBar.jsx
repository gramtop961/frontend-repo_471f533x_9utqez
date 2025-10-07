import React from 'react';
import { ShieldCheck, Lock, CheckCircle2 } from 'lucide-react';

const items = [
  {
    icon: ShieldCheck,
    title: 'Enterprise-grade security',
    desc: 'End-to-end encryption. Key material never leaves the device.',
  },
  {
    icon: Lock,
    title: 'Compliance-ready',
    desc: 'SOC 2, GDPR, and ISO 27001 aligned practices.',
  },
  {
    icon: CheckCircle2,
    title: 'Proven standards',
    desc: 'WebAuthn / FIDO2 with passkeys across all major platforms.',
  },
];

export default function TrustBar() {
  return (
    <section className="border-t border-white/10 bg-[#0a0c11] py-12">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 sm:grid-cols-3">
        {items.map((item) => (
          <div key={item.title} className="rounded-xl border border-white/10 bg-white/5 p-5 text-white/80">
            <item.icon className="h-5 w-5 text-emerald-400" />
            <h3 className="mt-3 text-sm font-semibold text-white">{item.title}</h3>
            <p className="mt-1 text-sm text-white/60">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

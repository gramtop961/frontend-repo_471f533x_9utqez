import React, { useState } from 'react';
import { Copy, Check, Code2 } from 'lucide-react';

const snippets = {
  javascript: `// 1) Install SDK
npm i @ghost-auth/js

// 2) Initialize (server)
import { createClient } from '@ghost-auth/node'
const auth = createClient({ apiKey: process.env.GHOST_AUTH_KEY })

// 3) One-line biometric login (client)
await window.passkeys.login()`,
  python: `# 1) Install SDK
pip install ghost-auth

# 2) Initialize (server)
from ghost_auth import Client
client = Client(api_key=os.environ['GHOST_AUTH_KEY'])

# 3) One-line biometric login (client)
await passkeys.login()`,
};

export default function CodeSnippets() {
  const [lang, setLang] = useState('javascript');
  const [copied, setCopied] = useState(false);

  const code = snippets[lang];

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      // ignore
    }
  };

  return (
    <section id="code" className="relative border-t border-white/10 bg-[#07090e] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              <Code2 className="h-3.5 w-3.5 text-cyan-400" />
              One-line install • Fast integration
            </div>
            <h2 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">Drop-in passwordless auth</h2>
            <p className="mt-2 max-w-2xl text-sm text-white/60">
              Copy, paste, ship. SDKs for JavaScript and Python. Works with WebAuthn and passkeys out of the box.
            </p>
          </div>
          <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1 text-xs text-white/70 sm:flex">
            <button onClick={() => setLang('javascript')} className={`rounded-full px-3 py-1 ${lang === 'javascript' ? 'bg-white text-black' : ''}`}>JS</button>
            <button onClick={() => setLang('python')} className={`rounded-full px-3 py-1 ${lang === 'python' ? 'bg-white text-black' : ''}`}>Py</button>
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-xl border border-white/10 bg-[#0b0d12]">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-xs text-white/60">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400/80" />
              <span>auth-demo.{lang === 'javascript' ? 'js' : 'py'}</span>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => setLang('javascript')} className={`hidden rounded-md px-2 py-1 sm:block ${lang === 'javascript' ? 'bg-white text-black' : 'bg-white/5 text-white'}`}>JavaScript</button>
              <button onClick={() => setLang('python')} className={`hidden rounded-md px-2 py-1 sm:block ${lang === 'python' ? 'bg-white text-black' : 'bg-white/5 text-white'}`}>Python</button>
              <button onClick={onCopy} className="inline-flex items-center gap-1 rounded-md bg-white/10 px-2 py-1 text-white hover:bg-white/20">
                {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />} {copied ? 'Copied' : 'Copy'}
              </button>
            </div>
          </div>

          <pre className="overflow-auto p-4 text-[13px] leading-relaxed text-white/90">
            <code>{code}</code>
          </pre>
        </div>
      </div>
    </section>
  );
}

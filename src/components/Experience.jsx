import React from 'react';

const LogoBox = ({ src, alt }) => (
  <div className="w-40 h-28 overflow-hidden flex items-center justify-center">
    <img src={src} alt={alt} className="max-w-full max-h-full object-contain" />
  </div>
);

const Experience = () => (
  <section id="experience" className="mx-auto max-w-6xl px-4 py-16 border-t border-neutral-900">
    <h2 className="text-2xl md:text-3xl font-semibold">Experience</h2>
    <div className="mt-8 space-y-8">

      {/* Item */}
      <article className="grid md:grid-cols-[200px_1fr] gap-4">
        <div className="opacity-80 flex flex-col items-start gap-2">
          <span>May 2025 — June 2025</span>
          <LogoBox src="/logos/beeco.png" alt="Beeco Logo" />
        </div>
        <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-5">
          <header className="flex items-center justify-between gap-3">
            <h3 className="font-semibold">Technology Consultant Intern — Beeco</h3>
            <span className="text-xs text-neutral-400">Budapest, Hungary</span>
          </header>
          <ul className="mt-3 list-disc pl-5 text-neutral-300">
            <li>Advised on backend architecture for a scalable, AI-powered recommendation system (Faiss, Sentence-BERT, pgvector).</li>
            <li>Developed data strategies to enrich behavioral, footprint, and partner analytics for feature recommendations.</li>
            <li>Analyzed competitors to identify backend integration gaps and global growth opportunities.</li>
          </ul>
        </div>
      </article>

      {/* Item */}
      <article className="grid md:grid-cols-[200px_1fr] gap-4">
        <div className="opacity-80 flex flex-col items-start gap-2">
          <span>May 2024 — Aug 2024</span>
          <LogoBox src="/logos/ncr.png" alt="NCR Atleos Logo" />
        </div>
        <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-5">
          <header className="flex items-center justify-between gap-3">
            <h3 className="font-semibold">Software Engineering Intern — NCR Atleos</h3>
            <span className="text-xs text-neutral-400">Atlanta, GA</span>
          </header>
          <ul className="mt-3 list-disc pl-5 text-neutral-300">
            <li>Automated secure device provisioning and management using Azure and VMs for ATM production environments.</li>
            <li>Downscaled 14,000 Microsoft E5 licenses to 2,000, saving $700,000 annually in IT operations costs.</li>
            <li>Implemented CIS benchmarks using Azure Group Policies, improving security compliance by 20% across all devices.</li>
          </ul>
        </div>
      </article>

      {/* Item */}
      <article className="grid md:grid-cols-[200px_1fr] gap-4">
        <div className="opacity-80 flex flex-col items-start gap-2">
          <span>Aug 2025 — Current</span>
          <LogoBox src="/logos/gatech.png" alt="Georgia Tech Logo" />
        </div>
        <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-5">
          <header className="flex items-center justify-between gap-3">
            <h3 className="font-semibold">Teaching Assistant — Georgia Tech (CS3001)</h3>
            <span className="text-xs text-neutral-400">Atlanta, GA</span>
          </header>
          <ul className="mt-3 list-disc pl-5 text-neutral-300">
            <li>Lead weekly discussions for 10 students on ethics in computing to encourage ethical software development.</li>
            <li>Assist in grading homework assignments and term papers.</li>
          </ul>
        </div>
      </article>

      {/* Item */}
      <article className="grid md:grid-cols-[200px_1fr] gap-4">
        <div className="opacity-80 flex flex-col items-start gap-2">
          <span>Dec 2023 — Current</span>
          <LogoBox src="/logos/gatech.png" alt="Housing Logo" />
        </div>
        <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-5">
          <header className="flex items-center justify-between gap-3">
            <h3 className="font-semibold">Resident Assistant — Georgia Tech Housing</h3>
            <span className="text-xs text-neutral-400">Atlanta, GA</span>
          </header>
          <ul className="mt-3 list-disc pl-5 text-neutral-300">
            <li>Plan social events for 50+ residents to create a welcoming and inclusive community.</li>
            <li>Support diverse student body with academic, social, and personal development resources.</li>
          </ul>
        </div>
      </article>

    </div>
  </section>
);

export default Experience;

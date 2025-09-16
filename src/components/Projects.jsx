import React from 'react';

const Projects = () => (
  <section id="projects" className="mx-auto max-w-6xl px-4 py-16 border-t border-neutral-900">
    <h2 className="text-2xl md:text-3xl font-semibold">Projects</h2>
    <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Card */}
      <article className="group border border-neutral-800 rounded-2xl overflow-hidden bg-neutral-900/50 hover:border-neutral-700 transition">
        <div className="aspect-[16/9] bg-neutral-800 overflow-hidden">
          <img src="/logos/phishing.png" alt="AI Phishing Detector" className="w-full h-full object-cover block" />
        </div>
        <div className="p-5">
          <h3 className="font-semibold">AI Phishing Email Detector</h3>
          <p className="mt-2 text-neutral-300 text-sm">Phishing email detection system using ML that automatically scans emails and outputs security logs.</p>
          <div className="mt-2 flex flex-wrap gap-2 text-xs">
            <span className="px-2 py-1 rounded-full bg-neutral-800">Python</span>
            <span className="px-2 py-1 rounded-full bg-neutral-800">Security automation (email scans, security logs)</span>
            <span className="px-2 py-1 rounded-full bg-neutral-800">Machine learning (scikit-learn, Random Forest, NLP)</span>
            <span className="px-2 py-1 rounded-full bg-neutral-800">Gmail integration</span>
            <span className="px-2 py-1 rounded-full bg-neutral-800">Phishing detection</span>
          </div>
          <div className="mt-4 flex gap-3 text-sm">
            <a href="#" className="underline underline-offset-4">Code</a>
          </div>
        </div>
      </article>
      {/* Card */}
      <article className="group border border-neutral-800 rounded-2xl overflow-hidden bg-neutral-900/50 hover:border-neutral-700 transition">
        <div className="aspect-[16/9] bg-neutral-800 overflow-hidden">
          <img src="/logos/music.jpg" alt="Spotify Wrapped (Android)" className="w-full h-full object-cover"/>
        </div>
        <div className="p-5">
          <h3 className="font-semibold">Spotify Wrapped App</h3>
          <p className="mt-2 text-neutral-300 text-sm">Shows user's Spotify Wrapped for any range rather than just annually.</p>
          <div className="mt-3 flex flex-wrap gap-2 text-xs">
            <span className="px-2 py-1 rounded-full bg-neutral-800">Java</span>
            <span className="px-2 py-1 rounded-full bg-neutral-800">Firebase</span>
            <span className="px-2 py-1 rounded-full bg-neutral-800">Android</span>
            <span className="px-2 py-1 rounded-full bg-neutral-800">Scrum/Agile</span>
            <span className="px-2 py-1 rounded-full bg-neutral-800">Spotify API</span>
            <span className="px-2 py-1 rounded-full bg-neutral-800">Trello/Kanban</span>
          </div>
          <div className="mt-4 flex gap-3 text-sm">
            <a href="https://github.com/ktran04/SpotifyWrapped" className="underline underline-offset-4">Code</a>
            <a href="https://miatrocchi.wixsite.com/2340-proj2" className="underline underline-offset-4">Website</a>
          </div>
        </div>
      </article>
      {/* Card */}
      <article className="group border border-neutral-800 rounded-2xl overflow-hidden bg-neutral-900/50 hover:border-neutral-700 transition">
        <div className="aspect-[16/9] bg-neutral-800 overflow-hidden">
          <img src="/logos/cyberresearch.jpeg" alt="Vuln Research" className="w-full h-full object-cover"/>
        </div>
        <div className="p-5">
          <h3 className="font-semibold">Embedded Systems Vulnerability Research</h3>
          <p className="mt-2 text-neutral-300 text-sm">Research focused on identifying vulnerabilities in wireless fire alarm systems and 3D printers.</p>
          <div className="mt-3 flex flex-wrap gap-2 text-xs">
            <span className="px-2 py-1 rounded-full bg-neutral-800">Reverse Engineering</span>
            <span className="px-2 py-1 rounded-full bg-neutral-800">Ghidra</span>
            <span className="px-2 py-1 rounded-full bg-neutral-800">C</span>
            <span className="px-2 py-1 rounded-full bg-neutral-800">Assembly</span>
            <span className="px-2 py-1 rounded-full bg-neutral-800">Python Scripting</span>
          </div>
          <div className="mt-4 flex gap-3 text-sm">
            <a href="https://escs.vip.gatech.edu/sites/default/files/2025-01/Fire_Alarm_Fall_2024_Final_Paper.pdf" className="underline underline-offset-4">Paper 1</a>
            <a href="#" className="underline underline-offset-4">Paper 2 coming soon!</a>
            <a href="#" className="underline underline-offset-4">Paper 3 coming soon!</a>
          </div>
        </div>
      </article>
    </div>
  </section>
);

export default Projects;

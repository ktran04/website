import React from 'react';

// Profile image moved to Hero.jsx

const About = () => (
  <section id="about" className="mx-auto max-w-6xl px-4 py-0 border-t border-neutral-900">
    <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
      <div className="flex-1">
        <h2 className="text-3xl md:text-4xl font-semibold">About Me</h2>
        <div className="mt-4 space-y-4 text-neutral-300 max-w-5xl">
          <p>I am a <b className="text-[#B3A369]">Computer Science</b> student at <b className="text-[#B3A369]">Georgia Tech</b> graduating in May 2026. My focus is in <b className="text-[#B3A369]">Cybersecurity</b> and <b className="text-[#B3A369]">Networking</b> with a minor in <b className="text-[#B3A369]">Leadership Studies</b>. Passionate about software engineering and cybersecurity, I enjoy building and deploying security systems.</p>

          <p>At <b className="text-[#54B948]">NCR Atleos</b>, I gained hands-on experience in <b className="text-[#54B948]">platform engineering</b> and <b className="text-[#54B948]">endpoint security</b> using <b className="text-[#1b5142]"> Microsoft Azure</b>. While studying abroad in <span aria-label="Hungary" className="inline-flex">
            <span className="text-[#C8102E]">Hun</span>
            <span className="text-white">ga</span>
            <span className="text-[#008751]">ry</span>
          </span>, I interned at a sustainability startup app <b className="text-[#f7cf23]">beeco</b>, where I worked as a <b className="text-[#f7cf23]">technology consultant</b> to design a roadmap for an <b className="text-[#f7cf23]">AI-powered recommendation system</b> (content-based + collaborative filtering) and conducted <b className="text-[#f7cf23]">competitive gap analysis</b> against international companies.</p>

          <p>On Georgia Tech's campus, I serve as a <b className="text-[#B3A369]">Teaching Assistant</b> for CS Ethics, <b className="text-[#B3A369]">Resident Assistant</b> for GT Housing, and <b className="text-[#B3A369]">Piccolo Section Leader</b> for the Marching Band, developing <b className="text-[#B3A369]">leadership</b> and <b className="text-[#B3A369]">mentorship</b> skills by guiding peers academically, socially, and musically.</p>
        </div>
  {/* moved to Hero component */}
      </div>
  {/* image moved to Hero component */}
    </div>
  </section>
);

export default About;

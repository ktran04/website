import React from 'react';

// Temporarily disable image shuffle. Use a single static image `me1.jpeg`.
function ProfileImageShuffle() {
  return (
    <div className="flex-shrink-0 md:w-80 md:h-80 w-56 h-56 rounded-2xl overflow-hidden shadow-lg border-2 border-blue-600">
      {/* Static profile image while shuffle is commented out */}
      <img src="/me1.jpeg" alt="Ky Tran" className="w-full h-full object-cover" />
    </div>
  );
}

const About = () => (
  <section id="about" className="mx-auto max-w-6xl px-4 py-16 border-t border-neutral-900">
    <div className="flex flex-col md:flex-row items-start md:items-center gap-10">
      <div className="flex-1">
        <h2 className="text-3xl md:text-4xl font-semibold">About Me</h2>
        <p className="mt-4 text-neutral-300 max-w-5xl">I am a Computer Science student at Georgia Tech graduating in May 2026. My focus is in Cybersecurity and Networking with a minor in Leadership Studies. Passionate about software engineering and cybersecurity, I enjoy building and deploying security systems.</p>
        <p>At my NCR Atleos internship, I gained hands-on experience in platform engineering and endpoint security using Azure. While studying abroad in Hungary, I interned at a sustainability startup app beeco, where I worked as a technology consultant to design a roadmap for an AI-powered recommendation system (content-based + collaborative filtering) and conducted competitive gap analysis against international companies. </p>
        <p>On Georgia Tech's campus, I serve as a Teaching Assistant for CS Ethics, Resident Assistant for GT Housing, and Piccolo Section Leader for the Marching Band, developing leadership and mentorship skills by guiding peers academically, socially, and musically.</p>
        <ul className="mt-6 grid gap-3 text-neutral-300 md:grid-cols-2">
          <li>🎓 B.S. CS — Networking & Cybersecurity/Privacy (Georgia Tech)</li>
          <li>🐝 Involvements: Study Abroad, RA, TA, Marching Band Section Leader</li>
          <li>📜 Certifications: AZ-900, MTA: Microsoft Software Development Fundamentals, Security+ (in progress)</li>
        </ul>
      </div>
      <ProfileImageShuffle />
    </div>
  </section>
);

export default About;

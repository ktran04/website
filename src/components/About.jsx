import React, { useState, useRef } from 'react';

// Profile image shuffle on hover
const images = [
  '/me1.jpeg',
  '/me2.jpeg',
  '/securityeng.png',
  '/me1.jpeg', // repeat to loop back
];

function ProfileImageShuffle() {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const intervalRef = useRef(null);

  React.useEffect(() => {
    if (hovered) {
      intervalRef.current = setInterval(() => {
        setIndex((i) => (i + 1) % images.length);
      }, 5000);
    } else {
      clearInterval(intervalRef.current);
      setIndex(0); // reset to me1.jpeg
    }
    return () => clearInterval(intervalRef.current);
  }, [hovered]);

  return (
    <div
      className="flex-shrink-0 md:w-80 md:h-80 w-56 h-56 rounded-2xl overflow-hidden shadow-lg border-2 border-blue-600"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ cursor: 'pointer' }}
    >
      <img src={images[index]} alt="Ky Tran" className="w-full h-full object-cover transition-all duration-500" />
    </div>
  );
}

const About = () => (
  <section id="about" className="mx-auto max-w-6xl px-4 py-16 border-t border-neutral-900">
    <div className="flex flex-col md:flex-row items-start md:items-center gap-10">
      <div className="flex-1">
        <h2 className="text-3xl md:text-4xl font-semibold">About Me</h2>
        <p className="mt-4 text-neutral-300 max-w-5xl">I am a Computer Science student at Georgia Tech concentrating in Cybersecurity and Information Internetworks with a minor in Leadership Studies, graduating in May 2026. </p>
        <p>At my NCR Atleos internship, I gained hands-on experience in platform engineering using Azure to automate secure device provisioning and centralize management while also learning to deploy security policies through Group Policies.
        During my internship at a startup beeco in Hungary, I worked as a technology consultant to design a roadmap for an AI-powered recommendation system (content-based + collaborative filtering) to personalize user experience, and conducted competitive gap analysis to identify feature adoption and partnership opportunities with international companies.</p>
        <p>My projects span phishing detection, embedded systems vulnerability research, and android app development, where I’ve used software development tools like Java, Python, and React as well as security tools like Burp Suite, Wireshark, and Ghidra.
        On Georgia Tech's campus, I serve as a Teaching Assistant for CS Ethics, Resident Assistant for GT Housing, and Piccolo Section Leader for the Marching Band, developing leadership and mentorship skills by guiding peers academically, socially, and musically.
        Passionate about software engineering and cybersecurity, I enjoy building and deploying security systems.</p>
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

import React from 'react';

const Hero = () => (
  <section id="home" className="relative">
    <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 via-transparent to-transparent z-10"></div>
    <div className="relative z-20 mx-auto max-w-6xl px-4 py-20 md:py-28">
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-10">
        <div className="flex-1 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hello! I’m <span className="text-blue-600">Ky Tran</span>.
          </h1>

          <div className="mt-4 text-neutral-300 text-lg md:text-xl">
            <ul className="grid py-4 gap-3 md:grid-cols-1">
              <li>
                <b>B.S. in Computer Science (Cybersecurity & Networking) @ Georgia Tech</b>
              </li>
              <li>
                <p><b>Certifications:</b> AZ-900, MTA: Microsoft Software Development Fundamentals, Security+ (in progress)</p>
                <p><b>Involvements:</b> Study Abroad, RA, TA, Marching Band Section Leader</p>
              </li>
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center rounded-xl bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-600"
            >
              View Projects
            </a>
            <a
              id="resumeCta"
              href="#resume"
              className="inline-flex items-center rounded-xl border bg-blue-600 border-neutral-700 px-5 py-3 font-medium text-white hover:bg-blue-600"
            >
              View Resume
            </a>
          </div>
        </div>

        <div className="flex-shrink-0 md:w-80 md:h-80 w-56 h-56 rounded-2xl overflow-hidden shadow-lg border-2 border-blue-700">
          <img src="/me1.jpeg" alt="Ky Tran" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;

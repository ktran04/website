import React from 'react';

const Hero = () => (
  <section id="home" className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 via-transparent to-transparent z-10"></div>
      <img
        src="/securityeng.png"
        alt="Security Engineer Banner"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-30"
        style={{ pointerEvents: 'none' }}
      />
      <div className="relative z-20 mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">Hello! I’m <span className="text-blue-600">Ky Tran</span>.</h1>
          <p className="mt-4 text-neutral-300 text-lg md:text-xl">Aspiring Security Software Engineer</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center rounded-xl bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-600">View Projects</a>
            <a id="resumeCta" href="#resume" className="inline-flex items-center rounded-xl border bg-blue-600 border-neutral-700 px-5 py-3 font-medium text-white hover:bg-blue-600">View Resume</a>
          </div>
        </div>
      </div>
  </section>
);

export default Hero;

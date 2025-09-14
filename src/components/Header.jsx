import React, { useEffect, useState } from 'react';

const sectionIds = ['about','skills','experience','projects','resume'];

const Header = () => {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    }, { root: null, threshold: 0.5 });

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-neutral-950/70 border-b border-neutral-800">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
  <a href="#home" className="font-semibold tracking-tight text-white">Ky Tran</a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {sectionIds.map(id => (
            <a
              key={id}
              href={`#${id}`}
              className={`text-white hover:text-blue-400 transition-colors ${active === id ? 'font-semibold' : 'opacity-100'}`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </nav>
        <a href="#resume" className="md:hidden inline-flex items-center rounded-lg border border-neutral-700 px-3 py-1.5 text-sm">Resume</a>
      </div>
    </header>
  );
};

export default Header;

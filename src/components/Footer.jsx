import React, { useEffect } from 'react';

const Footer = () => {
  useEffect(() => {
    document.getElementById('year').textContent = new Date().getFullYear();
  }, []);

  return (
    <footer className="border-t border-neutral-900">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-neutral-400 flex flex-wrap items-center justify-between gap-4">
        <p>© <span id="year"></span> Ky Tran</p>
        <div className="flex items-center gap-4">
          <a href="mailto:ky@example.com" className="hover:text-neutral-200">Email</a>
          <a href="#" className="hover:text-neutral-200">LinkedIn</a>
          <a href="#" className="hover:text-neutral-200">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

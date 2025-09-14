import React from 'react';

const Resume = () => (
  <section id="resume" className="mx-auto max-w-6xl px-4 py-16 border-t border-neutral-900">
    <h2 className="text-2xl md:text-3xl font-semibold">Resume</h2>
    <p className="mt-4 text-neutral-300">View my resume below, or download a copy. </p>
    <div className="mt-6 grid lg:grid-cols-[1fr_320px] gap-6 items-start">
      <div>
        <div id="resumeMissing" className="hidden p-4 rounded-xl border border-neutral-800 bg-neutral-900/50 text-neutral-300">No <code>Ky Tran.pdf</code> found yet. Place one in <code>public/</code> or use the upload box (admin mode).</div>
  <object id="resumeViewer" data="/Ky Tran.pdf" type="application/pdf" className="w-full h-[720px] rounded-xl border border-neutral-800 overflow-hidden"></object>
        <div className="mt-3">
          <a id="downloadBtn" href="/Ky Tran.pdf" download className="inline-flex items-center rounded-xl bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-500">Download Resume</a>
        </div>
      </div>
      {/* Admin-only uploader (not functional in static React) */}
      <aside id="uploader" className="admin-only border border-neutral-800 rounded-2xl p-4 bg-neutral-900/50">
        <h3 className="font-semibold">Replace Resume (PDF)</h3>
        <form id="uploadForm" action="/upload" method="POST" enctype="multipart/form-data" className="mt-3 space-y-3">
          <input id="resumeFile" name="resume" type="file" accept="application/pdf" className="block w-full text-sm file:mr-3 file:rounded-md file:border-0 file:bg-neutral-800 file:px-4 file:py-2 file:text-neutral-200" />
          <button type="submit" className="inline-flex items-center rounded-lg border border-neutral-700 px-4 py-2 text-sm hover:border-neutral-600">Upload & Replace</button>
          <p id="uploadMsg" className="text-sm text-neutral-400"></p>
        </form>
        <p className="mt-3 text-xs text-neutral-400">Requires running the provided Node server (see README below). Uploaded file is saved as <code>public/resume.pdf</code>.</p>
      </aside>
    </div>
  </section>
);

export default Resume;

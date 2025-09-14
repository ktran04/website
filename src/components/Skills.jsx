import React from 'react';

const Skills = () => (
  <section id="skills" className="mx-auto max-w-6xl px-4 py-16 border-t border-neutral-900">
    <h2 className="text-2xl md:text-3xl font-semibold">Skills</h2>
    <div className="mt-6 grid md:grid-cols-2 gap-10">
      {/* Software Section */}
      <div>
        <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">💻 Software</h3>
        <div className="flex flex-wrap gap-2">
          {/* Programming Languages */}
          <span className="skill-badge">Python</span>
          <span className="skill-badge">Java</span>
          <span className="skill-badge">C</span>
          <span className="skill-badge">Assembly</span>
          <span className="skill-badge">JavaScript</span>
          <span className="skill-badge">HTML</span>
          <span className="skill-badge">CSS</span>

          {/* Frameworks & Tools */}
          <span className="skill-badge">React</span>
          <span className="skill-badge">Tailwind</span>
          <span className="skill-badge">Spring Boot / Security</span>
          <span className="skill-badge">Google Firebase</span>
          <span className="skill-badge">Git</span>
          <span className="skill-badge">Trello</span>
          <span className="skill-badge">Scrum / Agile</span>
          <span className="skill-badge">Kanban</span>

          {/* Platforms */}
          <span className="skill-badge">Linux / UNIX</span>
          <span className="skill-badge">Windows</span>
          <span className="skill-badge">Azure</span>
          <span className="skill-badge">Docker</span>
          <span className="skill-badge">Virtual Machines</span>
          <span className="skill-badge">Git Bash</span>
          <span className="skill-badge">MS Office Suite</span>

        </div>
      </div>

      {/* Security Section */}
      <div>
        <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">🔒 Security</h3>
        <div className="flex flex-wrap gap-2">
          <span className="skill-badge">Reverse Engineering</span>
          <span className="skill-badge">Malware Reverse Engineering</span>
          <span className="skill-badge">Vulnerability Assessment</span>

          {/* Security Tools */}
          <span className="skill-badge">IDA Pro</span>
          <span className="skill-badge">Kali</span>
          <span className="skill-badge">Burp Suite</span>
          <span className="skill-badge">Wireshark</span>
          <span className="skill-badge">John the Ripper</span>
          <span className="skill-badge">Metasploit</span>
          <span className="skill-badge">Ghidra</span>
          <span className="skill-badge">ILSpy</span>
          <span className="skill-badge">GDB</span>
          <span className="skill-badge">Shodan</span>
          <span className="skill-badge">PowerShell</span>
          <span className="skill-badge">Nmap</span>
          <span className="skill-badge">CyberChef</span>
          <span className="skill-badge">Autopsy</span>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;

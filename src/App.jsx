
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Resume from './components/Resume';
import { useEffect } from 'react';
import Footer from './components/Footer';

function App() {
  // Show admin elements if ?admin=1
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('admin') === '1') {
      document.querySelectorAll('.admin-only').forEach(el => { el.style.display = 'block'; });
    }
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Resume />
      <Footer />
    </>
  );
}

export default App;

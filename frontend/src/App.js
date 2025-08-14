import React, { useState } from 'react';
import NavBar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  const [theme, setTheme] = useState('dark'); // default dark theme

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={theme === 'dark' ? 'dark' : 'light'}>
      <NavBar toggleTheme={toggleTheme} theme={theme} />
      <main className="pt-20 max-w-4xl mx-auto space-y-20 px-4">
        <section id="home">
          <Home theme={theme} />
        </section>
        <section id="about">
          <AboutMe theme={theme} />
        </section>
        <section id="projects">
          <Projects theme={theme} />
        </section>
        <section id="skills">
          <Skills theme={theme} />
        </section>
        <section id="contact">
          <Contact theme={theme} />
        </section>
      </main>
    </div>
  );
}

export default App;

import React from 'react';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Intro from './components/intro/Intro';
import Skills from './components/skills/Skills';

function App() {
  return (
    <div>
      <Intro />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

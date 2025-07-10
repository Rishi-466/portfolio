
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {PROJECTS, SKILLS} from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 font-sans leading-normal tracking-wider text-gray-100">
      <Header />
      <main className="container mx-auto px-6 py-8 md:py-12">
        <About />
        <Projects projects={PROJECTS} />
        <Skills skills={SKILLS} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;


import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 sticky top-0 z-50 backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-700">
      <div className="container mx-auto flex items-center justify-between p-4 md:p-6">
        <a href="#home" className="text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors">
          Alex Doe
        </a>
        <nav className="hidden md:flex space-x-6 text-lg">
          <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
          <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

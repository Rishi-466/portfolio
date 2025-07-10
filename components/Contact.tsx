
import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cyan-400">Get In Touch</h2>
        <p className="text-lg text-gray-400 max-w-xl mx-auto mb-8">
          I'm currently open to new opportunities and collaborations. Feel free to reach out, and let's create something great together!
        </p>
        <a 
          href="mailto:contact@example.com" 
          className="inline-block bg-cyan-500 text-white font-bold py-3 px-8 rounded-md hover:bg-cyan-600 transition-colors text-lg"
        >
          Say Hello
        </a>
        <div className="flex justify-center space-x-6 mt-12">
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors"><GithubIcon size={8} /></a>
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors"><LinkedinIcon size={8} /></a>
          <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors"><TwitterIcon size={8} /></a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

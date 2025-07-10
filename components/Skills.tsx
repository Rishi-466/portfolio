
import React from 'react';
import type { Skill } from '../types';

interface SkillsProps {
  skills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <section id="skills" className="py-16 md:py-24 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-cyan-400">Core Technologies</h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center gap-2 text-center group">
              <div className="w-16 h-16 md:w-20 md:h-20 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300">
                {skill.icon}
              </div>
              <p className="text-md md:text-lg font-semibold text-gray-300 group-hover:text-white transition-colors duration-300">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

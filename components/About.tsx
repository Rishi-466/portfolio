
import React, { useState, useCallback } from 'react';
import { generateBio } from '../services/geminiService';
import { SparklesIcon } from './Icons';

const About: React.FC = () => {
  const [keywords, setKeywords] = useState<string>('React, TypeScript, UI/UX Design, Frontend Development');
  const [bio, setBio] = useState<string>(`A dedicated Frontend Engineer with a passion for creating intuitive, dynamic user experiences. Expert in React and TypeScript, I specialize in turning complex problems into beautiful, functional web applications. Let's build something amazing together.`);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateBio = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    const result = await generateBio(keywords);
    if (result.startsWith("Sorry") || result.startsWith("Please")) {
        setError(result);
        setBio(`A dedicated Frontend Engineer with a passion for creating intuitive, dynamic user experiences. Expert in React and TypeScript, I specialize in turning complex problems into beautiful, functional web applications. Let's build something amazing together.`);
    } else {
        setBio(result);
    }
    setIsLoading(false);
  }, [keywords]);
  
  return (
    <section id="about" className="py-16 md:py-24">
       <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-cyan-400">About Me</h2>
       <p className="text-center text-lg text-gray-400 max-w-3xl mx-auto mb-12">
        {bio}
      </p>

      <div className="max-w-2xl mx-auto mt-12 bg-gray-800/50 rounded-lg p-6 shadow-lg border border-gray-700">
        <div className="flex items-center mb-4">
          <SparklesIcon />
          <h3 className="text-xl font-semibold ml-2">AI Bio Generator</h3>
        </div>
        <p className="text-gray-400 mb-4">
          Don't like this one? Enter some keywords below (e.g., "creative, backend, python") and let AI craft a new one for you!
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            placeholder="Enter keywords..."
            className="flex-grow bg-gray-700 border border-gray-600 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-shadow"
          />
          <button
            onClick={handleGenerateBio}
            disabled={isLoading}
            className="bg-cyan-500 text-white font-bold py-2 px-6 rounded-md hover:bg-cyan-600 transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Generating...
              </>
            ) : (
              'Generate New Bio'
            )}
          </button>
        </div>
        {error && <p className="text-red-400 mt-4">{error}</p>}
      </div>
    </section>
  );
};

export default About;

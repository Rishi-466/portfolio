
import React from 'react';

interface IconProps {
  size?: number;
  className?: string;
}

export const GithubIcon: React.FC<IconProps> = ({ size = 6, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className || `w-${size} h-${size}`}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

export const LinkedinIcon: React.FC<IconProps> = ({ size = 6, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className || `w-${size} h-${size}`}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export const TwitterIcon: React.FC<IconProps> = ({ size = 6, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className || `w-${size} h-${size}`}>
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
  </svg>
);

export const LinkIcon: React.FC<IconProps> = ({ size = 6, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className || `w-${size} h-${size}`}>
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"></path>
  </svg>
);

export const SparklesIcon: React.FC<IconProps> = ({ size = 6, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className || `w-${size} h-${size} text-cyan-400`}>
    <path d="M12 2L9.5 9.5 2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5L12 2z" />
    <path d="M5 2v4" />
    <path d="M19 18v4" />
    <path d="M2 5h4" />
    <path d="M18 19h4" />
  </svg>
);

export const JSIcon: React.FC = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" fill="currentColor"><title>JavaScript</title><path d="M0 0h24v24H0V0zm22.034 18.276c.42.636.375 1.48-.123 2.076-.492.594-1.32.723-1.956.3-1.02-.684-2.064-1.356-3.072-2.076-.396-.276-.708-.636-1.008-.996h-1.32c-.084.456-.108.912-.108 1.38 0 1.2.3 2.34.876 3.324.588.996 1.452 1.764 2.556 2.244.132.06.24.168.3.312a.493.493 0 0 1-.132.552c-.144.12-.348.12-.504.036-1.428-.684-2.616-1.74-3.432-3.144-.804-1.392-1.2-3.024-1.2-4.752 0-1.812.432-3.492 1.272-4.992.852-1.512 2.016-2.664 3.48-3.396.192-.096.408-.084.576.036.18.12.276.324.264.54a.483.483 0 0 1-.228.396c-1.08.564-1.944 1.356-2.58 2.328-.636.984-.948 2.124-.948 3.384 0 .492.06.96.144 1.428h1.2c.3-.396.672-.744 1.092-1.032 1.02-.708 2.052-1.404 3.084-2.088.636-.42 1.476-.372 2.076.12.594.492.723 1.32.3 1.956L19.35 15.6l2.682 2.676zm-7.614-3.492c.24-.156.408-.408.408-.72 0-.216-.06-.408-.18-.588-.108-.168-.264-.288-.456-.348-.192-.048-.384-.048-.564.012l-2.364.792c.228.696.564 1.344.996 1.944.3.408.684.756 1.128 1.044l1.032-2.136z"/></svg>;
export const TSIcon: React.FC = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" fill="currentColor"><title>TypeScript</title><path d="M1.5 0 h21 v21 h-21z M22.5 24 v-21 h-21 v21z M12.13 10.38 H17.8 v2.45 h-3.13 v2.58 h3.13 v2.44 H12.13 v-2.44 h2.54 v-2.58 h-2.54z M5.56 12.83 H8.7 v2.44 H5.56z M5.56 12.83 h.94 v4.44 h2.2v-4.44 h.97v-1.52 H5.56z"/></svg>;
export const ReactIcon: React.FC = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" fill="currentColor"><title>React</title><circle cx="12" cy="12" r="2"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zM12 21.6a9.6 9.6 0 1 1 9.6-9.6 9.6 9.6 0 0 1-9.6 9.6z"/><path d="M15.48 18.2a4.6 4.6 0 0 0-6.96 0"/><path d="M18.2 15.48a4.6 4.6 0 0 0 0-6.96"/><path d="M8.52 18.2a4.6 4.6 0 0 0 6.96 0"/><path d="M5.8 15.48a4.6 4.6 0 0 0 0-6.96"/><path d="M18.2 8.52a4.6 4.6 0 0 0-6.96 0"/><path d="M8.52 5.8a4.6 4.6 0 0 0 6.96 0"/><path d="M15.48 5.8a4.6 4.6 0 0 0 0 6.96"/><path d="M5.8 8.52a4.6 4.6 0 0 0 0 6.96"/></svg>;
export const TailwindIcon: React.FC = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" fill="currentColor"><title>Tailwind CSS</title><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c-1.2,4.8,1.6,7.2,4.8,7.2c3.2,0,5.2-1.6,6-4.8c1.2-4.8-1.6-7.2-4.8-7.2z M6.001,12c-1.2,0-2.4-0.8-3.2-2.4c-0.8-1.6-0.8-3.2,0-4.8c1.6-2.4,4.8-2.4,6.4,0c-1.6,2.4-4.8,2.4-6.4,0C2.001,7.2,1.201,9.6,2.801,12 c1.6,2.4,4.8,2.4,6.4,0C7.601,14.4,4.401,14.4,2.801,12c-0.4-0.8-0.4-1.6,0-2.4C3.601,8.4,4.801,7.6,6.001,7.6 c1.2,0,2.4,0.8,3.2,2.4C10.001,11.6,9.201,12,6.001,12z M18.001,12c-1.2,0-2.4-0.8-3.2-2.4c-0.8-1.6-0.8-3.2,0-4.8c1.6-2.4,4.8-2.4,6.4,0c-1.6,2.4-4.8,2.4-6.4,0c-0.8,1.6-1.6,3.2-0.8,4.8c0.8,1.6,2.4,2.4,4,2.4c1.2,0,2.4-0.8,3.2-2.4c0.8-1.6,0.8-3.2,0-4.8c-1.6-2.4-4.8-2.4-6.4,0 c-1.6,2.4,1.6,4.8,4.8,4.8c3.2,0,5.2-1.6,6-4.8c1.2-4.8-1.6-7.2-4.8-7.2C13.201,0,11.201,1.6,10.401,4.8C9.201,9.6,12.001,12,15.201,12 C18.401,12,20.401,10.4,21.201,7.2c0.4-1.6,0.4-3.2-0.4-4.8c-0.8-1.6-2.4-2.4-4-2.4c-1.2,0-2.4,0.8-3.2,2.4 c-0.8,1.6-0.8,3.2,0,4.8c1.6,2.4,4.8,2.4,6.4,0c0.8-1.6,0.8-3.2,0-4.8C15.601,4.8,14.001,4,12.801,4c-1.2,0-2.4,0.8-3.2,2.4 c-0.8,1.6-0.8,3.2,0,4.8c1.6,2.4,4.8,2.4,6.4,0C15.201,9.6,12.001,7.2,8.801,7.2C5.601,7.2,3.601,8.8,2.801,12 c-1.2,4.8,1.6,7.2,4.8,7.2c3.2,0,5.2-1.6,6-4.8c1.2-4.8-1.6-7.2-4.8-7.2c-1.2,0-2.4,0.8-3.2,2.4c-0.8,1.6-0.8,3.2,0,4.8 c1.6,2.4,4.8,2.4,6.4,0c0.8-1.6,0-3.2-1.6-4.8c-1.6-1.6-3.2-1.6-4.8,0c-1.6,1.6-1.6,3.2,0,4.8c1.6,1.6,3.2,1.6,4.8,0 C8.801,13.2,7.201,14,6.001,14c-1.2,0-2.4-0.8-3.2-2.4c-0.8-1.6-0.8-3.2,0-4.8c1.6-2.4,4.8-2.4,6.4,0 c1.6,2.4,1.6,4.8,0,7.2C7.601,16.4,10.801,16.4,12.401,14c1.6-2.4-1.6-4.8-4.8-4.8c-3.2,0-5.2,1.6-6,4.8 c-1.2,4.8,1.6,7.2,4.8,7.2c3.2,0,5.2-1.6,6-4.8c1.2-4.8-1.6-7.2-4.8-7.2z"/></svg>;
export const NodeIcon: React.FC = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" fill="currentColor"><title>Node.js</title><path d="M11.996 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12 12 12 0 00-12.004-12zM12 21.6a9.6 9.6 0 01-9.6-9.6A9.6 9.6 0 0112 2.4a9.6 9.6 0 019.6 9.6 9.6 9.6 0 01-9.6 9.6zM12.78 17.52l-1.56-2.7L9.9 12.9v4.62H7.5V6.48h2.4v4.62l1.32-2.28 1.56-2.7h2.82l-2.7 4.68 2.82 6.36h-2.82z"/></svg>;
export const NextJSIcon: React.FC = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" fill="currentColor"><title>Next.js</title><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.625 18.062H15.75v-6.874l-4.5-5.625h-1.875v7.5h1.875v-5.813l3.375 4.188v6.187h-1.875v1.5h5.813v-1.5z"/></svg>;

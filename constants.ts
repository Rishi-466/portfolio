import type { Project, Skill } from './types';
import { JSIcon, ReactIcon, TailwindIcon, NodeIcon, TSIcon, NextJSIcon } from './components/Icons';
import React from 'react';

export const PROJECTS: Project[] = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce site with product listings, a shopping cart, and a secure checkout process.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    imageUrl: 'https://picsum.photos/seed/project1/400/300',
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    title: 'Data Visualization Dashboard',
    description: 'An interactive dashboard for visualizing complex datasets using D3.js and React, providing real-time insights.',
    tags: ['React', 'D3.js', 'Tailwind CSS'],
    imageUrl: 'https://picsum.photos/seed/project2/400/300',
    liveUrl: '#',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management tool that helps teams organize, track, and manage their work efficiently.',
    tags: ['Next.js', 'TypeScript', 'Firebase'],
    imageUrl: 'https://picsum.photos/seed/project3/400/300',
    sourceUrl: '#',
  },
  {
    title: 'Portfolio Generator',
    description: 'A SaaS platform that allows users to generate and deploy their own portfolio websites with custom templates.',
    tags: ['React', 'Gemini API', 'Vercel'],
    imageUrl: 'https://picsum.photos/seed/project4/400/300',
    liveUrl: '#',
    sourceUrl: '#',
  },
];

export const SKILLS: Skill[] = [
  { name: 'JavaScript', icon: React.createElement(JSIcon) },
  { name: 'TypeScript', icon: React.createElement(TSIcon) },
  { name: 'React', icon: React.createElement(ReactIcon) },
  { name: 'Next.js', icon: React.createElement(NextJSIcon) },
  { name: 'Node.js', icon: React.createElement(NodeIcon) },
  { name: 'Tailwind CSS', icon: React.createElement(TailwindIcon) },
];

export const SOCIAL_LINKS = {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
};
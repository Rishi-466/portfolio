
import type { ReactNode } from 'react';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  sourceUrl?: string;
}

export interface Skill {
  name: string;
  icon: ReactNode;
}

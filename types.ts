import React from 'react';

export type Page = 'home' | 'about' | 'experience' | 'skills' | 'projects' | 'certifications' | 'contact';

export interface NavLink {
  name: string;
  page: Page;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Skill {
  name:string;
  icon: React.ReactNode;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl: string;
  featured?: boolean;
  year: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  url: string;
  image: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}
import React from 'react';
import { NavLink, ExperienceItem, SkillCategory, Project, SocialLink, Certification } from './types';
import {
  CSharpIcon, DotNetIcon, PythonIcon, JavaScriptIcon, HtmlIcon, CssIcon,
  SqlServerIcon, GitIcon, BlazorIcon, EntityFrameworkIcon, FlaskIcon,
  TensorFlowIcon, PandasIcon, NumpyIcon, MatplotlibIcon, MySqlIcon,
  VsCodeIcon, JupyterIcon, ColabIcon, GitHubIcon
} from './components/icons/TechIcons';
import { Github, Linkedin, Facebook, Youtube, Dna, Mail } from 'lucide-react';
import { TikTokIcon, WebsiteIcon } from './components/icons/TechIcons';


export const NAV_LINKS: NavLink[] = [
  { name: 'About', page: 'about' },
  { name: 'Experience', page: 'experience' },
  { name: 'Skills', page: 'skills' },
  { name: 'Projects', page: 'projects' },
  { name: 'Certifications', page: 'certifications' },
  { name: 'Contact', page: 'contact' },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    company: 'E-Group Ltd.',
    role: 'Full Stack ASP.NET Developer',
    period: 'Present',
    description: [
      'Design, develop, and maintain full-stack web applications using ASP.NET Core, C#, and Microsoft SQL Server.',
      'Build scalable APIs and interactive front-end interfaces to meet client requirements.',
      'Manage deployment processes and ensure applications are fast, reliable, and secure on live servers.'
    ],
  },
  {
    company: 'E-Group Ltd.',
    role: 'ASP.NET Developer (Internship)',
    period: 'Jun 2024 - Sep 2024',
    description: [
      'Gained hands-on experience in developing ASP.NET web applications with Microsoft SQL Server.',
      'Assisted the development team in building and testing new features for various client projects.',
      'Learned industry best practices for code quality, version control, and teamwork.',
    ],
  },
  {
    company: 'Private Tutor',
    role: 'SSC & HSC Subjects',
    period: '2019 - Present',
    description: [
      'Taught core SSC subjects, improving students\' foundational knowledge and problem-solving skills.',
      'Designed personalized lesson plans and created engaging study materials to enhance learning.',
      'Developed and edited educational content for clarity, accuracy, and effectiveness.'
    ],
  },
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: 'Full Stack Development (ASP.NET Platform)',
    skills: [
      { name: 'C#', icon: <CSharpIcon /> },
      { name: 'ASP.NET Core', icon: <DotNetIcon /> },
      { name: 'ASP.NET MVC', icon: <DotNetIcon /> },
      { name: 'Blazor', icon: <BlazorIcon /> },
      { name: 'SQL Server', icon: <SqlServerIcon /> },
      { name: 'Entity Framework', icon: <EntityFrameworkIcon /> },
      { name: 'HTML5', icon: <HtmlIcon /> },
      { name: 'CSS3', icon: <CssIcon /> },
      { name: 'JavaScript', icon: <JavaScriptIcon /> },
    ],
  },
  {
    title: 'Other Programming & Data Science',
    skills: [
      { name: 'Python', icon: <PythonIcon /> },
      { name: 'Flask', icon: <FlaskIcon /> },
      { name: 'TensorFlow', icon: <TensorFlowIcon /> },
      { name: 'NumPy', icon: <NumpyIcon /> },
      { name: 'Pandas', icon: <PandasIcon /> },
      { name: 'Matplotlib', icon: <MatplotlibIcon /> },
    ],
  },
  {
    title: 'Databases & Tools',
    skills: [
      { name: 'MySQL', icon: <MySqlIcon /> },
      { name: 'VS Code', icon: <VsCodeIcon /> },
      { name: 'Jupyter', icon: <JupyterIcon /> },
      { name: 'Google Colab', icon: <ColabIcon /> },
      { name: 'Git', icon: <GitIcon /> },
      { name: 'GitHub', icon: <GitHubIcon /> },
    ],
  },
];

export const PROJECTS_DATA: Project[] = [
    {
        title: 'E-Group Ltd Website',
        description: 'Designed and developed the official website for a leading IT solutions provider. Features a modern, responsive UI, dynamic service listings, a portfolio section, and a secure contact form.',
        tags: ['ASP.NET Core', 'SQL Server', 'JavaScript', 'Deployment'],
        image: 'https://placehold.co/600x400/1a2a44/ff6c00?text=E-Group+Ltd',
        liveUrl: 'https://e-groupltd.com',
        githubUrl: 'https://github.com/codebymoheb',
        featured: true,
        year: '2024',
    },
    {
        title: 'Uttara13 Community Website',
        description: 'A digital hub for the Uttara 13 residential area, providing local news, announcements, event updates, and a member directory to keep residents connected and informed.',
        tags: ['ASP.NET Core', 'SQL Server', 'Frontend', 'Maintenance'],
        image: 'https://placehold.co/600x400/1a2a44/ff6c00?text=Uttara13.org',
        liveUrl: 'https://uttara13.org',
        githubUrl: 'https://github.com/codebymoheb',
        featured: true,
        year: '2024',
    },
    {
        title: 'Sector 13 Welfare Society – Management',
        description: 'A comprehensive digital management system for a community welfare society, built to handle member information, events, and communications.',
        tags: ['ASP.NET MVC', 'Blazor Server', 'SQL Server'],
        image: 'https://placehold.co/600x400/1a2a44/7888a1?text=Welfare+System',
        githubUrl: 'https://github.com/CodeByMoheb/Sector-13-wllfare-socity-project',
        year: '2025',
    },
    {
        title: 'Alzheimer’s Disease Classification',
        description: 'A machine learning project to classify Alzheimer’s disease stages from brain imaging data using a Swin Transformer model.',
        tags: ['Python', 'TensorFlow', 'Swin Transformer', 'NumPy'],
        image: 'https://placehold.co/600x400/1a2a44/7888a1?text=AI+Project',
        githubUrl: 'https://github.com/codebymoheb',
        year: '2025',
    },
    {
        title: 'Meal Management System',
        description: 'A practical web application to manage meal plans and records for groups, developed using the .NET MVC framework.',
        tags: ['.NET MVC', 'XAMPP (MySQL)', 'HTML/CSS'],
        image: 'https://placehold.co/600x400/1a2a44/7888a1?text=Meal+System',
        githubUrl: 'https://github.com/codebymoheb',
        year: '2024',
    },
    {
        title: 'Hostel Management System',
        description: 'A system for managing hostel operations, including resident information, room allocation, and billing.',
        tags: ['ASP.NET MVC', 'SQL Server', 'JavaScript'],
        image: 'https://placehold.co/600x400/1a2a44/7888a1?text=Hostel+System',
        githubUrl: 'https://github.com/codebymoheb',
        year: '2025',
    },
];

export const CERTIFICATIONS_DATA: Certification[] = [
    {
        title: 'Intro to Machine Learning',
        issuer: 'Kaggle',
        date: 'Issued 2024',
        url: 'https://www.kaggle.com/learn/certification/mdmohebullah/intro-to-machine-learning',
        image: 'https://placehold.co/100x100/1a2a44/7888a1?text=Kaggle'
    },
    {
        title: 'Intermediate Machine Learning',
        issuer: 'Kaggle',
        date: 'Issued 2024',
        url: 'https://www.kaggle.com/learn/certification/mdmohebullah/intermediate-machine-learning',
        image: 'https://placehold.co/100x100/1a2a44/7888a1?text=Kaggle'
    },
    {
        title: 'Intro to Deep Learning',
        issuer: 'Kaggle',
        date: 'Issued 2025',
        url: 'https://www.kaggle.com/learn/intro-to-deep-learning',
        image: 'https://placehold.co/100x100/1a2a44/7888a1?text=Kaggle'
    },
    {
        title: 'Data Science Math Skills',
        issuer: 'Coursera',
        date: 'Issued 2025',
        url: 'https://www.coursera.org/account/accomplishments/verify/8WHPVSVIP498',
        image: 'https://placehold.co/100x100/1a2a44/7888a1?text=Coursera'
    },
    {
        title: 'Basic Graphic Design',
        issuer: 'Pentanik IT BD',
        date: 'Issued 2021',
        url: 'https://drive.google.com/file/d/1JP2pzU7PZLxd7WYA-m33qhqWbVUm4_lg/view',
        image: 'https://placehold.co/100x100/1a2a44/7888a1?text=Pentanik'
    }
];

export const SOCIAL_LINKS: SocialLink[] = [
    {
        name: 'GitHub',
        url: 'https://github.com/codebymoheb',
        icon: <Github className="w-6 h-6" />
    },
    {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/codebymoheb',
        icon: <Linkedin className="w-6 h-6" />
    },
    {
        name: 'Facebook',
        url: 'https://facebook.com/zidan.cse',
        icon: <Facebook className="w-6 h-6" />
    },
    {
        name: 'YouTube',
        url: 'https://youtube.com/@randommotivate',
        icon: <Youtube className="w-6 h-6" />
    },
    {
        name: 'TikTok',
        url: 'https://www.tiktok.com/@zidan9968',
        icon: <TikTokIcon className="w-6 h-6" />
    },
    {
        name: 'Website',
        url: 'http://zidan.uttara13.org',
        icon: <WebsiteIcon className="w-6 h-6" />
    }
];
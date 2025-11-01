import React from 'react';
import { NavLink, ExperienceItem, SkillCategory, Project, SocialLink, Certification } from './types';
import {
  CSharpIcon, DotNetIcon, PythonIcon, JavaScriptIcon, HtmlIcon, CssIcon,
  SqlServerIcon, GitIcon, BlazorIcon, EntityFrameworkIcon, FlaskIcon,
  TensorFlowIcon, PandasIcon, NumpyIcon, MatplotlibIcon, MySqlIcon,
  VsCodeIcon, JupyterIcon, ColabIcon, GitHubIcon
} from './components/icons/TechIcons';
import { Github, Linkedin, Facebook, Youtube } from 'lucide-react';
import { TikTokIcon, WebsiteIcon } from './components/icons/TechIcons';


export const NAV_LINKS: NavLink[] = [
  { name: 'Projects', page: 'projects' },
  { name: 'About', page: 'about' },
  { name: 'Experience', page: 'experience' },
  { name: 'Skills', page: 'skills' },
  { name: 'Certifications', page: 'certifications' },
  { name: 'Contact', page: 'contact' },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    company: 'E-Group Ltd.',
    role: 'Full Stack ASP.NET Developer',
    period: 'Present',
    description: 'Developing and maintaining full-stack web applications using ASP.NET Core, C#, and SQL Server, building scalable APIs and interactive UIs.',
  },
  {
    company: 'E-Group Ltd.',
    role: 'ASP.NET Developer (Internship)',
    period: 'Jun 2024 - Sep 2024',
    description: 'Gained hands-on experience developing ASP.NET applications, assisting the senior team with testing and building new features.',
  },
  {
    company: 'Private Tutor',
    role: 'SSC & HSC Subjects',
    period: '2019 - Present',
    description: 'Provided personalized tutoring for SSC & HSC subjects, focusing on core concepts and strengthening problem-solving skills.',
  },
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: 'Full Stack Development (ASP.NET Platform)',
    skills: [
      { name: 'C#', icon: <CSharpIcon />, description: 'A versatile, modern, object-oriented language from Microsoft used for building robust applications.' },
      { name: 'ASP.NET Core', icon: <DotNetIcon />, description: 'A cross-platform, high-performance framework for building modern, cloud-based, internet-connected applications.' },
      { name: 'ASP.NET MVC', icon: <DotNetIcon />, description: 'A classic framework for building web apps using the Model-View-Controller design pattern.' },
      { name: 'Blazor', icon: <BlazorIcon />, description: 'A powerful framework for building interactive client-side web UI with .NET and C#.' },
      { name: 'SQL Server', icon: <SqlServerIcon />, description: 'A relational database management system from Microsoft for storing and retrieving data.' },
      { name: 'Entity Framework', icon: <EntityFrameworkIcon />, description: 'An object-relational mapper (O/RM) that enables .NET developers to work with a database using .NET objects.' },
      { name: 'HTML5', icon: <HtmlIcon />, description: 'The standard markup language for documents designed to be displayed in a web browser.' },
      { name: 'CSS3', icon: <CssIcon />, description: 'A style sheet language used for describing the presentation of a document written in a markup language like HTML.' },
      { name: 'JavaScript', icon: <JavaScriptIcon />, description: 'A versatile programming language that enables interactive web pages.' },
    ],
  },
  {
    title: 'Other Programming & Data Science',
    skills: [
      { name: 'Python', icon: <PythonIcon />, description: 'A high-level language known for its simple syntax, used extensively in web development, data science, and ML.' },
      { name: 'Flask', icon: <FlaskIcon />, description: 'A lightweight web framework for Python, perfect for building APIs and smaller web applications.' },
      { name: 'TensorFlow', icon: <TensorFlowIcon />, description: 'An end-to-end open-source platform for building and deploying machine learning models.' },
      { name: 'NumPy', icon: <NumpyIcon />, description: 'A fundamental package for scientific computing in Python, providing support for large, multi-dimensional arrays.' },
      { name: 'Pandas', icon: <PandasIcon />, description: 'A data analysis and manipulation tool for Python, offering powerful data structures like DataFrames.' },
      { name: 'Matplotlib', icon: <MatplotlibIcon />, description: 'A comprehensive library for creating static, animated, and interactive visualizations in Python.' },
    ],
  },
  {
    title: 'Databases & Tools',
    skills: [
      { name: 'MySQL', icon: <MySqlIcon />, description: 'A popular open-source relational database management system used in many web applications.' },
      { name: 'VS Code', icon: <VsCodeIcon />, description: 'A streamlined code editor with support for development operations like debugging, task running, and version control.' },
      { name: 'Jupyter', icon: <JupyterIcon />, description: 'An open-source web application that allows you to create and share documents that contain live code, equations, and visualizations.' },
      { name: 'Google Colab', icon: <ColabIcon />, description: 'A cloud-based Jupyter notebook environment that provides free access to computing resources, including GPUs.' },
      { name: 'Git', icon: <GitIcon />, description: 'A distributed version control system for tracking changes in source code during software development.' },
      { name: 'GitHub', icon: <GitHubIcon />, description: 'A provider of Internet hosting for software development and version control using Git.' },
    ],
  },
];


export const PROJECTS_DATA: Project[] = [
    {
        title: 'E-Group Ltd Website',
        description: 'Led the end-to-end design and development of the official corporate website for a leading IT solutions provider. The site serves as the primary digital marketing and client-facing platform.',
        tags: ['ASP.NET Core', 'SQL Server', 'JavaScript', 'Deployment'],
        images: [
            'https://res.cloudinary.com/dzlfgx5d7/image/upload/v1761972852/dhn0flmop0ppqrk2nrzo.png', // Replace with your image link
            'https://res.cloudinary.com/dzlfgx5d7/image/upload/v1761972852/wfvgdzwwkfi1fosk5g1p.png', // Replace with your image link
            'https://res.cloudinary.com/dzlfgx5d7/image/upload/v1761972852/jal3nhz90o11kmoi6mvf.png', // Replace with your image link
            'https://res.cloudinary.com/dzlfgx5d7/image/upload/v1761972852/uzmecrsssdriqzz1ba5v.png', // Replace with your image link
            'https://res.cloudinary.com/dzlfgx5d7/image/upload/v1761973047/sxdqupat9vu2xdjlgfru.png', // Replace with your image link
        ],
        liveUrl: 'https://e-groupltd.com',
        githubUrl: 'https://github.com/codebymoheb',
        featured: true,
        year: '2024',
        role: 'Lead Full Stack Developer',
        keyFeatures: [
            'Dynamic service & portfolio showcases from a SQL backend.',
            'Fully responsive design ensuring optimal viewing on all devices.',
            'Implemented SEO best practices to improve online visibility.',
            'Secure and performant architecture with a custom contact system.'
        ]
    },
    {
        title: 'Uttara13 Community Website',
        description: 'Architected and built a comprehensive digital hub for the Uttara Sector 13 residential community, fostering connection and communication among residents.',
        tags: ['ASP.NET Core', 'SQL Server', 'Frontend', 'Maintenance'],
        images: [
            'https://placehold.co/600x400/0a192f/64ffda?text=Uttara13+Image+1', // Replace with your image link
            'https://placehold.co/300x300/0a192f/64ffda?text=Uttara13+Image+2', // Replace with your image link
            'https://placehold.co/300x300/0a192f/64ffda?text=Uttara13+Image+3', // Replace with your image link
            'https://placehold.co/300x300/0a192f/64ffda?text=Uttara13+Image+4', // Replace with your image link
            'https://placehold.co/300x300/0a192f/64ffda?text=Uttara13+Image+5', // Replace with your image link
            'https://placehold.co/300x300/0a192f/64ffda?text=Uttara13+Image+6', // Replace with your image link
        ],
        liveUrl: 'https://uttara13.org',
        githubUrl: 'https://github.com/codebymoheb',
        featured: true,
        year: '2024',
        role: 'Full Stack Developer',
        keyFeatures: [
            'Local news, announcements, and event update modules.',
            'Secure member directory with role-based access control.',
            'User-friendly content management system for administrators.',
            'Integrated community forum for resident discussions.'
        ]
    },
    {
        title: 'Sector 13 Welfare Society – Management',
        description: 'A comprehensive digital management system for a community welfare society, built to streamline operations, handle member information, manage events, and improve communications.',
        tags: ['ASP.NET MVC', 'Blazor Server', 'SQL Server'],
        images: [
            'https://placehold.co/600x400/112240/8892b0?text=Welfare+Image+1', // Replace with your image link
            'https://placehold.co/300x300/112240/8892b0?text=Welfare+Image+2', // Replace with your image link
            'https://placehold.co/300x300/112240/8892b0?text=Welfare+Image+3', // Replace with your image link
            'https://placehold.co/300x300/112240/8892b0?text=Welfare+Image+4', // Replace with your image link
            'https://placehold.co/300x300/112240/8892b0?text=Welfare+Image+5', // Replace with your image link
            'https://placehold.co/300x300/112240/8892b0?text=Welfare+Image+6', // Replace with your image link
        ],
        githubUrl: 'https://github.com/CodeByMoheb/Sector-13-wllfare-socity-project',
        year: '2025',
    },
    {
        title: 'Alzheimer’s Disease Classification',
        description: 'A cutting-edge machine learning project to classify Alzheimer’s disease stages from brain imaging data, leveraging a state-of-the-art Swin Transformer model for high accuracy.',
        tags: ['Python', 'TensorFlow', 'Swin Transformer', 'NumPy'],
        images: [
            'https://placehold.co/600x400/112240/8892b0?text=AI+Image+1', // Replace with your image link
            'https://placehold.co/300x300/112240/8892b0?text=AI+Image+2', // Replace with your image link
            'https://placehold.co/300x300/112240/8892b0?text=AI+Image+3', // Replace with your image link
            'https://placehold.co/300x300/112240/8892b0?text=AI+Image+4', // Replace with your image link
            'https://placehold.co/300x300/112240/8892b0?text=AI+Image+5', // Replace with your image link
            'https://placehold.co/300x300/112240/8892b0?text=AI+Image+6', // Replace with your image link
        ],
        githubUrl: 'https://github.com/codebymoheb',
        year: '2025',
    },
    {
        title: 'Meal Management System',
        description: 'A practical web application to simplify meal planning and expense tracking for groups. Developed using .NET MVC, it offers an intuitive interface for managing daily meals and finances.',
        tags: ['.NET MVC', 'XAMPP (MySQL)', 'HTML/CSS'],
        images: [
            'https://placehold.co/600x400/112240/8892b0?text=Meal+Image+1', // Replace with your image link
            'https://placehold.co/300x300/112240/8892b0?text=Meal+Image+2', // Replace with your image link
            'https://placehold.co/300x300/112240/8892b0?text=Meal+Image+3', // Replace with your image link
            'https://placehold.co/300x300/112240/8892b0?text=Meal+Image+4', // Replace with your image link
            'https://placehold.co/300x300/112240/8892b0?text=Meal+Image+5', // Replace with your image link
            'https://placehold.co/300x300/112240/8892b0?text=Meal+Image+6', // Replace with your image link
        ],
        githubUrl: 'https://github.com/codebymoheb',
        year: '2024',
    },
    {
        title: 'Hostel Management System',
        description: 'A robust system for managing all aspects of hostel operations, including resident information, room allocation, fee collection, and expense tracking, built with ASP.NET MVC.',
        tags: ['ASP.NET MVC', 'SQL Server', 'JavaScript'],
        images: [
            'https://placehold.co/600x400/112240/8892b0?text=Hostel+Image+1', // Replace with your image link
            'https://placehold.co/300x300/112240/8892b0?text=Hostel+Image+2', // Replace with your image link
            'https://placehold.co/300x300/112240/8892b0?text=Hostel+Image+3', // Replace with your image link
            'https://placehold.co/300x300/112240/8892b0?text=Hostel+Image+4', // Replace with your image link
            'https://placehold.co/300x300/112240/8892b0?text=Hostel+Image+5', // Replace with your image link
            'https://placehold.co/300x300/112240/8892b0?text=Hostel+Image+6', // Replace with your image link
        ],
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
        image: 'https://placehold.co/100x100/112240/8892b0?text=Kaggle'
    },
    {
        title: 'Intermediate Machine Learning',
        issuer: 'Kaggle',
        date: 'Issued 2024',
        url: 'https://www.kaggle.com/learn/certification/mdmohebullah/intermediate-machine-learning',
        image: 'https://placehold.co/100x100/112240/8892b0?text=Kaggle'
    },
    {
        title: 'Intro to Deep Learning',
        issuer: 'Kaggle',
        date: 'Issued 2025',
        url: 'https://www.kaggle.com/learn/intro-to-deep-learning',
        image: 'https://placehold.co/100x100/112240/8892b0?text=Kaggle'
    },
    {
        title: 'Data Science Math Skills',
        issuer: 'Coursera',
        date: 'Issued 2025',
        url: 'https://www.coursera.org/account/accomplishments/verify/8WHPVSVIP498',
        image: 'https://placehold.co/100x100/112240/8892b0?text=Coursera'
    },
    {
        title: 'Basic Graphic Design',
        issuer: 'Pentanik IT BD',
        date: 'Issued 2021',
        url: 'https://drive.google.com/file/d/1JP2pzU7PZLxd7WYA-m33qhqWbVUm4_lg/view',
        image: 'https://placehold.co/100x100/112240/8892b0?text=Pentanik'
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
export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  image?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
  achievements: string[];
}

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  website?: string;
  dribbble?: string;
  behance?: string;
}

export interface PortfolioData {
  name: string;
  role: string;
  bio: string;
  email: string;
  location: string;
  phone?: string;
  social: SocialLinks;
  skills: string[];
  projects: Project[];
  experience: Experience[];
  theme?: 'brutalist' | 'minimal' | 'glassmorphic' | 'neon';
}
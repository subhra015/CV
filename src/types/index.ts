export interface ProjectItem {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  tags: string[];
  links: {
    github?: string;
    demo?: string;
  };
  star: {
    situation: string;
    task: string;
    action: string;
    result: string;
  };
}

export interface SkillCategory {
  name: string;
  items: {
    name: string;
    level: number;
  }[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  category: string;
  credentialId?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  tags: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  status: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  location: string;
  status: string;
  email: string;
  github: string;
  linkedin: string;
}

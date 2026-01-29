
export interface ProjectItem {
  title: string;
  description: string;
  tech: string[];
  link?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location?: string;
  achievements: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
}

export interface Skill {
  name: string;
  level: number;
  icon?: any;
}

export interface NavLink {
  name: string;
  href: string;
}


export interface Skill {
  name: string;
  iconClass: string;
  color: string;
}

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl: string;
  codeUrl: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  year: string;
  grade: string;
  icon: string;
}

export interface Internship {
  title: string;
  company: string;
  description: string;
  icon: string;
  techStack: string[];
}

export interface Interest {
  name: string;
  icon: string;
}
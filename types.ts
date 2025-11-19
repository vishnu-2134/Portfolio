export interface Education {
  id: number;
  period: string;
  institution: string;
  degree: string;
  description: string;
}

export interface Experience {
  id: number;
  period: string;
  role: string;
  company: string;
  description: string;
  certificate?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface ContactInfo {
  phone: string;
  email: string;
  location: string;
  linkedin?: string;
  github?: string;
}

export interface Profile {
  name: string;
  title: string;
  about: string;
  contact: ContactInfo;
}
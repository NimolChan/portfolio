export type Portfolio = {
  name: string;
  role: string;
  tagline: string;
  contact: {
    email: string;
    phone: string;
    phoneHref: string;
    linkedin: string;
    linkedinUrl: string;
  };
  location: string;
  profile: string;
  skills: Array<{
    category: string;
    items: string;
  }>;
  projects: Array<{
    slug: string;
    title: string;
    year: string;
    summary: string;
    description: string;
    scope: string[];
    tools: string[];
    outcomes: string[];
  }>;
  education: Array<{
    title: string;
    year: string;
    details: string[];
  }>;
  certifications: string[];
  languages: string;
};

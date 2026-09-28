export interface BusinessUnit {
  id: string;
  name: string;
  shortName?: string;
  description: string;
  image: string;
  category?: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  category: string;
  year?: string;
}

export interface Capability {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface Leader {
  id: string;
  name: string;
  position: string;
  image: string;
  description?: string;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
}

export interface PartnerFeedback {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  relationship: string;
}

export interface NewsItem {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  date: string;
  category?: string;
}
export interface GroupStat {
  id: string;
  value: string;
  label: string;
  description?: string;
}
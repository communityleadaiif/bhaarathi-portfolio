export type EngagementCategory =
  | 'Growth Consulting'
  | 'Venture Partnership'
  | 'Institutional Leadership'
  | 'Strategic Advisory'
  | 'CSR & Funding'
  | 'Speaking Engagements'
  | 'Mentorship'
  | 'AI Transformation';

export type PortfolioCategory =
  | 'A' // Venture Leadership
  | 'B' // Growth Consulting
  | 'C' // Strategic Discussions (Exploratory)
  | 'D' // Institutional Leadership
  | 'E' // Previous Leadership
  | 'F' // Ecosystem Service PAN-India
  | 'G'; // Business Mentorship

export type EngagementStatus =
  | 'Active Leadership'
  | 'Active Venture'
  | 'Active Engagement'
  | 'Exploratory Discussion'
  | 'Completed Tenure'
  | 'Ecosystem Partner & Advisor'
  | 'Business Mentor';

export interface PortfolioItem {
  id: string;
  category: PortfolioCategory;
  categoryLabel: string;
  organisation: string;
  role: string;
  engagementStatus: EngagementStatus;
  statusBadgeVariant: 'confirmed' | 'exploratory' | 'tenure' | 'ecosystem';
  overview: string;
  challenge: string;
  strategicContribution: string;
  deliverables: string[];
  measurableOutcomes?: string;
  link?: string;
  linkLabel?: string;
  isExploratory?: boolean;
  featured?: boolean;
}

export interface CapabilityItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  focusAreas: string[];
  deliverables: string[];
  engagementTypes: string[];
}

export interface ImpactMetric {
  id: string;
  number: number;
  displayValue: string;
  label: string;
  description: string;
  sectorTag: string;
  isCareerWide: boolean;
  order: number;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  publishedDate: string;
  published: boolean;
  featured?: boolean;
}

export interface AwardCredential {
  id: string;
  title: string;
  issuer: string;
  year: string;
  type: 'credential' | 'award' | 'appointment' | 'education';
  description: string;
}

export interface Enquiry {
  id: string;
  name: string;
  organization: string;
  designation: string;
  email: string;
  phone: string;
  category: EngagementCategory;
  description: string;
  timeline: string;
  budget?: string;
  consent: boolean;
  status: 'new' | 'reviewed' | 'scheduled' | 'archived';
  createdAt: string;
}

export interface ExecutiveProfile {
  name: string;
  prefix: string;
  positioning: string;
  headline: string;
  subheading: string;
  credo: string;
  bioIntro: string;
  fullBio: string[];
  keyPillars: {
    title: string;
    description: string;
  }[];
  portraitUrl: string;
  officialEmail: string;
  phoneWhatsApp: string;
  location: string;
  bookingUrl: string;
  socials: {
    linkedin: string;
    twitter?: string;
    ecosystemOS?: string;
  };
}

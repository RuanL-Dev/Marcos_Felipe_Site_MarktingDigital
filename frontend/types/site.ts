export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  highlights: string[];
}

export interface TestimonialItem {
  author: string;
  text: string;
}

export interface PortfolioItem {
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface SiteConfig {
  businessName: string;
  whatsappUrl: string;
  instagramUrl: string;
  apiUrl: string;
}

export interface LeadPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  honeypot: string;
}

export interface LeadResponse {
  id: string;
  message: string;
}

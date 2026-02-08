export interface Photo {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  category: string;
  featured: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface SocialLink {
  id: string;
  name: string;
  icon: string;
  url: string;
}

export interface ProfileInfo {
  name: string;
  title: string;
  phone: string;
  email: string;
  location: string;
  profileImage: string;
  featuredIn: string[];
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: string;
}
export interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: string;
}

export interface Equipment {
  id: string;
  name: string;
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
}
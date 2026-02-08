import React from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import GallerySection from '../components/GallerySection';

// Define types
interface Photo {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  category: string;
  featured: boolean;
}

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface HomePageProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  toggleMobileMenu: () => void;
  isMobileMenuOpen: boolean;
  onCloseMobileMenu: () => void; // ADD THIS
  galleryPhotos: Photo[];
  services: Service[];
}

const HomePage: React.FC<HomePageProps> = (props) => {
  const { galleryPhotos, services } = props;

  return (
    <Layout {...props} currentPage="home">
      <main>
        <HeroSection />
        <ServicesSection services={services} />
        <GallerySection photos={galleryPhotos} />
      </main>
    </Layout>
  );
};

export default HomePage;
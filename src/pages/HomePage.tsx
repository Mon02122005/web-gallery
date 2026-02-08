import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import GallerySection from '../components/GallerySection';
import Footer from '../components/Footer';
import MobileSidebar from '../components/MobileSidebar';

interface HomePageProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  toggleMobileMenu: () => void;
  isMobileMenuOpen: boolean;
  galleryPhotos: any[];
  services: any[];
}

const HomePage: React.FC<HomePageProps> = ({
  isDarkMode,
  toggleDarkMode,
  toggleMobileMenu,
  isMobileMenuOpen,
  galleryPhotos,
  services
}) => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-[#1c140d] dark:text-[#f8f7f5] transition-colors duration-300">
      <Header 
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        toggleMobileMenu={toggleMobileMenu}
        currentPage="home"
      />
      
      <MobileSidebar 
        isOpen={isMobileMenuOpen}
        onClose={toggleMobileMenu}
      />

      <main>
        <HeroSection />
        <ServicesSection services={services} />
        <GallerySection photos={galleryPhotos} />
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
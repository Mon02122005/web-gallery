import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MobileSidebar from './MobileSidebar';

interface LayoutProps {
  children: React.ReactNode;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  toggleMobileMenu: () => void;
  isMobileMenuOpen: boolean;
  onCloseMobileMenu: () => void;
  currentPage?: 'home' | 'about' | 'contact' | 'gallery' | 'photo';
  showBackButton?: boolean;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  isDarkMode,
  toggleDarkMode,
  toggleMobileMenu,
  isMobileMenuOpen,
  onCloseMobileMenu,
  currentPage = 'home',
  showBackButton = false
}) => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-[#1c140d] dark:text-[#f8f7f5] transition-colors duration-300">
      <Header 
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        toggleMobileMenu={toggleMobileMenu}
        currentPage={currentPage}
        showBackButton={showBackButton}
      />
      
      <MobileSidebar 
        isOpen={isMobileMenuOpen}
        onClose={onCloseMobileMenu}
      />
      
      {children}
      
      <Footer />
    </div>
  );
};

export default Layout;
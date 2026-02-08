import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProfileDropdown from './ProfileDropdown';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  toggleMobileMenu: () => void;
  currentPage?: 'home' | 'about' | 'contact' | 'gallery' | 'photo';
  showBackButton?: boolean;
}

const Header: React.FC<HeaderProps> = ({ 
  toggleMobileMenu, 
  currentPage = 'home',
  showBackButton = false
}) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const navItems = [
    { id: '1', label: 'Galeri', href: '/', icon: 'grid_view' },
    { id: '2', label: 'Tentang', href: '/about', icon: 'person' },
    { id: '3', label: 'Kontak', href: '/contact', icon: 'alternate_email' },
  ];

  const getLinkClass = (pageName: string) => {
    const baseClass = "text-sm font-semibold transition-colors";
    const activeClass = "text-primary";
    const inactiveClass = "text-[#1c140d] dark:text-[#f8f7f5] hover:text-primary";
    
    return `${baseClass} ${currentPage === pageName ? activeClass : inactiveClass}`;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-solid border-[#f4ede7] dark:border-[#3d2e1f] bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-6 lg:px-20 py-4">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between">
        {/* Logo dengan Back Button */}
        <div className="flex items-center gap-3">
          {showBackButton && (
            <Link 
              to="/"
              className="mr-2 text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
            >
              <span className="material-symbols-outlined">arrow_back</span>
              <span className="text-sm font-medium hidden sm:inline">Kembali</span>
            </Link>
          )}
          
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
              <span className="material-symbols-outlined">filter_hdr</span>
            </div>
            <h2 className="text-xl font-extrabold tracking-tight text-[#1c140d] dark:text-white">
              The Gallery
            </h2>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.id}
              className={getLinkClass(item.label.toLowerCase())}
              to={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Contact Button - Desktop */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="flex items-center justify-center rounded-lg bg-primary px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all active:scale-95"
            >
              Hubungi Saya
            </Link>
          </div>

          {/* Profile Dropdown */}
          <div className="relative flex items-center">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="cursor-pointer"
            >
              <img
                alt="Fotografer Profile"
                className="h-10 w-10 rounded-full border-2 border-primary object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7nOATeDrYkz6FtTiosGHLgGyEyvu_Er1zVt81_oOoXkFGHRLaavXoeejlFGO3azB5fUzh-VdbUY2NFK4Z7KeU0EAJoMR7J9H-c6D3d4GTWDWPRudb2SmsPwqKydukFUe-HnxFmeQqe6rdJMc9MX9j5PIqAM66kp-srFcEwDuADZVg76Dbb2qyNmGmauRt5-RmrnERc8P_Zio_81I3T1NfiqrvWlgcL9RpkpUTJdsJlZIC8MIgLm3DjmthLqMcikPrfhJk0czYmQM"
              />
            </button>
            
            <ProfileDropdown 
              isOpen={isProfileOpen}
              onClose={() => setIsProfileOpen(false)}
            />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMobileMenu}
            className="cursor-pointer flex items-center justify-center p-2 rounded-lg hover:bg-primary/10 text-[#1c140d] dark:text-white md:hidden transition-colors"
          >
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
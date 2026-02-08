import { useEffect } from 'react';
import { Link } from 'react-router-dom';

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileSidebar = ({ isOpen, onClose }: MobileSidebarProps) => {
  const navItems = [
    { id: '1', label: 'Galeri', href: '/', icon: 'grid_view' },
    { id: '2', label: 'Tentang', href: '/about', icon: 'person' },
    { id: '3', label: 'Kontak', href: '/contact', icon: 'alternate_email' },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-black/50 transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={onClose}
        id="mobile-sidebar-overlay"
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 bottom-0 z-[70] w-[280px] bg-white dark:bg-[#221910] shadow-2xl transition-transform duration-300 md:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        id="mobile-sidebar"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-[#f4ede7] dark:border-[#3d2e1f] flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3" onClick={onClose}>
              <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-white">
                <span className="material-symbols-outlined text-base">filter_hdr</span>
              </div>
              <span className="font-extrabold text-[#1c140d] dark:text-white">
                The Gallery
              </span>
            </Link>
            <button
              onClick={onClose}
              className="cursor-pointer text-[#1c140d] dark:text-white hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col p-6 gap-6">
            {navItems.map((item) => (
              <Link
                key={item.id}
                className="text-lg font-bold text-[#1c140d] dark:text-white hover:text-primary transition-colors flex items-center gap-4"
                to={item.href}
                onClick={onClose}
              >
                <span className="material-symbols-outlined text-primary">
                  {item.icon}
                </span>
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Contact Section */}
          <div className="mt-auto p-6 border-t border-[#f4ede7] dark:border-[#3d2e1f]">
            <p className="text-[10px] uppercase tracking-widest text-[#9c7349] mb-4">
              Mulai Kolaborasi
            </p>
            <Link
              to="/contact"
              className="w-full flex items-center justify-center gap-2 rounded-lg bg-primary py-4 text-sm font-bold text-white shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors"
              onClick={onClose}
            >
              <span className="material-symbols-outlined">chat</span>
              Hubungi Saya
            </Link>
          </div>

          {/* Profile Info */}
          <div className="p-6 border-t border-[#f4ede7] dark:border-[#3d2e1f]">
            <div className="flex items-center gap-3 mb-4">
              <img
                alt="Fotografer Profile"
                className="h-12 w-12 rounded-full border-2 border-primary object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7nOATeDrYkz6FtTiosGHLgGyEyvu_Er1zVt81_oOoXkFGHRLaavXoeejlFGO3azB5fUzh-VdbUY2NFK4Z7KeU0EAJoMR7J9H-c6D3d4GTWDWPRudb2SmsPwqKydukFUe-HnxFmeQqe6rdJMc9MX9j5PIqAM66kp-srFcEwDuADZVg76Dbb2qyNmGmauRt5-RmrnERc8P_Zio_81I3T1NfiqrvWlgcL9RpkpUTJdsJlZIC8MIgLm3DjmthLqMcikPrfhJk0czYmQM"
              />
              <div>
                <p className="text-sm font-bold text-[#1c140d] dark:text-white">
                  Alex Johnson
                </p>
                <p className="text-[10px] uppercase tracking-widest text-[#9c7349]">
                  Profesional Fotografer
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <a
                className="flex items-center gap-2 text-xs text-[#4a3a2a] dark:text-[#d1c2b5] hover:text-primary transition-colors"
                href="tel:+628123456789"
              >
                <span className="material-symbols-outlined text-primary text-base">
                  call
                </span>
                +62 812-3456-789
              </a>
              <a
                className="flex items-center gap-2 text-xs text-[#4a3a2a] dark:text-[#d1c2b5] hover:text-primary transition-colors"
                href="mailto:alex@fotogaleripribadi.id"
              >
                <span className="material-symbols-outlined text-primary text-base">
                  mail
                </span>
                alex@fotogaleripribadi.id
              </a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default MobileSidebar;
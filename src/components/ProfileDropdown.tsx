import { useEffect, useRef } from 'react';

interface ProfileDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProfileDropdown = ({ isOpen, onClose }: ProfileDropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={dropdownRef}
      className="absolute right-0 top-12 w-64 rounded-xl bg-white dark:bg-[#2d2218] p-4 shadow-2xl border border-[#f4ede7] dark:border-[#3d2e1f] z-[60] animate-in slide-in-from-top-2 duration-200"
      id="profile-dropdown"
    >
      <div className="flex flex-col gap-3">
        {/* Profile Header */}
        <div className="pb-2 border-b border-[#f4ede7] dark:border-[#3d2e1f]">
          <p className="text-sm font-bold text-[#1c140d] dark:text-white">
            Alex Johnson
          </p>
          <p className="text-[10px] uppercase tracking-widest text-[#9c7349]">
            Profesional Fotografer
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-2">
          <a
            className="flex items-center gap-3 text-xs text-[#4a3a2a] dark:text-[#d1c2b5] hover:text-primary transition-colors group"
            href="tel:+628123456789"
          >
            <span className="material-symbols-outlined text-primary text-lg group-hover:scale-110 transition-transform">
              call
            </span>
            +62 812-3456-789
          </a>
          
          <a
            className="flex items-center gap-3 text-xs text-[#4a3a2a] dark:text-[#d1c2b5] hover:text-primary transition-colors group"
            href="mailto:alex@fotogaleripribadi.id"
          >
            <span className="material-symbols-outlined text-primary text-lg group-hover:scale-110 transition-transform">
              mail
            </span>
            alex@fotogaleripribadi.id
          </a>
          
          <div className="flex items-center gap-3 text-xs text-[#4a3a2a] dark:text-[#d1c2b5]">
            <span className="material-symbols-outlined text-primary text-lg">
              location_on
            </span>
            Reykjavik, Islandia
          </div>
        </div>

        {/* Social Links */}
        <div className="pt-2 border-t border-[#f4ede7] dark:border-[#3d2e1f]">
          <p className="text-[10px] uppercase tracking-widest text-[#9c7349] mb-2">
            Ikuti Saya
          </p>
          <div className="flex gap-2">
            {['camera', 'brand_awareness', 'palette'].map((icon, index) => (
              <a
                key={index}
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f4ede7] dark:bg-[#3d2e1f] text-[#4a3a2a] dark:text-[#d1c2b5] hover:bg-primary hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined text-sm">
                  {icon}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="pt-2">
          <button className="w-full text-center text-xs font-semibold text-primary hover:text-primary/80 transition-colors">
            Lihat Portofolio Lengkap
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileDropdown;
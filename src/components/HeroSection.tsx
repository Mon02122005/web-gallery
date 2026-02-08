import React from 'react';

const HeroSection: React.FC = () => {
  const socialLinks = [
    { id: '1', name: 'Camera', icon: 'camera' },
    { id: '2', name: 'Brand', icon: 'brand_awareness' },
    { id: '3', name: 'Palette', icon: 'palette' },
  ];

  return (
    <main className="flex flex-1 items-center justify-center px-6 py-12 lg:px-20">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">
        {/* Left Content */}
        <div className="lg:col-span-5 flex flex-col gap-8 order-2 lg:order-1">
          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
              <span className="material-symbols-outlined text-sm">auto_awesome</span>
              <span>Portofolio 2024</span>
            </div>
            
            <h1 className="font-serif text-5xl font-bold leading-[1.1] text-[#1c140d] dark:text-white md:text-6xl xl:text-7xl">
              Menangkap Esensi <span className="text-primary italic">Gerak</span> &amp; Cahaya
            </h1>
            
            <p className="max-w-[500px] text-lg leading-relaxed text-[#4a3a2a] dark:text-[#d1c2b5]">
              Halo, saya Alex. Seorang fotografer gaya hidup dan pemandangan yang berdedikasi untuk menemukan keindahan dalam keseharian dan cerita di balik keheningan.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="flex h-14 min-w-[180px] items-center justify-center gap-2 rounded-xl bg-primary px-8 text-base font-bold text-white shadow-xl shadow-primary/25 hover:translate-y-[-2px] hover:shadow-primary/35 transition-all">
              Lihat Galeri
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
            
            <button className="flex h-14 min-w-[180px] items-center justify-center gap-2 rounded-xl border-2 border-[#e8dbce] dark:border-[#3d2e1f] px-8 text-base font-bold text-[#1c140d] dark:text-white hover:bg-[#f4ede7] dark:hover:bg-[#3d2e1f] transition-all">
              Pelajari Lebih Lanjut
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 pt-4 border-t border-[#e8dbce] dark:border-[#3d2e1f]">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#9c7349]">
                Ikuti Karya Saya
              </span>
              <div className="mt-2 flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.id}
                    className="group flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-background-dark border border-[#e8dbce] dark:border-[#3d2e1f] text-[#1c140d] dark:text-white hover:border-primary hover:text-primary transition-all"
                    href="#"
                  >
                    <span className="material-symbols-outlined text-xl">
                      {link.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:col-span-7 order-1 lg:order-2">
          <div className="relative group">
            {/* Decorative Elements */}
            <div className="absolute -right-4 -top-4 -z-10 h-32 w-32 rounded-xl bg-primary/20 blur-2xl transition-all group-hover:bg-primary/30"></div>
            <div className="absolute -bottom-4 -left-4 -z-10 h-48 w-48 rounded-full bg-primary/10 blur-3xl transition-all group-hover:bg-primary/20"></div>
            
            {/* Main Image */}
            <div className="overflow-hidden rounded-2xl shadow-2xl shadow-[#1c140d]/10 transition-transform duration-500 group-hover:scale-[1.01]">
              <img
                alt="Pemandangan gunung sinematik saat golden hour"
                className="h-[400px] w-full object-cover md:h-[600px] lg:h-[700px]"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuz40UfjQ3sw2f6jKmNntIp6_iuZQOgcHsYoTKhF24LSM08voYlvnIg4dAfckcOiMnJg3GqnN7V0MU1MkyvEHabwiAM-Kd9Ji4V9wECIReF1FDWFdKdI8jEeIY4dnr8a_if9ePl8a8vaEajXWhpLCpxLmJ6BVmBgDSClwyvZtid36GTVMakutT6CM7WP1Oo3k5H6usdhmPCqvATEXjAx3snA0Qif8RwOi_vXPO-gnSgqd2-RzTmJtG4dyJcAF__qTZcneDT-RX8Sc"
              />
            </div>
            
            {/* Featured Badge */}
            <div className="absolute bottom-8 right-8 flex items-center gap-3 rounded-2xl bg-white/90 dark:bg-[#221910]/90 p-4 shadow-xl backdrop-blur-sm">
              <div className="flex -space-x-3">
                <img
                  alt="Potret"
                  className="h-10 w-10 rounded-full border-2 border-white object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7nOATeDrYkz6FtTiosGHLgGyEyvu_Er1zVt81_oOoXkFGHRLaavXoeejlFGO3azB5fUzh-VdbUY2NFK4Z7KeU0EAJoMR7J9H-c6D3d4GTWDWPRudb2SmsPwqKydukFUe-HnxFmeQqe6rdJMc9MX9j5PIqAM66kp-srFcEwDuADZVg76Dbb2qyNmGmauRt5-RmrnERc8P_Zio_81I3T1NfiqrvWlgcL9RpkpUTJdsJlZIC8MIgLm3DjmthLqMcikPrfhJk0czYmQM"
                />
                <img
                  alt="Potret"
                  className="h-10 w-10 rounded-full border-2 border-white object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTmFoMSYp--CEVkLFubpsJ1mkQg-o4QZX3tne_z-yLJzP-2GZfYPKWSP5M7kUoVkbzSqfXHrhCGtchS69fYnInW-PkMMf-LC5ITH2qqu_90pG6R2ZCCBT7NXZun6qqUH5VwpvkEGf8p4L5FLoHmA3F-OuFr6gyCF9-lIYt34XrKVU3jVnv7MJ8tc_Jkqf6OinO1VqcxyL2KLy8TNbgJO9ZHkSd6ifk9YgcDlmoB4GASQRyRgmiFnOz7a2Nmde3gxfAbCxbcowOe3c"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-[#1c140d] dark:text-white">
                  Ditampilkan di
                </span>
                <span className="text-[10px] text-[#9c7349]">Vogue, NatGeo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
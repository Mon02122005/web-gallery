import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MobileSidebar from '../components/MobileSidebar';

interface AboutPageProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  toggleMobileMenu: () => void;
  isMobileMenuOpen: boolean; // TAMBAHKAN INI
  onCloseMobileMenu: () => void; // TAMBAHKAN INI
}

const AboutPage: React.FC<AboutPageProps> = ({ 
  isDarkMode, 
  toggleDarkMode, 
  toggleMobileMenu,
  isMobileMenuOpen, // TERIMA PROP INI
  onCloseMobileMenu // TERIMA PROP INI
}) => {
  const equipmentList = [
    { id: '1', name: 'Sony Alpha A7 IV' },
    { id: '2', name: 'Sony FE 35mm f/1.4 GM' },
    { id: '3', name: 'Sony FE 85mm f/1.8' },
    { id: '4', name: 'DJI Mavic 3 Pro' },
  ];

  const socialLinks = [
    { id: '1', name: 'Instagram', url: '#' },
    { id: '2', name: 'Behance', url: '#' },
  ];

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-[#1c140d] dark:text-[#f8f7f5] transition-colors duration-300">
      <Header 
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        toggleMobileMenu={toggleMobileMenu}
        currentPage="about"
      />
      
      {/* TAMBAHKAN MobileSidebar DI SINI */}
      <MobileSidebar 
        isOpen={isMobileMenuOpen}
        onClose={onCloseMobileMenu}
      />
      
      <main className="flex-1 flex flex-col lg:flex-row">
        {/* Left Image Section */}
        <div className="lg:w-1/2 relative min-h-[500px] lg:min-h-0 overflow-hidden">
          <img 
            alt="Portrait fotografer dengan pencahayaan dramatis" 
            className="absolute inset-0 h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7nOATeDrYkz6FtTiosGHLgGyEyvu_Er1zVt81_oOoXkFGHRLaavXoeejlFGO3azB5fUzh-VdbUY2NFK4Z7KeU0EAJoMR7J9H-c6D3d4GTWDWPRudb2SmsPwqKydukFUe-HnxFmeQqe6rdJMc9MX9j5PIqAM66kp-srFcEwDuADZVg76Dbb2qyNmGmauRt5-RmrnERc8P_Zio_81I3T1NfiqrvWlgcL9RpkpUTJdsJlZIC8MIgLm3DjmthLqMcikPrfhJk0czYmQM"
          />
          <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
          
          {/* Quote */}
          <div className="absolute bottom-12 left-12 z-10 hidden lg:block">
            <div className="p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl max-w-xs">
              <p className="font-serif italic text-white text-2xl">
                "Fotografi adalah bahasa yang tidak membutuhkan kata-kata untuk bercerita."
              </p>
            </div>
          </div>
        </div>

        {/* Right Content Section */}
        <div className="lg:w-1/2 bg-white dark:bg-[#1a120b] px-8 py-16 lg:px-20 lg:py-24 flex flex-col justify-center">
          <div className="max-w-xl">
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm block mb-4">
              Profil Saya
            </span>
            
            <h1 className="font-serif text-5xl lg:text-6xl font-bold text-primary mb-8">
              Tentang Saya
            </h1>
            
            {/* Biography */}
            <div className="space-y-6 text-[#4a3a2a] dark:text-[#d1c2b5] leading-relaxed text-lg">
              <p>
                Halo, saya Alex. Ketertarikan saya pada dunia fotografi dimulai sejak pertama kali saya memegang kamera analog peninggalan kakek saya. Bagi saya, setiap jepretan adalah cara untuk menghentikan waktu dan mengabadikan emosi yang seringkali terlewatkan oleh mata telanjang.
              </p>
              <p>
                Selama lebih dari satu dekade, saya telah berkelana untuk menangkap keindahan alam dan sisi manusiawi dalam kehidupan sehari-hari. Fokus utama saya adalah menciptakan visual yang jujur, hangat, dan penuh makna.
              </p>
            </div>

            {/* Creative Philosophy */}
            <div className="mt-12">
              <h3 className="font-serif text-2xl font-bold text-[#1c140d] dark:text-white mb-4">
                Filosofi Kreatif
              </h3>
              <p className="text-[#4a3a2a] dark:text-[#d1c2b5]">
                Saya percaya bahwa teknik hanyalah alat, namun rasa adalah jiwa dari sebuah foto. Saya selalu berusaha untuk tidak hanya memotret apa yang terlihat, tapi juga apa yang dirasakan.
              </p>
            </div>

            {/* Equipment */}
            <div className="mt-12">
              <h3 className="font-serif text-2xl font-bold text-[#1c140d] dark:text-white mb-6">
                Peralatan Tempur
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {equipmentList.map((item) => (
                  <li key={item.id} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-primary"></span>
                    <span className="text-sm font-medium">{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Links */}
            <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-8">
              <a 
                className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all"
                href="#"
              >
                Lihat Portfolio 
                <span className="material-symbols-outlined">trending_flat</span>
              </a>
              
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a 
                    key={link.id}
                    className="text-[#9c7349] hover:text-primary transition-colors"
                    href={link.url}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
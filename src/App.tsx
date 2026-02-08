import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PhotoDetailPage from './pages/PhotoDetailPage'; // IMPORT BARU

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

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Data untuk gallery
  const galleryPhotos: Photo[] = [
    {
      id: '1',
      title: 'Hutan Saat Golden Hour',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLucwoybcpFDLwfeV6_8bpW1rGaXFpovWza3M57pWSSDaAku41-TSMwPZm4kxz-XDgJlG8BOZUvfI0WQ_-haQQyt3HQQyoOd39gbeFEBeL1ZrMhFbA1qaMy1HNhElNTwlLwtQEqK_UV2j1gg8IWlhNvbmQAnXqc0JabOwLzDoxwf5j6ARn1k1nFgc0SjCmJo6AEU-ScutbFwMMY2bC9ruUoiIal9rKgFBxph79LAEYAikSK2CTcWgud10XUygonve5QC-XjrEaEQY',
      category: 'Landscape',
      featured: true
    },
    {
      id: '2',
      title: 'Puncak Tengah Malam',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLyc2tkozxbWpZXGZj3e_uSVEzSINI5YP_2yBNAAqJW8gxXx_ru83F8mo6ZuYdKxPiuSQUavyHpS50gGUty5mWwQBVxmVAtA5AcIRHM9X06-JHwU9964QWq3J7bpxBSD8Rsayz0SZniTD-829OpaDcsVFU3mh5wScCLr5W0crpacOlnfdN71gsI3GscaK6bpQTWX6gkFN7dNCeWAxsSxn-Y1uEVLHnjMWsc8DsN880AC84Ku3XHLCXCD64sjNMC3k6hAsgtAE0GAA',
      category: 'Astro',
      featured: true
    },
    {
      id: '3',
      title: 'Danau Cermin',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfYXT20KlSHrDBE90NuHj9jhda94OJM_EQT4H59Ght5mGy0QWgz7jTKbHyrBiLfej4Jm-DV7MO6YmERSkdUhjtKnkONEzpcjSq6MW2Jch3Di8MFDckx47EfvqL9vTAXLrp0NDQv8LKtbk8RYiS8ioVBv4DndHf9SRFbUCnYauz14E7jPQK2DI98Xd69LId-g-ckhdGyCZJNjycuHUqcmNRDNZaNMT3fr5cO8_HoLxy3qk67OrJwSbNFZY3hjZm96w557SZmZ1rNXI',
      category: 'Nature',
      featured: true
    },
    {
      id: '4',
      title: 'Aliran Samudra',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKbEmR03VpKFG1w4V7ozdo-WsETMxWCoZKTbAZLhcvRnpDBRS5G-zGAj79Oa1ExfIqlAWAp3vNomlng4D4B2wE7Y4V2XRost1BBYByKxIgbAsRp06OG7DWQg1BsmoGMeE-8_1-zJ54bP_8SlXeOtWJIyPHwnogOORKCWNJAUt_0A1GLsycgwMDQtfkciJ6syWpH-FNFbyAnED2GsIlenwsbG6zegX7QjmbC2cMq61tT3S0SZ_sN0ETqsyZBy7qZkFpeV1Shtg64IY',
      category: 'Seascape',
      featured: true
    }
  ];

  // Data untuk services
  const services: Service[] = [
    {
      id: '1',
      title: 'Fotografi Gaya Hidup',
      description: 'Momen-momen natural yang ditangkap dalam lingkungan aslinya, berfokus pada hubungan manusia yang otentik.',
      icon: 'photo_camera'
    },
    {
      id: '2',
      title: 'Pemandangan Alam',
      description: 'Pegunungan yang luas dan deburan ombak laut, menonjolkan interaksi agung antara cahaya dan bayangan.',
      icon: 'landscape'
    },
    {
      id: '3',
      title: 'Pemotretan Editorial',
      description: 'Citra berbasis cerita untuk merek global dan publikasi butik, memadukan bentuk arsitektur dengan narasi.',
      icon: 'newspaper'
    }
  ];

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModeMediaQuery.matches);
    
    const handler = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    darkModeMediaQuery.addEventListener('change', handler);
    
    return () => darkModeMediaQuery.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route 
          path="/" 
          element={
            <HomePage 
              isDarkMode={isDarkMode}
              toggleDarkMode={toggleDarkMode}
              toggleMobileMenu={toggleMobileMenu}
              isMobileMenuOpen={isMobileMenuOpen}
              onCloseMobileMenu={() => setIsMobileMenuOpen(false)}
              galleryPhotos={galleryPhotos}
              services={services}
            />
          } 
        />
        
        {/* About Page */}
        <Route 
          path="/about" 
          element={
            <AboutPage 
              isDarkMode={isDarkMode}
              toggleDarkMode={toggleDarkMode}
              toggleMobileMenu={toggleMobileMenu}
              isMobileMenuOpen={isMobileMenuOpen}
              onCloseMobileMenu={() => setIsMobileMenuOpen(false)}
            />
          } 
        />
        
        {/* Contact Page */}
        <Route 
          path="/contact" 
          element={
            <ContactPage 
              isDarkMode={isDarkMode}
              toggleDarkMode={toggleDarkMode}
              toggleMobileMenu={toggleMobileMenu}
              isMobileMenuOpen={isMobileMenuOpen}
              onCloseMobileMenu={() => setIsMobileMenuOpen(false)}
            />
          } 
        />
        
        {/* Photo Detail Page - BARU */}
        <Route 
          path="/photo/:id" 
          element={
            <PhotoDetailPage 
              isDarkMode={isDarkMode}
              toggleDarkMode={toggleDarkMode}
              toggleMobileMenu={toggleMobileMenu}
              isMobileMenuOpen={isMobileMenuOpen}
              onCloseMobileMenu={() => setIsMobileMenuOpen(false)}
            />
          } 
        />
        
        {/* Fallback - Redirect to Home if route not found */}
        <Route 
          path="*" 
          element={
            <HomePage 
              isDarkMode={isDarkMode}
              toggleDarkMode={toggleDarkMode}
              toggleMobileMenu={toggleMobileMenu}
              isMobileMenuOpen={isMobileMenuOpen}
              onCloseMobileMenu={() => setIsMobileMenuOpen(false)}
              galleryPhotos={galleryPhotos}
              services={services}
            />
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
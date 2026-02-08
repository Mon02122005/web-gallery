import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

interface PhotoDetailPageProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  toggleMobileMenu: () => void;
  isMobileMenuOpen: boolean;
  onCloseMobileMenu: () => void;
}

// Mock data untuk photo detail
const photoDetails = [
  {
    id: '1',
    title: 'Ethereal Fjord Dusk',
    date: 'October 12, 2023',
    series: 'Limited Series',
    description: 'The golden hour light painting the edges of the Icelandic fjords. This long exposure captures the motion of the tides while preserving the stark stillness of the granite cliffs. Part of the "Northern Echoes" collection.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbOBxNsezUafiySPih4E5Ovqxop_oZ36Z9m7_94usdoEeM4uq8D1PJ4Z9viGutMeytTt7NMgpTQ1IvtQyyMAnmH2x7Fl6uxYf-6ahWFE0Rm23XtQVmIadSSWEQzrK4CPXybDC1PIn4JDkXLyqHnhl-Su718X9iVh21r8jeyP0RmQlBkUoDAVCDfl0SMQAN47Etx1Kj316A1LR31DK_bt8_NI1Kj2xj4JkQzu5CNOsKZgbh_FQaCztNGy0CjsK5LTNThHxmzll_oPA',
    location: 'Reykjavík, Iceland',
    latitude: '64.1265° N',
    camera: 'Sony A7R IV',
    lens: 'FE 24-70mm GM',
    aperture: 'f/8.0',
    shutterSpeed: '1/125s',
    iso: '100',
    resolution: '9504 x 6336',
    colors: ['#1a1c2c', '#5d5245', '#b49b81', '#f48c25', '#e8e4e1'],
    isFavorite: false,
    category: 'Landscape'
  },
  {
    id: '2',
    title: 'Midnight Sun on the Peak',
    date: 'September 5, 2023',
    series: 'Arctic Collection',
    description: 'The midnight sun casting long shadows over mountain peaks in Norway. Captured during the summer solstice when the sun barely dips below the horizon.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLyc2tkozxbWpZXGZj3e_uSVEzSINI5YP_2yBNAAqJW8gxXx_ru83F8mo6ZuYdKxPiuSQUavyHpS50gGUty5mWwQBVxmVAtA5AcIRHM9X06-JHwU9964QWq3J7bpxBSD8Rsayz0SZniTD-829OpaDcsVFU3mh5wScCLr5W0crpacOlnfdN71gsI3GscaK6bpQTWX6gkFN7dNCeWAxsSxn-Y1uEVLHnjMWsc8DsN880AC84Ku3XHLCXCD64sjNMC3k6hAsgtAE0GAA',
    location: 'Lofoten, Norway',
    latitude: '68.1265° N',
    camera: 'Sony A7 IV',
    lens: 'FE 35mm f/1.4 GM',
    aperture: 'f/2.8',
    shutterSpeed: '1/250s',
    iso: '200',
    resolution: '7008 x 4672',
    colors: ['#2c3e50', '#34495e', '#7f8c8d', '#f1c40f', '#ecf0f1'],
    isFavorite: true,
    category: 'Astro'
  },
  {
    id: '3',
    title: 'Danau Cermin',
    date: 'August 20, 2023',
    series: 'Nature Reflections',
    description: 'Perfect mirror reflection of mountains in a tranquil lake. Early morning shot with zero wind conditions.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfYXT20KlSHrDBE90NuHj9jhda94OJM_EQT4H59Ght5mGy0QWgz7jTKbHyrBiLfej4Jm-DV7MO6YmERSkdUhjtKnkONEzpcjSq6MW2Jch3Di8MFDckx47EfvqL9vTAXLrp0NDQv8LKtbk8RYiS8ioVBv4DndHf9SRFbUCnYauz14E7jPQK2DI98Xd69LId-g-ckhdGyCZJNjycuHUqcmNRDNZaNMT3fr5cO8_HoLxy3qk67OrJwSbNFZY3hjZm96w557SZmZ1rNXI',
    location: 'Alps, Switzerland',
    latitude: '46.8182° N',
    camera: 'Canon EOS R5',
    lens: 'RF 70-200mm f/2.8',
    aperture: 'f/11',
    shutterSpeed: '1/60s',
    iso: '100',
    resolution: '8192 x 5464',
    colors: ['#87CEEB', '#4682B4', '#F0E68C', '#228B22', '#2E8B57'],
    isFavorite: false,
    category: 'Nature'
  },
  {
    id: '4',
    title: 'Aliran Samudra',
    date: 'July 15, 2023',
    series: 'Ocean Flow',
    description: 'Long exposure of ocean waves creating smooth, ethereal patterns on the beach. Shot during blue hour.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKbEmR03VpKFG1w4V7ozdo-WsETMxWCoZKTbAZLhcvRnpDBRS5G-zGAj79Oa1ExfIqlAWAp3vNomlng4D4B2wE7Y4V2XRost1BBYByKxIgbAsRp06OG7DWQg1BsmoGMeE-8_1-zJ54bP_8SlXeOtWJIyPHwnogOORKCWNJAUt_0A1GLsycgwMDQtfkciJ6syWpH-FNFbyAnED2GsIlenwsbG6zegX7QjmbC2cMq61tT3S0SZ_sN0ETqsyZBy7qZkFpeV1Shtg64IY',
    location: 'Bali, Indonesia',
    latitude: '8.3405° S',
    camera: 'Nikon Z7 II',
    lens: 'Nikkor Z 14-24mm f/2.8',
    aperture: 'f/16',
    shutterSpeed: '30s',
    iso: '64',
    resolution: '8256 x 5504',
    colors: ['#000080', '#4169E1', '#87CEEB', '#F0F8FF', '#E6E6FA'],
    isFavorite: true,
    category: 'Seascape'
  }
];

const PhotoDetailPage: React.FC<PhotoDetailPageProps> = (props) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);

  // Find photo by ID
  const photo = photoDetails.find(p => p.id === id) || photoDetails[0];
  
  // Set initial favorite state
  React.useEffect(() => {
    setIsFavorite(photo.isFavorite);
  }, [photo]);

  // Metadata items
  const metadataItems = [
    { id: '1', label: 'Camera', value: photo.camera, icon: 'photo_camera' },
    { id: '2', label: 'Lens', value: photo.lens, icon: 'lens' },
    { id: '3', label: 'Aperture', value: photo.aperture, icon: 'exposure' },
    { id: '4', label: 'Shutter', value: photo.shutterSpeed, icon: 'shutter_speed' },
    { id: '5', label: 'ISO', value: photo.iso, icon: 'iso' },
    { id: '6', label: 'Resolution', value: photo.resolution, icon: 'aspect_ratio' },
  ];

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  const handleShareClick = () => {
    if (navigator.share) {
      navigator.share({
        title: photo.title,
        text: photo.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const handlePrevPhoto = () => {
    const currentIndex = photoDetails.findIndex(p => p.id === id);
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : photoDetails.length - 1;
    navigate(`/photo/${photoDetails[prevIndex].id}`);
  };

  const handleNextPhoto = () => {
    const currentIndex = photoDetails.findIndex(p => p.id === id);
    const nextIndex = currentIndex < photoDetails.length - 1 ? currentIndex + 1 : 0;
    navigate(`/photo/${photoDetails[nextIndex].id}`);
  };

  const getAdjacentPhotos = () => {
    const currentIndex = photoDetails.findIndex(p => p.id === id);
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : photoDetails.length - 1;
    const nextIndex = currentIndex < photoDetails.length - 1 ? currentIndex + 1 : 0;
    
    return {
      prev: photoDetails[prevIndex],
      next: photoDetails[nextIndex]
    };
  };

  const adjacentPhotos = getAdjacentPhotos();

  return (
    <Layout {...props} currentPage="photo" showBackButton={true}>
      <main className="flex flex-col lg:flex-row flex-1 px-4 lg:px-20 py-8 gap-10">
        {/* Main Image Area */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Image with Navigation */}
          <div className="relative group aspect-[3/2] w-full rounded-xl overflow-hidden bg-white dark:bg-[#1a120b] shadow-2xl">
            {/* Navigation Arrows */}
            <button 
              onClick={handlePrevPhoto}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 size-12 flex items-center justify-center bg-white/90 dark:bg-black/40 backdrop-blur-md rounded-full text-primary shadow-lg opacity-0 group-hover:opacity-100 transition-all hover:scale-110"
            >
              <span className="material-symbols-outlined text-[32px]">chevron_left</span>
            </button>
            
            <button 
              onClick={handleNextPhoto}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 size-12 flex items-center justify-center bg-white/90 dark:bg-black/40 backdrop-blur-md rounded-full text-primary shadow-lg opacity-0 group-hover:opacity-100 transition-all hover:scale-110"
            >
              <span className="material-symbols-outlined text-[32px]">chevron_right</span>
            </button>
            
            {/* Main Image */}
            <img 
              src={photo.imageUrl} 
              alt={photo.title}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
            
            {/* Actions Overlay */}
            <div className="absolute bottom-6 right-6 flex gap-3">
              <button 
                onClick={handleFavoriteClick}
                className="size-10 flex items-center justify-center bg-white/90 dark:bg-black/60 backdrop-blur-md rounded-lg text-primary hover:text-red-500 transition-colors"
              >
                <span className={`material-symbols-outlined ${isFavorite ? 'filled' : ''}`}>
                  favorite
                </span>
              </button>
              
              <button 
                onClick={handleShareClick}
                className="size-10 flex items-center justify-center bg-white/90 dark:bg-black/60 backdrop-blur-md rounded-lg text-primary hover:scale-105 transition-transform"
              >
                <span className="material-symbols-outlined">share</span>
              </button>
            </div>

            {/* Category Badge */}
            <div className="absolute top-6 left-6">
              <span className="inline-flex items-center rounded-full bg-black/60 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white">
                {photo.category}
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-[#1c140d] dark:text-[#fcfaf8] text-3xl font-extrabold tracking-tight">
                  {photo.title}
                </h1>
                <p className="text-primary/80 font-medium text-sm mt-1 uppercase tracking-widest flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                  {photo.date} • {photo.series}
                </p>
              </div>
              
              <button className="flex items-center gap-2 bg-[#f48c25]/10 hover:bg-[#f48c25]/20 text-primary px-6 py-3 rounded-xl font-bold transition-all">
                <span className="material-symbols-outlined">download</span>
                <span>Download Original</span>
              </button>
            </div>
            
            <p className="text-[#9c7349] dark:text-[#c0a283] text-lg leading-relaxed mt-4 max-w-3xl">
              {photo.description}
            </p>
          </div>
        </div>

        {/* Info Sidebar */}
        <aside className="w-full lg:w-[380px] flex flex-col gap-8">
          {/* Location Card */}
          <div className="bg-white dark:bg-[#2a1f14] p-6 rounded-2xl shadow-sm border border-[#f4ede7] dark:border-[#3a2d21]">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-primary text-[24px]">location_on</span>
              <h3 className="font-bold text-[#1c140d] dark:text-[#fcfaf8]">Shooting Location</h3>
            </div>
            
            <div className="h-40 w-full rounded-xl bg-primary/5 relative overflow-hidden mb-4 border border-[#f4ede7] dark:border-[#3a2d21]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 to-transparent"></div>
              <div className="flex h-full w-full items-center justify-center flex-col text-primary/40">
                <span className="material-symbols-outlined text-[48px]">map</span>
                <span className="text-xs font-bold mt-2 uppercase">Interactive Map</span>
              </div>
            </div>
            
            <p className="text-lg font-bold text-[#1c140d] dark:text-[#fcfaf8]">
              {photo.location}
            </p>
            <p className="text-sm text-[#9c7349] dark:text-[#c0a283]">
              Westfjords region, Latitude {photo.latitude}
            </p>
          </div>

          {/* Metadata List */}
          <div className="bg-white dark:bg-[#2a1f14] p-6 rounded-2xl shadow-sm border border-[#f4ede7] dark:border-[#3a2d21]">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary text-[24px]">info</span>
              <h3 className="font-bold text-[#1c140d] dark:text-[#fcfaf8]">Technical Metadata</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-y-6">
              {metadataItems.map((item) => (
                <div key={item.id} className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-primary">
                    <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#9c7349] dark:text-[#c0a283]">
                      {item.label}
                    </span>
                  </div>
                  <p className="text-sm font-bold">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Color Palette */}
          <div className="bg-white dark:bg-[#2a1f14] p-6 rounded-2xl shadow-sm border border-[#f4ede7] dark:border-[#3a2d21]">
            <h3 className="font-bold text-[#1c140d] dark:text-[#fcfaf8] mb-4 text-sm uppercase tracking-widest">
              Extracted Palette
            </h3>
            
            <div className="flex h-10 w-full rounded-lg overflow-hidden border border-[#f4ede7] dark:border-[#3a2d21]">
              {photo.colors.map((color, index) => (
                <div 
                  key={index}
                  className="flex-1 relative group"
                  style={{ backgroundColor: color }}
                >
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black/80 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {color}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </main>

      {/* Bottom Navigation */}
      <footer className="mt-auto px-6 lg:px-20 py-10 bg-white dark:bg-[#1a120b] border-t border-[#f4ede7] dark:border-[#3a2d21]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Previous Photo */}
          <button 
            onClick={handlePrevPhoto}
            className="flex flex-col gap-1 hover:text-primary cursor-pointer transition-colors text-left group"
          >
            <p className="text-sm text-[#9c7349] dark:text-[#c0a283]">Previous Photograph</p>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">
                arrow_back
              </span>
              <h4 className="font-bold text-lg">{adjacentPhotos.prev.title}</h4>
            </div>
          </button>

          {/* Live Indicator */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full">
              <span className="block size-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Live Gallery View
              </span>
            </div>
          </div>

          {/* Next Photo */}
          <button 
            onClick={handleNextPhoto}
            className="flex flex-col gap-1 hover:text-primary cursor-pointer transition-colors md:text-right group"
          >
            <p className="text-sm text-[#9c7349] dark:text-[#c0a283]">Next Photograph</p>
            <div className="flex items-center gap-2 justify-end">
              <h4 className="font-bold text-lg">{adjacentPhotos.next.title}</h4>
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </button>
        </div>
      </footer>
    </Layout>
  );
};

export default PhotoDetailPage;
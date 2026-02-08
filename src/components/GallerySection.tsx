import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Define type langsung di sini jika import error
interface Photo {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  category: string;
  featured: boolean;
}

interface GallerySectionProps {
  photos: Photo[];
}

const GallerySection = ({ photos }: GallerySectionProps) => {
  const [hoveredPhoto, setHoveredPhoto] = useState<string | null>(null);
  const navigate = useNavigate();

  const handlePhotoClick = (photoId: string) => {
    navigate(`/photo/${photoId}`);
  };

  return (
    <section className="py-20 px-6 lg:px-20">
      <div className="mx-auto max-w-[1440px]">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-12">
          <div className="flex flex-col gap-2">
            <h2 className="font-serif text-4xl font-bold dark:text-white">
              Karya Terpilih
            </h2>
            <p className="text-[#9c7349] max-w-[500px]">
              Koleksi kurasi dari bidikan favorit saya selama setahun terakhir dari seluruh dunia.
            </p>
          </div>
          <button className="group flex items-center gap-2 font-bold text-primary hover:gap-4 transition-all">
            Jelajahi Galeri Lengkap 
            <span className="material-symbols-outlined">trending_flat</span>
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {photos.map((photo) => (
            <div 
              key={photo.id}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl cursor-pointer"
              onMouseEnter={() => setHoveredPhoto(photo.id)}
              onMouseLeave={() => setHoveredPhoto(null)}
              onClick={() => handlePhotoClick(photo.id)}
            >
              <img 
                alt={photo.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                src={photo.imageUrl}
              />
              
              {/* Hover Overlay */}
              <div 
                className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6 transition-opacity duration-300 ${
                  hoveredPhoto === photo.id ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <p className="text-white font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {photo.title}
                </p>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center rounded-full bg-black/50 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white">
                  {photo.category}
                </span>
              </div>

              {/* Click Indicator */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                  <span className="material-symbols-outlined text-white text-2xl">
                    zoom_in
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button for Mobile */}
        <div className="mt-12 flex justify-center md:hidden">
          <button className="flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-bold text-white shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-shadow">
            Lihat Semua Foto
            <span className="material-symbols-outlined">expand_more</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
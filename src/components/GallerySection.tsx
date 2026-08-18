import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/hotelData';
import { HotelImage } from './HotelImage';
import { Camera, Maximize2, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

interface GallerySectionProps {
  selectedPhotoKey?: string | null;
  onClosePhotoModal?: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  selectedPhotoKey,
  onClosePhotoModal,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos (9)' },
    { id: 'exterior', label: 'Exterior & Courtyard' },
    { id: 'rooms', label: 'Rooms & Bathrooms' },
    { id: 'dining', label: 'Buffet & Dining Hall' },
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    if (onClosePhotoModal) onClosePhotoModal();
  };

  const nextLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#fcfbfa] border-b border-[#ece6dc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f2ecdf] text-[#6d5622] text-xs font-semibold uppercase tracking-wider mb-3 border border-[#e0d4c1]">
            <Camera className="w-3.5 h-3.5" />
            <span>Authentic Hotel Photography</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1e2429] mb-4">
            Moments at Pal Hotel
          </h2>

          <p className="text-base text-[#5c5344] leading-relaxed">
            Genuine photographs of our stone architecture, cozy heated guest rooms, ensuite modern bathrooms, daily breakfast buffet, and timber dining halls.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#1e2429] text-[#fcfbfa] shadow-sm'
                  : 'bg-[#f5f1e8] text-[#554b3d] hover:bg-[#eae3d5] border border-[#e2d8c9]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative rounded-lg overflow-hidden border border-[#e0d6c5] bg-[#242b26] shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <HotelImage
                imageKey={item.src}
                alt={item.title}
                aspectRatio="4/3"
                className="w-full"
              />

              {/* Hover overlay caption */}
              <div className="p-4 bg-[#faf8f5] border-t border-[#f0eae0] flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#272017] font-serif-luxury group-hover:text-[#8a6828] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-[#786e5e] mt-0.5">
                    {item.description}
                  </p>
                </div>
                <div className="p-1.5 rounded-full bg-[#f3ede3] text-[#716552] group-hover:bg-[#1e2429] group-hover:text-white transition-colors flex-shrink-0">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={prevLightbox}
            className="absolute left-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextLightbox}
            className="absolute right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            className="max-w-4xl max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative rounded-lg overflow-hidden border border-white/20 shadow-2xl bg-black w-full">
              <HotelImage
                imageKey={filteredItems[lightboxIndex].src}
                alt={filteredItems[lightboxIndex].title}
                className="max-h-[70vh] object-contain w-full"
              />
            </div>
            <div className="text-center mt-4 text-white">
              <h3 className="text-lg font-serif-luxury font-bold">
                {filteredItems[lightboxIndex].title}
              </h3>
              <p className="text-xs text-neutral-300 mt-1">
                {filteredItems[lightboxIndex].description}
              </p>
              <div className="text-[11px] text-[#d4af37] mt-1">
                {lightboxIndex + 1} of {filteredItems.length} • Pal Hotel, Leh
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

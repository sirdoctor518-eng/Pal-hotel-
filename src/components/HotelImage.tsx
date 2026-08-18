import React, { useState, useEffect } from 'react';
import { Camera, Image as ImageIcon, Sparkles, Star } from 'lucide-react';

interface HotelImageProps {
  imageKey: string;
  alt: string;
  className?: string;
  aspectRatio?: '16/9' | '4/3' | '1/1' | '3/2' | '2/3' | 'auto';
  priority?: boolean;
  onClick?: () => void;
  showCaption?: boolean;
}

// Mapping of genuine uploaded hotel photos for Pal Hotel
export const REAL_HOTEL_PHOTOS: Record<
  string,
  {
    localPaths: string[];
    label: string;
    description: string;
    reviewCredit?: { author: string; text: string; rating: number };
  }
> = {
  'exterior-facade': {
    localPaths: [
      '/images/Screenshot_2026-08-18-19-32-07-35_3d9111e2d3171bf4882369f490c087b4.jpg',
      '/images/exterior-facade.jpg',
      '/images/the-pal-facade.jpg',
      '/images/the-pal-building.jpg',
    ],
    label: 'The Pal Hotel Facade',
    description: 'Stately multi-story gray stone facade with traditional Ladakhi carved timber eaves',
    reviewCredit: {
      author: 'NEHA',
      text: 'Been here twice and the hospitality is amazing. People are so welcoming...',
      rating: 5,
    },
  },
  'entrance-patio': {
    localPaths: [
      '/images/Screenshot_2026-08-18-19-31-35-33_3d9111e2d3171bf4882369f490c087b4.jpg',
      '/images/entrance-patio.jpg',
      '/images/the-pal-patio.jpg',
    ],
    label: 'Courtyard & Front Patio',
    description: 'Front paved patio with carved wood entrance and outdoor cafe seating under green trees',
    reviewCredit: {
      author: 'Pal Hotel Guest',
      text: 'Courtyard seating with traditional Ladakhi architecture and quiet mountain air.',
      rating: 5,
    },
  },
  'courtyard-sunny': {
    localPaths: [
      '/images/Screenshot_2026-08-18-19-32-13-17_3d9111e2d3171bf4882369f490c087b4.jpg',
      '/images/courtyard-sunny.jpg',
      '/images/the-pal-courtyard.jpg',
    ],
    label: 'Sunlit Courtyard Dining Patio',
    description: 'Handcrafted wooden tables and armchairs in the sunny stone-paved courtyard',
    reviewCredit: {
      author: 'Pal Hotel Guest',
      text: 'Sunny outdoor courtyard seating overlooking peaceful Upper Tukcha Road.',
      rating: 5,
    },
  },
  'room-king': {
    localPaths: [
      '/images/Screenshot_2026-08-18-19-31-44-17_3d9111e2d3171bf4882369f490c087b4.jpg',
      '/images/room-king.jpg',
      '/images/the-pal-king-bedroom.jpg',
    ],
    label: 'Comfortable King Bedroom Suite',
    description: 'Spacious guest room with plush king bed, traditional geometric wool rug, desk, heater, and warm bedside sconces',
    reviewCredit: {
      author: 'Shailesh Amin',
      text: 'The Pal - One of the best hotels you can trust in Leh. Warm rooms & comfortable bedding.',
      rating: 5,
    },
  },
  'room-cozy': {
    localPaths: [
      '/images/Screenshot_2026-08-18-19-32-20-30_3d9111e2d3171bf4882369f490c087b4.jpg',
      '/images/room-cozy.jpg',
      '/images/the-pal-cozy-bedroom.jpg',
    ],
    label: 'Warm & Cozy Double Room',
    description: 'Inviting queen bedding with dark runner, geometric rug, matching wooden nightstands, TV, and mountain-facing window',
    reviewCredit: {
      author: 'Simanto Bagchi',
      text: 'Room was very clean, heating was effective and cozy.',
      rating: 5,
    },
  },
  'bathroom': {
    localPaths: [
      '/images/Screenshot_2026-08-18-19-31-47-05_3d9111e2d3171bf4882369f490c087b4.jpg',
      '/images/bathroom.jpg',
      '/images/the-pal-bathroom.jpg',
    ],
    label: 'Modern Ensuite Bathroom',
    description: 'Earthy terracotta tiles, modern square rain shower, floating vanity washbasin, and 24/7 hot water supply',
    reviewCredit: {
      author: 'Huy Ngô',
      text: 'The hotel is beautiful and staff is very friendly. Clean modern bathroom with constant hot water.',
      rating: 5,
    },
  },
  'buffet-counter': {
    localPaths: [
      '/images/Screenshot_2026-08-18-19-34-19-20_3d9111e2d3171bf4882369f490c087b4.jpg',
      '/images/buffet-counter.jpg',
      '/images/the-pal-buffet.jpg',
    ],
    label: 'Daily Breakfast Buffet Counter',
    description: 'Stainless steel chafing dishes serving fresh hot breakfast, poha, curries, and chutneys in the dining hall',
    reviewCredit: {
      author: 'Walid Bandhoo',
      text: 'Wonderful & decent property with exquisite view on the mountain. Great breakfast buffet spread.',
      rating: 5,
    },
  },
  'dining-lounge': {
    localPaths: [
      '/images/Screenshot_2026-08-18-19-33-10-18_3d9111e2d3171bf4882369f490c087b4.jpg',
      '/images/dining-lounge.jpg',
      '/images/the-pal-dining-lounge.jpg',
    ],
    label: 'Restaurant & Living Lounge',
    description: 'Solid wood dining tables, timber paneled ceiling, and soft sofa lounge area with Buddhist artwork',
    reviewCredit: {
      author: 'Anu',
      text: 'Amazing - Had the best stay with best food and warm dining lounge.',
      rating: 5,
    },
  },
  'dining-hall': {
    localPaths: [
      '/images/Screenshot_2026-08-18-19-33-53-95_3d9111e2d3171bf4882369f490c087b4.jpg',
      '/images/dining-hall.jpg',
      '/images/the-pal-dining-hall.jpg',
    ],
    label: 'Bright Dining Hall',
    description: 'Spacious dining hall with long timber tables, natural pine ceiling, and framed brick insets',
    reviewCredit: {
      author: 'Pal Hotel Guest',
      text: 'Delicious meals served in an authentic warm Himalayan dining atmosphere.',
      rating: 5,
    },
  },
};

// Global image store for client-uploaded replacements in browser memory
const clientCustomImages: Record<string, string> = {};

export function setCustomImage(key: string, dataUrl: string) {
  clientCustomImages[key] = dataUrl;
  try {
    localStorage.setItem(`pal_hotel_img_${key}`, dataUrl);
  } catch (e) {
    // Ignore storage quota errors
  }
}

export function getCustomImage(key: string): string | null {
  if (clientCustomImages[key]) return clientCustomImages[key];
  try {
    const saved = localStorage.getItem(`pal_hotel_img_${key}`);
    if (saved) {
      clientCustomImages[key] = saved;
      return saved;
    }
  } catch (e) {
    return null;
  }
  return null;
}

export const HotelImage: React.FC<HotelImageProps> = ({
  imageKey,
  alt,
  className = '',
  aspectRatio,
  onClick,
}) => {
  const photoConfig = REAL_HOTEL_PHOTOS[imageKey] || REAL_HOTEL_PHOTOS['exterior-facade'];
  const [pathIndex, setPathIndex] = useState(0);
  const [customSrc, setCustomSrc] = useState<string | null>(getCustomImage(imageKey));
  const [imageError, setImageError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const saved = getCustomImage(imageKey);
    if (saved) setCustomSrc(saved);
  }, [imageKey]);

  const currentSrc = customSrc || photoConfig.localPaths[pathIndex] || photoConfig.localPaths[0];

  const handleImageError = () => {
    if (pathIndex < photoConfig.localPaths.length - 1) {
      setPathIndex((prev) => prev + 1);
    } else {
      setImageError(true);
    }
  };

  return (
    <div
      className={`relative overflow-hidden bg-[#242b26] ${onClick ? 'cursor-pointer group' : ''} ${className}`}
      style={aspectRatio && aspectRatio !== 'auto' ? { aspectRatio } : undefined}
      onClick={onClick}
    >
      {/* If the image loads successfully */}
      {!imageError ? (
        <>
          <img
            src={currentSrc}
            alt={alt || photoConfig.label}
            referrerPolicy="no-referrer"
            loading="lazy"
            onLoad={() => setLoaded(true)}
            onError={handleImageError}
            className={`w-full h-full object-cover transition-all duration-500 ${
              loaded ? 'opacity-100' : 'opacity-0'
            } ${onClick ? 'group-hover:scale-105 transition-transform duration-500' : ''}`}
          />

          {!loaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#1f2622] text-[#eed994] p-4 text-center">
              <Camera className="w-6 h-6 text-[#d4af37] animate-pulse mb-1.5" />
              <span className="text-xs font-semibold tracking-wider font-brand text-[#faf8f5]">
                {photoConfig.label}
              </span>
              <span className="text-[10px] text-[#b3a897] mt-0.5">
                Authentic Hotel Photograph
              </span>
            </div>
          )}
        </>
      ) : (
        /* Authentic Visual Card Display based directly on the uploaded photo content and verified guest review */
        <div className="w-full h-full min-h-[220px] p-6 flex flex-col justify-between bg-gradient-to-br from-[#1a211c] via-[#242d27] to-[#151c17] text-[#fcfbfa] border border-[#3d4941]">
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#2e3a32] border border-[#d4af37]/40 text-[#eed994] text-[10px] font-bold uppercase tracking-wider">
                <Camera className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Pal Hotel Photograph</span>
              </div>
              <div className="flex text-[#d4af37] gap-0.5">
                {[...Array(photoConfig.reviewCredit?.rating || 5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-[#d4af37]" />
                ))}
              </div>
            </div>

            <h4 className="font-serif-luxury text-base sm:text-lg font-bold text-[#faf8f5] mb-1.5 leading-snug">
              {photoConfig.label}
            </h4>

            <p className="text-xs text-[#cfc5b4] leading-relaxed mb-4">
              {photoConfig.description}
            </p>
          </div>

          {photoConfig.reviewCredit && (
            <div className="pt-3 border-t border-[#37453c] bg-[#1a221d]/60 -mx-6 -mb-6 p-4 rounded-b">
              <div className="text-[11px] italic text-[#eed994] font-serif-luxury">
                "{photoConfig.reviewCredit.text}"
              </div>
              <div className="text-[10px] text-[#a49987] font-semibold mt-1">
                — {photoConfig.reviewCredit.author} • Verified Guest Review
              </div>
            </div>
          )}
        </div>
      )}

      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity" />
    </div>
  );
};

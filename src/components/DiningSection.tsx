import React from 'react';
import { DINING_HIGHLIGHTS } from '../data/hotelData';
import { HotelImage } from './HotelImage';
import { Utensils, Sparkles, Coffee, Salad, Soup, Moon, UtensilsCrossed } from 'lucide-react';

interface DiningSectionProps {
  onSelectPhoto?: (key: string) => void;
}

const iconResolver: Record<string, React.ReactNode> = {
  Soup: <Soup className="w-5 h-5 text-[#8a6828]" />,
  Salad: <Salad className="w-5 h-5 text-[#8a6828]" />,
  Coffee: <Coffee className="w-5 h-5 text-[#8a6828]" />,
  Sparkles: <Sparkles className="w-5 h-5 text-[#8a6828]" />,
  UtensilsCrossed: <UtensilsCrossed className="w-5 h-5 text-[#8a6828]" />,
  Moon: <Moon className="w-5 h-5 text-[#8a6828]" />,
};

export const DiningSection: React.FC<DiningSectionProps> = ({ onSelectPhoto }) => {
  return (
    <section id="dining" className="py-20 lg:py-28 bg-[#f6f2ea] border-b border-[#e5dcce]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ebdcb9] text-[#5e491a] text-xs font-semibold uppercase tracking-wider mb-3 border border-[#dac8a2]">
            <Utensils className="w-3.5 h-3.5" />
            <span>Culinary Experience</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1e2429] mb-4">
            Taste & Hospitality
          </h2>

          <p className="text-base sm:text-lg text-[#52493c] leading-relaxed">
            Guests frequently praise the delicious and varied food served at Pal Hotel. Enjoy wholesome dining crafted to replenish and delight your journey across Ladakh.
          </p>
        </div>

        {/* Visual Imagery Grid - 3 Real Hotel Dining Photographs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Buffet Counter */}
          <div className="group rounded-lg overflow-hidden border border-[#ded4c3] bg-white shadow-sm hover:shadow-md transition-all">
            <HotelImage
              imageKey="buffet-counter"
              alt="Daily breakfast buffet counter with hot chafing dishes at Pal Hotel Leh"
              aspectRatio="4/3"
              className="w-full"
              onClick={() => onSelectPhoto && onSelectPhoto('buffet-counter')}
            />
            <div className="p-4">
              <h4 className="font-serif-luxury text-base font-bold text-[#221c13]">Daily Buffet Counter</h4>
              <p className="text-xs text-[#6e6351] mt-1">
                Hot chafing dishes with freshly prepared poha, curries, and morning specials.
              </p>
            </div>
          </div>

          {/* Restaurant & Living Lounge */}
          <div className="group rounded-lg overflow-hidden border border-[#ded4c3] bg-white shadow-sm hover:shadow-md transition-all">
            <HotelImage
              imageKey="dining-lounge"
              alt="Restaurant dining table and cozy living lounge area at Pal Hotel Leh"
              aspectRatio="4/3"
              className="w-full"
              onClick={() => onSelectPhoto && onSelectPhoto('dining-lounge')}
            />
            <div className="p-4">
              <h4 className="font-serif-luxury text-base font-bold text-[#221c13]">Restaurant & Lounge</h4>
              <p className="text-xs text-[#6e6351] mt-1">
                Solid timber dining tables and relaxing sitting lounge with artwork.
              </p>
            </div>
          </div>

          {/* Bright Dining Hall */}
          <div className="group rounded-lg overflow-hidden border border-[#ded4c3] bg-white shadow-sm hover:shadow-md transition-all">
            <HotelImage
              imageKey="dining-hall"
              alt="Spacious dining hall with long timber tables at Pal Hotel Leh"
              aspectRatio="4/3"
              className="w-full"
              onClick={() => onSelectPhoto && onSelectPhoto('dining-hall')}
            />
            <div className="p-4">
              <h4 className="font-serif-luxury text-base font-bold text-[#221c13]">Spacious Dining Hall</h4>
              <p className="text-xs text-[#6e6351] mt-1">
                Natural pine wood ceiling and long tables set for comfortable group and family meals.
              </p>
            </div>
          </div>
        </div>

        {/* Highlighted Dining Options Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {DINING_HIGHLIGHTS.map((feature, idx) => (
            <div
              key={idx}
              className="p-5 rounded-lg bg-[#fcfbfa] border border-[#e2d8c8] hover:border-[#bda784] transition-all flex items-start gap-3.5"
            >
              <div className="p-2.5 rounded-md bg-[#f4eee2] flex-shrink-0">
                {iconResolver[feature.icon] || <Sparkles className="w-5 h-5 text-[#8a6828]" />}
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#262016] font-serif-luxury mb-1">
                  {feature.title}
                </h4>
                <p className="text-xs text-[#635949] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

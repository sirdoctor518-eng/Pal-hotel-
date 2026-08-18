import React from 'react';
import { AMENITIES } from '../data/hotelData';
import { 
  MapPin, 
  Mountain, 
  Bed, 
  HeartHandshake, 
  Utensils, 
  Flame, 
  ThermometerSun, 
  Wifi,
  Sparkles
} from 'lucide-react';

// Icon resolver helper
const iconMap: Record<string, React.ReactNode> = {
  MapPin: <MapPin className="w-6 h-6" />,
  Mountain: <Mountain className="w-6 h-6" />,
  Bed: <Bed className="w-6 h-6" />,
  HeartHandshake: <HeartHandshake className="w-6 h-6" />,
  Utensils: <Utensils className="w-6 h-6" />,
  Flame: <Flame className="w-6 h-6" />,
  ThermometerSun: <ThermometerSun className="w-6 h-6" />,
  Wifi: <Wifi className="w-6 h-6" />,
};

export const WhyStayWithUs: React.FC = () => {
  return (
    <section id="amenities" className="py-20 bg-[#f7f4ee] border-b border-[#e8dfcf]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#eee6d7] text-[#6d5622] text-xs font-semibold uppercase tracking-wider mb-3 border border-[#ded2bd]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Thoughtful Comforts</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1e2429] mb-4">
            Why Stay With Us
          </h2>

          <p className="text-base text-[#5c5344] leading-relaxed">
            Essential comforts, authentic hospitality, and a prime location tailored specifically for a relaxed high-altitude stay in Leh.
          </p>
        </div>

        {/* Amenity Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {AMENITIES.map((item) => (
            <div
              key={item.id}
              id={`amenity-card-${item.id}`}
              className="bg-[#fcfbfa] p-6 rounded-lg border border-[#e4dbcc] hover:border-[#bda887] hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-md bg-[#f1ebd0]/60 text-[#8a6828] flex items-center justify-center border border-[#e3d7bf]">
                    {iconMap[item.iconName] || <Sparkles className="w-6 h-6" />}
                  </div>

                  {item.badge && (
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#ebdcb9] text-[#544116]">
                      {item.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-[#231d14] mb-2 font-serif-luxury">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#5d5445] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

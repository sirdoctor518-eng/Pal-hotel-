import React from 'react';
import { HOTEL_INFO } from '../data/hotelData';
import { 
  Star, 
  MapPin, 
  Mountain, 
  Flame, 
  Wifi, 
  Car, 
  Utensils, 
  Award, 
  Users 
} from 'lucide-react';

export const HotelHighlights: React.FC = () => {
  const highlights = [
    { label: '4-Star Hotel', desc: 'Category in Leh', icon: <Award className="w-5 h-5" /> },
    { label: '4.9 ★ Guest Rating', desc: 'Top-Rated Hospitality', icon: <Star className="w-5 h-5 fill-[#d4af37] text-[#d4af37]" /> },
    { label: '2,010 Reviews', desc: 'Verified Praise', icon: <Users className="w-5 h-5" /> },
    { label: '5-Min Walk', desc: 'To Leh Main Market', icon: <MapPin className="w-5 h-5" /> },
    { label: 'Mountain Views', desc: 'Snow Peak Vistas', icon: <Mountain className="w-5 h-5" /> },
    { label: '24/7 Hot Water', desc: 'Continuous Supply', icon: <Flame className="w-5 h-5" /> },
    { label: 'High-Speed Wi-Fi', desc: 'Throughout Property', icon: <Wifi className="w-5 h-5" /> },
    { label: 'On-Site Parking', desc: 'Vehicle Convenience', icon: <Car className="w-5 h-5" /> },
    { label: 'Delicious Breakfast', desc: 'Buffet & Kehwa', icon: <Utensils className="w-5 h-5" /> },
  ];

  return (
    <section className="py-16 bg-[#1f2622] text-[#fcfbfa] border-y border-[#36423b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-2 font-brand">
            PAL HOTEL • AT A GLANCE
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif-luxury font-normal text-[#faf8f5]">
            Hotel Highlights
          </h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-3 sm:gap-4">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-[#2a332e] p-4 rounded-lg border border-[#3e4b43] flex flex-col items-center text-center justify-center hover:border-[#d4af37]/60 transition-colors"
            >
              <div className="text-[#d4af37] mb-2">
                {item.icon}
              </div>
              <div className="text-xs font-bold text-[#faf8f5] leading-tight">
                {item.label}
              </div>
              <div className="text-[10px] text-[#b8afa0] mt-0.5">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

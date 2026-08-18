import React from 'react';
import { HOTEL_INFO } from '../data/hotelData';
import { HotelImage } from './HotelImage';
import { Sparkles, MapPin, HeartHandshake, Mountain, Utensils, BedDouble, ShieldCheck } from 'lucide-react';

interface AboutSectionProps {
  onOpenEnquiry: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#fcfbfa] border-b border-[#ece6dc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Authentic Hotel Photograph Framing */}
          <div className="lg:col-span-6 relative">
            {/* Main Photograph Frame */}
            <div className="relative rounded-lg overflow-hidden shadow-md border border-[#e2d8c9] bg-white p-2">
              <HotelImage
                imageKey="entrance-patio"
                alt="Courtyard entrance and outdoor cafe patio at Pal Hotel Leh"
                aspectRatio="4/3"
                className="rounded-md w-full"
              />
              
              {/* Authentic Photo Caption */}
              <div className="pt-3 pb-1 px-2 flex justify-between items-center text-xs text-[#716757]">
                <span className="font-medium text-[#413a2f]">Courtyard Patio & Traditional Facade</span>
                <span className="text-[#8c806f]">Upper Tukcha Road, Leh</span>
              </div>
            </div>

            {/* Overlapping Trust Stamp */}
            <div className="absolute -bottom-6 -right-3 sm:-bottom-8 sm:-right-4 bg-[#1f2622] text-[#faf8f5] p-4 sm:p-5 rounded-lg shadow-xl border border-[#d4af37]/40 max-w-[210px]">
              <div className="flex items-center gap-1 text-[#d4af37] mb-1">
                <Sparkles className="w-4 h-4" />
                <span className="text-[11px] uppercase tracking-wider font-bold">4.9 / 5 Rated</span>
              </div>
              <div className="text-xl sm:text-2xl font-bold font-serif-luxury text-[#eed994]">
                2,010+
              </div>
              <div className="text-[11px] text-[#c9bfad] leading-tight">
                Guest reviews praising hospitality and cleanliness
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-6 lg:pl-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f2ecdf] text-[#6d5622] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#e0d4c1]">
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>Hospitality In Ladakh</span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1e2429] mb-6 leading-tight">
              A Warm Welcome to Leh
            </h2>

            <p className="text-base sm:text-lg text-[#4a4336] leading-relaxed mb-6">
              Pal Hotel offers a comfortable and welcoming stay in Leh, combining convenient access to the town center with the genuine warmth of Ladakhi hospitality.
            </p>

            <p className="text-sm sm:text-base text-[#5c5446] leading-relaxed mb-8">
              Nestled along peaceful Upper Tukcha Road, our 4-star hotel provides the ideal balance: a tranquil Himalayan mountain setting just an easy 5-minute stroll from Leh Main Market. Guests enjoy clean and cozy heated rooms, breathtaking mountain vistas, attentive courteous service, and wholesome dining throughout their stay.
            </p>

            {/* Core Experience Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 mb-8">
              <div className="flex items-start gap-3 p-3.5 rounded-md bg-[#f6f2ea] border border-[#e8dfcf]">
                <BedDouble className="w-5 h-5 text-[#8a6828] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#2b251b]">Comfortable Heated Rooms</h4>
                  <p className="text-xs text-[#6e6352] mt-0.5">Cozy beds, room heating & 24/7 hot water</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-md bg-[#f6f2ea] border border-[#e8dfcf]">
                <Mountain className="w-5 h-5 text-[#8a6828] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#2b251b]">Mountain Views</h4>
                  <p className="text-xs text-[#6e6352] mt-0.5">Sweeping vistas of Himalayan peaks</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-md bg-[#f6f2ea] border border-[#e8dfcf]">
                <MapPin className="w-5 h-5 text-[#8a6828] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#2b251b]">Convenient Location</h4>
                  <p className="text-xs text-[#6e6352] mt-0.5">Approx. 5 minutes walk to Main Market</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-md bg-[#f6f2ea] border border-[#e8dfcf]">
                <Utensils className="w-5 h-5 text-[#8a6828] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#2b251b]">Delicious & Varied Food</h4>
                  <p className="text-xs text-[#6e6352] mt-0.5">South Indian, Jain & traditional choices</p>
                </div>
              </div>
            </div>

            {/* Direct Interaction Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenEnquiry}
                id="about-plan-stay-btn"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-xs uppercase tracking-wider font-bold bg-[#1e2429] text-white hover:bg-[#353f38] transition-colors shadow-sm"
              >
                <span>Plan Your Stay</span>
              </button>

              <a
                href={HOTEL_INFO.callLink}
                id="about-call-link"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md text-xs font-semibold text-[#322a1e] border border-[#cfc3af] hover:bg-[#f0eae0] transition-colors"
              >
                <span>Call {HOTEL_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

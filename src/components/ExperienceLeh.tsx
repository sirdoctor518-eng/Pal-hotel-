import React from 'react';
import { HOTEL_INFO } from '../data/hotelData';
import { HotelImage } from './HotelImage';
import { MapPin, Navigation, Footprints, Clock, ArrowRight, ExternalLink } from 'lucide-react';

interface ExperienceLehProps {
  onOpenEnquiry: () => void;
}

export const ExperienceLeh: React.FC<ExperienceLehProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="experience" className="py-20 lg:py-28 bg-[#fcfbfa] border-b border-[#ece6dc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text Information Column */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f2ecdf] text-[#6d5622] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#e0d4c1]">
              <Footprints className="w-3.5 h-3.5" />
              <span>Effortless Town Access</span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1e2429] mb-6 leading-tight">
              Stay Close to the Heart of Leh
            </h2>

            <p className="text-base sm:text-lg text-[#4a4336] leading-relaxed mb-6 font-medium">
              "Located on Upper Tukcha Road, Pal Hotel offers convenient access to Leh Main Market, making it easy for guests to explore the area on foot."
            </p>

            <p className="text-sm sm:text-base text-[#5c5446] leading-relaxed mb-8">
              Upper Tukcha Road provides a peaceful neighborhood setting away from heavy traffic noise, yet remains just a leisurely stroll from the town's vibrant bazaars, cafes, handicraft emporiums, and cultural center.
            </p>

            {/* Key Distance Callout Card */}
            <div className="p-6 rounded-lg bg-[#f7f4ee] border border-[#e0d5c3] mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#8a6828] text-[#faf8f5] flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider font-bold text-[#8a6828]">
                    Walking Distance Highlight
                  </div>
                  <div className="text-lg sm:text-xl font-bold font-serif-luxury text-[#231d14] mt-0.5">
                    Leh Main Market
                  </div>
                  <p className="text-xs sm:text-sm text-[#5d5445] mt-1 font-medium">
                    Approximately 5 minutes away on foot
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={HOTEL_INFO.mapsSearchLink}
                target="_blank"
                rel="noreferrer noopener"
                id="experience-get-directions-btn"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-xs uppercase tracking-wider font-bold bg-[#1e2429] text-white hover:bg-[#343e37] transition-colors shadow-sm"
              >
                <Navigation className="w-4 h-4 text-[#d4af37]" />
                <span>Open in Google Maps</span>
              </a>

              <button
                onClick={onOpenEnquiry}
                id="experience-enquire-btn"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md text-xs font-semibold text-[#2f271d] border border-[#cfc3af] hover:bg-[#f3ede3] transition-colors"
              >
                <span>Enquire For Your Travel Dates</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Location Focus */}
          <div className="lg:col-span-6">
            <div className="relative rounded-lg overflow-hidden border border-[#ded4c3] bg-white p-2 shadow-md">
              <HotelImage
                imageKey="exterior-facade"
                alt="Pal Hotel nestled peacefully on Upper Tukcha Road in Leh"
                aspectRatio="4/3"
                className="rounded-md w-full"
              />

              <div className="p-4 bg-[#fbfaf8] border-t border-[#eee7dc] mt-2 rounded-md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-[#5e5343]">
                    <MapPin className="w-4 h-4 text-[#8a6828]" />
                    <span className="font-semibold text-[#292218]">Upper Tukcha Road, Leh 194101</span>
                  </div>
                  <span className="text-[11px] font-bold text-[#8a6828] bg-[#f1ebd9] px-2 py-0.5 rounded">
                    ~5 Min Walk to Market
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

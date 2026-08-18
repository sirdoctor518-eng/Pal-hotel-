import React from 'react';
import { HOTEL_INFO } from '../data/hotelData';
import { MapPin, Phone, Navigation, Clock, Compass, ExternalLink } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-20 lg:py-28 bg-[#f6f2ea] border-b border-[#e5dcce]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Location Information Card */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ebdcb9] text-[#5e491a] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#dac8a2]">
              <MapPin className="w-3.5 h-3.5" />
              <span>Prime Location</span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-normal text-[#1e2429] mb-4">
              Find Pal Hotel
            </h2>

            <p className="text-sm sm:text-base text-[#554d3f] leading-relaxed mb-6">
              Located on tranquil Upper Tukcha Road in Leh, Ladakh. Our location offers peaceful mountain surroundings while keeping you minutes away from the main hub.
            </p>

            {/* Address & Details Box */}
            <div className="bg-[#fcfbfa] p-6 rounded-lg border border-[#e0d6c5] space-y-4 mb-8">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-md bg-[#f4eee2] text-[#8a6828] flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-[#8a6828]">Hotel Address</h4>
                  <p className="text-base font-bold text-[#221c13] mt-0.5">Pal Hotel</p>
                  <p className="text-xs sm:text-sm text-[#5d5343] mt-0.5 leading-relaxed">
                    {HOTEL_INFO.address}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#f0eae0] flex items-start gap-3.5">
                <div className="p-2.5 rounded-md bg-[#f4eee2] text-[#8a6828] flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-[#8a6828]">Direct Contact</h4>
                  <p className="text-base font-bold text-[#221c13] mt-0.5">{HOTEL_INFO.phone}</p>
                  <p className="text-xs text-[#6e6453]">Front Desk & Reservations</p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#f0eae0] flex items-start gap-3.5">
                <div className="p-2.5 rounded-md bg-[#f4eee2] text-[#8a6828] flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-[#8a6828]">Location Benefit</h4>
                  <p className="text-xs sm:text-sm font-bold text-[#221c13] mt-0.5">
                    Approximately a 5-minute walk from Leh Main Market
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
                id="location-get-directions-btn"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-xs uppercase tracking-wider font-bold bg-[#1e2429] text-white hover:bg-[#343e37] transition-colors shadow-sm"
              >
                <Navigation className="w-4 h-4 text-[#d4af37]" />
                <span>Get Directions</span>
              </a>

              <a
                href={HOTEL_INFO.callLink}
                id="location-call-btn"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md text-xs font-semibold text-[#2f271d] border border-[#cfc3af] bg-white hover:bg-[#f3ede3] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#8a6828]" />
                <span>Call Hotel</span>
              </a>
            </div>
          </div>

          {/* Interactive Visual Map Card */}
          <div className="lg:col-span-7">
            <div className="rounded-lg overflow-hidden border border-[#ded4c3] bg-white shadow-md">
              {/* Map Header */}
              <div className="bg-[#242b27] px-6 py-4 text-white flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Compass className="w-5 h-5 text-[#d4af37]" />
                  <span className="font-serif-luxury text-base font-semibold">Tukcha, Leh Map Overview</span>
                </div>
                <span className="text-xs bg-[#343e38] text-[#eed994] px-2.5 py-1 rounded">
                  Leh, Ladakh 194101
                </span>
              </div>

              {/* Styled Map Graphic Canvas */}
              <div className="relative h-[340px] sm:h-[380px] bg-[#e6dfd3] flex items-center justify-center p-6 overflow-hidden">
                {/* Decorative Map Grid & Contours */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#8a6828_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(135deg,rgba(255,255,255,0.4)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.4)_50%,rgba(255,255,255,0.4)_75%,transparent_75%)] [background-size:60px_60px] opacity-10" />

                {/* Road Line Simulation */}
                <svg className="absolute inset-0 w-full h-full text-[#c9bea9] opacity-60" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 50 300 Q 200 220 300 200 T 550 100" fill="none" stroke="currentColor" strokeWidth="12" strokeLinecap="round" />
                  <path d="M 300 200 L 450 320" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
                </svg>

                {/* Pal Hotel Marker Pin */}
                <div className="relative z-10 flex flex-col items-center animate-bounce duration-1000">
                  <div className="p-3 rounded-full bg-[#1e2429] text-[#d4af37] shadow-xl border-2 border-[#d4af37]">
                    <MapPin className="w-7 h-7 fill-[#d4af37]" />
                  </div>
                  <div className="mt-2 bg-[#1e2429] text-white px-3.5 py-1.5 rounded-md text-xs font-bold shadow-lg border border-[#3e4842] flex items-center gap-1.5 whitespace-nowrap">
                    <span>PAL HOTEL</span>
                    <span className="text-[#d4af37] text-[10px]">★ 4.9</span>
                  </div>
                  <div className="text-[11px] font-semibold text-[#544630] bg-[#fcfbfa]/90 px-2 py-0.5 rounded shadow-sm mt-1">
                    Upper Tukcha Road
                  </div>
                </div>

                {/* Leh Main Market Reference Node */}
                <div className="absolute top-12 right-12 bg-white/95 p-3 rounded-md border border-[#d6cbb7] shadow-md text-xs max-w-[180px]">
                  <div className="font-bold text-[#231e17] flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#8a6828]" />
                    Leh Main Market
                  </div>
                  <div className="text-[11px] text-[#716654] mt-1">
                    ~5 minute gentle walk
                  </div>
                </div>

                {/* Map Bottom Bar */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-md border border-[#d8cdba] flex flex-wrap items-center justify-between gap-2 text-xs">
                  <span className="text-[#594e3e]">
                    Upper Tukcha Road • 5 min to Main Market
                  </span>
                  <a
                    href={HOTEL_INFO.mapsSearchLink}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1 font-bold text-[#8a6828] hover:underline"
                  >
                    <span>Open in Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

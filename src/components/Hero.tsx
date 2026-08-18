import React from 'react';
import { HOTEL_INFO } from '../data/hotelData';
import { Star, ShieldCheck, MapPin, Calendar, ArrowRight, Eye, Phone } from 'lucide-react';
import { HotelImage } from './HotelImage';

interface HeroProps {
  onOpenEnquiry: () => void;
  onExploreRooms: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry, onExploreRooms }) => {
  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col justify-between overflow-hidden bg-[#161a18]">
      {/* Background Photography Container */}
      <div className="absolute inset-0 z-0">
        <HotelImage
          imageKey="exterior-facade"
          alt="Pal Hotel exterior facade in Leh Ladakh with traditional wooden woodwork"
          className="w-full h-full object-cover"
        />
        {/* Refined gradient overlay for readability and Himalayan aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1210]/90 via-[#0d1210]/70 to-[#0d1210]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1210] via-transparent to-black/30" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-12 w-full my-auto">
        <div className="max-w-3xl">
          {/* Hotel Category Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#242b27]/85 border border-[#d4af37]/40 text-[#eed994] mb-6 backdrop-blur-sm shadow-sm">
            <span className="flex text-[#d4af37]">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#d4af37]" />
              ))}
            </span>
            <span className="text-xs font-semibold tracking-wider uppercase">
              {HOTEL_INFO.category} • Leh, Ladakh
            </span>
          </div>

          {/* Primary Hotel Title */}
          <h1 className="font-brand text-4xl sm:text-6xl lg:text-7xl font-bold text-[#faf8f5] tracking-tight leading-[1.08] mb-4 drop-shadow-sm">
            PAL HOTEL
          </h1>

          {/* Tagline */}
          <p className="font-serif-luxury text-xl sm:text-2xl lg:text-3xl text-[#e8ded1] font-normal italic mb-6 leading-snug">
            {HOTEL_INFO.tagline}
          </p>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-[#d3cbbe] font-normal leading-relaxed max-w-2xl mb-8">
            "{HOTEL_INFO.heroDescription}"
          </p>

          {/* Prominent Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <button
              onClick={onOpenEnquiry}
              id="hero-check-availability-btn"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-md text-sm font-semibold tracking-wider uppercase bg-[#d4af37] hover:bg-[#c49e29] text-[#141816] active:scale-95 transition-all shadow-lg hover:shadow-[#d4af37]/20"
            >
              <Calendar className="w-4 h-4" />
              <span>Check Availability</span>
            </button>

            <button
              onClick={onExploreRooms}
              id="hero-explore-rooms-btn"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-md text-sm font-semibold tracking-wider uppercase text-[#faf8f5] bg-[#242c27]/80 hover:bg-[#2e3731] border border-[#7d705c]/60 active:scale-95 transition-all backdrop-blur-sm"
            >
              <Eye className="w-4 h-4 text-[#d4af37]" />
              <span>Explore Rooms</span>
            </button>

            <a
              href={HOTEL_INFO.callLink}
              id="hero-quick-call-btn"
              className="sm:hidden inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md text-xs font-semibold text-[#eed994] border border-[#eed994]/40 bg-[#161a18]/70"
            >
              <Phone className="w-4 h-4 text-[#d4af37]" />
              <span>Call: {HOTEL_INFO.phone}</span>
            </a>
          </div>

          {/* Trust / Rating Micro-Section */}
          <div className="pt-6 border-t border-[#464033]/60 flex flex-wrap items-center gap-6 sm:gap-10 text-[#f5f1e8]">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-[#27302b]/90 border border-[#d4af37]/40 text-[#d4af37] font-bold text-lg">
                4.9
              </div>
              <div>
                <div className="flex text-[#d4af37] gap-0.5 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#d4af37]" />
                  ))}
                </div>
                <div className="text-xs text-[#cfc5b4] font-medium tracking-wide">
                  {HOTEL_INFO.reviewsCount} Verified Reviews
                </div>
              </div>
            </div>

            <div className="h-8 w-px bg-[#464033]/70 hidden sm:block" />

            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#ddd4c5]">
              <MapPin className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
              <span>5-Min Walk to Leh Main Market</span>
            </div>

            <div className="h-8 w-px bg-[#464033]/70 hidden md:block" />

            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#ddd4c5]">
              <ShieldCheck className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
              <span>24/7 Hot Water & Heated Rooms</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Bottom Visual Bar */}
      <div className="relative z-10 bg-[#121614]/90 backdrop-blur-md border-t border-[#313b34] py-3.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs text-[#c8bfb0]">
          <span className="font-medium text-[#eed994]">
            📍 Tukcha, Upper Tukcha Road, Leh, Ladakh 194101
          </span>
          <span className="hidden sm:inline text-neutral-400">
            • 4-Star Mountain Hospitality • Authentic Ladakhi Atmosphere
          </span>
          <span className="text-[#e2dacd] font-semibold">
            Direct Hotel Contact: {HOTEL_INFO.phone}
          </span>
        </div>
      </div>
    </section>
  );
};

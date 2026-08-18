import React from 'react';
import { HOTEL_INFO } from '../data/hotelData';
import { Calendar, Phone, MessageSquare, Star, Sparkles, MapPin } from 'lucide-react';

interface BookingCTAProps {
  onOpenEnquiry: () => void;
}

export const BookingCTA: React.FC<BookingCTAProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#181d1a] text-[#fcfbfa] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8a6828]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#29322c] text-[#eed994] text-xs font-semibold uppercase tracking-wider mb-6 border border-[#d4af37]/30">
          <Star className="w-3.5 h-3.5 fill-[#d4af37]" />
          <span>Pal Hotel, Leh • 4.9 Rating</span>
        </div>

        <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-normal text-[#faf8f5] mb-6 leading-tight">
          Plan Your Stay in Leh
        </h2>

        <p className="text-base sm:text-xl text-[#d4cbbe] max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
          Experience comfortable accommodation, warm hospitality and the beauty of Leh from a convenient location.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-12">
          <button
            onClick={onOpenEnquiry}
            id="cta-check-availability-btn"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-md text-sm font-semibold tracking-wider uppercase bg-[#d4af37] text-[#141816] hover:bg-[#c49e29] active:scale-95 transition-all shadow-xl hover:shadow-[#d4af37]/20"
          >
            <Calendar className="w-4 h-4" />
            <span>Check Availability</span>
          </button>

          <a
            href={HOTEL_INFO.callLink}
            id="cta-call-hotel-btn"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-md text-sm font-semibold tracking-wider uppercase text-[#faf8f5] bg-[#29332d] hover:bg-[#344039] border border-[#524939] active:scale-95 transition-all"
          >
            <Phone className="w-4 h-4 text-[#d4af37]" />
            <span>Contact Pal Hotel</span>
          </a>
        </div>

        {/* Contact Information Ribbon */}
        <div className="pt-8 border-t border-[#313c35] flex flex-wrap items-center justify-center gap-8 text-sm text-[#cfc5b4]">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-[#d4af37]" />
            <span className="font-semibold text-white">Direct Phone:</span>
            <a href={HOTEL_INFO.callLink} className="hover:text-[#eed994] transition-colors underline">
              {HOTEL_INFO.phone}
            </a>
          </div>

          <div className="hidden sm:inline text-neutral-600">•</div>

          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#d4af37]" />
            <span>Tukcha, Upper Tukcha Road, Leh, Ladakh 194101</span>
          </div>
        </div>
      </div>
    </section>
  );
};

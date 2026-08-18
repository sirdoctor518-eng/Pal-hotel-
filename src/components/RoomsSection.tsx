import React, { useState } from 'react';
import { ROOMS, HOTEL_INFO } from '../data/hotelData';
import { HotelImage } from './HotelImage';
import { Bed, Mountain, CheckCircle2, Calendar, Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import { RoomInfo } from '../types';

interface RoomsSectionProps {
  onOpenEnquiry: (roomTitle?: string) => void;
  onSelectPhoto?: (key: string) => void;
}

export const RoomsSection: React.FC<RoomsSectionProps> = ({ onOpenEnquiry, onSelectPhoto }) => {
  const [selectedRoom, setSelectedRoom] = useState<RoomInfo>(ROOMS[0]);

  return (
    <section id="rooms" className="py-20 lg:py-28 bg-[#fcfbfa] border-b border-[#ece6dc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f2ecdf] text-[#6d5622] text-xs font-semibold uppercase tracking-wider mb-3 border border-[#e0d4c1]">
              <Bed className="w-3.5 h-3.5" />
              <span>Accommodations</span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1e2429] mb-4">
              Comfortable Rooms
            </h2>
            <p className="text-base text-[#595042] leading-relaxed">
              Relax in clean, cozy and comfortable rooms with a welcoming atmosphere and beautiful surroundings in Leh.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenEnquiry()}
              id="rooms-header-enquire-btn"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-xs uppercase tracking-wider font-bold bg-[#1e2429] text-[#faf8f5] hover:bg-[#343d37] transition-all shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Enquire About Rooms</span>
            </button>
          </div>
        </div>

        {/* Room Showcase Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-14">
          {ROOMS.map((room) => (
            <div
              key={room.id}
              id={`room-card-${room.id}`}
              className="bg-[#f7f4ee] rounded-lg overflow-hidden border border-[#e2d8c9] hover:border-[#b8a381] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Room Photograph */}
                <div className="relative group overflow-hidden">
                  <HotelImage
                    imageKey={room.image}
                    alt={room.title}
                    aspectRatio="4/3"
                    className="w-full"
                    onClick={() => onSelectPhoto && onSelectPhoto(room.image)}
                  />
                  
                  {/* Subtle View Badge */}
                  <div className="absolute top-3 left-3 bg-[#1e2422]/85 backdrop-blur-sm text-[#eed994] px-2.5 py-1 rounded text-[11px] font-medium flex items-center gap-1 border border-[#d4af37]/30">
                    <Mountain className="w-3 h-3 text-[#d4af37]" />
                    <span>{room.view}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="font-serif-luxury text-xl font-bold text-[#1f1911] mb-2.5 leading-snug">
                    {room.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5d5445] leading-relaxed mb-5">
                    {room.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 pt-2 border-t border-[#e8dfcf] mb-6">
                    {room.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#41392d]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#8a6828] flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="px-6 pb-6 pt-2">
                <button
                  onClick={() => onOpenEnquiry(room.title)}
                  id={`enquire-btn-${room.id}`}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-md text-xs uppercase tracking-wider font-bold bg-[#1e2429] text-white hover:bg-[#8a6828] transition-colors"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Enquire About This Room</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Room Comfort & Amenities Assurance Strip */}
        <div className="bg-[#f0ebe0] rounded-lg p-6 sm:p-8 border border-[#dfd5c3] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#e3d7bf] flex items-center justify-center text-[#6e5320] flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#272118] font-serif-luxury">
                Every Room Includes 24/7 Hot Water & Heating
              </h4>
              <p className="text-xs sm:text-sm text-[#615747] mt-0.5">
                Enjoy reliable warm comfort, ensuite bathrooms, fresh linens, and high-speed Wi-Fi throughout your stay.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <a
              href={HOTEL_INFO.callLink}
              id="room-strip-call-btn"
              className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md text-xs font-bold text-[#2a241b] border border-[#bfae95] bg-[#f8f5ee] hover:bg-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#8a6828]" />
              <span>Call: {HOTEL_INFO.phone}</span>
            </a>

            <button
              onClick={() => onOpenEnquiry()}
              id="room-strip-enquire-btn"
              className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md text-xs uppercase tracking-wider font-bold bg-[#1e2429] text-white hover:bg-[#38423c] transition-colors"
            >
              <span>Check Dates</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HotelHighlights } from './components/HotelHighlights';
import { AboutSection } from './components/AboutSection';
import { WhyStayWithUs } from './components/WhyStayWithUs';
import { RoomsSection } from './components/RoomsSection';
import { DiningSection } from './components/DiningSection';
import { ExperienceLeh } from './components/ExperienceLeh';
import { ReviewsSection } from './components/ReviewsSection';
import { GallerySection } from './components/GallerySection';
import { LocationSection } from './components/LocationSection';
import { BookingCTA } from './components/BookingCTA';
import { Footer } from './components/Footer';
import { EnquiryModal } from './components/EnquiryModal';
import { PhotoManagerBar } from './components/PhotoManagerBar';
import { HOTEL_INFO } from './data/hotelData';
import { Phone, Calendar } from 'lucide-react';

export default function App() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [selectedRoomForEnquiry, setSelectedRoomForEnquiry] = useState<string>('');

  const handleOpenEnquiry = (roomTitle?: string) => {
    if (roomTitle) {
      setSelectedRoomForEnquiry(roomTitle);
    } else {
      setSelectedRoomForEnquiry('');
    }
    setIsEnquiryOpen(true);
  };

  const handleCloseEnquiry = () => {
    setIsEnquiryOpen(false);
  };

  const handleExploreRooms = () => {
    const roomsSection = document.getElementById('rooms');
    if (roomsSection) {
      const navHeight = 80;
      const elementPosition = roomsSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fcfbfa] text-[#1e2429] selection:bg-[#d4af37]/30 selection:text-[#141816]">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* Main Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onOpenEnquiry={() => handleOpenEnquiry()}
          onExploreRooms={handleExploreRooms}
        />

        {/* Hotel Highlights At A Glance */}
        <HotelHighlights />

        {/* About Pal Hotel */}
        <AboutSection onOpenEnquiry={() => handleOpenEnquiry()} />

        {/* Why Stay With Us - Amenities & Comforts */}
        <WhyStayWithUs />

        {/* Rooms Showcase */}
        <RoomsSection onOpenEnquiry={handleOpenEnquiry} />

        {/* Dining & Hospitality */}
        <DiningSection />

        {/* Experience Leh - Location & 5-Min Walk to Market */}
        <ExperienceLeh onOpenEnquiry={() => handleOpenEnquiry()} />

        {/* Guest Reviews & Testimonials */}
        <ReviewsSection />

        {/* Full Authentic Photo Gallery */}
        <GallerySection />

        {/* Location & Map Section */}
        <LocationSection />

        {/* Final Booking & Contact CTA */}
        <BookingCTA onOpenEnquiry={() => handleOpenEnquiry()} />
      </main>

      {/* Luxury Footer */}
      <Footer />

      {/* Interactive Booking / Availability Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={handleCloseEnquiry}
        defaultRoom={selectedRoomForEnquiry}
      />

      {/* Floating Real Hotel Photos Manager */}
      <PhotoManagerBar />

      {/* Mobile Floating Quick-Action Bar */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-40 flex items-center gap-2 p-2 rounded-xl bg-[#1e2420]/95 backdrop-blur-md border border-[#414d45] shadow-2xl">
        <a
          href={HOTEL_INFO.callLink}
          id="mobile-sticky-call-btn"
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-xs font-bold text-[#faf8f5] bg-[#2d3730] border border-[#536057] active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 text-[#d4af37]" />
          <span>Call Hotel</span>
        </a>

        <button
          onClick={() => handleOpenEnquiry()}
          id="mobile-sticky-enquiry-btn"
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-xs uppercase tracking-wider font-bold text-[#121614] bg-[#d4af37] active:scale-95 transition-transform shadow-md"
        >
          <Calendar className="w-4 h-4" />
          <span>Enquire</span>
        </button>
      </div>
    </div>
  );
}

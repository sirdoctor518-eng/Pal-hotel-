import React from 'react';
import { HOTEL_INFO } from '../data/hotelData';
import { Star, MapPin, Phone, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Rooms', href: '#rooms' },
    { name: 'Dining', href: '#dining' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const navHeight = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-[#121614] text-[#cfc5b5] border-t border-[#29322c] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#263029]">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <span className="font-brand text-2xl font-bold tracking-[0.2em] text-[#faf8f5] block mb-2">
              PAL HOTEL
            </span>
            <p className="font-serif-luxury italic text-[#eed994] text-base mb-4">
              "Comfort • Hospitality • Leh"
            </p>
            <p className="text-xs sm:text-sm text-[#a49987] leading-relaxed max-w-sm">
              A premier 4-star hotel in Tukcha, Leh, Ladakh offering mountain views, heated comfortable rooms, authentic dining, and convenient walking access to Leh Main Market.
            </p>
            
            <div className="mt-4 flex items-center gap-1.5 text-xs text-[#eed994]">
              <div className="flex text-[#d4af37]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-[#d4af37]" />
                ))}
              </div>
              <span className="font-semibold">4.9 / 5</span>
              <span className="text-[#8c8273]">• 2,010 Reviews</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-widest font-bold text-[#faf8f5] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    id={`footer-link-${link.name.toLowerCase()}`}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-[#b3a897] hover:text-[#eed994] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4">
            <h4 className="text-xs uppercase tracking-widest font-bold text-[#faf8f5] mb-4">
              Hotel Information
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-[#b3a897]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-0.5" />
                <span>
                  {HOTEL_INFO.address}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                <a href={HOTEL_INFO.callLink} className="text-[#faf8f5] hover:text-[#eed994] font-medium transition-colors">
                  {HOTEL_INFO.phone}
                </a>
              </div>

              <div className="pt-2 text-xs text-[#8c8273]">
                Approx. 5-minute walk from Leh Main Market
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#807666]">
          <p>© 2026 Pal Hotel. All rights reserved.</p>
          <p className="text-[11px] text-[#6d6455]">
            4-Star Hotel • Upper Tukcha Road, Leh, Ladakh
          </p>
        </div>
      </div>
    </footer>
  );
};

import React, { useState, useEffect } from 'react';
import { HOTEL_INFO } from '../data/hotelData';
import { Phone, Menu, X, Star, Calendar, MapPin } from 'lucide-react';

interface NavbarProps {
  onOpenEnquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Rooms', href: '#rooms' },
    { name: 'Dining', href: '#dining' },
    { name: 'Experience Leh', href: '#experience' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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
    <>
      {/* Top micro-announcement banner */}
      <div className="bg-[#1f2421] text-[#e5dfd5] text-xs py-2 px-4 border-b border-[#333a36]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <span className="inline-flex items-center gap-1.5 text-[#d4af37] font-medium">
              <Star className="w-3.5 h-3.5 fill-[#d4af37]" />
              4.9 / 5 Rated Hotel
            </span>
            <span className="hidden md:inline text-neutral-400">•</span>
            <span className="hidden md:inline-flex items-center gap-1 text-[#d8d2c7]">
              <MapPin className="w-3.5 h-3.5 text-[#c49a45]" />
              5-Min Walk from Leh Main Market
            </span>
          </div>

          <div className="flex items-center gap-4 font-medium text-[13px]">
            <a
              href={HOTEL_INFO.callLink}
              id="navbar-top-phone"
              className="inline-flex items-center gap-1.5 text-[#f5f2ed] hover:text-[#e6be65] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>{HOTEL_INFO.formattedPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#fcfbfa]/95 backdrop-blur-md shadow-sm border-b border-[#e8e2d8] py-3'
            : 'bg-[#fcfbfa] border-b border-[#ede7dd] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            id="brand-logo"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex flex-col group cursor-pointer"
          >
            <span className="font-brand text-2xl sm:text-2xl tracking-[0.18em] font-bold text-[#1e2429] group-hover:text-[#8a6828] transition-colors">
              PAL HOTEL
            </span>
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#7a7060] font-medium">
              Leh • Ladakh
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[14px] font-medium text-[#423d33] hover:text-[#8a6828] transition-colors tracking-wide relative py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={HOTEL_INFO.callLink}
              id="nav-call-btn"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md text-xs font-semibold text-[#322c23] border border-[#d6cbba] hover:bg-[#f3ede3] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#8a6828]" />
              <span>Call Hotel</span>
            </a>

            <button
              onClick={onOpenEnquiry}
              id="nav-check-availability-btn"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-xs uppercase tracking-wider font-semibold bg-[#1e2429] text-[#fcfbfa] hover:bg-[#343d38] active:scale-95 transition-all shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Check Availability</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              aria-label="Toggle navigation menu"
              className="p-2 rounded-md text-[#2e2920] hover:bg-[#eee8dd] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-nav-drawer"
            className="lg:hidden bg-[#fcfbfa] border-b border-[#e2dacd] px-5 py-6 shadow-xl animate-in slide-in-from-top-2 duration-200"
          >
            <div className="flex flex-col space-y-3.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  id={`mobile-nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-base font-medium text-[#2d281f] hover:text-[#8a6828] py-1 border-b border-[#f1ece2]"
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-3 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenEnquiry();
                  }}
                  id="mobile-check-availability-btn"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-md text-sm font-semibold uppercase tracking-wider bg-[#1e2429] text-white"
                >
                  <Calendar className="w-4 h-4 text-[#d4af37]" />
                  <span>Check Availability</span>
                </button>

                <a
                  href={HOTEL_INFO.callLink}
                  id="mobile-call-btn"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-md text-sm font-semibold text-[#1e2429] border border-[#d6cbba] bg-[#f8f5ee]"
                >
                  <Phone className="w-4 h-4 text-[#8a6828]" />
                  <span>Call {HOTEL_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

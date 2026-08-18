import React, { useState } from 'react';
import { HOTEL_INFO, ROOMS } from '../data/hotelData';
import { X, Calendar, Phone, MessageSquare, CheckCircle2, Star, ShieldCheck, User } from 'lucide-react';
import { BookingFormData } from '../types';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultRoom?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  defaultRoom = '',
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    checkIn: '',
    checkOut: '',
    guests: 2,
    roomType: defaultRoom || 'Mountain View Comfortable Room',
    name: '',
    phone: '',
    specialRequests: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleWhatsAppEnquiry = () => {
    const text = `Hello Pal Hotel, I would like to check room availability:%0A%0A• Guest Name: ${encodeURIComponent(formData.name || 'Guest')}%0A• Contact: ${encodeURIComponent(formData.phone || 'Provided')}%0A• Room Type: ${encodeURIComponent(formData.roomType)}%0A• Check-In: ${formData.checkIn || 'To be decided'}%0A• Check-Out: ${formData.checkOut || 'To be decided'}%0A• Number of Guests: ${formData.guests}%0A• Special Notes: ${encodeURIComponent(formData.specialRequests || 'None')}`;
    window.open(`https://wa.me/919541925790?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-[#fcfbfa] w-full max-w-lg rounded-xl shadow-2xl border border-[#ded5c4] overflow-hidden relative max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#1e2420] text-white px-6 py-5 flex items-center justify-between border-b border-[#343e36]">
          <div>
            <div className="flex items-center gap-1.5 text-xs text-[#d4af37] font-semibold tracking-wider uppercase mb-0.5">
              <Star className="w-3.5 h-3.5 fill-[#d4af37]" />
              <span>4.9 / 5 • Pal Hotel, Leh</span>
            </div>
            <h3 className="font-serif-luxury text-xl sm:text-2xl font-normal text-[#faf8f5]">
              Check Room Availability
            </h3>
          </div>

          <button
            onClick={onClose}
            id="close-enquiry-modal-btn"
            className="p-2 rounded-full text-neutral-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-[#615747]">
                Submit your travel dates to connect directly with Pal Hotel's front desk in Leh, Ladakh.
              </p>

              {/* Dates */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-[#342d22] uppercase tracking-wider mb-1.5">
                    Check-in Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.checkIn}
                    onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-md border border-[#d6cbba] bg-[#faf8f5] text-sm text-[#272118] focus:outline-none focus:ring-1 focus:ring-[#8a6828]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#342d22] uppercase tracking-wider mb-1.5">
                    Check-out Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.checkOut}
                    onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-md border border-[#d6cbba] bg-[#faf8f5] text-sm text-[#272118] focus:outline-none focus:ring-1 focus:ring-[#8a6828]"
                  />
                </div>
              </div>

              {/* Guests & Room Choice */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-[#342d22] uppercase tracking-wider mb-1.5">
                    Guests
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                    className="w-full px-3.5 py-2.5 rounded-md border border-[#d6cbba] bg-[#faf8f5] text-sm text-[#272118] focus:outline-none focus:ring-1 focus:ring-[#8a6828]"
                  >
                    <option value={1}>1 Guest</option>
                    <option value={2}>2 Guests</option>
                    <option value={3}>3 Guests</option>
                    <option value={4}>4+ Guests / Family</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#342d22] uppercase tracking-wider mb-1.5">
                    Room Preference
                  </label>
                  <select
                    value={formData.roomType}
                    onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-md border border-[#d6cbba] bg-[#faf8f5] text-sm text-[#272118] focus:outline-none focus:ring-1 focus:ring-[#8a6828]"
                  >
                    <option value="Mountain View Comfortable Room">Mountain View Room</option>
                    <option value="Comfortable King Bedroom">Comfortable King Bedroom</option>
                    <option value="Warm & Cozy Guest Room">Warm & Cozy Guest Room</option>
                    <option value="Any Available Room">Any Available Room</option>
                  </select>
                </div>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-[#342d22] uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-md border border-[#d6cbba] bg-[#faf8f5] text-sm text-[#272118] focus:outline-none focus:ring-1 focus:ring-[#8a6828]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#342d22] uppercase tracking-wider mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-md border border-[#d6cbba] bg-[#faf8f5] text-sm text-[#272118] focus:outline-none focus:ring-1 focus:ring-[#8a6828]"
                  />
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-xs font-bold text-[#342d22] uppercase tracking-wider mb-1.5">
                  Special Notes / Dietary (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g., South Indian or Jain meals preference, airport transfer inquiry..."
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-md border border-[#d6cbba] bg-[#faf8f5] text-xs text-[#272118] focus:outline-none focus:ring-1 focus:ring-[#8a6828]"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-3 space-y-2.5">
                <button
                  type="submit"
                  id="modal-submit-enquiry-btn"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-md text-xs uppercase tracking-wider font-bold bg-[#1e2420] text-white hover:bg-[#323d36] transition-colors"
                >
                  <Calendar className="w-4 h-4 text-[#d4af37]" />
                  <span>Send Enquiry to Pal Hotel</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppEnquiry}
                  id="modal-whatsapp-enquiry-btn"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-md text-xs uppercase tracking-wider font-bold bg-[#25D366] text-white hover:bg-[#20b858] transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enquire via WhatsApp</span>
                </button>
              </div>

              {/* Direct call footnote */}
              <div className="text-center pt-2">
                <a
                  href={HOTEL_INFO.callLink}
                  className="inline-flex items-center gap-1.5 text-xs text-[#6e5522] font-semibold hover:underline"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Or call hotel directly at {HOTEL_INFO.phone}</span>
                </a>
              </div>
            </form>
          ) : (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 bg-[#e8f5e9] text-[#2e7d32] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h4 className="text-xl font-serif-luxury font-bold text-[#1f1a12]">
                Enquiry Ready!
              </h4>

              <p className="text-xs sm:text-sm text-[#5d5445] max-w-sm mx-auto leading-relaxed">
                Thank you, <strong>{formData.name || 'Guest'}</strong>. Your enquiry details for <strong>{formData.roomType}</strong> have been prepared.
              </p>

              <div className="bg-[#f5f1e8] p-4 rounded-lg text-left text-xs text-[#4e4434] space-y-1.5 border border-[#e4dac9]">
                <div><strong>Dates:</strong> {formData.checkIn || 'Dates flexible'} to {formData.checkOut || 'N/A'}</div>
                <div><strong>Guests:</strong> {formData.guests}</div>
                <div><strong>Contact:</strong> {formData.phone}</div>
                <div><strong>Hotel Phone:</strong> {HOTEL_INFO.phone}</div>
              </div>

              <div className="pt-3 flex flex-col gap-2">
                <button
                  onClick={handleWhatsAppEnquiry}
                  className="w-full py-3 rounded-md text-xs uppercase tracking-wider font-bold bg-[#25D366] text-white hover:bg-[#20b858]"
                >
                  Confirm & Open WhatsApp Chat
                </button>

                <a
                  href={HOTEL_INFO.callLink}
                  className="w-full py-3 rounded-md text-xs uppercase tracking-wider font-bold bg-[#1e2420] text-white hover:bg-[#343e36] flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#d4af37]" />
                  <span>Call {HOTEL_INFO.phone}</span>
                </a>

                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    onClose();
                  }}
                  className="text-xs text-[#786e5e] hover:underline pt-2"
                >
                  Close Window
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

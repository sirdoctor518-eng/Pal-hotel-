import React from 'react';
import { REVIEWS, HOTEL_INFO } from '../data/hotelData';
import { Star, CheckCircle, Quote, Sparkles, MessageSquare } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#f7f4ee] border-b border-[#e8dfcf]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Trust Score Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#eee6d7] text-[#6d5622] text-xs font-semibold uppercase tracking-wider mb-3 border border-[#ded2bd]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Guest Experiences</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1e2429] mb-6">
            Loved by Travelers in Leh
          </h2>

          {/* Large Rating Highlight Box */}
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 p-6 rounded-xl bg-[#fcfbfa] border border-[#e0d5c3] shadow-sm mb-4">
            <div className="flex items-center gap-3">
              <span className="font-serif-luxury text-4xl sm:text-5xl font-bold text-[#1e2429]">
                {HOTEL_INFO.rating}
              </span>
              <div className="text-left">
                <div className="flex text-[#d4af37] gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#d4af37]" />
                  ))}
                </div>
                <div className="text-xs font-semibold text-[#6e6453]">
                  Out of 5.0 Stars
                </div>
              </div>
            </div>

            <div className="h-10 w-px bg-[#e2d7c5] hidden sm:block" />

            <div className="text-center sm:text-left">
              <div className="text-xl sm:text-2xl font-bold font-serif-luxury text-[#231d14]">
                Based on {HOTEL_INFO.reviewsCount} Reviews
              </div>
              <div className="text-xs text-[#786e5c]">
                Verified guest ratings across Google Reviews & travel platforms
              </div>
            </div>
          </div>
        </div>

        {/* Review Highlights Filter Ribbon */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 text-xs font-medium text-[#5c5344]">
          <span className="text-[#8a6828] font-bold">Top Guest Praise:</span>
          {['Excellent Hospitality', 'Clean & Comfortable Rooms', 'Beautiful Mountain Views', 'Helpful Staff', 'Convenient Location Near Market', 'Delicious Food'].map((theme, i) => (
            <span key={i} className="px-3 py-1 rounded-full bg-[#f0eae0] border border-[#e0d6c4] text-[#4b4336]">
              ✓ {theme}
            </span>
          ))}
        </div>

        {/* Authentic Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              id={`review-card-${review.id}`}
              className="p-6 rounded-lg bg-[#fcfbfa] border border-[#e3dacb] hover:border-[#bda784] hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Review Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-[#241e15] font-serif-luxury">
                        {review.author}
                      </span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#ebdcb9] text-[#5e491a] font-medium">
                        Verified
                      </span>
                    </div>
                    <div className="text-[11px] text-[#867b69] mt-0.5">
                      {review.timeAgo} • {review.tag}
                    </div>
                  </div>

                  <div className="flex text-[#d4af37] gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#d4af37]" />
                    ))}
                  </div>
                </div>

                {/* Highlight Quote */}
                <div className="text-xs font-bold text-[#8a6828] mb-2 font-serif-luxury">
                  "{review.highlight}"
                </div>

                {/* Comment Body */}
                <p className="text-xs sm:text-sm text-[#544b3d] leading-relaxed">
                  "{review.comment}"
                </p>
              </div>

              {/* Bottom Subtle Tag */}
              <div className="pt-4 mt-4 border-t border-[#f2ece2] flex items-center justify-between text-[11px] text-[#887e6d]">
                <span>Pal Hotel, Leh</span>
                <span className="flex items-center gap-1 text-[#6b5526] font-medium">
                  <CheckCircle className="w-3 h-3 text-[#8a6828]" /> 5.0 Star Stay
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

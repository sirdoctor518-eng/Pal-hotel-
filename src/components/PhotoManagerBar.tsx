import React, { useState } from 'react';
import { Camera, Upload, Check, RefreshCw, X, Image as ImageIcon, Eye } from 'lucide-react';
import { REAL_HOTEL_PHOTOS, setCustomImage } from './HotelImage';

export const PhotoManagerBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedKey, setSelectedKey] = useState<string>('exterior-facade');
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      if (dataUrl) {
        setCustomImage(selectedKey, dataUrl);
        setSuccessMsg(`Updated "${REAL_HOTEL_PHOTOS[selectedKey]?.label}" successfully!`);
        setTimeout(() => {
          setSuccessMsg(null);
          window.location.reload();
        }, 1200);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleResetAll = () => {
    Object.keys(REAL_HOTEL_PHOTOS).forEach((k) => {
      localStorage.removeItem(`pal_hotel_img_${k}`);
    });
    window.location.reload();
  };

  return (
    <div className="relative">
      {/* Discreet floating badge to open photo control */}
      <button
        onClick={() => setIsOpen(true)}
        id="open-photo-manager-btn"
        className="fixed bottom-20 right-4 z-40 bg-[#1e2420]/90 hover:bg-[#2c372f] text-[#eed994] border border-[#d4af37]/40 px-3.5 py-2 rounded-full text-xs font-semibold shadow-xl flex items-center gap-2 backdrop-blur-md transition-all active:scale-95"
      >
        <Camera className="w-4 h-4 text-[#d4af37]" />
        <span className="hidden sm:inline">Hotel Photographs (9)</span>
      </button>

      {/* Modal / Drawer for direct photo management */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div
            className="bg-[#fcfbfa] w-full max-w-2xl rounded-xl shadow-2xl border border-[#ded5c4] overflow-hidden max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-[#1e2420] text-white px-6 py-4 flex items-center justify-between border-b border-[#343e36]">
              <div>
                <h3 className="font-serif-luxury text-xl font-bold text-[#faf8f5]">
                  Authentic Pal Hotel Photographs
                </h3>
                <p className="text-xs text-[#eed994]">
                  9 verified real photos configured for Pal Hotel, Leh
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full text-neutral-300 hover:text-white hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              {successMsg && (
                <div className="p-3 bg-[#e8f5e9] text-[#2e7d32] border border-[#c8e6c9] rounded-md text-xs font-semibold flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  <span>{successMsg}</span>
                </div>
              )}

              <p className="text-xs text-[#5d5445] leading-relaxed">
                All 9 real photographs you provided are mapped directly into each section of the website without any AI generation or stock photography.
              </p>

              {/* Photo list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {Object.entries(REAL_HOTEL_PHOTOS).map(([key, config]) => (
                  <div
                    key={key}
                    onClick={() => setSelectedKey(key)}
                    className={`p-3.5 rounded-lg border text-left cursor-pointer transition-all ${
                      selectedKey === key
                        ? 'border-[#8a6828] bg-[#f7f2e7] shadow-sm'
                        : 'border-[#e2d8c9] bg-white hover:border-[#bfae95]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-[#231d15] font-serif-luxury">
                        {config.label}
                      </span>
                      {selectedKey === key && (
                        <span className="text-[10px] bg-[#8a6828] text-white px-2 py-0.5 rounded font-semibold">
                          Selected
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-[#6e6351] line-clamp-2">
                      {config.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Direct image upload box for selected scene */}
              <div className="p-4 rounded-lg bg-[#f5f0e6] border border-[#ded2bd]">
                <h4 className="text-xs font-bold text-[#292218] uppercase tracking-wider mb-2">
                  Upload / Swap Image for: "{REAL_HOTEL_PHOTOS[selectedKey]?.label}"
                </h4>
                <p className="text-xs text-[#635746] mb-3">
                  Select a photo from your computer/phone to instantly display it on the live site.
                </p>
                <label className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md text-xs uppercase tracking-wider font-bold bg-[#1e2420] text-white hover:bg-[#343e36] cursor-pointer shadow-sm">
                  <Upload className="w-4 h-4 text-[#d4af37]" />
                  <span>Choose Image File</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 bg-[#f0eae0] border-t border-[#dfd5c4] flex items-center justify-between">
              <button
                onClick={handleResetAll}
                className="text-xs text-[#8a6828] hover:underline flex items-center gap-1 font-semibold"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reset to Default Photo Map</span>
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="px-5 py-2 rounded-md text-xs font-bold uppercase tracking-wider bg-[#1e2420] text-white hover:bg-[#353f38]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

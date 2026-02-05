import React from 'react';
import { MapPin, Navigation, Globe, ThermometerSun } from 'lucide-react';

export function LocationBanner() {
  return (
    <div className="bg-white border-b border-gray-100 px-6 py-3">
      <div className="max-w-7xl mx-auto flex items-center gap-6 text-[11px] font-bold text-gray-500 uppercase tracking-widest">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-lg border border-gray-100">
          <MapPin className="w-3.5 h-3.5 text-green-600" />
          <span className="text-gray-900">Field A-12</span>
        </div>
      </div>
    </div>
  );
}

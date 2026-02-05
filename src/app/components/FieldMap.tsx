import React from 'react';
import { MapPin, Layers, Maximize2 } from 'lucide-react';

export function FieldMap() {
  return (
    <div data-node-id="field-map-container" className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm flex flex-col h-full">
      <div className="p-4 border-b border-gray-50 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-green-600" />
          <h3 className="font-semibold text-gray-900">Satellite View - Field A1</h3>
        </div>
      </div>
      <div className="relative flex-1 bg-gray-100 min-h-[400px]">
        <img src="https://images.unsplash.com/photo-1649441246954-388fb49cced9" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

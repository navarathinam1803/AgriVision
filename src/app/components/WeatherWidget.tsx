import React from 'react';
import { Cloud, Droplets, Wind, Thermometer, Bug, TriangleAlert } from 'lucide-react';

export function WeatherWidget({ language }: { language: 'en' | 'ta' | 'hi' }) {
  return (
    <div data-node-id="weather-widget" className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
      <h3 className="text-lg font-semibold mb-6">Current Weather</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-blue-50 rounded-xl"><p className="text-2xl font-bold">32°C</p></div>
        <div className="p-4 bg-cyan-50 rounded-xl"><p className="text-2xl font-bold">65%</p></div>
      </div>
    </div>
  );
}

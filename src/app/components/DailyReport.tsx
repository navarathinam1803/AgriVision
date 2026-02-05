import React from 'react';
import { Printer, Share2, Download, ChevronLeft, Calendar, MapPin, Leaf, Droplets, AlertTriangle, FileText, TrendingUp, LayoutGrid } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid } from 'recharts';

interface DailyReportProps {
  onBack: () => void;
  data: any[];
}

export function DailyReport({ onBack, data }: DailyReportProps) {
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  return (
    <div className="min-h-screen bg-white">
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex items-center justify-between print:hidden">
        <button onClick={onBack} className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-gray-900">
          <ChevronLeft className="w-4 h-4" /> Back to Dashboard
        </button>
        <button onClick={() => window.print()} className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-xl text-sm font-bold shadow-lg">
          <Printer className="w-4 h-4" /> Print Report
        </button>
      </div>
      <div className="max-w-4xl mx-auto p-12 space-y-12">
        <h1 className="text-4xl font-black">Field Health Summary</h1>
        <p className="text-gray-500">{today}</p>
        <div className="grid grid-cols-2 gap-8">
          <div className="p-6 rounded-3xl bg-green-50 border border-green-100">
            <h3 className="font-bold">NDVI: 0.82</h3>
          </div>
          <div className="p-6 rounded-3xl bg-blue-50 border border-blue-100">
            <h3 className="font-bold">Moisture: 68%</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

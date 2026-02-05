import React, { useState } from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  AreaChart, 
  Area 
} from 'recharts';
import { 
  Sprout, 
  Tractor, 
  Map as MapIcon, 
  Settings, 
  History, 
  ChevronRight,
  Zap,
  Leaf,
  MessageSquare,
  Phone
} from 'lucide-react';
import { Toaster } from 'sonner';
import { FieldMap } from '@/app/components/FieldMap';
import { WeatherWidget } from '@/app/components/WeatherWidget';
import { AlertSettings } from '@/app/components/AlertSettings';
import { LinearTasks } from '@/app/components/LinearTasks';
import { LocationBanner } from '@/app/components/LocationBanner';
import { DailyReport } from '@/app/components/DailyReport';

const healthData = [
  { day: 'Mon', ndvi: 0.65, water: 70 },
  { day: 'Tue', ndvi: 0.68, water: 65 },
  { day: 'Wed', ndvi: 0.72, water: 80 },
  { day: 'Thu', ndvi: 0.60, water: 55 },
  { day: 'Fri', ndvi: 0.55, water: 45 },
  { day: 'Sat', ndvi: 0.75, water: 90 },
  { day: 'Sun', ndvi: 0.80, water: 85 },
];

export default function App() {
  const [language, setLanguage] = useState<'en' | 'ta' | 'hi'>('en');
  const [view, setView] = useState<'dashboard' | 'report'>('dashboard');

  if (view === 'report') {
    return <DailyReport onBack={() => setView('dashboard')} data={healthData} />;
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Toaster position="top-right" richColors />
      <nav data-node-id="top-nav" className="sticky top-0 z-50 bg-white border-b border-gray-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-100">
              <Sprout className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">AgriVision AI</h1>
              <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Satellite Crop Intelligence</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
            <a href="#" className="text-green-600 flex items-center gap-2">
              <Zap className="w-4 h-4" /> Monitoring
            </a>
            <a href="#" className="hover:text-gray-900 flex items-center gap-2">
              <MapIcon className="w-4 h-4" /> Field Map
            </a>
            <a href="#" className="hover:text-gray-900 flex items-center gap-2">
              <History className="w-4 h-4" /> Alert History
            </a>
            <a href="#" className="hover:text-gray-900 flex items-center gap-2">
              <Tractor className="w-4 h-4" /> Fleet
            </a>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100">
              <Settings className="w-5 h-5" />
            </button>
            <div className="w-8 h-8 rounded-full bg-gray-200" />
          </div>
        </div>
      </nav>
      <LocationBanner />

      <main className="max-w-7xl mx-auto p-6 lg:p-10">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 space-y-8">
            <header data-node-id="dashboard-header" className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full mb-3 uppercase tracking-wider">
                  <Leaf className="w-3 h-3" /> Live Analysis
                </div>
                <h2 className="text-3xl font-extrabold text-gray-900">Crop Health Dashboard</h2>
                <p className="text-gray-500 mt-1">Real-time satellite detection for Field A-12</p>
              </div>
              <div className="flex gap-3">
                <button 
                  onClick={() => setView('report')}
                  className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-all flex items-center gap-2"
                >
                  Daily Report <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div data-node-id="ndvi-stat-card" className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">NDVI Score</p>
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-3xl font-black text-gray-900">0.82</h3>
                    <p className="text-xs text-green-600 font-medium flex items-center gap-1 mt-1">
                      Good Health <Leaf className="w-3 h-3" />
                    </p>
                  </div>
                  <div className="h-12 w-20">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={healthData.slice(-4)}>
                        <Area type="monotone" dataKey="ndvi" stroke="#16a34a" fill="#bbf7d0" fillOpacity={0.4} />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              <div data-node-id="moisture-stat-card" className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Moisture Level</p>
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-3xl font-black text-gray-900">68%</h3>
                    <p className="text-xs text-blue-600 font-medium flex items-center gap-1 mt-1">
                      Adequate <Zap className="w-3 h-3" />
                    </p>
                  </div>
                  <div className="h-12 w-20">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={healthData.slice(-4)}>
                        <Area type="monotone" dataKey="water" stroke="#2563eb" fill="#bfdbfe" fillOpacity={0.4} />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              <div data-node-id="pest-alert-card" className="bg-red-600 p-6 rounded-2xl shadow-lg shadow-red-100 text-white">
                <p className="text-xs font-bold text-red-200 uppercase tracking-widest mb-1">Pest Alert</p>
                <h3 className="text-2xl font-black">High Risk</h3>
                <p className="text-xs text-red-100 mt-2 leading-relaxed">
                  Infestation detected in NW Quadrant. Treatment recommended within 24h.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
               <FieldMap />
               <div data-node-id="health-trend-chart" className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Health Trend (7 Days)</h3>
                </div>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={healthData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                      <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#94a3b8'}} dy={10} />
                      <YAxis hide />
                      <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                      <Line type="monotone" dataKey="ndvi" stroke="#16a34a" strokeWidth={3} dot={{r: 4, fill: '#16a34a'}} />
                      <Line type="monotone" dataKey="water" stroke="#2563eb" strokeWidth={3} dot={{r: 4, fill: '#2563eb'}} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
               </div>
            </div>
          </div>

          <div className="w-full lg:w-[380px] space-y-8">
             <LinearTasks />
             <WeatherWidget language={language} />
             <AlertSettings language={language} setLanguage={setLanguage} />
          </div>
        </div>
      </main>
    </div>
  );
}

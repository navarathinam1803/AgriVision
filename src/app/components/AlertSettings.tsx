import React from 'react';
import { Phone, MessageSquare, Globe, Bell, Save } from 'lucide-react';

export function AlertSettings({ language, setLanguage }: { language: string, setLanguage: any }) {
  return (
    <div data-node-id="alert-settings" className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
      <h3 className="text-lg font-semibold mb-8">Alert Configuration</h3>
      <button className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold">Save Preferences</button>
    </div>
  );
}

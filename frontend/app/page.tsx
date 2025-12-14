import React from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
      <div className="bg-white border-b border-gray-200 px-8 py-4 flex justify-between items-center shadow-sm">
        <div className="font-bold text-xl flex gap-2 items-center text-orange-600"><Calendar /> MeetQueue</div>
        <div className="text-sm text-gray-500">Internal Booking System</div>
      </div>

      <div className="flex-1 p-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="md:col-span-1 space-y-4">
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="font-bold mb-4 text-gray-700">Quick Filters</h3>
            <div className="space-y-2 text-sm">
              <label className="flex items-center gap-2"><input type="checkbox" checked /> Video Enabled</label>
              <label className="flex items-center gap-2"><input type="checkbox" /> Whiteboard</label>
              <label className="flex items-center gap-2"><input type="checkbox" /> Capacity 10+</label>
            </div>
          </div>
        </div>

        {/* Room Grid */}
        <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition">
              <div className="h-24 bg-gray-200 relative">
                <span className={`absolute top-2 right-2 px-2 py-1 text-xs font-bold rounded ${i % 2 === 0 ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
                  {i % 2 === 0 ? 'Booked' : 'Available'}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">Conference Room 0{i}</h3>
                <div className="flex items-center gap-4 text-gray-500 text-xs mb-4">
                  <span className="flex items-center gap-1"><Users size={12}/> 8 Seats</span>
                  <span className="flex items-center gap-1"><MapPin size={12}/> Floor 2</span>
                </div>
                <button disabled={i % 2 === 0} className="w-full py-2 rounded text-sm font-semibold border border-gray-300 hover:bg-gray-50 disabled:opacity-50">
                  {i % 2 === 0 ? 'Occupied until 4pm' : 'Book Now'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

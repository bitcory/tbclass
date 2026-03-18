'use client';

import React from 'react';
import { Clock } from 'lucide-react';
import { timeSlots } from '../../data/bookingData';

export default function TimeSlotPicker({ selectedTime, onSelectTime }) {
  return (
    <div className="bg-gray-900/50 rounded-2xl p-6 sm:p-8 border border-gray-800">
      <h3 className="text-lg font-bold text-white mb-6">원하시는 시간을 선택해주세요</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {timeSlots.map((time) => {
          const selected = time === selectedTime;
          return (
            <button
              key={time}
              onClick={() => onSelectTime(time)}
              className={`flex items-center justify-center gap-2 py-4 rounded-xl font-medium transition-all duration-300 ${
                selected
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-900/30 scale-105'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <Clock className="w-4 h-4" />
              {time}
            </button>
          );
        })}
      </div>
    </div>
  );
}

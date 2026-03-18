'use client';

import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import { timeSlots } from '../../data/bookingData';

export default function TimeSlotPicker({ selectedDate, selectedTime, onSelectTime }) {
  const [bookedTimes, setBookedTimes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!selectedDate) return;
    const dateKey = `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, '0')}-${String(selectedDate.getDate()).padStart(2, '0')}`;

    setLoading(true);
    fetch(`/api/bookings?date=${dateKey}`)
      .then(res => res.json())
      .then(data => setBookedTimes(data.bookedTimes || []))
      .catch(() => setBookedTimes([]))
      .finally(() => setLoading(false));
  }, [selectedDate]);

  return (
    <div className="bg-gray-900/50 rounded-2xl p-6 sm:p-8 border border-gray-800">
      <h3 className="text-lg font-bold text-white mb-6">원하시는 시간을 선택해주세요</h3>
      {loading ? (
        <div className="text-center py-8 text-gray-400">시간 확인 중...</div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {timeSlots.map((time) => {
            const selected = time === selectedTime;
            const booked = bookedTimes.includes(time);
            return (
              <button
                key={time}
                onClick={() => !booked && onSelectTime(time)}
                disabled={booked}
                className={`flex items-center justify-center gap-2 py-4 rounded-xl font-medium transition-all duration-300 ${
                  booked
                    ? 'bg-gray-800/30 text-gray-600 cursor-not-allowed line-through'
                    : selected
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-900/30 scale-105'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <Clock className="w-4 h-4" />
                {time}
                {booked && <span className="text-xs">(마감)</span>}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

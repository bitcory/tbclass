'use client';

import React, { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const DAY_LABELS = ['일', '월', '화', '수', '목', '금', '토'];

export default function BookingCalendar({ selectedDate, onSelectDate }) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const calendarDays = useMemo(() => {
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    const days = [];
    // Fill empty cells before the 1st
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }
    for (let d = 1; d <= daysInMonth; d++) {
      days.push(new Date(currentYear, currentMonth, d));
    }
    return days;
  }, [currentMonth, currentYear]);

  const canGoPrev = currentYear > today.getFullYear() || (currentYear === today.getFullYear() && currentMonth > today.getMonth());

  const goToPrev = () => {
    if (!canGoPrev) return;
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const goToNext = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const isSameDay = (a, b) => {
    if (!a || !b) return false;
    return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
  };

  const isPast = (date) => date < today;
  const isToday = (date) => isSameDay(date, today);

  const monthLabel = `${currentYear}년 ${currentMonth + 1}월`;

  return (
    <div className="bg-gray-900/50 rounded-2xl p-6 sm:p-8 border border-gray-800">
      {/* Month navigation */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={goToPrev}
          disabled={!canGoPrev}
          className={`p-2 rounded-xl transition-colors ${
            canGoPrev ? 'hover:bg-gray-800 text-white' : 'text-gray-700 cursor-not-allowed'
          }`}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h3 className="text-lg font-bold text-white">{monthLabel}</h3>
        <button
          onClick={goToNext}
          className="p-2 rounded-xl hover:bg-gray-800 text-white transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Day labels */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {DAY_LABELS.map((label, i) => (
          <div
            key={label}
            className={`text-center text-sm font-medium py-2 ${
              i === 0 ? 'text-red-400' : i === 6 ? 'text-blue-400' : 'text-gray-500'
            }`}
          >
            {label}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1">
        {calendarDays.map((date, index) => {
          if (!date) {
            return <div key={`empty-${index}`} className="h-10 sm:h-12" />;
          }

          const dayOfWeek = date.getDay();
          const past = isPast(date);
          const todayMark = isToday(date);
          const selected = isSameDay(date, selectedDate);

          return (
            <button
              key={date.getTime()}
              disabled={past}
              onClick={() => onSelectDate(date)}
              className={`h-10 sm:h-12 rounded-xl text-sm font-medium transition-all duration-200 ${
                selected
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-900/30'
                  : past
                  ? 'text-gray-700 cursor-not-allowed'
                  : todayMark
                  ? 'border-2 border-orange-500 text-orange-400 hover:bg-orange-500/10'
                  : dayOfWeek === 0
                  ? 'text-red-400 hover:bg-gray-800'
                  : dayOfWeek === 6
                  ? 'text-blue-400 hover:bg-gray-800'
                  : 'text-gray-300 hover:bg-gray-800'
              }`}
            >
              {date.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
}

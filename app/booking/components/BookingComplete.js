'use client';

import React from 'react';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function BookingComplete({ plan, selectedDate, selectedTime }) {
  const formatDate = (date) => {
    const days = ['일', '월', '화', '수', '목', '금', '토'];
    return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 (${days[date.getDay()]})`;
  };

  return (
    <div className="text-center">
      <div className="animate-bounceIn mb-8">
        <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center shadow-xl shadow-orange-900/30">
          <CheckCircle className="w-12 h-12 text-white" />
        </div>
      </div>

      <div className="animate-fadeInUp">
        <h2 className="text-3xl font-bold text-white mb-3">예약이 완료되었습니다!</h2>
        <p className="text-gray-400 mb-8">확인 이메일이 발송될 예정입니다.</p>

        <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800 mb-8 text-left max-w-md mx-auto">
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-500">클래스</span>
              <span className="text-white font-medium">{plan.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">날짜</span>
              <span className="text-white font-medium">{formatDate(selectedDate)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">시간</span>
              <span className="text-white font-medium">{selectedTime}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-3.5 rounded-xl bg-gray-800 text-white font-semibold hover:bg-gray-700 transition-colors"
          >
            홈으로 돌아가기
          </Link>
          <Link
            href="/guide"
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold hover:opacity-90 transition-opacity shadow-lg shadow-orange-900/30"
          >
            가이드 보기
          </Link>
        </div>
      </div>
    </div>
  );
}

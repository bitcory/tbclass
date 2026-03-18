'use client';

import React, { useState } from 'react';
import { BookOpen, Calendar, Clock, User, Phone, Mail, Tag, X } from 'lucide-react';
import { getCoupon, parsePrice, formatPrice } from '../../data/bookingData';

export default function BookingConfirmation({ plan, selectedDate, selectedTime, contactInfo, onConfirm, emailSending }) {
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [couponError, setCouponError] = useState('');

  const formatDate = (date) => {
    const days = ['일', '월', '화', '수', '목', '금', '토'];
    return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 (${days[date.getDay()]})`;
  };

  const originalPrice = parsePrice(plan.price);
  const discountAmount = appliedCoupon ? Math.floor(originalPrice * appliedCoupon.discount / 100) : 0;
  const finalPrice = originalPrice - discountAmount;

  const handleApplyCoupon = () => {
    const trimmed = couponCode.trim();
    if (!trimmed) return;

    const coupon = getCoupon(trimmed);
    if (coupon) {
      setAppliedCoupon(coupon);
      setCouponError('');
    } else {
      setCouponError('유효하지 않은 쿠폰 코드입니다.');
      setAppliedCoupon(null);
    }
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
    setCouponCode('');
    setCouponError('');
  };

  const priceDisplay = appliedCoupon
    ? `${plan.name} — ${formatPrice(finalPrice)}`
    : `${plan.name} — ${plan.price}`;

  const items = [
    { icon: BookOpen, label: '클래스', value: priceDisplay },
    { icon: Calendar, label: '날짜', value: formatDate(selectedDate) },
    { icon: Clock, label: '시간', value: selectedTime },
    { icon: User, label: '이름', value: contactInfo.name },
    { icon: Phone, label: '전화번호', value: contactInfo.phone },
    { icon: Mail, label: '이메일', value: contactInfo.email },
  ];

  return (
    <div className="bg-gray-900/50 rounded-2xl p-6 sm:p-8 border border-gray-800">
      <h3 className="text-lg font-bold text-white mb-6">예약 정보를 확인해주세요</h3>
      <div className="space-y-4 mb-6">
        {items.map(({ icon: Icon, label, value }) => (
          <div
            key={label}
            className="flex items-center gap-4 p-4 rounded-xl bg-gray-800/50 border border-gray-700"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-orange-500/20 to-red-500/20 flex items-center justify-center">
              <Icon className="w-5 h-5 text-orange-400" />
            </div>
            <div>
              <p className="text-sm text-gray-500">{label}</p>
              <p className="text-white font-medium">{value}</p>
              {label === '클래스' && appliedCoupon && (
                <p className="text-sm text-gray-500 line-through">{plan.price}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Coupon Section */}
      <div className="mb-8 p-4 rounded-xl bg-gray-800/50 border border-gray-700">
        <div className="flex items-center gap-2 mb-3">
          <Tag className="w-4 h-4 text-orange-400" />
          <p className="text-sm font-medium text-white">쿠폰 할인</p>
        </div>

        {appliedCoupon ? (
          <div className="flex items-center justify-between p-3 rounded-lg bg-orange-500/10 border border-orange-500/30">
            <div>
              <p className="text-sm font-medium text-orange-400">{appliedCoupon.label}</p>
              <p className="text-xs text-gray-400 mt-0.5">
                -{formatPrice(discountAmount)} 할인 적용됨
              </p>
            </div>
            <button
              onClick={handleRemoveCoupon}
              className="w-7 h-7 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center transition-colors"
            >
              <X className="w-3.5 h-3.5 text-gray-300" />
            </button>
          </div>
        ) : (
          <>
            <div className="flex gap-2">
              <input
                type="text"
                value={couponCode}
                onChange={(e) => {
                  setCouponCode(e.target.value);
                  setCouponError('');
                }}
                onKeyDown={(e) => e.key === 'Enter' && handleApplyCoupon()}
                placeholder="쿠폰 코드를 입력하세요"
                className="flex-1 px-4 py-2.5 rounded-lg bg-gray-700/50 border border-gray-600 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-orange-500 transition-colors"
              />
              <button
                onClick={handleApplyCoupon}
                className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-medium hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                적용
              </button>
            </div>
            {couponError && (
              <p className="text-red-400 text-xs mt-2">{couponError}</p>
            )}
          </>
        )}
      </div>

      <button
        onClick={() => onConfirm({ appliedCoupon, finalPrice: formatPrice(finalPrice) })}
        disabled={emailSending}
        className="w-full py-4 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold hover:opacity-90 transition-opacity shadow-lg shadow-orange-900/30 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {emailSending ? '예약 처리 중...' : '예약 확정하기'}
      </button>
    </div>
  );
}

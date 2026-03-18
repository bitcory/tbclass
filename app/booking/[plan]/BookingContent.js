'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import StepIndicator from '../components/StepIndicator';
import BookingCalendar from '../components/BookingCalendar';
import TimeSlotPicker from '../components/TimeSlotPicker';
import ContactForm from '../components/ContactForm';
import BookingConfirmation from '../components/BookingConfirmation';
import BookingComplete from '../components/BookingComplete';
import { getPlan } from '../../data/bookingData';
import { ArrowLeft } from 'lucide-react';

export default function BookingContent({ plan: planSlug }) {
  const plan = getPlan(planSlug);

  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [contactInfo, setContactInfo] = useState({ name: '', phone: '', email: '' });

  // Invalid plan slug
  if (!plan) {
    return (
      <>
        <Header alwaysScrolled />
        <div className="min-h-screen bg-black flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-4">존재하지 않는 플랜입니다</h1>
            <p className="text-gray-400 mb-8">요금제 페이지에서 원하시는 플랜을 선택해주세요.</p>
            <Link
              href="/#pricing"
              className="inline-block px-8 py-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold hover:opacity-90 transition-opacity"
            >
              요금제 보기
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setCurrentStep(2);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setCurrentStep(3);
  };

  const handleContactSubmit = () => {
    setCurrentStep(4);
  };

  const [emailSending, setEmailSending] = useState(false);

  const formatDateStr = (date) => {
    const days = ['일', '월', '화', '수', '목', '금', '토'];
    return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 (${days[date.getDay()]})`;
  };

  const handleConfirm = async (couponInfo) => {
    setEmailSending(true);
    try {
      await fetch('/api/send-booking-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          plan: { name: plan.name, price: plan.price },
          date: formatDateStr(selectedDate),
          time: selectedTime,
          contact: contactInfo,
          coupon: couponInfo?.appliedCoupon || null,
          finalPrice: couponInfo?.finalPrice || plan.price,
        }),
      });
    } catch (e) {
      console.error('Email send failed:', e);
    }
    setEmailSending(false);
    setCurrentStep(5);
  };

  const goBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <>
      <Header alwaysScrolled />
      <div className="min-h-screen bg-black relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-40 left-20 w-96 h-96 bg-orange-900/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 right-20 w-96 h-96 bg-orange-900/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 pt-32 pb-20">
          {/* Plan title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">{plan.name} 예약</h1>
            <p className="text-gray-400">{plan.description}</p>
          </div>

          {/* Step indicator (hide on complete) */}
          {currentStep <= 4 && <StepIndicator currentStep={currentStep} />}

          {/* Back button */}
          {currentStep > 1 && currentStep <= 4 && (
            <button
              onClick={goBack}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              이전 단계
            </button>
          )}

          {/* Step content */}
          {currentStep === 1 && (
            <BookingCalendar selectedDate={selectedDate} onSelectDate={handleDateSelect} />
          )}

          {currentStep === 2 && (
            <TimeSlotPicker selectedTime={selectedTime} onSelectTime={handleTimeSelect} />
          )}

          {currentStep === 3 && (
            <ContactForm
              contactInfo={contactInfo}
              onChangeContact={setContactInfo}
              onSubmit={handleContactSubmit}
            />
          )}

          {currentStep === 4 && (
            <BookingConfirmation
              plan={plan}
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              contactInfo={contactInfo}
              onConfirm={handleConfirm}
              emailSending={emailSending}
            />
          )}

          {currentStep === 5 && (
            <BookingComplete
              plan={plan}
              selectedDate={selectedDate}
              selectedTime={selectedTime}
            />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

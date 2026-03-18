'use client';

import React from 'react';
import { Calendar, Clock, User, CheckCircle } from 'lucide-react';

const steps = [
  { label: '날짜 선택', icon: Calendar },
  { label: '시간 선택', icon: Clock },
  { label: '정보 입력', icon: User },
  { label: '예약 확인', icon: CheckCircle },
];

export default function StepIndicator({ currentStep }) {
  return (
    <div className="flex items-center justify-center mb-12">
      {steps.map((step, index) => {
        const Icon = step.icon;
        const stepNum = index + 1;
        const isActive = stepNum === currentStep;
        const isCompleted = stepNum < currentStep;

        return (
          <React.Fragment key={stepNum}>
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isCompleted
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white'
                    : isActive
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-900/30'
                    : 'bg-gray-800 text-gray-500'
                }`}
              >
                <Icon className="w-5 h-5" />
              </div>
              <span
                className={`mt-2 text-xs sm:text-sm font-medium transition-colors duration-300 ${
                  isActive || isCompleted ? 'text-orange-400' : 'text-gray-600'
                }`}
              >
                {step.label}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`w-8 sm:w-16 h-0.5 mx-1 sm:mx-2 mb-6 transition-colors duration-300 ${
                  isCompleted ? 'bg-gradient-to-r from-orange-500 to-red-500' : 'bg-gray-800'
                }`}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
